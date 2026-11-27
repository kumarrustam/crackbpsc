
"use client";
import React, { useState } from "react";
import { WeakChapterModule } from "./WeakAreasPro";
import { SOUNDS_10 } from "./WeakStudioData";
import { balanceAnswerPositions, format4BoxExplanation } from "./WeakStudioEngine";
import { WeakStudioEdit } from "./WeakStudioEdit";

export function WeakStudioManual(props: {
  tab: string; modules: WeakChapterModule[]; saveAll: (m: WeakChapterModule[]) => void; canDelete: boolean; canOpt5: boolean;
  activeSound: string; setActiveSound: (id: string) => void; customExams: string[]; setCustomExams: (e: string[]) => void;
  customSubjects: string[]; setCustomSubjects: (s: string[]) => void;
}) {
  const { tab, modules, saveAll, canDelete, activeSound, setActiveSound, customExams, setCustomExams, customSubjects, setCustomSubjects } = props;
  const [modId, setModId] = useState(modules.at(0)?.id || "mod_sangam");
  const [pyp, setPyp] = useState("PYP"); const [year, setYear] = useState("2025"); const [tags, setTags] = useState("BPSC, UPSC, JPSC");
  const [qHi, setQHi] = useState(""); const [oHi, setOHi] = useState(["", "", "", ""]); const [kpHi, setKpHi] = useState("");
  const [b1T, setB1T] = useState(""); const [b1P, setB1P] = useState(""); const [b2T, setB2T] = useState(""); const [b2P, setB2P] = useState(""); const [b3T, setB3T] = useState(""); const [b3P, setB3P] = useState("");
  const [bulkRaw, setBulkRaw] = useState(""); const [newEx, setNewEx] = useState(""); const [newSb, setNewSb] = useState("");
  const curMod = modules.find((m) => m.id === modId) || modules.at(0);

  if (tab === "EXAMS") return <div className="p-4 bg-white rounded-2xl border space-y-2 text-xs"><div className="flex gap-2"><input value={newEx} onChange={(e) => setNewEx(e.target.value)} placeholder="नई परीक्षा..." className="flex-1 p-2 border rounded" /><button type="button" onClick={() => { if (!newEx.trim()) return; const u = [...customExams, newEx.trim()]; setCustomExams(u); localStorage.setItem("cb_custom_weak_exams", JSON.stringify(u)); setNewEx(""); }} className="px-3 py-2 bg-[#0084FF] text-white rounded font-bold">जोड़ें</button></div><div className="flex gap-2"><input value={newSb} onChange={(e) => setNewSb(e.target.value)} placeholder="नया विषय..." className="flex-1 p-2 border rounded" /><button type="button" onClick={() => { if (!newSb.trim()) return; const u = [...customSubjects, newSb.trim()]; setCustomSubjects(u); localStorage.setItem("cb_custom_weak_subjects", JSON.stringify(u)); setNewSb(""); }} className="px-3 py-2 bg-[#0084FF] text-white rounded font-bold">जोड़ें</button></div></div>;
  if (tab === "SOUNDS") return <div className="grid grid-cols-2 gap-2 text-xs font-bold">{SOUNDS_10.map((s) => <button key={s.id} type="button" onClick={() => { setActiveSound(s.id); localStorage.setItem("cb_active_sound", s.id); }} className={"p-2.5 rounded-xl border text-left " + (activeSound === s.id ? "bg-[#0084FF] text-white" : "bg-white")}>{s.name}</button>)}</div>;

  return (
    <div className="p-4 bg-white rounded-2xl border space-y-2.5 text-xs">
      <select value={modId} onChange={(e) => setModId(e.target.value)} className="w-full p-2 border rounded-xl font-bold">{modules.map((m) => <option key={m.id} value={m.id}>{m.subject} ➔ {m.title}</option>)}</select>
      {tab === "MANUAL" && <div className="space-y-2"><div className="grid grid-cols-3 gap-1"><input value={pyp} onChange={(e) => setPyp(e.target.value)} className="p-1.5 border rounded" /><input value={year} onChange={(e) => setYear(e.target.value)} className="p-1.5 border rounded" /><input value={tags} onChange={(e) => setTags(e.target.value)} className="p-1.5 border rounded" /></div><textarea value={qHi} onChange={(e) => setQHi(e.target.value)} placeholder="प्रश्न..." className="w-full p-2 border rounded" /><div className="grid grid-cols-2 gap-1">{oHi.map((v, i) => <input key={i} value={v} onChange={(e) => { const c = [...oHi]; c[i] = e.target.value; setOHi(c); }} placeholder={`विकल्प ${["A", "B", "C", "D"][i]}`} className="p-1.5 border rounded" />)}</div><textarea value={kpHi} onChange={(e) => setKpHi(e.target.value)} placeholder="✅ सही उत्तर मुख्य बिंदु (100+ शब्द)..." className="w-full p-2 border rounded" /><input value={b1T} onChange={(e) => setB1T(e.target.value)} placeholder="📦 विकल्प 1 नाम" className="w-full p-1.5 border rounded" /><textarea value={b1P} onChange={(e) => setB1P(e.target.value)} placeholder="विकल्प 1 परीक्षा बिंदु..." className="w-full p-1.5 border rounded" /><input value={b2T} onChange={(e) => setB2T(e.target.value)} placeholder="📦 विकल्प 2 नाम" className="w-full p-1.5 border rounded" /><textarea value={b2P} onChange={(e) => setB2P(e.target.value)} placeholder="विकल्प 2 परीक्षा बिंदु..." className="w-full p-1.5 border rounded" /><input value={b3T} onChange={(e) => setB3T(e.target.value)} placeholder="📦 विकल्प 3 नाम" className="w-full p-1.5 border rounded" /><textarea value={b3P} onChange={(e) => setB3P(e.target.value)} placeholder="विकल्प 3 परीक्षा बिंदु..." className="w-full p-1.5 border rounded" /><button type="button" onClick={() => { const fullKp = format4BoxExplanation(kpHi, [{ title: b1T, points: b1P }, { title: b2T, points: b2P }, { title: b3T, points: b3P }]); const [fq] = balanceAnswerPositions([{ id: 1, pyp, year, examTags: tags, gotRightPct: 40, q_hi: qHi, q_en: qHi, opts_hi: oHi, opts_en: oHi, ans: 0, kp_hi: fullKp, kp_en: fullKp }], "5_UNATTEMPTED", 0); saveAll(modules.map((m) => m.id !== modId ? m : { ...m, questions: [...m.questions, { ...fq, id: m.questions.length + 1 }] })); setQHi(""); setOHi(["", "", "", ""]); setKpHi(""); alert("सेव!"); }} className="w-full py-2 bg-emerald-600 text-white rounded font-bold">सेव करें</button></div>}
      {tab === "BULK" && <div className="space-y-2"><textarea value={bulkRaw} onChange={(e) => setBulkRaw(e.target.value)} rows={4} placeholder="JSON पेस्ट करें..." className="w-full p-2 border rounded font-mono" /><button type="button" onClick={() => { try { const arr = JSON.parse(bulkRaw); const bal = balanceAnswerPositions(arr.map((x: any, i: number) => ({ id: i + 1, pyp: x.pyp || "PYP", year: String(x.year || "2025"), examTags: x.examTags || "BPSC", gotRightPct: 40, q_hi: x.q_hi || x.question, q_en: x.q_en || x.q_hi, opts_hi: x.opts_hi, opts_en: x.opts_en || x.opts_hi, ans: Number(x.ans || 0), kp_hi: x.kp_hi || "", kp_en: x.kp_en || "" })), "5_UNATTEMPTED", 0); saveAll(modules.map((m) => m.id !== modId ? m : { ...m, questions: [...m.questions, ...bal] })); setBulkRaw(""); alert("इंपोर्ट!"); } catch { alert("JSON जांचें।"); } }} className="w-full py-2 bg-[#0084FF] text-white rounded font-bold">इंपोर्ट करें</button></div>}
      {tab === "EDIT" && <WeakStudioEdit mod={curMod} modules={modules} saveAll={saveAll} canDelete={canDelete} />}
    </div>
  );
}

