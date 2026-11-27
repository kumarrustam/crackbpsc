"use client";
import React, { useState } from "react";
import { WeakChapterModule, WeakQuestion } from "./WeakAreasPro";
import { ALL_PATTERNS } from "./WeakStudioData";
import { balanceAnswerPositions, detectSubjectAuto, format4BoxExplanation } from "./WeakStudioEngine";

export function WeakStudioAI({
  modules,
  saveAll,
  canChangeOpt5,
  customExams,
  customSubjects
}: {
  modules: WeakChapterModule[];
  saveAll: (next: WeakChapterModule[]) => void;
  canChangeOpt5: boolean;
  customExams: string[];
  customSubjects: string[];
}) {
  const [geminiKey, setGeminiKey] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("cb_gemini_api_key") || "" : ""));
  const [aiExam, setAiExam] = useState(customExams.at(0) || "72वीं BPSC CCE");
  const [aiSub, setAiSub] = useState("AUTO");
  const [title, setTitle] = useState("");
  const [pats, setPats] = useState<string[]>(["STANDARD", "ASSERTION", "MATCHING", "ORDERING", "STATEMENT", "PAIRS", "NOT_CORRECT", "CONCEPTUAL"]);
  const [optMode, setOptMode] = useState("5_UNATTEMPTED");
  const [diff, setDiff] = useState("HARD");
  const [count, setCount] = useState(10);
  const [tier, setTier] = useState<"FREE" | "PRO">("FREE");
  const [examTags, setExamTags] = useState("BPSC, UPSC, JPSC");
  const [loading, setLoading] = useState(false);

  const togglePat = (id: string) => setPats((p) => (p.includes(id) ? (p.length > 1 ? p.filter((x) => x !== id) : p) : [...p, id]));

  const runAI = async () => {
    if (!title.trim() || !geminiKey.trim()) return alert("कृपया अध्याय का शीर्षक और Gemini API Key भरें।");
    localStorage.setItem("cb_gemini_api_key", geminiKey.trim());
    const sub = aiSub === "AUTO" ? detectSubjectAuto(title, "History") : aiSub;
    setLoading(true);
    try {
      const patList = ALL_PATTERNS.filter((p) => pats.includes(p.id)).map((p) => p.desc).join("; ");
      const prompt = `Create ${count} ${diff === "HARD" ? "TOUGH UPSC/BPSC" : "Moderate"} bilingual (Hindi+English) MCQs on "${title.trim()}" for ${aiExam} (${sub}). Mix patterns: [${patList}]. Use VERY SIMPLE everyday words. Give 4 options each.
EXPLANATION RULE: For EVERY question, provide:
1) "ans_points_hi" & "ans_points_en": 100+ words point-wise core exam facts for the correct answer.
2) "other_boxes": array of 3 objects for the OTHER 3 options, each having {"title":"Option Name","points_hi":"100+ words complete exam-oriented point-wise facts about this option","points_en":"100+ words English facts"}.
Return ONLY JSON array: [{"pyp":"PYP","year":"2024","examTags":"${examTags}","gotRightPct":38,"q_hi":"हिन्दी","q_en":"English","opts_hi":["1","2","3","4"],"opts_en":["1","2","3","4"],"ans":0,"ans_points_hi":"100+ शब्द","ans_points_en":"100+ words","other_boxes":[{"title":"वि1","points_hi":"100+ शब्द","points_en":"100+ words"},{"title":"वि2","points_hi":"100+ शब्द","points_en":"100+ words"},{"title":"वि3","points_hi":"100+ शब्द","points_en":"100+ words"}]}]`;

      const res = await fetch(`https://googleapis.com{encodeURIComponent(geminiKey.trim())}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      const raw = (data?.candidates?.at(0)?.content?.parts?.at(0)?.text) || "";
      const arr = JSON.parse(raw.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim());
      const qs: WeakQuestion[] = arr.map((x: any, i: number) => {
        const boxesHi = Array.isArray(x.other_boxes) ? x.other_boxes.map((b: any) => ({ title: b.title || "", points: b.points_hi || "" })) : [];
        const boxesEn = Array.isArray(x.other_boxes) ? x.other_boxes.map((b: any) => ({ title: b.title || "", points: b.points_en || b.points_hi || "" })) : [];
        return {
          id: i + 1, pyp: x.pyp || "PYP", year: String(x.year || "2024"), examTags: x.examTags || examTags, gotRightPct: Number(x.gotRightPct || 38),
          q_hi: x.q_hi || "", q_en: x.q_en || x.q_hi || "",
          opts_hi: x.opts_hi || ["1", "2", "3", "4"], opts_en: x.opts_en || ["1", "2", "3", "4"],
          ans: Number(x.ans || 0),
          kp_hi: format4BoxExplanation(x.ans_points_hi || x.kp_hi || "", boxesHi),
          kp_en: format4BoxExplanation(x.ans_points_en || x.kp_en || "", boxesEn)
        };
      });
      const idx = modules.findIndex((m) => m.title.toLowerCase() === title.trim().toLowerCase() && m.exam === aiExam);
      const bal = balanceAnswerPositions(qs, optMode, idx >= 0 ? modules[idx].questions.length : 0);
      if (idx >= 0) {
        saveAll(modules.map((m, i) => (i !== idx ? m : { ...m, subject: sub, questions: [...m.questions, ...bal.map((q, k) => ({ ...q, id: m.questions.length + k + 1 }))] })));
      } else {
        saveAll([...modules, { id: `mod_${Date.now()}`, exam: aiExam, subject: sub, title: title.trim(), tier, targetAcc: 72, targetSpeed: 24, completedText: "210+ Completed", questions: bal }]);
      }
      setTitle("");
      alert(`बधाई हो! [${sub}] के "${title}" में 4-डब्बा व्याख्या वाले ${bal.length} प्रश्न जुड़ गए!`);
    } catch {
      alert("AI जनरेशन में त्रुटि—कृपया API Key या इंटरनेट जांचें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-indigo-200 space-y-2.5 text-xs">
      <div className="font-extrabold text-sm text-indigo-950">✨ AI 8-Pattern + 4-Box (100-100 शब्द) Chapter Builder</div>
      <input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="Gemini API Key..." className="w-full p-2 border rounded-xl bg-slate-50" />
      <div className="grid grid-cols-2 gap-2">
        <select value={aiExam} onChange={(e) => setAiExam(e.target.value)} className="p-2 border rounded-xl font-bold">{customExams.map((e) => <option key={e} value={e}>{e}</option>)}</select>
        <select value={aiSub} onChange={(e) => setAiSub(e.target.value)} className="p-2 border rounded-xl font-bold"><option value="AUTO">🤖 Auto Subject</option>{customSubjects.map((s) => <option key={s} value={s}>{s}</option>)}</select>
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="अध्याय का शीर्षक लिखें (जैसे: हड़प्पा सभ्यता)..." className="w-full p-2.5 border border-indigo-300 rounded-xl font-bold" />
      <input value={examTags} onChange={(e) => setExamTags(e.target.value)} placeholder="Exam Tags (जैसे: BPSC, UPSC, JPSC)" className="w-full p-2 border rounded-xl font-bold" />
      <div className="flex flex-wrap gap-1.5">{ALL_PATTERNS.map((p) => <button key={p.id} type="button" onClick={() => togglePat(p.id)} className={"px-2.5 py-1 rounded-lg text-[11px] font-extrabold border " + (pats.includes(p.id) ? "bg-indigo-600 text-white" : "bg-slate-50")}>{pats.includes(p.id) ? "✓ " : ""}{p.label}</button>)}</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} className="p-2 border rounded font-bold" />
        <select disabled={!canChangeOpt5} value={optMode} onChange={(e) => setOptMode(e.target.value)} className="p-2 border rounded font-bold"><option value="5_UNATTEMPTED">5 Opts: अनुत्तरित प्रश्न</option><option value="5_BPSC_E">5 Opts: BPSC E</option><option value="4_OPTS">4 Options</option></select>
        <select value={diff} onChange={(e) => setDiff(e.target.value)} className="p-2 border rounded font-bold"><option value="HARD">Hard / Tough</option><option value="MODERATE">Moderate</option></select>
        <select value={tier} onChange={(e) => setTier(e.target.value as any)} className="p-2 border rounded font-bold"><option value="FREE">FREE</option><option value="PRO">PRO</option></select>
      </div>
      <button type="button" disabled={loading} onClick={runAI} className="w-full py-3 bg-[#0084FF] text-white rounded-xl font-extrabold">{loading ? "⏳ AI 4-डब्बा व्याख्या व प्रश्न बना रहा है..." : `✨ AI से ${count} प्रश्न बनाएं`}</button>
    </div>
  );
}

