
"use client";
import React, { useState } from "react";

export interface AchieverItem { name: string; post: string; imgUrl?: string; bgClass?: string; }
const DEFAULT_ACHIEVERS: AchieverItem[] = [
  { name: "Jayant Kumar", post: "Selected • BPSC CCE", bgClass: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "Triloki Kumar", post: "Selected • BPSC TRE", bgClass: "bg-sky-50 border-sky-200 text-[#0084FF]" },
  { name: "Kamlesh Kumar", post: "Selected • BSSC CGL", bgClass: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "Kumar Rustom", post: "Topper • Bihar PCS", bgClass: "bg-purple-50 border-purple-200 text-purple-700" }
];

export function TestAnalysisExtras({ maxTestMarks, achievers }: { maxTestMarks: number; achievers?: AchieverItem[] }) {
  const [sliderMarks, setSliderMarks] = useState(Math.round(maxTestMarks * 0.72));
  const [stars, setStars] = useState(0);
  const list = achievers && achievers.length ? achievers : DEFAULT_ACHIEVERS;
  return (
    <div className="space-y-3">
      <div className="bg-white p-4 rounded-2xl border space-y-2">
        <div className="flex justify-between text-xs font-black"><span>MARKS VS RANK</span><span className="text-[#0084FF]">Marks: {sliderMarks} ➔ Rank #{Math.max(1, Math.round(4500 * (1 - sliderMarks / (maxTestMarks || 1)) + 5))}</span></div>
        <input type="range" min={0} max={maxTestMarks || 100} value={sliderMarks} onChange={(e) => setSliderMarks(Number(e.target.value))} className="w-full accent-[#0084FF]" />
      </div>
      <div className="bg-white p-4 rounded-2xl border space-y-2">
        <div className="text-xs font-black">🏆 Our Selected Achievers</div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">{list.map((ch) => (<div key={ch.name} className={"p-2 border rounded-xl flex items-center gap-2 " + (ch.bgClass || "bg-sky-50 border-sky-200 text-[#0084FF]")}>{ch.imgUrl ? <img src={ch.imgUrl} alt={ch.name} className="w-8 h-8 rounded-full object-cover" /> : <div className="w-8 h-8 rounded-full bg-white font-black flex items-center justify-center text-xs border">{ch.name.charAt(0)}</div>}<div className="min-w-0"><div className="font-black text-slate-900 truncate">{ch.name}</div><div className="text-[10px] font-bold truncate">{ch.post}</div></div></div>))}</div>
      </div>
      <div className="bg-white p-4 rounded-2xl border flex justify-between items-center"><span className="text-xs font-black">Rate Test Quality</span><div className="flex gap-1"><button type="button" onClick={() => setStars(1)} className={stars >= 1 ? "text-amber-400 text-lg" : "text-slate-300 text-lg"}>★</button><button type="button" onClick={() => setStars(2)} className={stars >= 2 ? "text-amber-400 text-lg" : "text-slate-300 text-lg"}>★</button><button type="button" onClick={() => setStars(3)} className={stars >= 3 ? "text-amber-400 text-lg" : "text-slate-300 text-lg"}>★</button><button type="button" onClick={() => setStars(4)} className={stars >= 4 ? "text-amber-400 text-lg" : "text-slate-300 text-lg"}>★</button><button type="button" onClick={() => setStars(5)} className={stars >= 5 ? "text-amber-400 text-lg" : "text-slate-300 text-lg"}>★</button></div></div>
    </div>
  );
}


