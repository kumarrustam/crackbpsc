"use client";
import React, { useState, useEffect } from "react";

export default function CrackBPSC() {
  const [role, setRole] = useState("STUDENT");
  const [goal, setGoal] = useState("BPSC");
  const [showLive, setShowLive] = useState(true);
  const [liveCount, setLiveCount] = useState(2485);
  const [otpMode, setOtpMode] = useState("MANUAL");
  const [manualOtp, setManualOtp] = useState("9988");
  const [negMark, setNegMark] = useState(0.33);
  const [user, setUser] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState(["🎉 71st BPSC Prelims नया मॉक टेस्ट लाइव!"]);
  const [newNotif, setNewNotif] = useState("");
  const [adType, setAdType] = useState("POPUP");
  const [adTitle, setAdTitle] = useState("🔥 71st BPSC ऑफर: SuperPass सिर्फ ₹299!");
  const [adDesc, setAdDesc] = useState("सभी 500+ मॉक टेस्ट और लाइव क्लासेस अनलॉक करें।");
  const [adDays, setAdDays] = useState("Unlimited");
  const [adActive, setAdActive] = useState(true);
  const [adHideToday, setAdHideToday] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);
  const [inExam, setInExam] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, type: "MCQ", text: "चंपारण सत्याग्रह (1917) में गांधीजी को बिहार किसने बुलाया था?", opts: ["राजकुमार शुक्ल", "राजेंद्र प्रसाद", "मजहरुल हक", "जयप्रकाश नारायण"], correct: 0 },
    { id: 2, type: "MATCHING", text: "सुमेलित करें: A. हड़प्पा-रावी | B. लोथल-भोगवा | C. कालीबंगा-घग्गर | D. मोहनजोदड़ो-सिंधु", opts: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-2, D-1", "A-1, B-3, C-2, D-4"], correct: 0 }
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
            <h2 className="font-bold text-blue-700">{goal} Real-Exam CBT Test</h2>
            {!submitted ? <button onClick={() => setSubmitted(true)} className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Submit Test</button> : <button onClick={() => { setInExam(false); setSubmitted(false); }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Home</button>}
          </div>
          {submitted ? (
            <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl">
              <div className="font-black text-amber-800 text-lg">🏆 AIR #1 | स्कोर: {score} / {questions.length}</div>
              <div className="text-xs">सही: {right} | गलत: {wrong} (-{negMark})</div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="font-bold text-sm">प्रश्न {qIdx + 1} / {questions.length} ({q.type})</div>
              <p className="font-semibold">{q.text}</p>
              {q.opts.map((o, idx) => (
                <div key={idx} onClick={() => setAns({ ...ans, [qIdx]: idx })} className={"p-3 border rounded-xl text-sm cursor-pointer " + (ans[qIdx] === idx ? "bg-blue-50 border-blue-600 font-bold" : "")}>{idx + 1}. {o}</div>
              ))}
              <button onClick={() => setQIdx((qIdx + 1) % questions.length)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold">Save & Next →</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  {role === "STUDENT" && adActive && !adHideToday && adType === "POPUP" && popupOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border-2 border-amber-400">
            <div className="bg-blue-800 text-white p-5 text-center space-y-2">
              <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full">OFFER • {adDays}</span>
              <h3 className="font-black text-lg">{adTitle}</h3>
              <p className="text-xs text-blue-100">{adDesc}</p>
            </div>
            <div className="p-4 text-center space-y-2">
              <button onClick={() => { setPopupOpen(false); alert("🎉 ऑफर सक्रिय!"); }} className="w-full bg-emerald-600 text-white font-bold py-2 rounded-xl text-sm">अभी अनलॉक करें →</button>
              <div className="flex justify-between text-[11px] text-slate-500">
                <button onClick={() => setPopupOpen(false)} className="underline">बंद करें (✕)</button>
                <button onClick={() => { setAdHideToday(true); setPopupOpen(false); }} className="underline">Don&apos;t show today</button>
            
                </div>
            </div>
          </div>
        </div>
      )}

      {role === "WRITER" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border space-y-3">
          <h2 className="font-bold">✍️ Content Writer Panel</h2>
          <input value={newQ} onChange={(e) => setNewQ(e.target.value)} placeholder="नया प्रश्न लिखें..." className="w-full border rounded p-2 text-sm" />
          {newOpts.map((o, i) => <input key={i} value={o} onChange={(e) => { const c = [...newOpts]; c[i] = e.target.value; setNewOpts(c); }} placeholder={"Option " + (i + 1)} className="w-full border rounded p-2 text-xs" />)}
          <button onClick={() => { if (!newQ) return; setQuestions([...questions, { id: Date.now(), type: "MCQ", text: newQ, opts: newOpts, correct: 0 }]); setNewQ(""); alert("✅ प्रश्न जुड़ गया!"); }} className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-sm">Save Question</button>
        </div>
      )}

      {role === "ADMIN" && (
        <div className="max-w-3xl mx-auto p-4 bg-white mt-4 rounded-xl border space-y-3 text-xs">
          <h2 className="font-bold text-base">🛡️ Head Admin & Ad Studio</h2>
          <div className="flex gap-2">
            <button onClick={() => setShowLive(!showLive)} className="bg-emerald-600 text-white px-3 py-1 rounded font-bold">Live: {showLive ? "ON" : "OFF"}</button>
            <button onClick={() => setOtpMode(otpMode === "MANUAL" ? "AUTO" : "MANUAL")} className="bg-blue-600 text-white px-3 py-1 rounded font-bold">OTP: {otpMode}</button>
            <input value={manualOtp} onChange={(e) => setManualOtp(e.target.value)} className="border rounded px-2 py-1 w-16 font-bold" />
          </div>
          <div className="p-3 bg-slate-50 border rounded-xl space-y-2">
            <div className="font-bold text-indigo-800">📢 नया विज्ञापन (Ad) बनाएं:</div>
            <div className="flex gap-1.5">
              {["POPUP", "BANNER", "PROMO"].map((t) => (
                <button key={t} onClick={() => { setAdType(t); setPopupOpen(true); setAdHideToday(false); setAdActive(true); }} className={"px-2.5 py-1 rounded font-bold border " + (adType === t ? "bg-indigo-600 text-white" : "bg-white")}>
                  {t === "POPUP" ? "🪟 Popup Ad" : t === "BANNER" ? "📏 Banner" : "🎴 Promo Card"}
                </button>
              ))}
            </div>
            <input value={adTitle} onChange={(e) => setAdTitle(e.target.value)} placeholder="विज्ञापन शीर्षक..." className="w-full border rounded p-1.5 bg-white font-bold" />
            <input value={adDesc} onChange={(e) => setAdDesc(e.target.value)} placeholder="विज्ञापन विवरण..." className="w-full border rounded p-1.5 bg-white" />
            <div className="flex flex-wrap gap-1 items-center"><span className="font-bold">अवधि:</span>{["1 Day", "10 Days", "100 Days", "500 Days", "Unlimited"].map((d) => <button key={d} onClick={() => { setAdDays(d); setAdActive(true); setAdHideToday(false); setPopupOpen(true); }} className="px-2 py-0.5 border rounded bg-white font-bold">{d}</button>)}</div>
            <button onClick={() => { setAdActive(true); setAdHideToday(false); setPopupOpen(true); alert("✅ विज्ञापन लाइव हो गया!"); }} className="w-full bg-emerald-600 text-white font-bold py-1.5 rounded">🚀 विज्ञापन लाइव करें</button>
          </div>
          <div className="flex gap-2">
            <input value={newNotif} onChange={(e) => setNewNotif(e.target.value)} placeholder="नया नोटिफिकेशन..." className="flex-1 border rounded px-2 py-1" />
            <button onClick={() => { if (!newNotif) return; setNotifs([newNotif, ...notifs]); setNewNotif(""); alert("🔔 भेज दिया गया!"); }} className="bg-amber-500 text-black px-3 py-1 rounded font-bold">Send 🔔</button>
          </div>
        </div>
      )}
    </div>
  );
}
