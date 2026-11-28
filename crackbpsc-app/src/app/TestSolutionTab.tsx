"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";

export function TestSolutionsTab(props: { exam: ExamBlueprint; questions: { q_hi: string; q_en: string; opts_hi: string[]; ansIdx: number; exp_hi?: string; exp_en?: string }[]; result: { answers: Record<number, number>; timeSpent: Record<number, number> } }) {
  const { exam, questions, result } = props;
  const [solFilter, setSolFilter] = useState<"ALL" | "INCORRECT" | "OVERTIME" | "CORRECT">("ALL");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const filtered = questions.map((q, i) => ({ q, i })).filter(({ q, i }) => {
    const a = result.answers[i];
    if (solFilter === "CORRECT") return a !== undefined && !(exam.hasOpt5 && a === 4) && a === q.ansIdx;
    if (solFilter === "INCORRECT") return a !== undefined && !(exam.hasOpt5 && a === 4) && a !== q.ansIdx;
    if (solFilter === "OVERTIME") return (result.timeSpent[i] || 0) > 45;
    return true;
  });
  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 overflow-x-auto">{(["ALL", "INCORRECT", "OVERTIME", "CORRECT"] as const).map((f) => <button key={f} type="button" onClick={() => setSolFilter(f)} className={"px-3 py-1 rounded-full text-xs font-black border " + (solFilter === f ? "bg-[#0084FF] text-white" : "bg-white")}>{f}</button>)}</div>
      <div className="bg-white p-3 rounded-2xl border flex flex-wrap gap-1.5">{questions.map((q, i) => { const a = result.answers[i]; const ok = a !== undefined && !(exam.hasOpt5 && a === 4) && a === q.ansIdx; const bad = a !== undefined && !(exam.hasOpt5 && a === 4) && a !== q.ansIdx; return <button key={i} type="button" onClick={() => setActiveIdx(i)} className={"w-7 h-7 rounded-full text-[11px] font-black " + (ok ? "bg-emerald-500 text-white" : bad ? "bg-rose-500 text-white" : "bg-slate-200")}>{i + 1}</button>; })}</div>
      {(activeIdx !== null ? [{ q: questions[activeIdx], i: activeIdx }] : filtered).map(({ q, i }) => (<div key={i} className="bg-white p-3 rounded-2xl border space-y-2 text-xs"><div className="flex justify-between font-black text-[#0084FF]"><span>Q.{i + 1} • {result.timeSpent[i] || 0}s</span>{activeIdx !== null && <button type="button" onClick={() => setActiveIdx(null)}>सभी</button>}</div><div className="font-bold">{q.q_hi || q.q_en}</div><div className="space-y-1">{q.opts_hi.slice(0, 4).map((o: string, oi: number) => <div key={oi} className={"p-2 rounded border font-bold " + (oi === q.ansIdx ? "bg-emerald-50 border-emerald-400" : result.answers[i] === oi ? "bg-rose-50 border-rose-400" : "")}>{oi + 1}. {o}</div>)}</div><div className="p-2 bg-sky-50 rounded"><strong>व्याख्या:</strong> {q.exp_hi || q.exp_en || "NCERT आधारित सटीक उत्तर।"}</div></div>))}
    </div>
  );
}

