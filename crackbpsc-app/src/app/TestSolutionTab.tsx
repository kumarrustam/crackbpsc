"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { CbtQuestion } from "./CbtExamPlayerPro";

export function TestSolutionsTab(props: { exam: ExamBlueprint; questions: CbtQuestion[]; result: { answers: Record<number, number>; timeSpent: Record<number, number> } }) {
  const { exam, questions, result } = props;
  const [solFilter, setSolFilter] = useState<"ALL" | "INCORRECT" | "OVERTIME" | "CORRECT">("ALL");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filtered = questions.map((q, i) => ({ q, i })).filter(({ q, i }) => {
    const a = result.answers[i];
    const isCorr = a !== undefined && !(exam.hasOpt5 && a === 4) && a === q.ansIdx;
    const isIncorr = a !== undefined && !(exam.hasOpt5 && a === 4) && a !== q.ansIdx;
    if (solFilter === "CORRECT") return isCorr;
    if (solFilter === "INCORRECT") return isIncorr;
    if (solFilter === "OVERTIME") return (result.timeSpent[i] || 0) > 45;
    return true;
  });

  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {(["ALL", "INCORRECT", "OVERTIME", "CORRECT"] as const).map((f) => <button key={f} type="button" onClick={() => setSolFilter(f)} className={"px-3 py-1.5 rounded-full text-xs font-black border " + (solFilter === f ? "bg-[#0084FF] text-white border-[#0084FF]" : "bg-white border-slate-200 text-slate-600")}>{f}</button>)}
      </div>
      <div className="bg-white p-3 rounded-2xl border border-slate-200">
        <div className="text-[10px] font-black text-slate-500 mb-2">किसी भी नंबर गोले पर टैप करके सीधे उस प्रश्न का हल देखें:</div>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((q, i) => {
            const a = result.answers[i];
            const isCorr = a !== undefined && !(exam.hasOpt5 && a === 4) && a === q.ansIdx;
            const isIncorr = a !== undefined && !(exam.hasOpt5 && a === 4) && a !== q.ansIdx;
            return <button key={i} type="button" onClick={() => setActiveIdx(i)} className={"w-7 h-7 rounded-full text-[11px] font-black " + (isCorr ? "bg-emerald-500 text-white" : isIncorr ? "bg-rose-500 text-white" : "bg-slate-200 text-slate-700")}>{i + 1}</button>;
          })}
        </div>
      </div>
      {(activeIdx !== null ? [{ q: questions[activeIdx], i: activeIdx }] : filtered).map(({ q, i }) => (
        <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
          <div className="flex justify-between"><span className="font-black text-[#0084FF]">Q.{i + 1} • ⏱ {result.timeSpent[i] || 0}s</span>{activeIdx !== null && <button type="button" onClick={() => setActiveIdx(null)} className="text-[#0084FF] font-black">सभी दिखाएं</button>}</div>
          <div className="font-bold text-slate-900">{q.q_hi || q.q_en}</div>
          <div className="space-y-1">{q.opts_hi.slice(0, 4).map((o, oi) => <div key={oi} className={"p-2 rounded-lg border font-bold " + (oi === q.ansIdx ? "bg-emerald-50 border-emerald-400 text-emerald-900" : result.answers[i] === oi ? "bg-rose-50 border-rose-400 text-rose-900" : "border-slate-100 text-slate-600")}>{oi + 1}. {o}</div>)}</div>
          <div className="p-2.5 bg-sky-50/70 rounded-xl text-slate-700"><strong>व्याख्या:</strong> {q.exp_hi || q.exp_en || "आधिकारिक सिलेबस एवं NCERT तथ्यों पर आधारित सटीक उत्तर।"}</div>
        </div>
      ))}
    </div>
  );
}

