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
  const [adTitle, setAdTitle] = useState("🔥 71st BPSC ऑफर: SuperPass सिर्फ ₹299!");
  const [adDesc, setAdDesc] = useState("सभी 500+ मॉक टेस्ट और लाइव क्लासेस अनलॉक करें।");
  const [adDayCount, setAdDayCount] = useState(7);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);
  const [adHideToday, setAdHideToday] = useState(false);
  const [inExam, setInExam] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, text: "चंपारण सत्याग्रह (1917) में गांधीजी को बिहार किसने बुलाया था?", opts: ["राजकुमार शुक्ल", "राजेंद्र प्रसाद", "मजहरुल हक", "जयप्रकाश नारायण"], correct: 0 },
    { id: 2, text: "बिहार का शोक किस नदी को कहा जाता है?", opts: ["कोसी", "गंगा", "सोन", "गंडक"], correct: 0 }
  ]);
  const [newQ, setNewQ] = useState("");
  const [newOpts, setNewOpts] = useState(["", "", "", ""]);

  useEffect(() => {
    const t = setInterval(() => setLiveCount((c) => c + Math.floor(Math.random() * 5) - 2), 3000);
    return () => clearInterval(t);
  }, []);
  if (inExam) {
    const q = questions[qIdx];
    let right = 0, wrong = 0;
    questions.forEach((item, i) => { if (ans[i] !== undefined) { ans[i] === item.correct ? right++ : wrong++; } });
    const score = (right - wrong * negMark).toFixed(2);
    return (
      <div className="min-h-screen bg-slate-100 p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border p-5 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-blue-700">{goal} Mock Test</h2>
            {!submitted ? <button onClick={() => setSubmitted(true)} className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Submit</button> : <button onClick={() => { setInExam(false); setSubmitted(false); }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Home</button>}
          </div>
          {submitted ? (
            <div className="bg-amber-50 p-4 rounded-xl font-bold text-amber-800">🏆 स्कोर: {score} / {questions.length} (सही: {right}, गलत: {wrong})</div>
          ) : (
            <div className="space-y-3">
              <p className="font-semibold">प्र.{qIdx + 1}: {q.text}</p>
              {q.opts.map((o, idx) => (
                <div key={idx} onClick={() => setAns({ ...ans, [qIdx]: idx })} className={"p-3 border rounded-xl text-sm cursor-pointer " + (ans[qIdx] === idx ? "bg-blue-50 border-blue-600 font-bold" : "")}>{idx + 1}. {o}</div>
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
            <div className="bg-blue-800 text-white p-3.5 rounded-xl flex justify-between items-center text-xs">
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
      {role === "STUDENT" && !adHideToday && popupOpen && (adType === "POPUP"  adType === "TIMER"  adType === "SPIN") && (
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
          {!allowWriter ? <div className="p-3 bg-rose-100 text-rose-800 font-bold rounded">🔒 Head Admin ने आपका एक्सेस बंद कर रखा है।</div> : (
            <>
              <input value={newQ} onChange={(e) => setNewQ(e.target.value)} placeholder="नया प्रश्न लिखें..." className="w-full border rounded p-2 text-sm" />
              {newOpts.map((o, i) => <input key={i} value={o} onChange={(e) => { const c = [...newOpts]; c[i] = e.target.value; setNewOpts(c); }} placeholder={"Option " + (i + 1)} className="w-full border rounded p-2" />)}
              <button onClick={() => { if (!newQ) return; setQuestions([...questions, { id: Date.now(), text: newQ, opts: newOpts, correct: 0 }]); setNewQ(""); alert("✅ प्रश्न जुड़ गया!"); }} className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg">Save Question</button>
              {writerCanDelete && questions.map((q) => (
                <div key={q.id} className="flex justify-between items-center p-2 bg-slate-50 border rounded">
                  <span>{q.text}</span>
                  <button onClick={() => setQuestions(questions.filter((item) => item.id !== q.id))} className="bg-rose-600 text-white px-2 py-0.5 rounded font-bold">Delete</button>
                </div>
              ))}
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
