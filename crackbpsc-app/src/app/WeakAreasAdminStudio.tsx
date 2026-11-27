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

  
