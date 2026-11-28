
"use client";
import React, { useState } from "react";
import { BIHAR_CATEGORIES } from "./CbtDrawerModals";
import { AchieverItem } from "./TestAnalysisExtras";
import { AdminQuestionBox, NewQItem } from "./AdminQuestionBox";

export function AdminControlDrawer(p: { menuToggles: Record<string, boolean>; onToggleMenu: (id: string) => void; seats: Record<string, number>; onSaveSeats: (s: Record<string, number>) => void; achievers: AchieverItem[]; onSaveAchievers: (list: AchieverItem[]) => void; onAddQuestion: (q: NewQItem) => void }) {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [openSec, setOpenSec] = useState<string>("");
  const [localSeats, setLocalSeats] = useState<Record<string, number>>(p.seats);
  const [localChamps, setLocalChamps] = useState<AchieverItem[]>(p.achievers);

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
        <div className="bg-white text-slate-900 rounded-2xl w-full max-w-xs p-6 shadow-xl border space-y-3 text-center">
          <div className="text-2xl">🔒</div>
          <h1 className="font-black text-base">CrackBPSC Head Admin</h1>
          <p className="text-xs text-slate-500">केवल एडमिन के लिए — पिन डालें (Default: 1234)</p>
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter Admin PIN" className="w-full px-3 py-2.5 border rounded-xl text-center font-black text-sm outline-none focus:border-[#0084FF]" />
          <button type="button" onClick={() => { if (pin === "1234" || pin === "7272") setUnlocked(true); else alert("गलत पिन! (Default: 1234)"); }} className="w-full py-2.5 bg-[#0084FF] text-white rounded-xl text-xs font-black">Unlock Admin Studio →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <div><div className="text-[10px] font-black text-[#0084FF]">SEPARATE ADMIN WORKSPACE</div><h1 className="font-black text-sm">⚙️ Head Admin Control Studio</h1></div>
        <a href="/" className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-black text-slate-700">Student View ↗</a>
      </div>
      <div className="max-w-2xl mx-auto p-4 space-y-2.5 text-xs">
        <div className="bg-white rounded-xl border overflow-hidden">
          <button type="button" onClick={() => setOpenSec(openSec === "Q" ? "" : "Q")} className="w-full px-4 py-3 flex justify-between items-center font-black text-left hover:bg-slate-50"><span>📝 1. Upload New Question + PYP Year & Tags</span><span className="text-[#0084FF]">{openSec === "Q" ? "▲" : "▼"}</span></button>
          {openSec === "Q" && <AdminQuestionBox onAdd={p.onAddQuestion} />}
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <button type="button" onClick={() => setOpenSec(openSec === "MENU" ? "" : "MENU")} className="w-full px-4 py-3 flex justify-between items-center font-black text-left hover:bg-slate-50"><span>🎛️ 2. Student Menu Controls (ON / OFF)</span><span className="text-[#0084FF]">{openSec === "MENU" ? "▲" : "▼"}</span></button>
          {openSec === "MENU" && <div className="p-4 border-t space-y-2">{["TESTS", "FREE", "SAVED", "ATTEMPTED"].map((id) => (<div key={id} className="flex justify-between items-center p-2.5 border rounded-xl"><span className="font-bold">{id}</span><button type="button" onClick={() => p.onToggleMenu(id)} className={"px-3 py-1 rounded-full text-[11px] font-black " + (p.menuToggles[id] !== false ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500")}>{p.menuToggles[id] !== false ? "ON" : "OFF"}</button></div>))}</div>}
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <button type="button" onClick={() => setOpenSec(openSec === "SEATS" ? "" : "SEATS")} className="w-full px-4 py-3 flex justify-between items-center font-black text-left hover:bg-slate-50"><span>💺 3. Category-Wise Seats & Auto Cut-off</span><span className="text-[#0084FF]">{openSec === "SEATS" ? "▲" : "▼"}</span></button>
          {openSec === "SEATS" && <div className="p-4 border-t space-y-2">{BIHAR_CATEGORIES.map((c) => (<div key={c} className="flex justify-between items-center"><span className="font-bold">{c}</span><input type="number" value={localSeats[c] || 0} onChange={(e) => setLocalSeats({ ...localSeats, [c]: Number(e.target.value) })} className="w-24 px-2.5 py-1.5 border rounded-lg text-right font-black" /></div>))}<button type="button" onClick={() => { p.onSaveSeats(localSeats); alert("Seats Saved!"); }} className="w-full py-2.5 bg-[#0084FF] text-white rounded-xl font-black">Save Seats</button></div>}
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <button type="button" onClick={() => setOpenSec(openSec === "CHAMPS" ? "" : "CHAMPS")} className="w-full px-4 py-3 flex justify-between items-center font-black text-left hover:bg-slate-50"><span>🏆 4. Selected Achievers & Photos</span><span className="text-[#0084FF]">{openSec === "CHAMPS" ? "▲" : "▼"}</span></button>
          {openSec === "CHAMPS" && <div className="p-4 border-t space-y-2.5">{localChamps.map((ch, idx) => (<div key={idx} className="p-3 border rounded-xl space-y-1.5 bg-slate-50"><input value={ch.name} onChange={(e) => { const n = [...localChamps]; n[idx] = { ...ch, name: e.target.value }; setLocalChamps(n); }} className="w-full px-2.5 py-1.5 border rounded-lg bg-white font-black" /><input value={ch.post} onChange={(e) => { const n = [...localChamps]; n[idx] = { ...ch, post: e.target.value }; setLocalChamps(n); }} className="w-full px-2.5 py-1.5 border rounded-lg bg-white" /><input value={ch.imgUrl || ""} onChange={(e) => { const n = [...localChamps]; n[idx] = { ...ch, imgUrl: e.target.value }; setLocalChamps(n); }} className="w-full px-2.5 py-1.5 border rounded-lg bg-white text-[11px]" placeholder="Photo URL" /></div>))}<button type="button" onClick={() => { p.onSaveAchievers(localChamps); alert("Achievers Saved!"); }} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-black">Save Achievers</button></div>}
        </div>
      </div>
    </div>
  );
}

