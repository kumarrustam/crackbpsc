"use client";
import React, { useState, useEffect } from "react";
import { EXAM_BLUEPRINTS, ExamBlueprint } from "./ExamSyllabusCatalog";
import TestsHubPro from "./TestHubPro";
import CbtExamPlayerPro from "./CbtExamPlayerPro";
import TestAnalysisPro from "./TestAnalysisPro";
import { PassCheckoutModal } from "./PassCheckoutModal";
import { SAMPLE_QS, SampleQ, loadSavedAdminData } from "./Studentsampledata";

export function EmbeddedProHub() {
  const [passOpen, setPassOpen] = useState(false);
  const [hasPass, setHasPass] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [userCat, setUserCat] = useState("General (UR)");
  const [activeTest, setActiveTest] = useState<{ exam: ExamBlueprint; title: string } | null>(null);
  const [viewRes, setViewRes] = useState<{ exam: ExamBlueprint; title: string; res: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string } } | null>(null);
  const [resultsMap, setResultsMap] = useState<Record<string, { examId: string; answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }>>({});
  const [adminData, setAdminData] = useState<{ qs: SampleQ[]; seats: Record<string, number>; achievers: [] }>({ qs: [], seats: {}, achievers: [] });

  useEffect(() => { setAdminData(loadSavedAdminData()); }, []);
  const allQuestions = [...adminData.qs, ...SAMPLE_QS];

  if (activeTest) return <CbtExamPlayerPro exam={activeTest.exam} testTitle={activeTest.title} questions={allQuestions} userCategory={userCat} onFinish={(res) => { setResultsMap((p) => ({ ...p, [activeTest.title]: { examId: activeTest.exam.id, ...res } })); setViewRes({ exam: activeTest.exam, title: activeTest.title, res }); setActiveTest(null); }} onExit={() => setActiveTest(null)} />;
  if (viewRes) return <TestAnalysisPro exam={viewRes.exam} testTitle={viewRes.title} questions={allQuestions} result={viewRes.res} achievers={adminData.achievers} categorySeats={adminData.seats} onReattempt={() => { const cur = viewRes; setViewRes(null); setActiveTest({ exam: cur.exam, title: cur.title }); }} onClose={() => setViewRes(null)} />;

  return (
    <div id="pro-tests-section" className="my-4 bg-[#F8FAFC] text-slate-900 rounded-2xl p-3.5 border border-sky-200 shadow-sm space-y-3">
      {passOpen && <PassCheckoutModal onActivate={(pl) => { setHasPass(true); setDaysLeft(pl.days); setPassOpen(false); }} onClose={() => setPassOpen(false)} />}
      <div className="flex justify-between items-center bg-white p-3 rounded-xl border">
        <div><div className="text-[10px] font-black text-[#0084FF]">ALL-BIHAR CBT TEST SERIES</div><div className="font-black text-sm">📚 Mock Tests, PYPs & Seat Cut-off</div></div>
        <button type="button" onClick={() => setPassOpen(true)} className="px-3 py-1.5 bg-amber-100 text-amber-900 rounded-full text-xs font-black">{hasPass ? `✓ Pass (${daysLeft}d)` : "⚡ Unlock Pass"}</button>
      </div>
      <TestsHubPro selectedExams={["72nd BPSC", "TRE 4.0"]} hasPass={hasPass} userCategory={userCat} onCategoryChange={setUserCat} onRequirePass={() => setPassOpen(true)} onStartExam={(ex, t, c) => { setUserCat(c); setActiveTest({ exam: ex, title: t }); }} attemptedResults={resultsMap} onOpenResult={(t) => { const r = resultsMap[t]; const ex = EXAM_BLUEPRINTS.find((e) => e.id === r?.examId) || EXAM_BLUEPRINTS.at(0)!; if (r) setViewRes({ exam: ex, title: t, res: r }); }} />
    </div>
  );
}

