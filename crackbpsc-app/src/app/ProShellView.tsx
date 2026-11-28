
"use client";
import React from "react";
import { EXAM_BLUEPRINTS, ExamBlueprint } from "./ExamSyllabusCatalog";
import TestsHubPro from "./TestHubPro";
import { PassCheckoutModal } from "./PassCheckoutModal";
import { WhiteSideMenu } from "./WhiteSideMenu";

export function ProShellView(p: { nav: string; setNav: (v: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void; passOpen: boolean; setPassOpen: (v: boolean) => void; hasPass: boolean; daysLeft: number; onBuyPass: (d: number) => void; userCat: string; setUserCat: (c: string) => void; menuToggles: Record<string, boolean>; resultsMap: Record<string, { examId: string }>; onStart: (ex: ExamBlueprint, t: string) => void; onOpenRes: (t: string) => void }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {p.menuOpen && <WhiteSideMenu userName="Kumar Rustom" isLoggedIn={true} hasPass={p.hasPass} daysLeft={p.daysLeft} menuToggles={p.menuToggles} onNavigate={p.setNav} onOpenPass={() => p.setPassOpen(true)} onAuthToggle={() => alert("Logged out")} onClose={() => p.setMenuOpen(false)} />}
      {p.passOpen && <PassCheckoutModal onActivate={(pl) => { p.onBuyPass(pl.days); p.setPassOpen(false); }} onClose={() => p.setPassOpen(false)} />}
      <header className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-30">
        <button type="button" onClick={() => p.setMenuOpen(true)} className="w-8 h-8 rounded-lg bg-slate-100 font-black text-sm">☰</button>
        <div className="font-black text-base text-[#0084FF]">CrackBPSC <span className="text-[10px] bg-sky-50 px-1.5 py-0.5 rounded text-slate-700">PRO</span></div>
        <button type="button" onClick={() => p.setPassOpen(true)} className="px-2.5 py-1 bg-amber-50 border border-amber-300 text-amber-800 rounded-full text-[11px] font-black">{p.hasPass ? `✓ ${p.daysLeft}d` : "⚡ Pass"}</button>
      </header>
      <div className="bg-white border-b grid grid-cols-2 text-xs font-black">
        <button type="button" onClick={() => p.setNav("TESTS")} className={"py-2.5 border-b-2 " + (p.nav === "TESTS" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>📚 All Tests</button>
        <button type="button" onClick={() => p.setNav("FREE")} className={"py-2.5 border-b-2 " + (p.nav === "FREE" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>🎁 Free Tests</button>
      </div>
      <main className="max-w-2xl mx-auto p-4">
        {p.nav === "FREE" ? (
          <div className="bg-white p-4 rounded-2xl border space-y-2.5">
            <div className="text-xs font-black uppercase text-emerald-700">🎁 Free Mock Tests & Live PYPs</div>
            {EXAM_BLUEPRINTS.slice(0, 6).map((ex) => { const title = `${ex.shortName} • Free Live Mock - Set 1`; return (<div key={ex.id} className="p-3 border rounded-xl flex justify-between items-center gap-2"><div className="min-w-0"><div className="font-black text-xs truncate">{title}</div><div className="text-[11px] text-slate-500 font-bold">{ex.totalQs} Qs • {ex.maxMarks} Marks</div></div><button type="button" onClick={() => p.onStart(ex, title)} className="px-3 py-2 bg-emerald-600 text-white rounded-lg text-xs font-black shrink-0">Attempt Free →</button></div>); })}
          </div>
        ) : (
          <TestsHubPro selectedExams={["72nd BPSC", "TRE 4.0"]} hasPass={p.hasPass} userCategory={p.userCat} onCategoryChange={p.setUserCat} onRequirePass={() => p.setPassOpen(true)} onStartExam={(ex, t, c) => { p.setUserCat(c); p.onStart(ex, t); }} attemptedResults={p.resultsMap} onOpenResult={p.onOpenRes} />
        )}
      </main>
    </div>
  );
}

