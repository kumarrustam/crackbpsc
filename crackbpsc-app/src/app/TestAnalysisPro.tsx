
"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { CbtQuestion } from "./CbtExamPlayerPro";
import { BIHAR_CATEGORIES } from "./CbtDrawerModals";
import { TestSolutionsTab } from "./TestSolutionsTab";

export interface AchieverItem { name: string; post: string; imgUrl?: string; bgClass?: string; }

const DEFAULT_ACHIEVERS: AchieverItem[] = [
  { name: "Jayant Kumar", post: "Selected • BPSC CCE", bgClass: "bg-emerald-50/70 border-emerald-200 text-emerald-700" },
  { name: "Triloki Kumar", post: "Selected • BPSC TRE", bgClass: "bg-sky-50/70 border-sky-200 text-[#0084FF]" },
  { name: "Kamlesh Kumar", post: "Selected • BSSC CGL", bgClass: "bg-amber-50/70 border-amber-200 text-amber-700" },
  { name: "Kumar Rustom", post: "Topper • Bihar PCS", bgClass: "bg-purple-50/70 border-purple-200 text-purple-700" }
];

const DEFAULT_SEATS: Record<string, number> = { "General (UR)": 200, "BC-2 (OBC)": 60, "EBC (BC-1)": 90, "EWS": 50, "SC": 80, "ST": 10, "WBC (BC Women)": 15 };

export default function TestAnalysisPro(props: { exam: ExamBlueprint; testTitle: string; questions: CbtQuestion[]; result: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }; studentName?: string; achievers?: AchieverItem[]; categorySeats?: Record<string, number>; customCutoffs?: Record<string, number>; onReattempt: () => void; onClose: () => void }) {
  const { exam, testTitle, questions, result, studentName, achievers, categorySeats, customCutoffs, onReattempt, onClose } = props;
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

  const seatsMap = { ...DEFAULT_SEATS, ...(categorySeats || {}) };
  const totalSeats = Object.values(seatsMap).reduce((a, b) => a + (b || 0), 0) || 500;
  const baseRatio: Record<string, number> = { "General (UR)": 0.66, "BC-2 (OBC)": 0.62, "EWS": 0.60, "EBC (BC-1)": 0.59, "WBC (BC Women)": 0.57, "SC": 0.52, "ST": 0.50 };
  const getCatCutoff = (c: string) => {
    if (customCutoffs?.[c] !== undefined) return customCutoffs[c];
    const seatShare = Math.min(0.45, Math.max(0.02, (seatsMap[c] || 25) / totalSeats));
    const seatFactor = Number((0.04 * (0.25 - seatShare)).toFixed(3));
    return Number((maxTestMarks * Math.min(0.85, Math.max(0.35, (baseRatio[c] || 0.60) + seatFactor))).toFixed(1));
  };
  const cutoff = getCatCutoff(cat);
  const cleared = rawScore >= cutoff;

  const topperVal = compMetric === "SCORE" ? maxTestMarks * 0.95 : compMetric === "ACC" ? 95 : compMetric === "CORR" ? Math.round(questions.length * 0.95) : 1;
  const avgVal = compMetric === "SCORE" ? maxTestMarks * 0.54 : compMetric === "ACC" ? 62 : compMetric === "CORR" ? Math.round(questions.length * 0.58) : Math.max(2, Math.round(questions.length * 0.25));
  const youVal = compMetric === "SCORE" ? Math.max(0, rawScore) : compMetric === "ACC" ? accuracy : compMetric === "CORR" ? correct : incorrect;
  const barMax = Math.max(topperVal, youVal, 1);
  const myName = studentName || "Kumar Rustom";
  const champList = achievers && achievers.length ? achievers : DEFAULT_ACHIEVERS;

  return (
    <div className="fixed inset-0 z-40 bg-[#F8FAFC] text-slate-900 flex flex-col">
      <div className="px-3 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0"><button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 font-black">←</button><div className="min-w-0"><div className="font-black text-xs truncate">{testTitle}</div><div className="text-[10px] text-slate-500 font-bold">{exam.shortName}</div></div></div>
        <button type="button" onClick={onReattempt} className="px-3 py-1.5 border border-[#0084FF] text-[#0084FF] rounded-lg text-[11px] font-black shrink-0">Reattempt Test →</button>
      </div>
      <div className="bg-white border-b border-slate-200 grid grid-cols-3 text-xs font-black shrink-0">
        <button type="button" onClick={() => setTab("ANALYSIS")} className={"py-2.5 border-b-2 " + (tab === "ANALYSIS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>ANALYSIS</button>
        <button type="button" onClick={() => setTab("SOLUTIONS")} className={"py-2.5 border-b-2 " + (tab === "SOLUTIONS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>SOLUTIONS</button>
        <button type="button" onClick={() => setTab("LEADERBOARD")} className={"py-2.5 border-b-2 " + (tab === "LEADERBOARD" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>LEADERBOARD</button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tab === "ANALYSIS" && (
          <>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap"><span className="text-xs font-black uppercase">QUICK SUMMARY</span><select value={cat} onChange={(e) => setCat(e.target.value)} className="px-2 py-1 border border-slate-300 rounded-lg text-[11px] font-black bg-white">{BIHAR_CATEGORIES.map((c) => <option key={c} value={c}>{c} ({seatsMap[c] || 0} Seats)</option>)}</select></div>
              <div className="flex items-center justify-between text-[11px] bg-slate-50 p-2 rounded-xl"><span className="font-bold text-slate-600">Cut-off ({cat} • {seatsMap[cat] || 0} Seats): <strong className="text-slate-900">{cutoff} / {maxTestMarks}</strong></span><span className={"px-2 py-0.5 rounded font-black " + (cleared ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700")}>{cleared ? "✓ Cleared" : "✗ Missed"}</span></div>
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-rose-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">🏆 Rank</div><div className="text-base font-black">{rank} <span className="text-xs text-slate-400">/ 4600</span></div></div>
                <div className="p-3 bg-purple-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">📊 Score</div><div className="text-base font-black">{rawScore} <span className="text-xs text-slate-400">/ {maxTestMarks}</span></div></div>
                <div className="p-3 bg-sky-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">📈 Percentile</div><div className="text-base font-black">{percentile}%</div></div>
                <div className="p-3 bg-emerald-50/70 rounded-xl"><div className="text-[10px] font-bold text-slate-500">🎯 Accuracy</div><div className="text-base font-black">{accuracy}%</div></div>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-black"><div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">Correct: {correct}</div><div className="p-2 bg-rose-50 text-rose-700 rounded-lg">Wrong: {incorrect}</div><div className="p-2 bg-slate-100 text-slate-700 rounded-lg">Unans: {unans}</div><div className="p-2 bg-amber-50 text-amber-700 rounded-lg">No Opt: {noOpt}</div></div>
              <div className="border-t border-slate-100 pt-2.5">
                <div className="text-[10px] font-black uppercase text-slate-500 mb-1.5">सीट-आधारित श्रेणी-वार कट-ऑफ़ (Seats & Qualifying Cut-off)</div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {BIHAR_CATEGORIES.map((c) => {
                    const cCut = getCatCutoff(c);
                    const isPass = rawScore >= cCut;
                    return (
                      <div key={c} onClick={() => setCat(c)} className={"px-2.5 py-1.5 rounded-lg border flex justify-between items-center cursor-pointer " + (cat === c ? "bg-sky-50 border-[#0084FF] font-black" : "bg-slate-50/60 border-slate-200 font-bold")}>
                        <span className="truncate">{c} <span className="text-[9px] text-slate-400">({seatsMap[c] || 0})</span></span>
                        <span className={isPass ? "text-emerald-700" : "text-slate-600"}>{cCut} {isPass ? "✓" : ""}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <a href={`https://wa.me{encodeURIComponent(`मैंने CrackBPSC पर "${testTitle}" में ${rawScore}/${maxTestMarks} अंक और AIR ${rank} हासिल की!`)}`} target="_blank" rel="noreferrer" className="block w-full py-2.5 bg-emerald-600 text-white text-center rounded-xl text-xs font-black">Challenge Friends on WhatsApp!</a>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between"><span className="text-xs font-black uppercase">COMPARE</span><div className="flex gap-1 text-[10px] font-black"><button type="button" onClick={() => setCompMetric("SCORE")} className={"px-2 py-1 rounded border " + (compMetric === "SCORE" ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200 text-slate-500")}>SCORE</button><button type="button" onClick={() => setCompMetric("ACC")} className={"px-2 py-1 rounded border " + (compMetric === "ACC" ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200 text-slate-500")}>ACC</button></div></div>
              <div className="grid grid-cols-3 gap-3 items-end h-28 pt-4 px-4 border-b">
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(youVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-[#0084FF]" style={{ height: `${Math.max(12, Math.round((youVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">You</span></div>
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(topperVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-purple-500" style={{ height: `${Math.max(12, Math.round((topperVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">Topper</span></div>
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(avgVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-slate-400" style={{ height: `${Math.max(12, Math.round((avgVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">Average</span></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2"><div className="flex justify-between text-xs font-black"><span>MARKS VS RANK</span><span className="text-[#0084FF]">Marks: {sliderMarks} ➔ Rank #{Math.max(1, Math.round(4500 * (1 - sliderMarks / (maxTestMarks || 1)) + 5))}</span></div><input type="range" min={0} max={maxTestMarks || 100} value={sliderMarks} onChange={(e) => setSliderMarks(Number(e.target.value))} className="w-full accent-[#0084FF]" /></div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-black uppercase text-slate-800">🏆 Our Selected Achievers</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {champList.map((ch) => (
                  <div key={ch.name} className={"p-2 border rounded-xl flex items-center gap-2 " + (ch.bgClass || "bg-sky-50/70 border-sky-200 text-[#0084FF]")}>
                    {ch.imgUrl ? <img src={ch.imgUrl} alt={ch.name} className="w-8 h-8 rounded-full object-cover shrink-0" /> : <div className="w-8 h-8 rounded-full bg-white text-slate-800 font-black flex items-center justify-center text-xs border shrink-0">{ch.name.charAt(0)}</div>}
                    <div className="min-w-0"><div className="font-black text-slate-900 truncate">{ch.name}</div><div className="text-[10px] font-bold truncate">{ch.post}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between"><span className="text-xs font-black">Rate Test Quality</span><div className="flex gap-1"><button type="button" onClick={() => setStars(1)} className={"text-lg " + (stars >= 1 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(2)} className={"text-lg " + (stars >= 2 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(3)} className={"text-lg " + (stars >= 3 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(4)} className={"text-lg " + (stars >= 4 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(5)} className={"text-lg " + (stars >= 5 ? "text-amber-400" : "text-slate-300")}>★</button></div></div>
          </>
        )}
        {tab === "SOLUTIONS" && <TestSolutionsTab exam={exam} questions={questions} result={result} />}
        {tab === "LEADERBOARD" && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 grid grid-cols-3 gap-2 text-center items-end pt-3">
              <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#2</div><div className="text-[11px] font-black truncate">Kamlesh Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.92).toFixed(1)}</div></div>
              <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl"><div className="text-sm font-black text-amber-600">👑 #1</div><div className="text-xs font-black truncate">Jayant Kumar</div><div className="text-[11px] text-emerald-700 font-black">{(maxTestMarks * 0.95).toFixed(1)}</div></div>
              <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#3</div><div className="text-[11px] font-black truncate">Triloki Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.89).toFixed(1)}</div></div>
            </div>
            <div className="sticky bottom-0 p-3 bg-sky-50 border-2 border-[#0084FF] rounded-2xl flex justify-between items-center text-xs font-black">
              <span>#{rank} • {myName} (You • {cat})</span>
              <span className="text-[#0084FF]">{rawScore} / {maxTestMarks}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



