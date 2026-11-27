
"use client";
import React, { useState } from "react";
import { WeakChapterModule } from "./WeakAreasPro";
import { ALL_PATTERNS, SOUNDS_10 } from "./WeakStudioData";
import { balanceAnswerPositions, format4BoxExplanation } from "./WeakStudioEngine";

export function WeakStudioManual({
  tab, modules, saveAll, canDelete, canOpt5, activeSound, setActiveSound, customExams, setCustomExams, customSubjects, setCustomSubjects
}: {
  tab: string; modules: WeakChapterModule[]; saveAll: (m: WeakChapterModule[]) => void; canDelete: boolean; canOpt5: boolean;
  activeSound: string; setActiveSound: (id: string) => void; customExams: string[]; setCustomExams: (e: string[]) => void;
  customSubjects: string[]; setCustomSubjects: (s: string[]) => void;
}) {
  const [modId, setModId] = useState(modules.at(0)?.id || "mod_sangam");
  const [editId, setEditId] = useState<number | null>(null);
  const [pyp, setPyp] = useState("PYP"); const [year, setYear] = useState("2025"); const [tags, setTags] = useState("BPSC, UPSC, JPSC");
  const [qHi, setQHi] = useState(""); const [qEn, setQEn] = useState("");
  const [oHi, setOHi] = useState(["", "", "", ""]); const [ans, setAns] = useState(0);
  const [kpHi, setKpHi] = useState("");
  const [box1T, setBox1T] = useState(""); const [box1P, setBox1P] = useState("");
  const [box2T, setBox2T] = useState(""); const [box2P, setBox2P] = useState("");
  const [box3T, setBox3T] = useState(""); const [box3P, setBox3P] = useState("");
  const [optMode, setOptMode] = useState("5_UNATTEMPTED"); const [bulkRaw, setBulkRaw] = useState("");
  const [newEx, setNewEx] = useState(""); const [newSb, setNewSb] = useState("");

  const previewTone = (s: typeof SOUNDS_10[number]) => {
    try {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext; const c = new Ctx();
      s.notes.forEach((f, i) => {
        const o = c.createOscillator(); const g = c.createGain();
        o.type = s.wave; o.frequency.setValueAtTime(f, c.currentTime + i * s.step);
        g.gain.setValueAtTime(0.15, c.currentTime + i * s.step); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * s.step + 0.4);
        o.connect(g); g.connect(c.destination); o.start(c.currentTime + i * s.step); o.stop(c.currentTime + i * s.step + 0.42);
      });
    } catch {}
  };

  const curMod = modules.find((m) => m.id === modId) || modules.at(0);

  if (tab === "EXAMS") {
    return (
      <div className="p-4 bg-white rounded-2xl border space-y-3 text-xs">
        <div className="flex gap-2"><input value={newEx} onChange={(e) => setNewEx(e.target.value)} placeholder="नई परीक्षा..." className="flex-1 p-2 border rounded-xl" /><button type="button" onClick={() => { if (!newEx.trim()) return; const u = [...customExams, newEx.trim()]; setCustomExams(u); localStorage.setItem("cb_custom_weak_exams", JSON.stringify(u)); setNewEx(""); }} className="px-3 py-2 bg-[#0084FF] text-white rounded-xl font-bold">जोड़ें</button></div>
        <div className="flex flex-wrap gap-1.5">{customExams.map((x) => <span key={x} className="px-2.5 py-1 bg-slate-100 rounded-full font-bold">{x}</span>)}</div>
        <div className="flex gap-2"><input value={newSb} onChange={(e) => setNewSb(e.target.value)} placeholder="नया विषय..." className="flex-1 p-2 border rounded-xl" /><button type="button" onClick={() => { if (!newSb.trim()) return; const u = [...customSubjects, newSb.trim()]; setCustomSubjects(u); localStorage.setItem("cb_custom_weak_subjects", JSON.stringify(u)); setNewSb(""); }} className="px-3 py-2 bg-[#0084FF] text-white rounded-xl font-bold">जोड़ें</button></div>
        <div className="flex flex-wrap gap-1.5">{customSubjects.map((x) => <span key={x} className="px-2.5 py-1 bg-sky-50 rounded-full font-bold">{x}</span>)}</div>
      </div>
    );
  }

  if (tab === "SOUNDS") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
        {SOUNDS_10.map((s) => (
          <div key={s.id} className="p-2.5 rounded-xl border bg-white flex justify-between items-center">
            <span>{s.name}</span>
            <div className="flex gap-1.5">
              <button type="button" onClick={() => previewTone(s)} className="px-2 py-1 bg-slate-100 rounded">🔊</button>
              <button type="button" onClick={() => { setActiveSound(s.id); localStorage.setItem("cb_active_sound", s.id); }} className={"px-2.5 py-1 rounded " + (activeSound === s.id ? "bg-[#0084FF] text-white" : "bg-slate-800 text-white")}>{activeSound === s.id ? "✓" : "चुनें"}</button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-2xl border space-y-2.5 text-xs">
      <select value={modId} onChange={(e) => { setModId(e.target.value); setEditId(null); }} className="w-full p-2 border rounded-xl font-bold">{modules.map((m) => <option key={m.id} value={m.id}>{m.subject} ➔ {m.title} ({m.questions.length})</option>)}</select>
      {tab === "MANUAL" && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-1.5"><input value={pyp} onChange={(e) => setPyp(e.target.value)} placeholder="PYP" className="p-1.5 border rounded" /><input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2025" className="p-1.5 border rounded" /><input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="BPSC, UPSC" className="p-1.5 border rounded" /></div>
          <textarea value={qHi} onChange={(e) => setQHi(e.target.value)} placeholder="हिन्दी प्रश्न..." className="w-full p-2 border rounded" />
          <textarea value={qEn} onChange={(e) => setQEn(e.target.value)} placeholder="English Question..." className="w-full p-2 border rounded" />
          <div className="grid grid-cols-2 gap-1">{oHi.map((v, i) => <input key={i} value={v} onChange={(e) => { const c = [...oHi]; c[i] = e.target.value; setOHi(c); }} placeholder={`विकल्प ${["A", "B", "C", "D"][i]}`} className="p-1.5 border rounded" />)}</div>
          {canOpt5 && <select value={optMode} onChange={(e) => setOptMode(e.target.value)} className="p-1.5 border rounded font-bold"><option value="5_UNATTEMPTED">5 Opts: अनुत्तरित प्रश्न</option><option value="5_BPSC_E">5 Opts: BPSC E</option><option value="4_OPTS">4 Options</option></select>}
          <textarea value={kpHi} onChange={(e) => setKpHi(e.target.value)} placeholder="✅ डब्बा 1: सही उत्तर के मुख्य बिंदु (100+ शब्द)..." className="w-full p-2 border border-emerald-300 bg-emerald-50/30 rounded" />
          <div className="p-2 bg-sky-50/50 border border-sky-200 rounded space-y-1.5">
            <input value={box1T} onChange={(e) => setBox1T(e.target.value)} placeholder="📦 अन्य विकल्प 1 का नाम (जैसे: मोहनजोदड़ो)" className="w-full p-1.5 border rounded bg-white font-bold" />
            <textarea value={box1P} onChange={(e) => setBox1P(e.target.value)} placeholder="मोहनजोदड़ो से जुड़े परीक्षा के सभी महत्वपूर्ण बिंदु (100+ शब्द)..." className="w-full p-1.5 border rounded bg-white" />
            <input value={box2T} onChange={(e) => setBox2T(e.target.value)} placeholder="📦 अन्य विकल्प 2 का नाम (जैसे: हड़प्पा)" className="w-full p-1.5 border rounded bg-white font-bold" />
            <textarea value={box2P} onChange={(e) => setBox2P(e.target.value)} placeholder="हड़प्पा से जुड़े परीक्षा के सभी महत्वपूर्ण बिंदु (100+ शब्द)..." className="w-full p-1.5 border rounded bg-white" />
            <input value={box3T} onChange={(e) => setBox3T(e.target.value)} placeholder="📦 अन्य विकल्प 3 का नाम (जैसे: लोथल)" className="w-full p-1.5 border rounded bg-white font-bold" />
            <textarea value={box3P} onChange={(e) => setBox3P(e.target.value)} placeholder="लोथल से जुड़े परीक्षा के सभी महत्वपूर्ण बिंदु (100+ शब्द)..." className="w-full p-1.5 border rounded bg-white" />
          </div>
          <button type="button" onClick={() => { const fullKp = format4BoxExplanation(kpHi, [{ title: box1T, points: box1P }, { title: box2T, points: box2P }, { title: box3T, points: box3P }]); const [fq] = balanceAnswerPositions([{ id: 1, pyp, year, examTags: tags, gotRightPct: 40, q_hi: qHi, q_en: qEn || qHi, opts_hi: oHi, opts_en: oHi, ans, kp_hi: fullKp, kp_en: fullKp }], optMode, curMod?.questions.length || 0); saveAll(modules.map((m) => m.id !== modId ? m : { ...m, questions: [...m.questions, { ...fq, id: m.questions.length + 1 }] })); setQHi(""); setQEn(""); setOHi(["", "", "", ""]); setKpHi(""); setBox1T(""); setBox1P(""); setBox2T(""); setBox2P(""); setBox3T(""); setBox3P(""); alert("4-डब्बा व्याख्या सहित प्रश्न सेव!"); }} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-bold">प्रश्न सेव करें</button>
        </div>
      )}
      {tab === "BULK" && (
        <div className="space-y-2">
          <textarea value={bulkRaw} onChange={(e) => setBulkRaw(e.target.value)} rows={4} placeholder="JSON पेस्ट करें..." className="w-full p-2 border rounded font-mono" />
          <button type="button" onClick={() => { try { const arr = JSON.parse(bulkRaw); const bal = balanceAnswerPositions(arr.map((x: any, i: number) => ({ id: i + 1, pyp: x.pyp || "PYP", year: String(x.year || "2025"), examTags: x.examTags || "BPSC, UPSC", gotRightPct: 40, q_hi: x.q_hi || x.question, q_en: x.q_en || x.q_hi, opts_hi: x.opts_hi, opts_en: x.opts_en || x.opts_hi, ans: Number(x.ans || 0), kp_hi: x.kp_hi || "", kp_en: x.kp_en || "" })), optMode, 0); saveAll(modules.map((m) => m.id !== modId ? m : { ...m, questions: [...m.questions, ...bal] })); setBulkRaw(""); alert("इंपोर्ट सफल!"); } catch { alert("JSON जांचें।"); } }} className="w-full py-2.5 bg-[#0084FF] text-white rounded-xl font-bold">📥 सभी प्रश्न इंपोर्ट करें</button>
        </div>
      )}
      {tab === "EDIT" && (
        <div className="space-y-2">
          {editId !== null ? (
            <div className="p-2.5 bg-sky-50 rounded-xl border space-y-2">

              
