
"use client";
import React, { useState, useEffect } from "react";
import { EXAM_BLUEPRINTS, ExamBlueprint } from "../ExamSyllabusCatalog";
import CbtExamPlayerPro from "../CbtExamPlayerPro";
import TestAnalysisPro from "../TestAnalysisPro";
import { SAMPLE_QS, SampleQ, loadSavedAdminData } from "../Studentsampledata";
import { ProShellView } from "../ProShellView";

export default function ProStudentPage() {
  const [nav, setNav] = useState("TESTS");
  const [menuOpen, setMenuOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [hasPass, setHasPass] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [userCat, setUserCat] = useState("General (UR)");
  const [activeTest, setActiveTest] = useState<{ exam: ExamBlueprint; title: string } | null>(null);
  const [viewRes, setViewRes] = useState<{ exam: ExamBlueprint; title: string; res: { answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string } } | null>(null);
  const [resultsMap, setResultsMap] = useState<Record<string, { examId: string; answers: Record<number, number>; timeSpent: Record<number, number>; totalSecs: number; category: string }>>({});
  const [adminData, setAdminData] = useState<{ qs: SampleQ[]; seats: Record<string, number>; achievers: []; menu: Record<string, boolean> }>({ qs: [], seats: {}, achievers: [], menu: {} });

  useEffect(() => { setAdminData(loadSavedAdminData()); }, []);
  const allQuestions = [...adminData.qs, ...SAMPLE_QS];

  if (activeTest) return <CbtExamPlayerPro exam={activeTest.exam} testTitle={activeTest.title} questions={allQuestions} userCategory={userCat} onFinish={(res) => { setResultsMap((p) => ({ ...p, [activeTest.title]: { examId: activeTest.exam.id, ...res } })); setViewRes({ exam: activeTest.exam, title: activeTest.title, res }); setActiveTest(null); }} onExit={() => setActiveTest(null)} />;
  if (viewRes) return <TestAnalysisPro exam={viewRes.exam} testTitle={viewRes.title} questions={allQuestions} result={viewRes.res} achievers={adminData.achievers} categorySeats={adminData.seats} onReattempt={() => { const cur = viewRes; setViewRes(null); setActiveTest({ exam: cur.exam, title: cur.title }); }} onClose={() => setViewRes(null)} />;

  return <ProShellView nav={nav} setNav={setNav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} passOpen={passOpen} setPassOpen={setPassOpen} hasPass={hasPass} daysLeft={daysLeft} onBuyPass={(d) => { setHasPass(true); setDaysLeft(d); }} userCat={userCat} setUserCat={setUserCat} menuToggles={adminData.menu} resultsMap={resultsMap} onStart={(ex, t) => setActiveTest({ exam: ex, title: t })} onOpenRes={(t) => { const r = resultsMap[t]; const ex = EXAM_BLUEPRINTS.find((e) => e.id === r?.examId) || EXAM_BLUEPRINTS.at(0)!; if (r) setViewRes({ exam: ex, title: t, res: r }); }} />;
}

