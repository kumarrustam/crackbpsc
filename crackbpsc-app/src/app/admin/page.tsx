
"use client";
import React, { useState, useEffect } from "react";
import { AdminControlDrawer } from "../AdminControlDrawer";
import { AchieverItem } from "../TestAnalysisExtras";
import { NewQItem } from "../AdminQuestionBox";

export default function SeparateAdminPage() {
  const [menuToggles, setMenuToggles] = useState<Record<string, boolean>>({});
  const [seats, setSeats] = useState<Record<string, number>>({ "General (UR)": 200, "BC-2 (OBC)": 60, "EBC (BC-1)": 90, "EWS": 50, "SC": 80, "ST": 10, "WBC (BC Women)": 15 });
  const [achievers, setAchievers] = useState<AchieverItem[]>([
    { name: "Jayant Kumar", post: "Selected • BPSC CCE" },
    { name: "Triloki Kumar", post: "Selected • BPSC TRE" },
    { name: "Kamlesh Kumar", post: "Selected • BSSC CGL" },
    { name: "Kumar Rustom", post: "Topper • Bihar PCS" }
  ]);

  useEffect(() => {
    try {
      const m = localStorage.getItem("cb_menu"); if (m) setMenuToggles(JSON.parse(m));
      const s = localStorage.getItem("cb_seats"); if (s) setSeats(JSON.parse(s));
      const a = localStorage.getItem("cb_achievers"); if (a) setAchievers(JSON.parse(a));
    } catch {}
  }, []);

  const toggleMenu = (id: string) => { const next = { ...menuToggles, [id]: menuToggles[id] === false }; setMenuToggles(next); localStorage.setItem("cb_menu", JSON.stringify(next)); };
  const saveSeats = (s: Record<string, number>) => { setSeats(s); localStorage.setItem("cb_seats", JSON.stringify(s)); };
  const saveAchievers = (list: AchieverItem[]) => { setAchievers(list); localStorage.setItem("cb_achievers", JSON.stringify(list)); };
  const addQuestion = (q: NewQItem) => { const prev = JSON.parse(localStorage.getItem("cb_custom_qs") || "[]"); localStorage.setItem("cb_custom_qs", JSON.stringify([q, ...prev])); };

  return <AdminControlDrawer menuToggles={menuToggles} onToggleMenu={toggleMenu} seats={seats} onSaveSeats={saveSeats} achievers={achievers} onSaveAchievers={saveAchievers} onAddQuestion={addQuestion} />;
}

