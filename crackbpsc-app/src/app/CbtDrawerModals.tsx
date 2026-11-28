"use client";
import React, { useState } from "react";

export function CbtPauseModal(props: {
  timeLeftStr: string;
  stats: { attempted: number; unattempted: number; marked: number; noOpt: number };
  onResume: () => void;
  onExit: () => void;
}) {
  const { timeLeftStr, stats, onResume, onExit } = props;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-sm p-5 shadow-2xl space-y-4 text-center">
        <div className="text-xs font-bold text-slate-500 uppercase">Test Paused</div>
        <div className="text-2xl font-black text-[#0084FF]">{timeLeftStr} <span className="text-xs font-bold text-slate-400">Time Left</span></div>
        <div className="grid grid-cols-2 gap-2 text-xs font-bold text-left">
          <div className="p-2.5 bg-sky-50 rounded-xl flex justify-between"><span>Attempted</span><span className="font-black text-[#0084FF]">{stats.attempted}</span></div>
          <div className="p-2.5 bg-slate-100 rounded-xl flex justify-between"><span>Unattempted</span><span className="font-black">{stats.unattempted}</span></div>
          <div className="p-2.5 bg-purple-50 rounded-xl flex justify-between"><span>Marked ★</span><span className="font-black text-purple-700">{stats.marked}</span></div>
          <div className="p-2.5 bg-amber-50 rounded-xl flex justify-between"><span>No Option</span><span className="font-black text-amber-700">{stats.noOpt}</span></div>
        </div>
        <button type="button" onClick={onResume} className="w-full py-2.5 bg-[#0084FF] text-white rounded-xl font-black text-sm">▶ Resume Test</button>
        <button type="button" onClick={onExit} className="w-full py-2 border border-slate-300 text-slate-600 rounded-xl font-bold text-xs">Save & Exit</button>
      </div>
    </div>
  );
}

export function CbtPaletteDrawer(props: {
  questions: { q_hi: string; q_en: string }[];
  answers: Record<number, number>;
  marked: Record<number, boolean>;
  visited: Record<number, boolean>;
  hasOpt5: boolean;
  currentIdx: number;
  onSelect: (idx: number) => void;
  onOpenInstructions: () => void;
  onSubmit: () => void;
  onClose: () => void;
}) {
  const { questions, answers, marked, visited, hasOpt5, currentIdx, onSelect, onOpenInstructions, onSubmit, onClose } = props;
  const [viewMode, setViewMode] = useState<"GRID" | "LIST">("GRID");

  const getBadge = (i: number) => {
    const ans = answers[i];
    if (marked[i]) return "bg-purple-600 text-white border-purple-600";
    if (ans !== undefined && !(hasOpt5 && ans === 4)) return "bg-[#0084FF] text-white border-[#0084FF]";
    if (hasOpt5 && ans === 4) return "bg-slate-700 text-white border-slate-700";
    if (visited[i]) return "bg-amber-500 text-white border-amber-500";
    return "bg-white text-slate-700 border-slate-300";
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-white text-slate-900 w-80 max-w-[88vw] h-full flex flex-col shadow-2xl">
        <div className="p-3 border-b flex justify-between items-center">
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg text-xs font-black">
            <button type="button" onClick={() => setViewMode("GRID")} className={"px-2.5 py-1 rounded " + (viewMode === "GRID" ? "bg-white text-[#0084FF] shadow" : "text-slate-600")}>Grid View</button>
            <button type="button" onClick={() => setViewMode("LIST")} className={"px-2.5 py-1 rounded " + (viewMode === "LIST" ? "bg-white text-[#0084FF] shadow" : "text-slate-600")}>List View</button>
          </div>
          <button type="button" onClick={onClose} className="px-2 py-1 text-slate-500 font-black">✕</button>
        </div>
        <div className="px-3 py-2 bg-slate-50 border-b flex flex-wrap gap-2 text-[10px] font-bold text-slate-600">
          <span>★ Marked</span><span className="text-[#0084FF]">● Attempted</span><span>● Unattempted</span><span className="text-amber-600">● No Opt</span><span>○ Unseen</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          {viewMode === "GRID" ? (
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button key={i} type="button" onClick={() => { onSelect(i); onClose(); }} className={"h-9 rounded-full border font-black text-xs " + getBadge(i) + (currentIdx === i ? " ring-2 ring-offset-1 ring-slate-900" : "")}>{i + 1}</button>
              ))}
            </div>
          ) : (
            <div className="space-y-1.5 text-xs">
              {questions.map((q, i) => (
                <button key={i} type="button" onClick={() => { onSelect(i); onClose(); }} className="w-full p-2 border rounded-xl text-left flex items-start gap-2 hover:bg-slate-50">
                  <span className={"w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black border " + getBadge(i)}>{i + 1}</span>
                  <span className="line-clamp-2 font-medium text-slate-800">{q.q_hi || q.q_en}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="p-3 border-t space-y-2">
          <button type="button" onClick={onOpenInstructions} className="w-full py-2 border border-slate-300 rounded-xl text-xs font-black text-slate-700">ℹ️ View Instructions</button>
          <button type="button" onClick={onSubmit} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-black">SUBMIT TEST</button>
        </div>
      </div>
    </div>
  );
}

export function CbtInstructionsModal({ title, instructions, onClose }: { title: string; instructions: string[]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-md p-5 space-y-3 shadow-2xl">
        <div className="flex justify-between items-center border-b pb-2"><h3 className="font-black text-sm">{title} — Instructions</h3><button type="button" onClick={onClose} className="font-black text-slate-500">✕</button></div>
        <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4">{instructions.map((ins, i) => <li key={i}>{ins}</li>)}</ul>
        <button type="button" onClick={onClose} className="w-full py-2 bg-[#0084FF] text-white rounded-xl font-black text-xs">समझ गया (Close)</button>
      </div>
    </div>
  );
}

