"use client";
import React, { useState, useEffect } from "react";
import { INITIAL_MODULES, WeakChapterModule } from "./WeakAreasPro";
import { NEG_MODES } from "./WeakPart1Config";
import { CwPermissions, DEFAULT_CW_PERMS } from "./WeakPart2Engine";
import { WeakPart3Perms } from "./WeakPart3Perms";
import { WeakPart4AI } from "./WeakPart4AI";
import { WeakPart5Manual } from "./WeakPart5Manual";

export default function WeakAreasAdminStudio({ isHeadAdmin = true }: { isHeadAdmin?: boolean }) {
  const [open, setOpen] = useState(false);
  const [cwPerms, setCwPerms] = useState<CwPermissions>(DEFAULT_CW_PERMS);
  const [tab, setTab] = useState("AI_GEN");
  const [soundOn, setSoundOn] = useState(true);
  const [activeSound, setActiveSound] = useState("snd_10");
  const [negMode, setNegMode] = useState("BPSC_UNATTEMPTED_1_3");
  const [modules, setModules] = useState<WeakChapterModule[]>(INITIAL_MODULES);
  const [customExams, setCustomExams] = useState<string[]>(["72वीं BPSC CCE", "BPSC TRE 4.0", "BSSC CGL-4", "Bihar Daroga"]);
  const [customSubjects, setCustomSubjects] = useState<string[]>(["History", "Bihar Special", "Polity", "Geography", "Economy", "General Science"]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSoundOn(localStorage.getItem("cb_sound_enabled") !== "false");
    setActiveSound(localStorage.getItem("cb_active_sound") || "snd_10");
    setNegMode(localStorage.getItem("cb_weak_neg_mode") || "BPSC_UNATTEMPTED_1_3");
    try {
      const p = localStorage.getItem("cb_cw_weak_perms_v2"); if (p) setCwPerms(JSON.parse(p));
      const m = localStorage.getItem("cb_custom_weak_modules"); if (m) setModules(JSON.parse(m));
      const ex = localStorage.getItem("cb_custom_weak_exams"); if (ex) setCustomExams(JSON.parse(ex));
      const sb = localStorage.getItem("cb_custom_weak_subjects"); if (sb) setCustomSubjects(JSON.parse(sb));
    } catch {}
  }, []);

  const can = (k: keyof CwPermissions) => isHeadAdmin || cwPerms[k];
  if (!isHeadAdmin && !Object.values(cwPerms).some(Boolean)) return null;

  const updatePerms = (next: CwPermissions) => { setCwPerms(next); localStorage.setItem("cb_cw_weak_perms_v2", JSON.stringify(next)); };
  const saveAll = (next: WeakChapterModule[]) => { setModules(next); localStorage.setItem("cb_custom_weak_modules", JSON.stringify(next)); };
  const enCount = Object.values(cwPerms).filter(Boolean).length;

  
  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="w-full px-4 py-3 bg-[#181C24] text-white rounded-xl flex items-center justify-between">
        <span className="font-extrabold text-xs sm:text-sm">🎯 Weak Areas Custom Studio ({modules.length} Chapters)</span>
        <span className="text-xs font-extrabold text-[#38BDF8]">Configure & Open →</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto pb-20 text-slate-900">
      <div className="sticky top-0 z-20 bg-[#181C24] text-white px-4 py-3 flex justify-between items-center">
        <button type="button" onClick={() => setOpen(false)} className="font-extrabold text-sm text-[#38BDF8]">← Back to Admin Panel</button>
        {isHeadAdmin && (
          <div className="flex gap-2">
            <button type="button" onClick={() => setTab("CW_PERMS")} className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-600">🔐 CW ({enCount}/8)</button>
            <button type="button" onClick={() => { const n = !soundOn; setSoundOn(n); localStorage.setItem("cb_sound_enabled", String(n)); }} className={"px-2.5 py-1 rounded-full text-xs font-extrabold " + (soundOn ? "bg-emerald-600" : "bg-rose-600")}>{soundOn ? "🔊 ON" : "🔇 OFF"}</button>
          </div>
        )}
      </div>
      <div className="p-4 max-w-3xl mx-auto space-y-3">
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs font-extrabold">
          {isHeadAdmin && <button type="button" onClick={() => setTab("CW_PERMS")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "CW_PERMS" ? "bg-indigo-600 text-white" : "bg-white border")}>🔐 CW अनुमति ({enCount}/8)</button>}
          {can("aiGen") && <button type="button" onClick={() => setTab("AI_GEN")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "AI_GEN" ? "bg-[#0084FF] text-white" : "bg-white border")}>✨ AI Builder</button>}
          {can("manual") && <button type="button" onClick={() => setTab("MANUAL")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "MANUAL" ? "bg-[#0084FF] text-white" : "bg-white border")}>➕ Manual</button>}
          {can("bulk") && <button type="button" onClick={() => setTab("BULK")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "BULK" ? "bg-[#0084FF] text-white" : "bg-white border")}>📥 Bulk</button>}
          {can("editQ") && <button type="button" onClick={() => setTab("EDIT")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "EDIT" ? "bg-[#0084FF] text-white" : "bg-white border")}>✏️ Edit</button>}
          {can("examsSub") && <button type="button" onClick={() => setTab("EXAMS")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "EXAMS" ? "bg-[#0084FF] text-white" : "bg-white border")}>🏛️ Exams</button>}
          {can("featuresAndSounds") && <button type="button" onClick={() => setTab("SOUNDS")} className={"px-3 py-1.5 rounded-xl shrink-0 " + (tab === "SOUNDS" ? "bg-[#0084FF] text-white" : "bg-white border")}>🎵 10 धुनें</button>}
        </div>
        {can("negAndOpt5") && (
          <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold flex flex-wrap justify-between gap-2">
            <span>⚖️ नेगेटिव नियम:</span>
            <select value={negMode} onChange={(e) => { setNegMode(e.target.value); localStorage.setItem("cb_weak_neg_mode", e.target.value); }} className="p-1 border rounded bg-white">{NEG_MODES.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}</select>
          </div>
        )}
        {isHeadAdmin && tab === "CW_PERMS" && <WeakPart3Perms cwPerms={cwPerms} updatePerms={updatePerms} />}
        {tab === "AI_GEN" && can("aiGen") && <WeakPart4AI modules={modules} saveAll={saveAll} canChangeOpt5={can("negAndOpt5")} customExams={customExams} customSubjects={customSubjects} />}
        {tab !== "CW_PERMS" && tab !== "AI_GEN" && <WeakPart5Manual tab={tab} modules={modules} saveAll={saveAll} canDelete={can("deleteQ")} canOpt5={can("negAndOpt5")} activeSound={activeSound} setActiveSound={setActiveSound} customExams={customExams} setCustomExams={setCustomExams} customSubjects={customSubjects} setCustomSubjects={setCustomSubjects} />}
      </div>
    </div>
  );
}

