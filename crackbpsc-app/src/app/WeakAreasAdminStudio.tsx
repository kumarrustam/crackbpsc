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
  { id: "STANDARD", label: "1. साधारण (Standard)", desc: "Direct Factual MCQ" },
  { id: "ASSERTION", label: "2. कथन-कारण (A & R)", desc: "Assertion (A) and Reason (R)" },
  { id: "MATCHING", label: "3. कूट-मिलान (List I-II)", desc: "Match List-I with List-II using codes" },
  { id: "ORDERING", label: "4. क्रम सजाएं (पूर्व-पश्चिम)", desc: "Chronological or East-to-West Ordering" },
  { id: "STATEMENT", label: "5. बहु-कथन (1, 2 और 3)", desc: "Multi-statement (Which statements are correct)" },
  { id: "PAIRS", label: "6. युग्म मिलान (केवल 1/2)", desc: "Pair-Matching (How many pairs are matched)" },
  { id: "NOT_CORRECT", label: "7. असत्य पहचानें", desc: "Find the INCORRECT statement" },
  { id: "CONCEPTUAL", label: "8. अवधारणात्मक", desc: "Conceptual & Analytical question" }
];

const NEGATIVE_MODES = [
  { id: "BPSC_UNATTEMPTED_1_3", label: "BPSC नियम: गलत पर -1/3 + बिना 'अनुत्तरित प्रश्न' चुने छोड़ने पर भी -1/3" },
  { id: "STD_1_3", label: "सामान्य नेगेटिव: गलत पर -1/3 (छोड़ने पर 0)" },
  { id: "STD_1_4", label: "सामान्य नेगेटिव: गलत पर -1/4 (छोड़ने पर 0)" },
  { id: "NONE", label: "कोई नेगेटिव मार्किंग नहीं (0)" }
];

interface CwPermissions {
  aiGen: boolean; manual: boolean; bulk: boolean; editQ: boolean;
  deleteQ: boolean; examsSub: boolean; negAndOpt5: boolean; featuresAndSounds: boolean;
}

const DEFAULT_CW_PERMS: CwPermissions = {
  aiGen: false, manual: false, bulk: false, editQ: false,
  deleteQ: false, examsSub: false, negAndOpt5: false, featuresAndSounds: false
};

function detectSubjectAuto(text: string, fallback: string): string {
  const t = text.toLowerCase();
  if (t.includes("बिहार") || t.includes("bihar") || t.includes("पटना")) return "Bihar Special";
  if (t.includes("हड़प्पा") || t.includes("मौर्य") || t.includes("संगम") || t.includes("harappa")) return "History";
  if (t.includes("संविधान") || t.includes("अनुच्छेद") || t.includes("polity")) return "Polity";
  if (t.includes("नदी") || t.includes("पर्वत") || t.includes("geography")) return "Geography";
  if (t.includes("बजट") || t.includes("gdp") || t.includes("economy")) return "Economy";
  if (t.includes("कोशिका") || t.includes("विटामिन") || t.includes("science")) return "General Science";
  return fallback;
}

function balanceAnswerPositions(questions: WeakQuestion[], optMode: "4_OPTS" | "5_BPSC_E" | "5_UNATTEMPTED", startOffset = 0): WeakQuestion[] {
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
    if (optMode === "5_UNATTEMPTED") { newHi.push("अनुत्तरित प्रश्न"); newEn.push("Unattempted Question"); }
    else if (optMode === "5_BPSC_E") { newHi.push("उपर्युक्त में से कोई नहीं / एक से अधिक"); newEn.push("None / More than one"); }
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
  const [geminiKey, setGeminiKey] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [selModId, setSelModId] = useState<string>("mod_sangam");
  const [editingQId, setEditingQId] = useState<number | null>(null);
  const [qHi, setQHi] = useState<string>("");
  const [optsHi, setOptsHi] = useState<string[]>(["", "", "", ""]);
  const [ans, setAns] = useState<number>(0);
  const [kpHi, setKpHi] = useState<string>("");
  const [otherOptsHi, setOtherOptsHi] = useState<string>("");
  const [bulkRaw, setBulkRaw] = useState<string>("");
  const [features, setFeatures] = useState({ confetti: true, pypBadge: true, examTags: true, bookmark: true, reportBtn: true, aiBanner: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSoundOn(localStorage.getItem("cb_sound_enabled") !== "false");
    setActiveSound(localStorage.getItem("cb_active_sound") || "snd_10");
    setNegMode(localStorage.getItem("cb_weak_neg_mode") || "BPSC_UNATTEMPTED_1_3");
    setGeminiKey(localStorage.getItem("cb_gemini_api_key") || "");
    try {
      const p = localStorage.getItem("cb_cw_weak_perms_v2"); if (p) setCwPerms(JSON.parse(p));
      const m = localStorage.getItem("cb_custom_weak_modules"); if (m) setModules(JSON.parse(m));
      const ex = localStorage.getItem("cb_custom_weak_exams"); if (ex) setCustomExams(JSON.parse(ex));
      const sb = localStorage.getItem("cb_custom_weak_subjects"); if (sb) setCustomSubjects(JSON.parse(sb));
      const ft = localStorage.getItem("cb_weak_features"); if (ft) setFeatures(JSON.parse(ft));
    } catch {}
  }, []);

  const can = (k: keyof CwPermissions) => isHeadAdmin || cwPerms[k];
  if (!isHeadAdmin && !Object.values(cwPerms).some(Boolean)) return null;

  const updatePerms = (next: CwPermissions) => { setCwPerms(next); localStorage.setItem("cb_cw_weak_perms_v2", JSON.stringify(next)); };
  const setAllCwPerms = (val: boolean) => updatePerms({ aiGen: val, manual: val, bulk: val, editQ: val, deleteQ: val, examsSub: val, negAndOpt5: val, featuresAndSounds: val });
  const saveAll = (nextMods: WeakChapterModule[]) => { setModules(nextMods); localStorage.setItem("cb_custom_weak_modules", JSON.stringify(nextMods)); };
  const togglePattern = (id: string) => setSelectedPatterns((prev) => prev.includes(id) ? (prev.length > 1 ? prev.filter((x) => x !== id) : prev) : [...prev, id]);

  const applyManualTemplate = (pat: string) => {
    if (pat === "ASSERTION") {
      setQHi("अभिकथन (A): हड़प्पा सभ्यता एक नगरीय सभ्यता थी।\nकारण (R): यहाँ सुनियोजित जल निकासी और ग्रिड प्रणाली वाली सड़कें थीं।");
      setOptsHi(["(A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं परंतु (R), (A) की सही व्याख्या नहीं है", "(A) सही है, परंतु (R) गलत है", "(A) गलत है, परंतु (R) सही है"]);
    } else if (pat === "MATCHING") {
      setQHi("सूची-I को सूची-II से सुमेलित कीजिए:\nA. हड़प्पा — 1. भोगवा | B. मोहनजोदड़ो — 2. रावी | C. लोथल — 3. सिंधु | D. कालीबंगा — 4. घग्गर");
      setOptsHi(["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-3, B-1, C-4, D-2", "A-4, B-3, C-2, D-1"]);
    } else if (pat === "ORDERING") {
      setQHi("हड़प्पा स्थलों को पूर्व से पश्चिम क्रम में सजाएं: 1. आलमगीरपुर 2. बनावली 3. मोहनजोदड़ो 4. सुत्कागेंडोर");
      setOptsHi(["1 - 2 - 3 - 4", "4 - 3 - 2 - 1", "2 - 1 - 3 - 4", "1 - 3 - 2 - 4"]);
    } else {
      setQHi("निम्नलिखित कथनों पर विचार कीजिए:\n1. लोथल से गोदीबाड़ा के साक्ष्य मिले हैं।\n2. धौलावीरा तीन भागों में विभाजित था।");
      setOptsHi(["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1, न ही 2"]);
    }
  };

  const generateWithAI = async () => {
    if (!aiTopicTitle.trim()) return alert("कृपया अध्याय का शीर्षक लिखें।");
    const keyToUse = geminiKey.trim() || localStorage.getItem("cb_gemini_api_key") || "";
    if (!keyToUse) return alert("कृपया Gemini API Key डालें।");
    localStorage.setItem("cb_gemini_api_key", keyToUse);
    const resolvedSubject = aiSub === "AUTO" ? detectSubjectAuto(aiTopicTitle, "History") : aiSub;
    setAiLoading(true);
    try {
      const patNames = ALL_PATTERNS.filter((p) => selectedPatterns.includes(p.id)).map((p) => p.desc).join("; ");
      const prompt = `Create ${aiCount} ${aiDifficulty === "HARD" ? "TOUGH" : "Moderate"} bilingual MCQs on "${aiTopicTitle.trim()}" for ${aiExam} (${resolvedSubject}). Mix: [${patNames}]. Easy words. 4 options each. 100+ word explanation with Answer Key Points + all options analysis. Return ONLY JSON array: [{"pyp":"PYP","year":"2024","examTags":"BPSC, UPSC","gotRightPct":38,"q_hi":"हिन्दी","q_en":"English","opts_hi":["1","2","3","4"],"opts_en":["1","2","3","4"],"ans":0,"kp_hi":"व्याख्या","kp_en":"Explanation"}]`;
      const res = await fetch(`https://googleapis.com{encodeURIComponent(keyToUse)}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      const rawText = data?.candidates?.?.content?.parts?.?.text || "";
      const parsed = JSON.parse(rawText.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim());
      const rawQs: WeakQuestion[] = parsed.map((item: any, idx: number) => ({
        id: idx + 1, pyp: item.pyp || "PYP", year: String(item.year || "2024"), examTags: item.examTags || "BPSC, UPSC", gotRightPct: 38,
        q_hi: item.q_hi || "", q_en: item.q_en || item.q_hi || "", opts_hi: item.opts_hi || ["1", "2", "3", "4"], opts_en: item.opts_en || ["1", "2", "3", "4"],
        ans: Math.max(0, Math.min(3, Number(item.ans ?? 0))), kp_hi: item.kp_hi || "व्याख्या", kp_en: item.kp_en || "Explanation"
      }));
      const idx = modules.findIndex((m) => m.title.toLowerCase() === aiTopicTitle.trim().toLowerCase());
      const balanced = balanceAnswerPositions(rawQs, optMode, idx >= 0 ? modules[idx].questions.length : 0);
      if (idx >= 0) saveAll(modules.map((m, i) => i !== idx ? m : { ...m, subject: resolvedSubject, questions: [...m.questions, ...balanced.map((q, k) => ({ ...q, id: m.questions.length + k + 1 }))] }));
      else saveAll([...modules, { id: `mod_${Date.now()}`, exam: aiExam, subject: resolvedSubject, title: aiTopicTitle.trim(), tier: aiTier, targetAcc: 72, targetSpeed: 24, completedText: "210+ Completed", questions: balanced }]);
      setAiTopicTitle(""); alert(`बधाई हो! ${balanced.length} प्रश्न जुड़ गए!`);
    } catch { alert("AI त्रुटि—API Key जांचें।"); } finally { setAiLoading(false); }
  };

  const addManualQ = () => {
    if (!qHi.trim() || optsHi.slice(0, 4).some((o) => !o.trim())) return alert("सभी फ़ील्ड भरें।");
    const kp = otherOptsHi.trim() ? `✅ मुख्य बिंदु:\n${kpHi}\n\n📌 अन्य विकल्प विश्लेषण:\n${otherOptsHi}` : kpHi;
    const tMod = modules.find((m) => m.id === selModId);
    const [finalQ] = balanceAnswerPositions([{ id: 1, pyp: "PYP", year: "2025", examTags: "BPSC, UPSC", gotRightPct: 42, q_hi: qHi, q_en: qHi, opts_hi: optsHi.slice(0, 4), opts_en: optsHi.slice(0, 4), ans, kp_hi: kp, kp_en: kp }], optMode, tMod ? tMod.questions.length : 0);
    saveAll(modules.map((m) => m.id !== selModId ? m : { ...m, questions: [...m.questions, { ...finalQ, id: m.questions.length + 1 }] }));
    setQHi(""); setOptsHi(["", "", "", ""]); setKpHi(""); setOtherOptsHi(""); alert("प्रश्न सेव हो गया!");
  };

  const handleBulk = () => {
    if (!bulkRaw.trim()) return;
    const raw: WeakQuestion[] = [];
    try {
      JSON.parse(bulkRaw.trim().replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim()).forEach((x: any, i: number) => raw.push({ id: i + 1, pyp: "PYP", year: "2025", examTags: "BPSC, UPSC", gotRightPct: 44, q_hi: x.q_hi || x.question || "", q_en: x.q_en || x.q_hi || "", opts_hi: x.opts_hi || ["1", "2", "3", "4"], opts_en: x.opts_en || ["1", "2", "3", "4"], ans: Number(x.ans ?? 0), kp_hi: x.kp_hi || "", kp_en: x.kp_en || "" }));
    } catch {
      bulkRaw.trim().split("\n").forEach((l, i) => { const p = l.split("|").map((s) => s.trim()); if (p.length >= 6) raw.push({ id: i + 1, pyp: "PYP", year: "2025", examTags: "BPSC, UPSC", gotRightPct: 44, q_hi: p, q_en: p, opts_hi: [p, p, p, p], opts_en: [p, p, p, p], ans: (Number(p) || 1) - 1, kp_hi: p || "", kp_en: p || "" }); });
    }
    if (!raw.length) return alert("फ़ॉर्मेट गलत है।");
    const tMod = modules.find((m) => m.id === selModId);
    const bal = balanceAnswerPositions(raw, optMode, tMod ? tMod.questions.length : 0);
    saveAll(modules.map((m) => m.id !== selModId ? m : { ...m, questions: [...m.questions, ...bal.map((q, i) => ({ ...q, id: m.questions.length + i + 1 }))] }));
    setBulkRaw(""); alert(`${bal.length} प्रश्न इंपोर्ट हुए!`);
  };

  const previewTone = (s: typeof SOUNDS_10) => {
    try { const Ctx = window.AudioContext || (window as any).webkitAudioContext; const c = new Ctx(); s.notes.forEach((f, i) => { const o = c.createOscillator(); const g = c.createGain(); o.type = s.wave; o.frequency.setValueAtTime(f, c.currentTime + i * s.step); g.gain.setValueAtTime(0.15, c.currentTime + i * s.step); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * s.step + 0.4); o.connect(g); g.connect(c.destination); o.start(c.currentTime + i * s.step); o.stop(c.currentTime + i * s.step + 0.42); }); } catch {}
  };

  const curMod = modules.find((m) => m.id === selModId) || modules;
  const enCount = Object.values(cwPerms).filter(Boolean).length;

  if (!openPage) {
    return (
      <button type="button" onClick={() => setOpenPage(true)} className="w-full px-4 py-3 bg-[#181C24] hover:bg-slate-800 text-white rounded-xl flex items-center justify-between shadow-xs">
        <span className="font-extrabold text-xs sm:text-sm">🎯 Weak Areas Custom Studio ({modules.length} Chapters)</span>
        <span className="text-xs font-extrabold text-[#38BDF8]">Configure & Open →</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto pb-20 text-slate-900">
      <div className="sticky top-0 z-20 bg-[#181C24] text-white px-4 py-3 flex items-center justify-between gap-2">
        <button type="button" onClick={() => setOpenPage(false)} className="font-extrabold text-sm text-[#38BDF8]">← Back to Admin Panel</button>
        {isHeadAdmin && (
          <div className="flex gap-2">
            <button type="button" onClick={() => setTab("CW_PERMS")} className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-600">🔐 CW ({enCount}/8)</button>

            
