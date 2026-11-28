
"use client";
import React from "react";

export function WhiteSideMenu(p: {
  userName: string;
  isLoggedIn: boolean;
  hasPass: boolean;
  daysLeft: number;
  menuToggles: Record<string, boolean>;
  onNavigate: (tab: string) => void;
  onOpenPass: () => void;
  onAuthToggle: () => void;
  onClose: () => void;
}) {
  const items = [
    { id: "TESTS", label: "📚 All Test Series (Mocks & PYPs)" },
    { id: "FREE", label: "🎁 Free Live Tests & Quizzes" },
    { id: "SAVED", label: "🔖 Saved & Reported Questions" },
    { id: "ATTEMPTED", label: "📊 Previously Attempted & Results" }
  ].filter((it) => p.menuToggles[it.id] !== false);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex">
      <div className="bg-white text-slate-900 w-72 max-w-[82vw] h-full flex flex-col shadow-2xl">
        <div className="p-4 border-b bg-slate-50 flex justify-between items-start">
          <div className="space-y-1">
            <div className="w-10 h-10 rounded-full bg-[#0084FF] text-white font-black flex items-center justify-center text-sm">{p.userName.charAt(0)}</div>
            <div className="font-black text-sm text-slate-900">{p.userName}</div>
            {p.hasPass ? (
              <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-black">✓ Active Pass • {p.daysLeft} Days left</span>
            ) : (
              <button type="button" onClick={() => { p.onClose(); p.onOpenPass(); }} className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-black">⚡ Upgrade to Pass →</button>
            )}
          </div>
          <button type="button" onClick={p.onClose} className="w-7 h-7 rounded-full bg-white border font-black text-slate-500 text-xs">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {items.map((it) => (
            <button key={it.id} type="button" onClick={() => { p.onNavigate(it.id); p.onClose(); }} className="w-full p-3 rounded-xl text-left text-xs font-black text-slate-800 hover:bg-sky-50 hover:text-[#0084FF] transition">{it.label}</button>
          ))}
        </div>
        <div className="p-3 border-t">
          <button type="button" onClick={() => { p.onClose(); p.onAuthToggle(); }} className={"w-full py-2.5 rounded-xl font-black text-xs " + (p.isLoggedIn ? "bg-rose-50 text-rose-600 border border-rose-200" : "bg-[#0084FF] text-white")}>
            {p.isLoggedIn ? "🚪 Logout Account" : "🔑 Student Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

