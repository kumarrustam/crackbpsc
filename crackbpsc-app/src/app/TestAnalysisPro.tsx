"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { CbtQuestion } from "./CbtExamPlayerPro";
import { BIHAR_CATEGORIES } from "./CbtDrawerModals";
import { TestSolutionsTab } from "./TestSolutionsTab";

export default function TestAnalysisPro(props: { exam: ExamBlueprint; testTitle: string; questions: CbtQuestion[]; result: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }; customCutoffs?: Record<string, number>; onReattempt: () => void; onClose: () => void }) {
  const { exam, testTitle, questions, result, customCutoffs, onReattempt, onClose } = props;
  const [tab, setTab] = useState<"ANALYSIS" | "SOLUTIONS" | "LEADERBOARD">("ANALYSIS");
  const [cat, setCat] = useState(result.category || "General (UR)");
  const [compMetric, setCompMetric] = useState<"SCORE" | "ACC" | "CORR" | "INCORR">("SCORE");
  const [sliderMarks, setSliderMarks] = useState<number>(Math.round(exam.maxMarks * 0.72));
  const [stars, setStars] = useState<number>(0);

  let correct = 0, incorrect = 0, unans = 0, noOpt = 0;
  questions.forEach((q, i) => {
    const a = result.answers[i];
    if (a === undefined) noOpt++;
    else if (exam.hasOpt5 && a === 4) unans++;
    else if (a === q.ansIdx) correct++;
    else incorrect++;
  });

  const rawScore = Number((correct * exam.posMark - incorrect * exam.negMark - noOpt * exam.unansNeg).toFixed(2));
  const maxTestMarks = Number((questions.length * exam.posMark).toFixed(2));
  const attempted = correct + incorrect;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const rank = Math.max(1, Math.round(4500 * (1 - Math.max(0, rawScore) / (maxTestMarks || 1)) + 12));
  const percentile = Math.min(99.9, Math.max(5.0, Number((100 - (rank / 4600) * 100).toFixed(2))));
  const ratioMap: Record<string, number> = { "General (UR)": 0.66, "BC-2 (OBC)": 0.62, "EBC (BC-1)": 0.59, "EWS": 0.60, "SC": 0.52, "ST": 0.50, "WBC (BC Women)": 0.57 };
  const cutoff = customCutoffs?.[cat] ?? Number((maxTestMarks * (ratioMap[cat] || 0.64)).toFixed(1));
  const cleared = rawScore >= cutoff;

  const topperVal = compMetric === "SCORE" ? maxTestMarks * 0.92 : compMetric === "ACC" ? 94 : compMetric === "CORR" ? Math.round(questions.length * 0.92) : 1;
  const avgVal = compMetric === "SCORE" ? maxTestMarks * 0.54 : compMetric === "ACC" ? 62 : compMetric === "CORR" ? Math.round(questions.length * 0.58) : Math.max(2, Math.round(questions.length * 0.25));
  const youVal = compMetric === "SCORE" ? Math.max(0, rawScore) : compMetric === "ACC" ? accuracy : compMetric === "CORR" ? correct : incorrect;
  const barMax = Math.max(topperVal, youVal, 1);

  return (
    <div className="fixed inset-0 z-40 bg-[#F8FAFC] text-slate-900 flex flex-col">
      <div className="px-3 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0"><button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 font-black">←</button><div className="min-w-0"><div className="font-black text-xs truncate">{testTitle}</div><div className="text-[10px] text-slate-500 font-bold">{exam.shortName}</div></div></div>
        <button type="button" onClick={onReattempt} className="px-3 py-1.5 border border-[#0084FF] text-[#0084FF] rounded-lg text-[11px] font-black shrink-0">Reattempt Test →</button>
      </div>
      <div className="bg-white border-b border-slate-200 grid grid-cols-3 text-xs font-black shrink-0">
        {(["ANALYSIS", "SOLUTIONS", "LEADERBOARD"] as const).map((t) => <button key={t} type="button" onClick={() => setTab(t)} className={"py-2.5 border-b-2 " + (tab === t ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>{t}</button>)}
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tab === "ANALYSIS" && (
          <>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap"><span className="text-xs font-black uppercase">QUICK SUMMARY</span><select value={cat} onChange={(e) => setCat(e.target.value)} className="px-2 py-1 border border-slate-300 rounded-lg text-[11px] font-black bg-white">{BIHAR_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
              <div className="flex items-center justify-between text-[11px] bg-slate-50 p-2 rounded-xl"><span className="font-bold text-slate-600">Cut off ({cat}): <strong className="text-slate-900">{cutoff}</strong></span><span className={"px-2 py-0.5 rounded font-black " + (cleared ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700")}>{cleared ? "✓ Cleared cut-off" : "✗ Missed cut-off"}</span></div>
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-rose-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">🏆 Rank</div><div className="text-base font-black">{rank} <span className="text-xs text-slate-400">/ 4600</span></div></div>
                <div className="p-3 bg-purple-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">📊 Score</div><div className="text-base font-black">{rawScore} <span className="text-xs text-slate-400">/ {maxTestMarks}</span></div></div>
                <div className="p-3 bg-sky-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">📈 Percentile</div><div className="text-base font-black">{percentile}%</div></div>
                <div className="p-3 bg-emerald-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">🎯 Accuracy</div><div className="text-base font-black">{accuracy}%</div></div>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-black"><div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">Correct: {correct}</div><div className="p-2 bg-rose-50 text-rose-700 rounded-lg">Wrong: {incorrect}</div><div className="p-2 bg-slate-100 text-slate-700 rounded-lg">Unans: {unans}</div><div className="p-2 bg-amber-50 text-amber-700 rounded-lg">No Opt: {noOpt}</div></div>
              <a href={`https://wa.me{encodeURIComponent(`मैंने CrackBPSC पर "${testTitle}" में ${rawScore}/${maxTestMarks} अंक और AIR ${rank} हासिल की!`)}`} target="_blank" rel="noreferrer" className="block w-full py-2.5 bg-emerald-600 text-white text-center rounded-xl text-xs font-black">Challenge Friends on WhatsApp!</a>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between"><span className="text-xs font-black uppercase">COMPARE</span><div className="flex gap-1 text-[10px] font-black">{(["SCORE", "ACC", "CORR", "INCORR"] as const).map((m) => <button key={m} type="button" onClick={() => setCompMetric(m)} className={"px-2 py-1 rounded border " + (compMetric === m ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200 text-slate-500")}>{m}</button>)}</div></div>
              <div className="grid grid-cols-3 gap-3 items-end h-28 pt-4 px-4 border-b">{[{ label: "You", val: youVal, cls: "bg-[#0084FF]" }, { label: "Topper", val: topperVal, cls: "bg-purple-500" }, { label: "Average", val: avgVal, cls: "bg-slate-400" }].map((b) => <div key={b.label} className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(b.val.toFixed(1))}</span><div className={"w-8 rounded-t-lg " + b.cls} style={{ height: `${Math.max(12, Math.round((b.val / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">{b.label}</span></div>)}</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2"><div className="flex justify-between text-xs font-black"><span>MARKS VS RANK</span><span className="text-[#0084FF]">Marks: {sliderMarks} ➔ Rank #{Math.max(1, Math.round(4500 * (1 - sliderMarks / (maxTestMarks || 1)) + 5))}</span></div><input type="range" min={0} max={maxTestMarks || 100} value={sliderMarks} onChange={(e) => setSliderMarks(Number(e.target.value))} className="w-full accent-[#0084FF]" /></div>
            
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
              <span className="text-xs font-black">Rate Test Quality</span>
              <div className="flex gap-1">
                <button type="button" onClick={() => setStars(1)} className={"text-lg " + (stars >= 1 ? "text-amber-400" : "text-slate-300")}>★</button>
                <button type="button" onClick={() => setStars(2)} className={"text-lg " + (stars >= 2 ? "text-amber-400" : "text-slate-300")}>★</button>
                <button type="button" onClick={() => setStars(3)} className={"text-lg " + (stars >= 3 ? "text-amber-400" : "text-slate-300")}>★</button>
                <button type="button" onClick={() => setStars(4)} className={"text-lg " + (stars >= 4 ? "text-amber-400" : "text-slate-300")}>★</button>
                <button type="button" onClick={() => setStars(5)} className={"text-lg " + (stars >= 5 ? "text-amber-400" : "text-slate-300")}>★</button>
              </div>
            </div>
          </>
        )}
        {tab === "SOLUTIONS" && <TestSolutionsTab exam={exam} questions={questions} result={result} />}
        {tab === "LEADERBOARD" && (
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center items-end pt-2"><div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#2</div><div className="text-[11px] font-bold">Ritu Raj</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.91).toFixed(1)}</div></div><div className="p-3 bg-amber-50 border border-amber-200 rounded-xl"><div className="text-sm font-black text-amber-600">👑 #1</div><div className="text-xs font-black">Ankit Sharma</div><div className="text-[11px] text-emerald-700 font-black">{(maxTestMarks * 0.95).toFixed(1)}</div></div><div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#3</div><div className="text-[11px] font-bold">Priya Kumari</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.88).toFixed(1)}</div></div></div>
            <div className="p-3 bg-sky-50 border border-[#0084FF] rounded-xl flex justify-between items-center text-xs font-black"><span>#{rank} • आप (You • {cat})</span><span className="text-[#0084FF]">{rawScore} / {maxTestMarks} ({percentile}%ile)</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
