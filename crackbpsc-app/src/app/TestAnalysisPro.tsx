"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { CbtQuestion } from "./CbtExamPlayerPro";
import { BIHAR_CATEGORIES } from "./CbtDrawerModals";
import { TestSolutionsTab } from "./TestSolutionsTab";
import { TestAnalysisExtras, AchieverItem } from "./TestAnalysisExtras";
import { TestLeaderboardTab } from "./TestLeaderboardTab";

const DEFAULT_SEATS: Record<string, number> = { "General (UR)": 200, "BC-2 (OBC)": 60, "EBC (BC-1)": 90, "EWS": 50, "SC": 80, "ST": 10, "WBC (BC Women)": 15 };

export default function TestAnalysisPro(props: { exam: ExamBlueprint; testTitle: string; questions: CbtQuestion[]; result: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }; studentName?: string; achievers?: AchieverItem[]; categorySeats?: Record<string, number>; customCutoffs?: Record<string, number>; onReattempt: () => void; onClose: () => void }) {
  const { exam, testTitle, questions, result, studentName, achievers, categorySeats, customCutoffs, onReattempt, onClose } = props;
  const [tab, setTab] = useState<"ANALYSIS" | "SOLUTIONS" | "LEADERBOARD">("ANALYSIS");
  const [cat, setCat] = useState(result.category || "General (UR)");

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
  const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
  const rank = Math.max(1, Math.round(4500 * (1 - Math.max(0, rawScore) / (maxTestMarks || 1)) + 12));
  const percentile = Math.min(99.9, Math.max(5.0, Number((100 - (rank / 4600) * 100).toFixed(2))));

  const seatsMap = { ...DEFAULT_SEATS, ...(categorySeats || {}) };
  const totalSeats = Object.values(seatsMap).reduce((a, b) => a + (b || 0), 0) || 500;
  const baseRatio: Record<string, number> = { "General (UR)": 0.66, "BC-2 (OBC)": 0.62, "EWS": 0.60, "EBC (BC-1)": 0.59, "WBC (BC Women)": 0.57, "SC": 0.52, "ST": 0.50 };
  const getCatCutoff = (c: string) => customCutoffs?.[c] ?? Number((maxTestMarks * Math.min(0.85, Math.max(0.35, (baseRatio[c] || 0.60) + Number((0.04 * (0.25 - Math.min(0.45, Math.max(0.02, (seatsMap[c] || 25) / totalSeats)))).toFixed(3))))).toFixed(1));
  const cutoff = getCatCutoff(cat);
  const cleared = rawScore >= cutoff;

  return (
    <div className="fixed inset-0 z-40 bg-[#F8FAFC] text-slate-900 flex flex-col">
      <div className="px-3 py-2.5 bg-white border-b flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0"><button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 font-black">←</button><div className="min-w-0"><div className="font-black text-xs truncate">{testTitle}</div><div className="text-[10px] text-slate-500 font-bold">{exam.shortName}</div></div></div>
        <button type="button" onClick={onReattempt} className="px-3 py-1.5 border border-[#0084FF] text-[#0084FF] rounded-lg text-[11px] font-black shrink-0">Reattempt Test →</button>
      </div>
      <div className="bg-white border-b grid grid-cols-3 text-xs font-black shrink-0">
        <button type="button" onClick={() => setTab("ANALYSIS")} className={"py-2.5 border-b-2 " + (tab === "ANALYSIS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>ANALYSIS</button>
        <button type="button" onClick={() => setTab("SOLUTIONS")} className={"py-2.5 border-b-2 " + (tab === "SOLUTIONS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>SOLUTIONS</button>
        <button type="button" onClick={() => setTab("LEADERBOARD")} className={"py-2.5 border-b-2 " + (tab === "LEADERBOARD" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>LEADERBOARD</button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tab === "ANALYSIS" && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap"><span className="text-xs font-black">QUICK SUMMARY</span><select value={cat} onChange={(e) => setCat(e.target.value)} className="px-2 py-1 border rounded-lg text-[11px] font-black bg-white">{BIHAR_CATEGORIES.map((c) => <option key={c} value={c}>{c} ({seatsMap[c] || 0})</option>)}</select></div>
              <div className="flex items-center justify-between text-[11px] bg-slate-50 p-2 rounded-xl"><span>Cut-off ({cat}): <strong>{cutoff}/{maxTestMarks}</strong></span><span className={"px-2 py-0.5 rounded font-black " + (cleared ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700")}>{cleared ? "✓ Cleared" : "✗ Missed"}</span></div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-rose-50 rounded-xl"><div className="text-[10px] text-slate-500">🏆 Rank</div><div className="font-black">{rank}/4600</div></div>
                <div className="p-2.5 bg-purple-50 rounded-xl"><div className="text-[10px] text-slate-500">📊 Score</div><div className="font-black">{rawScore}/{maxTestMarks}</div></div>
                <div className="p-2.5 bg-sky-50 rounded-xl"><div className="text-[10px] text-slate-500">📈 Percentile</div><div className="font-black">{percentile}%</div></div>
                <div className="p-2.5 bg-emerald-50 rounded-xl"><div className="text-[10px] text-slate-500">🎯 Accuracy</div><div className="font-black">{accuracy}%</div></div>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-black"><div className="p-1.5 bg-emerald-50 text-emerald-700 rounded">Corr: {correct}</div><div className="p-1.5 bg-rose-50 text-rose-700 rounded">Wrong: {incorrect}</div><div className="p-1.5 bg-slate-100 rounded">Unans: {unans}</div><div className="p-1.5 bg-amber-50 text-amber-700 rounded">No Opt: {noOpt}</div></div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">{BIHAR_CATEGORIES.map((c) => { const cCut = getCatCutoff(c); return (<div key={c} onClick={() => setCat(c)} className={"px-2 py-1 rounded border flex justify-between cursor-pointer " + (cat === c ? "bg-sky-50 border-[#0084FF] font-black" : "bg-slate-50 font-bold")}><span className="truncate">{c} ({seatsMap[c] || 0})</span><span className={rawScore >= cCut ? "text-emerald-700" : "text-slate-600"}>{cCut}</span></div>); })}</div>
            </div>
            <TestAnalysisExtras maxTestMarks={maxTestMarks} achievers={achievers} />
          </div>
        )}
        {tab === "SOLUTIONS" && <TestSolutionsTab exam={exam} questions={questions} result={result} />}
        {tab === "LEADERBOARD" && <TestLeaderboardTab maxTestMarks={maxTestMarks} rank={rank} myName={studentName || "Kumar Rustom"} cat={cat} rawScore={rawScore} />}
      </div>
    </div>
  );
}

  
