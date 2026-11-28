
"use client";
import React from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";

export function TestSetCardItem(p: { exam: ExamBlueprint; title: string; isFree: boolean; hasPass: boolean; done: boolean; onLaunch: (t: string, f: boolean) => void; onViewResult: (t: string) => void }) {
  return (
    <div className="p-3 border rounded-xl space-y-2 bg-white">
      <div className="flex justify-between items-start gap-2">
        <div className="font-black text-xs text-slate-900">{p.title}</div>
        <span className={"px-2 py-0.5 rounded text-[10px] font-black shrink-0 " + (p.isFree ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700")}>{p.isFree ? "FREE" : p.hasPass ? "PASS" : "🔒 PRO"}</span>
      </div>
      <div className="text-[11px] text-slate-500 font-bold">{p.exam.totalQs} Qs • {p.exam.maxMarks} Marks • {p.exam.durationMins} Mins</div>
      <div className="flex gap-2">
        <button type="button" onClick={() => p.onLaunch(p.title, p.isFree)} className="flex-1 py-2 bg-[#0084FF] text-white rounded-lg text-xs font-black">{p.done ? "Reattempt →" : p.isFree || p.hasPass ? "Start Test →" : "🔒 Unlock with Pass"}</button>
        {p.done && <button type="button" onClick={() => p.onViewResult(p.title)} className="px-3 py-2 border border-emerald-600 text-emerald-700 rounded-lg text-xs font-black">View Results</button>}
      </div>
    </div>
  );
}

