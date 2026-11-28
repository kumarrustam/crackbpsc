
"use client";
import React, { useState } from "react";

export interface NewQItem { id: string; q_hi: string; q_en: string; opts_hi: string[]; opts_en: string[]; ansIdx: number; pypYear?: string; pypSize?: "sm" | "md" | "lg"; examTags?: string[]; }

export function AdminQuestionBox({ onAdd }: { onAdd: (q: NewQItem) => void }) {
  const [qHi, setQHi] = useState("");
  const [optsStr, setOptsStr] = useState("विकल्प A, विकल्प B, विकल्प C, विकल्प D");
  const [ansIdx, setAnsIdx] = useState(0);
  const [pypYear, setPypYear] = useState("2024");
  const [tagsStr, setTagsStr] = useState("BPSC, UPSC");

  return (
    <div className="p-4 border-t bg-slate-50/50 space-y-2">
      <textarea value={qHi} onChange={(e) => setQHi(e.target.value)} rows={2} placeholder="यहाँ नया प्रश्न लिखें..." className="w-full p-2.5 border rounded-xl bg-white" />
      <input value={optsStr} onChange={(e) => setOptsStr(e.target.value)} placeholder="4 विकल्प कॉमा (,) से लिखें" className="w-full px-3 py-2 border rounded-xl bg-white" />
      <div className="grid grid-cols-2 gap-2"><input value={pypYear} onChange={(e) => setPypYear(e.target.value)} placeholder="PYP Year" className="px-3 py-2 border rounded-xl bg-white font-bold" /><input value={tagsStr} onChange={(e) => setTagsStr(e.target.value)} placeholder="Tags: BPSC, JPSC" className="px-3 py-2 border rounded-xl bg-white font-bold" /></div>
      <select value={ansIdx} onChange={(e) => setAnsIdx(Number(e.target.value))} className="w-full px-3 py-2 border rounded-xl bg-white font-black"><option value={0}>सही उत्तर: विकल्प 1</option><option value={1}>सही उत्तर: विकल्प 2</option><option value={2}>सही उत्तर: विकल्प 3</option><option value={3}>सही उत्तर: विकल्प 4</option></select>
      <button type="button" onClick={() => { if (!qHi.trim()) return; const arr = optsStr.split(",").map((s) => s.trim()); onAdd({ id: "q_" + Date.now(), q_hi: qHi, q_en: qHi, opts_hi: arr.length >= 4 ? arr : ["A", "B", "C", "D"], opts_en: arr.length >= 4 ? arr : ["A", "B", "C", "D"], ansIdx, pypYear, pypSize: "md", examTags: tagsStr.split(",").map((t) => t.trim()).filter(Boolean) }); setQHi(""); alert("प्रश्न जुड़ गया!"); }} className="w-full py-2.5 bg-[#0084FF] text-white rounded-xl font-black">+ Publish Question</button>
    </div>
  );
}

