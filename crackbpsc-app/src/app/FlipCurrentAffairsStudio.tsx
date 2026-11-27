
"use client";
import React, { useState, useEffect } from "react";
import { FlipExamTagsModal } from "./FlipExamTagsModal";

const DEFAULT_SUBJECTS = ["Bihar Special", "National", "International", "Polity", "Economy", "Sci & Tech", "Environment", "Defence", "Sports", "Awards"];

export default function FlipCurrentAffairsStudio(props: {
  items: any[];
  setItems: (next: any[]) => void;
  caWeek: string;
  caMonth: string;
}) {
  const { items, setItems, caWeek, caMonth } = props;
  const [subjects, setSubjects] = useState<string[]>(DEFAULT_SUBJECTS);
  const [editSubOpen, setEditSubOpen] = useState(false);
  const [newSubName, setNewSubName] = useState("");
  const [tagModalOpen, setTagModalOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [busy, setBusy] = useState(false);
  const [editCardId, setEditCardId] = useState<string | null>(null);

  const [subject, setSubject] = useState("Bihar Special");
  const [examStage, setExamStage] = useState("Prelims & Mains");
  const [tags, setTags] = useState<string[]>(["72वीं BPSC CCE", "UPSC CSE (IAS/IPS)"]);
  const [titleHi, setTitleHi] = useState(""); const [titleEn, setTitleEn] = useState("");
  const [sumHi, setSumHi] = useState(""); const [sumEn, setSumEn] = useState("");
  const [tipHi, setTipHi] = useState(""); const [tipEn, setTipEn] = useState("");
  const [points, setPoints] = useState<{ hi: string; en: string }[]>([
    { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const s = localStorage.getItem("cb_flip_custom_subjects");
      if (s) setSubjects(JSON.parse(s));
    } catch {}
  }, []);

  const saveSubjects = (next: string[]) => {
    setSubjects(next);
    localStorage.setItem("cb_flip_custom_subjects", JSON.stringify(next));
  };

  const smartAutoFill = async () => {
    const t = topic.trim() || titleHi.trim();
    if (!t) return alert("कृपया पहले ऊपर समाचार या विषय का शीर्षक लिखें।");
    setBusy(true);
    const key = typeof window !== "undefined" ? localStorage.getItem("cb_gemini_api_key") || "" : "";
    try {
      if (key) {
        const prompt = `Create detailed bilingual (Hindi+English) UPSC/BPSC current affairs card on "${t}" (${subject}). Return ONLY JSON: {"title_hi":"","title_en":"","summary_hi":"","summary_en":"","tip_hi":"","tip_en":"","pts":[{"hi":"","en":""},{"hi":"","en":""},{"hi":"","en":""},{"hi":"","en":""},{"hi":"","en":""},{"hi":"","en":""}]}`;
        const res = await fetch(`https://googleapis.com{encodeURIComponent(key)}`, {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await res.json();
        const raw = (data?.candidates?.at(0)?.content?.parts?.at(0)?.text) || "";
        const j = JSON.parse(raw.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim());
        setTitleHi(j.title_hi || t); setTitleEn(j.title_en || t);
        setSumHi(j.summary_hi || ""); setSumEn(j.summary_en || "");
        setTipHi(j.tip_hi || ""); setTipEn(j.tip_en || "");
        if (Array.isArray(j.pts) && j.pts.length) setPoints(j.pts);
        setBusy(false); return;
      }
    } catch {}
    const todayStr = new Date().toLocaleDateString("hi-IN");
    setTitleHi(`${t} (${subject} — विशेष परीक्षा विश्लेषण)`);
    setTitleEn(`${t} (${subject} — Key Exam Analysis)`);
    setSumHi(`${todayStr} के संदर्भ में "${t}" (${subject}) से जुड़ा यह घटनाक्रम आगामी ${tags.slice(0, 2).join(" एवं ") || "BPSC/UPSC"} परीक्षा के लिए अत्यंत महत्वपूर्ण है। इसमें संवैधानिक, प्रशासनिक और नीतिगत पहलुओं का सीधा प्रभाव शामिल है।`);
    setSumEn(`Recent developments regarding "${t}" under ${subject} hold high relevance for upcoming ${tags.slice(0, 2).join(" & ") || "BPSC/UPSC"} examinations, covering policy, governance, and institutional impacts.`);
    setTipHi(`Exam Tip (${examStage}): "${t}" से जुड़े नोडल मंत्रालय, स्थापना वर्ष, प्रमुख प्रावधान और बिहार/राष्ट्रीय स्तर के प्रभावों को विशेष रूप से याद रखें।`);
    setTipEn(`Exam Tip (${examStage}): Focus on nodal agency, launch timeline, key provisions, and state/national impact of "${t}".`);
    setPoints([
      { hi: `1. पृष्ठभूमि व परिचय: "${t}" की शुरुआत और इसका मुख्य उद्देश्य (${subject} संदर्भ)।`, en: `1. Background & Objective: Core purpose and launch context of "${t}".` },
      { hi: `2. प्रमुख प्रावधान: "${t}" के अंतर्गत लागू किए गए मुख्य नियम, लक्ष्य और लाभार्थी वर्ग।`, en: `2. Key Provisions: Major rules, targets, and beneficiaries under "${t}".` },
      { hi: `3. नोडल मंत्रालय / संस्था: "${t}" के क्रियान्वयन और निगरानी के लिए जिम्मेदार प्रमुख निकाय।`, en: `3. Nodal Body: Implementing ministry and regulatory framework for "${t}".` },
      { hi: `4. बिहार व राष्ट्रीय महत्व: इस पहल का बिहार राज्य तथा भारतीय अर्थव्यवस्था/समाज पर सीधा प्रभाव।`, en: `4. National & Bihar Impact: Direct socio-economic and administrative significance.` },
      { hi: `5. संभावित Prelims तथ्य: तिथि, स्थान, प्रमुख व्यक्तित्व या संबंधित समिति/रिपोर्ट।`, en: `5. Prelims Fact Check: Important dates, venue, committee, and official rankings.` },
      { hi: `6. मुख्य परीक्षा (Mains) दृष्टिकोण: चुनौतियाँ, पारदर्शिता और आगे की राह (Way Forward)।`, en: `6. Mains Perspective: Key challenges, governance reforms, and way forward.` }
    ]);
    setBusy(false);
  };

  const publishCard = () => {
    if (!titleHi.trim() || !sumHi.trim()) return alert("कृपया कम से कम हिन्दी शीर्षक और सारांश भरें।");
    const validPts = points.filter((p) => p.hi.trim() || p.en.trim());
    const card = {
      id: editCardId || `fn_${Date.now()}`,
      subject, examStage,
      date: new Date().toISOString().slice(0, 10),
      week: caWeek, month: caMonth,
      title_hi: titleHi.trim(), title_en: titleEn.trim() || titleHi.trim(),
      summary_hi: sumHi.trim(), summary_en: sumEn.trim() || sumHi.trim(),
      tip_hi: tipHi.trim(), tip_en: tipEn.trim() || tipHi.trim(),
      details_hi: validPts.map((p) => p.hi.trim() || p.en.trim()),
      details_en: validPts.map((p) => p.en.trim() || p.hi.trim()),
      tags: tags.length ? tags : ["BPSC"]
    };
    const next = editCardId ? items.map((x) => (x.id === editCardId ? card : x)) : [card, ...items];
    setItems(next);
    try { localStorage.setItem("cb_flip_news_v1", JSON.stringify(next)); } catch {}
    setEditCardId(null); setTopic(""); setTitleHi(""); setTitleEn(""); setSumHi(""); setSumEn(""); setTipHi(""); setTipEn("");
    alert(editCardId ? "✓ Flip Card अपडेट हो गया!" : "✓ नई Flip News लाइव हो गई है!");
  };

  return (
    <div className="max-w-5xl mx-auto my-3 p-4 bg-slate-900 text-white rounded-2xl border border-slate-700 space-y-3 text-xs">
      {tagModalOpen && <FlipExamTagsModal selected={tags} onChange={setTags} onClose={() => setTagModalOpen(false)} />}
      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-800 pb-2">
        <div><span className="px-2 py-0.5 bg-blue-600 rounded text-[10px] font-black">FLIP STUDIO PRO</span><h3 className="font-black text-base text-amber-300 mt-0.5">Flip Current Affairs Generator</h3></div>
        <span className="text-[11px] text-slate-400 font-bold">कुल लाइव कार्ड्स: {items.length}</span>
      </div>
      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <div className="font-black text-slate-200">1-Click AI से द्वीभाषी (हिन्दी + English) लेख व अनलिमिटेड Flip Points भरें:</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="समाचार या विषय का शीर्षक लिखें..." className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold" />
          <button type="button" disabled={busy} onClick={smartAutoFill} className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black shrink-0">{busy ? "⏳ तैयार हो रहा है..." : "1-Click AI Auto-Fill"}</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div>
          <div className="flex justify-between items-center mb-1"><span className="text-[10px] text-slate-400 font-bold">विषय (Subject)</span><button type="button" onClick={() => setEditSubOpen(!editSubOpen)} className="text-[10px] text-amber-300 underline font-bold">{editSubOpen ? "बंद करें" : "+ नया / ✏️ Edit"}</button></div>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 font-bold">{subjects.map((s) => <option key={s} value={s}>{s}</option>)}</select>
          {editSubOpen && <div className="mt-1.5 p-2 bg-slate-950 border border-slate-700 rounded-xl space-y-1.5"><div className="flex gap-1"><input value={newSubName} onChange={(e) => setNewSubName(e.target.value)} placeholder="नया विषय..." className="flex-1 p-1.5 bg-slate-900 border border-slate-700 rounded" /><button type="button" onClick={() => { if (!newSubName.trim()) return; const u = [...subjects, newSubName.trim()]; saveSubjects(u); setSubject(newSubName.trim()); setNewSubName(""); }} className="px-2 bg-emerald-600 rounded font-bold">+</button></div><div className="flex flex-wrap gap-1">{subjects.map((s) => <span key={s} className="px-2 py-0.5 bg-slate-800 rounded flex items-center gap-1">{s}<button type="button" onClick={() => saveSubjects(subjects.filter((x) => x !== s))} className="text-rose-400">✕</button></span>)}</div></div>}
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 font-bold mb-1">EXAM TIP चरण</span>

          
