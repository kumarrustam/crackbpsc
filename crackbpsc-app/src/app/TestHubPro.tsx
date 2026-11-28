"use client";
import React, { useState } from "react";
import { EXAM_BLUEPRINTS, ExamBlueprint } from "./ExamSyllabusCatalog";
import { TestSeriesDetailView } from "./TestSeriseDetailView";
import { CbtCategoryEntryModal, CbtInstructionsModal } from "./CbtDrawerModals";

export default function TestsHubPro(p: { selectedExams: string[]; hasPass: boolean; userCategory: string; onCategoryChange: (c: string) => void; onRequirePass: () => void; onStartExam: (exam: ExamBlueprint, title: string, cat: string) => void; attemptedResults: Record<string, { examId: string }>; onOpenResult: (title: string) => void }) {
  const { selectedExams, hasPass, userCategory, onCategoryChange, onRequirePass, onStartExam, attemptedResults, onOpenResult } = p;
  const [activeExam, setActiveExam] = useState<ExamBlueprint | null>(null);
  const [pendingTest, setPendingTest] = useState<{ exam: ExamBlueprint; title: string } | null>(null);
  const [step, setStep] = useState<"NONE" | "CAT" | "INST">("NONE");

  const enrolled = EXAM_BLUEPRINTS.filter((e) => selectedExams.some((k) => e.matchKeys.some((m) => k.toLowerCase().includes(m))));
  const myExams = enrolled.length > 0 ? enrolled : EXAM_BLUEPRINTS.slice(0, 2);
  const moreExams = EXAM_BLUEPRINTS.filter((e) => !myExams.some((m) => m.id === e.id));

  const triggerLaunch = (exam: ExamBlueprint, title: string, isFree: boolean) => {
    if (!isFree && !hasPass) { onRequirePass(); return; }
    setPendingTest({ exam, title });
    setStep("CAT");
  };

  const attemptedMap: Record<string, boolean> = {};
  Object.keys(attemptedResults).forEach((k) => { attemptedMap[k] = true; });

  return (
    <div className="space-y-4">
      {step === "CAT" && pendingTest && <CbtCategoryEntryModal examName={pendingTest.title} isBiharExam={["BPSC", "TEACHING", "BSSC_STATE"].includes(pendingTest.exam.group)} currentCat={userCategory} onConfirm={(c) => { onCategoryChange(c); setStep("INST"); }} onClose={() => setStep("NONE")} />}
      {step === "INST" && pendingTest && <CbtInstructionsModal title={pendingTest.title} instructions={pendingTest.exam.instructions} onStart={() => { const cur = pendingTest; setStep("NONE"); onStartExam(cur.exam, cur.title, userCategory); }} onClose={() => setStep("NONE")} />}
      {activeExam ? (
        <TestSeriesDetailView exam={activeExam} attemptedIds={attemptedMap} hasPass={hasPass} onLaunch={(t: string, f: boolean) => triggerLaunch(activeExam, t, f)} onViewResult={onOpenResult} onBack={() => setActiveExam(null)} />
      ) : (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border space-y-2.5">
            <div className="text-xs font-black uppercase text-[#0084FF]">Your Enrolled Test Series</div>
            {myExams.map((ex) => (
              <button key={ex.id} type="button" onClick={() => setActiveExam(ex)} className="w-full p-3 border rounded-xl text-left flex justify-between items-center hover:bg-slate-50">
                <div><div className="font-black text-xs text-slate-900">{ex.name}</div><div className="text-[11px] text-slate-500 font-bold">{ex.totalTests} Tests • <span className="text-emerald-600">{ex.freeTests} Free</span></div></div>
                <span className="text-[#0084FF] font-black text-xs">Open →</span>
              </button>
            ))}
          </div>
          <div className="bg-white p-4 rounded-2xl border space-y-2.5">
            <div className="text-xs font-black uppercase text-slate-700">Explore More Test Series</div>
            {moreExams.map((ex) => (
              <button key={ex.id} type="button" onClick={() => setActiveExam(ex)} className="w-full p-3 border rounded-xl text-left flex justify-between items-center hover:bg-slate-50">
                <div><div className="font-black text-xs text-slate-900">{ex.name}</div><div className="text-[11px] text-slate-500 font-bold">{ex.totalTests} Tests • <span className="text-emerald-600">{ex.freeTests} Free</span></div></div>
                <span className="text-slate-400 font-black text-xs">View →</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

