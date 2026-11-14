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
  const [inExam, setInExam] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [adActive, setAdActive] = useState(true);
  const [adHideToday, setAdHideToday] = useState(false);
  const [adDays, setAdDays] = useState("Unlimited");
const [questions, setQuestions] = useState([
    { id: 1, type: "MCQ", text: "चंपारण सत्याग्रह (1917) में गांधीजी को बिहार किसने बुलाया था?", opts: ["राजकुमार शुक्ल", "राजेंद्र प्रसाद", "मजहरुल हक", "जयप्रकाश नारायण"], correct: 0 },
    { id: 2, type: "MATCHING", text: "सुमेलित करें: A. हड़प्पा-रावी | B. लोथल-भोगवा | C. कालीबंगा-घग्गर | D. मोहनजोदड़ो-सिंधु", opts: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-2, D-1", "A-1, B-3, C-2, D-4"], correct: 0 },
    { id: 3, type: "STATEMENT", text: "कथन I: अनुच्छेद 324 चुनाव आयोग से है। कथन II: मुख्य चुनाव आयुक्त का कार्यकाल 6 वर्ष होता है।", opts: ["कथन I और II दोनों सही हैं", "केवल I सही है", "केवल II सही है", "दोनों गलत हैं"], correct: 0 }
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
            <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl space-y-2">
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
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-slate-900 text-white p-2.5 flex justify-between items-center text-xs">
        <span className="font-bold text-amber-400">⚡ CrackBPSC EdTech</span>
        <div className="flex gap-1.5">
          <button onClick={() => setRole("STUDENT")} className={"px-2.5 py-1 rounded font-bold " + (role === "STUDENT" ? "bg-blue-600" : "bg-slate-800")}>🎓 Student</button>
          <button onClick={() => setRole("WRITER")} className={"px-2.5 py-1 rounded font-bold " + (role === "WRITER" ? "bg-blue-600" : "bg-slate-800")}>✍️ Writer</button>
          <button onClick={() => setRole("ADMIN")} className={"px-2.5 py-1 rounded font-bold " + (role === "ADMIN" ? "bg-blue-600" : "bg-slate-800")}>🛡️ Admin</button>
        </div>
      </div>

      {role === "STUDENT" && (
        <div className="max-w-3xl mx-auto p-4 space-y-4">
          <div className="bg-amber-400 p-2 rounded-lg text-xs font-bold text-center">📢 71st BPSC, UPSC, SSC मॉक टेस्ट सीरीज़ लाइव है!</div>
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5">
              {["BPSC", "UPSC", "SSC", "Banking"].map((g) => (
                <button key={g} onClick={() => setGoal(g)} className={"px-3 py-1 rounded-full text-xs font-bold " + (goal === g ? "bg-blue-600 text-white" : "bg-white border")}>{g}</button>
              ))}
            </div>
            {showLive && <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">🟢 {liveCount} लाइव</span>}
          </div>
          {adActive && !adHideToday && (
            <div className="bg-blue-800 text-white p-4 rounded-xl flex justify-between items-center text-xs">
              <div><span className="bg-amber-400 text-black font-bold px-2 py-0.5 rounded">AD • {adDays}</span><div className="font-bold text-sm mt-1">CrackBPSC SuperPass Pro — ₹299/वर्ष</div></div>
              <button onClick={() => setAdHideToday(true)} className="underline">Don&apos;t show today</button>
            </div>
          )}
          <div className="bg-white p-5 rounded-xl border shadow-sm space-y-3">
            <div className="text-xs text-slate-500">नेगेटिव मार्किंग: -{negMark} | सक्रिय OTP: {otpMode} ({manualOtp})</div>
            <h2 className="font-extrabold text-base">{goal} All-India Live Mock Test</h2>
            <button onClick={() => { setQIdx(0); setAns({}); setSubmitted(false); setInExam(true); }} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl text-sm">CBT परीक्षा शुरू करें →</button>
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
          <h2 className="font-bold text-base">🛡️ Head Admin & Ad Manager</h2>
          <div className="flex gap-2">
            <button onClick={() => setShowLive(!showLive)} className="bg-emerald-600 text-white px-3 py-1 rounded font-bold">Live Counter: {showLive ? "ON" : "OFF"}</button>
            <button onClick={() => setOtpMode(otpMode === "MANUAL" ? "AUTO" : "MANUAL")} className="bg-blue-600 text-white px-3 py-1 rounded font-bold">OTP: {otpMode}</button>
            <input value={manualOtp} onChange={(e) => setManualOtp(e.target.value)} className="border rounded px-2 py-1 w-16 font-bold" />
          </div>
          <div className="flex gap-1.5 items-center"><span className="font-bold">Negative:</span>{[0.25, 0.33, 0.5].map((n) => <button key={n} onClick={() => setNegMark(n)} className="px-2 py-1 border rounded font-bold">-{n}</button>)}</div>
          <div className="flex flex-wrap gap-1.5 items-center"><span className="font-bold">Ad Duration:</span>{["1 Day", "10 Days", "100 Days", "500 Days", "Unlimited"].map((d) => <button key={d} onClick={() => { setAdDays(d); setAdActive(true); setAdHideToday(false); }} className="px-2 py-1 border rounded font-bold">{d}</button>)}</div>
        </div>
      )}
    </div>
  );
}
