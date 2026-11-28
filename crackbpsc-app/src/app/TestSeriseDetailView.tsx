"use client";
import React, { useState } from "react";
import { ExamBlueprint } from "./ExamSyllabusCatalog";
import { TestSetCardItem } from "./TestSetCardItam";

export function TestSeriesDetailView(p: { exam: ExamBlueprint; attemptedIds: Record<string, boolean>; hasPass: boolean; onLaunch: (t: string, f: boolean) => void; onViewResult: (t: string) => void; onBack: () => void }) {
  const { exam, attemptedIds, hasPass, onLaunch, onViewResult, onBack } = p;
  const [tab, setTab] = useState<"MOCK" | "PYP">("MOCK");
  const [subj, setSubj] = useState("All");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [openCat, setOpenCat] = useState<string>(exam.categories.at(0)?.id || "");
  const [subTopic, setSubTopic] = useState("All");

  const cats = exam.categories.filter((c) => c.tab === tab);
  const activeCat = cats.find((c) => c.id === openCat) || cats.at(0);

  return (
    <div className="space-y-3">
      {pickerOpen && exam.hasPicker && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center">
          <div className="bg-white w-full max-w-lg rounded-t-3xl p-4 max-h-[75vh] flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b"><span className="font-black text-sm">Select {exam.pickerLabel}</span><button type="button" onClick={() => setPickerOpen(false)} className="font-black text-slate-400">✕</button></div>
            <div className="overflow-y-auto divide-y mt-2 text-xs">{exam.subjects.map((s) => <button key={s} type="button" onClick={() => { setSubj(s); setPickerOpen(false); }} className={"w-full py-2.5 text-left font-bold flex justify-between " + (subj === s ? "text-[#0084FF]" : "text-slate-700")}><span>{s}</span><span>{subj === s ? "◉" : "○"}</span></button>)}</div>
          </div>
        </div>
      )}
      <div className="bg-white p-3.5 rounded-2xl border space-y-2">
        <div className="flex items-center gap-2"><button type="button" onClick={onBack} className="w-7 h-7 rounded-full bg-slate-100 font-black text-xs">←</button><h2 className="font-black text-sm text-slate-900">{exam.name}</h2></div>
        <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold"><span>{exam.totalTests} Total Tests • <strong className="text-emerald-600">{exam.freeTests} Free</strong></span>{exam.hasPicker && <button type="button" onClick={() => setPickerOpen(true)} className="px-2.5 py-1 bg-sky-50 text-[#0084FF] rounded-lg font-black">{exam.pickerLabel}: {subj} ▾</button>}</div>
        <div className="grid grid-cols-2 border-t pt-2 text-xs font-black"><button type="button" onClick={() => setTab("MOCK")} className={"py-1.5 border-b-2 " + (tab === "MOCK" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>Mock Tests</button><button type="button" onClick={() => setTab("PYP")} className={"py-1.5 border-b-2 " + (tab === "PYP" ? "border-[#0084FF] text-[#0084FF]" : "border-transparent text-slate-500")}>Previous Year Papers</button></div>
      </div>
      <div className="bg-white rounded-2xl border divide-y">{cats.map((c) => (<button key={c.id} type="button" onClick={() => { setOpenCat(c.id); setSubTopic("All"); }} className={"w-full p-3 text-left flex justify-between items-center text-xs font-bold " + (activeCat?.id === c.id ? "bg-sky-50/60" : "")}><span>{c.label} <span className="text-slate-400">({c.count})</span></span><span className="text-emerald-600 font-black text-[11px]">{c.freeCount ? `${c.freeCount} Free >` : ">"}</span></button>))}</div>
      {activeCat && (
        <div className="bg-white p-3.5 rounded-2xl border space-y-2.5">
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] font-black"><button type="button" onClick={() => setSubTopic("All")} className={"px-3 py-1 rounded-full border shrink-0 " + (subTopic === "All" ? "bg-[#0084FF] text-white" : "bg-slate-50")}>All ({activeCat.count})</button>{activeCat.subTopics.map((st) => <button key={st.id} type="button" onClick={() => setSubTopic(st.title)} className={"px-3 py-1 rounded-full border shrink-0 " + (subTopic === st.title ? "bg-[#0084FF] text-white" : "bg-slate-50")}>{st.title} ({st.count})</button>)}</div>
          {Array.of(1, 2, 3, 4).map((num) => { const t = `${exam.shortName} • ${activeCat.label}${subTopic !== "All" ? ` (${subTopic})` : ""}${subj !== "All" ? ` [${subj}]` : ""} - Set ${num}`; return <TestSetCardItem key={num} exam={exam} title={t} isFree={num <= (activeCat.freeCount || 1)} hasPass={hasPass} done={!!attemptedIds[t]} onLaunch={onLaunch} onViewResult={onViewResult} />; })}
        </div>
      )}
    </div>
  );
}

