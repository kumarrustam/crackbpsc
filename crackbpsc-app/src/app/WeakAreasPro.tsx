
"use client";
import React, { useState, useEffect } from "react";

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

export interface WeakChapterModule {
  id: string;
  exam: string;
  subject: string;
  title: string;
  tier: "FREE" | "PRO";
  targetAcc: number;
  targetSpeed: number;
  completedText: string;
  questions: WeakQuestion[];
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

export const INITIAL_MODULES: WeakChapterModule[] = [
  { id: "mod_sangam", exam: "72वीं BPSC CCE", subject: "History", title: "Sangam Period & Ancient History", tier: "FREE", targetAcc: 72.71, targetSpeed: 23, completedText: "1.2k+ Completed this", questions: DEFAULT_5_QS },
  { id: "mod_art", exam: "72वीं BPSC CCE", subject: "History", title: "Art and Culture", tier: "PRO", targetAcc: 68.0, targetSpeed: 20, completedText: "840+ Completed this", questions: DEFAULT_5_QS.slice(0, 3) },
  { id: "mod_buddhism", exam: "72वीं BPSC CCE", subject: "History", title: "Buddhism and Jainism", tier: "FREE", targetAcc: 75.0, targetSpeed: 18, completedText: "42+ Completed this", questions: DEFAULT_5_QS.slice(0, 3) }
];

const fmtSec = (s: number) => `00:${String(Math.min(59, Math.max(1, s))).padStart(2, "0")}`;

export default function WeakAreasPlayerModal({ examName, subjectName, onClose }: { examName: string; subjectName: string; onClose: () => void }) {
  const [step, setStep] = useState<"CHAPTERS" | "PLAYER" | "SUMMARY" | "ATTEMPTED">("CHAPTERS");
  const [activeModId, setActiveModId] = useState<string>("mod_sangam");
  const [lang, setLang] = useState<"HI" | "EN">("HI");
  const [qIdx, setQIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [qTimes, setQTimes] = useState<Record<number, number>>({});
  const [liveSec, setLiveSec] = useState<number>(1);
  const [bookmarks, setBookmarks] = useState<Record<number, boolean>>({});
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [showCompletePopup, setShowCompletePopup] = useState<boolean>(false);
  const [filterMode, setFilterMode] = useState<"ALL" | "INCORRECT" | "CORRECT">("ALL");
  const [completedList, setCompletedList] = useState<any[]>([]);

  const subjectModules = INITIAL_MODULES.filter((m) => m.exam === examName && m.subject === subjectName);
  const activeMod = subjectModules.find((m) => m.id === activeModId) || subjectModules || INITIAL_MODULES;
  const questions = activeMod.questions;
  const totalQs = questions.length;
  const attemptedCount = Object.keys(answers).length;
  const isAllDone = attemptedCount >= totalQs && totalQs > 0;
  const hasOngoing = attemptedCount > 0 && !isAllDone;
  const curQ = questions[qIdx] || questions;

  useEffect(() => {
    if (step !== "PLAYER" || answers[qIdx] !== undefined) return;
    const t = setInterval(() => setLiveSec((p) => p + 1), 1000);
    return () => clearInterval(t);
  }, [step, qIdx, answers]);

  const correctCount = questions.reduce((acc, q, i) => (answers[i] === q.ans ? acc + 1 : acc), 0);
  const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const avgSpeed = attemptedCount > 0 ? Math.max(1, Math.round(Object.values(qTimes).reduce((a, b) => a + b, 0) / attemptedCount)) : 1;

  const startModule = (modId: string) => {
    setActiveModId(modId);
    setAnswers({});
    setQTimes({});
    setLiveSec(1);
    setQIdx(0);
    setShowPalette(false);
    setShowCompletePopup(false);
    setStep("PLAYER");
  };

  const pickOption = (oIdx: number) => {
    if (answers[qIdx] !== undefined) return;
    const nextAns = { ...answers, [qIdx]: oIdx };
    const nextTimes = { ...qTimes, [qIdx]: liveSec };
    setAnswers(nextAns);
    setQTimes(nextTimes);
    if (Object.keys(nextAns).length >= totalQs) setShowCompletePopup(true);
  };

  const completeAndSaveAttempt = () => {
    const rec = {
      id: `att_${Date.now()}`,
      modId: activeMod.id,
      title: activeMod.title,
      tier: activeMod.tier,
      totalQs,
      correct: correctCount,
      accuracy: accuracyPct,
      speed: avgSpeed,
      date: "26 Nov 2026",
      savedAnswers: { ...answers },
      savedTimes: { ...qTimes }
    };
    setCompletedList([rec, ...completedList.filter((item) => item.modId !== rec.modId)]);
    setShowCompletePopup(false);
    setFilterMode("ALL");
    setStep("SUMMARY");
  };

  if (step === "PLAYER") {
    const picked = answers[qIdx];
    const answered = picked !== undefined;
    const isCurrentRight = answered && picked === curQ.ans;
    const opts = lang === "HI" ? curQ.opts_hi : curQ.opts_en;
    const displaySec = answered ? (qTimes[qIdx] || 1) : liveSec;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#181C24] text-white grid grid-cols-2 divide-x divide-slate-700 max-w-2xl mx-auto">
          <button type="button" disabled={qIdx === 0} onClick={() => { setQIdx(Math.max(0, qIdx - 1)); setLiveSec(1); }} className="py-3.5 text-xs font-extrabold disabled:opacity-40">← Previous</button>
          {isAllDone && qIdx === totalQs - 1 ? (
            <button type="button" onClick={completeAndSaveAttempt} className="py-3.5 text-xs font-extrabold bg-emerald-600 text-white">Summary →</button>
          ) : (
            <button type="button" disabled={qIdx >= totalQs - 1} onClick={() => { setQIdx(Math.min(totalQs - 1, qIdx + 1)); setLiveSec(1); }} className="py-3.5 text-xs font-extrabold disabled:opacity-40">Next →</button>
          )}
        </div>

        {showCompletePopup && isAllDone && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-5 max-w-sm w-full text-center space-y-4 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto font-black">✓</div>
              <h3 className="font-extrabold text-base text-slate-900">You have attempted all questions</h3>
              <button type="button" onClick={completeAndSaveAttempt} className="w-full py-3 bg-[#0084FF] text-white rounded-xl font-extrabold text-xs">Generate Practice Summary</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (step === "SUMMARY") {
    const wrongCount = totalQs - correctCount;
    const nextMod = subjectModules.find((m) => m.id !== activeMod.id) || INITIAL_MODULES;
    const filtered = questions.map((q, idx) => ({ ...q, idx, pick: answers[idx], sec: qTimes[idx] || 1 })).filter((item) => {
      if (filterMode === "CORRECT") return item.pick === item.ans;
      if (filterMode === "INCORRECT") return item.pick !== item.ans;
      return true;
    });

    return (
      <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto pb-16 text-slate-900">
        <div className="bg-[#181C24] text-white px-4 py-3.5 flex items-center justify-between">
          <button type="button" onClick={() => setStep("CHAPTERS")} className="font-extrabold text-sm flex items-center gap-2">
            <span>←</span>
            <span className="truncate max-w-[220px]">{activeMod.title}</span>
          </button>
          <button type="button" onClick={() => setLang(lang === "HI" ? "EN" : "HI")} className="px-2 py-1 rounded bg-white text-slate-900 text-[11px] font-black">{lang === "HI" ? "अ | E" : "E | अ"}</button>
        </div>

        <div className="p-4 max-w-2xl mx-auto space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500">Your Accuracy</div>
              <div className="text-xl font-black text-emerald-600">{accuracyPct}.00%</div>
              <div className="grid grid-cols-5 gap-1">
                {.map((v) => <span key={v} className={"h-1 rounded-full " + (accuracyPct >= v - 10 ? "bg-emerald-500" : "bg-slate-200")} />)}
              </div>
              <div className="text-[11px] text-slate-400">Target: {activeMod.targetAcc}%</div>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500">Your Speed</div>
              <div className="text-xl font-black text-rose-500">{avgSpeed} Sec/Q</div>
              <div className="grid grid-cols-5 gap-1">
                {.map((v) => <span key={v} className={"h-1 rounded-full " + (v <= 2 ? "bg-rose-500" : "bg-slate-200")} />)}
              </div>
              <div className="text-[11px] text-slate-400">Target: {activeMod.targetSpeed} Sec/Q</div>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 bg-[#0084FF] rounded-full" />
              <h3 className="font-extrabold text-[15px] text-slate-900">Next Practice</h3>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className={"px-2 py-0.5 rounded text-[10px] font-black " + (nextMod.tier === "PRO" ? "bg-amber-400 text-slate-900" : "bg-emerald-500 text-white")}>{nextMod.tier}</span>
                <span className="font-extrabold text-[15px] text-slate-900">{nextMod.title}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{nextMod.questions.length} Qs.</span>
                <span>English, Hindi</span>
              </div>
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-semibold">👥 {nextMod.completedText}</span>
                <button type="button" onClick={() => startModule(nextMod.id)} className="text-[#0084FF] font-extrabold">Start Practice →</button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto">
              <button type="button" onClick={() => setFilterMode("ALL")} className={"px-3.5 py-1.5 rounded-full text-xs font-extrabold border shrink-0 " + (filterMode === "ALL" ? "bg-[#0084FF] text-white border-[#0084FF]" : "bg-white text-slate-600 border-slate-200")}>All Questions ({totalQs})</button>
              <button type="button" onClick={() => setFilterMode("INCORRECT")} className={"px-3.5 py-1.5 rounded-full text-xs font-extrabold border shrink-0 " + (filterMode === "INCORRECT" ? "bg-rose-500 text-white border-rose-500" : "bg-white text-slate-600 border-slate-200")}>Incorrect ({wrongCount})</button>
              <button type="button" onClick={() => setFilterMode("CORRECT")} className={"px-3.5 py-1.5 rounded-full text-xs font-extrabold border shrink-0 " + (filterMode === "CORRECT" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-600 border-slate-200")}>Correct ({correctCount})</button>
            </div>

            <div className="space-y-2.5">
              {filtered.map((item) => {
                const ok = item.pick === item.ans;
                return (
                  <div key={item.id} className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={"w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center " + (ok ? "bg-emerald-500" : "bg-rose-500")}>{item.idx + 1}</span>
                        <span className="text-xs font-bold text-slate-400">🕒 {fmtSec(item.sec)}</span>
                      </div>
                      <button type="button" onClick={() => setBookmarks({ ...bookmarks, [item.idx]: !bookmarks[item.idx] })} className="text-sm">{bookmarks[item.idx] ? "🔖" : "📑"}</button>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{lang === "HI" ? item.q_hi : item.q_en}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "ATTEMPTED") {
    return (
      <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto pb-20 text-slate-900">
        <div className="bg-[#181C24] text-white px-4 py-3.5 flex items-center gap-2">
          <button type="button" onClick={() => setStep("CHAPTERS")} className="font-extrabold text-sm flex items-center gap-2">
            <span>←</span>
            <span>Attempted Modules</span>
          </button>
        </div>
        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#0084FF] rounded-full" />
            <h3 className="font-extrabold text-sm text-slate-900">{subjectName}</h3>
          </div>
          {completedList.length === 0 ? (
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 text-center">अभी तक कोई मॉड्यूल 100% सबमिट नहीं हुआ है।</div>
          ) : (
            completedList.map((att) => (
              <div key={att.id} className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className={"px-1.5 py-0.5 rounded text-[10px] font-black " + (att.tier === "PRO" ? "bg-amber-400 text-slate-900" : "bg-emerald-500 text-white")}>{att.tier}</span>
                  <span className="font-extrabold text-sm text-slate-900">{att.title}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[11px] font-bold text-slate-500 whitespace-nowrap">{att.totalQs}/{att.totalQs} Qs.</span>
                    <div className="flex-1 h-1.5 bg-emerald-500 rounded-full" />
                  </div>
                  <button type="button" onClick={() => { setActiveModId(att.modId); setAnswers(att.savedAnswers); setQTimes(att.savedTimes || {}); setFilterMode("ALL"); setStep("SUMMARY"); }} className="text-xs font-extrabold text-[#0084FF] whitespace-nowrap">View Results</button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>◎ Accuracy <span className="font-extrabold text-emerald-600 ml-1">{att.accuracy}%</span></div>
                  <div>⏱ Speed <span className="font-extrabold text-emerald-600 ml-1">{att.speed} Sec/Q</span></div>
                </div>
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Attempted on: {att.date}</span>
                  <button type="button" onClick={() => startModule(att.modId)} className="font-extrabold text-[#0084FF]">Reattempt →</button>
                </div>

                

