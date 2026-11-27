
"use client";
import React, { useState } from "react";
import { WeakChapterModule } from "./WeakAreasPro";

export function WeakStudioEdit({
  mod, modules, saveAll, canDelete
}: {
  mod?: WeakChapterModule; modules: WeakChapterModule[]; saveAll: (m: WeakChapterModule[]) => void; canDelete: boolean;
}) {
  const [editId, setEditId] = useState<number | null>(null);
  const [pyp, setPyp] = useState("PYP"); const [year, setYear] = useState("2025"); const [tags, setTags] = useState("BPSC, UPSC");
  const [qHi, setQHi] = useState(""); const [oHi, setOHi] = useState(["", "", "", ""]);
  const [ans, setAns] = useState(0); const [kpHi, setKpHi] = useState("");

  if (!mod) return null;

  return (
    <div className="space-y-2">
      {editId !== null ? (
        <div className="p-2.5 bg-sky-50 rounded-xl border space-y-2">
          <div className="grid grid-cols-3 gap-1"><input value={pyp} onChange={(e) => setPyp(e.target.value)} className="p-1 border rounded bg-white" /><input value={year} onChange={(e) => setYear(e.target.value)} className="p-1 border rounded bg-white" /><input value={tags} onChange={(e) => setTags(e.target.value)} className="p-1 border rounded bg-white" /></div>
          <textarea value={qHi} onChange={(e) => setQHi(e.target.value)} className="w-full p-2 border rounded bg-white" />
          <div className="grid grid-cols-2 gap-1">{oHi.map((v, i) => <input key={i} value={v} onChange={(e) => { const c = [...oHi]; c[i] = e.target.value; setOHi(c); }} className="p-1.5 border rounded bg-white" />)}</div>
          <select value={ans} onChange={(e) => setAns(Number(e.target.value))} className="p-1.5 border rounded bg-white">{oHi.map((_, i) => <option key={i} value={i}>विकल्प {["A", "B", "C", "D", "E"][i]}</option>)}</select>
          <textarea value={kpHi} onChange={(e) => setKpHi(e.target.value)} rows={4} className="w-full p-2 border rounded bg-white" />
          <button type="button" onClick={() => { saveAll(modules.map((m) => m.id !== mod.id ? m : { ...m, questions: m.questions.map((q) => q.id !== editId ? q : { ...q, pyp, year, examTags: tags, q_hi: qHi, opts_hi: [...oHi], ans, kp_hi: kpHi }) })); setEditId(null); }} className="w-full py-2 bg-emerald-600 text-white rounded font-bold">✓ सुधार सेव करें</button>
        </div>
      ) : mod.questions.map((q) => (
        <div key={q.id} className="p-2 bg-slate-50 rounded border flex justify-between items-center gap-2">
          <span><strong>Q{q.id}.</strong> {q.q_hi} ({["A", "B", "C", "D", "E"][q.ans]})</span>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => { setEditId(q.id); setPyp(q.pyp || "PYP"); setYear(q.year || "2025"); setTags(q.examTags || "BPSC, UPSC"); setQHi(q.q_hi); setOHi([...q.opts_hi]); setAns(q.ans); setKpHi(q.kp_hi); }} className="px-2 py-0.5 bg-amber-100 rounded font-bold">Edit</button>
            {canDelete && <button type="button" onClick={() => saveAll(modules.map((m) => m.id !== mod.id ? m : { ...m, questions: m.questions.filter((x) => x.id !== q.id) }))} className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded font-bold">Del</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

