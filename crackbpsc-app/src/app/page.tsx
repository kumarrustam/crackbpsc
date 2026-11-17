"use client";
import React, { useState, useEffect } from "react";

export default function CrackBPSC() {
  const [role, setRole] = useState("STUDENT");
  const [goal, setGoal] = useState("BPSC");
  const [showLive, setShowLive] = useState(true);
  const [liveCount, setLiveCount] = useState(2485);
  const [user, setUser] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [contact, setContact] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState(["🎉 71st BPSC नया मॉक टेस्ट लाइव है!"]);
  const [newNotif, setNewNotif] = useState("");
  const [negMark, setNegMark] = useState(0.33);
  const [allowWriter, setAllowWriter] = useState(true);
  const [writerCanDelete, setWriterCanDelete] = useState(false);
  const [allowMod, setAllowMod] = useState(true);
  const [allowAd, setAllowAd] = useState(true);
  const [adCanPopup, setAdCanPopup] = useState(true);
  const [adCanUnlimited, setAdCanUnlimited] = useState(false);
  const [writerPin, setWriterPin] = useState("1111");
  const [modPin, setModPin] = useState("2222");
  const [adPin, setAdPin] = useState("3333");
  const [unlockedRole, setUnlockedRole] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [canDirectPublish, setCanDirectPublish] = useState(true);
  const [canEditCoupon, setCanEditCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("BPSC50");
  const [adType, setAdType] = useState("POPUP");
  const [adSize, setAdSize] = useState("MEDIUM");
  const [adTitle, setAdTitle] = useState("🔥 71st BPSC ऑफर: SuperPass सिर्फ ₹299!");
  const [adDesc, setAdDesc] = useState("सभी 500+ मॉक टेस्ट और लाइव क्लासेस अनलॉक करें।");
  const [adLink, setAdLink] = useState("https://");
  const [adDayCount, setAdDayCount] = useState(7);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);
  const [adHideToday, setAdHideToday] = useState(false);
  const [inExam, setInExam] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
    const [questions, setQuestions] = useState([
    { id: 1, subject: "बिहार इतिहास", text: "चंपारण सत्याग्रह (1917) में गांधीजी को बिहार किसने बुलाया था?", opts: ["राजकुमार शुक्ल", "राजेंद्र प्रसाद", "मजहरुल हक", "जयप्रकाश नारायण"], correct: 0, exp: "1917 में राजकुमार शुक्ल के आग्रह पर गांधीजी चंपारण आए थे।" },
    { id: 2, subject: "बिहार भूगोल", text: "बिहार का शोक किस नदी को कहा जाता है?", opts: ["कोसी", "गंगा", "सोन", "गंडक"], correct: 0, exp: "मार्ग बदलने और बाढ़ के कारण कोसी को बिहार का शोक कहा जाता है।" }
  ]);
const [newSub, setNewSub] = useState("बिहार विशेष");
  const [subjects, setSubjects] = useState(["बिहार विशेष", "इतिहास", "भूगोल", "विज्ञान", "राजव्यवस्था", "करंट अफेयर्स", "गणित", "इकोनॉमी"]);
  const [qType, setQType] = useState("NORMAL");
  const [listLeft, setListLeft] = useState(["", "", "", ""]);
  const [listRight, setListRight] = useState(["", "", "", ""]);
  const [reasonBox, setReasonBox] = useState("");
  const [newQ, setNewQ] = useState("");
  const [newOpts, setNewOpts] = useState(["", "", "", ""]);
  const [newExp, setNewExp] = useState("");
  const [newQEn, setNewQEn] = useState("");
  const [newOptsEn, setNewOptsEn] = useState(["", "", "", ""]);
  const [newExpEn, setNewExpEn] = useState("");

  useEffect(() => {
    const t = setInterval(() => setLiveCount((c) => c + Math.floor(Math.random() * 5) - 2), 3000);
    return () => clearInterval(t);
  }, []);
  if (inExam) {
    const q = questions[qIdx];
    let right = 0, wrong = 0, skipped = 0;
questions.forEach((item, i) => { if (ans[i] === undefined) skipped++; else if (ans[i] === item.correct) right++; else wrong++; });
    const score = (right - wrong * negMark).toFixed(2);
    return (
      <div className="min-h-screen bg-slate-200 text-slate-950 p-4">
  <div className="max-w-3xl mx-auto bg-white text-slate-950 rounded-2xl border-2 border-slate-300 shadow-lg p-5 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-blue-700">{goal} Mock Test</h2>
            {!submitted ? <button onClick={() => setSubmitted(true)} className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Submit</button> : <button onClick={() => { setInExam(false); setSubmitted(false); }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Home</button>}
          </div>
          {submitted ? (
            <div className="space-y-3">
            <div className="p-4 bg-amber-100 border-2 border-amber-400 rounded-xl text-slate-950 font-black">🏆 कुल स्कोर: {score} / {questions.length}</div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-extrabold">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">✅ सही: {right}</div>
              <div className="bg-rose-600 text-white p-2 rounded-lg">❌ गलत: {wrong}</div>
              <div className="bg-slate-600 text-white p-2 rounded-lg">⏭️ स्किप्ड: {skipped}</div>
            </div>
            <div className="bg-white p-3 rounded-xl border-2 border-indigo-200 space-y-1.5 text-xs text-slate-950">
              <div className="font-extrabold text-indigo-950">🧠 सब्जेक्ट-वाइज़ कमज़ोरी विश्लेषण:</div>
              {Array.from(new Set(questions.map((q: any) => q.subject || "सामान्य ज्ञान"))).map((sub: any) => {
                const subQs = questions.map((q, idx) => ({ ...q, idx })).filter((q: any) => (q.subject || "सामान्य ज्ञान") === sub);
                const subRight = subQs.filter((q) => ans[q.idx] === q.correct).length;
                const pct = Math.round((subRight / subQs.length) * 100);
                return (
                  <div key={sub} className="flex justify-between items-center p-2 rounded border bg-slate-50 font-bold">
                    <span>{sub} ({subRight}/{subQs.length})</span>
                    <span className={"px-2 py-0.5 rounded text-[11px] " + (pct < 50 ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800")}>{pct}% {pct < 50 ? "⚠️ कमज़ोर विषय" : "💪 मज़बूत"}</span>
                  </div>
                );
              })}
            </div>
              <div className="bg-slate-900 text-white p-3 rounded-xl space-y-1.5 text-xs">
              <div className="font-extrabold text-amber-400">🏆 All-India टॉपर्स लीडरबोर्ड (Top 1, 2, 3 + आपकी रैंक):</div>
              <div className="flex justify-between bg-white/10 px-2.5 py-1 rounded"><span>🥇 #1. अंकित राज (पटना)</span><span className="font-bold text-amber-300">{questions.length}.00 / {questions.length}</span></div>
              <div className="flex justify-between bg-white/10 px-2.5 py-1 rounded"><span>🥈 #2. प्रिया कुमारी (गया)</span><span className="font-bold text-amber-300">{Math.max(0, questions.length - 0.33).toFixed(2)} / {questions.length}</span></div>
              <div className="flex justify-between bg-white/10 px-2.5 py-1 rounded"><span>🥉 #3. सौरभ कुमार (नवादा)</span><span className="font-bold text-amber-300">{Math.max(0, questions.length - 0.66).toFixed(2)} / {questions.length}</span></div>
              <div className="flex justify-between bg-emerald-600 px-2.5 py-1.5 rounded font-extrabold"><span>👤 आपकी रैंक (#{Number(score) >= questions.length ? 1 : Number(score) > 0 ? 4 : 182}) • {user || "आप"}</span><span>{score} / {questions.length}</span></div>
            </div>
          </div>
          ) : (
            <div className="space-y-3">
              <p className="font-extrabold text-base text-black leading-relaxed">प्र.{qIdx + 1}: {q.text}</p>
{q.opts.map((o, idx) => (
  <div key={idx} onClick={() => setAns({ ...ans, [qIdx]: idx })} className={"p-3.5 border-2 rounded-xl text-sm font-bold cursor-pointer transition-all " + (ans[qIdx] === idx ? "bg-blue-600 text-white border-blue-700 shadow-md" : "bg-slate-50 text-slate-950 border-slate-300 hover:border-blue-500")}>
    ({String.fromCharCode(65 + idx)}) {o}
  </div>
))}
              <button onClick={() => setQIdx((qIdx + 1) % questions.length)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold">Next →</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  const activeDaysText = isUnlimited ? "Unlimited" : adDayCount + " Days";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-slate-900 text-white p-2.5 flex flex-wrap justify-between items-center text-xs gap-1">
        <span className="font-bold text-amber-400">⚡ CrackBPSC</span>
        <div className="flex flex-wrap items-center gap-1">
          <button onClick={() => setNotifOpen(!notifOpen)} className="bg-slate-800 px-2 py-1 rounded-full">🔔 {notifs.length}</button>
          <button onClick={() => setRole("STUDENT")} className={"px-2 py-1 rounded font-bold " + (role === "STUDENT" ? "bg-blue-600" : "bg-slate-800")}>🎓 Student</button>
          <button onClick={() => setRole("WRITER")} className={"px-2 py-1 rounded font-bold " + (role === "WRITER" ? "bg-blue-600" : "bg-slate-800")}>✍️ Writer</button>
          <button onClick={() => setRole("MOD")} className={"px-2 py-1 rounded font-bold " + (role === "MOD" ? "bg-blue-600" : "bg-slate-800")}>🛡️ Mod</button>
          <button onClick={() => setRole("ADTEAM")} className={"px-2 py-1 rounded font-bold " + (role === "ADTEAM" ? "bg-blue-600" : "bg-slate-800")}>📢 Ad Team</button>
          <button onClick={() => setRole("ADMIN")} className={"px-2 py-1 rounded font-bold " + (role === "ADMIN" ? "bg-blue-600" : "bg-slate-800")}>👑 Head Admin</button>
        </div>
      </div>

      {notifOpen && (
        <div className="fixed top-12 right-3 bg-white border shadow-xl rounded-xl p-3 w-64 z-50 text-xs space-y-2">
          <div className="flex justify-between font-bold"><span>🔔 सूचनाएं</span><button onClick={() => setNotifOpen(false)}>✕</button></div>
          {notifs.map((n, i) => <div key={i} className="p-2 bg-slate-50 rounded border">{n}</div>)}
        </div>
      )}

      {role === "STUDENT" && (
        <div className="max-w-3xl mx-auto p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5">
              {["BPSC", "UPSC", "SSC"].map((g) => (
                <button key={g} onClick={() => setGoal(g)} className={"px-3 py-1 rounded-full text-xs font-bold " + (goal === g ? "bg-blue-600 text-white" : "bg-white border")}>{g}</button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {showLive && <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">🟢 {liveCount}</span>}
              {user ? <button onClick={() => setUser("")} className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-lg">👤 {user}</button> : <button onClick={() => setLoginOpen(true)} className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">Login</button>}
            </div>
          </div>

          {!adHideToday && adType === "BANNER" && (
            <div className={"bg-blue-800 text-white rounded-xl flex justify-between items-center transition-all " + (adSize === "SMALL" ? "p-2 text-[11px]" : adSize === "LARGE" ? "p-7 text-base" : adSize === "FULL" ? "p-12 text-lg min-h-[260px]" : "p-3.5 text-xs")}>
              <div><span className="bg-amber-400 text-black font-bold px-2 py-0.5 rounded">BANNER • {activeDaysText}</span><div className="font-bold text-sm mt-1">{adTitle}</div><div>{adDesc}</div></div>
              <button onClick={() => setAdHideToday(true)} className="underline">Don&apos;t show today</button>
            </div>
          )}

          <div className="bg-white p-5 rounded-xl border shadow-sm space-y-3">
            <h2 className="font-extrabold text-base">{goal} All-India Live Mock Test</h2>
            <button onClick={() => { setQIdx(0); setAns({}); setSubmitted(false); setInExam(true); }} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl text-sm">CBT परीक्षा शुरू करें →</button>
          </div>
        </div>
      )}
      {role === "STUDENT" && !adHideToday && popupOpen && adType === "FULL_CUT" && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white z-50 flex flex-col justify-between p-6 text-center">
          <div className="flex justify-between items-center">
            <span className="bg-amber-400 text-black text-[11px] font-black px-3 py-1 rounded-full">SPONSORED • {activeDaysText}</span>
            <button onClick={() => setPopupOpen(false)} className="w-11 h-11 bg-white/20 hover:bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-black border border-white/40 shadow-xl">✕</button>
          </div>
          <div className="max-w-md mx-auto space-y-4">
            <div className="text-5xl">🚀</div>
            <h2 className="font-black text-3xl leading-tight text-amber-300">{adTitle}</h2>
            <p className="text-sm text-blue-100 leading-relaxed">{adDesc}</p>
            <button onClick={() => { if (adLink && adLink !== "https://") window.open(adLink, "_blank"); setPopupOpen(false); }} className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-3.5 rounded-2xl text-base shadow-lg">अभी ऑफर प्राप्त करें →</button>
          </div>
          <button onClick={() => { setAdHideToday(true); setPopupOpen(false); }} className="text-xs text-slate-400 underline mx-auto">आज यह विज्ञापन दोबारा न दिखाएं (Don&apos;t show today)</button>
        </div>
      )}
      {role === "STUDENT" && !adHideToday && popupOpen && adType !== "BANNER" && adType !== "FULL_CUT" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border-2 border-amber-400 text-center">
            <div className={"p-5 text-white space-y-2 " + (adType === "TIMER" ? "bg-rose-700" : adType === "SPIN" ? "bg-purple-800" : "bg-blue-800")}>
              <span className="bg-amber-400 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full">{adType === "TIMER" ? "⏳ समाप्त: 14:59" : adType === "SPIN" ? "🎡 SPIN & WIN" : "OFFER • " + activeDaysText}</span>
              <h3 className="font-black text-lg">{adTitle}</h3>
              <p className="text-xs opacity-90">{adDesc}</p>
            </div>
            <div className="p-4 space-y-2">
              <button onClick={() => { alert(adType === "SPIN" ? "🎉 कूपन BPSC50 मिला!" : "✅ ऑफर सक्रिय!"); setPopupOpen(false); }} className="w-full bg-emerald-600 text-white font-bold py-2 rounded-xl text-sm">{adType === "SPIN" ? "🎡 पहिया घुमाएं" : "अभी अनलॉक करें →"}</button>
              <div className="flex justify-between text-[11px] text-slate-500"><button onClick={() => setPopupOpen(false)} className="underline">बंद करें (✕)</button><button onClick={() => { setAdHideToday(true); setPopupOpen(false); }} className="underline">Don&apos;t show today</button></div>
            </div>
          </div>
        </div>
      )}

      {role === "WRITER" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border space-y-3 text-xs">
          <h2 className="font-bold text-sm">✍️ Content Writer Panel</h2>
          {unlockedRole !== "WRITER" ? (
            <div className="p-3 bg-slate-100 rounded-lg space-y-2">
              <div className="font-bold text-slate-700">🔑 Writer Panel खोलने के लिए Head Admin का PIN डालें:</div>
              <div className="flex gap-2">
                <input value={pinInput} onChange={(e) => setPinInput(e.target.value)} placeholder="PIN डालें..." className="border rounded px-2.5 py-1 bg-white font-bold" />
                <button onClick={() => { if (pinInput === writerPin) { setUnlockedRole("WRITER"); setPinInput(""); } else { alert("❌ गलत PIN! Head Admin से नया PIN पूछें।"); } }} className="bg-blue-600 text-white px-3 py-1 rounded font-bold">Unlock 🔓</button>
              </div>
            </div>
          ) : !allowWriter ? <div className="p-3 bg-rose-100 text-rose-800 font-bold rounded">🔒 Head Admin ने आपका एक्सेस बंद कर रखा है।</div> : (
            <>
              <div className="flex flex-wrap gap-1 items-center">
  {subjects.map((sub) => (
    <button key={sub} onClick={() => setNewSub(sub)} className={"px-2 py-0.5 rounded font-bold border text-[11px] " + (newSub === sub ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-900")}>{sub}</button>
  ))}
  <button onClick={() => { const s = prompt("नया विषय या चैप्टर का नाम लिखें:"); if (s && s.trim()) { setSubjects([...subjects, s.trim()]); setNewSub(s.trim()); } }} className="px-2.5 py-0.5 rounded font-black border border-emerald-600 bg-emerald-100 text-emerald-900 text-[11px]">➕ नया विषय</button>
</div>
              <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-lg border">
                <button onClick={() => setQType("NORMAL")} className={"px-2.5 py-1 rounded font-bold text-xs " + (qType === "NORMAL" ? "bg-blue-600 text-white" : "bg-white text-slate-800 border")}>📝 सामान्य प्रश्न</button>
                <button onClick={() => setQType("MATCH")} className={"px-2.5 py-1 rounded font-bold text-xs " + (qType === "MATCH" ? "bg-purple-600 text-white" : "bg-white text-slate-800 border")}>🔗 कूट और मिलान डिब्बा</button>
                <button onClick={() => { setQType("REASON"); setNewOpts(["A और R दोनों सही हैं और R, A की सही व्याख्या है", "A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है", "A सही है परन्तु R गलत है", "A गलत है परन्तु R सही है"]); }} className={"px-2.5 py-1 rounded font-bold text-xs " + (qType === "REASON" ? "bg-amber-600 text-white" : "bg-white text-slate-800 border")}>⚖️ कथन और कारण डिब्बा</button>
              </div>

              <div className="p-2.5 bg-blue-50/60 border border-blue-200 rounded-lg space-y-1">
                <div className="text-[11px] font-extrabold text-blue-900">📌 मुख्य प्रश्न का डिब्बा:</div>
                <input value={newQ} onChange={(e) => setNewQ(e.target.value)} placeholder="यहाँ मुख्य प्रश्न लिखें..." className="w-full border rounded p-2 text-sm bg-white font-medium" />
                <input value={newQEn} onChange={(e) => setNewQEn(e.target.value)} placeholder="🇬🇧 Write question in English here..." className="w-full border rounded p-2 text-sm bg-indigo-50 font-medium mt-1.5" />
              </div>

              {qType === "MATCH" && (
                <div className="p-2.5 bg-purple-50 border border-purple-300 rounded-lg space-y-2">
                  <div className="text-[11px] font-extrabold text-purple-900">🔗 कूट और मिलान (एक बार में लाइनें पेस्ट करें — डिब्बे अपने आप बनेंगे):</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold text-purple-800">सूची-I पेस्ट करें (हर मद नई लाइन में):</div>
                      <textarea rows={4} value={listLeft.join("\n")} onChange={(e) => setListLeft(e.target.value.split("\n"))} placeholder={"यहाँ सूची-I पेस्ट करें...\nजैसे:\nचंपारण\nखेड़ा\nअहमदाबाद\nअसहयोग"} className="w-full border rounded p-1.5 bg-white text-xs font-medium" />
                      <div className="space-y-1">
                        {listLeft.filter((x) => x.trim() !== "").map((item, i) => (
                          <div key={i} className="px-2 py-1 bg-purple-100 border border-purple-300 rounded text-[11px] font-bold text-purple-950">({String.fromCharCode(65 + i)}) {item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold text-indigo-800">सूची-II पेस्ट करें (हर मद नई लाइन में):</div>
                      <textarea rows={4} value={listRight.join("\n")} onChange={(e) => setListRight(e.target.value.split("\n"))} placeholder={"यहाँ सूची-II पेस्ट करें...\nजैसे:\n1917\n1918\n1918\n1920"} className="w-full border rounded p-1.5 bg-white text-xs font-medium" />
                      <div className="space-y-1">
                        {listRight.filter((x) => x.trim() !== "").map((item, i) => (
                          <div key={i} className="px-2 py-1 bg-indigo-100 border border-indigo-300 rounded text-[11px] font-bold text-indigo-950">({i + 1}) {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {qType === "REASON" && (
                <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-lg space-y-1.5">
                  <div className="text-[11px] font-extrabold text-amber-950">⚖️ कारण (Reason - R) का अलग डिब्बा (ऊपर मुख्य डिब्बे में अभिकथन A लिखें):</div>
                  <input value={reasonBox} onChange={(e) => setReasonBox(e.target.value)} placeholder="यहाँ कारण (R) लिखें..." className="w-full border rounded p-2 text-sm bg-white font-medium" />
                </div>
              )}
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-slate-700">🇮🇳 हिंदी विकल्प (हर विकल्प नई लाइन में):</div>
                  <textarea rows={4} value={newOpts.join("\n")} onChange={(e) => setNewOpts(e.target.value.split("\n"))} placeholder={"विकल्प A (हिंदी)\nविकल्प B (हिंदी)\nविकल्प C (हिंदी)\nविकल्प D (हिंदी)"} className="w-full border rounded-lg p-2 text-xs bg-slate-50 font-medium" />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-slate-700">🇬🇧 English Options (Each on new line):</div>
                  <textarea rows={4} value={newOptsEn.join("\n")} onChange={(e) => setNewOptsEn(e.target.value.split("\n"))} placeholder={"Option A (English)\nOption B (English)\nOption C (English)\nOption D (English)"} className="w-full border rounded-lg p-2 text-xs bg-slate-50 font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <textarea rows={2} value={newExp} onChange={(e) => setNewExp(e.target.value)} placeholder="📖 हिंदी में विस्तृत व्याख्या (Explanation)..." className="w-full border rounded-lg p-2 text-xs bg-emerald-50 font-medium" />
                <textarea rows={2} value={newExpEn} onChange={(e) => setNewExpEn(e.target.value)} placeholder="📘 Detailed Explanation in English..." className="w-full border rounded-lg p-2 text-xs bg-teal-50 font-medium" />
              </div>

              <button onClick={() => { const hiOpts = newOpts.filter((x) => x.trim() !== ""); const enOpts = newOptsEn.filter((x) => x.trim() !== ""); if (!newQ) return; if (hiOpts.length < 2) return; const lClean = listLeft.filter((x) => x.trim() !== "").map((x, i) => String.fromCharCode(65 + i) + "-" + x).join(", "); const rClean = listRight.filter((x) => x.trim() !== "").map((x, i) => (i + 1) + "-" + x).join(", "); let baseQ = newQEn.trim() ? newQ + " / " + newQEn : newQ; if (qType === "MATCH") baseQ = baseQ + " | सूची-I: " + lClean + " : सूची-II: " + rClean; if (qType === "REASON") baseQ = "अभिकथन (A): " + baseQ + " | कारण (R): " + reasonBox; const combinedOpts = hiOpts.map((h, i) => enOpts[i] ? h + " / " + enOpts[i] : h); const combinedExp = newExpEn.trim() ? newExp + " | English: " + newExpEn : newExp; setQuestions([...questions, { id: Date.now(), subject: newSub, text: baseQ, opts: combinedOpts, correct: 0, exp: combinedExp }]); setNewQ(""); setNewQEn(""); setReasonBox(""); setListLeft(["", "", "", ""]); setListRight(["", "", "", ""]); setNewOpts(["", "", "", ""]); setNewOptsEn(["", "", "", ""]); setNewExp(""); setNewExpEn(""); alert("✅ हिंदी और English दोनों भाषाओं में प्रश्न सेव हो गया!"); }} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg">Save Bilingual Question</button>
              <div className="pt-3 border-t space-y-2">
                <div className="font-bold text-slate-800">📋 कुल सेव किए गए प्रश्न ({questions.length}):</div>
                {questions.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-slate-50 border rounded-lg space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold text-slate-900">प्र.{idx + 1}: {q.text}</span>
                      {writerCanDelete && <button onClick={() => setQuestions(questions.filter((item) => item.id !== q.id))} className="bg-rose-600 text-white px-2 py-0.5 rounded font-bold shrink-0">Delete</button>}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {q.opts.map((opt, oIdx) => (
                        <span key={oIdx} className={"px-2 py-0.5 rounded border text-[11px] " + (q.correct === oIdx ? "bg-emerald-100 border-emerald-600 font-bold text-emerald-900" : "bg-white text-slate-600")}>
                          ({String.fromCharCode(65 + oIdx)}) {opt} {q.correct === oIdx && "✅"}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {role === "MOD" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border space-y-3 text-xs">
          <h2 className="font-bold text-sm">🛡️ Moderator Panel</h2>
          {!allowMod ? <div className="p-3 bg-rose-100 text-rose-800 font-bold rounded">🔒 Head Admin ने आपका एक्सेस बंद कर रखा है।</div> : (
            <div className="flex gap-2">
              <input value={newNotif} onChange={(e) => setNewNotif(e.target.value)} placeholder="नोटिफिकेशन भेजें..." className="flex-1 border rounded px-2 py-1.5" />
              <button onClick={() => { if (!newNotif) return; setNotifs([newNotif, ...notifs]); setNewNotif(""); alert("🔔 भेज दिया गया!"); }} className="bg-amber-500 text-black px-3 py-1.5 rounded font-bold">Send 🔔</button>
            </div>
          )}
        </div>
      )}
{role === "ADTEAM" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border-2 border-amber-300 space-y-3 text-xs">
          <h2 className="font-extrabold text-sm text-amber-900">📢 Ad Team Studio (विज्ञापन केंद्र)</h2>
          {unlockedRole !== "ADTEAM" ? (
            <div className="p-3 bg-slate-100 rounded-lg space-y-2">
              <div className="font-bold text-slate-700">🔑 Ad Team खोलने के लिए Head Admin का PIN डालें:</div>
              <div className="flex gap-2">
                <input value={pinInput} onChange={(e) => setPinInput(e.target.value)} placeholder="Ad PIN डालें..." className="border rounded px-2.5 py-1 bg-white font-bold" />
                <button onClick={() => { if (pinInput === adPin) { setUnlockedRole("ADTEAM"); setPinInput(""); } else { alert("❌ गलत PIN!"); } }} className="bg-amber-600 text-white px-3 py-1 rounded font-bold">Unlock 🔓</button>
              </div>
            </div>
          ) : !allowAd ? <div className="p-3 bg-rose-100 text-rose-800 font-bold rounded">🔒 Head Admin ने Ad Team का एक्सेस बंद कर रखा है।</div> : (
          <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {["POPUP", "SPIN", "TIMER", "BANNER"].map((t) => (
                  <button key={t} onClick={() => { if (t !== "BANNER" && !adCanPopup) { alert("🔒 Popup Ads बंद हैं!"); return; } setAdType(t); setPopupOpen(true); setAdHideToday(false); }} className={"px-2.5 py-1 rounded font-bold border " + (adType === t ? "bg-indigo-600 text-white" : "bg-white")}>{t}</button>
                ))}
              </div>
              <input value={adTitle} onChange={(e) => setAdTitle(e.target.value)} placeholder="विज्ञापन शीर्षक..." className="w-full border rounded p-1.5 font-bold" />
              <input value={adDesc} onChange={(e) => setAdDesc(e.target.value)} placeholder="विज्ञापन विवरण..." className="w-full border rounded p-1.5" />
            <input value={adLink} onChange={(e) => setAdLink(e.target.value)} placeholder="🔗 विज्ञापन का लिंक (URL) यहाँ डालें..." className="w-full border rounded p-1.5 bg-blue-50 text-blue-900 font-medium" />
              {canEditCoupon && <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="कूपन कोड बदलें..." className="w-full border rounded p-1.5 bg-amber-50 font-bold" />}
            <div className="flex flex-wrap items-center gap-1.5">
  <span className="font-bold">साइज़ (Size):</span>
  {[{ id: "SMALL", name: "📏 छोटी पट्टी" }, { id: "MEDIUM", name: "🖼️ मध्यम" }, { id: "LARGE", name: "📰 बड़ा पोस्टर" }, { id: "FULL", name: "📱 फुल स्क्रीन" }].map((s) => (
    <button key={s.id} onClick={() => setAdSize(s.id)} className={"px-2 py-1 rounded font-bold border " + (adSize === s.id ? "bg-amber-500 text-black" : "bg-white")}>{s.name}</button>
  ))}
</div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold">अवधि:</span>
                <button onClick={() => { setIsUnlimited(false); setAdDayCount(Math.max(1, adDayCount - 1)); }} className="bg-rose-600 text-white font-black px-3 py-1 rounded">−</button>
                <span className="bg-slate-50 border px-3 py-1 rounded font-bold">{activeDaysText}</span>
                <button onClick={() => { setIsUnlimited(false); setAdDayCount(adDayCount + 1); }} className="bg-emerald-600 text-white font-black px-3 py-1 rounded">+</button>
                {adCanUnlimited && <button onClick={() => setIsUnlimited(!isUnlimited)} className={"px-2 py-1 rounded border font-bold " + (isUnlimited ? "bg-indigo-600 text-white" : "bg-white")}>♾️ Unlimited</button>}
              </div>
              <button onClick={() => { setPopupOpen(true); setAdHideToday(false); alert("✅ नया विज्ञापन लाइव हो गया!"); }} className="w-full bg-emerald-600 text-white font-bold py-2 rounded">🚀 विज्ञापन लाइव करें</button>
            </div>
          )}
        </div>
      )}
      {role === "ADMIN" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border-2 border-indigo-200 space-y-4 text-xs">
          <div className="flex flex-wrap justify-between items-center gap-2 border-b pb-2">
            <span className="font-extrabold text-sm text-indigo-950">👑 Head Admin Command Center</span>
            <div className="flex gap-1.5">
              <button onClick={() => { setAllowWriter(true); setWriterCanDelete(true); setAllowMod(true); setAllowAd(true); setAdCanPopup(true); setAdCanUnlimited(true); }} className="bg-emerald-600 text-white px-2.5 py-1 rounded font-bold">✅ All Access ON</button>
              <button onClick={() => { setAllowWriter(false); setWriterCanDelete(false); setAllowMod(false); setAllowAd(false); setAdCanPopup(false); setAdCanUnlimited(false); }} className="bg-rose-600 text-white px-2.5 py-1 rounded font-bold">🚫 All Access OFF</button>
            </div>
            </div>
          <div className="p-2.5 bg-indigo-50 rounded-lg border border-indigo-200 space-y-2">
            <div className="font-bold text-indigo-900">🔑 Team Security PINs (हर टीम का अलग पिन सेट करें):</div>
            <div className="grid grid-cols-3 gap-2">
              <div><span className="text-[10px] font-bold">✍️ Writer PIN:</span><input value={writerPin} onChange={(e) => setWriterPin(e.target.value)} className="w-full border rounded px-2 py-1 bg-white font-bold" /></div>
              <div><span className="text-[10px] font-bold">🛡️ Mod PIN:</span><input value={modPin} onChange={(e) => setModPin(e.target.value)} className="w-full border rounded px-2 py-1 bg-white font-bold" /></div>
              <div><span className="text-[10px] font-bold">📢 Ad PIN:</span><input value={adPin} onChange={(e) => setAdPin(e.target.value)} className="w-full border rounded px-2 py-1 bg-white font-bold" /></div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button onClick={() => setCanDirectPublish(!canDirectPublish)} className={"px-2.5 py-1 rounded font-bold border " + (canDirectPublish ? "bg-emerald-600 text-white" : "bg-white")}>Direct Publish: {canDirectPublish ? "ON" : "OFF"}</button>
              <button onClick={() => setCanEditCoupon(!canEditCoupon)} className={"px-2.5 py-1 rounded font-bold border " + (canEditCoupon ? "bg-emerald-600 text-white" : "bg-white")}>Ad Coupon Edit: {canEditCoupon ? "ON" : "OFF"}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-2.5 bg-slate-50 rounded border space-y-1">
              <div className="font-bold text-blue-800">✍️ Writer Controls:</div>
              <button onClick={() => setAllowWriter(!allowWriter)} className={"w-full py-1 rounded font-bold text-white " + (allowWriter ? "bg-emerald-600" : "bg-rose-600")}>Panel: {allowWriter ? "ON" : "OFF"}</button>
              <button onClick={() => setWriterCanDelete(!writerCanDelete)} className={"w-full py-1 rounded font-bold border " + (writerCanDelete ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900")}>Delete Qs: {writerCanDelete ? "ON" : "OFF"}</button>
            </div>
            <div className="p-2.5 bg-slate-50 rounded border space-y-1">
              <div className="font-bold text-purple-800">🛡️ Moderator Controls:</div>
              <button onClick={() => setAllowMod(!allowMod)} className={"w-full py-1 rounded font-bold text-white " + (allowMod ? "bg-emerald-600" : "bg-rose-600")}>Panel: {allowMod ? "ON" : "OFF"}</button>
              <button onClick={() => setShowLive(!showLive)} className={"w-full py-1 rounded font-bold border " + (showLive ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900")}>Live Counter: {showLive ? "ON" : "OFF"}</button>
            </div>
            <div className="p-2.5 bg-slate-50 rounded border space-y-1">
              <div className="font-bold text-amber-800">📢 Ad Team Controls:</div>
              <button onClick={() => setAllowAd(!allowAd)} className={"w-full py-1 rounded font-bold text-white " + (allowAd ? "bg-emerald-600" : "bg-rose-600")}>Ad Studio: {allowAd ? "ON" : "OFF"}</button>
              <button onClick={() => setAdCanPopup(!adCanPopup)} className={"w-full py-1 rounded font-bold border " + (adCanPopup ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900")}>Popup Ads: {adCanPopup ? "ON" : "OFF"}</button>
            </div>
          </div>
          {allowAd && (
            <div className="p-3 bg-slate-50 border rounded-xl space-y-2">
              <div className="font-bold text-indigo-800">📢 Ad Studio (प्रकार और दिन चुनें):</div>
              <div className="flex flex-wrap gap-1.5">
                {["POPUP", "SPIN", "TIMER", "BANNER"].map((t) => (
                  <button key={t} onClick={() => { if (t !== "BANNER" && !adCanPopup) { alert("🔒 Popup Ads बंद हैं!"); return; } setAdType(t); setPopupOpen(true); setAdHideToday(false); }} className={"px-2.5 py-1 rounded font-bold border " + (adType === t ? "bg-indigo-600 text-white" : "bg-white")}>{t}</button>
                ))}
              </div>
              <input value={adTitle} onChange={(e) => setAdTitle(e.target.value)} placeholder="विज्ञापन शीर्षक..." className="w-full border rounded p-1.5 bg-white font-bold" />
              <input value={adDesc} onChange={(e) => setAdDesc(e.target.value)} placeholder="विज्ञापन विवरण..." className="w-full border rounded p-1.5 bg-white" />
              <div className="flex flex-wrap items-center gap-1.5">
  <span className="font-bold">साइज़ (Size):</span>
  {[{ id: "SMALL", name: "📏 छोटी पट्टी" }, { id: "MEDIUM", name: "🖼️ मध्यम" }, { id: "LARGE", name: "📰 बड़ा पोस्टर" }, { id: "FULL", name: "📱 फुल स्क्रीन" }].map((s) => (
    <button key={s.id} onClick={() => setAdSize(s.id)} className={"px-2 py-1 rounded font-bold border " + (adSize === s.id ? "bg-amber-500 text-black" : "bg-white")}>{s.name}</button>
  ))}
</div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold">अवधि:</span>
                <button onClick={() => { setIsUnlimited(false); setAdDayCount(Math.max(1, adDayCount - 1)); }} className="bg-rose-600 text-white font-black px-3 py-1 rounded">−</button>
                <span className="bg-white border px-3 py-1 rounded font-bold">{activeDaysText}</span>
                <button onClick={() => { setIsUnlimited(false); setAdDayCount(adDayCount + 1); }} className="bg-emerald-600 text-white font-black px-3 py-1 rounded">+</button>
                <button onClick={() => setIsUnlimited(!isUnlimited)} className={"px-2 py-1 rounded border font-bold " + (isUnlimited ? "bg-indigo-600 text-white" : "bg-white")}>♾️ Unlimited</button>
              </div>
              <button onClick={() => { setPopupOpen(true); setAdHideToday(false); alert("✅ विज्ञापन लाइव हो गया!"); }} className="w-full bg-emerald-600 text-white font-bold py-2 rounded">🚀 विज्ञापन लाइव करें</button>
            </div>
          )}
        </div>
      )}

      {loginOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 space-y-3">
            <div className="flex justify-between font-bold"><span>CrackBPSC Login</span><button onClick={() => setLoginOpen(false)}>✕</button></div>
            <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="नाम या मोबाइल नंबर..." className="w-full border rounded-lg px-3 py-2 text-sm" />
            <button onClick={() => { if (!contact) return; setUser(contact); setLoginOpen(false); setPopupOpen(true); setAdHideToday(false); }} className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-sm">Login करें →</button>
          </div>
        </div>
      )}
    </div>
  );
}
