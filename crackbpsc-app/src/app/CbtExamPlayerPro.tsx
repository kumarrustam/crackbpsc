
"use client";
import React, { useState, useEffect } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";

export default function CbtExamPlayerPro(p: { exam: ExamBlueprint; testTitle: string; questions: { id: string; pypYear?: string; examTags?: string[]; q_hi: string; q_en: string; opts_hi: string[]; opts_en: string[]; ansIdx: number }[]; userCategory: string; onFinish: (res: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }) => void; onExit: () => void }) {
  const [idx, setIdx] = useState(0);
  const [lang, setLang] = useState<"HI" | "EN">("HI");
  const [ans, setAns] = useState<Record<number, number>>({});
  const [secsLeft, setSecsLeft] = useState(p.exam.durationMins * 60);
  const [spent, setSpent] = useState<Record<number, number>>({});

  useEffect(() => {
    const t = setInterval(() => { setSecsLeft((s) => (s > 0 ? s - 1 : 0)); setSpent((sp) => ({ ...sp, [idx]: (sp[idx] || 0) + 1 })); }, 1000);
    return () => clearInterval(t);
  }, [idx]);

  const q = p.questions[idx] || p.questions.at(0)!;
  const opts = p.exam.hasOpt5 ? [...(lang === "HI" ? q.opts_hi : q.opts_en).slice(0, 4), "Unanswered (अनुत्तरित)"] : (lang === "HI" ? q.opts_hi : q.opts_en).slice(0, 4);
  const submitNow = () => p.onFinish({ answers: ans, timeSpent: spent, totalSecs: p.exam.durationMins * 60 - secsLeft, category: p.userCategory });

  return (
    <div className="fixed inset-0 z-50 bg-white text-slate-900 flex flex-col">
      <div className="px-3 py-2 border-b flex justify-between items-center text-xs font-black">
        <button type="button" onClick={p.onExit}>✕ Exit</button>
        <span>⏱ {Math.floor(secsLeft / 60)}:{String(secsLeft % 60).padStart(2, "0")}</span>
        <div className="flex gap-1.5"><button type="button" onClick={() => setLang(lang === "HI" ? "EN" : "HI")} className="px-2 py-1 border rounded">{lang === "HI" ? "EN" : "हिं"}</button><button type="button" onClick={submitNow} className="px-2.5 py-1 bg-emerald-600 text-white rounded">Submit</button></div>
      </div>
      <div className="p-3 border-b bg-slate-50 flex justify-between items-center text-[11px] font-black">
        <span>Q.{idx + 1} / {p.questions.length} {q.pypYear && <span className="ml-1 px-1.5 py-0.5 bg-sky-100 text-[#0084FF] rounded">📄 PYP | {q.pypYear}</span>}</span>
        <span className="text-emerald-700">+{p.exam.posMark} / -{p.exam.negMark}</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {q.examTags && <div className="flex gap-1 flex-wrap">{q.examTags.map((tg) => <span key={tg} className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-800 rounded text-[10px] font-black">{tg}</span>)}</div>}
        <div className="font-bold text-sm leading-relaxed">{lang === "HI" ? q.q_hi : q.q_en}</div>
        <div className="space-y-2">{opts.map((o, oi) => <button key={oi} type="button" onClick={() => setAns({ ...ans, [idx]: oi })} className={"w-full p-3 rounded-xl border text-left text-xs font-bold flex items-center gap-2 " + (ans[idx] === oi ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200")}><span className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0">{oi + 1}</span><span>{o}</span></button>)}</div>
      </div>
      <div className="p-3 border-t flex justify-between gap-2 text-xs font-black">
        <button type="button" onClick={() => setAns((a) => { const n = { ...a }; delete n[idx]; return n; })} className="px-3 py-2 border rounded-xl">Clear</button>
        <button type="button" onClick={() => idx < p.questions.length - 1 ? setIdx(idx + 1) : submitNow()} className="flex-1 py-2.5 bg-[#0084FF] text-white rounded-xl">{idx < p.questions.length - 1 ? "Save & Next →" : "Final Submit →"}</button>
      </div>
    </div>
  );
}

