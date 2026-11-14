"use client";
import React, { useState, useEffect } from "react";

export default function CrackBPSCApp() {
  const [role, setRole] = useState("STUDENT");
  const [goal, setGoal] = useState("BPSC");
  const [showLive, setShowLive] = useState(true);
  const [liveCount, setLiveCount] = useState(2485);
  const [otpMode, setOtpMode] = useState("MANUAL");
  const [manualOtp, setManualOtp] = useState("9988");
  const [negMark, setNegMark] = useState(0.33);
  const [loginOpen, setLoginOpen] = useState(false);
  const [contact, setContact] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState("");
  const [user, setUser] = useState("");
  const [inExam, setInExam] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [rev, setRev] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [adActive, setAdActive] = useState(true);
  const [adHideToday, setAdHideToday] = useState(false);
  const [adDays, setAdDays] = useState("Unlimited");
  const [flags, setFlags] = useState<string[]>([]);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "MCQ",
      text: "चंपारण सत्याग्रह (1917) में गांधीजी को बिहार किसने बुलाया था?",
      opts: ["राजकुमार शुक्ल", "डॉ. राजेंद्र प्रसाद", "मजहरुल हक", "जयप्रकाश नारायण"],
      correct: 0,
      sol: "पंडित राजकुमार शुक्ल ने 1916 लखनऊ अधिवेशन में गांधीजी को आमंत्रित किया था।"
    },
    {
      id: 2,
      type: "MATCHING",
      text: "सूची-I को सूची-II से मिलाएं: A. हड़प्पा-रावी | B. लोथल-भोगवा | C. कालीबंगा-घग्गर | D. मोहनजोदड़ो-सिंधु",
      opts: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-2, D-1", "A-1, B-3, C-2, D-4"],
      correct: 0,
      sol: "सभी युग्म अपनी सही नदियों से सुमेलित हैं।"
    },
    {
      id: 3,
      type: "STATEMENT",
      text: "कथन I: अनुच्छेद 324 चुनाव आयोग से संबंधित है। कथन II: मुख्य चुनाव आयुक्त का कार्यकाल 6 वर्ष होता है।",
      opts: ["कथन I और II दोनों सही हैं", "केवल कथन I सही है", "केवल कथन II सही है", "दोनों कथन गलत हैं"],
      correct: 0,
      sol: "अनुच्छेद 324 के तहत निर्वाचन आयोग का कार्यकाल 6 वर्ष या 65 वर्ष आयु तक होता है।"
    }
  ]);

  const [newQ, setNewQ] = useState("");
  const [newOpts, setNewOpts] = useState(["", "", "", ""]);
  const [newCorrect, setNewCorrect] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLiveCount((c) => c + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  if (inExam) {
    const q = questions[qIdx];
    let right = 0;
    let wrong = 0;
    questions.forEach((item, i) => {
      if (ans[i] !== undefined) {
        if (ans[i] === item.correct) right++;
        else wrong++;
      }
    });
    const score = (right - wrong * negMark).toFixed(2);
    const accuracy = Math.round((right / Math.max(1, right + wrong)) * 100);

    return (
      <div className="min-h-screen bg-slate-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow border p-5 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-extrabold text-blue-700">{goal} Real-Exam CBT Test</h2>
            {!submitted ? (
              <button onClick={() => setSubmitted(true)} className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg font-bold text-sm">
                Submit Test
              </button>
            ) : (
              <button onClick={() => { setInExam(false); setSubmitted(false); }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-bold text-sm">
                Home
              </button>
            )}
          </div>

          {submitted ? (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl">
                <div className="font-black text-amber-800 text-lg">
                  🏆 All-India Rank: AIR #1 | स्कोर: {score} / {questions.length}
                </div>
                <div className="text-xs text-slate-700 mt-1">
                  सही: {right} | गलत: {wrong} (-{negMark}) | एक्यूरेसी: {accuracy}%
                </div>
              </div>
              {questions.map((item, i) => (
                <div key={i} className="p-3 border rounded-xl text-sm space-y-1">
                  <div className="font-bold">प्र.{i + 1}: {item.text}</div>
                  <div className="text-emerald-700 font-bold text-xs">✅ सही उत्तर: {item.opts[item.correct]}</div>
                  <div className="text-slate-600 text-xs">व्याख्या: {item.sol}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-4">
                <div className="flex justify-between">
                  <span className="font-bold text-sm">प्रश्न {qIdx + 1} / {questions.length} ({q.type})</span>
                  <button
                    onClick={() => {
                      setFlags([...flags, q.text]);
                      alert("🚩 त्रुटि रिपोर्ट सीधे Content Writer को भेज दी गई!");
                    }}
                    className="text-xs text-rose-600 font-bold"
                  >
                    🚩 Report Error
                  </button>
                </div>
                <p className="font-semibold text-base">{q.text}</p>
                <div className="space-y-2">
                  {q.opts.map((o, idx) => (
                    <div
                      key={idx}
                      onClick={() => setAns({ ...ans, [qIdx]: idx })}
                      className={"p-3 border rounded-xl cursor-pointer text-sm " + (ans[qIdx] === idx ? "bg-blue-50 border-blue-600 font-bold" : "")}
                    >
                      {idx + 1}. {o}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-3">
                  <button
                    onClick={() => {
                      setRev({ ...rev, [qIdx]: true });
                      setQIdx((qIdx + 1) % questions.length);
                    }}
                    className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-xs font-bold"
                  >
                    Mark for Review
                  </button>
                  <button
                    onClick={() => setQIdx((qIdx + 1) % questions.length)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Save & Next →
                  </button>
                </div>
              </div>
              <div className="border rounded-xl p-3 space-y-2">
                <div className="font-bold text-xs">Question Palette</div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setQIdx(i)}
                      className={"h-9 rounded font-bold text-xs text-white " + (rev[i] ? "bg-purple-600" : ans[i] !== undefined ? "bg-emerald-600" : "bg-rose-500")}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-slate-900 text-white p-2 flex flex-wrap justify-between items-center text-xs gap-2">
        <span className="font-bold text-amber-400">⚡ CrackBPSC Multi-Tier Control:</span>
        <div className="flex gap-1">
          <button onClick={() => setRole("STUDENT")} className={"px-2.5 py-1 rounded font-bold " + (role === "STUDENT" ? "bg-blue-600" : "bg-slate-800")}>
            🎓 Student App
          </button>
          <button onClick={() => setRole("WRITER")} className={"px-2.5 py-1 rounded font-bold " + (role === "WRITER" ? "bg-blue-600" : "bg-slate-800")}>
            ✍️ Writer ({flags.length})
          </button>
          <button onClick={() => setRole("ADMIN")} className={"px-2.5 py-1 rounded font-bold " + (role === "ADMIN" ? "bg-blue-600" : "bg-slate-800")}>
            🛡️ Head Admin & Ads
          </button>
        </div>
      </div>

      {role === "STUDENT" && (
        <div>
          <div className="bg-amber-400 text-xs font-bold py-1.5 text-center">
            📢 लाइव: 71st BPSC, UPSC, SSC और Banking मॉक टेस्ट सीरीज़ अब लाइव है!
          </div>
          <header className="bg-white border-b p-3 flex justify-between items-center">
            <span className="font-black text-xl text-blue-700">CrackBPSC</span>
            <div className="flex items-center gap-2">
              {showLive && <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">🟢 {liveCount} लाइव</span>}
              {user ? (
                <span className="text-xs font-bold bg-blue-100 px-3 py-1 rounded">👤 {user}</span>
              ) : (
                <button onClick={() => setLoginOpen(true)} className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  Login / OTP
                </button>
              )}
            </div>
          </header>

          <div className="bg-white border-b p-2.5 flex gap-2 overflow-x-auto">
            {["BPSC", "UPSC", "SSC", "Banking", "State PSC"].map((g) => (
              <button key={g} onClick={() => setGoal(g)} className={"px-3 py-1 rounded-full text-xs font-bold " + (goal === g ? "bg-blue-600 text-white" : "bg-slate-100")}>
                {g}
              </button>
            ))}
          </div>

          <main className="max-w-4xl mx-auto p-4 space-y-4">
            {adActive && !adHideToday && (

