
"use client";
import React, { useState } from "react";

export const ALL_INDIAN_EXAMS = [
  "72वीं BPSC CCE", "BPSC TRE 4.0", "BPSC Headmaster", "BSSC CGL-4", "BSSC Inter Level",
  "Bihar Daroga (SI)", "Bihar Police Constable", "Bihar Civil Court", "Patna High Court",
  "UPSC CSE (IAS/IPS)", "UPSC CDS / NDA", "UPSC CAPF", "UPSC EPFO",
  "UPPCS Prelims/Mains", "UP RO/ARO", "UP Police SI", "JPSC Civil Services", "JSSC CGL",
  "MPPSC", "RAS (RPSC)", "CGPSC", "UKPSC", "HPSC",
  "SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO", "SSC GD",
  "RRB NTPC", "RRB Group D", "RRB ALP / Technician",
  "IBPS PO / Clerk", "SBI PO / Clerk", "RBI Grade B", "NABARD Grade A",
  "CTET", "STET Bihar", "UGC NET / JRF"
];

export function FlipExamTagsModal(props: {
  selected: string[];
  onChange: (next: string[]) => void;
  onClose: () => void;
}) {
  const { selected, onChange, onClose } = props;
  const [search, setSearch] = useState("");
  const [customTag, setCustomTag] = useState("");
  const [allPool, setAllPool] = useState<string[]>(() => {
    if (typeof window === "undefined") return ALL_INDIAN_EXAMS;
    try {
      const saved = localStorage.getItem("cb_flip_exam_pool");
      return saved ? JSON.parse(saved) : ALL_INDIAN_EXAMS;
    } catch { return ALL_INDIAN_EXAMS; }
  });

  const available = allPool.filter((e) => !selected.includes(e) && e.toLowerCase().includes(search.toLowerCase()));
  const addTag = (t: string) => onChange([...selected, t]);
  const removeTag = (t: string) => onChange(selected.filter((x) => x !== t));

  const addCustom = () => {
    const v = customTag.trim();
    if (!v) return;
    if (!allPool.includes(v)) {
      const nextPool = [v, ...allPool];
      setAllPool(nextPool);
      localStorage.setItem("cb_flip_exam_pool", JSON.stringify(nextPool));
    }
    if (!selected.includes(v)) addTag(v);
    setCustomTag("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-xl max-h-[88vh] flex flex-col overflow-hidden shadow-2xl">
        <div className="px-4 py-3 bg-[#181C24] text-white flex justify-between items-center">
          <span className="font-black text-sm">🏷️ Exam Tags चुनें ({selected.length} चुने गए)</span>
          <button type="button" onClick={onClose} className="px-3 py-1 bg-emerald-500 text-slate-950 rounded-lg font-black text-xs">✓ Done</button>
        </div>
        <div className="p-3 overflow-y-auto space-y-3 text-xs">
          <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5">
            <div className="flex justify-between font-extrabold text-amber-900">
              <span>चुने गए Exam Tags (हटाने के लिए टैप करें):</span>
              {selected.length > 0 && <button type="button" onClick={() => onChange([])} className="text-rose-600 underline">Clear All</button>}
            </div>
            <div className="flex flex-wrap gap-1.5 min-h-[28px]">
              {selected.length === 0 ? <span className="text-slate-400">नीचे की सूची से किसी भी परीक्षा पर टैप करें...</span> : selected.map((t) => (
                <button key={t} type="button" onClick={() => removeTag(t)} className="px-2.5 py-1 bg-[#0084FF] text-white rounded-full font-bold flex items-center gap-1">{t} <span>✕</span></button>
              ))}
            </div>
          </div>
          <div className="flex gap-1.5">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 परीक्षा खोजें (BPSC, UPSC, SSC, Railway)..." className="flex-1 p-2 border rounded-xl bg-slate-50 font-bold" />
            <button type="button" onClick={() => onChange([...allPool])} className="px-2.5 py-1 bg-slate-800 text-white rounded-xl font-bold shrink-0">Select All</button>
          </div>
          <div className="flex gap-1.5">
            <input value={customTag} onChange={(e) => setCustomTag(e.target.value)} placeholder="+ नया कस्टम Exam Tag जोड़ें..." className="flex-1 p-2 border rounded-xl" />
            <button type="button" onClick={addCustom} className="px-3 py-2 bg-emerald-600 text-white rounded-xl font-bold shrink-0">जोड़ें</button>
          </div>
          <div>
            <div className="font-extrabold text-slate-600 mb-1.5">उपलब्ध परीक्षाएँ (जोड़ने के लिए टैप करें):</div>
            <div className="flex flex-wrap gap-1.5">
              {available.map((e) => (
                <button key={e} type="button" onClick={() => addTag(e)} className="px-2.5 py-1 bg-slate-100 hover:bg-sky-100 border border-slate-300 rounded-full font-bold text-slate-800">+ {e}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

