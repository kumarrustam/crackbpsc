"use client";
import React, { useState } from "react";

export interface WeakQuestion {
  id: number;
  pyp: string;
  gotRightPct: number;
  q_hi: string;
  q_en: string;
  opts_hi: string[];
  opts_en: string[];
  ans: number;
  kp_hi: string;
  kp_en: string;
}

export const DEFAULT_5_QS: WeakQuestion[] = [
  {
    id: 1,
    pyp: "JPSC Civil Services : 2021",
    gotRightPct: 24,
    q_hi: "शैव संतों के लेखन के संग्रह को पाँचवाँ वेद भी समझा जाता है। उपरोक्त संग्रह का क्या नाम है?",
    q_en: "The collection of writings of Shaiva saints is also considered as the Fifth Veda. What is the name of the above collection?",
    opts_hi: ["सिल्पद्दीकरन", "मणीमेखलय", "तिरुमुरई", "तोल्कापियम"],
    opts_en: ["Silappadikaram", "Manimekalai", "Tirumurai", "Tolkappiyam"],
    ans: 2,
    kp_hi: "तिरुमुरई (Tirumurai) बारह खंडों में संकलित तमिल शैव भजनों का संग्रह है, जिसे नांबियांदर नांबी ने संकलित किया। इसे 'पाँचवाँ वेद' कहा जाता है।",
    kp_en: "Tirumurai is a twelve-volume compendium of Tamil Shaiva hymns compiled by Nambiyandar Nambi. It is revered as the 'Fifth Veda'."
  },
  {
    id: 2,
    pyp: "69वीं BPSC Prelims",
    gotRightPct: 48,
    q_hi: "संगम साहित्य में 'तोलकाप्पियम' किस विषय से संबंधित सबसे प्राचीन उपलब्ध ग्रंथ है?",
    q_en: "In Sangam literature, 'Tolkappiyam' is the earliest extant work related to which subject?",
    opts_hi: ["तमिल व्याकरण और काव्यशास्त्र", "खगोल विज्ञान", "आयुर्वेद चिकित्सा", "सैन्य प्रशासन"],
    opts_en: ["Tamil Grammar and Poetics", "Astronomy", "Ayurvedic Medicine", "Military Administration"],
    ans: 0,
    kp_hi: "तोलकाप्पियम की रचना तोलकाप्पियार ने की थी। यह द्वितीय संगम का एकमात्र शेष ग्रंथ है जो तमिल व्याकरण और सामाजिक जीवन का वर्णन करता है।",
    kp_en: "Tolkappiyar authored Tolkappiyam, the sole surviving work of the Second Sangam dealing with Tamil grammar and poetics."
  },
  {
    id: 3,
    pyp: "UPSC CSE : 2020",
    gotRightPct: 29,
    q_hi: "प्राचीन भारत के संदर्भ में, 'मसत्तुवन' और 'सत्थवाह' शब्द किससे संबंधित हैं?",
    q_en: "With reference to ancient India, the terms 'Masattuvan' and 'Satthavaha' refer to:",
    opts_hi: ["सफल व्यापारी", "राजा के लिए कुलीन", "दक्षिण भारत के साम्राज्य", "शिल्प उत्पादकों के संगठन"],
    opts_en: ["Successful merchants", "Nobles to the king", "Kingdoms of South India", "Guilds of craft producers"],
    ans: 0,
    kp_hi: "प्राचीन भारत में अत्यंत धनी और सफल व्यापारियों को तमिल में 'मसत्तुवन' तथा प्राकृत/संस्कृत ग्रंथों में 'सत्थवाह' या 'श्रेष्ठी' कहा जाता था।",
    kp_en: "In ancient India, wealthy and successful merchants were designated as 'Masattuvan' in Tamil and 'Satthavaha' or 'Setthi' in Prakrit."
  },
  {
    id: 4,
    pyp: "67वीं BPSC Prelims",
    gotRightPct: 61,
    q_hi: "मौर्य साम्राज्य की राजधानी पाटलिपुत्र के नगर प्रशासन का वर्णन किस विदेशी यात्री ने छह समितियों के रूप में किया है?",
    q_en: "Which foreign traveler described the municipal administration of Pataliputra in the form of six committees?",
    opts_hi: ["मेगस्थनीज", "फाह्यान", "ह्वेनसांग", "अल-बरूनी"],
    opts_en: ["Megasthenes", "Faxian", "Xuanzang", "Al-Biruni"],
    ans: 0,
    kp_hi: "मेगस्थनीज ने अपनी पुस्तक 'इंडिका' में पाटलिपुत्र के प्रशासन हेतु 5-5 सदस्यों की 6 समितियों (कुल 30 सदस्य) का उल्लेख किया है।",
    kp_en: "Megasthenes described in 'Indica' that Pataliputra was administered by 6 committees of 5 members each (30 members total)."
  },
  {
    id: 5,
    pyp: "69वीं BPSC Prelims",
    gotRightPct: 21,
    q_hi: "'अमैचर' शब्द का वर्णन संगम काल के दौरान निम्नलिखित में से किसके रूप में किया गया है?",
    q_en: "The term 'Amaichchar' during the Sangam period has been described as which of the following?",
    opts_hi: ["मंत्री", "सेनापति", "गुप्तचर", "राजपुरोहित"],
    opts_en: ["Minister", "Army Commander", "Spy", "Royal Priest"],
    ans: 0,
    kp_hi: "संगम काल के दौरान राजा को सलाह देने वाले मंत्रियों को 'अमैचर' (Amaichchar) और गुप्तचरों को 'ओर्रार' कहा जाता था।",
    kp_en: "During the Sangam age, the king was assisted by a council of ministers known as 'Amaichchar', while spies were called 'Orrar'."
  }
];

export default function WeakAreasPlayerModal({
  examName,
  subjectName,
  onClose
}: {
  examName: string;
  subjectName: string;
  onClose: () => void;
}) {
  const [step, setStep] = useState<"CHAPTERS" | "PLAYER" | "SUMMARY">("CHAPTERS");
  const [lang, setLang] = useState<"HI" | "EN">("HI");
  const [qIdx, setQIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showCompletePopup, setShowCompletePopup] = useState<boolean>(false);
  const [filterMode, setFilterMode] = useState<"ALL" | "INCORRECT" | "CORRECT">("ALL");

  const questions = DEFAULT_5_QS;
  const totalQs = questions.length;
  const attemptedCount = Object.keys(answers).length;
  const isAllDone = attemptedCount >= totalQs;
  const hasOngoing = attemptedCount > 0 && !isAllDone;
  const curQ = questions[qIdx] || questions[0];

  const correctCount = questions.reduce((acc, q, i) => (answers[i] === q.ans ? acc + 1 : acc), 0);
  const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  const pickOption = (oIdx: number) => {
    if (answers[qIdx] !== undefined) return;
    const next = { ...answers, [qIdx]: oIdx };
    setAnswers(next);
    if (Object.keys(next).length >= totalQs) {
      setShowCompletePopup(true);
    }
  };

  if (step === "PLAYER") {
    const picked = answers[qIdx];
    const answered = picked !== undefined;
    const opts = lang === "HI" ? curQ.opts_hi : curQ.opts_en;

    return (
      <div className="fixed inset-0 z-50 bg-white overflow-y-auto pb-24 text-slate-900">
        <div className="sticky top-0 z-20 px-4 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
          <button type="button" onClick={() => setStep("CHAPTERS")} className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
            <span>←</span>
            <span>Sangam Period & Ancient History</span>
          </button>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLang(lang === "HI" ? "EN" : "HI")} className="px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 text-xs font-black">
              {lang === "HI" ? "अ | E" : "E | अ"}
            </button>
            <span className="px-2 py-1 rounded-lg bg-sky-50 text-[#0084FF] font-extrabold text-xs">{attemptedCount}/{totalQs}</span>
          </div>
        </div>

        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto">
          {questions.map((_, i) => {
            const done = answers[i] !== undefined;
            const ok = done && answers[i] === questions[i].ans;
            return (
              <button key={i} type="button" onClick={() => setQIdx(i)} className={"w-7 h-7 rounded-full text-xs font-extrabold border " + (qIdx === i ? "ring-2 ring-[#0084FF] " : "") + (!done ? "bg-white text-slate-700 border-slate-300" : ok ? "bg-emerald-500 text-white border-emerald-500" : "bg-rose-500 text-white border-rose-500")}>
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="p-4 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-slate-500">Q. {qIdx + 1} of {totalQs}</span>
            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[11px]">{curQ.pyp}</span>
          </div>
          <div className="font-extrabold text-base text-slate-900 leading-relaxed">{lang === "HI" ? curQ.q_hi : curQ.q_en}</div>
          <div className="space-y-2.5">
            {opts.map((opt, idx) => {
              const isRight = idx === curQ.ans;
              const isChosen = picked === idx;
              let cls = "bg-white border-slate-200 text-slate-800";
              if (answered) {
                if (isRight) cls = "bg-emerald-50 border-emerald-500 text-emerald-900";
                else if (isChosen) cls = "bg-rose-50 border-rose-500 text-rose-900";
                else cls = "bg-slate-50 border-slate-200 text-slate-400";
              }
              return (
                <button key={idx} type="button" onClick={() => pickOption(idx)} className={"w-full p-3.5 rounded-xl border-2 text-left flex items-center justify-between gap-2 " + cls}>
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-xs font-black">{idx + 1}</span>
                    <span className="font-bold text-sm">{opt}</span>
                  </div>
                  {answered && isRight && <span className="text-emerald-600 font-black">✓</span>}
                  {answered && isChosen && !isRight && <span className="text-rose-600 font-black">✕</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span className="text-emerald-700">Solution: Option {curQ.ans + 1}</span>
                <span className="text-slate-500">{curQ.gotRightPct}% got it right</span>
              </div>
              <div className="pt-2 border-t border-slate-200 space-y-1">
                <div className="text-xs font-black text-[#0084FF]">🔑 Key Points</div>
                <p className="text-xs text-slate-700 leading-relaxed">{lang === "HI" ? curQ.kp_hi : curQ.kp_en}</p>
              </div>
            </div>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between max-w-2xl mx-auto">

