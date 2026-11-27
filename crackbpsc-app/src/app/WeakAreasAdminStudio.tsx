
"use client";
import React, { useState, useEffect } from "react";
import { INITIAL_MODULES, WeakChapterModule, WeakQuestion } from "./WeakAreasPro";

const SOUNDS_10 = [
  { id: "snd_1", name: "1. गोल्डन ट्रॉफ़ी झंकार", wave: "triangle" as OscillatorType, notes: [523.25, 659.25, 783.99, 1046.5], step: 0.11 },
  { id: "snd_2", name: "2. शाही विजय बिगुल", wave: "sawtooth" as OscillatorType, notes: [523.25, 523.25, 659.25, 587.33, 783.99], step: 0.14 },
  { id: "snd_3", name: "3. जादुई सितारा-फुलझड़ी", wave: "sine" as OscillatorType, notes: [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1318.5], step: 0.065 },
  { id: "snd_4", name: "4. ग्रैंड विजय घंटी", wave: "sine" as OscillatorType, notes: [440, 554.37, 659.25, 880], step: 0.16 },
  { id: "snd_5", name: "5. सुपर लेवल-अप पॉप", wave: "square" as OscillatorType, notes: [493.88, 659.25, 783.99, 987.77, 1318.5], step: 0.08 },
  { id: "snd_6", name: "6. सुरीली बाँसुरी तान", wave: "sine" as OscillatorType, notes: [523.25, 587.33, 659.25, 783.99, 1046.5], step: 0.13 },
  { id: "snd_7", name: "7. डायमंड कॉइन शावर", wave: "triangle" as OscillatorType, notes: [987.77, 1318.5, 987.77, 1318.5, 1567.98], step: 0.075 },
  { id: "snd_8", name: "8. ओलंपिक पोडियम सलामी", wave: "triangle" as OscillatorType, notes: [392.0, 523.25, 659.25, 783.99, 659.25, 1046.5], step: 0.12 },
  { id: "snd_9", name: "9. बबल-पॉप सेलिब्रेशन", wave: "sine" as OscillatorType, notes: [659.25, 880, 1174.66, 1567.98], step: 0.09 },
  { id: "snd_10", name: "10. आतिशबाज़ी ग्रैंड फिनाले", wave: "sawtooth" as OscillatorType, notes: [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98], step: 0.07 }
];

const ALL_PATTERNS = [
  { id: "STANDARD", label: "1. साधारण (Standard MCQ)", promptDesc: "Direct Factual MCQ" },
  { id: "ASSERTION", label: "2. कथन और कारण (A & R)", promptDesc: "Assertion (A) and Reason (R)" },
  { id: "MATCHING", label: "3. कूट और मिलान (List I-II)", promptDesc: "Match List-I with List-II using codes" },
  { id: "ORDERING", label: "4. क्रम में सजाएं (पूर्व-पश्चिम/आरोही)", promptDesc: "Chronological or East-to-West / Ascending-Descending Ordering" },
  { id: "STATEMENT", label: "5. बहु-कथन (1, 2 और 3)", promptDesc: "Multi-statement (Which statements are correct)" },
  { id: "PAIRS", label: "6. युग्म मिलान (केवल 1/2 युग्म)", promptDesc: "Pair-Matching (How many pairs are correctly matched)" },
  { id: "NOT_CORRECT", label: "7. असत्य / अपवाद पहचानें", promptDesc: "Find the INCORRECT statement / Exception" },
  { id: "CONCEPTUAL", label: "8. अवधारणात्मक (कारण-प्रभाव)", promptDesc: "Conceptual & Analytical application-based question" }
];

const NEGATIVE_MODES = [
  { id: "BPSC_UNATTEMPTED_1_3", label: "स्पेशल BPSC नियम: गलत पर -1/3 + बिना 'अनुत्तरित प्रश्न' चुने छोड़ने पर भी -1/3" },
  { id: "STD_1_3", label: "सामान्य नेगेटिव: गलत पर -1/3 (छोड़ने पर 0)" },
  { id: "STD_1_4", label: "सामान्य नेगेटिव: गलत पर -1/4 (छोड़ने पर 0)" },
  { id: "NONE", label: "कोई नेगेटिव मार्किंग नहीं (0)" }
];

interface CwPermissions {
  aiGen: boolean;
  manual: boolean;
  bulk: boolean;
  editQ: boolean;
  deleteQ: boolean;
  examsSub: boolean;
  negAndOpt5: boolean;
  featuresAndSounds: boolean;
}

const DEFAULT_CW_PERMS: CwPermissions = {
  aiGen: false,
  manual: false,
  bulk: false,
  editQ: false,
  deleteQ: false,
  examsSub: false,
  negAndOpt5: false,
  featuresAndSounds: false
};

function detectSubjectAuto(text: string, fallback: string): string {
  const t = text.toLowerCase();
  if (t.includes("बिहार") || t.includes("bihar") || t.includes("पटना") || t.includes("चंपारण")) return "Bihar Special";
  if (t.includes("हड़प्पा") || t.includes("मौर्य") || t.includes("संगम") || t.includes("harappa") || t.includes("history") || t.includes("विद्रोह")) return "History";
  if (t.includes("संविधान") || t.includes("अनुच्छेद") || t.includes("संसद") || t.includes("polity") || t.includes("article")) return "Polity";
  if (t.includes("नदी") || t.includes("पर्वत") || t.includes("जलवायु") || t.includes("geography") || t.includes("river")) return "Geography";
  if (t.includes("बजट") || t.includes("मुद्रास्फीति") || t.includes("gdp") || t.includes("economy") || t.includes("अर्थव्यवस्था")) return "Economy";
  if (t.includes("कोशिका") || t.includes("विटामिन") || t.includes("भौतिक") || t.includes("रसायन") || t.includes("science")) return "General Science";
  return fallback;
}

function balanceAnswerPositions(
  questions: WeakQuestion[],
  optMode: "4_OPTS" | "5_BPSC_E" | "5_UNATTEMPTED",
  startOffset = 0
): WeakQuestion[] {
  const targetCycle = new Array(1, 3, 0, 2);
  return questions.map((q, qIdx) => {
    const baseHi = q.opts_hi.slice(0, 4);
    const baseEn = q.opts_en.slice(0, 4);
    const safeAns = q.ans >= 0 && q.ans < baseHi.length ? q.ans : 0;
    const targetPos = targetCycle[(qIdx + startOffset) % targetCycle.length];

    const newHi = [...baseHi];
    const newEn = [...baseEn];
    if (baseHi.length === 4 && safeAns !== targetPos) {
      [newHi[safeAns], newHi[targetPos]] = [newHi[targetPos], newHi[safeAns]];
      [newEn[safeAns], newEn[targetPos]] = [newEn[targetPos], newEn[safeAns]];
    }

    if (optMode === "5_UNATTEMPTED") {
      newHi.push("अनुत्तरित प्रश्न");
      newEn.push("Unattempted Question");
    } else if (optMode === "5_BPSC_E") {
      newHi.push("उपर्युक्त में से कोई नहीं / उपर्युक्त में से एक से अधिक");
      newEn.push("None of the above / More than one of the above");
    }

    return { ...q, opts_hi: newHi, opts_en: newEn, ans: targetPos };
  });
}

export default function WeakAreasAdminStudio({ isHeadAdmin = true }: { isHeadAdmin?: boolean }) {
  const [openPage, setOpenPage] = useState<boolean>(false);
  const [cwPerms, setCwPerms] = useState<CwPermissions>(DEFAULT_CW_PERMS);
  const [tab, setTab] = useState<"AI_GEN" | "EDIT" | "MANUAL" | "BULK" | "EXAMS" | "FEATURES" | "SOUNDS" | "CW_PERMS">("AI_GEN");
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [activeSound, setActiveSound] = useState<string>("snd_10");
  const [negMode, setNegMode] = useState<string>("BPSC_UNATTEMPTED_1_3");
  const [modules, setModules] = useState<WeakChapterModule[]>(INITIAL_MODULES);
  const [customExams, setCustomExams] = useState<string[]>(["72वीं BPSC CCE", "BPSC TRE 4.0", "BSSC CGL-4", "Bihar Daroga"]);
  const [customSubjects, setCustomSubjects] = useState<string[]>(["History", "Bihar Special", "Polity", "Geography", "Economy", "General Science", "Current Affairs"]);
  const [newExam, setNewExam] = useState<string>("");
  const [newSub, setNewSub] = useState<string>("");

  const [aiExam, setAiExam] = useState<string>("72वीं BPSC CCE");
  const [aiSub, setAiSub] = useState<string>("AUTO");
  const [aiTopicTitle, setAiTopicTitle] = useState<string>("");
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>(["STANDARD", "ASSERTION", "MATCHING", "ORDERING", "STATEMENT"]);
  const [aiDifficulty, setAiDifficulty] = useState<"MODERATE" | "HARD">("HARD");
  const [optMode, setOptMode] = useState<"4_OPTS" | "5_BPSC_E" | "5_UNATTEMPTED">("5_UNATTEMPTED");
  const [aiCount, setAiCount] = useState<number>(10);
  const [aiTier, setAiTier] = useState<"FREE" | "PRO">("FREE");
  const [aiTags, setAiTags] = useState<string>("BPSC, UPSC, JPSC");
  const [geminiKey, setGeminiKey] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const [selModId, setSelModId] = useState<string>("mod_sangam");
  const [editingQId, setEditingQId] = useState<number | null>(null);
  const [pyp, setPyp] = useState<string>("PYP");
  const [year, setYear] = useState<string>("2025");
  const [examTags, setExamTags] = useState<string>("BPSC, UPSC, JPSC");
  const [qHi, setQHi] = useState<string>("");
  const [qEn, setQEn] = useState<string>("");
  const [optsHi, setOptsHi] = useState<string[]>(["", "", "", ""]);
  const [optsEn, setOptsEn] = useState<string[]>(["", "", "", ""]);
  const [ans, setAns] = useState<number>(0);
  const [kpHi, setKpHi] = useState<string>("");
  const [otherOptsAnalysisHi, setOtherOptsAnalysisHi] = useState<string>("");
  const [kpEn, setKpEn] = useState<string>("");
  const [bulkRaw, setBulkRaw] = useState<string>("");
  const [features, setFeatures] = useState({ confetti: true, pypBadge: true, examTags: true, bookmark: true, reportBtn: true, aiBanner: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSoundOn(localStorage.getItem("cb_sound_enabled") !== "false");
    setActiveSound(localStorage.getItem("cb_active_sound") || "snd_10");
    setNegMode(localStorage.getItem("cb_weak_neg_mode") || "BPSC_UNATTEMPTED_1_3");
    setGeminiKey(localStorage.getItem("cb_gemini_api_key") || "");
    try {
      const p = localStorage.getItem("cb_cw_weak_perms_v2");
      if (p) setCwPerms(JSON.parse(p));
      const m = localStorage.getItem("cb_custom_weak_modules");
      if (m) setModules(JSON.parse(m));
      const ex = localStorage.getItem("cb_custom_weak_exams");
      if (ex) setCustomExams(JSON.parse(ex));
      const sb = localStorage.getItem("cb_custom_weak_subjects");
      if (sb) setCustomSubjects(JSON.parse(sb));
      const ft = localStorage.getItem("cb_weak_features");
      if (ft) setFeatures(JSON.parse(ft));
    } catch {}
  }, []);

  const can = (k: keyof CwPermissions) => isHeadAdmin || cwPerms[k];
  const anyCwAllowed = Object.values(cwPerms).some(Boolean);

  if (!isHeadAdmin && !anyCwAllowed) return null;

  const updatePerms = (next: CwPermissions) => {
    setCwPerms(next);
    if (typeof window !== "undefined") localStorage.setItem("cb_cw_weak_perms_v2", JSON.stringify(next));
  };

  const setAllCwPerms = (val: boolean) => {
    updatePerms({
      aiGen: val,
      manual: val,
      bulk: val,
      editQ: val,
      deleteQ: val,
      examsSub: val,
      negAndOpt5: val,
      featuresAndSounds: val
    });
  };

  const saveAll = (nextMods: WeakChapterModule[]) => {
    setModules(nextMods);

    
