"use client";
import React, { useState } from "react";
import { WeakChapterModule, WeakQuestion } from "./WeakAreasPro";
import { ALL_PATTERNS } from "./WeakStudioData";
import { balanceAnswerPositions, detectSubjectAuto, format4BoxExplanation } from "./WeakStudioEngine";

export function WeakStudioAI(props: {
  modules: WeakChapterModule[];
  saveAll: (next: WeakChapterModule[]) => void;
  canChangeOpt5: boolean;
  customExams: string[];
  customSubjects: string[];
}) {
  const { modules, saveAll, canChangeOpt5, customExams, customSubjects } = props;
  const [geminiKey, setGeminiKey] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("cb_gemini_api_key") || "" : ""));
  const [aiExam, setAiExam] = useState(customExams.at(0) || "72वीं BPSC CCE");
  const [aiSub, setAiSub] = useState("AUTO");
  const [title, setTitle] = useState("");
  const [pats, setPats] = useState(["STANDARD", "ASSERTION", "MATCHING", "ORDERING", "STATEMENT", "PAIRS", "NOT_CORRECT", "CONCEPTUAL"]);
  const [optMode, setOptMode] = useState("5_UNATTEMPTED");
  const [count, setCount] = useState(10);
  const [examTags, setExamTags] = useState("BPSC, UPSC, JPSC");
  const [loading, setLoading] = useState(false);

  const togglePat = (id: string) => {
    setPats((p) => (p.includes(id) ? (p.length > 1 ? p.filter((x) => x !== id) : p) : [...p, id]));
  };

  const runAI = async () => {
    if (!title.trim() || !geminiKey.trim()) return alert("कृपया अध्याय का शीर्षक और Gemini API Key भरें।");
    localStorage.setItem("cb_gemini_api_key", geminiKey.trim());
    const sub = aiSub === "AUTO" ? detectSubjectAuto(title, "History") : aiSub;
    setLoading(true);
    try {
      const patList = ALL_PATTERNS.filter((p) => pats.includes(p.id)).map((p) => p.desc).join("; ");
      const prompt = `Create ${count} tough bilingual MCQs on "${title.trim()}" for ${aiExam} (${sub}). Mix: [${patList}]. Simple words. 4 options each. Provide "ans_points_hi" (100+ words key points) and "other_boxes" (3 objects for other 3 options, each with "title" & "points_hi" 100+ words). Return ONLY JSON array: [{"pyp":"PYP","year":"2024","examTags":"${examTags}","gotRightPct":38,"q_hi":"हिन्दी","q_en":"English","opts_hi":["1","2","3","4"],"opts_en":["1","2","3","4"],"ans":0,"ans_points_hi":"100+ शब्द","other_boxes":[{"title":"वि1","points_hi":"100+ शब्द"},{"title":"वि2","points_hi":"100+ शब्द"},{"title":"वि3","points_hi":"100+ शब्द"}]}]`;
      const res = await fetch(`https://googleapis.com{encodeURIComponent(geminiKey.trim())}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      const raw = (data?.candidates?.at(0)?.content?.parts?.at(0)?.text) || "";
      const arr = JSON.parse(raw.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim());
      const qs: WeakQuestion[] = arr.map((x: any, i: number) => {
        const boxes = Array.isArray(x.other_boxes) ? x.other_boxes.map((b: any) => ({ title: b.title || "", points: b.points_hi || "" })) : [];
        const kp = format4BoxExplanation(x.ans_points_hi || x.kp_hi || "", boxes);
        return {
          id: i + 1,
          pyp: x.pyp || "PYP",
          year: String(x.year || "2024"),
          examTags: x.examTags || examTags,
          gotRightPct: 38,
          q_hi: x.q_hi || "",
          q_en: x.q_en || x.q_hi || "",
          opts_hi: x.opts_hi || ["1", "2", "3", "4"],
          opts_en: x.opts_en || ["1", "2", "3", "4"],
          ans: Number(x.ans || 0),
          kp_hi: kp,
          kp_en: kp
        };
      });
      const bal = balanceAnswerPositions(qs, optMode, 0);
      saveAll([...modules, { id: `mod_${Date.now()}`, exam: aiExam, subject: sub, title: title.trim(), tier: "FREE", targetAcc: 72, targetSpeed: 24, completedText: "210+ Completed", questions: bal }]);
      setTitle("");
      alert(`बधाई हो! [${sub}] के "${title}" में 4-डब्बा व्याख्या वाले ${bal.length} प्रश्न तैयार हो गए!`);
    } catch {
      alert("AI त्रुटि—API Key जांचें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-indigo-200 space-y-2.5 text-xs">
      <div className="font-extrabold text-sm text-indigo-950">✨ AI 8-Pattern + 4-Box Builder</div>
      <input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="Gemini API Key..." className="w-full p-2.5 border rounded-xl bg-slate-50" />
      <div className="p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
        <div className="font-extrabold text-[11px] text-indigo-900">1-Click AI से अध्याय व {count} द्वीभाषी प्रश्न तैयार करें:</div>
        <div className="flex gap-2 items-center">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="अध्याय या विषय का शीर्षक लिखें (जैसे: हड़प्पा सभ्यता)..." className="flex-1 p-2.5 border border-indigo-300 rounded-xl bg-white font-bold" />
          <button type="button" disabled={loading} onClick={runAI} className="px-3.5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black shrink-0 shadow-sm">
            {loading ? "⏳ बन रहा है..." : "1-Click AI Auto-Fill"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <select value={aiExam} onChange={(e) => setAiExam(e.target.value)} className="p-2 border rounded-xl font-bold">{customExams.map((e) => <option key={e} value={e}>{e}</option>)}</select>
        <select value={aiSub} onChange={(e) => setAiSub(e.target.value)} className="p-2 border rounded-xl font-bold"><option value="AUTO">🤖 Auto Subject</option>{customSubjects.map((s) => <option key={s} value={s}>{s}</option>)}</select>
      </div>
      <input value={examTags} onChange={(e) => setExamTags(e.target.value)} placeholder="Exam Tags (BPSC, UPSC, JPSC)" className="w-full p-2 border rounded-xl font-bold" />
      <div className="flex flex-wrap gap-1.5">
        {ALL_PATTERNS.map((p) => (
          <button key={p.id} type="button" onClick={() => togglePat(p.id)} className={"px-2.5 py-1 rounded-lg text-[11px] font-extrabold border " + (pats.includes(p.id) ? "bg-indigo-600 text-white" : "bg-slate-50")}>
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} className="p-2 border rounded font-bold" />
        <select disabled={!canChangeOpt5} value={optMode} onChange={(e) => setOptMode(e.target.value)} className="p-2 border rounded font-bold">
          <option value="5_UNATTEMPTED">5 Opts: अनुत्तरित प्रश्न</option>
          <option value="5_BPSC_E">5 Opts: BPSC E</option>
          <option value="4_OPTS">4 Options</option>
        </select>
      </div>
      <button type="button" disabled={loading} onClick={runAI} className="w-full py-3 bg-[#0084FF] text-white rounded-xl font-extrabold">
        {loading ? "⏳ बन रहा है..." : `✨ AI से ${count} प्रश्न बनाएं`}
      </button>
    </div>
  );
}

