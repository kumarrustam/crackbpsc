"use client";
import React from "react";

export function TestLeaderboardTab({ maxTestMarks, rank, myName, cat, rawScore }: { maxTestMarks: number; rank: number; myName: string; cat: string; rawScore: number }) {
  return (
    <div className="space-y-3">
      <div className="bg-white p-4 rounded-2xl border grid grid-cols-3 gap-2 text-center items-end pt-3">
        <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#2</div><div className="text-[11px] font-black truncate">Kamlesh Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.92).toFixed(1)}</div></div>
        <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl"><div className="text-sm font-black text-amber-600">👑 #1</div><div className="text-xs font-black truncate">Jayant Kumar</div><div className="text-[11px] text-emerald-700 font-black">{(maxTestMarks * 0.95).toFixed(1)}</div></div>
        <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#3</div><div className="text-[11px] font-black truncate">Triloki Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.89).toFixed(1)}</div></div>
      </div>
      <div className="sticky bottom-0 p-3 bg-sky-50 border-2 border-[#0084FF] rounded-2xl flex justify-between items-center text-xs font-black">
        <span>#{rank} • {myName} (You • {cat})</span>
        <span className="text-[#0084FF]">{rawScore} / {maxTestMarks}</span>
      </div>
    </div>
  );
}
