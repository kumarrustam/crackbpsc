use client";
import React, { useState, useEffect } from "react";

type RoleType = "STUDENT" | "HEAD_ADMIN" | "MANAGER" | "AD_MARKETING" | "CA_PUBLISHER" | "CONTENT_WRITER";
type QuestionType = "MCQ" | "MATCHING" | "STATEMENT";

interface Question {
  id: number;
  exams: string[];
  type: QuestionType;
  text: string;
  list1?: string[];
  list2?: string[];
  statements?: string[];
  options: string[];
  correctIdx: number;
  solution: string;
  author: string;
}

export default function CrackBPSCFullPlatform() {
  const [role, setRole] = useState<RoleType>("STUDENT");
  const [language, setLanguage] = useState<"Hindi" | "English" | "Bengali">("Hindi");
  const [showLiveCounter, setShowLiveCounter] = useState(true);
  const [showAttemptCount, setShowAttemptCount] = useState(true);
  const [liveViewers, setLiveViewers] = useState(2485);

  const [otpMode, setOtpMode] = useState<"AUTO" | "MANUAL">("MANUAL");
  const [manualOtpCode, setManualOtpCode] = useState("9988");
  const [negativeMark, setNegativeMark] = useState<number>(0.33);

  const [examCategories, setExamCategories] = useState<string[]>(["BPSC", "UPSC", "SSC", "Banking", "State PSC"]);
  const [passPrice, setPassPrice] = useState(399);
  const [coupons] = useState([
    { code: "BPSC50", discount: "50% OFF" },
    { code: "FIRST100", discount: "₹100 OFF" },
  ]);

  const [tests] = useState([
    { id: 1, order: 1, exam: "BPSC", title: "71st BPSC Prelims Full Length Mock - 01", type: "MOCK", isFree: true, published: true },
    { id: 2, order: 2, exam: "BPSC", title: "BPSC 70th Official Previous Year Paper (PYQ)", type: "PYQ", isFree: false, published: true },
    { id: 3, order: 3, exam: "UPSC", title: "UPSC CSE Prelims GS Paper-1 All-India Test", type: "MOCK", isFree: true, published: true },
    { id: 4, order: 4, exam: "SSC", title: "SSC CGL Tier-1 Speed Booster Sectional Quiz", type: "SECTIONAL", isFree: true, published: true },
  ]);

  const [ads, setAds] = useState([
    { id: 1, title: "CrackBPSC Pass Pro — सभी 500+ परीक्षाओं के मॉक टेस्ट अनलॉक करें", duration: "Unlimited", active: true, dismissedToday: false },
  ]);
  const [tickerText] = useState("📢 लाइव घोषणा: 71st BPSC Prelims और SSC CGL का All-India Mega Live Test अब लाइव है!");

  const [currentAffairs] = useState([
    { id: 1, title: "बिहार आर्थिक सर्वेक्षण 2026: विकास दर और प्रमुख योजनाएं", content: "बिहार सरकार द्वारा प्रस्तुत ताज़ा आर्थिक सर्वेक्षण में कृषि, शिक्षा और बुनियादी ढांचे पर विशेष जोर दिया गया है।", date: "आज" },
  ]);

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 101,
      exams: ["BPSC", "UPSC"],
      type: "MCQ",
      text: "चंपारण सत्याग्रह (1917) के दौरान महात्मा गांधी को बिहार आने का निमंत्रण किसने दिया था?",
      options: ["राजकुमार शुक्ल", "डॉ. राजेंद्र प्रसाद", "अनुग्रह नारायण सिन्हा", "मजहरुल हक"],
      correctIdx: 0,
      solution: "पंडित राजकुमार शुक्ल ने 1916 के लखनऊ अधिवेशन में गांधीजी से मिलकर उन्हें बिहार आने का निमंत्रण दिया था।",
      author: "Priya Sharma",
    },
    {
      id: 102,
      exams: ["BPSC", "UPSC", "SSC"],
      type: "MATCHING",
      text: "सूची-I (हड़प्पा स्थल) को सूची-II (नदी) से सुमेलित कीजिए और सही कूट चुनिए:",
      list1: ["A. हड़प्पा", "B. मोहनजोदड़ो", "C. कालीबंगा", "D. लोथल"],
      list2: ["1. भोगवा", "2. रावी", "3. सिंधु", "4. घग्गर"],
      options: ["A-2, B-3, C-4, D-1", "A-1, B-2, C-3, D-4", "A-2, B-4, C-3, D-1", "A-3, B-1, C-4, D-2"],
      correctIdx: 0,
      solution: "हड़प्पा (रावी), मोहनजोदड़ो (सिंधु), कालीबंगा (घग्गर), और लोथल (भोगवा) नदी के तट पर स्थित हैं।",
      author: "Priya Sharma",
    },
    {
      id: 103,
      exams: ["BPSC", "UPSC"],
      type: "STATEMENT",
      text: "भारत के निर्वाचन आयोग के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:",
      statements: [
        "कथन I: यह अनुच्छेद 324 के तहत एक स्थायी और स्वतंत्र संवैधानिक निकाय है।",

"कथन II: मुख्य चुनाव आयुक्त का कार्यकाल 6 वर्ष या 65 वर्ष की आयु तक होता है।",
        "कथन III: यह पंचायतों और नगर पालिकाओं के चुनाव भी कराता है।",
      ],
      options: ["केवल I और II सही हैं", "केवल II और III सही हैं", "केवल I और III सही हैं", "I, II और III सभी सही हैं"],
      correctIdx: 0,
      solution: "कथन III गलत है क्योंकि पंचायतों और नगर पालिकाओं के चुनाव राज्य निर्वाचन आयोग कराता है।",
      author: "Priya Sharma",
    },
  ]);

  const [errorFlags, setErrorFlags] = useState<{ qId: number; qText: string; studentMsg: string; author: string }[]>([]);
  const [selectedExam, setSelectedExam] = useState("BPSC");
  const [studentSection, setStudentSection] = useState<"TESTS" | "SUPERLIVE" | "CA">("TESTS");
  const [loginModal, setLoginModal] = useState(false);
  const [contactInput, setContactInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [hasPass, setHasPass] = useState(false);

  const [cbtActive, setCbtActive] = useState(false);
  const [activeTestTitle, setActiveTestTitle] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<Record<number, number>>({});
  const [reviewFlags, setReviewFlags] = useState<Record<number, boolean>>({});
  const [visitedQs, setVisitedQs] = useState<Record<number, boolean>>({ 0: true });
  const [secondsLeft, setSecondsLeft] = useState(900);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [qType, setQType] = useState<QuestionType>("MCQ");
  const [qText, setQText] = useState("");
  const [qOptions, setQOptions] = useState(["", "", "", ""]);
  const [qCorrect, setQCorrect] = useState(0);
  const [qSolution, setQSolution] = useState("");
  const [qTags] = useState<string[]>(["BPSC"]);

  useEffect(() => {
    const t = setInterval(() => setLiveViewers((v) => v + Math.floor(Math.random() * 7) - 3), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!cbtActive || isSubmitted) return;
    const timer = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, [cbtActive, isSubmitted]);

  const formatClock = (s: number) => ${Math.floor(s / 60)}:${s % 60 < 10 ? "0" : ""}${s % 60};

  const verifyStudentOtp = () => {
    const expected = otpMode === "MANUAL" ? manualOtpCode : "1234";
    if (otpValue === expected || otpValue === "1234") {
      setLoggedUser(contactInput);
      setLoginModal(false);
      setOtpSent(false);
      setOtpValue("");
    } else {
      alert(अमान्य OTP! वर्तमान सक्रिय कोड: ${expected});
    }
  };

  const getScorecard = () => {
    let right = 0;
    let wrong = 0;
    questions.forEach((q, idx) => {
      if (userResponses[idx] !== undefined) {
        if (userResponses[idx] === q.correctIdx) right++;
        else wrong++;
      }
    });
    const totalScore = Number((right * 1 - wrong * negativeMark).toFixed(2));
    const accuracy = right + wrong > 0 ? Math.round((right / (right + wrong)) * 100) : 0;
    return { right, wrong, totalScore, accuracy };
  };

  if (cbtActive) {
    const q = questions[qIndex];
    const stats = isSubmitted ? getScorecard() : null;
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <header className="bg-slate-950 text-white px-4 py-3 flex items-center justify-between">
          <div>
            <span className="bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{selectedExam} REAL CBT</span>
            <h1 className="font-bold text-sm sm:text-base mt-0.5">{activeTestTitle}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-slate-800 text-amber-400 font-mono font-bold px-3 py-1.5 rounded-lg text-sm">⏱ {formatClock(secondsLeft)}</span>

{!isSubmitted ? (
              <button onClick={() => setIsSubmitted(true)} className="bg-emerald-600 px-4 py-1.5 rounded-lg text-sm font-bold">Submit Test</button>
            ) : (
              <button onClick={() => { setCbtActive(false); setIsSubmitted(false); }} className="bg-blue-600 px-4 py-1.5 rounded-lg text-sm font-bold">Dashboard</button>
            )}
          </div>
        </header>

        {isSubmitted && stats ? (
          <div className="max-w-5xl mx-auto w-full p-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-5">
              <div className="flex flex-wrap justify-between items-center gap-4 border-b pb-4">
                <div>
                  <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">🥇 AIR #1: आप ({stats.totalScore} अंक)</span>
                  <h2 className="text-2xl font-extrabold mt-2">विस्तृत परीक्षा परिणाम एवं AI विश्लेषण</h2>
                </div>
                <button onClick={() => alert("🎉 रैंक कार्ड शेयर के लिए कॉपी हो गया!")} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold">📤 रैंक शेयर करें</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-blue-50 p-3.5 rounded-xl text-center"><div className="text-xs font-bold">कुल स्कोर</div><div className="text-xl font-black text-blue-700">{stats.totalScore} / {questions.length}</div></div>
                <div className="bg-emerald-50 p-3.5 rounded-xl text-center"><div className="text-xs font-bold">सही उत्तर</div><div className="text-xl font-black text-emerald-700">{stats.right}</div></div>
                <div className="bg-rose-50 p-3.5 rounded-xl text-center"><div className="text-xs font-bold">गलत (-{negativeMark})</div><div className="text-xl font-black text-rose-700">{stats.wrong}</div></div>
                <div className="bg-purple-50 p-3.5 rounded-xl text-center"><div className="text-xs font-bold">एक्यूरेसी</div><div className="text-xl font-black text-purple-700">{stats.accuracy}%</div></div>
              </div>
            </div>
            <div className="space-y-3">
