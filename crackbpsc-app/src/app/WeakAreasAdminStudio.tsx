"use client";
import React, { useState, useEffect } from "react";
import { INITIAL_MODULES, WeakChapterModule, WeakQuestion } from "./WeakAreasPro";
import { SOUNDS_10, ALL_PATTERNS, NEG_MODES } from "./WeakPart1Config";
import { CwPermissions, DEFAULT_CW_PERMS, balanceAnswerPositions, detectSubjectAuto } from "./WeakPart2Engine";

export default function WeakAreasAdminStudio({ isHeadAdmin = true }: { isHeadAdmin?: boolean }) {
  const [open, setOpen] = useState(false);
  const [perms, setPerms] = useState<CwPermissions>(DEFAULT_CW_PERMS);
  const [tab, setTab] = useState("AI_GEN");
  const [actSnd, setActSnd] = useState("snd_10");
  const [negMode, setNegMode] = useState("BPSC_UNATTEMPTED_1_3");
  const [mods, setMods] = useState<WeakChapterModule[]>(INITIAL_MODULES);
  const [title, setTitle] = useState("");
  const [selSub, setSelSub] = useState("AUTO");
  const [pats, setPats] = useState(new Array("STANDARD", "ASSERTION", "MATCHING", "ORDERING", "STATEMENT"));
  const [optMode, setOptMode] = useState("5_UNATTEMPTED");
  const [count, setCount] = useState(10);
  const [key, setKey] = useState("");
  const [busy, setBusy] = useState(false);
  const [modId, setModId] = useState("mod_sangam");
  const [qHi, setQHi] = useState("");
  const [o1, setO1] = useState(""); const [o2, setO2] = useState(""); const [o3, setO3] = useState(""); const [o4, setO4] = useState("");
  const [kpHi, setKpHi] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setActSnd(localStorage.getItem("cb_active_sound") || "snd_10");
    setKey(localStorage.getItem("cb_gemini_api_key") || "");
    try {
      const p = localStorage.getItem("cb_cw_weak_perms_v2"); if (p) setPerms(JSON.parse(p));
      const m = localStorage.getItem("cb_custom_weak_modules"); if (m) setMods(JSON.parse(m));
    } catch {}
  }, []);

  const can = (k: keyof CwPermissions) => isHeadAdmin || perms[k];
  if (!isHeadAdmin && !Object.values(perms).some(Boolean)) return null;
  const saveMods = (u: WeakChapterModule[]) => { setMods(u); localStorage.setItem("cb_custom_weak_modules", JSON.stringify(u)); };
  const setPerm = (k: keyof CwPermissions, v: boolean) => { const n = { ...perms, [k]: v }; setPerms(n); localStorage.setItem("cb_cw_weak_perms_v2", JSON.stringify(n)); };
  const setAll = (v: boolean) => { const n: CwPermissions = { aiGen: v, manual: v, bulk: v, editQ: v, deleteQ: v, examsSub: v, negAndOpt5: v, featuresAndSounds: v }; setPerms(n); localStorage.setItem("cb_cw_weak_perms_v2", JSON.stringify(n)); };

  const runAI = async () => {
    if (!title.trim() || !key.trim()) return alert("शीर्षक और Gemini API Key भरें।");
    localStorage.setItem("cb_gemini_api_key", key.trim());
    const sub = selSub === "AUTO" ? detectSubjectAuto(title, "History") : selSub;
    setBusy(true);
    try {
      const prompt = `Create ${count} tough bilingual MCQs on "${title}" (${sub}). Mix: ${pats.join(",")}. Simple words. 4 options each. 100+ word explanation. Return ONLY JSON array: [{"q_hi":"हिन्दी","q_en":"English","opts_hi":["1","2","3","4"],"opts_en":["1","2","3","4"],"ans":0,"kp_hi":"व्याख्या","kp_en":"Explanation"}]`;
      const res = await fetch(`https://googleapis.com{encodeURIComponent(key.trim())}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
      const data = await res.json();
      const txt = (data?.candidates?.at(0)?.content?.parts?.at(0)?.text) || "";
      const arr = JSON.parse(txt.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim());
      const qs: WeakQuestion[] = arr.map((x: any, i: number) => ({ id: i + 1, pyp: "PYP", year: "2024", examTags: "BPSC, UPSC", gotRightPct: 38, q_hi: x.q_hi || "", q_en: x.q_en || x.q_hi || "", opts_hi: x.opts_hi || ["1", "2", "3", "4"], opts_en: x.opts_en || ["1", "2", "3", "4"], ans: Number(x.ans || 0), kp_hi: x.kp_hi || "", kp_en: x.kp_en || "" }));
      const bal = balanceAnswerPositions(qs, optMode, 0);
      saveMods([...mods, { id: `mod_${Date.now()}`, exam: "72वीं BPSC CCE", subject: sub, title: title.trim(), tier: "FREE", targetAcc: 72, targetSpeed: 24, completedText: "210+ Completed", questions: bal }]);
      setTitle(""); alert(`${bal.length} प्रश्न तैयार हो गए!`);
    } catch { alert("AI त्रुटि—API Key जांचें।"); } finally { setBusy(false); }
  };

  if (!open) return <button type="button" onClick={() => setOpen(true)} className="w-full px-4 py-3 bg-[#181C24] text-white rounded-xl flex justify-between font-extrabold text-xs"><span>🎯 Weak Areas Custom Studio ({mods.length} Chapters)</span><span className="text-[#38BDF8]">Configure & Open →</span></button>;
  const curMod = mods.find((m) => m.id === modId) || mods.at(0);

  return (
    <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto pb-20 text-slate-900">
      <div className="sticky top-0 z-20 bg-[#181C24] text-white px-4 py-3 flex justify-between items-center">
        <button type="button" onClick={() => setOpen(false)} className="font-extrabold text-sm text-[#38BDF8]">← Back</button>
        {isHeadAdmin && <button type="button" onClick={() => setTab("PERMS")} className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-600">🔐 CW Permissions</button>}
      </div>
      <div className="p-4 max-w-2xl mx-auto space-y-3 text-xs">
        <div className="flex gap-1.5 overflow-x-auto pb-1 font-extrabold">
          {isHeadAdmin && <button type="button" onClick={() => setTab("PERMS")} className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white shrink-0">🔐 Permissions</button>}
          {can("aiGen") && <button type="button" onClick={() => setTab("AI_GEN")} className="px-3 py-1.5 rounded-lg bg-white border shrink-0">✨ AI Builder</button>}
          {can("manual") && <button type="button" onClick={() => setTab("MANUAL")} className="px-3 py-1.5 rounded-lg bg-white border shrink-0">➕ Manual</button>}
          {can("editQ") && <button type="button" onClick={() => setTab("EDIT")} className="px-3 py-1.5 rounded-lg bg-white border shrink-0">✏️ Edit</button>}
          {can("featuresAndSounds") && <button type="button" onClick={() => setTab("SOUNDS")} className="px-3 py-1.5 rounded-lg bg-white border shrink-0">🎵 10 Sounds</button>}
        </div>
        {can("negAndOpt5") && <select value={negMode} onChange={(e) => { setNegMode(e.target.value); localStorage.setItem("cb_weak_neg_mode", e.target.value); }} className="w-full p-2 border rounded bg-amber-50 font-bold">{NEG_MODES.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}</select>}
        {isHeadAdmin && tab === "PERMS" && (
          <div className="p-3 bg-white rounded-xl border space-y-2">
            <div className="flex gap-2"><button type="button" onClick={() => setAll(true)} className="px-3 py-1 bg-emerald-600 text-white rounded font-bold">Allow ALL</button><button type="button" onClick={() => setAll(false)} className="px-3 py-1 bg-rose-600 text-white rounded font-bold">Block ALL</button></div>
            {(Object.keys(perms) as (keyof CwPermissions)[]).map((k) => <div key={k} className="flex justify-between p-2 bg-slate-50 rounded"><span>{k}</span><button type="button" onClick={() => setPerm(k, !perms[k])} className="px-2.5 py-0.5 rounded bg-slate-800 text-white">{perms[k] ? "ON" : "OFF"}</button></div>)}
          </div>
        )}
        {tab === "AI_GEN" && can("aiGen") && (
          <div className="p-3 bg-white rounded-xl border space-y-2">
            <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Gemini API Key..." className="w-full p-2 border rounded" />
            <select value={selSub} onChange={(e) => setSelSub(e.target.value)} className="w-full p-2 border rounded font-bold"><option value="AUTO">🤖 Auto Subject</option><option value="History">History</option><option value="Bihar Special">Bihar Special</option><option value="Polity">Polity</option><option value="Geography">Geography</option><option value="Economy">Economy</option><option value="General Science">General Science</option></select>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="अध्याय का नाम (जैसे: हड़प्पा सभ्यता)..." className="w-full p-2 border rounded font-bold" />
            <div className="flex flex-wrap gap-1">{ALL_PATTERNS.map((p) => <button key={p.id} type="button" onClick={() => setPats(pats.includes(p.id) ? pats.filter((x) => x !== p.id) : [...pats, p.id])} className={"px-2 py-1 rounded border " + (pats.includes(p.id) ? "bg-indigo-600 text-white" : "")}>{p.label}</button>)}</div>
            <div className="grid grid-cols-2 gap-2"><input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} className="p-2 border rounded font-bold" /><select value={optMode} onChange={(e) => setOptMode(e.target.value)} className="p-2 border rounded font-bold"><option value="5_UNATTEMPTED">5 Opts: अनुत्तरित प्रश्न</option><option value="5_BPSC_E">5 Opts: BPSC E</option><option value="4_OPTS">4 Options</option></select></div>
            <button type="button" disabled={busy} onClick={runAI} className="w-full py-2.5 bg-[#0084FF] text-white rounded-lg font-extrabold">{busy ? "⏳ बन रहा है..." : "✨ AI से प्रश्न बनाएं"}</button>
          </div>
        )}
        {tab === "MANUAL" && can("manual") && (
          <div className="p-3 bg-white rounded-xl border space-y-2">
            <select value={modId} onChange={(e) => setModId(e.target.value)} className="w-full p-2 border rounded font-bold">{mods.map((m) => <option key={m.id} value={m.id}>{m.title}</option>)}</select>
            <textarea value={qHi} onChange={(e) => setQHi(e.target.value)} placeholder="प्रश्न..." className="w-full p-2 border rounded" />

            
