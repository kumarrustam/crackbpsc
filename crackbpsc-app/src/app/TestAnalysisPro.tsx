"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { CbtQuestion } from "./CbtExamPlayerPro";
import { BIHAR_CATEGORIES } from "./CbtDrawerModals";
import { TestSolutionsTab } from "./TestSolutionsTab";
import { TestAnalysisExtras, AchieverItem } from "./TestAnalysisExtras";
import { TestLeaderboardTab } from "./TestLeaderboardTab";

const SEATS: Record<string, number> = { "General (UR)": 200, "BC-2 (OBC)": 60, "EBC (BC-1)": 90, "EWS": 50, "SC": 80, "ST": 10, "WBC (BC Women)": 15 };
const RATIO: Record<string, number> = { "General (UR)": 0.66, "BC-2 (OBC)": 0.62, "EWS": 0.60, "EBC (BC-1)": 0.59, "WBC (BC Women)": 0.57, "SC": 0.52, "ST": 0.50 };

export default function TestAnalysisPro(p: { exam: ExamBlueprint; testTitle: string; questions: CbtQuestion[]; result: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }; studentName?: string; achievers?: AchieverItem[]; categorySeats?: Record<string, number>; customCutoffs?: Record<string, number>; onReattempt: () => void; onClose: () => void }) {
  const [tab, setTab] = useState<"ANALYSIS" | "SOLUTIONS" | "LEADERBOARD">("ANALYSIS");
  const [cat, setCat] = useState(p.result.category || "General (UR)");
  let corr = 0, wrong = 0, unans = 0, noOpt = 0;
  p.questions.forEach((q, i) => { const a = p.result.answers[i]; if (a === undefined) noOpt++; else if (p.exam.hasOpt5 && a === 4) unans++; else if (a === q.ansIdx) corr++; else wrong++; });
  const score = Number((corr * p.exam.posMark - wrong * p.exam.negMark - noOpt * p.exam.unansNeg).toFixed(2));
  const max = Number((p.questions.length * p.exam.posMark).toFixed(2)) || 100;
  const acc = corr + wrong > 0 ? Math.round((corr / (corr + wrong)) * 100) : 0;
  const rank = Math.max(1, Math.round(4500 * (1 - Math.max(0, score) / max) + 12));
  const seats = { ...SEATS, ...(p.categorySeats || {}) };
  const totS = Object.values(seats).reduce((a, b) => a + (b || 0), 0) || 500;
  const getCut = (c: string) => p.customCutoffs?.[c] ?? Number((max * Math.min(0.85, Math.max(0.35, (RATIO[c] || 0.6) + 0.04 * (0.25 - Math.min(0.45, Math.max(0.02, (seats[c] || 25) / totS)))))).toFixed(1));
  const cut = getCut(cat);
  return (
    <div className="fixed inset-0 z-40 bg-[#F8FAFC] text-slate-900 flex flex-col">
      <div className="px-3 py-2 bg-white border-b flex justify-between items-center"><button type="button" onClick={p.onClose} className="font-black text-xs">← {p.testTitle}</button><button type="button" onClick={p.onReattempt} className="px-2.5 py-1 border border-[#0084FF] text-[#0084FF] rounded text-[11px] font-black">Reattempt →</button></div>
      <div className="bg-white border-b grid grid-cols-3 text-xs font-black"><button type="button" onClick={() => setTab("ANALYSIS")} className={"py-2 border-b-2 " + (tab === "ANALYSIS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent")}>ANALYSIS</button><button type="button" onClick={() => setTab("SOLUTIONS")} className={"py-2 border-b-2 " + (tab === "SOLUTIONS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent")}>SOLUTIONS</button><button type="button" onClick={() => setTab("LEADERBOARD")} className={"py-2 border-b-2 " + (tab === "LEADERBOARD" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent")}>LEADERBOARD</button></div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tab === "ANALYSIS" && <div className="space-y-3"><div className="bg-white p-3 rounded-2xl border space-y-2"><div className="flex justify-between items-center"><span className="text-xs font-black">SUMMARY</span><select value={cat} onChange={(e) => setCat(e.target.value)} className="border rounded px-2 py-1 text-[11px] font-black">{BIHAR_CATEGORIES.map((c) => <option key={c} value={c}>{c} ({seats[c] || 0})</option>)}</select></div><div className="text-[11px] bg-slate-50 p-2 rounded flex justify-between"><span>Cut-off: <strong>{cut}/{max}</strong></span><span className={score >= cut ? "text-emerald-700 font-black" : "text-rose-700 font-black"}>{score >= cut ? "✓ Cleared" : "✗ Missed"}</span></div><div className="grid grid-cols-3 gap-1.5 text-center text-xs font-black"><div className="p-2 bg-rose-50 rounded">Rank #{rank}</div><div className="p-2 bg-purple-50 rounded">Score {score}</div><div className="p-2 bg-emerald-50 rounded">Acc {acc}%</div></div><div className="grid grid-cols-2 gap-1 text-[11px]">{BIHAR_CATEGORIES.map((c) => <div key={c} onClick={() => setCat(c)} className="p-1.5 border rounded flex justify-between"><span>{c} ({seats[c] || 0})</span><strong>{getCut(c)}</strong></div>)}</div></div><TestAnalysisExtras maxTestMarks={max} achievers={p.achievers} /></div>}
        {tab === "SOLUTIONS" && <TestSolutionsTab exam={p.exam} questions={p.questions} result={p.result} />}
        {tab === "LEADERBOARD" && <TestLeaderboardTab maxTestMarks={max} rank={rank} myName={p.studentName || "Kumar Rustom"} cat={cat} rawScore={score} />}
      </div>
    </div>
  );
}


