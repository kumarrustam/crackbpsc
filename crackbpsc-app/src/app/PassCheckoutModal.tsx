
"use client";
import React, { useState } from "react";

export interface PassPlanItem { id: string; label: string; days: number; price: number; tag?: string; }

export const DEFAULT_PLANS: PassPlanItem[] = [
  { id: "w1", label: "Weekly Starter Pass", days: 7, price: 49 },
  { id: "m1", label: "Monthly Pro Pass", days: 30, price: 149, tag: "POPULAR" },
  { id: "y1", label: "Yearly All-Exam Pass", days: 365, price: 399, tag: "BEST VALUE" }
];

export function PassCheckoutModal(p: { plans?: PassPlanItem[]; onActivate: (plan: PassPlanItem) => void; onClose: () => void }) {
  const list = p.plans && p.plans.length ? p.plans : DEFAULT_PLANS;
  const [picked, setPicked] = useState<PassPlanItem>(list.at(1) || list[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-md p-5 shadow-2xl space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <div><div className="text-[10px] font-black text-[#0084FF]">CRACKBPSC ALL-EXAM PASS</div><h3 className="font-black text-sm">Unlock 4,500+ Mocks & PYPs</h3></div>
          <button type="button" onClick={p.onClose} className="w-7 h-7 rounded-full bg-slate-100 font-black text-slate-500">✕</button>
        </div>
        <div className="space-y-2">
          {list.map((pl) => (
            <button key={pl.id} type="button" onClick={() => setPicked(pl)} className={"w-full p-3 rounded-xl border text-left flex justify-between items-center " + (picked.id === pl.id ? "bg-sky-50 border-[#0084FF]" : "border-slate-200")}>
              <div><div className="font-black text-xs">{pl.label} {pl.tag && <span className="ml-1 px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[9px]">{pl.tag}</span>}</div><div className="text-[11px] text-slate-500 font-bold">{pl.days} Days Validity • All Bihar & Central Exams</div></div>
              <div className="text-base font-black text-[#0084FF]">₹{pl.price}</div>
            </button>
          ))}
        </div>
        <button type="button" onClick={() => p.onActivate(picked)} className="w-full py-3 bg-[#0084FF] text-white rounded-xl font-black text-xs shadow">Enroll & Activate Pass (₹{picked.price}) →</button>
      </div>
    </div>
  );
}

