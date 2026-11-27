"use client";
import React, { useState, useEffect } from "react";
import { FlipExamTagsModal } from "./FlipExamTagModal";
import { FlipCardsList } from "./FlipCardsList";

const DEFAULT_SUBJECTS = ["Bihar Special", "National", "International", "Polity", "Economy", "Sci & Tech", "Environment", "Defence", "Sports", "Awards"];

export default function FlipCurrentAffairsStudio(props: { items: any[]; setItems: (next: any[]) => void; caWeek: string; caMonth: string }) {
  const { items, setItems, caWeek, caMonth } = props;
  const [subjects, setSubjects] = useState<string[]>(DEFAULT_SUBJECTS);
  const [editSubOpen, setEditSubOpen] = useState(false);
  const [newSubName, setNewSubName] = useState("");
  const [tagModalOpen, setTagModalOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [editCardId, setEditCardId] = useState<string | null>(null);
  const [subject, setSubject] = useState("Bihar Special");
  const [examStage, setExamStage] = useState("Prelims & Mains");
  const [tags, setTags] = useState<string[]>(["72वीं BPSC CCE", "UPSC CSE (IAS/IPS)"]);
  const [titleHi, setTitleHi] = useState(""); const [titleEn, setTitleEn] = useState("");
  const [sumHi, setSumHi] = useState(""); const [sumEn, setSumEn] = useState("");
  const [points, setPoints] = useState([{ hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }, { hi: "", en: "" }]);

  useEffect(() => {
    try { const s = localStorage.getItem("cb_flip_custom_subjects"); if (s) setSubjects(JSON.parse(s)); } catch {}
  }, []);

  const saveSubjects = (next: string[]) => { setSubjects(next); localStorage.setItem("cb_flip_custom_subjects", JSON.stringify(next)); };

  const smartAutoFill = () => {
    const t = topic.trim() || titleHi.trim();
    if (!t) return alert("कृपया पहले ऊपर समाचार या विषय का शीर्षक लिखें।");
    setTitleHi(`${t} (${subject} — विशेष परीक्षा विश्लेषण)`);
    setTitleEn(`${t} (${subject} — Key Exam Analysis)`);
    setSumHi(`"${t}" (${subject}) से जुड़ा यह घटनाक्रम आगामी ${tags.slice(0, 2).join(" एवं ") || "BPSC/UPSC"} परीक्षा के लिए अत्यंत महत्वपूर्ण है।`);
    setSumEn(`Recent developments regarding "${t}" under ${subject} hold high relevance for upcoming ${tags.slice(0, 2).join(" & ") || "BPSC/UPSC"} exams.`);
    setPoints([
      { hi: `1. पृष्ठभूमि: "${t}" की शुरुआत और मुख्य उद्देश्य (${subject})।`, en: `1. Background: Core purpose of "${t}".` },
      { hi: `2. प्रमुख प्रावधान: "${t}" के मुख्य नियम, लक्ष्य और लाभार्थी।`, en: `2. Key Provisions: Rules and targets under "${t}".` },
      { hi: `3. नोडल संस्था: "${t}" के क्रियान्वयन के लिए जिम्मेदार मंत्रालय।`, en: `3. Nodal Body: Implementing ministry for "${t}".` },
      { hi: `4. बिहार व राष्ट्रीय महत्व: बिहार और भारत पर सीधा प्रभाव।`, en: `4. Bihar & National Impact.` },
      { hi: `5. Prelims तथ्य: तिथि, स्थान, समिति या रिपोर्ट।`, en: `5. Prelims Facts: Dates, venue, report.` },
      { hi: `6. Mains दृष्टिकोण: चुनौतियाँ और आगे की राह।`, en: `6. Mains View: Challenges and way forward.` }
    ]);
  };

  const publishCard = () => {
    if (!titleHi.trim() || !sumHi.trim()) return alert("कृपया कम से कम हिन्दी शीर्षक और सारांश भरें।");
    const validPts = points.filter((p) => p.hi.trim() || p.en.trim());
    const card = { id: editCardId || `fn_${Date.now()}`, subject, examStage, date: new Date().toISOString().slice(0, 10), week: caWeek, month: caMonth, title_hi: titleHi.trim(), title_en: titleEn.trim() || titleHi.trim(), summary_hi: sumHi.trim(), summary_en: sumEn.trim() || sumHi.trim(), tip_hi: "", tip_en: "", details_hi: validPts.map((p) => p.hi.trim() || p.en.trim()), details_en: validPts.map((p) => p.en.trim() || p.hi.trim()), tags: tags.length ? tags : ["BPSC"] };
    const next = editCardId ? items.map((x) => (x.id === editCardId ? card : x)) : [card, ...items];
    setItems(next);
    try { localStorage.setItem("cb_flip_news_v1", JSON.stringify(next)); } catch {}
    setEditCardId(null); setTopic(""); setTitleHi(""); setTitleEn(""); setSumHi(""); setSumEn("");
    alert("✓ Flip News लाइव हो गई है!");
  };

  return (
    <div className="max-w-5xl mx-auto my-3 p-4 bg-slate-900 text-white rounded-2xl border border-slate-700 space-y-3 text-xs">
      {tagModalOpen && <FlipExamTagsModal selected={tags} onChange={setTags} onClose={() => setTagModalOpen(false)} />}
      <div className="flex justify-between items-center border-b border-slate-800 pb-2"><h3 className="font-black text-base text-amber-300">Flip Current Affairs Generator</h3><span className="text-[11px] text-slate-400">कुल कार्ड्स: {items.length}</span></div>
      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row gap-2"><input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="समाचार या विषय का शीर्षक लिखें..." className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold" /><button type="button" onClick={smartAutoFill} className="px-4 py-2.5 bg-amber-400 text-slate-950 rounded-xl font-black shrink-0">1-Click AI Auto-Fill</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div><div className="flex justify-between mb-1"><span className="text-[10px] text-slate-400">विषय (Subject)</span><button type="button" onClick={() => setEditSubOpen(!editSubOpen)} className="text-[10px] text-amber-300 underline">+ नया / Edit</button></div><select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 font-bold">{subjects.map((s) => <option key={s} value={s}>{s}</option>)}</select>{editSubOpen && <div className="mt-1 p-2 bg-slate-950 border border-slate-700 rounded-xl space-y-1"><div className="flex gap-1"><input value={newSubName} onChange={(e) => setNewSubName(e.target.value)} placeholder="नया विषय..." className="flex-1 p-1 bg-slate-900 border border-slate-700 rounded" /><button type="button" onClick={() => { if (!newSubName.trim()) return; saveSubjects([...subjects, newSubName.trim()]); setSubject(newSubName.trim()); setNewSubName(""); }} className="px-2 bg-emerald-600 rounded font-bold">+</button></div><div className="flex flex-wrap gap-1">{subjects.map((s) => <span key={s} className="px-1.5 py-0.5 bg-slate-800 rounded flex gap-1">{s}<button type="button" onClick={() => saveSubjects(subjects.filter((x) => x !== s))} className="text-rose-400">✕</button></span>)}</div></div>}</div>
        <div><span className="block text-[10px] text-slate-400 mb-1">EXAM TIP</span><select value={examStage} onChange={(e) => setExamStage(e.target.value)} className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 font-bold"><option value="Prelims & Mains">Prelims & Mains</option><option value="Prelims">Prelims</option><option value="Mains">Mains</option><option value="">कुछ नहीं</option></select></div>
        <div><span className="block text-[10px] text-slate-400 mb-1">Exam Tags ({tags.length})</span><button type="button" onClick={() => setTagModalOpen(true)} className="w-full p-2 rounded-xl bg-slate-950 border border-amber-400/60 text-left font-bold truncate text-amber-200">{tags.join(", ") || "🏷️ चुनें..."}</button></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><input value={titleHi} onChange={(e) => setTitleHi(e.target.value)} placeholder="हिन्दी शीर्षक..." className="p-2 rounded-xl bg-slate-950 border border-slate-700 font-bold" /><input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} placeholder="English Title..." className="p-2 rounded-xl bg-slate-950 border border-slate-700" /><textarea rows={2} value={sumHi} onChange={(e) => setSumHi(e.target.value)} placeholder="हिन्दी सारांश..." className="p-2 rounded-xl bg-slate-950 border border-slate-700" /><textarea rows={2} value={sumEn} onChange={(e) => setSumEn(e.target.value)} placeholder="English Summary..." className="p-2 rounded-xl bg-slate-950 border border-slate-700" /></div>
      <div className="space-y-1.5"><div className="flex justify-between"><span className="font-bold text-amber-300">🔄 Flip Points ({points.length})</span><button type="button" onClick={() => setPoints([...points, { hi: "", en: "" }])} className="px-2.5 py-1 bg-indigo-600 rounded-lg font-bold">+ Add Flip Point</button></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{points.map((pt, idx) => <div key={idx} className="p-2 bg-slate-950 border border-slate-800 rounded-xl space-y-1"><div className="flex justify-between text-[10px]"><span>Point {idx + 1}</span>{points.length > 1 && <button type="button" onClick={() => setPoints(points.filter((_, i) => i !== idx))} className="text-rose-400">✕</button>}</div><input value={pt.hi} onChange={(e) => { const c = [...points]; c[idx] = { ...c[idx], hi: e.target.value }; setPoints(c); }} placeholder={`हिन्दी बिंदु ${idx + 1}`} className="w-full p-1 bg-slate-900 border border-slate-700 rounded" /><input value={pt.en} onChange={(e) => { const c = [...points]; c[idx] = { ...c[idx], en: e.target.value }; setPoints(c); }} placeholder={`English Point ${idx + 1}`} className="w-full p-1 bg-slate-900 border border-slate-700 rounded" /></div>)}</div></div>
      <button type="button" onClick={publishCard} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-black">Publish Flip News Live</button>
      <FlipCardsList items={items} onEdit={(it) => { setEditCardId(it.id); setSubject(it.subject); setExamStage(it.examStage || ""); setTags(it.tags || []); setTitleHi(it.title_hi); setTitleEn(it.title_en || ""); setSumHi(it.summary_hi); setSumEn(it.summary_en || ""); setPoints((it.details_hi || []).map((h: string, k: number) => ({ hi: h, en: it.details_en?.[k] || "" }))); }} onDelete={(id) => { const u = items.filter((x) => x.id !== id); setItems(u); localStorage.setItem("cb_flip_news_v1", JSON.stringify(u)); }} />
    </div>
  );
}

