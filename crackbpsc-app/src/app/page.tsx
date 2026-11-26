"use client";
import React, { useState, useEffect } from "react"; 
const SB_URL = "https://supabase.co";
const SB_KEY = "sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go"; 

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
    const [questions, setQuestions] = useState<any[]>([
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
  const [examLang, setExamLang] = useState("BOTH");
  const [correctIdx, setCorrectIdx] = useState(0);
  const [listLeftEn, setListLeftEn] = useState(["", "", "", ""]);
  const [listRightEn, setListRightEn] = useState(["", "", "", ""]);
  const [reasonBoxEn, setReasonBoxEn] = useState("");
  const [assertBox, setAssertBox] = useState("");
  const [assertBoxEn, setAssertBoxEn] = useState("");
  const [writerCanCreateExam, setWriterCanCreateExam] = useState(true);
  const [examTree, setExamTree] = useState<any>({
    BPSC: ["72वीं BPSC CCE", "BPSC TRE 4.0", "BPSC Head Teacher", "BSSC Inter Level", "CDPO"],
    UPSC: ["UPSC CSE (IAS)", "EPFO", "NDA", "CDS", "CAPF"],
    Railway: ["RRB ALP (Driver)", "RRB Technician", "RRB NTPC", "RRB Group D", "RPF SI"],
    SSC: ["SSC CGL (Graduate)", "SSC CHSL (10+2)", "SSC MTS", "SSC GD", "SSC CPO"],
    Banking: ["SBI PO / Clerk", "IBPS PO / Clerk", "PNB / RRB Gramin Bank", "RBI Assistant"]
  });
  const [examSections, setExamSections] = useState(["Full Length Test", "Mock Test", "Practice Test", "Subject-Wise Test", "PYQs", "Current Affairs"]);
  const [selCat, setSelCat] = useState("BPSC");
  const [selSubExam, setSelSubExam] = useState("72वीं BPSC CCE");
  const [selSection, setSelSection] = useState("Full Length Test");
  const [bankSub, setBankSub] = useState("ALL");
  const [adminBankCat, setAdminBankCat] = useState("BPSC");
  const [adminBankSubEx, setAdminBankSubEx] = useState("72वीं BPSC CCE");
  const [adminBankSec, setAdminBankSec] = useState("Full Length Test");
  const [staffLoginId, setStaffLoginId] = useState("");
  const [activeStaff, setActiveStaff] = useState<any>(null);
  const [staffList, setStaffList] = useState<any[]>([
    { id: 1, name: "अमित कुमार (BPSC Writer)", email: "amit@crackbpsc.in", phone: "9876543210", role: "WRITER", pin: "2222", verified: true, cats: ["BPSC"], subs: ["बिहार विशेष", "इतिहास"], canCreate: true, canDelete: false },
    { id: 2, name: "नेहा शर्मा (UPSC Writer)", email: "neha@crackbpsc.in", phone: "9876543211", role: "WRITER", pin: "3333", verified: true, cats: ["UPSC", "SSC"], subs: ["राजव्यवस्था", "करंट अफेयर्स"], canCreate: false, canDelete: false }
  ]);
  const [deletedQs, setDeletedQs] = useState<any[]>([]);
  const [deletedStaff, setDeletedStaff] = useState<any[]>([]);
  const [liveTests, setLiveTests] = useState<any[]>([
    { id: 101, title: "72वीं BPSC All-India Live Maha-Mock #1", cat: "BPSC", subEx: "72वीं BPSC CCE", startsIn: "2 दिन बाद (रविवार, सुबह 10:00 बजे)", duration: 120, isLive: false },
    { id: 102, title: "BPSC TRE 4.0 Live GK & GS Challenge", cat: "BPSC", subEx: "BPSC TRE 4.0", startsIn: "अभी LIVE चल रहा है", duration: 90, isLive: true }
  ]);
  const [regLiveIds, setRegLiveIds] = useState<number[]>([]);
  const [showPass, setShowPass] = useState(true);
  const [passBadge, setPassBadge] = useState("NEW");
  const [passTitle, setPassTitle] = useState("Unlock Unlimited Live Tests of All Exams with Pass!");
  const [passBtn, setPassBtn] = useState("Get Pass");
  const [passMsg, setPassMsg] = useState("🎉 CrackBPSC Pass Activated! अब आप सभी Live Tests, Mock Tests, PYPs और Study Notes अनलिमिटेड हल कर सकते हैं।");
  const [passFeats, setPassFeats] = useState<string[]>(["Mock Tests", "Live Tests", "Study Notes", "Doubt Support", "PYPs", "Re-Attempt Mode", "Unlimited Practice"]);
  const [writerPass, setWriterPass] = useState(false);
  const [modPass, setModPass] = useState(false);
  const [adPass, setAdPass] = useState(false);
  const [targetLiveId, setTargetLiveId] = useState<number>(0);
  const [examQs, setExamQs] = useState<any[]>([]);
  const [editQId, setEditQId] = useState<number | null>(null);
  const [enableMobileView, setEnableMobileView] = useState(true);
  const [enableDesktopView, setEnableDesktopView] = useState(true);
  const [posMark, setPosMark] = useState<number>(1);
  const [negEnabled, setNegEnabled] = useState<boolean>(true);
  const [negVal, setNegVal] = useState<number>(0.3333);
  const [negLabel, setNegLabel] = useState<string>("1/3 (0.33)");
  const [activePosMark, setActivePosMark] = useState<number>(1);
  const [activeNegEnabled, setActiveNegEnabled] = useState<boolean>(true);
  const [activeNegVal, setActiveNegVal] = useState<number>(0.3333);
  const [activeNegLabel, setActiveNegLabel] = useState<string>("1/3 (0.33)");
  const [examTheme, setExamTheme] = useState<"AUTO" | "LIGHT" | "DARK">("AUTO");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [qSec, setQSec] = useState<number>(0);
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [markedQs, setMarkedQs] = useState<number[]>([]);
  const [bookmarkedQs, setBookmarkedQs] = useState<number[]>([]);
  const [savedBms, setSavedBms] = useState<any[]>([]);
  const [activeList, setActiveList] = useState<any[]>(questions);
  const [showBms, setShowBms] = useState<boolean>(false);
  const [catOrder, setCatOrder] = useState<string[]>([]);
  const [hiddenCats, setHiddenCats] = useState<string[]>([]);
  const [geminiKey, setGeminiKey] = useState<string>("");
  const [bulkText, setBulkText] = useState<string>("");
  const [aiTopic, setAiTopic] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [examTimers, setExamTimers] = useState<Record<string, number>>({});
  const [testMins, setTestMins] = useState<number>(120);
  const [totalSec, setTotalSec] = useState<number>(1200);
  const [reportOpen, setReportOpen] = useState<boolean>(false);
  const [repWrongOpt, setRepWrongOpt] = useState<string>("Option 1");
  const [repCorrectOpt, setRepCorrectOpt] = useState<string>("Option 2");
  const [repExp, setRepExp] = useState<string>("");
  const [qReports, setQReports] = useState<any[]>([]);
  const [adMaxDaily, setAdMaxDaily] = useState<number>(1);
  const [adTimeSlot, setAdTimeSlot] = useState<string>("ALL");
  const [adStartDate, setAdStartDate] = useState<string>("");
  const [adEndDate, setAdEndDate] = useState<string>("");
  const [adCustomW, setAdCustomW] = useState<string>("");
  const [adCustomH, setAdCustomH] = useState<string>("");
  const [adTargetMode, setAdTargetMode] = useState<string>("EXAM");
  const [adTargetCat, setAdTargetCat] = useState<string>("BPSC");
  const [adTargetSub, setAdTargetSub] = useState<string>("72वीं BPSC CCE");
  const [adTargetSec, setAdTargetSec] = useState<string>("Full Length Test");
  const [qTimes, setQTimes] = useState<Record<number, number>>({});
  const [examQLimits, setExamQLimits] = useState<Record<string, number>>({});
  const [optERules, setOptERules] = useState<Record<string, boolean>>({});
  const [reviewQs, setReviewQs] = useState<number[]>([]);
  const [solMode, setSolMode] = useState<boolean>(false);
  const [examAttempts, setExamAttempts] = useState<Record<string, number>>({});
  const [writerCanSetAttempts, setWriterCanSetAttempts] = useState<boolean>(true);
  const [attemptHistory, setAttemptHistory] = useState<Record<string, any[]>>({});
  const [solFilter, setSolFilter] = useState<string>("ALL");
  const [adVer, setAdVer] = useState<number>(1);
  const [spinDeg, setSpinDeg] = useState<number>(0);
  const [spinWon, setSpinWon] = useState<string>("");
  const [drillStep, setDrillStep] = useState<number>(1);
  const [selTier, setSelTier] = useState<string>("Class 1 to 5 (PRT)");
  const [selTierSub, setSelTierSub] = useState<string>("General (सामान्य)");
  const [selCaMode, setSelCaMode] = useState<string>("Daily");
  const [seriesCounts, setSeriesCounts] = useState<Record<string, number>>({});
  const [customTierSubs, setCustomTierSubs] = useState<Record<string, string[]>>({});
  const [activeSeriesKey, setActiveSeriesKey] = useState<string>("");
  const [pillIdxMap, setPillIdxMap] = useState<Record<string, number>>({});
  const [targetSeriesNum, setTargetSeriesNum] = useState<number>(1);
  const [shareScope, setShareScope] = useState<string>("SINGLE");
  const [multiExamTargets, setMultiExamTargets] = useState<string[]>([]);
  const [seriesMarks, setSeriesMarks] = useState<Record<string, number>>({});
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showGoalPicker, setShowGoalPicker] = useState<boolean>(false);
  const [goalRegion, setGoalRegion] = useState<string>("STATE");
  const [selectedState, setSelectedState] = useState<string>("Bihar");
  const [myExamsOpen, setMyExamsOpen] = useState<boolean>(false);
  const [addMoreExamsMode, setAddMoreExamsMode] = useState<boolean>(false);
  const [enrolledExams, setEnrolledExams] = useState<Array<{ cat: string; ex: string }>>([{ cat: "BPSC", ex: "72वीं BPSC CCE" }, { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 6–8)" }, { cat: "Bihar Teaching", ex: "Bihar STET (Paper 1 & 2)" }, { cat: "Bihar Police", ex: "Bihar Police SI (दरोगा)" }]);
  const [checkedExams, setCheckedExams] = useState<string[]>([]);
  const [bottomTab, setBottomTab] = useState<string>("HOME");
  const [caPeriod, setCaPeriod] = useState<string>("DAILY");
  const [caDate, setCaDate] = useState<string>("2026-11-25");
  const [caWeek, setCaWeek] = useState<string>("Week 4 (22–28 Nov)");
  const [caMonth, setCaMonth] = useState<string>("November 2026");
  const [caSubject, setCaSubject] = useState<string>("All");
  const [caCardLang, setCaCardLang] = useState<string>("HI");
  const [flippedCardId, setFlippedCardId] = useState<string>("");
  const [tabHistory, setTabHistory] = useState<string[]>([]);
  const openPage = (nextTab: string) => {
    if (nextTab === bottomTab) return;
    if (nextTab === "HOME") { setTabHistory([]); setBottomTab("HOME"); return; }
    setTabHistory((prev) => [...prev, bottomTab]);
    setBottomTab(nextTab);
  };
  const goBackPage = () => {
    if (tabHistory.length === 0) { setBottomTab("HOME"); return; }
    const last = tabHistory[tabHistory.length - 1];
    setTabHistory((prev) => prev.slice(0, -1));
    setBottomTab(last || "HOME");
  };
  const [aiNewsTopic, setAiNewsTopic] = useState<string>("");
  const [aiNewsLoading, setAiNewsLoading] = useState<boolean>(false);
  const [draftNews, setDraftNews] = useState<any>({ subject: "Bihar Special", examStage: "", title_hi: "", title_en: "", summary_hi: "", summary_en: "", tip_hi: "", tip_en: "", d1_hi: "", d2_hi: "", d3_hi: "", d1_en: "", d2_en: "", d3_en: "", tags: "72वीं BPSC CCE, BPSC TRE 4.0" });
  
  const [homeSearch, setHomeSearch] = useState<string>("");
  const [streakDays, setStreakDays] = useState<number>(5);
  const [customSub, setCustomSub] = useState<string>("Bihar Special");
  const [customCount, setCustomCount] = useState<number>(10);
  const [revTab, setRevTab] = useState<string>("MISTAKES");
  const [pausedTest, setPausedTest] = useState<any>({ title: "72वीं BPSC CCE — Full Length Mock #1", section: "Practice Test", currentQ: 42, totalQ: 150, timeLeft: "84 Min" });
  const [liveTicker, setLiveTicker] = useState<any>({ badge: "LIVE NOW", title: "72वीं BPSC All-India Maha-Mock #1", meta: "150 Qs • 120 Min" });
  const [jobAlerts, setJobAlerts] = useState<any[]>([
    { id: "ja1", tag: "NEW", title: "72वीं BPSC CCE प्रारंभिक परीक्षा कैलेंडर व संभावित रिक्तियां जारी", date: "आज" },
    { id: "ja2", tag: "TRE 4.0", title: "BPSC TRE 4.0 शिक्षक भर्ती — विषय-वार पाठ्यक्रम और मॉडल सेट उपलब्ध", date: "कल" },
    { id: "ja3", tag: "BSSC", title: "BSSC CGL-4 व इंटर स्तरीय मुख्य परीक्षा अभ्यास टेस्ट सीरीज़ लाइव", date: "2 दिन पहले" }
  ]);
  const [newAlertTitle, setNewAlertTitle] = useState<string>("");
  const [newAlertTag, setNewAlertTag] = useState<string>("NEW");
  const [mistakesList, setMistakesList] = useState<any[]>([
    { id: "m1", sub: "Bihar Special", q: "बिहार में प्रथम बौद्ध संगीति का आयोजन किस शासक के काल में हुआ था?", ans: "अजातशत्रु (राजगृह, 483 ई.पू.)" },
    { id: "m2", sub: "Polity", q: "भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रपति संसद का सत्रावसान करते हैं?", ans: "अनुच्छेद 85(2)(a)" },
    { id: "m3", sub: "Science", q: "मनुष्य के शरीर में रक्त का थक्का जमने में कौन-सा विटामिन सहायक होता है?", ans: "विटामिन K (फिलोक्विनोन)" }
  ]);
  const [flashcardsList, setFlashcardsList] = useState<any[]>([
    { id: "fc1", sub: "Bihar Special", front: "बिहार की पहली IT नीति किस वर्ष लागू की गई थी?", back: "वर्ष 2011 में (नई सेमीकंडक्टर व IT नीति 2026 में मंजूर)", due: "Due Today" },
    { id: "fc2", sub: "Economy", front: "RBI की मौद्रिक नीति समिति (MPC) में कुल कितने सदस्य होते हैं?", back: "6 सदस्य (3 RBI से और 3 भारत सरकार द्वारा नामित)", due: "Due Today" },
    { id: "fc3", sub: "History", front: "1917 के चंपारण सत्याग्रह में गांधीजी को आमंत्रित किसने किया था?", back: "पंडित राजकुमार शुक्ल ने (लखनऊ अधिवेशन 1916 में)", due: "Due Today" }
  ]);
  const [flippedFlashId, setFlippedFlashId] = useState<string>("");
  const [newFcFront, setNewFcFront] = useState<string>("");
  const [newFcBack, setNewFcBack] = useState<string>("");
  const [attemptedList] = useState<any[]>([
    { id: "at1", sub: "Bihar Special", title: "72वीं BPSC CCE — Full Length Mock #1", score: "98.5 / 150", accuracy: "74%", date: "25 Nov" },
    { id: "at2", sub: "PYQs", title: "70वीं BPSC Prelims Official Paper (2024)", score: "106 / 150", accuracy: "79%", date: "23 Nov" },
    { id: "at3", sub: "History", title: "आधुनिक भारत और बिहार किसान आंदोलन Quiz", score: "16 / 20", accuracy: "80%", date: "21 Nov" }
  ]);
  const [weakExam, setWeakExam] = useState<string>("72वीं BPSC CCE");
  const [myExams, setMyExams] = useState<string[]>(["72वीं BPSC CCE", "BPSC TRE 4.0", "BSSC CGL-4", "Bihar Police SI"]);
  const [showMyExamsModal, setShowMyExamsModal] = useState<boolean>(false);
  const [adminStudioTab, setAdminStudioTab] = useState<string>("NEWS");
  const [flipNewsItems, setFlipNewsItems] = useState<any[]>([ 
    {
      id: "fn1",
      subject: "Bihar Special",
      examStage: "Prelims & Mains",
      date: "2026-11-25",
      week: "Week 4 (22–28 Nov)",
      month: "November 2026",
      title_hi: "बिहार में नई सेमीकंडक्टर और आईटी पार्क नीति 2026 को मंजूरी",
      title_en: "Bihar Cabinet Approves New Semiconductor & IT Park Policy 2026",
      summary_hi: "बिहार कैबिनेट ने राज्य को पूर्वी भारत का इलेक्ट्रॉनिक और आईटी हब बनाने के लिए नई सेमीकंडक्टर व आईटी पार्क नीति 2026 को मंजूरी दी है। यह नीति ₹5,000 करोड़ के निवेश और 50,000 नए रोजगार सृजन का लक्ष्य रखती है।",
      summary_en: "Bihar Cabinet has approved the New Semiconductor & IT Park Policy 2026 to develop the state as Eastern India's electronics hub, targeting ₹5,000 crore investment and 50,000 jobs.",
      tip_hi: "बिहार IT नीति 2026, सेमीकंडक्टर क्लस्टर, इलेक्ट्रॉनिक्स संवर्धन फंड तथा बिहार में औद्योगिक विकास व रोजगार सृजन।",
      tip_en: "Bihar IT Policy 2026, Semiconductor Cluster, Electronics Promotion Fund & industrial growth in Bihar.",
      details_hi: ["बिहार कैबिनेट ने ₹5,000 करोड़ निवेश व 50,000 रोजगार के लिए नई नीति को मंजूरी दी।", "इसके तहत इलेक्ट्रॉनिक विनिर्माण क्लस्टर (EMC), भूमि सब्सिडी और 100% स्टाम्प ड्यूटी छूट मिलेगी।", "महत्वपूर्ण तथ्य: भारत सेमीकंडक्टर मिशन (ISM) 2021 में शुरू हुआ; बिहार की पहली IT नीति 2011 में आई थी।"],
      details_en: ["Approved with ₹5,000 Cr investment target and 50,000 new jobs.", "Provides Electronic Manufacturing Clusters (EMC), land subsidy & 100% stamp duty exemption.", "Key Fact: India Semiconductor Mission (ISM) launched in 2021; Bihar's first IT policy came in 2011."],
      tags: ["72वीं BPSC CCE", "BPSC TRE 4.0", "BSSC CGL"]
    },
    {
      id: "fn2",
      subject: "Politics",
      examStage: "Prelims & Mains",
      date: "2026-11-25",
      week: "Week 4 (22–28 Nov)",
      month: "November 2026",
      title_hi: "संसद के शीतकालीन सत्र और अनुच्छेद 85 के तहत सत्रावसान की प्रक्रिया",
      title_en: "Winter Session of Parliament & Prorogation Process under Article 85",
      summary_hi: "राष्ट्रपति द्वारा केंद्रीय मंत्रिमंडल की सलाह पर संसद के सत्र को आहूत (Summon) और सत्रावसान (Prorogue) किया जाता है। स्थगन (Adjournment) केवल बैठक को निलंबित करता है, जबकि सत्रावसान पूरे सत्र को समाप्त करता है।",
      summary_en: "The President summons and prorogues Parliament sessions on Cabinet advice under Article 85. Adjournment suspends a sitting, whereas prorogation terminates the entire session.",
      tip_hi: "अनुच्छेद 85, स्थगन (Adjournment) बनाम सत्रावसान (Prorogation) बनाम विघटन (Dissolution) तथा संसदीय कार्यप्रणाली।",
      tip_en: "Article 85, Adjournment vs Prorogation vs Dissolution & Parliamentary functioning.",
      details_hi: ["अनुच्छेद 85(1): संसद के दो सत्रों के बीच 6 माह से अधिक का अंतराल नहीं हो सकता।", "स्थगन (Adjournment) पीठासीन अधिकारी (अध्यक्ष/सभापति) द्वारा किया जाता है, सत्रावसान राष्ट्रपति द्वारा।", "सत्रावसान से सदन में लंबित विधेयक (Pending Bills) समाप्त (Lapse) नहीं होते।"],
      details_en: ["Article 85(1): Maximum gap between two sessions cannot exceed 6 months.", "Adjournment is done by Presiding Officer; Prorogation is done by the President.", "Prorogation does not cause pending bills in the House to lapse."],
      tags: ["UPSC CSE", "72वीं BPSC CCE", "UPPSC"]
    },
    {
      id: "fn3",
      subject: "Economy",
      examStage: "Prelims",
      date: "2026-11-24",
      week: "Week 4 (22–28 Nov)",
      month: "November 2026",
      title_hi: "RBI की मौद्रिक नीति समिति (MPC) और रेपो रेट का मुद्रास्फीति पर प्रभाव",
      title_en: "RBI Monetary Policy Committee (MPC) & Repo Rate Impact on Inflation",
      summary_hi: "भारतीय रिजर्व बैंक की 6-सदस्यीय मौद्रिक नीति समिति (MPC) उपभोक्ता मूल्य सूचकांक (CPI) आधारित मुद्रास्फीति को 4% (±2%) के दायरे में रखने के लिए नीतिगत रेपो दर का निर्धारण करती है।",
      summary_en: "RBI's 6-member Monetary Policy Committee (MPC) sets the policy Repo Rate to keep CPI inflation within the 4% (±2%) target band.",
      tip_hi: "उर्जित पटेल समिति, MPC संरचना (3 RBI + 3 सरकार), तथा CPI बनाम WPI मुद्रास्फीति सूचकांक।",
      tip_en: "Urjit Patel Committee, MPC composition (3 RBI + 3 Govt), and CPI vs WPI inflation indices.",
      details_hi: ["MPC का गठन RBI अधिनियम 1934 की धारा 45ZB के तहत 2016 में किया गया था।", "रेपो रेट बढ़ने से बैंकों की उधार लागत बढ़ती है और बाजार में तरलता (Liquidity) कम होती है।", "RBI गवर्नर MPC के पदेन अध्यक्ष (Ex-officio Chairperson) होते हैं और उनके पास निर्णायक मत होता है।"],
      details_en: ["MPC was constituted in 2016 under Section 45ZB of the RBI Act, 1934.", "A hike in Repo Rate increases borrowing cost and absorbs excess liquidity.", "RBI Governor is the ex-officio Chairperson of MPC with a casting vote."],
      tags: ["UPSC CSE", "BPSC", "Banking", "SSC CGL"]
    },
    {
      id: "fn4",
      subject: "Sci & Tech",
      examStage: "",
      date: "2026-11-20",
      week: "Week 3 (15–21 Nov)",
      month: "November 2026",
      title_hi: "ISRO का गगनयान मिशन और क्रू एस्केप सिस्टम का सफल परीक्षण",
      title_en: "ISRO Gaganyaan Mission & Crew Escape System Successful Flight Test",
      summary_hi: "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) ने श्रीहरिकोटा से गगनयान मानव अंतरिक्ष मिशन के क्रू एस्केप सिस्टम (CES) का सफल परीक्षण किया, जो आपात स्थिति में अंतरिक्ष यात्रियों की सुरक्षित वापसी सुनिश्चित करता है।",
      summary_en: "ISRO successfully tested the Crew Escape System (CES) for the Gaganyaan human spaceflight mission from Sriharikota to ensure astronaut safety during emergencies.",
      tip_hi: "LVM3 रॉकेट, व्योममित्र रोबोट, निम्न पृथ्वी कक्षा (LEO 400 km) और भारत की अंतरिक्ष अर्थव्यवस्था।",
      tip_en: "LVM3 rocket, Vyommitra robot, Low Earth Orbit (400 km) and India's Space Economy.",
      details_hi: ["गगनयान भारत का पहला स्वदेशी मानव अंतरिक्ष उड़ान कार्यक्रम है (3 सदस्य, 3 दिन, 400 किमी LEO कक्षा)।", "इस मिशन में मानव-रेटेड LVM3 (HLVM3) प्रक्षेपण यान का उपयोग किया जा रहा है।", "सफलता के बाद भारत अमेरिका, रूस और चीन के बाद चौथा देश बन जाएगा।"],
      details_en: ["Gaganyaan is India's first indigenous human spaceflight (3 crew, 3 days, 400 km LEO).", "Uses Human-Rated LVM3 (HLVM3) launch vehicle.", "India will become the 4th nation after US, Russia, and China to send humans to space."],
      tags: ["UPSC CSE", "BPSC", "SSC", "Railway"]
    }
  ]);
  useEffect(() => {
    try {
      const navRaw = localStorage.getItem("cb_nav_lock");
      if (navRaw) {
        const n = JSON.parse(navRaw);
        if (n.selCat) setSelCat(n.selCat);
        if (n.selSubExam) setSelSubExam(n.selSubExam);
        if (n.selTier) setSelTier(n.selTier);
        if (n.selTierSub) setSelTierSub(n.selTierSub);
        if (n.selSection) setSelSection(n.selSection);
        if (n.selCaMode) setSelCaMode(n.selCaMode);
        if (n.activeSeriesKey) setActiveSeriesKey(n.activeSeriesKey);
        if (typeof n.drillStep === "number" && n.drillStep >= 1) setDrillStep(n.drillStep);
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cb_nav_lock", JSON.stringify({ drillStep, selCat, selSubExam, selTier, selTierSub, selSection, selCaMode, activeSeriesKey }));
    } catch {}
  }, [drillStep, selCat, selSubExam, selTier, selTierSub, selSection, selCaMode, activeSeriesKey]);
  useEffect(() => {
    const r = localStorage.getItem("cb_role");
    if (r) setRole(r as any);
    const st = localStorage.getItem("cb_staff");
    if (st) setActiveStaff(JSON.parse(st));
    const u = localStorage.getItem("cb_user");
    if (u) setUser(u);
  }, []);
  useEffect(() => {
    const raw = localStorage.getItem("cb_master_cfg_v1");
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.staffList) setStaffList(d.staffList);
    if (d.deletedStaff) setDeletedStaff(d.deletedStaff);
    if (d.catOrder) setCatOrder(d.catOrder);
    if (d.hiddenCats) setHiddenCats(d.hiddenCats);
    if (typeof d.showPass === "boolean") setShowPass(d.showPass);
    if (d.passBadge) setPassBadge(d.passBadge);
    if (d.passTitle) setPassTitle(d.passTitle);
    if (d.passBtn) setPassBtn(d.passBtn);
    if (d.passMsg) setPassMsg(d.passMsg);
    if (d.passFeats) setPassFeats(d.passFeats);
    if (typeof d.writerPass === "boolean") setWriterPass(d.writerPass);
    if (typeof d.modPass === "boolean") setModPass(d.modPass);
    if (typeof d.adPass === "boolean") setAdPass(d.adPass);
    if (typeof d.enableMobileView === "boolean") setEnableMobileView(d.enableMobileView);
    if (typeof d.enableDesktopView === "boolean") setEnableDesktopView(d.enableDesktopView);
    if (typeof d.posMark === "number") setPosMark(d.posMark);
    if (typeof d.negEnabled === "boolean") setNegEnabled(d.negEnabled);
    if (typeof d.negVal === "number") setNegVal(d.negVal);
    if (d.negLabel) setNegLabel(d.negLabel);
    if (d.examTimers) setExamTimers(d.examTimers);
    if (typeof d.testMins === "number") setTestMins(d.testMins);
    if (d.liveTests) setLiveTests(d.liveTests);
    if (d.regLiveIds) setRegLiveIds(d.regLiveIds);
    if (d.adType) setAdType(d.adType);
    if (d.adTitle) setAdTitle(d.adTitle);
    if (d.adDesc) setAdDesc(d.adDesc);
    if (d.adSize) setAdSize(d.adSize);
    if (d.adCustomW) setAdCustomW(d.adCustomW);
    if (d.adCustomH) setAdCustomH(d.adCustomH);
    if (typeof d.adMaxDaily === "number") setAdMaxDaily(d.adMaxDaily);
    if (d.adTimeSlot) setAdTimeSlot(d.adTimeSlot);
    if (d.adStartDate) setAdStartDate(d.adStartDate);
    if (d.adEndDate) setAdEndDate(d.adEndDate);
    if (d.adTargetMode) setAdTargetMode(d.adTargetMode);
    if (d.adTargetCat) setAdTargetCat(d.adTargetCat);
    if (d.adTargetSub) setAdTargetSub(d.adTargetSub);
    if (d.adTargetSec) setAdTargetSec(d.adTargetSec);
    if (d.adLink) setAdLink(d.adLink);
    if (typeof d.adVer === "number") setAdVer(d.adVer);
    if (d.bulkText) setBulkText(d.bulkText);
    if (d.examQLimits) setExamQLimits(d.examQLimits);
    if (d.optERules) setOptERules(d.optERules);
    if (d.examAttempts) setExamAttempts(d.examAttempts);
    if (d.writerCanSetAttempts !== undefined) setWriterCanSetAttempts(d.writerCanSetAttempts);
  }, []);
  useEffect(() => {
    const payload = {
      staffList, deletedStaff, catOrder, hiddenCats, showPass, passBadge, passTitle, passBtn, passMsg, passFeats,
      writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel,
      examTimers, testMins, liveTests, regLiveIds, adType, adTitle, adDesc, adSize, adCustomW, adCustomH,
      adMaxDaily, adTimeSlot, adStartDate, adEndDate, adTargetMode, adTargetCat, adTargetSub, adTargetSec,
      adLink, adVer, bulkText, examQLimits, optERules, examAttempts, writerCanSetAttempts
    };
    localStorage.setItem("cb_master_cfg_v1", JSON.stringify(payload));
  }, [
    staffList, deletedStaff, catOrder, hiddenCats, showPass, passBadge, passTitle, passBtn, passMsg, passFeats,
    writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel,
    examTimers, testMins, liveTests, regLiveIds, adType, adTitle, adDesc, adSize, adCustomW, adCustomH,
    adMaxDaily, adTimeSlot, adStartDate, adEndDate, adTargetMode, adTargetCat, adTargetSub, adTargetSec,
    adLink, adVer, bulkText, examQLimits, optERules, examAttempts, writerCanSetAttempts
  ]);
  useEffect(() => {
    const sl = localStorage.getItem("cb_staff_list");
    if (sl) setStaffList(JSON.parse(sl));
  }, []);
  useEffect(() => {
    if (staffList && staffList.length > 0) localStorage.setItem("cb_staff_list", JSON.stringify(staffList));
  }, [staffList]);
  useEffect(() => {
    localStorage.setItem("cb_role", role);
  }, [role]);
  useEffect(() => {
    if (activeStaff) localStorage.setItem("cb_staff", JSON.stringify(activeStaff));
    else localStorage.removeItem("cb_staff");
  }, [activeStaff]);
  useEffect(() => {
    try {
      const sh = localStorage.getItem("cb_att_hist");
      if (sh) setAttemptHistory(JSON.parse(sh));
      const ss = localStorage.getItem("cb_live_sess");
      if (ss) {
        const d = JSON.parse(ss);
        if (d.selCat) setSelCat(d.selCat);
        if (d.selSubExam) setSelSubExam(d.selSubExam);
        if (d.selSection) setSelSection(d.selSection);
        if (Array.isArray(d.activeList) && d.activeList.length > 0) setActiveList(d.activeList);
        if (d.ans) setAns(d.ans);
        if (Array.isArray(d.markedQs)) setMarkedQs(d.markedQs);
        if (typeof d.qIdx === "number") setQIdx(d.qIdx);
        if (d.submitted) setSubmitted(true);
        if (d.solMode) setSolMode(true);
        if (d.inExam) setInExam(true);
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (Object.keys(attemptHistory).length > 0) localStorage.setItem("cb_att_hist", JSON.stringify(attemptHistory));
    } catch {}
  }, [attemptHistory]);
  useEffect(() => {
    try {
      if (inExam && activeList.length > 0) {
        localStorage.setItem("cb_live_sess", JSON.stringify({ inExam, submitted, solMode, selCat, selSubExam, selSection, activeList, ans, markedQs, qIdx }));
      } else if (!inExam) {
        localStorage.removeItem("cb_live_sess");
      }
    } catch {}
  }, [inExam, submitted, solMode, selCat, selSubExam, selSection, activeList, ans, markedQs, qIdx]);
  const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
    const loadAll = async () => {
      try {
        const sQ = localStorage.getItem("cb_q"); if (sQ) setQuestions(JSON.parse(sQ));
        const sS = localStorage.getItem("cb_s"); if (sS) setStaffList(JSON.parse(sS));
        const sE = localStorage.getItem("cb_e"); if (sE) setExamTree(JSON.parse(sE));
        const sSc = localStorage.getItem("cb_sc"); if (sSc) setExamSections(JSON.parse(sSc));
        const sSb = localStorage.getItem("cb_sb"); if (sSb) setSubjects(JSON.parse(sSb));
        const sDQ = localStorage.getItem("cb_dq"); if (sDQ) setDeletedQs(JSON.parse(sDQ));
        const sDS = localStorage.getItem("cb_ds"); if (sDS) setDeletedStaff(JSON.parse(sDS));
        const sLT = localStorage.getItem("cb_lt"); if (sLT) setLiveTests(JSON.parse(sLT));
        const sRL = localStorage.getItem("cb_rl"); if (sRL) setRegLiveIds(JSON.parse(sRL));
        const sPs = localStorage.getItem("cb_pass"); if (sPs) { const p = JSON.parse(sPs); setShowPass(p.showPass); setPassBadge(p.passBadge); setPassTitle(p.passTitle); setPassBtn(p.passBtn); setPassMsg(p.passMsg); setPassFeats(p.passFeats); }
        const sPA = localStorage.getItem("cb_pass_acc"); if (sPA) { const a = JSON.parse(sPA); setWriterPass(a.w); setModPass(a.m); setAdPass(a.a); }
      const res = await fetch("https://supabase.co*", {
          headers: {
            apikey: "sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go",
            Authorization: "Bearer sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go"
          }
        });
        const rows = await res.json();
        if (Array.isArray(rows) && rows.length > 0 && rows.at(0).data) {
          const d = rows.at(0).data;
          if (Array.isArray(d.questions)) setQuestions((prev) => { const delSet = new Set(d.deletedQs ? d.deletedQs : []); const map = new Map(); [...d.questions, ...prev].forEach((item: any) => { if (item && item.id && !delSet.has(item.id)) map.set(item.id, item); }); return Array.from(map.values()); });
          if (d.staffList) setStaffList(d.staffList);
          if (d.examTree) setExamTree(d.examTree);
          if (d.examSections) setExamSections(d.examSections);
          if (d.subjects) setSubjects(d.subjects);
          if (d.deletedQs) setDeletedQs(d.deletedQs);
          if (d.deletedStaff) setDeletedStaff(d.deletedStaff);
          if (d.liveTests) setLiveTests(d.liveTests);
          if (d.pass) { setShowPass(d.pass.showPass); setPassBadge(d.pass.passBadge); setPassTitle(d.pass.passTitle); setPassBtn(d.pass.passBtn); setPassMsg(d.pass.passMsg); setPassFeats(d.pass.passFeats); }
          if (d.passAcc) { setWriterPass(d.passAcc.w); setModPass(d.passAcc.m); setAdPass(d.passAcc.a); }
          if (d.layout) { setEnableMobileView(d.layout.m); setEnableDesktopView(d.layout.d); }
         if (d.marking) { setPosMark(d.marking.p); setNegEnabled(d.marking.ne); setNegVal(d.marking.nv); setNegLabel(d.marking.nl); }
         if (d.examTheme) setExamTheme(d.examTheme);
         if (d.qReports) setQReports(d.qReports);
          if (d.catOrder) setCatOrder(d.catOrder);
        if (d.hiddenCats) setHiddenCats(d.hiddenCats);
        if (d.geminiKey) setGeminiKey(d.geminiKey);
        if (d.examTimers) setExamTimers(d.examTimers);
         if (d.examQLimits) setExamQLimits(d.examQLimits);
          if (d.optERules) setOptERules(d.optERules);
          if (d.examAttempts) setExamAttempts(d.examAttempts);
    if (d.writerCanSetAttempts !== undefined) setWriterCanSetAttempts(d.writerCanSetAttempts);
        if (d.seriesCounts) setSeriesCounts(d.seriesCounts);
        if (d.customTierSubs) setCustomTierSubs(d.customTierSubs);
        }
      } catch (e) {}
      setIsLoaded(true);
    };
    loadAll();
  }, []); 
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("cb_q", JSON.stringify(questions));
      localStorage.setItem("cb_s", JSON.stringify(staffList));
      localStorage.setItem("cb_e", JSON.stringify(examTree));
      localStorage.setItem("cb_sc", JSON.stringify(examSections));
      localStorage.setItem("cb_sb", JSON.stringify(subjects));
      localStorage.setItem("cb_dq", JSON.stringify(deletedQs));
      localStorage.setItem("cb_ds", JSON.stringify(deletedStaff));
      localStorage.setItem("cb_lt", JSON.stringify(liveTests));
      localStorage.setItem("cb_rl", JSON.stringify(regLiveIds));
      localStorage.setItem("cb_pass", JSON.stringify({ showPass, passBadge, passTitle, passBtn, passMsg, passFeats }));
      localStorage.setItem("cb_pass_acc", JSON.stringify({ w: writerPass, m: modPass, a: adPass }));
      fetch("https://supabase.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Prefer: "resolution=merge-duplicates",
          apikey: "sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go",
          Authorization: "Bearer sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go"
        },
        body: JSON.stringify({
          id: "main",
          data: {
            questions, staffList, examTree, examSections, subjects, deletedQs, deletedStaff, liveTests,
            pass: { showPass, passBadge, passTitle, passBtn, passMsg, passFeats },
            passAcc: { w: writerPass, m: modPass, a: adPass },
            layout: { m: enableMobileView, d: enableDesktopView },
            marking: { p: posMark, ne: negEnabled, nv: negVal, nl: negLabel },
          examTheme,
          qReports,
          catOrder,
          hiddenCats,
          geminiKey,
          examTimers,
            examQLimits,
          optERules,
          examAttempts,
          writerCanSetAttempts,
            seriesCounts,
          customTierSubs
        }})
      });
    } catch (e) {}
  }, [isLoaded, questions, staffList, examTree, examSections, subjects, deletedQs, deletedStaff, liveTests, regLiveIds, showPass, passBadge, passTitle, passBtn, passMsg, passFeats, writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel, examTheme, qReports, catOrder, hiddenCats, geminiKey, examTimers, examQLimits, optERules, examAttempts, writerCanSetAttempts, seriesCounts, customTierSubs]);
  useEffect(() => {
    const t = setInterval(() => setLiveCount((c) => c + Math.floor(Math.random() * 5) - 2), 3000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (!inExam) return;
    if (submitted) return;
    if (isPaused) return;
    const timer = setInterval(() => {
      setQSec((s) => s + 1);
      setTotalSec((t) => {
        if (t <= 1) { setSubmitted(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [inExam, submitted, isPaused]);
  if (!isLoaded) return <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white gap-2"><div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div><div className="text-xs font-black tracking-wide text-amber-300">CrackBPSC लोड हो रहा है...</div></div>;
  if (inExam) {
    const rawList = examQs.length > 0 ? examQs : questions;
    const qLim = examQLimits[selSubExam + "_" + selSection];
    const activeList = qLim ? rawList.slice(0, qLim) : rawList;
    const q = activeList[qIdx];
    const useOptERule = Boolean(optERules[selSubExam]);
    let right = 0, wrong = 0, skipped = 0, blankPen = 0;
    activeList.forEach((item, i) => {
      const hasOptE = Array.isArray(item.opts) && item.opts.length >= 5;
      const chosenTxt = ans[i] !== undefined && item.opts ? String(item.opts[ans[i]]).toLowerCase() : "";
     const isUnattemptedE = useOptERule && hasOptE && ans[i] === 4 && /अनुत्तरित|not attempted|unattempted/.test(chosenTxt);
      if (isUnattemptedE) {
        skipped++;
      } else if (ans[i] === undefined) {
        skipped++;
        if (useOptERule && hasOptE) blankPen++;
      } else if (ans[i] === item.correct) {
        right++;
      } else {
        wrong++;
      }
    });
    const posTotal = right * activePosMark;
    const negTotal = activeNegEnabled ? (wrong + blankPen) * activeNegVal : 0;
    const score = (posTotal - negTotal).toFixed(2);
    return (
      <div className="min-h-screen bg-slate-200 text-slate-950 p-4">
  <div className="max-w-3xl mx-auto bg-white text-slate-950 rounded-2xl border-2 border-slate-300 shadow-lg p-5 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <div className="flex flex-wrap items-center gap-1.5"><h2 className="font-bold text-blue-700">{goal}</h2><span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded text-[10px] font-black">+{activePosMark} | {activeNegEnabled ? "-" + activeNegLabel + " Neg" : "No Negative"}</span></div>
          {!submitted ? <button onClick={() => { const hk = activeSeriesKey ? activeSeriesKey : (selSubExam + "_" + selSection); const prev = attemptHistory[hk] ? attemptHistory[hk] : []; setAttemptHistory({ ...attemptHistory, [hk]: [...prev, { score: score, right: right, wrong: wrong, skipped: skipped, ans: ans, date: new Date().toLocaleDateString("hi-IN") }] }); setSubmitted(true); }} className="px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-bold shadow-xs">टेस्ट सबमिट करें</button> : <div className="flex items-center gap-1.5"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-black">✓ Submitted</span><button onClick={() => { setSubmitted(false); setSolMode(false); setInExam(false); }} className="px-2.5 py-1 bg-slate-900 text-amber-300 rounded-lg text-xs font-black">🏠 होम</button></div>}
          </div>
          {submitted ? (
            <div className="space-y-3">
            <div className="p-4 bg-amber-100 border-2 border-amber-400 rounded-xl text-slate-950 font-black">🏆 कुल स्कोर: {score} / {questions.length}</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-extrabold">
              <button onClick={() => { const fi = activeList.findIndex((it: any, idx: number) => ans[idx] === it.correct); setSolFilter("RIGHT"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg text-left">✅ सही: {right} (+{posTotal.toFixed(2)}) ➔</button>
                <button onClick={() => { const fi = activeList.findIndex((it: any, idx: number) => ans[idx] !== undefined && ans[idx] !== it.correct); setSolFilter("WRONG"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="bg-rose-600 hover:bg-rose-500 text-white p-2 rounded-lg text-left">❌ गलत: {wrong} (-{negTotal.toFixed(2)}) ➔</button>
                <button onClick={() => { const fi = activeList.findIndex((_: any, idx: number) => ans[idx] === undefined); setSolFilter("SKIP"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-lg text-left">⏭️ छोड़े: {skipped} ➔</button>
                <button onClick={() => { setSolFilter("ALL"); setQIdx(0); setSubmitted(false); setSolMode(true); }} className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-lg text-left">🏆 कुल स्कोर: {score} ➔</button>
            </div>
              <button onClick={() => { setSolFilter("ALL"); setQIdx(0); setSubmitted(false); setSolMode(true); }} className="mt-2.5 w-full py-2 px-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl font-black text-xs shadow-md flex items-center justify-center gap-2">
                📖 Solution &amp; Explanation Page (सभी प्रश्न व व्याख्या देखें) ➔
              </button>
              {bookmarkedQs.length > 0 && (
            <div className="bg-amber-50 p-3 rounded-xl border-2 border-amber-400 space-y-2 text-xs text-slate-950">
              <div className="font-black text-amber-900">⭐ आपके बुकमार्क किए गए प्रश्न ({bookmarkedQs.length}):</div>
              {bookmarkedQs.map((bi: number) => activeList.at(bi) && (
                <div key={bi} className="p-2 bg-white rounded-lg border border-amber-300 space-y-1">
                  <div className="font-bold">Q{bi + 1}. {activeList.at(bi).q}</div>
                  <div className="text-[11px] font-black text-emerald-700">✅ सही उत्तर: {activeList.at(bi).opts.at(activeList.at(bi).correct)}</div>
                </div>
              ))}
            </div>
          )}
            {(() => {
                const yourSec = Object.values(qTimes).reduce((a: number, b: number) => a + b, 0) + 1;
                const topperSec = Math.max(15, Math.round(activeList.length * 16));
                const avgSec = Math.max(25, Math.round(activeList.length * 34));
                const maxBar = Math.max(yourSec, topperSec, avgSec, 1);
                const totalAttempts = 1284 + activeList.length * 7;
                const pctRank = Math.min(99.8, Math.max(42.5, Number((55 + (right / Math.max(1, activeList.length)) * 44).toFixed(1))));
                let sillyCnt = 0; let trapCnt = 0; let masterCnt = 0;
                activeList.forEach((item: any, idx: number) => {
                  const t = qTimes[idx] ? qTimes[idx] : 12;
                  if (ans[idx] === item.correct && t <= 20) masterCnt++;
                  else if (ans[idx] !== undefined && ans[idx] !== item.correct && t < 15) sillyCnt++;
                  else if (t > 90) trapCnt++;
                });
                const subNames = Array.from(new Set(activeList.map((q: any) => q.sub ? q.sub : "सामान्य ज्ञान")));
                const subStats = subNames.map((sub: any) => {
                  const sq = activeList.filter((q: any) => (q.sub ? q.sub : "सामान्य ज्ञान") === sub);
                  let sr = 0; let st = 0;
                  activeList.forEach((q: any, idx: number) => {
                    if ((q.sub ? q.sub : "सामान्य ज्ञान") === sub) {
                      if (ans[idx] === q.correct) sr++;
                      st += qTimes[idx] ? qTimes[idx] : 15;
                    }
                  });
                  const pct = Math.round((sr / Math.max(1, sq.length)) * 100);
                  return { sub, total: sq.length, right: sr, pct, avgT: Math.round(st / Math.max(1, sq.length)) };
                });
                const sortedSubs = [...subStats].sort((a, b) => b.pct - a.pct);
                const strongest = sortedSubs.at(0);
                const weakest = sortedSubs.at(sortedSubs.length - 1);
                const cutoffPct = 66;
                const myPct = Math.round((right / Math.max(1, activeList.length)) * 100);
              return (
                  <div className="space-y-3">
                    {(() => {
                        const maxM = Math.max(1, activeList.length * activePosMark);
                        const myNum = Math.max(0, Number(score));
                        const topNum = Number((maxM * 0.88).toFixed(2));
                        const avgNum = Number((maxM * 0.54).toFixed(2));
                        return (
                          <div className="p-3 bg-slate-950/90 rounded-2xl border border-cyan-500/40 space-y-2 text-xs text-white">
                            <div className="font-black text-cyan-300">📊 स्कोर तुलना ग्राफ़ (Topper vs आपका स्कोर vs Average)</div>
                            <div className="space-y-1.5 font-bold">
                              <div>
                                <div className="flex justify-between text-[11px]"><span>🥇 Topper स्कोर</span><span className="text-amber-300">{topNum} / {maxM}</span></div>
                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-amber-400" style={{ width: "88%" }} /></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[11px]"><span>👤 आपका स्कोर</span><span className="text-emerald-300">{score} / {maxM}</span></div>
                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-400" style={{ width: Math.min(100, Math.round((myNum / maxM) * 100)) + "%" }} /></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[11px]"><span>👥 Average स्कोर</span><span className="text-indigo-300">{avgNum} / {maxM}</span></div>
                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-indigo-400" style={{ width: "54%" }} /></div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    <div className="p-3 bg-slate-900 text-white rounded-2xl border-2 border-cyan-500/60 space-y-2.5 text-xs">
                      <div className="flex flex-wrap justify-between items-center gap-1">
                        <span className="font-black text-cyan-300 text-sm">📈 समय तुलना व लाइव सहभागिता ग्राफ़</span>
                        <span className="px-2 py-0.5 bg-emerald-600 rounded-full font-black text-[11px]">👥 कुल Attempt: {totalAttempts} छात्र • {pctRank}%ile</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-end h-28 pt-4 px-2 bg-slate-950/80 rounded-xl border border-slate-800">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[10px] font-black text-emerald-400">{Math.floor(topperSec / 60)}m {topperSec % 60}s</span>
                          <div style={{ height: Math.max(18, Math.round((topperSec / maxBar) * 68)) + "px" }} className="w-10 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg shadow" />
                          <span className="text-[10px] font-bold text-slate-300">🏆 Topper</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[10px] font-black text-cyan-400">{Math.floor(yourSec / 60)}m {yourSec % 60}s</span>
                          <div style={{ height: Math.max(18, Math.round((yourSec / maxBar) * 68)) + "px" }} className="w-10 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg shadow" />
                          <span className="text-[10px] font-bold text-white">⏱️ आपका समय</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[10px] font-black text-amber-400">{Math.floor(avgSec / 60)}m {avgSec % 60}s</span>
                          <div style={{ height: Math.max(18, Math.round((avgSec / maxBar) * 68)) + "px" }} className="w-10 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg shadow" />
                          <span className="text-[10px] font-bold text-slate-300">👥 Average</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-2xl border-2 border-emerald-500/60 space-y-2.5 text-xs">
                      <div className="font-black text-emerald-300 text-sm">🏏 360° Cricket Wagon Wheel — Subject Strength & Weakness</div>
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <svg viewBox="0 0 220 220" className="w-52 h-52 shrink-0">
                          <circle cx="110" cy="110" r="95" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                          <circle cx="110" cy="110" r="62" fill="none" stroke="#6ee7b7" strokeDasharray="4 3" strokeWidth="1.2" />
                          <circle cx="110" cy="110" r="30" fill="none" stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1.2" />
                          <rect x="105" y="96" width="10" height="28" fill="#fde68a" rx="2" />
                          {subStats.map((st, idx) => {
                            const ang = (idx / Math.max(1, subStats.length)) * 2 * Math.PI - Math.PI / 2;
                            const rLen = 20 + (st.pct / 100) * 72;
                            const x2 = 110 + rLen * Math.cos(ang);
                            const y2 = 110 + rLen * Math.sin(ang);
                            const lx = 110 + 84 * Math.cos(ang);
                            const ly = 110 + 84 * Math.sin(ang);
                            const col = st.pct >= 70 ? "#34d399" : st.pct >= 45 ? "#fbbf24" : "#f87171";
                            return (
                              <g key={st.sub}>
                                <line x1="110" y1="110" x2={x2} y2={y2} stroke={col} strokeWidth="3.5" strokeLinecap="round" />
                                <circle cx={x2} cy={y2} r="4" fill={col} />
                                <text x={lx} y={ly} fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">{st.sub.slice(0, 8)} ({st.pct}%)</text>
                              </g>
                            );
                          })}
                        </svg>
                        <div className="flex-1 space-y-1.5 w-full">
                          <div className="p-2 bg-slate-950/80 rounded-xl border border-emerald-500/40 space-y-1">
                            <div className="font-black text-emerald-300">📋 Demographic & Strength-Weakness रिपोर्ट:</div>
                            {strongest && <div className="text-emerald-200">💪 <b>सबसे मज़बूत विषय:</b> {strongest.sub} ({strongest.pct}% सटीकता • औसत {strongest.avgT}s/प्रश्न)</div>}
                            {weakest && <div className="text-rose-300">⚠️ <b>सबसे कमज़ोर विषय:</b> {weakest.sub} ({weakest.pct}% सटीकता • औसत {weakest.avgT}s/प्रश्न)</div>}
                            <div className="text-amber-200">🎯 <b>Cut-Off Predictor:</b> आपका स्कोर <b>{myPct}%</b> है (कट-ऑफ <b>{cutoffPct}%</b> — {myPct >= cutoffPct ? "🎉 सुरक्षित ज़ोन में!" : "📈 +" + (cutoffPct - myPct) + "% और चाहिए"})</div>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 text-center">
                            <div className="p-1.5 bg-emerald-900/70 rounded-lg border border-emerald-500/40"><div className="font-black text-emerald-300">{masterCnt}</div><div className="text-[10px]">🎯 Mastery Shot</div></div>
                            <div className="p-1.5 bg-amber-900/70 rounded-lg border border-amber-500/40"><div className="font-black text-amber-300">{sillyCnt}</div><div className="text-[10px]">⚡ Silly Mistake</div></div>
                            <div className="p-1.5 bg-rose-900/70 rounded-lg border border-rose-500/40"><div className="font-black text-rose-300">{trapCnt}</div><div className="text-[10px]">🐢 Time Trap</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 pt-1 border-t border-white/15">
                        {subStats.map((st) => (
                          <div key={st.sub} className="flex items-center justify-between gap-2 text-[11px] bg-black/30 px-2.5 py-1 rounded-lg">
                            <span className="font-bold">{st.sub} ({st.right}/{st.total})</span>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-300">⏱️ {st.avgT}s/Q</span>
                              <span className={"px-2 py-0.5 rounded font-black " + (st.pct >= 70 ? "bg-emerald-600 text-white" : st.pct >= 45 ? "bg-amber-500 text-slate-950" : "bg-rose-600 text-white")}>{st.pct >= 70 ? "💪 Strong (" + st.pct + "%)" : st.pct >= 45 ? "⚖️ Average (" + st.pct + "%)" : "⚠️ Weak (" + st.pct + "%)"}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                      onClick={() => {
                        const c = document.createElement("canvas");
                        c.width = 900;
                        c.height = 520;
                        const ctx = c.getContext("2d");
                        if (ctx) {
                          ctx.fillStyle = "#0f172a";
                          ctx.fillRect(0, 0, 900, 520);
                          ctx.fillStyle = "#f59e0b";
                          ctx.fillRect(0, 0, 900, 14);
                          ctx.fillStyle = "#38bdf8";
                          ctx.font = "bold 34px sans-serif";
                          ctx.fillText("🏆 CRACKBPSC ALL-INDIA SCORECARD", 40, 75);
                          ctx.fillStyle = "#e2e8f0";
                          ctx.font = "bold 24px sans-serif";
                          ctx.fillText("परीक्षा: " + selSubExam + " (" + selSection + ")", 40, 125);
                          ctx.fillStyle = "#10b981";
                          ctx.font = "bold 46px sans-serif";
                          ctx.fillText("आपका स्कोर: " + score + " / " + (activeList.length * activePosMark).toFixed(0), 40, 205);
                          ctx.fillStyle = "#fbbf24";
                          ctx.font = "bold 26px sans-serif";
                          ctx.fillText("🥇 Topper स्कोर: " + (activeList.length * activePosMark * 0.88).toFixed(2) + "   |   👥 Avg: " + (activeList.length * activePosMark * 0.54).toFixed(2), 40, 260);
                          ctx.fillStyle = "#f8fafc";
                          ctx.font = "bold 24px sans-serif";
                          ctx.fillText("✅ सही: " + right + "     ❌ गलत: " + wrong + "     ⏭️ छोड़े: " + skipped, 40, 325);
                          ctx.fillStyle = "#818cf8";
                          ctx.font = "bold 22px sans-serif";
                          ctx.fillText("🌐 अभी लाइव टेस्ट दें: https://vercel.app", 40, 445);
                          c.toBlob((blob) => {
                            if (blob && navigator.share) {
                              const file = new File([blob], "CrackBPSC-Scorecard.png", { type: "image/png" });
                              navigator.share({ title: "CrackBPSC Scorecard", text: "मेरा स्कोर: " + score + " — अभी टेस्ट दें: https://vercel.app", files: [file] }).catch(() => {});
                            } else {
                              const link = document.createElement("a");
                              link.download = "CrackBPSC-Scorecard.png";
                              link.href = c.toDataURL("image/png");
                              link.click();
                              alert("✅ Scorecard कार्ड डाउनलोड हो गया है — अब आप इसे WhatsApp या Facebook पर शेयर कर सकते हैं!");
                            }
                          });
                        }
                      }}
                      className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 rounded-xl font-black text-xs shadow-lg"
                    >
                      📲 WhatsApp / Facebook पर Scorecard कार्ड शेयर करें
                    </button> 
                    </div>
                    <div className="p-2 bg-slate-950/85 rounded-xl border border-indigo-500/40 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-bold">
                        <span className="text-cyan-300">📖 उत्तर व व्याख्या:</span>
                        <div className="flex flex-wrap gap-1">
                          <button onClick={() => { setSolFilter("ALL"); setQIdx(0); setSubmitted(false); setSolMode(true); }} className="px-2 py-0.5 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-md">सभी ({activeList.length})</button>
                          <button onClick={() => { const fi = activeList.findIndex((it: any, idx: number) => ans[idx] === it.correct); setSolFilter("RIGHT"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="px-2 py-0.5 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-md">✓ सही ({right})</button>
                          <button onClick={() => { const fi = activeList.findIndex((it: any, idx: number) => ans[idx] !== undefined && ans[idx] !== it.correct); setSolFilter("WRONG"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="px-2 py-0.5 bg-rose-600/90 hover:bg-rose-500 text-white rounded-md">✕ गलत ({wrong})</button>
                          <button onClick={() => { const fi = activeList.findIndex((_: any, idx: number) => ans[idx] === undefined); setSolFilter("SKIP"); setQIdx(fi >= 0 ? fi : 0); setSubmitted(false); setSolMode(true); }} className="px-2 py-0.5 bg-amber-500/90 hover:bg-amber-400 text-slate-950 rounded-md">⏭ छोड़े ({skipped})</button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto pt-1 border-t border-slate-800/80">
                        {activeList.map((it: any, idx: number) => {
                          const isR = ans[idx] === it.correct;
                          const isW = ans[idx] !== undefined && ans[idx] !== it.correct;
                          const bCls = isR ? "bg-emerald-600/90 text-white" : isW ? "bg-rose-600/90 text-white" : "bg-amber-500/90 text-slate-950";
                          return (
                            <button key={idx} onClick={() => { setSolFilter("ALL"); setQIdx(idx); setSubmitted(false); setSolMode(true); }} className={"w-6 h-6 rounded-md font-bold text-[10px] flex items-center justify-center " + bCls}>
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSolMode(false);
                        setInExam(false);
                      }}
                      className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/50 rounded-xl font-black text-xs shadow-md"
                    >
                      🏠 होम पर जाएं (Back to Home)
                    </button>
                  </div>
                );
              })()}
          </div>
          ) : solMode ? (
          <div
              onTouchStart={(e) => { (e.currentTarget as any)._tx = e.touches.item(0)?.clientX; }}
              onTouchEnd={(e) => {
                const endX = e.changedTouches.item(0)?.clientX;
                const dx = (endX !== undefined ? endX : 0) - ((e.currentTarget as any)._tx ? (e.currentTarget as any)._tx : 0);
                if (dx < -50 && qIdx + 1 < activeList.length) setQIdx(qIdx + 1);
                if (dx > 50 && qIdx > 0) setQIdx(qIdx - 1);
              }}
              className="p-3 sm:p-4 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-1.5 pb-1.5 border-b border-slate-700/80">
                <span className="font-extrabold text-xs sm:text-sm text-cyan-300">📖 व्याख्या व उत्तर ({qIdx + 1}/{activeList.length})</span>
                <div className="flex flex-wrap items-center gap-1 text-[10px] font-bold">
                  <button onClick={() => setExamLang(examLang === "BO" ? "HI" : examLang === "HI" ? "EN" : "BO")} className="px-2 py-0.5 bg-cyan-600 text-white rounded-md">अ/A {examLang}</button>
                  <button onClick={() => setSolFilter("ALL")} className={"px-2 py-0.5 rounded-md " + (solFilter === "ALL" ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300")}>सभी</button>
                  <button onClick={() => setSolFilter("RIGHT")} className={"px-2 py-0.5 rounded-md " + (solFilter === "RIGHT" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300")}>✓ सही</button>
                  <button onClick={() => setSolFilter("WRONG")} className={"px-2 py-0.5 rounded-md " + (solFilter === "WRONG" ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-300")}>✕ गलत</button>
                  <button onClick={() => setSolFilter("SKIP")} className={"px-2 py-0.5 rounded-md " + (solFilter === "SKIP" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300")}>⏭ छोड़े</button>
                  <button onClick={() => { setSolMode(false); setSubmitted(true); }} className="px-2 py-0.5 bg-slate-700 text-amber-300 rounded-md">📊 रिजल्ट</button>
                </div>
              </div>
            <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto p-1.5 bg-slate-900/70 rounded-lg border border-slate-800">
                {activeList.map((it: any, idx: number) => {
                  const isR = ans[idx] === it.correct;
                  const isW = ans[idx] !== undefined && ans[idx] !== it.correct;
                  const isS = ans[idx] === undefined;
                  if (solFilter === "RIGHT" && !isR) return null;
                  if (solFilter === "WRONG" && !isW) return null;
                  if (solFilter === "SKIP" && !isS) return null;
                  const c = qIdx === idx ? "ring-1 ring-white bg-cyan-500 text-slate-950" : isR ? "bg-emerald-600/90 text-white" : isW ? "bg-rose-600/90 text-white" : "bg-amber-500/90 text-slate-950";
                  return <button key={idx} onClick={() => setQIdx(idx)} className={"w-6 h-6 rounded-md font-bold text-[10px] " + c}>{idx + 1}</button>;
                })}
              </div>
            
                      {(() => {
                        const rawQ = examLang === "EN" && q.q_en ? String(q.q_en) : String(q.q || "");
                        const trLine = (txt: string) => {
                          const s = String(txt || "").replace(/^\[(?:हिन्दी|हिंदी|English)\]\s*/i, "").trim();
                          const parts = s.split(" / ");
                          if (parts.length >= 2) return examLang === "EN" ? parts.slice(1).join(" / ").trim() : (parts.at(0) || "").trim();
                          return s;
                        };
                        const allLines = rawQ.split("\n").map((l: string) => l.replace(/^[#*\u2022]+\s*/, "").trim()).filter((x: string) => x.length > 0 && !/^(?:कूट|code|codes)\s*:?$/i.test(x));
                        const isHiLine = (l: string) => /[\u0900-\u097F]/.test(l);
                        const hasBothLangs = !q.q_en && allLines.some(isHiLine) && allLines.some((l: string) => !isHiLine(l) && /[a-zA-Z]{3,}/.test(l));
                        const langLines = hasBothLangs ? allLines.filter((l: string) => l.includes("|") || (examLang === "EN" ? !isHiLine(l) : isHiLine(l))) : allLines;
                        const tableRows = langLines.filter((l: string) => l.includes("|") && !/^\|?[-:\s|]+\|?$/.test(l));
                        const normalLines = langLines.filter((l: string) => !l.includes("|"));
                        let h1 = examLang === "EN" ? "List-I" : "सूची-I (List-I)";
                        let h2 = examLang === "EN" ? "List-II" : "सूची-II (List-II)";
                        const joinedNorm = normalLines.join(" ");
                        const m1 = joinedNorm.match(/(?:सूची|List)\s*[-–]?\s*(?:I|1)\s*\(([^)]+)\)/i);
                        const m2 = joinedNorm.match(/(?:सूची|List)\s*[-–]?\s*(?:II|2)\s*\(([^)]+)\)/i);
                        if (m1 && m1.at(1)) h1 = (examLang === "EN" ? "List-I (" : "सूची-I (") + (m1.at(1) as string).trim() + ")";
                        if (m2 && m2.at(1)) h2 = (examLang === "EN" ? "List-II (" : "सूची-II (") + (m2.at(1) as string).trim() + ")";              
                        const rawExp = String(examLang === "EN" && q.exp_en ? q.exp_en : (q.exp || q.explanation || "इस प्रश्न की व्याख्या उपलब्ध नहीं है।")).replace(/^\[(?:हिन्दी|हिंदी|English)\]\s*/gi, "").trim();         
                        return (
                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80 space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-bold">
                              <span className="text-amber-300">प्रश्न #{qIdx + 1}</span>
                              <span className={"px-2 py-0.5 rounded-full text-[10px] " + (ans[qIdx] === q.correct ? "bg-emerald-500/20 text-emerald-300" : ans[qIdx] !== undefined ? "bg-rose-500/20 text-rose-300" : "bg-slate-700 text-slate-300")}>
                                {ans[qIdx] === q.correct ? "✓ सही उत्तर" : ans[qIdx] !== undefined ? "✗ गलत उत्तर" : "— छोड़ा गया"}
                              </span>
                            </div>
                            <div className="font-bold text-sm leading-relaxed space-y-1">
                              {normalLines.map((ln: string, i: number) => <div key={i}>{trLine(ln)}</div>)}
                            </div>
                            {tableRows.length > 0 && (
                              <div className="rounded-xl overflow-hidden border-2 border-indigo-400/60 text-xs">
                                <div className="grid grid-cols-2 divide-x divide-indigo-300/40 bg-indigo-700 text-white font-black px-2 py-1.5 text-[11px]">
                                  <div className="pr-1">{h1}</div>
                                  <div className="pl-2">{h2}</div>
                                </div>
                                {tableRows.map((row: string, rIdx: number) => {
                                  const cleanR = row.replace(/^\||\|$/g, "");
                                  const cols = cleanR.split("|");
                                  const leftCol = trLine(String(cols.at(0) || "").trim());
                                  const rightCol = trLine(cols.slice(1).join("|").trim());
                                  if (/^(?:सूची|List)\s*[-–]?\s*(?:I|1)/i.test(leftCol)) return null;
                                  return (
                                    <div key={rIdx} className="grid grid-cols-2 divide-x divide-indigo-400/30 bg-slate-800/80">
                                      <div className="p-2">{leftCol}</div>
                                      <div className="p-2">{rightCol}</div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                   <div className="space-y-1.5">
                      {q.opts.map((o: any, idx: number) => {
                        const isCorrectOpt = idx === q.correct;
                        const isUserWrong = ans[qIdx] === idx && idx !== q.correct;
                        const boxCls = isCorrectOpt ? "bg-emerald-900/70 border-emerald-400 text-emerald-100" : isUserWrong ? "bg-rose-900/70 border-rose-400 text-rose-100" : "bg-slate-800/70 border-slate-700 text-slate-300";
                        return (
                          <div key={idx} className={"py-2 px-2.5 rounded-lg border flex items-center justify-between gap-2 text-xs font-semibold " + boxCls}>
                            <span><b>({String.fromCharCode(65 + idx)})</b> {trLine(o)}</span>
                            {isCorrectOpt && <span className="px-1.5 py-0.5 bg-emerald-500 text-slate-950 rounded font-bold text-[10px] shrink-0">✓ सही</span>}
                            {isUserWrong && <span className="px-1.5 py-0.5 bg-rose-500 text-white rounded font-bold text-[10px] shrink-0">✕ आपका</span>}
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-cyan-500/40 text-xs space-y-1">
                      <div className="font-bold text-cyan-300">💡 विस्तृत व्याख्या:</div>
                      <div className="text-slate-100 leading-relaxed whitespace-pre-line">{trLine(rawExp)}</div>
                    </div>
                  </div>
                );
              })()}
              <div className="flex items-center justify-between gap-2 text-xs font-bold">
                <button onClick={() => { if (qIdx > 0) setQIdx(qIdx - 1); }} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-600">⬅ पिछला</button>
                <button onClick={() => { setSolMode(false); setSubmitted(true); }} className="px-3 py-1.5 bg-amber-400/90 hover:bg-amber-400 text-slate-950 rounded-lg">📊 रिजल्ट</button>
                <button onClick={() => { if (qIdx + 1 < activeList.length) setQIdx(qIdx + 1); }} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">अगला ➔</button>
              </div>
            </div> 
          ) : (
            <div className={((examTheme === "DARK" ? true : examTheme === "LIGHT" ? false : (new Date().getHours() >= 18 ? true : new Date().getHours() < 6)) ? "bg-[#181A1F] text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300") + " rounded-2xl border-2 overflow-hidden shadow-xl"}>
            <div className={((examTheme === "DARK" ? true : examTheme === "LIGHT" ? false : (new Date().getHours() >= 18 ? true : new Date().getHours() < 6)) ? "bg-[#111317] border-slate-800" : "bg-slate-100 border-slate-300") + " px-3 py-2.5 border-b flex justify-between items-center gap-2"}>
              <div className="flex items-center gap-2.5">
                <button onClick={() => setIsPaused(!isPaused)} className="w-8 h-8 rounded-full bg-slate-700/80 text-white flex items-center justify-center font-black text-xs">{isPaused ? "▶️" : "⏸️"}</button>
                <div>
                  <div className="text-xs font-black tracking-wide text-sky-400">⏱ {String(Math.floor(totalSec / 3600)).padStart(2, "0")}:{String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0")}:{String(totalSec % 60).padStart(2, "0")}</div>
                  <div className="text-[11px] font-bold opacity-80 truncate max-w-[160px] sm:max-w-xs">{goal}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setExamTheme(examTheme === "AUTO" ? "DARK" : examTheme === "DARK" ? "LIGHT" : "AUTO")} className="px-2 py-1 rounded bg-slate-700 text-amber-300 font-black text-[10px]">{examTheme === "AUTO" ? "⏰ Auto" : examTheme === "DARK" ? "🌙 Dark" : "☀️ Light"}</button>
                <button onClick={() => setExamLang(examLang === "BI" ? "HI" : examLang === "HI" ? "EN" : "BI")} className="px-2 py-1 rounded bg-slate-700 text-white font-black text-[11px]">अ/A ({examLang})</button>
                <button onClick={() => setShowPalette(!showPalette)} className="px-2.5 py-1 rounded bg-indigo-600 text-white font-black text-xs">☰</button>
              </div>
            </div>
              {isPaused ? (
              <div className="p-10 text-center space-y-4">
                <div className="text-3xl">⏸️</div>
                <div className="text-base font-black text-amber-400">परीक्षा अस्थायी रूप से रोकी गई है (Test Paused)</div>
                <button onClick={() => setIsPaused(false)} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-black text-xs">▶️ परीक्षा फिर से शुरू करें (Resume)</button>
              </div>
            ) : (
              <div
            onTouchStart={(e) => { (e.currentTarget as any)._tx = e.touches.item(0)?.clientX; }}
         onTouchEnd={(e) => {
           const endX = e.changedTouches.item(0)?.clientX;
           const dx = (endX !== undefined ? endX : 0) - ((e.currentTarget as any)._tx ? (e.currentTarget as any)._tx : 0);
              if (dx < -50 && qIdx + 1 < activeList.length) { setQIdx(qIdx + 1); setQSec(0); }
              if (dx > 50 && qIdx > 0) { setQIdx(qIdx - 1); setQSec(0); }
            }}
            className="p-3 sm:p-4 space-y-3"
          >
                <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-slate-700/50 text-xs">
                  <div className="flex items-center gap-2 font-black">
                    <span className="px-2 py-0.5 rounded bg-slate-700 text-white">{qIdx + 1} / {activeList.length}</span>
                    <span className="text-slate-400 font-bold">⏱ {String(Math.floor(qSec / 60)).padStart(2, "0")}:{String(qSec % 60).padStart(2, "0")}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-black text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-emerald-600/20 text-emerald-400 border border-emerald-500/40">+ {activePosMark.toFixed(1)}</span>
                    <span className="px-2 py-0.5 rounded bg-rose-600/20 text-rose-400 border border-rose-500/40">- {activeNegEnabled ? activeNegVal.toFixed(2) : "0.0"}</span>
                    <button onClick={() => setReportOpen(!reportOpen)} className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black">⚠️ Report</button>
                    <button onClick={() => { if (bookmarkedQs.includes(qIdx)) { setBookmarkedQs(bookmarkedQs.filter((x) => x !== qIdx)); setSavedBms(savedBms.filter((b: any) => b.q !== q.q)); } else { setBookmarkedQs([...bookmarkedQs, qIdx]); setSavedBms([{ qIdx: qIdx, q: q.q, opts: q.opts, ans: q.opts.at(q.correct), exp: q.exp ? q.exp : "इस प्रश्न की विस्तृत व्याख्या उपलब्ध है।" }, ...savedBms]); } }} className="px-2 py-0.5 rounded bg-slate-700/80 text-amber-300 font-black">{bookmarkedQs.includes(qIdx) ? "★ Saved" : "☆"}</button> 
                  </div>
                </div>
                {reportOpen && (
                  <div className="p-3 rounded-xl bg-amber-950/90 border-2 border-amber-400 text-white space-y-2 text-xs">
                    <div className="flex justify-between items-center font-black text-amber-300">
                      <span>⚠️ इस प्रश्न की गलती रिपोर्ट करें (सीधे Admin को जाएगा):</span>
                      <button onClick={() => setReportOpen(false)} className="px-2 py-0.5 bg-slate-700 rounded">✖️</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-rose-300 block mb-0.5">❌ कौन-सा ऑप्शन / हिस्सा गलत है?</label>
                        <select value={repWrongOpt} onChange={(e) => setRepWrongOpt(e.target.value)} className="w-full p-1.5 rounded bg-slate-900 border border-slate-600 text-white font-bold">
                          <option value="Option 1">Option 1 गलत है</option>
                          <option value="Option 2">Option 2 गलत है</option>
                          <option value="Option 3">Option 3 गलत है</option>
                          <option value="Option 4">Option 4 गलत है</option>
                          <option value="Option 5">Option 5 गलत है</option>
                          <option value="पूरा प्रश्न ही गलत है">पूरा प्रश्न ही गलत है</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-emerald-300 block mb-0.5">✅ सही ऑप्शन क्या होना चाहिए?</label>
                        <select value={repCorrectOpt} onChange={(e) => setRepCorrectOpt(e.target.value)} className="w-full p-1.5 rounded bg-slate-900 border border-slate-600 text-white font-bold">
                          <option value="Option 1">Option 1 सही है</option>
                          <option value="Option 2">Option 2 सही है</option>
                          <option value="Option 3">Option 3 सही है</option>
                          <option value="Option 4">Option 4 सही है</option>
                          <option value="Option 5">Option 5 सही है</option>
                        </select>
                      </div>
                    </div>
                    <textarea rows={2} value={repExp} onChange={(e) => setRepExp(e.target.value)} placeholder="अपना Explanation / प्रमाण यहाँ लिखें..." className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white font-semibold" />
                    <button onClick={() => { setQReports([{ id: Date.now(), qText: q.q, opts: q.opts, wrongOpt: repWrongOpt, correctOpt: repCorrectOpt, exp: repExp, time: new Date().toLocaleTimeString() }, ...qReports]); setRepExp(""); setReportOpen(false); alert("✅ आपकी रिपोर्ट पूरे प्रश्न, सही ऑप्शन व Explanation के साथ Admin को भेज दी गई है!"); }} className="w-full py-2 bg-emerald-600 text-white rounded-lg font-black">📤 रिपोर्ट सबमिट करें</button>
                  </div>
                )}
                {showPalette && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
              <div className="w-80 sm:w-96 h-full bg-slate-900 border-l-2 border-indigo-500 text-white p-3.5 flex flex-col justify-between shadow-2xl">
                <div className="space-y-2.5 overflow-hidden flex flex-col flex-1">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="font-black text-sm text-cyan-300">📊 Question Palette डैशबोर्ड</span>
                    <button onClick={() => setShowPalette(false)} className="px-2.5 py-1 bg-rose-600 rounded-lg font-black text-xs">✕ बंद करें</button>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-black">
                    <div className="p-1.5 bg-emerald-900/70 border border-emerald-500/40 rounded-lg text-emerald-300">🟢 हल: {Object.keys(ans).length}</div>
                    <div className="p-1.5 bg-purple-900/70 border border-purple-500/40 rounded-lg text-purple-300">🟣 Review: {reviewQs.length}</div>
                    <div className="p-1.5 bg-slate-800 border border-slate-600 rounded-lg text-slate-300">⚪ बाकी: {Math.max(0, activeList.length - Object.keys(ans).length)}</div>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-1 pt-1">
                    <div className="grid grid-cols-5 gap-1.5">
                      {activeList.map((_: any, i: number) => {
                        const isAns = ans[i] !== undefined;
                        const isRev = reviewQs.includes(i);
                        const isCur = qIdx === i;
                        const cls = isCur ? "bg-amber-400 text-slate-950 ring-2 ring-white" : isRev ? "bg-purple-600 text-white" : isAns ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300 border border-slate-700";
                        return (
                          <button key={i} onClick={() => { setQIdx(i); setQSec(0); setShowPalette(false); }} className={"py-2 rounded-lg font-black text-xs transition " + cls}>
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-700 space-y-2">
                  <div className="grid grid-cols-3 gap-1.5 text-[11px] font-black">
                    <button onClick={() => { if (qIdx > 0) { setQIdx(qIdx - 1); setQSec(0); setShowPalette(false); } }} className="py-2 bg-slate-800 border border-slate-600 rounded-lg">⬅ पिछला</button>
                    <button onClick={() => { setReviewQs(reviewQs.includes(qIdx) ? reviewQs.filter((x) => x !== qIdx) : [...reviewQs, qIdx]); }} className="py-2 bg-purple-700 text-white rounded-lg">🟣 Review</button>
                    <button onClick={() => { if (qIdx + 1 < activeList.length) { setQIdx(qIdx + 1); setQSec(0); setShowPalette(false); } }} className="py-2 bg-indigo-600 text-white rounded-lg">अगला ➔</button>
                  </div>
                  <button onClick={() => { setShowPalette(false); setSubmitted(true); }} className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 rounded-xl font-black text-xs shadow-lg">
                    ✅ Submit Test (अंतिम सबमिट करें)
                  </button>
                </div>
              </div>
            </div>
          )}
                {(() => {
                const trLine = (txt: string) => {
                  const parts = txt.split(" / ");
                  if (parts.length < 2) return txt;
                  if (examLang === "HI") return parts.at(0);
                  if (examLang === "EN") return parts.slice(1).join(" / ");
                  return txt;
                };
                const rawLines = q.q.split("\n").map((l: string) => l.trim()).filter((x: string) => x.length > 0);
                const tableRows = rawLines.filter((l: string) => l.includes("|"));
                const normalLines = rawLines.filter((l: string) => !l.includes("|"));
                return (
                  <div className="space-y-2.5">
                    <div className="font-extrabold text-sm sm:text-base leading-relaxed space-y-1">
                      {normalLines.map((ln: string, i: number) => (
                        <div key={i}>{trLine(ln)}</div>
                      ))}
                    </div>
                    {tableRows.length > 0 && (
                      <div className="rounded-xl overflow-hidden border-2 border-indigo-400/60 bg-slate-900/90 text-white text-xs sm:text-sm">
                        {tableRows.map((row: string, rIdx: number) => {
                          const cols = row.split("|");
                          const leftCol = trLine(String(cols.at(0) ? cols.at(0) : "").trim());
                          const rightCol = trLine((cols.slice(1).join("|")).trim());
                          return (
                            <div key={rIdx} className={"grid grid-cols-2 divide-x divide-indigo-400/50 border-b border-indigo-400/30 last:border-b-0 " + (rIdx === 0 ? "bg-indigo-700 font-black text-amber-200" : "font-bold")}>
                              <div className="p-2 sm:p-2.5">{leftCol}</div>
                              <div className="p-2 sm:p-2.5">{rightCol}</div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()}
                <div className="space-y-2">
                  {q.opts.map((o: any, idx: number) => (
                    <div key={idx} onClick={() => setAns({ ...ans, [qIdx]: idx })} className={"p-3 rounded-xl border-2 cursor-pointer flex items-center gap-3 text-xs sm:text-sm font-bold transition " + (ans[qIdx] === idx ? "border-sky-500 bg-sky-500/20" : ((examTheme === "DARK" ? true : examTheme === "LIGHT" ? false : (new Date().getHours() >= 18 ? true : new Date().getHours() < 6)) ? "border-slate-700 bg-[#22252C]" : "border-slate-200 bg-slate-50"))}>
                      <span className={"w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 " + (ans[qIdx] === idx ? "bg-sky-500 text-white" : "bg-slate-600 text-white")}>{idx + 1}</span>
                      <span>{examLang === "HI" ? o.split(" / ").at(0) : examLang === "EN" ? (o.split(" / ").at(1) ? o.split(" / ").at(1) : o) : o}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2.5 border-t border-slate-700/50 grid grid-cols-4 gap-1.5 text-[11px] font-bold">
                      <button onClick={() => { if (qIdx > 0) { setQIdx(qIdx - 1); setQSec(0); } }} className="py-2 px-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-600">⬅ पिछला</button>
                      <button onClick={() => { if (!markedQs.includes(qIdx)) setMarkedQs([...markedQs, qIdx]); setQIdx((qIdx + 1) % activeList.length); setQSec(0); }} className="py-2 px-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl">🔖 Review</button>
                      <button onClick={() => { const na = { ...ans }; delete na[qIdx]; setAns(na); }} className="py-2 px-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl">✖ Clear</button>
                      <button onClick={() => { setQIdx((qIdx + 1) % activeList.length); setQSec(0); }} className="py-2 px-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl">अगला ➔</button>
                    </div>
              </div>
            )}
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
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Menu" className="p-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600/80 rounded-lg text-white flex items-center justify-center"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg></button>                  
            <button type="button" onClick={() => { setMyExamsOpen(!myExamsOpen); setAddMoreExamsMode(false); }} className="px-2.5 py-1 hover:bg-slate-800 rounded-lg text-white flex items-center gap-1.5 text-sm font-bold">
              <span>My Exams</span>
              <span className="px-1.5 py-0.5 bg-slate-700 text-slate-200 rounded-full text-xs font-black">{checkedExams.length}</span>
              <span className="text-xs text-slate-300">{myExamsOpen ? "▲" : "∨"}</span>
            </button>
          </div>
          {myExamsOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-start sm:pt-12 sm:pl-3" onClick={() => setMyExamsOpen(false)}>
              <div className="w-full sm:w-96 bg-white text-slate-900 rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mt-2 sm:hidden" />
                {!addMoreExamsMode ? (
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between border-b pb-2.5">
                      <span className="font-black text-sm text-slate-900">आपकी नामांकित परीक्षाएं</span>
                      <button type="button" onClick={() => { setAddMoreExamsMode(true); setGoalRegion(""); setSelectedState(""); }} className="text-xs font-black text-blue-600 hover:underline">+ अधिक परीक्षा का चयन करें</button>
                    </div>
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {enrolledExams.map((item, idx) => {
                        const isChecked = checkedExams.includes(item.ex);
                        return (
                          <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                            <button type="button" onClick={() => {
                              setCheckedExams(isChecked ? checkedExams.filter((x) => x !== item.ex) : [...checkedExams, item.ex]);
                            }} className="flex items-center gap-3 text-left flex-1 min-w-0">
                              <span className={"w-5 h-5 rounded flex items-center justify-center border-2 text-xs font-black shrink-0 " + (isChecked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-400 bg-white")}>{isChecked ? "✓" : ""}</span>
                              <span className="font-semibold text-sm text-slate-800 truncate">{item.ex}</span>
                            </button>
                            <button type="button" onClick={() => {
                              setEnrolledExams(enrolledExams.filter((x) => x.ex !== item.ex));
                              setCheckedExams(checkedExams.filter((x) => x !== item.ex));
                            }} title="हटाएं" className="px-2 py-1 text-slate-400 hover:text-rose-600 font-black text-xs">⋮</button>
                          </div>
                        );
                      })}
                    </div>
                    <button type="button" disabled={checkedExams.length === 0} onClick={() => {
                      const lastEx = checkedExams[checkedExams.length - 1];
                      const found = enrolledExams.find((x) => x.ex === lastEx);
                      if (found) {
                        if (examTree[found.cat]) setSelCat(found.cat);
                        setSelSubExam(found.ex);
                        setDrillStep(3);
                      }
                      setMyExamsOpen(false);
                    }} className={"w-full py-2.5 rounded-xl font-black text-sm transition " + (checkedExams.length > 0 ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" : "bg-slate-200 text-slate-400 cursor-not-allowed")}>फ़िल्टर लागू करें</button>
                  </div>
                ) : (
                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-black text-sm text-slate-900">🎯 परीक्षा जोड़ें (Select Exam)</span>
                      <button type="button" onClick={() => { if (selectedState) { setSelectedState(""); } else if (goalRegion) { setGoalRegion(""); } else { setAddMoreExamsMode(false); } }} className="px-2 py-0.5 bg-slate-100 rounded text-xs font-black text-slate-700">← वापस</button>
                    </div>
                    {goalRegion === "" && (
                      <div className="space-y-2">
                        <button type="button" onClick={() => { setGoalRegion("CENTRAL"); setSelectedState(""); }} className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center justify-between font-black text-xs"><span>1. 🇮🇳 Central / India Exams</span><span>➔</span></button>
                        <button type="button" onClick={() => { setGoalRegion("STATE"); setSelectedState(""); }} className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center justify-between font-black text-xs"><span>2. 📍 State-Wise Exams</span><span>➔</span></button>
                      </div>
                    )}
                    {goalRegion === "STATE" && selectedState === "" && (
                      <div className="max-h-64 overflow-y-auto space-y-1">
                        {["Bihar", "Uttar Pradesh", "Jharkhand", "Madhya Pradesh", "Rajasthan", "Delhi"].map((st) => (
                          <button key={st} type="button" onClick={() => setSelectedState(st)} className="w-full p-2 rounded-lg bg-slate-50 hover:bg-amber-50 border border-slate-200 flex items-center justify-between font-black text-xs"><span>📍 {st}</span><span>➔</span></button>
                        ))}
                      </div>
                    )}
                    {(goalRegion === "CENTRAL" || (goalRegion === "STATE" && selectedState !== "")) && (
                      <div className="max-h-64 overflow-y-auto space-y-1">
                        {(goalRegion === "CENTRAL"
                          ? [...Object.entries(examTree).filter(([c]) => !/bpsc|tre|bihar|bssc/i.test(c)).flatMap(([c, list]: any) => list.map((ex: string) => ({ cat: c, ex }))), { cat: "UPSC", ex: "UPSC CSE (IAS/IPS)" }, { cat: "Central Teaching", ex: "CTET (Paper 1 & 2)" }, { cat: "Central Teaching", ex: "UGC NET / JRF" }, { cat: "Central Teaching", ex: "EMRS PGT / TGT" }, { cat: "Central Teaching", ex: "DSSSB PGT / TGT" }]
                          : selectedState === "Bihar"
                          ? [{ cat: "BPSC", ex: "72वीं BPSC CCE" }, { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 1–5 PRT)" }, { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 6–8)" }, { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 9–10 TGT)" }, { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 11–12 PGT)" }, { cat: "BPSC", ex: "BPSC Head Teacher (प्रधान शिक्षक)" }, { cat: "BPSC", ex: "BPSC AEDO" }, { cat: "BSSC", ex: "BSSC CGL-4" }, { cat: "BSSC", ex: "BSSC Inter Level" }, { cat: "Bihar Police", ex: "Bihar Police SI (दरोगा)" }, { cat: "Bihar Police", ex: "Bihar Police Prohibition Sub Inspector" }, { cat: "Bihar Teaching", ex: "Bihar STET (Paper 1 & 2)" }]
                          : [{ cat: selectedState + " PSC", ex: selectedState + " State PSC" }, { cat: selectedState + " Police", ex: selectedState + " Police & SI" }, { cat: selectedState + " TET", ex: selectedState + " TET / Teacher" }]
                        ).map((item: any, idx: number) => {
                          const alreadyAdded = enrolledExams.some((x) => x.ex === item.ex);
                          return (
                            <button key={idx} type="button" onClick={() => {
                              if (!alreadyAdded) setEnrolledExams([...enrolledExams, item]);
                              setAddMoreExamsMode(false);
                            }} className="w-full p-2 rounded-lg border border-slate-200 hover:bg-blue-50 flex items-center justify-between text-left text-xs">
                              <div>
                                <div className="font-black text-slate-900">{item.ex}</div>
                                <div className="text-[10px] text-slate-400">{item.cat}</div>
                              </div>
                              <span className="font-black text-blue-600">{alreadyAdded ? "✓ जोड़ा गया" : "+ जोड़ें"}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="hidden">
          </div>
          {menuOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex" onClick={() => setMenuOpen(false)}>
              <div className="w-80 max-w-[88vw] bg-white text-slate-900 h-full flex flex-col justify-between shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div>
                  <div className="p-3.5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-amber-400 text-slate-950 rounded text-[10px] font-black">⚡ CRACKBPSC PRO</span>
                      <button type="button" onClick={() => setMenuOpen(false)} className="px-2 py-0.5 bg-white/15 rounded text-xs font-black">✕</button>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-amber-400 flex items-center justify-center font-black text-base text-white">{user ? user.slice(0, 1).toUpperCase() : "S"}</div>
                      <div>
                        <div className="font-black text-sm">{user || "Student Guest"}</div>
                        <div className="text-[10px] text-amber-300 font-bold">🎯 {selSubExam}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 space-y-1.5 text-xs font-bold">
                    <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-xl overflow-hidden">
                      <button type="button" onClick={() => setShowGoalPicker(!showGoalPicker)} className="w-full p-2.5 flex items-center justify-between text-left bg-indigo-600 text-white">
                        <div>
                          <div className="text-[9px] text-indigo-200 uppercase">🎯 आपकी परीक्षा (Testbook Selector)</div>
                          <div className="font-black text-xs">{goalRegion === "CENTRAL" ? "All-India" : selectedState} ➔ {selSubExam}</div>
                        </div>
                        <span className="text-xs font-black">{showGoalPicker ? "▲" : "▼"}</span>
                      </button>
                      {showGoalPicker && (
                        <div className="p-2 space-y-2 bg-white">
                          <div className="grid grid-cols-2 gap-1">
                            <button type="button" onClick={() => setGoalRegion("STATE")} className={"py-1.5 px-2 rounded-lg font-black text-[10px] border " + (goalRegion === "STATE" ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-700")}>📍 State-Wise</button>
                            <button type="button" onClick={() => setGoalRegion("CENTRAL")} className={"py-1.5 px-2 rounded-lg font-black text-[10px] border " + (goalRegion === "CENTRAL" ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-700")}>🇮🇳 Central / India</button>
                          </div>
                          {goalRegion === "STATE" ? (
                            <div className="space-y-1.5">
                              <div className="flex flex-wrap gap-1">
                                {["Bihar", "Uttar Pradesh", "Jharkhand", "Madhya Pradesh", "Rajasthan", "Delhi"].map((st) => (
                                  <button key={st} type="button" onClick={() => setSelectedState(st)} className={"px-2 py-0.5 rounded-full text-[10px] font-black border " + (selectedState === st ? "bg-amber-400 text-slate-950 border-amber-500" : "bg-slate-100 text-slate-700")}>{st}</button>
                                ))}
                              </div>
                              <div className="max-h-52 overflow-y-auto space-y-1 pr-0.5">
                                {(() => {
                                  const biharMaster = [
                                    { cat: "BPSC", ex: "72वीं BPSC CCE" },
                                    { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 1–5 PRT)" },
                                    { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 6–8)" },
                                    { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 9–10 TGT)" },
                                    { cat: "BPSC", ex: "BPSC TRE 4.0 (Class 11–12 PGT)" },
                                    { cat: "BPSC", ex: "BPSC Head Teacher (प्रधान शिक्षक)" },
                                    { cat: "BPSC", ex: "BPSC Headmaster (प्रधानाध्यापक)" },
                                    { cat: "BPSC", ex: "BPSC CDPO" },
                                    { cat: "BPSC", ex: "BPSC AE / Polytechnic Lecturer" },
                                    { cat: "BPSC", ex: "BPSC Auditor / Project Manager" },
                                    { cat: "BSSC", ex: "BSSC CGL-4 (सचिवालय सहायक)" },
                                    { cat: "BSSC", ex: "BSSC Inter Level (10+2)" },
                                    { cat: "Bihar Police", ex: "Bihar Police SI (दरोगा)" },
                                    { cat: "Bihar Police", ex: "Bihar Police Constable (सिपाही)" },
                                    { cat: "Bihar Police", ex: "Bihar Excise SI / Prohibition" },
                                    { cat: "Bihar Teaching", ex: "Bihar STET (Paper 1 & 2)" },
                                    { cat: "Bihar Teaching", ex: "BTET / Bihar D.El.Ed" },
                                    { cat: "Bihar Court & Others", ex: "Patna High Court Assistant" },
                                    { cat: "Bihar Court & Others", ex: "Bihar Civil Court Clerk / Peon" },
                                    { cat: "Bihar Court & Others", ex: "Bihar Vidhan Sabha / Parishad" },
                                    { cat: "Bihar Court & Others", ex: "Beltron DEO / Stenographer" },
                                    { cat: "Bihar Court & Others", ex: "Bihar Amin / LRC Revenue" }
                                  ];
                                  const existingBihar = Object.entries(examTree).filter(([c]) => /bpsc|tre|bihar|bssc|police|daroga|stet/i.test(c)).flatMap(([c, list]: any) => list.map((ex: string) => ({ cat: c, ex })));
                                  const mergedBihar = [...existingBihar];
                                  biharMaster.forEach((bm) => { if (!mergedBihar.some((x) => x.ex.toLowerCase() === bm.ex.toLowerCase())) mergedBihar.push(bm); });
                                  const listToShow = selectedState === "Bihar"
                                    ? mergedBihar
                                    : selectedState === "Uttar Pradesh"
                                    ? [{ cat: "UPPSC & UP Exams", ex: "UPPSC PCS" }, { cat: "UPPSC & UP Exams", ex: "UP RO/ARO" }, { cat: "UPPSC & UP Exams", ex: "UP Police Constable & SI" }, { cat: "UPPSC & UP Exams", ex: "UPSSSC PET" }, { cat: "UPPSC & UP Exams", ex: "UPTET / Super TET" }]
                                    : selectedState === "Jharkhand"
                                    ? [{ cat: "JPSC & JSSC", ex: "JPSC Civil Services" }, { cat: "JPSC & JSSC", ex: "JSSC CGL" }, { cat: "JPSC & JSSC", ex: "Jharkhand Police & TET" }]
                                    : [{ cat: selectedState + " PSC", ex: selectedState + " State PSC" }, { cat: selectedState + " Exams", ex: selectedState + " Police & SI" }, { cat: selectedState + " Exams", ex: selectedState + " TET / Teacher" }];
                                  return listToShow.map((item: any, idx: number) => (
                                    <button key={idx} type="button" onClick={() => {
                                      if (examTree[item.cat]) { setSelCat(item.cat); }
                                      setSelSubExam(item.ex);
                                      setDrillStep(3);
                                      setMenuOpen(false);
                                    }} className={"w-full p-1.5 rounded-lg border text-left flex items-center justify-between " + (selSubExam === item.ex ? "bg-emerald-50 border-emerald-400 text-emerald-950" : "bg-slate-50 hover:bg-indigo-50 border-slate-200")}>
                                      <div>
                                        <div className="font-black text-[11px]">{item.ex}</div>
                                        <div className="text-[9px] text-slate-500">{item.cat}</div>
                                      </div>
                                      <span className="font-black text-[11px] text-indigo-600">{selSubExam === item.ex ? "✓" : "➔"}</span>
                                    </button>
                                  ));
                                })()}
                              </div>
                            </div>
                          ) : (
                            <div className="max-h-52 overflow-y-auto space-y-1 pr-0.5">
                              {[
                                ...Object.entries(examTree).filter(([c]) => !/bpsc|tre|bihar|bssc/i.test(c)).flatMap(([c, list]: any) => list.map((ex: string) => ({ cat: c, ex }))),
                                { cat: "UPSC & Civil Services", ex: "UPSC CSE (IAS/IPS)" },
                                { cat: "UPSC & Civil Services", ex: "CDS / NDA / CAPF" },
                                { cat: "Central Teaching", ex: "CTET (Paper 1 & 2)" },
                                { cat: "Central Teaching", ex: "UGC NET / JRF" },  
              
                                { cat: "Central Teaching", ex: "KVS / NVS / DSSSB" }
                              ].map((item: any, idx: number) => (
                                <button key={idx} type="button" onClick={() => {
                                  if (examTree[item.cat]) { setSelCat(item.cat); }
                                  setSelSubExam(item.ex);
                                  setDrillStep(3);
                                  setMenuOpen(false);
                                }} className={"w-full p-1.5 rounded-lg border text-left flex items-center justify-between " + (selSubExam === item.ex ? "bg-emerald-50 border-emerald-400 text-emerald-950" : "bg-slate-50 hover:bg-indigo-50 border-slate-200")}>
                                  <div>
                                    <div className="font-black text-[11px]">{item.ex}</div>
                                    <div className="text-[9px] text-slate-500">{item.cat}</div>
                                  </div>
                                  <span className="font-black text-[11px] text-indigo-600">{selSubExam === item.ex ? "✓" : "➔"}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <button type="button" onClick={() => { setMenuOpen(false); setDrillStep(3); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5">🏠 होम डैशबोर्ड (Home)</button>
                    <button type="button" onClick={() => { setMenuOpen(false); setSelSection("Practice Test"); setDrillStep(3); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between"><span>📝 मॉक टेस्ट सीरीज़ (Test Series)</span><span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[9px]">Active</span></button>
                    <button type="button" onClick={() => { setMenuOpen(false); setSelSection("PYQs"); setDrillStep(3); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between"><span>📜 पिछले वर्ष के प्रश्न (PYQs)</span><span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[9px]">Active</span></button>
                    <button type="button" onClick={() => { setMenuOpen(false); setSelSection("Current Affairs"); setDrillStep(3); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"><span>📰 Daily Current Affairs</span></button>
                    <button type="button" onClick={() => { setMenuOpen(false); setNotifOpen(true); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"><span>🔔 सूचना व अपडेट्स (Alerts)</span></button>
                  </div>
                </div>
                <div className="p-3 border-t bg-slate-50 text-[11px]">
                  {user ? (
                    <button type="button" onClick={() => { setUser(""); setMenuOpen(false); }} className="w-full py-2 bg-rose-600 text-white rounded-lg font-black">🚪 लॉगआउट करें (Logout)</button>
                  ) : (
                    <div className="text-center text-slate-500 font-bold">लॉगिन करें और अपनी रैंक ट्रैक करें</div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 shadow-2xl">
            <div className="max-w-3xl mx-auto grid grid-cols-5">
              <button type="button" onClick={() => { setBottomTab("HOME"); setDrillStep(3); }} className={"relative py-2 flex flex-col items-center justify-center gap-1 transition " + (bottomTab === "HOME" ? "text-sky-400 bg-sky-500/10" : "text-slate-400 hover:text-slate-200")}>
                {bottomTab === "HOME" && <span className="absolute top-0 inset-x-3 h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M9.5 20v-6h5v6" /></svg>
                <span className="text-[10px] font-bold tracking-wide">Home</span>
              </button>

              <button type="button" onClick={() => { setBottomTab("TESTS"); setSelSection("Practice Test"); setDrillStep(3); }} className={"relative py-2 flex flex-col items-center justify-center gap-1 transition " + (bottomTab === "TESTS" ? "text-sky-400 bg-sky-500/10" : "text-slate-400 hover:text-slate-200")}>
                {bottomTab === "TESTS" && <span className="absolute top-0 inset-x-3 h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v2h6V3" /><path d="M8.5 10l1.5 1.5 2.5-2.5" /><line x1="14" y1="10.5" x2="16.5" y2="10.5" /><path d="M8.5 15l1.5 1.5 2.5-2.5" /><line x1="14" y1="15.5" x2="16.5" y2="15.5" /></svg>
                <span className="text-[10px] font-bold tracking-wide">Tests</span>
              </button>

              <button type="button" onClick={() => { setBottomTab("FREE"); setSelSection("PYQs"); setDrillStep(3); }} className={"relative py-2 flex flex-col items-center justify-center gap-1 transition " + (bottomTab === "FREE" ? "text-emerald-400 bg-emerald-500/10" : "text-slate-400 hover:text-slate-200")}>
                {bottomTab === "FREE" && <span className="absolute top-0 inset-x-3 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" />}
                <div className="relative">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 8 12 8s3-5 4.5-5a2.5 2.5 0 0 1 0 5" /></svg>
                  <span className="absolute -top-1.5 -right-5 px-1 py-0.2 bg-emerald-500 text-slate-950 rounded text-[7px] font-black leading-tight shadow">FREE</span>
                </div>
                <span className="text-[10px] font-bold tracking-wide">Free</span>
              </button>

              <button type="button" onClick={() => setBottomTab("PASS")} className={"relative py-2 flex flex-col items-center justify-center gap-1 transition " + (bottomTab === "PASS" ? "text-amber-300 bg-amber-500/15" : "text-amber-400/90 hover:text-amber-300")}>
                {bottomTab === "PASS" && <span className="absolute top-0 inset-x-3 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />}
                <div className="px-2 py-0.5 rounded border border-amber-400/80 bg-amber-500/15 shadow-[0_0_10px_rgba(251,191,36,0.25)] flex items-center justify-center">
                  <span className="text-[9px] font-black tracking-wider text-amber-300 leading-none">PASS</span>
                </div>
                <span className="text-[10px] font-bold tracking-wide">Pass</span>
              </button>

              <button type="button" onClick={() => { setBottomTab("CA"); setSelSection("Current Affairs"); }} className={"relative py-2 flex flex-col items-center justify-center gap-1 transition " + (bottomTab === "CA" ? "text-sky-400 bg-sky-500/15" : "text-slate-400 hover:text-slate-200")}>
                {bottomTab === "CA" && <span className="absolute top-0 inset-x-2 h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><circle cx="13" cy="8" r="2.5" /><line x1="10" y1="14" x2="18" y2="14" /><line x1="10" y1="18" x2="18" y2="18" /></svg>
                <span className="text-[10px] font-black tracking-tight whitespace-nowrap">Current Affairs</span>
              </button>
            </div>
          </div>

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
          <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 space-y-4"}>                                                                                  


            {bottomTab === "TESTS" && (
              <div className="min-h-[84vh] pb-20 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-2.5 bg-slate-900/95 backdrop-blur border border-slate-800 rounded-2xl text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600/80 flex items-center justify-center text-white shadow-xs shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] font-black tracking-wider uppercase">CRACKBPSC</span>
                    <span className="font-black text-sm text-white">Test Series</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-black truncate max-w-[130px]">{selSubExam}</span>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                    <div>
                      <div className="text-[11px] text-slate-400 font-bold">लक्ष्य परीक्षा (Target Exam)</div>
                      <div className="text-base font-black text-amber-400">{selSubExam}</div>
                    </div>
                    <div className="flex gap-1.5 text-xs font-black">
                      {["Practice Test", "PYQs", "Current Affairs"].map((sec) => (
                        <button key={sec} type="button" onClick={() => setSelSection(sec)} className={"px-3 py-1.5 rounded-xl border " + (selSection === sec ? "bg-blue-600 text-white border-blue-400" : "bg-slate-950 text-slate-300 border-slate-700")}>{sec}</button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-black">FULL MOCK TEST</span>
                        <span className="text-slate-400 font-bold">150 Qs • 120 Min</span>
                      </div>
                      <div className="font-black text-sm text-white">{selSubExam} — Full Length Mock #1</div>
                      <button type="button" onClick={() => { setSelSection("Practice Test"); setDrillStep(3); openPage("HOME"); }} className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-xs">▶ टेस्ट शुरू करें (Start Test)</button>
                    </div>

                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px] font-black">PREVIOUS YEAR PAPER</span>
                        <span className="text-slate-400 font-bold">PYQ CBT Mode</span>
                      </div>
                      <div className="font-black text-sm text-white">{selSubExam} — Solved PYQ Paper</div>
                      <button type="button" onClick={() => { setSelSection("PYQs"); setDrillStep(3); openPage("HOME"); }} className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs">▶ PYQ पेपर हल करें (Attempt PYQ)</button>
                    </div>

                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-[10px] font-black">CURRENT AFFAIRS QUIZ</span>
                        <span className="text-slate-400 font-bold">Daily / Weekly / Monthly</span>
                      </div>
                      <div className="font-black text-sm text-white">Latest Current Affairs MCQ Test</div>
                      <button type="button" onClick={() => { setSelSection("Current Affairs"); setDrillStep(3); openPage("HOME"); }} className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs">▶ CA क्विज़ शुरू करें (Start CA Quiz)</button>
                    </div>

                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded text-[10px] font-black">SUBJECT & TOPIC TEST</span>
                        <span className="text-slate-400 font-bold">Quick Revision</span>
                      </div>
                      <div className="font-black text-sm text-white">विषय-वार मिनी टेस्ट (Subject Quiz)</div>
                      <button type="button" onClick={() => { setSelSection("Practice Test"); setDrillStep(3); openPage("HOME"); }} className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-black text-xs">▶ सभी विषय खोलें (Open Subjects)</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {bottomTab === "FREE" && (
              <div className="min-h-[84vh] pb-20 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-2.5 bg-emerald-950/95 backdrop-blur border border-emerald-500/40 rounded-2xl text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-emerald-400/40 flex items-center justify-center text-white shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="font-black text-sm text-emerald-300">100% FREE ZONE (निःशुल्क अभ्यास)</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-400 text-slate-950 rounded-full text-[10px] font-black">FREE</span>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-base font-black">सभी छात्रों के लिए मुफ़्त Live Tests, PYQs और Daily CA क्विज़</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <button type="button" onClick={() => openPage("TESTS")} className="p-3.5 bg-slate-950 hover:bg-slate-800 rounded-xl text-left space-y-1 border border-slate-800">
                      <div className="font-black text-emerald-400">Free Mock Tests</div>
                      <div className="text-[11px] text-slate-300">72वीं BPSC व TRE 4.0 के निःशुल्क प्रैक्टिस सेट</div>
                    </button>
                    <button type="button" onClick={() => openPage("TESTS")} className="p-3.5 bg-slate-950 hover:bg-slate-800 rounded-xl text-left space-y-1 border border-slate-800">
                      <div className="font-black text-amber-400">Free Previous Year Papers</div>
                      <div className="text-[11px] text-slate-300">पिछले वर्षों के हल प्रश्नपत्र और व्याख्या</div>
                    </button>
                    <button type="button" onClick={() => openPage("CA")} className="p-3.5 bg-slate-950 hover:bg-slate-800 rounded-xl text-left space-y-1 border border-slate-800">
                      <div className="font-black text-sky-400">Free Daily CA Cards</div>
                      <div className="text-[11px] text-slate-300">रोज़ाना Flip न्यूज़ कार्ड्स व डेली क्विज़</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {bottomTab === "PASS" && (
              <div className="min-h-[84vh] pb-20 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-2.5 bg-indigo-950/95 backdrop-blur border border-amber-400/40 rounded-2xl text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-amber-400/40 flex items-center justify-center text-white shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="font-black text-sm text-amber-300">CRACKBPSC PASS</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded text-[11px] font-black">✓ ACTIVE</span>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl border border-amber-400/30 shadow-xl space-y-3">
                  <div className="text-lg font-black text-amber-300">एक पास — भारत की सभी परीक्षाओं के अनलिमिटेड मॉक टेस्ट!</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-3 bg-white/10 rounded-xl">✅ <b>All-India & State Exams</b> के सभी फुल मॉक टेस्ट अनलॉक</div>
                    <div className="p-3 bg-white/10 rounded-xl">✅ <b>Previous Year Papers (PYQs)</b> और विस्तृत 4-विकल्प व्याख्या</div>
                    <div className="p-3 bg-white/10 rounded-xl">✅ <b>Daily / Weekly / Monthly CA</b> Flip Cards व लाइव रैंक</div>
                  </div>
                  <button type="button" onClick={() => openPage("TESTS")} className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-sm">अभी टेस्ट शुरू करें (Start Mock Test) ➔</button>
                </div>
              </div>
            )}

            {bottomTab === "CA" && (
              <div className="fixed inset-x-0 top-12 bottom-14 z-30 bg-slate-950 text-white flex flex-col overflow-hidden overscroll-contain">
                <div className="shrink-0 p-2.5 bg-slate-900 border-b border-slate-800 space-y-2 shadow-lg">
                  <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600/80 flex items-center justify-center text-white shadow-xs shrink-0 transition active:scale-95">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                      </button>
                      <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded text-[11px] font-black tracking-wider uppercase">CRACKBPSC</span>
                      <span className="font-black text-sm text-white">Current Affairs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button type="button" onClick={() => { setSelSection("Current Affairs"); openPage("TESTS"); }} className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-black">▶ CA Quiz</button>
                      <button type="button" onClick={() => setCaCardLang(caCardLang === "HI" ? "EN" : "HI")} className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-xs font-black text-amber-300">अ/A {caCardLang === "HI" ? "हि ➔ EN" : "EN ➔ हि"}</button>
                    </div>
                  </div>

                  <div className="max-w-3xl mx-auto grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {[{ id: "DAILY", label: "Daily" }, { id: "WEEKLY", label: "Weekly" }, { id: "MONTHLY", label: "Monthly" }].map((tab) => (
                      <button key={tab.id} type="button" onClick={() => setCaPeriod(tab.id)} className={"py-1 rounded-lg text-xs font-black transition " + (caPeriod === tab.id ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white")}>{tab.label}</button>
                    ))}
                  </div>

                  {caPeriod === "DAILY" && (
                    <div className="max-w-3xl mx-auto flex items-center justify-between bg-slate-950 px-3 py-1 rounded-xl border border-slate-800 text-xs font-black">
                      <button type="button" onClick={() => setCaDate(caDate === "2026-11-25" ? "2026-11-24" : "2026-11-20")} className="px-2 py-0.5 bg-slate-800 rounded hover:bg-slate-700">‹ पिछला दिन</button>
                      <span className="text-amber-400">{caDate}</span>
                      <button type="button" onClick={() => setCaDate("2026-11-25")} className="px-2 py-0.5 bg-slate-800 rounded hover:bg-slate-700">आज ›</button>
                    </div>
                  )}
                  {caPeriod === "WEEKLY" && (
                    <div className="max-w-3xl mx-auto flex gap-1.5 overflow-x-auto pb-0.5 text-[11px] font-black">
                      {["Week 4 (22–28 Nov)", "Week 3 (15–21 Nov)", "Week 2 (8–14 Nov)", "Week 1 (1–7 Nov)"].map((wk) => (
                        <button key={wk} type="button" onClick={() => setCaWeek(wk)} className={"px-2.5 py-1 rounded-lg whitespace-nowrap border " + (caWeek === wk ? "bg-amber-400 text-slate-950 border-amber-500" : "bg-slate-900 text-slate-300 border-slate-700")}>{wk}</button>
                      ))}
                    </div>
                  )}
                  {caPeriod === "MONTHLY" && (
                    <div className="max-w-3xl mx-auto flex gap-1.5 overflow-x-auto pb-0.5 text-[11px] font-black">
                      {["November 2026", "October 2026", "September 2026"].map((mo) => (
                        <button key={mo} type="button" onClick={() => setCaMonth(mo)} className={"px-2.5 py-1 rounded-lg whitespace-nowrap border " + (caMonth === mo ? "bg-amber-400 text-slate-950 border-amber-500" : "bg-slate-900 text-slate-300 border-slate-700")}>{mo}</button>
                      ))}
                    </div>
                  )}

                  <div className="max-w-3xl mx-auto flex gap-1.5 overflow-x-auto pb-0.5 text-[11px] font-black">
                    {["All", "Bihar Special", "Politics", "Economy", "Sci & Tech", "Environment", "Defence", "International", "History & Culture"].map((sub) => (
                      <button key={sub} type="button" onClick={() => setCaSubject(sub)} className={"px-2.5 py-1 rounded-full whitespace-nowrap border " + (caSubject === sub ? "bg-blue-600 text-white border-blue-400" : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500")}>{sub}</button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto snap-y snap-mandatory overscroll-contain p-3 space-y-4">
                  <div className="max-w-3xl mx-auto space-y-4">
                    {flipNewsItems
                      .filter((n) => (caSubject === "All" || n.subject === caSubject) && (caPeriod === "MONTHLY" ? n.month === caMonth : caPeriod === "WEEKLY" ? n.week === caWeek : true))
                      .map((card) => {
                        const isFlipped = flippedCardId === card.id;
                        const shareText = encodeURIComponent((caCardLang === "HI" ? card.title_hi : card.title_en) + " — CrackBPSC Current Affairs");
                        return (
                          <div key={card.id} className="snap-start min-h-[62vh] flex flex-col justify-between bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl">
                            <div style={{ perspective: "1200px" }} onClick={() => setFlippedCardId(isFlipped ? "" : card.id)} className="flex-1 cursor-pointer flex flex-col">
                              <div style={{ transformStyle: "preserve-3d", transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }} className="relative grid flex-1">
                                <div style={{ backfaceVisibility: "hidden", gridArea: "1 / 1" }} className="p-4 space-y-3 bg-slate-900 flex flex-col justify-between">
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between text-[10px] font-black">
                                      <span className="px-2.5 py-0.5 bg-blue-600/30 text-blue-300 border border-blue-500/40 rounded-full uppercase">{card.subject}</span>
                                      <span className="text-slate-400">{card.date} • Tap to Flip</span>
                                    </div>
                                    <h3 className="font-black text-base sm:text-lg text-white leading-snug">{caCardLang === "HI" ? card.title_hi : card.title_en}</h3>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">{caCardLang === "HI" ? card.summary_hi : card.summary_en}</p>
                                    {(caCardLang === "HI" ? card.tip_hi : card.tip_en) && (
                                      <div className="p-3 bg-amber-500/10 border border-amber-400/40 rounded-xl space-y-1">
                                        <div className="text-[11px] font-black text-amber-400">EXAM TIP{card.examStage ? " (" + card.examStage + ")" : ""}</div>
                                        <div className="text-xs text-amber-100 leading-relaxed">{caCardLang === "HI" ? card.tip_hi : card.tip_en}</div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                    {card.tags.map((tg: string, i: number) => (
                                      <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded text-[10px] font-bold">{tg}</span>
                                    ))}
                                  </div>
                                </div>

                                
                                <div style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", gridArea: "1 / 1" }} className="p-4 space-y-3 bg-slate-900 flex flex-col justify-between">
                                  <div className="space-y-3">
                                    <div className="text-center font-black text-sm text-amber-400 tracking-wide">KEY DETAILS (मुख्य परीक्षा बिंदु)</div>
                                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc pl-5">
                                      {(caCardLang === "HI" ? card.details_hi : card.details_en).map((pt: string, i: number) => (
                                        <li key={i} className="leading-relaxed">{pt}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="text-center pt-2 text-[11px] font-black text-blue-400">TAP TO FLIP BACK (वापस पलटें)</div>
                                </div>
                              </div>
                            </div>

                            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-2">
                              <button type="button" onClick={() => { setSelSection("Current Affairs"); openPage("TESTS"); }} className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-xs text-center">इस खबर पर आधारित MCQs हल करें (Start Quiz)</button>
                              <a href={"https://wa.me" + shareText} target="_blank" rel="noreferrer" className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs">Share</a>
                            </div>
                          </div>
                        );
                      })}
                    <div className="text-center text-[11px] text-slate-500 font-bold py-2">↑ अगली खबर के लिए ऊपर स्क्रॉल करें ↑</div>
                  </div>
                </div>
              </div>
            )}

            {bottomTab === "MISTAKES" && (
              <div className="min-h-[85vh] pb-24 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-3 bg-white/95 backdrop-blur border border-slate-200 rounded-2xl text-slate-900 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="font-extrabold text-sm text-slate-900">❌ My Mistakes ({mistakesList.length})</span>
                  </div>
                  <button type="button" onClick={() => { setSelSection("Practice Test"); setDrillStep(3); openPage("HOME"); }} className="px-3 py-1.5 bg-[#0084FF] hover:bg-blue-600 text-white rounded-xl text-xs font-bold">▶ Practice All</button>
                </div>

                <div className="p-3.5 bg-white text-slate-900 rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
                  {mistakesList.length === 0 ? (
                    <div className="text-center py-8 text-sm text-emerald-600 font-extrabold">🎉 शाबाश! आपकी सभी पुरानी गलतियाँ साफ़ हो चुकी हैं।</div>
                  ) : (
                    mistakesList.map((m) => (
                      <div key={m.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                        <div className="space-y-1">
                          <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-200 rounded text-[10px] font-extrabold">{m.sub}</span>
                          <div className="font-bold text-sm text-slate-900 leading-snug">{m.q}</div>
                          <div className="text-xs text-emerald-700 font-bold">सही उत्तर: {m.ans}</div>
                        </div>
                        <button type="button" onClick={() => setMistakesList(mistakesList.filter((x) => x.id !== m.id))} className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 rounded-xl text-xs font-bold shrink-0 transition">✓ याद हो गया (Clear)</button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {bottomTab === "FLASHCARDS" && (
              <div className="min-h-[85vh] pb-24 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-3 bg-white/95 backdrop-blur border border-slate-200 rounded-2xl text-slate-900 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="font-extrabold text-sm text-slate-900">🔄 Smart Flashcards</span>
                  </div>
                  <span className="text-xs text-[#0084FF] font-extrabold">{flashcardsList.length} Cards</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flashcardsList.map((fc) => {
                    const isOpen = flippedFlashId === fc.id;
                    return (
                      <div key={fc.id} className="p-4 bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between gap-3">
                        <div onClick={() => setFlippedFlashId(isOpen ? "" : fc.id)} className="cursor-pointer space-y-2 min-h-[110px] flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] font-bold">
                            <span className="px-2 py-0.5 bg-sky-50 text-[#0084FF] border border-sky-200 rounded">{fc.sub}</span>
                            <span className="text-amber-600">{fc.due}</span>
                          </div>
                          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">{isOpen ? fc.back : fc.front}</div>
                          <div className="text-[11px] text-[#0084FF] font-bold">{isOpen ? "↩ प्रश्न देखने के लिए टैप करें" : "👆 सही उत्तर देखने के लिए कार्ड पर टैप करें"}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-100 text-xs font-bold">
                          <button type="button" onClick={() => setFlashcardsList(flashcardsList.map((x) => x.id === fc.id ? { ...x, due: "Tomorrow" } : x))} className="py-1.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl hover:bg-rose-600 hover:text-white transition">Hard (कल)</button>
                          <button type="button" onClick={() => setFlashcardsList(flashcardsList.map((x) => x.id === fc.id ? { ...x, due: "In 4 Days" } : x))} className="py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-xl hover:bg-amber-500 hover:text-white transition">Good (4 दिन)</button>
                          <button type="button" onClick={() => setFlashcardsList(flashcardsList.map((x) => x.id === fc.id ? { ...x, due: "In 12 Days" } : x))} className="py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl hover:bg-emerald-600 hover:text-white transition">Easy (12 दिन)</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {bottomTab === "ATTEMPTED" && (
              <div className="min-h-[85vh] pb-24 overscroll-contain space-y-3">
                <div className="sticky top-0 z-20 p-3 bg-white/95 backdrop-blur border border-slate-200 rounded-2xl text-slate-900 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={goBackPage} aria-label="Back" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 transition active:scale-95">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <span className="font-extrabold text-sm text-slate-900">✅ Attempted Tests & Quizzes</span>
                  </div>
                  <span className="text-xs text-slate-500 font-bold">कुल: {attemptedList.length}</span>
                </div>

                <div className="p-3.5 bg-white text-slate-900 rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
                  {attemptedList.map((at) => (
                    <div key={at.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">{at.sub}</span>
                          <span className="text-slate-500">📅 {at.date}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900 truncate">{at.title}</div>
                        <div className="text-xs text-amber-700 font-bold">स्कोर: {at.score} • एक्यूरेसी: {at.accuracy}</div>
                      </div>
                      <button type="button" onClick={() => { setSelSection(at.sub === "PYQs" ? "PYQs" : "Practice Test"); setDrillStep(3); openPage("HOME"); }} className="px-3.5 py-2 bg-[#0084FF] hover:bg-blue-600 text-white rounded-xl font-bold text-xs shrink-0 transition active:scale-95">Re-Attempt ➔</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
             
            {bottomTab === "WEAK" && (() => {
              const examPills = Array.isArray(myExams) && myExams.length > 0 ? myExams : ["72वीं BPSC CCE", "BPSC TRE 4.0", "BSSC CGL-4", "Bihar Police SI"];
              const currentExam = examPills.includes(weakExam) ? weakExam : examPills[0];
              return (
                <div className="min-h-[86vh] pb-24 overscroll-contain bg-[#F3F5F8] text-[#111827] -mx-2 sm:mx-0 sm:rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <div className="bg-[#181C24] text-white px-4 pt-4 pb-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <button type="button" onClick={goBackPage} className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-sky-300 font-bold text-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        <span>Back</span>
                      </button>
                      <span className="px-2 py-0.5 bg-[#0084FF] text-white rounded text-[10px] font-black tracking-wider uppercase">CRACKBPSC AI</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1.5">
                        <h2 className="text-[22px] sm:text-2xl font-extrabold leading-snug text-white tracking-tight">Weak Areas<br />Improvement</h2>
                        <p className="text-xs text-slate-300 font-normal">With AI generated Performance analysis.</p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center text-3xl shrink-0">📊</div>
                    </div>
                  </div>

                  <div className="px-3.5 py-3 bg-white border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto">
                    {examPills.map((exName: string) => (
                      <button key={exName} type="button" onClick={() => setWeakExam(exName)} className={"px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition " + (currentExam === exName ? "bg-[#0084FF] text-white border-[#0084FF] shadow-xs" : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50")}>
                        {exName}
                      </button>
                    ))}
                    <button type="button" onClick={() => setShowMyExamsModal(true)} className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-pink-300 bg-pink-50/60 text-[#0084FF] hover:bg-pink-100/70">
                      + Add Exam
                    </button>
                  </div>

                  <div className="p-4 text-center text-xs text-slate-500 font-bold">
                    Selected Exam: <span className="text-[#0084FF]">{currentExam}</span> (Subjects Analysis अगले पार्ट में जुड़ेगा)
                  </div>
                </div>
              );
            })()}           
            {bottomTab === "HOME" && (<>
   <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button onClick={() => setExamLang(examLang === "HI" ? "EN" : "HI")} title="भाषा बदलें (क ⇄ A)" className="inline-flex items-center gap-1 bg-slate-900 text-white border border-amber-400 px-2 py-1 rounded-full text-[10px] font-black shadow-sm active:scale-95">
                <span className="text-amber-300">क</span><span className="text-slate-400">⇄</span><span>A</span>
              </button>
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
          
              <div className="space-y-3 my-2.5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-slate-900/95 p-2 rounded-2xl border border-slate-800 shadow-sm">
                  <div className="flex-1 flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800/90 focus-within:border-sky-500/60 transition">
                    <span className="text-slate-400 text-xs">🔍</span>
                    <input value={homeSearch} onChange={(e) => setHomeSearch(e.target.value)} placeholder="72वीं BPSC, TRE 4.0, PYQ या टॉपिक खोजें..." className="w-full bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none" />
                    {homeSearch && <button type="button" onClick={() => setHomeSearch("")} className="text-slate-400 hover:text-white text-xs font-black">✕</button>}
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-1.5 text-[11px] font-black">
                    <span className="px-2.5 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-400/25 rounded-xl">🔥 {streakDays} Day Streak</span>
                    <span className="px-2.5 py-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-400/25 rounded-xl">🎯 लक्ष्य: 20 Qs</span>
                  </div>
                </div>

                <div className="px-3.5 py-2 bg-gradient-to-r from-slate-900 via-indigo-950/90 to-slate-900 text-white rounded-2xl border border-indigo-500/30 flex items-center justify-between gap-2 shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-black tracking-wide shrink-0 animate-pulse">{liveTicker.badge}</span>
                    <div className="truncate">
                      <span className="font-black text-xs sm:text-sm text-white">{liveTicker.title}</span>
                      <span className="text-[11px] text-slate-400 ml-2 hidden sm:inline">({liveTicker.meta})</span>
                    </div>
                  </div>
                  <button type="button" onClick={() => { setSelSection("Practice Test"); setDrillStep(3); }} className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs shrink-0 transition active:scale-95">Join Free ➔</button>
                </div>

                {pausedTest && (
                  <div className="p-3 bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 text-white rounded-2xl border border-amber-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-sm">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[10px] font-black">
                        <span className="px-2 py-0.5 bg-amber-400 text-slate-950 rounded uppercase tracking-wider">⏸ RESUME TEST</span>
                        <span className="text-amber-300">प्रश्न {pausedTest.currentQ} / {pausedTest.totalQ} पर रुका हुआ • शेष: {pausedTest.timeLeft}</span>
                      </div>
                      <div className="font-black text-xs sm:text-sm text-white truncate">{pausedTest.title}</div>
                      <div className="w-full max-w-xs h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div style={{ width: Math.round((pausedTest.currentQ / pausedTest.totalQ) * 100) + "%" }} className="h-full bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button type="button" onClick={() => { setSelSection(pausedTest.section || "Practice Test"); setDrillStep(3); }} className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs transition active:scale-95">▶ Resume (Q.{pausedTest.currentQ})</button>
                      <button type="button" onClick={() => setPausedTest(null)} title="हटाएं" className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white font-black text-xs flex items-center justify-center">✕</button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                  {[
                    { icon: "📝", label: "Mock Tests", action: () => openPage("TESTS") },
                    { icon: "📜", label: "PYQs", action: () => { setSelSection("PYQs"); openPage("TESTS"); } },
                    { icon: "📰", label: "Flip CA", action: () => openPage("CA") },
                    { icon: "🎯", label: "Custom Quiz", action: () => { setSelSection("Practice Test"); setDrillStep(3); } },
                    { icon: "❌", label: "Mistakes (" + mistakesList.length + ")", action: () => setRevTab("MISTAKES") },
                    { icon: "🎁", label: "Free Zone", action: () => openPage("FREE") }
                  ].map((item, idx) => (
                    <button key={idx} type="button" onClick={item.action} className="p-2.5 bg-slate-900 hover:bg-slate-800/90 text-white rounded-xl border border-slate-800/90 flex flex-col items-center justify-center gap-1 transition active:scale-95">
                      <span className="text-base leading-none">{item.icon}</span>
                      <span className="text-[11px] font-bold tracking-tight text-slate-200">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-900 text-white rounded-2xl border border-sky-500/35 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 bg-sky-400 text-slate-950 rounded-lg text-[10px] font-black tracking-wider uppercase shrink-0">CUSTOM QUIZ</span>
                    <div>
                      <div className="font-black text-xs sm:text-sm text-white">अपनी पसंद का मिनी टेस्ट बनाएं</div>
                      <div className="text-[10px] text-slate-400">विषय और प्रश्नों की संख्या चुनें</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <select value={customSub} onChange={(e) => setCustomSub(e.target.value)} className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-xs focus:outline-none">
                      {["Bihar Special", "History", "Polity", "Geography", "Economy", "General Science", "Current Affairs"].map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select value={customCount} onChange={(e) => setCustomCount(Number(e.target.value))} className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-amber-300 font-black text-xs focus:outline-none">
                      {[10, 20, 30, 50].map((c) => <option key={c} value={c}>{c} Qs</option>)}
                    </select>
                    <button type="button" onClick={() => { setSelSection("Practice Test"); setDrillStep(3); }} className="px-3.5 py-1.5 bg-sky-400 hover:bg-sky-300 text-slate-950 rounded-xl font-black text-xs transition active:scale-95">Start Quiz ➔</button>
                  </div>
                </div>
 
                <div className="p-3.5 bg-white text-[#111827] rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#0084FF] rounded-full" />
                      <span className="font-extrabold text-sm text-[#111827] tracking-tight">Smart Revision Hub</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">Personal Tools</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button type="button" onClick={() => openPage("MISTAKES")} className="p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-rose-300 text-center transition active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs">
                      <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200/70 flex items-center justify-center text-rose-500">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                      </div>
                      <div>
                        <div className="font-extrabold text-xs text-slate-900">My Mistakes</div>
                        <div className="text-[10px] font-semibold text-slate-500">{mistakesList.length} Qs सुधारें</div>
                      </div>
                    </button>

                    <button type="button" onClick={() => openPage("FLASHCARDS")} className="p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-sky-300 text-center transition active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs">
                      <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200/70 flex items-center justify-center text-[#0084FF]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="14" height="14" rx="2" /><path d="M7 3h12a2 2 0 0 1 2 2v12" /></svg>
                      </div>
                      <div>
                        <div className="font-extrabold text-xs text-slate-900">Flashcards</div>
                        <div className="text-[10px] font-semibold text-slate-500">{flashcardsList.length} Due Cards</div>
                      </div>
                    </button>

                    <button type="button" onClick={() => openPage("ATTEMPTED")} className="p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-emerald-300 text-center transition active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 14l2 2 4-4" /></svg>
                      </div>
                      <div>
                        <div className="font-extrabold text-xs text-slate-900">Attempted</div>
                        <div className="text-[10px] font-semibold text-slate-500">हल किए गए टेस्ट</div>
                      </div>
                    </button>

                    <button type="button" onClick={() => openPage("WEAK")} className="p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-purple-300 text-center transition active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs">
                      <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-600">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18" /><path d="M6 16v-4M10 16V9M14 16v-6M18 16V6" /><path d="M5 10l5-4 4 2 5-5" /></svg>
                      </div>
                      <div>
                        <div className="font-extrabold text-xs text-slate-900">Weak Areas</div>
                        <div className="text-[10px] font-semibold text-slate-500">AI विश्लेषण</div>
                      </div>
                    </button>
                  </div>
                </div>

                
                <div className="p-3 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs text-amber-400">📢 बिहार भर्ती व परीक्षा अलर्ट (Job & Exam Alerts)</span>
                    <button type="button" onClick={() => openPage("CA")} className="text-[11px] font-black text-sky-400 hover:underline">सभी देखें ➔</button>
                  </div>
                  <div className="space-y-1.5">
                    {jobAlerts.map((al) => (
                      <div key={al.id} className="px-2.5 py-1.5 bg-slate-950 rounded-xl border border-slate-800/90 flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="px-1.5 py-0.5 bg-amber-400 text-slate-950 rounded text-[9px] font-black shrink-0">{al.tag}</span>
                          <span className="truncate text-slate-200 font-semibold">{al.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">{al.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>                     
            {savedBms.length > 0 && (
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-3 space-y-2 text-xs text-slate-950">
          <div className="flex justify-between items-center">
            <span className="font-black text-amber-900">⭐ मेरे Saved Bookmarks ({savedBms.length} प्रश्न)</span>
            <button onClick={() => setShowBms(!showBms)} className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded font-black text-[11px]">{showBms ? "छिपाएं ▲" : "रिवीजन करें ▼"}</button>
          </div>
          {showBms && (
            <div className="space-y-2 pt-1">
            {savedBms.map((b: any, idx: number) => (
              <div
                key={idx}
                onClick={() => {
                  const foundIdx = questions.findIndex((item: any) => item.q === b.q);
                  setQIdx(foundIdx >= 0 ? foundIdx : (b.qIdx ? b.qIdx : 0));
                  setQSec(0);
                  setSubmitted(false);
                  setInExam(true);
                }}
                className="p-2.5 bg-white cursor-pointer rounded-lg border-2 border-amber-300 space-y-1.5"
              >
                <div className="flex justify-between items-start gap-2 font-extrabold text-slate-900">
                  <span>❓ {idx + 1}. {b.q ? b.q : "सहेजा गया प्रश्न"}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSavedBms(savedBms.filter((_: any, i: number) => i !== idx));
                    }}
                    className="text-rose-600 font-black px-1.5"
                  >
                    🗑️
                  </button>
                </div>
                <div className="text-[11px] font-black text-emerald-700">✅ सही उत्तर: {b.ans}</div>
                <div className="text-[11px] text-slate-700 bg-slate-100 p-2 rounded border border-slate-200">
                  📝 <b>Explanation:</b> {b.exp ? b.exp : "विस्तृत व्याख्या उपलब्ध है।"}
                </div>
                <div className="text-[10px] font-black text-indigo-700">👉 प्रश्न खोलें →</div>
              </div>
            ))}
            </div>
          )}
        </div>
      )}
          {showPass && (
            <div className="p-4 bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-700 text-white rounded-xl shadow-md border border-cyan-400/30 space-y-3">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-amber-400 text-slate-950 font-black text-[10px] rounded">{passBadge}</span>
                    <span className="font-extrabold text-sm tracking-wide text-white">CrackBPSC <span className="bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded text-[11px] font-black">PASS</span></span>
                  </div>
                  <div className="font-extrabold text-sm sm:text-base text-white">{passTitle}</div>
                </div>
                <button onClick={() => alert(passMsg)} className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-lg shadow shrink-0">
                  {passBtn}
                </button>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-2 border-t border-white/15 text-[11px] font-semibold text-cyan-100">
                {passFeats.map((feat, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span className="text-emerald-400 font-black">✓</span> {feat}
                  </span>
                ))}
              </div>
            </div>
          )}
         
          {(() => {
            const tierList = ["Class 1 to 5 (PRT)", "Class 6 to 8 (Middle)", "Class 9th & 10th (TGT)", "Class 11th & 12th (PGT)"];
            const defaultTierSubs: Record<string, string[]> = {
              "Class 1 to 5 (PRT)": ["General (सामान्य)", "Urdu (उर्दू)", "Bangla (बंगला)"],
              "Class 6 to 8 (Middle)": ["Social Science (SST)", "Science & Math", "Hindi", "English", "Urdu", "Sanskrit"],
              "Class 9th & 10th (TGT)": ["Social Science (SST)", "Science", "Mathematics", "Hindi", "English", "Urdu", "Sanskrit", "Computer", "Music", "Fine Arts"],
              "Class 11th & 12th (PGT)": ["History", "Political Science", "Geography", "Economics", "Sociology", "Psychology", "Philosophy", "Home Science", "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Accountancy", "Business Studies", "Hindi", "English", "Urdu", "Sanskrit"]
            };
            const isMultiTier = selSubExam.toLowerCase().includes("tre") || selSubExam.toLowerCase().includes("teacher") || (customTierSubs[selSubExam] && customTierSubs[selSubExam].length > 0);
            const activeSubs = [...(defaultTierSubs[selTier] || ["General"]), ...(customTierSubs[selSubExam + "_" + selTier] || [])];
            const allSevenSecs = Array.from(new Set([...examSections, "Chapter-Wise Test"]));
            const baseKey = isMultiTier ? `${selSubExam}_${selTier}_${selTierSub}_${selSection}${selSection === "Current Affairs" ? "_" + selCaMode : ""}` : `${selSubExam}_${selSection}${selSection === "Current Affairs" ? "_" + selCaMode : ""}`;
            const totalSeries = Math.max(1, seriesCounts[baseKey] || seriesCounts[`${selSubExam}_${selSection}`] || 5);
            return (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border shadow-sm text-xs font-bold">
                  <div className="flex flex-wrap items-center gap-1 text-slate-700">
                    <button onClick={() => setDrillStep(1)} className="text-indigo-700 hover:underline">🏠 All Exams</button>
                    {drillStep >= 2 && <><span>›</span><button onClick={() => setDrillStep(2)} className="text-indigo-700 hover:underline">{selCat}</button></>}
                    {drillStep >= 3 && <><span>›</span><button onClick={() => setDrillStep(3)} className="text-indigo-700 hover:underline">{selSubExam}</button></>}
                    {drillStep >= 4 && isMultiTier && <><span>›</span><button onClick={() => setDrillStep(4)} className="text-indigo-700 hover:underline">{selTier}</button></>}
                    {drillStep >= 5 && isMultiTier && <><span>›</span><button onClick={() => setDrillStep(5)} className="text-indigo-700 hover:underline">{selTierSub}</button></>}
                    {drillStep >= 6 && <><span>›</span><span className="text-amber-700 font-black">{selSection}{selSection === "Current Affairs" ? ` (${selCaMode})` : ""}</span></>}
                  </div>
                  {drillStep > 1 && (
                    <button onClick={() => setDrillStep(drillStep === 5 && !isMultiTier ? 2 : drillStep - 1)} className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[11px] font-black">⬅ पीछे</button>
                  )}
                </div>

                {drillStep === 1 && (
                  <div className="p-4 bg-white rounded-2xl border shadow-sm space-y-2.5">
                    <div className="font-extrabold text-sm text-slate-900">1. Select Exam Category (परीक्षा बोर्ड चुनें)</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.keys(examTree)
                        .filter((c) => !hiddenCats.includes(c))
                        .sort((a, b) => (catOrder.indexOf(a) === -1 ? 999 : catOrder.indexOf(a)) - (catOrder.indexOf(b) === -1 ? 999 : catOrder.indexOf(b)))
                        .map((cat) => (
                          <button key={cat} onClick={() => { setSelCat(cat); const first = examTree[cat] ? examTree[cat][0] : ""; if (first) { setSelSubExam(first); setGoal(first); } setDrillStep(2); }} className="p-3 rounded-xl border border-slate-200 hover:border-indigo-500 bg-slate-50/70 hover:bg-indigo-50 flex items-center justify-between text-left transition shadow-xs">
                            <div>
                              <div className="font-black text-xs sm:text-sm text-slate-900">🏛️ {cat}</div>
                              <div className="text-[10px] font-bold text-slate-500">{(examTree[cat] || []).length} Exams</div>
                            </div>
                            <span className="text-slate-400 font-black">›</span>
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {drillStep === 2 && (
                  <div className="p-4 bg-white rounded-2xl border shadow-sm space-y-2.5">
                    <div className="font-extrabold text-sm text-slate-900">2. Select {selCat} Exam (उप-परीक्षा चुनें)</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {(examTree[selCat] || []).map((subEx: string) => (
                        <button key={subEx} onClick={() => { setSelSubExam(subEx); setGoal(subEx); const multi = subEx.toLowerCase().includes("tre") || subEx.toLowerCase().includes("teacher") || (customTierSubs[subEx] && customTierSubs[subEx].length > 0); setDrillStep(multi ? 3 : 5); }} className="p-3 rounded-xl border border-slate-200 hover:border-purple-500 bg-slate-50/70 hover:bg-purple-50 flex items-center justify-between text-left transition shadow-xs">
                          <div>
                            <div className="font-black text-xs sm:text-sm text-slate-900">🎯 {subEx}</div>
                            <div className="text-[10px] font-bold text-purple-600">7 Test Sections ›</div>
                          </div>
                          <span className="text-slate-400 font-black">›</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {drillStep === 3 && isMultiTier && (
                  <div className="p-4 bg-white rounded-2xl border shadow-sm space-y-2.5">
                    <div className="font-extrabold text-sm text-slate-900">3. Select Class / Level ({selSubExam} वर्ग चुनें)</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {tierList.map((tr) => (
                        <button key={tr} onClick={() => { setSelTier(tr); setDrillStep(4); }} className="p-3 rounded-xl border border-slate-200 hover:border-indigo-500 bg-indigo-50/40 hover:bg-indigo-100/70 flex items-center justify-between text-left">
                          <div>
                            <div className="font-black text-xs sm:text-sm text-indigo-950">🎓 {tr}</div>
                            <div className="text-[10px] font-bold text-slate-500">सभी विषय उपलब्ध</div>
                          </div>
                          <span className="text-indigo-500 font-black">›</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {drillStep === 4 && isMultiTier && (
                  <div className="p-4 bg-white rounded-2xl border shadow-sm space-y-2.5">
                    <div className="font-extrabold text-sm text-slate-900">4. Select Subject ({selTier} विषय चुनें)</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1">
                      {activeSubs.map((sb) => (
                        <button key={sb} onClick={() => { setSelTierSub(sb); setDrillStep(5); }} className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50 flex items-center justify-between text-left text-xs font-extrabold text-slate-800">
                          <span>📘 {sb}</span>
                          <span className="text-slate-400">›</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {drillStep === 5 && (
                  <div className="p-4 bg-white rounded-2xl border shadow-sm space-y-2.5">
                    <div className="font-extrabold text-sm text-slate-900">5. Select Test Section (टेस्ट प्रकार चुनें)</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {allSevenSecs.map((sec) => (
                        <button key={sec} onClick={() => { setSelSection(sec); setDrillStep(6); }} className="p-3 rounded-xl border border-slate-200 hover:border-amber-500 bg-amber-50/40 hover:bg-amber-100/60 flex items-center justify-between text-left text-xs font-black text-slate-900">
                          <span>📂 {sec}</span>
                          <span className="text-amber-600">›</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {drillStep === 6 && (
                  <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-700 shadow-lg space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs sm:text-sm font-black text-white">🔥 {selSubExam}{isMultiTier ? ` • ${selTierSub}` : ""} — {selSection} <span className="text-amber-300 text-[11px]">(बाएँ ⇄ दाएँ स्वाइप करें)</span></div>
                      
                      {selSection === "Current Affairs" && (
                        <div className="flex gap-1">
                          {["Daily", "Weekly", "Monthly"].map((cm) => (
                            <button key={cm} onClick={() => setSelCaMode(cm)} className={"px-2.5 py-1 rounded-lg text-[11px] font-black " + (selCaMode === cm ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300")}>{cm}</button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2">
                      {Array.from({ length: totalSeries }, (_, i) => i + 1).map((sNum) => {
                    const secSimpleKey = selSubExam + "_" + selSection;
                        const sKey = baseKey + "_S" + sNum;
                        const hist = attemptHistory[sKey] ? attemptHistory[sKey] : [];
                        const maxLim = examAttempts[baseKey] ? examAttempts[baseKey] : (examAttempts[secSimpleKey] ? examAttempts[secSimpleKey] : 0);
                        const used = hist.length;
                        const last = used > 0 ? hist.at(-1) : null;
                        const isOver = maxLim > 0 && used >= maxLim;
                        const matched = questions.filter((q: any) => {
                          if (q.sec !== selSection) return false;
                          if (selSection === "Current Affairs" && q.caMode && q.caMode !== selCaMode) return false;
                          if ((q.seriesNum ? q.seriesNum : 1) !== sNum) return false;
                          if (q.shareScope === "GLOBAL") return true;
                          if (q.shareScope === "CAT" && q.cat === selCat) return true;
                          if (q.shareScope === "MULTI" && Array.isArray(q.targetExams) && q.targetExams.includes(selSubExam)) return true;
                          if (q.cat !== selCat || q.subEx !== selSubExam) return false;
                          if (isMultiTier && q.tier && q.tier !== selTier) return false;
                          if (isMultiTier && q.tierSub && q.tierSub !== selTierSub) return false;
                          return true;
                        });
                        const limVal = examQLimits[sKey] ? examQLimits[sKey] : examQLimits[secSimpleKey];
                        const qCount = limVal ? Math.min(limVal, matched.length ? matched.length : limVal) : (matched.length ? matched.length : 150);
                        const cardPosMark = seriesMarks[sKey] ? seriesMarks[sKey] : posMark;
                        const tMins = examTimers[sKey] ? examTimers[sKey] : (examTimers[secSimpleKey] ? examTimers[secSimpleKey] : Math.max(10, Math.round(qCount * 0.8)));
                      
                        const cardTitle = selSection === "PYQs" ? "PYQ Paper #" + sNum : (selSection === "Current Affairs" ? selCaMode + " CA Set #" + sNum : "Test #" + sNum);  
                        return (
                          <div key={sNum} className="min-w-[85%] sm:min-w-[46%] snap-center bg-white rounded-2xl p-3.5 border border-slate-200 shadow-md flex flex-col justify-between space-y-2.5">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md text-[10px] font-black">{selCat} • {selSection} #{sNum}</span>                               
                                {used > 0 && (() => {
                                  const rawIdx = pillIdxMap[sKey];
                                  const curIdx = typeof rawIdx === "number" && rawIdx >= 0 && rawIdx < used ? rawIdx : used - 1;
                                  const curItem = hist[curIdx] ? hist[curIdx] : last;
                                  return (
                                    <span className="inline-flex items-center gap-1 p-[1.5px] rounded-full bg-gradient-to-r from-indigo-500 via-teal-400 to-amber-400 shrink-0 shadow-xs">
                                      <span className="inline-flex items-center gap-1 bg-slate-900/95 text-white px-1.5 py-0.5 rounded-full text-[10px] font-black">
                                        <button
                                          type="button"
                                          onClick={(e) => { e.stopPropagation(); setPillIdxMap({ ...pillIdxMap, [sKey]: curIdx > 0 ? curIdx - 1 : used - 1 }); }}
                                          className="px-0.5 text-cyan-300 hover:text-amber-300 leading-none"
                                        >
                                          ◀
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            const finalQs = limVal ? matched.slice(0, limVal) : matched;
                                            setActiveList(finalQs); setAns(curItem.ans ? curItem.ans : {}); setSubmitted(true); setSolMode(false); setInExam(true);
                                          }}
                                          className="hover:underline leading-none tracking-tight"
                                        >
                                          #{curIdx + 1}: <span className="text-amber-300">{curItem.score}</span> • {used}/{maxLim > 0 ? maxLim : "∞"}
                                        </button>
                                        <button
                                          type="button"
                                          onClick={(e) => { e.stopPropagation(); setPillIdxMap({ ...pillIdxMap, [sKey]: curIdx < used - 1 ? curIdx + 1 : 0 }); }}
                                          className="px-0.5 text-cyan-300 hover:text-amber-300 leading-none"
                                        >
                                          ▶
                                        </button>
                                      </span>
                                    </span>
                                  );
                                })()}
                              </div>
                              <div className="font-black text-sm text-slate-900 leading-snug">{selSubExam}{isMultiTier ? " (" + selTierSub + ")" : ""} — {cardTitle}</div>
                              <div className="text-[11px] font-bold text-slate-500">📝 {qCount} Qs • 🏆 {(qCount * cardPosMark).toFixed(0)} Marks • ⏱️ {tMins} Min</div>
                            </div>
                            {used === 0 ? (
                              <button
                                onClick={() => {
                                  if (matched.length === 0) { alert("⚠️ इस सेक्शन में अभी कोई प्रश्न नहीं है।"); return; }
                                  setActiveSeriesKey(sKey); const finalQs = limVal ? matched.slice(0, limVal) : matched;
                                  setActiveList(finalQs); setQIdx(0); setQSec(0); setTotalSec(tMins * 60); setAns({}); setMarkedQs([]); setSubmitted(false);
                                  setActivePosMark(cardPosMark); setActiveNegEnabled(negEnabled); setActiveNegVal(negVal); setActiveNegLabel(negLabel); setInExam(true);
                                }}
                                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs shadow-sm"
                              >
                                ▶ Attempt
                              </button>
                            ) : (
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => {
                                    const finalQs = limVal ? matched.slice(0, limVal) : matched;
                                    setActiveList(finalQs); setAns(last.ans ? last.ans : {}); setSubmitted(true); setSolMode(false); setInExam(true);
                                  }}
                                  className="py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl font-black text-xs"
                                >
                                  📊 Analysis
                                </button>
                                {isOver ? (
                                  <button disabled className="py-2 bg-slate-200 text-slate-500 rounded-xl font-black text-xs cursor-not-allowed">🔒 Limit Over ({used}/{maxLim})</button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      if (matched.length === 0) { alert("⚠️ इस सेक्शन में अभी कोई प्रश्न नहीं है।"); return; }
                                      setActiveSeriesKey(sKey); const finalQs = limVal ? matched.slice(0, limVal) : matched;
                                      setActiveList(finalQs); setQIdx(0); setQSec(0); setTotalSec(tMins * 60); setAns({}); setMarkedQs([]); setSubmitted(false);
                                      setActivePosMark(cardPosMark); setActiveNegEnabled(negEnabled); setActiveNegVal(negVal); setActiveNegLabel(negLabel); setInExam(true);
                                    }}
                                    className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs"
                                  >
                                    🔄 Re-Attempt
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })()})
              </>
            )}
          </div>
        )}
  {role === "STUDENT" && !adHideToday && popupOpen && (() => {
        if (typeof window === "undefined") return false;
        const d = new window.Date();
        const todayStr = d.toISOString().slice(0, 10);
        if (adStartDate && todayStr < adStartDate) return false;
        if (adEndDate && todayStr > adEndDate) return false;
        const hr = d.getHours();
        if (adTimeSlot === "8AM" && hr !== 8) return false;
        if (adTimeSlot === "10AM" && hr !== 10) return false;
        if (adTimeSlot === "EVENING" && (hr < 17 || hr > 21)) return false;
        if (adTimeSlot.includes("-")) {
          const parts = adTimeSlot.split("-");
          if (hr < Number(parts.at(0)) || hr > Number(parts.at(1))) return false;
        }
        const seenKey = "cb_ad_seen_" + todayStr + "_v" + adVer;
        const rawCnt = localStorage.getItem(seenKey);
        return Number(rawCnt ? rawCnt : "0") < adMaxDaily;
      })() && (
        <div className={adSize === "FULL" ? "fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white z-50 flex flex-col justify-between p-5" : adType === "FULL_CUT" ? "fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white z-50 flex flex-col justify-between p-5" : adType === "BANNER" ? "fixed bottom-3 left-3 right-3 z-50 flex justify-center" : adSize === "SMALL" ? "fixed bottom-3 left-3 right-3 z-50 flex justify-center" : "fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"}>
          <div style={{ width: adCustomW ? adCustomW : undefined, height: adCustomH ? adCustomH : undefined }} className={adSize === "FULL" ? "w-full h-full flex flex-col justify-between max-w-2xl mx-auto" : adType === "FULL_CUT" ? "w-full h-full flex flex-col justify-between max-w-2xl mx-auto" : adSize === "SMALL" ? "w-full max-w-3xl rounded-2xl shadow-2xl border-2 border-amber-400 bg-slate-900 text-white p-3 flex flex-wrap items-center justify-between gap-2" : adSize === "LARGE" ? "w-full max-w-md min-h-[460px] flex flex-col justify-between rounded-3xl shadow-2xl border-2 border-amber-400 bg-white overflow-hidden" : "w-full max-w-sm rounded-3xl shadow-2xl border-2 border-amber-400 bg-white overflow-hidden"}>
            <div className={adSize === "SMALL" ? "flex items-center gap-2" : "p-4 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white space-y-1.5"}>
              <div className="flex justify-between items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">{adType === "SPIN" ? "🎡 LUCKY SPIN" : adType === "TIMER" ? "⏳ FLASH TIMER" : adType === "BANNER" ? "🪧 SPECIAL BANNER" : "🔥 OFFER"}</span>
                {adSize !== "SMALL" && <button onClick={() => { const k = "cb_ad_seen_" + new Date().toISOString().slice(0, 10) + "_v" + adVer; const prev = localStorage.getItem(k); localStorage.setItem(k, String(Number(prev ? prev : "0") + 1)); setPopupOpen(false); }} className="w-7 h-7 rounded-full bg-white/20 text-white font-black text-xs">✕</button>}
              </div>
              <h3 className={adSize === "SMALL" ? "font-black text-xs text-amber-300" : "font-black text-lg leading-snug text-amber-300"}>{adTitle}</h3>
              {adSize !== "SMALL" && <p className="text-xs text-slate-200">{adDesc}</p>}
            </div>
            {adType === "SPIN" && adSize !== "SMALL" && (
              <div className="p-4 flex flex-col items-center gap-2 bg-amber-50">
                <div style={{ transform: "rotate(" + spinDeg + "deg)", transition: "transform 2.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)" }} className="w-36 h-36 rounded-full border-4 border-indigo-700 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center shadow-xl text-white font-black text-center text-xs p-2">🎡 50% OFF • FREE PASS • ₹199 • BONUS</div>
                {spinWon ? <div className="font-black text-emerald-700 text-xs bg-emerald-100 px-3 py-1 rounded-full">🎉 बधाई हो! मिला: {spinWon}</div> : <button onClick={() => { const prizes = ["50% OFF SuperPass", "FREE 7-Day Pass", "₹199 Special Offer", "100 Bonus Test Coins"]; setSpinDeg(spinDeg + 1440 + Math.floor(Math.random() * 360)); setTimeout(() => setSpinWon(prizes.at(Math.floor(Math.random() * prizes.length)) as string), 2500); }} className="px-4 py-1.5 bg-indigo-700 text-white rounded-full font-black text-xs shadow">🎯 चक्का घुमाएं (SPIN NOW)</button>}
              </div>
            )}
            {adType === "TIMER" && adSize !== "SMALL" && (
              <div className="p-3 bg-rose-950 text-white flex justify-center gap-2 font-mono font-black text-base">
                <span className="px-2.5 py-1 bg-rose-600 rounded">{String(Math.floor(totalSec / 3600)).padStart(2, "0")}h</span>
                <span className="px-2.5 py-1 bg-rose-600 rounded">{String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0")}m</span>
                <span className="px-2.5 py-1 bg-rose-600 rounded">{String(totalSec % 60).padStart(2, "0")}s</span>
              </div>
            )}
            <div className={adSize === "SMALL" ? "flex items-center gap-1.5" : "p-3 bg-slate-50 space-y-2"}>
              <button onClick={() => { const d = new window.Date(); const k = "cb_ad_seen_" + d.toISOString().slice(0, 10) + "_v" + adVer; const prev = localStorage.getItem(k); localStorage.setItem(k, String(Number(prev ? prev : "0") + 1)); setPopupOpen(false); if (adTargetMode === "LINK" && adLink && adLink !== "https://") { window.open(adLink, "_blank"); } else { setSelCat(adTargetCat); setSelSubExam(adTargetSub); setSelSection(adTargetSec); setQIdx(0); setAns({}); setSubmitted(false); setInExam(true); } }} className={adSize === "SMALL" ? "px-3 py-1 bg-amber-400 text-slate-950 rounded-lg font-black text-xs" : "w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl font-black text-xs shadow"}>{adTargetMode === "LINK" ? "🔗 ऑफर / लिंक खोलें →" : "🎯 सीधे " + adTargetSub + " (" + adTargetSec + ") दें →"}</button>
              {adSize === "SMALL" ? (
                <button onClick={() => { const k = "cb_ad_seen_" + new Date().toISOString().slice(0, 10) + "_v" + adVer; const prev = localStorage.getItem(k); localStorage.setItem(k, String(Number(prev ? prev : "0") + 1)); setPopupOpen(false); }} className="px-2 py-1 bg-slate-700 text-white rounded text-xs font-bold">✕</button>
              ) : (
                <div className="flex justify-between text-[11px] text-slate-500">
                  <button onClick={() => { const k = "cb_ad_seen_" + new Date().toISOString().slice(0, 10) + "_v" + adVer; localStorage.setItem(k, String(adMaxDaily)); setPopupOpen(false); }}>आज दोबारा न दिखाएं</button>
                  <button onClick={() => { const k = "cb_ad_seen_" + new Date().toISOString().slice(0, 10) + "_v" + adVer; const prev = localStorage.getItem(k); localStorage.setItem(k, String(Number(prev ? prev : "0") + 1)); setPopupOpen(false); }} className="font-bold text-slate-700">बंद करें ✕</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {(role === "ADMIN" || role === "WRITER") && (
        <div className="max-w-5xl mx-auto my-3 p-4 bg-slate-900 text-white rounded-2xl border border-slate-700 shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <div>
              <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] font-black uppercase">{role} STUDIO</span>
              <h3 className="font-black text-base text-amber-300 mt-0.5">Flip Current Affairs Generator (1-Click AI + Manual)</h3>
            </div>
            <span className="text-[11px] text-slate-400 font-bold">कुल लाइव कार्ड्स: {flipNewsItems.length}</span>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="text-xs font-black text-slate-200">1-Click AI से द्विभाषी (हिन्दी + English) Flip News कार्ड बनाएं:</div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input value={aiNewsTopic} onChange={(e) => setAiNewsTopic(e.target.value)} placeholder="समाचार का विषय या शीर्षक लिखें..." className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white" />
              <button type="button" disabled={aiNewsLoading || !aiNewsTopic.trim()} onClick={async () => {
                setAiNewsLoading(true);
                try {
                  const res = await fetch("/api/gemini", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      prompt: "Create a detailed bilingual (Hindi & English) BPSC/UPSC Current Affairs flip card JSON for topic: " + aiNewsTopic + ". Return ONLY valid JSON with keys: subject (one of: Bihar Special, Politics, Economy, Sci & Tech, Environment, Defence, International, History & Culture), title_hi, title_en, summary_hi (detailed summary), summary_en (detailed summary), tip_hi, tip_en, d1_hi, d2_hi, d3_hi, d1_en, d2_en, d3_en, tags (comma separated)."
                    })
                  });
                  const data = await res.json();
                  const raw = (data.text || data.result || "").replace(/```json|```/g, "").trim();
                  const parsed = JSON.parse(raw);
                  setDraftNews({ ...draftNews, ...parsed });
                } catch {
                  setDraftNews({
                    ...draftNews,
                    title_hi: aiNewsTopic + " — प्रमुख परीक्षा तथ्य",
                    title_en: aiNewsTopic + " — Key Exam Highlights",
                    summary_hi: aiNewsTopic + " से संबंधित हालिया सरकारी निर्णय और नीतिगत पहल परीक्षा की दृष्टि से अत्यंत महत्वपूर्ण है।",
                    summary_en: "Recent policy developments and key facts related to " + aiNewsTopic + " are highly relevant for upcoming exams.",
                    tip_hi: aiNewsTopic + " से जुड़े मुख्य तथ्य, तिथि और संबंधित मंत्रालय।",
                    tip_en: "Key facts, dates, and nodal ministry related to " + aiNewsTopic + ".",
                    d1_hi: "प्रमुख बिंदु 1: " + aiNewsTopic + " की शुरुआत और उद्देश्य।",
                    d2_hi: "प्रमुख बिंदु 2: इससे लाभान्वित होने वाले क्षेत्र और प्रमुख प्रावधान।",
                    d3_hi: "मुख्य तथ्य: संबंधित योजना, वर्ष और संस्थागत ढांचा।",
                    d1_en: "Point 1: Objective and launch background of " + aiNewsTopic + ".",
                    d2_en: "Point 2: Key provisions and target beneficiaries.",
                    d3_en: "Key Fact: Related scheme, year, and institutional framework."
                  });
                }
                setAiNewsLoading(false);
              }} className="px-4 py-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 rounded-xl font-black text-xs whitespace-nowrap">
                {aiNewsLoading ? "AI तैयार कर रहा है..." : "1-Click AI Auto-Fill"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div>
              <label className="text-[10px] text-slate-400 font-bold">विषय (Subject)</label>
              <select value={draftNews.subject} onChange={(e) => setDraftNews({ ...draftNews, subject: e.target.value })} className="w-full mt-0.5 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold">
                {["Bihar Special", "Politics", "Economy", "Sci & Tech", "Environment", "Defence", "International", "History & Culture"].map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-bold">EXAM TIP चरण (वैकल्पिक)</label>
              <select value={draftNews.examStage} onChange={(e) => setDraftNews({ ...draftNews, examStage: e.target.value })} className="w-full mt-0.5 p-2 rounded-lg bg-slate-950 border border-slate-700 text-amber-300 font-bold">
                <option value="">कुछ नहीं (केवल EXAM TIP दिखेगा)</option>
                <option value="Prelims">Prelims</option>
                <option value="Mains">Mains</option>
                <option value="Prelims & Mains">Prelims & Mains</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-bold">Exam Tags (कॉमा लगाकर)</label>
              <input value={draftNews.tags} onChange={(e) => setDraftNews({ ...draftNews, tags: e.target.value })} className="w-full mt-0.5 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <input value={draftNews.title_hi} onChange={(e) => setDraftNews({ ...draftNews, title_hi: e.target.value })} placeholder="शीर्षक (हिन्दी में) *" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold" />
            <input value={draftNews.title_en} onChange={(e) => setDraftNews({ ...draftNews, title_en: e.target.value })} placeholder="Headline (in English)" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            <textarea rows={3} value={draftNews.summary_hi} onChange={(e) => setDraftNews({ ...draftNews, summary_hi: e.target.value })} placeholder="सारांश / लेख (हिन्दी में - कोई शब्द सीमा नहीं) *" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            <textarea rows={3} value={draftNews.summary_en} onChange={(e) => setDraftNews({ ...draftNews, summary_en: e.target.value })} placeholder="Summary / Article (in English - unlimited words)" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            <input value={draftNews.tip_hi} onChange={(e) => setDraftNews({ ...draftNews, tip_hi: e.target.value })} placeholder="EXAM TIP (हिन्दी में)" className="p-2 rounded-lg bg-slate-950 border border-amber-500/40 text-amber-200" />
            <input value={draftNews.tip_en} onChange={(e) => setDraftNews({ ...draftNews, tip_en: e.target.value })} placeholder="EXAM TIP (in English)" className="p-2 rounded-lg bg-slate-950 border border-amber-500/40 text-amber-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <input value={draftNews.d1_hi} onChange={(e) => setDraftNews({ ...draftNews, d1_hi: e.target.value })} placeholder="Flip Back Point 1 (हिन्दी)" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            <input value={draftNews.d2_hi} onChange={(e) => setDraftNews({ ...draftNews, d2_hi: e.target.value })} placeholder="Flip Back Point 2 (हिन्दी)" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            <input value={draftNews.d3_hi} onChange={(e) => setDraftNews({ ...draftNews, d3_hi: e.target.value })} placeholder="Flip Back Point 3 (हिन्दी)" className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
          </div>

          <button type="button" onClick={() => {
            if (!draftNews.title_hi.trim() || !draftNews.summary_hi.trim()) { alert("कृपया कम से कम हिन्दी शीर्षक और सारांश भरें!"); return; }
            const today = new Date().toISOString().slice(0, 10);
            const newCard = {
              id: "fn_" + Date.now(),
              subject: draftNews.subject || "Bihar Special",
              examStage: draftNews.examStage || "",
              date: today,
              week: caWeek,
              month: caMonth,
              title_hi: draftNews.title_hi,
              title_en: draftNews.title_en || draftNews.title_hi,
              summary_hi: draftNews.summary_hi,
              summary_en: draftNews.summary_en || draftNews.summary_hi,
              tip_hi: draftNews.tip_hi,
              tip_en: draftNews.tip_en || draftNews.tip_hi,
              details_hi: [draftNews.d1_hi, draftNews.d2_hi, draftNews.d3_hi].filter(Boolean),
              details_en: [draftNews.d1_en || draftNews.d1_hi, draftNews.d2_en || draftNews.d2_hi, draftNews.d3_en || draftNews.d3_hi].filter(Boolean),
              tags: String(draftNews.tags || "BPSC").split(",").map((t) => t.trim()).filter(Boolean)
            };
            const updated = [newCard, ...flipNewsItems];
            setFlipNewsItems(updated);
            try { localStorage.setItem("cb_flip_news_v1", JSON.stringify(updated)); } catch {}
            setDraftNews({ subject: "Bihar Special", examStage: "", title_hi: "", title_en: "", summary_hi: "", summary_en: "", tip_hi: "", tip_en: "", d1_hi: "", d2_hi: "", d3_hi: "", d1_en: "", d2_en: "", d3_en: "", tags: "72वीं BPSC CCE, BPSC TRE 4.0" });
            setAiNewsTopic("");
            alert("नई Flip News लाइव हो गई है!");          
          
          }} className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs shadow-lg">
            Publish Flip News Live (तुरंत प्रकाशित करें)
          </button>
        </div>
      )}
      
      {role === "ADMIN" && (
        <div className="max-w-5xl mx-auto my-3 p-4 bg-slate-900 text-white rounded-2xl border border-amber-500/40 shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
            <div>
              <span className="px-2 py-0.5 bg-amber-400 text-slate-950 rounded text-[10px] font-black uppercase">ADMIN CONTROL</span>
              <h3 className="font-black text-base text-white mt-0.5">Home Dashboard & Revision Studio</h3>
            </div>
            <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-black">
              <button type="button" onClick={() => setAdminStudioTab("LIVE")} className={"px-3 py-1.5 rounded-lg transition " + (adminStudioTab === "LIVE" ? "bg-rose-600 text-white" : "text-slate-400 hover:text-white")}>🔴 Live Test</button>
              <button type="button" onClick={() => setAdminStudioTab("ALERTS")} className={"px-3 py-1.5 rounded-lg transition " + (adminStudioTab === "ALERTS" ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white")}>📢 Job Alerts ({jobAlerts.length})</button>
              <button type="button" onClick={() => setAdminStudioTab("FLASH")} className={"px-3 py-1.5 rounded-lg transition " + (adminStudioTab === "FLASH" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white")}>🧠 Flashcards ({flashcardsList.length})</button>
            </div>
          </div>

          {adminStudioTab === "LIVE" && (
            <div className="space-y-2.5 text-xs">
              <div className="text-slate-400 font-bold">होम पेज की ऊपरी LIVE पट्टी को यहाँ से तुरंत अपडेट करें:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input value={liveTicker.badge} onChange={(e) => setLiveTicker({ ...liveTicker, badge: e.target.value })} placeholder="Badge (LIVE NOW)" className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-rose-400 font-black" />
                <input value={liveTicker.title} onChange={(e) => setLiveTicker({ ...liveTicker, title: e.target.value })} placeholder="Live Test Title" className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold" />
                <input value={liveTicker.meta} onChange={(e) => setLiveTicker({ ...liveTicker, meta: e.target.value })} placeholder="150 Qs • 120 Min" className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300" />
              </div>
            </div>
          )}

          {adminStudioTab === "ALERTS" && (
            <div className="space-y-2.5 text-xs">
              <div className="flex flex-col sm:flex-row gap-2">
                <input value={newAlertTag} onChange={(e) => setNewAlertTag(e.target.value)} placeholder="Tag (NEW / ADMIT)" className="sm:w-32 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-amber-300 font-black" />
                <input value={newAlertTitle} onChange={(e) => setNewAlertTitle(e.target.value)} placeholder="नया बिहार भर्ती या परीक्षा अलर्ट लिखें..." className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white" />
                <button type="button" onClick={() => { if (!newAlertTitle.trim()) return; setJobAlerts([{ id: "ja_" + Date.now(), tag: newAlertTag || "NEW", title: newAlertTitle, date: "अभी" }, ...jobAlerts]); setNewAlertTitle(""); alert("नया अलर्ट होम पेज पर लाइव हो गया!"); }} className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black">Alert जोड़ें</button>
              </div>
              <div className="space-y-1.5 max-h-40 overflow-y-auto">
                {jobAlerts.map((al) => (
                  <div key={al.id} className="p-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                    <span className="truncate"><b className="text-amber-400">[{al.tag}]</b> {al.title}</span>
                    <button type="button" onClick={() => setJobAlerts(jobAlerts.filter((x) => x.id !== al.id))} className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded font-black text-[10px]">हटाएं</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminStudioTab === "FLASH" && (
            <div className="space-y-2.5 text-xs">
              <div className="flex flex-col sm:flex-row gap-2">
                <input value={newFcFront} onChange={(e) => setNewFcFront(e.target.value)} placeholder="नया Flashcard प्रश्न (Front)..." className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white" />
                <input value={newFcBack} onChange={(e) => setNewFcBack(e.target.value)} placeholder="सही उत्तर (Back)..." className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-emerald-300" />
                <button type="button" onClick={() => { if (!newFcFront.trim() || !newFcBack.trim()) return; setFlashcardsList([{ id: "fc_" + Date.now(), sub: "Bihar Special", front: newFcFront, back: newFcBack, due: "Due Today" }, ...flashcardsList]); setNewFcFront(""); setNewFcBack(""); alert("नया Flashcard जुड़ गया!"); }} className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black">Flashcard जोड़ें</button>
              </div>
              <div className="space-y-1.5 max-h-40 overflow-y-auto">
                {flashcardsList.map((fc) => (
                  <div key={fc.id} className="p-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                    <span className="truncate"><b>Q:</b> {fc.front} — <span className="text-emerald-400">{fc.back}</span></span>
                    <button type="button" onClick={() => setFlashcardsList(flashcardsList.filter((x) => x.id !== fc.id))} className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded font-black text-[10px]">हटाएं</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

                
     {role === "WRITER" && (
        <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 bg-white mt-3 rounded-xl border space-y-3 text-xs"}>
          <div className="flex flex-wrap justify-between items-center gap-2 border-b pb-2">
            <h2 className="font-bold text-sm">✍️ Content Writer Studio</h2>
            {activeStaff && activeStaff.role === "WRITER" && (
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 rounded font-bold text-[11px]">✅ {activeStaff.name} ({activeStaff.phone})</span>
                <button onClick={() => { setActiveStaff(null); setUnlockedRole(""); }} className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[11px]">Logout</button>
              </div>
            )}
          </div>
          {!(activeStaff && activeStaff.role === "WRITER") ? (
            <div className="p-3 bg-slate-100 rounded-lg space-y-2">
              <div className="font-bold text-slate-800">🔐 Verified Gmail या Mobile Number और PIN से लॉगिन करें:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input value={staffLoginId} onChange={(e) => setStaffLoginId(e.target.value)} placeholder="Gmail या 10-अंक का मोबाइल नं." className="border rounded px-2.5 py-1.5 bg-white" />
                <input value={pinInput} onChange={(e) => setPinInput(e.target.value)} placeholder="व्यक्तिगत PIN डालें" className="border rounded px-2.5 py-1.5 bg-white" />   
      <button onClick={() => {
                  const found = staffList.find((st) => st.role === "WRITER" && (st.email.toLowerCase() === staffLoginId.trim().toLowerCase() || st.phone === staffLoginId.trim()) && st.pin === pinInput.trim());
                  if (!found) { alert("❌ गलत Gmail/मोबाइल नंबर या PIN!"); return; }
                  if (!found.verified) { alert("⏳ आपका Gmail/Mobile अभी Head Admin द्वारा वेरीफाई नहीं हुआ है!"); return; }
                  setActiveStaff(found);
                  setUnlockedRole("WRITER");
                  if (found.cats.length > 0) { setSelCat(found.cats[0]); setSelSubExam((examTree[found.cats[0]] || [""])[0]); }
                  if (found.subs.length > 0) setNewSub(found.subs[0]); 
                  setPinInput("");
                }} className="bg-blue-600 text-white font-bold px-4 py-1.5 rounded">Verify & Login</button>
              </div>
              <div className="text-[10px] text-slate-500">Demo Login: amit@crackbpsc.in या 9876543210 | PIN: 2222</div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 bg-slate-900 text-white border-2 border-amber-400 rounded-xl space-y-2.5 text-xs">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-700 pb-2">
              <span className="font-extrabold text-amber-300">⚖️ अंक व नेगेटिव मार्किंग सेटिंग (All Exams & Custom):</span>
              <button onClick={() => setNegEnabled(!negEnabled)} className={"px-2.5 py-1 rounded font-black text-[11px] " + (negEnabled ? "bg-rose-600 text-white" : "bg-emerald-600 text-white")}>
                {negEnabled ? "⚖️ Negative Marking: ON (हटाएं)" : "⚖️ Negative Marking: OFF (जोड़ें)"}
              </button>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-cyan-300">✅ 1 सही उत्तर के अंक (वर्तमान: +{posMark}):</div>
              <div className="flex flex-wrap gap-1.5">
                {Array.of(1, 2, 3, 4, 5).map((m) => (
                  <button key={m} onClick={() => setPosMark(m)} className={"px-2.5 py-1 rounded font-black text-xs " + (posMark === m ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-200")}>+{m}</button>
                ))}
                <button onClick={() => { const v = Number(prompt("1 सही उत्तर के लिए कस्टम अंक लिखें (जैसे 1, 2, 2.5, 4, 5):", String(posMark))); if (v > 0) setPosMark(v); }} className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded font-black text-xs">✏️ Custom Edit</button>
              </div>
            </div>
            {negEnabled && (
              <div className="space-y-1 pt-1 border-t border-slate-700">
                <div className="text-[11px] font-bold text-rose-300">❌ 1 गलत उत्तर पर कटौती (वर्तमान: -{negLabel}):</div>
                <div className="flex flex-wrap gap-1.5">
                  <button onClick={() => { setNegVal(0.20); setNegLabel("1/5 (0.20)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/5 (0.20)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/5 (0.20)</button>
                  <button onClick={() => { setNegVal(0.25); setNegLabel("1/4 (0.25)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/4 (0.25)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/4 (0.25)</button>
                  <button onClick={() => { setNegVal(1 / 3); setNegLabel("1/3 (0.33)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/3 (0.33)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/3 (0.33)</button>
                  <button onClick={() => { setNegVal(0.50); setNegLabel("1/2 (0.50)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/2 (0.50)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/2 (0.50)</button>
                  <button onClick={() => { const cv = Number(prompt("गलत उत्तर पर कटने वाले अंक लिखें (जैसे 0.20, 0.25, 0.33, 0.50, 0.66, 1):", String(negVal))); if (cv >= 0) { setNegVal(cv); setNegLabel(String(cv)); } }} className="px-2 py-1 bg-amber-500 text-slate-950 rounded font-black text-[11px]">✏️ Custom Edit</button>
                </div>
              </div>
            )}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-700">
            <span className="text-[11px] font-bold text-amber-300">🛡️ विशेष 5-Option नियम ({selSubExam}): Option (E) अनुत्तरित = 0 कटौती, खाली छोड़ने पर नेगेटिव</span>
            <button
              onClick={() => setOptERules({ ...optERules, [selSubExam]: !optERules[selSubExam] })}
              className={"px-2.5 py-1 rounded-lg font-black text-[11px] " + (optERules[selSubExam] ? "bg-emerald-500 text-slate-950" : "bg-slate-700 text-slate-200")}
            >
              {optERules[selSubExam] ? "✅ लागू है (ON — केवल " + selSubExam + ")" : "⚪ बंद है (OFF — क्लिक कर चालू करें)"}
            </button>
          </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
              <span className="text-[11px] font-bold text-amber-300">🌓 Test Screen Theme:</span>
              <button onClick={() => setExamTheme("AUTO")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "AUTO" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300")}>⏰ Auto IST (6AM–6PM)</button>
              <button onClick={() => setExamTheme("LIGHT")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "LIGHT" ? "bg-amber-400 text-slate-950" : "bg-slate-700 text-slate-300")}>☀️ White Mode</button>
              <button onClick={() => setExamTheme("DARK")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "DARK" ? "bg-sky-600 text-white" : "bg-slate-700 text-slate-300")}>🌙 Dark Mode</button>
            </div>
           <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
            <span className="text-[11px] font-bold text-emerald-300">⏱️ समय ({selSubExam} • {selSection}): {examTimers[selCat + "_" + selSubExam + "_" + selSection] ? examTimers[selCat + "_" + selSubExam + "_" + selSection] + " मिनट" : "ऑटो (1 मिनट/प्रश्न)"}</span>
            {Array.from([30, 60, 90, 120, 150]).map((m) => (
              <button key={m} onClick={() => { setTestMins(m); setExamTimers({ ...examTimers, [selCat + "_" + selSubExam + "_" + selSection]: m }); }} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTimers[selCat + "_" + selSubExam + "_" + selSection] === m ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-white")}>{m} Min</button>
            ))}
            <button onClick={() => { const cm = Number(prompt(selSubExam + " (" + selSection + ") के लिए मिनट लिखें (जैसे 90, 150, 180):", String(testMins))); if (cm >= 1) { setTestMins(cm); setExamTimers({ ...examTimers, [selCat + "_" + selSubExam + "_" + selSection]: cm }); } }} className="px-2 py-0.5 bg-amber-500 text-slate-950 rounded font-black text-[11px]">✏️ Custom Edit</button>
          </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
            <span className="text-[11px] font-bold text-cyan-300">🔢 कुल प्रश्न सीमा ({selSubExam} • {selSection}): {examQLimits[selSubExam + "_" + selSection] ? examQLimits[selSubExam + "_" + selSection] + " प्रश्न" : "सभी उपलब्ध"}</span>
            {Array.of(10, 20, 30, 50, 100, 120, 150, 200).map((qn) => (
              <button key={qn} onClick={() => setExamQLimits({ ...examQLimits, [selSubExam + "_" + selSection]: qn })} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examQLimits[selSubExam + "_" + selSection] === qn ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-white")}>{qn} Q</button>
            ))}
            <button onClick={() => { const cq = Number(prompt("इस टेस्ट में कुल कितने प्रश्न भेजने हैं?", "150")); if (cq >= 1) setExamQLimits({ ...examQLimits, [selSubExam + "_" + selSection]: cq }); }} className="px-2 py-0.5 bg-amber-500 text-slate-950 rounded font-black text-[11px]">✏️ Custom Edit</button>
            {examQLimits[selSubExam + "_" + selSection] && <button onClick={() => { const cp = { ...examQLimits }; delete cp[selSubExam + "_" + selSection]; setExamQLimits(cp); }} className="px-2 py-0.5 bg-rose-600 text-white rounded font-black text-[11px]">सभी दिखाएं</button>}
          </div>
          {(activeStaff.canCreate || writerCanSetAttempts) && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
              <span className="text-[11px] font-bold text-amber-300">🔄 प्रयास सीमा ({selSubExam}): <span className="text-white">{examAttempts[selSubExam + "_" + selSection] ? examAttempts[selSubExam + "_" + selSection] + " बार" : "∞ Unlimited"}</span></span>
              {Array.of(0, 1, 2, 3, 4, 5, 10).map((atLim) => (
                <button key={atLim} onClick={() => setExamAttempts({ ...examAttempts, [selSubExam + "_" + selSection]: atLim })} className={"px-2 py-0.5 rounded font-bold text-[10px] " + ((examAttempts[selSubExam + "_" + selSection] ? examAttempts[selSubExam + "_" + selSection] : 0) === atLim ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300")}>
                  {atLim === 0 ? "∞ Unlimited" : atLim + " बार"}
                </button>
              ))}
              <button onClick={() => { const ca = Number(prompt("अधिकतम प्रयास संख्या लिखें (0 = Unlimited):", "2")); if (!Number.isNaN(ca) && ca >= 0) setExamAttempts({ ...examAttempts, [selSubExam + "_" + selSection]: ca }); }} className="px-2 py-0.5 bg-slate-700 text-cyan-300 rounded font-bold text-[10px]">Custom</button>
              {activeStaff.canCreate && (
                <button onClick={() => setWriterCanSetAttempts(!writerCanSetAttempts)} className={"px-2 py-0.5 rounded font-black text-[10px] ml-auto " + (writerCanSetAttempts ? "bg-emerald-500 text-slate-950" : "bg-rose-600 text-white")}>
                  {writerCanSetAttempts ? "🔓 Writer Access: ON" : "🔒 Writer Access: OFF"}
                </button>
              )}
            </div>
          )}      
          </div>
              <div className="p-2.5 bg-indigo-50 border border-indigo-300 rounded-xl space-y-2">
                <div className="text-[11px] font-extrabold text-indigo-950">🏛️ 1. आपकी अनुमत परीक्षा बोर्ड / Category ({activeStaff.cats.length}):</div>
                <div className="flex flex-wrap gap-1 items-center">
                  {Object.keys(examTree).filter((c) => activeStaff.cats.includes(c)).map((cat) => (
                    <button key={cat} onClick={() => { setSelCat(cat); setSelSubExam((examTree[cat] || [""])); }} className={"px-2.5 py-1 rounded font-extrabold text-xs border " + (selCat === cat ? "bg-indigo-700 text-white" : "bg-white text-slate-900")}>{cat}</button>
                  ))}
                  {(activeStaff.canCat ?? activeStaff.canCreate) && (
                    <button onClick={() => { const c = prompt("नई मुख्य Category लिखें:"); if (c && c.trim()) { setExamTree({ ...examTree, [c.trim()]: ["General Exam"] }); setStaffList(staffList.map((st) => st.id === activeStaff.id ? { ...st, cats: [...st.cats, c.trim()] } : st)); setActiveStaff({ ...activeStaff, cats: [...activeStaff.cats, c.trim()] }); setSelCat(c.trim()); setSelSubExam("General Exam"); } }} className="px-2 py-1 rounded font-black text-xs bg-emerald-600 text-white">➕ नई Category</button>
                  )}
                </div>

                <div className="text-[11px] font-extrabold text-purple-950">🎯 2. उप-परीक्षा / Sub-Category चुनें ({selCat}):</div>
                <div className="flex flex-wrap gap-1 items-center">
                  {(examTree[selCat] || []).map((subEx: string) => (
                    <button key={subEx} onClick={() => setSelSubExam(subEx)} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (selSubExam === subEx ? "bg-purple-700 text-white" : "bg-white text-slate-900")}>{subEx}</button>
                  ))}
                  {(activeStaff.canSubCat ?? activeStaff.canCreate) && (
                    <button onClick={() => { const s = prompt(selCat + " के अंदर नई Sub-Category लिखें:"); if (s && s.trim()) { setExamTree({ ...examTree, [selCat]: [...(examTree[selCat] || []), s.trim()] }); setSelSubExam(s.trim()); } }} className="px-2 py-0.5 rounded font-black text-[11px] bg-emerald-600 text-white">➕ नई Sub-Category</button>
                  )}
                </div>
                <div className="text-[11px] font-extrabold text-amber-950">📂 3. टेस्ट सेक्शन चुनें ({examSections.length} Sections):</div>
                <div className="flex flex-wrap gap-1 items-center">
                  {examSections.map((sec) => (
                    <button key={sec} onClick={() => setSelSection(sec)} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (selSection === sec ? "bg-amber-600 text-white" : "bg-white text-slate-900")}>{sec}</button>
                  ))}
                  {(activeStaff.canSec ?? activeStaff.canCreate) && (
                    <button onClick={() => { const ns = prompt("नया टेस्ट सेक्शन का नाम लिखें:"); if (ns && ns.trim()) { setExamSections([...examSections, ns.trim()]); setSelSection(ns.trim()); } }} className="px-2 py-0.5 rounded font-black text-[11px] bg-emerald-600 text-white">➕ नया Section</button>
                  )}
                </div>
              </div>
<div className="p-2 bg-amber-50 border border-amber-300 rounded-lg space-y-1.5 text-[11px]">
                      <div className="flex flex-wrap items-center justify-between gap-1 font-extrabold text-amber-950">
                        <span>📚 कुल टेस्ट सीरीज़ ({selSubExam} • {selSection}): <span className="text-indigo-700">{seriesCounts[selSubExam + "_" + selSection] ? seriesCounts[selSubExam + "_" + selSection] : 5} Sets</span></span>
                        <div className="flex flex-wrap gap-1">
                          {Array.of(5, 10, 50, 100, 500, 1000).map((cnt) => (
                            <button key={cnt} onClick={() => setSeriesCounts({ ...seriesCounts, [selSubExam + "_" + selSection]: cnt })} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold">{cnt}</button>
                          ))}
                          <button onClick={() => { const cv = Number(prompt("कितनी टेस्ट सीरीज़ (1 से 2000+) सेट करनी है?", "100")); if (!Number.isNaN(cv) && cv >= 1) setSeriesCounts({ ...seriesCounts, [selSubExam + "_" + selSection]: cv }); }} className="px-2 py-0.5 bg-slate-800 text-amber-300 rounded font-bold">Custom</button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-amber-200">
                        <span className="font-bold text-slate-700">🎓 TRE वर्ग/विषय जोड़ें:</span>
                        <select value={selTier} onChange={(e) => setSelTier(e.target.value)} className="px-1.5 py-0.5 border rounded bg-white font-bold">
                          <option>Class 1 to 5 (PRT)</option>
                          <option>Class 6 to 8 (Middle)</option>
                          <option>Class 9th &amp; 10th (TGT)</option>
                          <option>Class 11th &amp; 12th (PGT)</option>
                        </select>
                        <button onClick={() => { const ns = prompt(selTier + " में नया विषय लिखें (जैसे History, Polity, SST):"); if (ns && ns.trim()) { const k = selSubExam + "_" + selTier; const prevList = customTierSubs[k] ? customTierSubs[k] : []; setCustomTierSubs({ ...customTierSubs, [k]: [...prevList, ns.trim()] }); } }} className="px-2 py-0.5 bg-emerald-600 text-white rounded font-bold">+ नया विषय जोड़ें</button>
                      </div>
                    </div>
              <div className="flex flex-wrap gap-1 items-center">
                {subjects.filter((s) => activeStaff.subs.includes(s)).map((s) => (
                  <button key={s} onClick={() => setNewSub(s)} className={"px-2 py-1 rounded font-bold border " + (newSub === s ? "bg-blue-600 text-white" : "bg-slate-50")}>{s}</button>
                ))}
                {(activeStaff.canSub ?? activeStaff.canCreate) && (
                  <button onClick={() => { const s = prompt("नया विषय लिखें:"); if (s && s.trim()) { setSubjects([...subjects, s.trim()]); setStaffList(staffList.map((st) => st.id === activeStaff.id ? { ...st, subs: [...st.subs, s.trim()] } : st)); setActiveStaff({ ...activeStaff, subs: [...activeStaff.subs, s.trim()] }); setNewSub(s.trim()); } }} className="px-2 py-1 rounded font-black bg-emerald-600 text-white">➕ विषय</button>
                )}
              </div>
              {(activeStaff.canLiveTest ?? false) && (
                <div className="p-2.5 bg-rose-50 border border-rose-300 rounded-lg space-y-2">
                  <div className="flex flex-wrap justify-between items-center gap-1.5">
                    <span className="text-[11px] font-extrabold text-rose-950">🔴 Live Test कंट्रोल ({selCat} › {selSubExam}):</span>
                    <div className="flex gap-1">
                      {(activeStaff.canToggleLive ?? false) && (
                        <button onClick={() => setShowLive(!showLive)} className={"px-2 py-1 rounded font-bold text-[10px] " + (showLive ? "bg-emerald-600 text-white" : "bg-slate-700 text-white")}>
                          {showLive ? "👁️ Student पर Live: ON" : "🙈 Student पर Live: OFF"}
                        </button>
                      )}
                     
                    <div className="p-2.5 bg-indigo-50 border-2 border-indigo-300 rounded-xl space-y-2 text-[11px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-black text-indigo-950">🎯 टारगेट सीरीज़:</span>
                        <select value={targetSeriesNum} onChange={(e) => setTargetSeriesNum(Number(e.target.value))} className="px-2 py-0.5 border border-indigo-300 rounded bg-white font-black text-indigo-800">
                          {Array.from({ length: Math.min(200, seriesCounts[selSubExam + "_" + selSection] ? seriesCounts[selSubExam + "_" + selSection] : 10) }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>Test #{n}</option>
                          ))}
                        </select>
                        {selSection === "Current Affairs" && (
                          <select value={selCaMode} onChange={(e) => setSelCaMode(e.target.value)} className="px-2 py-0.5 border border-amber-400 rounded bg-amber-100 font-black text-amber-950">
                            <option value="Daily">Daily CA</option>
                            <option value="Weekly">Weekly CA</option>
                            <option value="Monthly">Monthly CA</option>
                          </select>
                        )}
                        <button type="button" onClick={() => {
                          const isMt = selSubExam.toLowerCase().includes("tre") || selSubExam.toLowerCase().includes("teacher");
                          const bKey = isMt ? (selSubExam + "_" + selTier + "_" + selTierSub + "_" + selSection + (selSection === "Current Affairs" ? "_" + selCaMode : "")) : (selSubExam + "_" + selSection + (selSection === "Current Affairs" ? "_" + selCaMode : ""));
                          const sk = bKey + "_S" + targetSeriesNum;
                          const qv = Number(prompt("Test #" + targetSeriesNum + " के लिए कुल प्रश्न (Qs) लिखें:", "10"));
                          const mv = Number(prompt("प्रति प्रश्न अंक (Marks) लिखें (जैसे 1 या 2):", "1"));
                          const tv = Number(prompt("कुल समय (Minutes) लिखें (जैसे 10 या 60):", "10"));
                          if (!Number.isNaN(qv) && qv > 0) setExamQLimits({ ...examQLimits, [sk]: qv });
                          if (!Number.isNaN(mv) && mv > 0) setSeriesMarks({ ...seriesMarks, [sk]: mv });
                          if (!Number.isNaN(tv) && tv > 0) setExamTimers({ ...examTimers, [sk]: tv });
                          alert("✅ Test #" + targetSeriesNum + " के प्रश्न, अंक और मिनट लॉक हो गए!");
                        }} className="px-2.5 py-0.5 bg-slate-900 text-amber-300 rounded font-black">⚙️ Test #{targetSeriesNum} के Qs/Marks/Min सेट करें</button>
                      </div>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="font-black text-slate-800">🌐 कहाँ जोड़ें:</span>
                        {[
                          { id: "SINGLE", label: "🎯 केवल यही परीक्षा" },
                          { id: "MULTI", label: "☑️ चुनी हुई कई परीक्षाएं" },
                          { id: "CAT", label: "🏛️ पूरी कैटेगरी (" + selCat + ")" },
                          { id: "GLOBAL", label: "🌐 सभी परीक्षाएं (All)" }
                        ].map((sc) => (
                          <button key={sc.id} type="button" onClick={() => setShareScope(sc.id)} className={"px-2 py-0.5 rounded font-black " + (shareScope === sc.id ? "bg-indigo-600 text-white" : "bg-white border text-slate-700")}>{sc.label}</button>
                        ))}
                      </div>
                      {shareScope === "MULTI" && (
                        <div className="flex flex-wrap gap-1.5 p-1.5 bg-white rounded border border-indigo-200">
                          {Object.values(examTree).flat().map((exName: any) => {
                            const checked = multiExamTargets.includes(exName);
                            return (
                              <label key={exName} className="inline-flex items-center gap-1 text-[10px] font-bold cursor-pointer bg-slate-50 px-1.5 py-0.5 rounded border">
                                <input type="checkbox" checked={checked} onChange={() => setMultiExamTargets(checked ? multiExamTargets.filter((x) => x !== exName) : [...multiExamTargets, exName])} />
                                <span>{exName}</span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>          
                      <div className="p-3 bg-emerald-950 text-white border-2 border-emerald-400 rounded-xl space-y-2 text-xs">
            <div className="font-black text-amber-300">🤖 AI Question Generator & 📋 Gemini Bulk Importer (Bilingual + Explanation)</div>
            <div className="flex flex-wrap gap-1.5">
              <input value={aiTopic} onChange={(e) => setAiTopic(e.target.value)} placeholder="विषय लिखें (जैसे: बिहार का इतिहास - 10 प्रश्न)..." className="flex-1 min-w-[160px] p-1.5 rounded bg-slate-900 border border-slate-600 text-white font-bold" />
              <button
                disabled={aiLoading}
                onClick={async () => {
                  if (!geminiKey) { alert("⚠️ पहले Head Admin पैनल में अपनी Gemini API Key सेव करें, या नीचे Bulk Paste बॉक्स उपयोग करें!"); return; }
                  if (!aiTopic.trim()) { alert("⚠️ पहले विषय लिखें!"); return; }
                  setAiLoading(true);
                  try {
                    const res = await fetch("/api/gemini", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        apiKey: geminiKey,                    
                          prompt: "You are a Master Exam Architect for UPSC/BPSC/TRE. Create high-standard bilingual MCQs on: " + aiTopic + " (max 25 questions) mixing Standard, Assertion-Reason, Multi-Statement, Pair-Match, and List-I/List-II Match questions. Return ONLY a valid JSON array where each object has: q (pure Hindi question ONLY, no English mixing, no markdown stars; for Match-List write 'सूची-I (Topic1) को सूची-II (Topic2) से सुमेलित कीजिए:' then rows with '|'), q_en (pure English question ONLY), opts_hi (array of 4 or 5 pure Hindi options), opts_en (array of 4 or 5 pure English options), correct (0-based integer index evenly distributed across 0, 1, 2, 3 so answers are never always 0), exp (pure Hindi explanation WITHOUT [हिन्दी] tag: 1. Core explanation 2. Comparative review + विकल्पों से जुड़े तथ्य: 1. Option 1 fact 2. Option 2 fact 3. Option 3 fact 4. Option 4 fact), exp_en (pure English explanation with Option facts 1-4)."
                        })
                      });
                      const data = await res.json();
                      if (!res.ok) {
                        alert("❌ Google AI त्रुटि: " + (data.error ? data.error.message : "Key जांचें"));
                        setAiLoading(false);
                        return;
                      }
                      const rawTxt = String(data?.candidates?.at(0)?.content?.parts?.at(0)?.text || "").trim();
                      const jsonStart = rawTxt.indexOf("[");
                      const jsonEnd = rawTxt.lastIndexOf("]");
                      const cleanJson = jsonStart >= 0 && jsonEnd > jsonStart ? rawTxt.slice(jsonStart, jsonEnd + 1) : rawTxt;
                      const arr = JSON.parse(cleanJson);
                      const cleanSide = (s: any) => String(s || "").replace(/^[#*\u2022]+\s*/g, "").replace(/^\[(?:हिन्दी|हिंदी|English)\]\s*/gi, "").replace(/\*\*/g, "").trim();
                      const splitPair = (val: any) => {
                        const txt = cleanSide(val);
                        const parts = txt.split(" / ");
                        if (parts.length >= 2) return { hi: (parts.at(0) || "").trim(), en: parts.slice(1).join(" / ").trim() };
                        return { hi: txt, en: txt };
                      };
                      const formatted = arr.map((item: any, idx: number) => {
                        const qPair = item.q_en ? { hi: cleanSide(item.q), en: cleanSide(item.q_en) } : splitPair(item.q);
                        const ePair = item.exp_en ? { hi: cleanSide(item.exp), en: cleanSide(item.exp_en) } : splitPair(item.exp);
                        const hiArr: string[] = Array.isArray(item.opts_hi) ? item.opts_hi.map(cleanSide) : (Array.isArray(item.opts) ? item.opts.map((o: any) => splitPair(o).hi) : []);
                        const enArr: string[] = Array.isArray(item.opts_en) ? item.opts_en.map(cleanSide) : (Array.isArray(item.opts) ? item.opts.map((o: any) => splitPair(o).en) : []);
                        const mergedOpts = hiArr.map((h: string, i: number) => (enArr[i] && enArr[i] !== h ? (h + " / " + enArr[i]) : h));
                        const qType = qPair.hi.includes("|") ? "MATCH" : (qPair.hi.includes("कथन") ? "AR" : "STD");
                        return {
                          id: Date.now() + idx,
                          cat: selCat,
                          subEx: selSubExam,
                          sec: selSection,
                          sub: "सामान्य अध्ययन",
                          type: qType,
                          q: qPair.hi,
                          q_en: qPair.en,
                          opts: mergedOpts,
                          correct: typeof item.correct === "number" ? item.correct : 0,
                          exp: ePair.hi,
                          exp_en: ePair.en,
                          seriesNum: targetSeriesNum,
                          tier: selTier,
                          tierSub: selTierSub,
                          caMode: selCaMode,
                          shareScope: shareScope,
                          targetExams: multiExamTargets
                        };
                      });
                    setQuestions([...formatted, ...questions]);
                    setAiTopic("");
                    alert("✅ " + formatted.length + " Bilingual प्रश्न सीधे " + selSubExam + " में जुड़ गए!");
                  } catch (e: any) {
                    alert("❌ AI त्रुटि: " + (e.message ? e.message : "एक बार में 15–20 प्रश्न लिखकर पुनः प्रयास करें।"));
                  }
                  setAiLoading(false);
                }}
                className="px-3 py-1.5 bg-amber-400 text-slate-950 rounded font-black"
              >
                {aiLoading ? "⏳ बन रहा है..." : "✨ AI से बनाएं"}
              </button>
            </div>
             <div className="flex flex-wrap gap-1.5">
          <button onClick={() => {
            const p = "Generate 25 High-Level Bilingual (Hindi + English) Normal MCQs for " + selSubExam + " (" + selSection + "). Follow exact format:\nQ1. [Hindi Question]\n[English Question]\n(A) [Hindi / English]\n(B) [Hindi / English]\n(C) [Hindi / English]\n(D) [Hindi / English]\n(E) उपर्युक्त में से कोई नहीं / एक से अधिक (None/More than one)\nAns: A\nExp: [Detailed Bilingual Explanation in Hindi & English]";
            navigator.clipboard.writeText(p);
            alert("📝 साधारण प्रश्न (Bilingual) Prompt कॉपी हो गया! अब Gemini में पेस्ट करें।");
          }} className="px-2.5 py-1 bg-cyan-600 text-white rounded-lg font-black text-[11px]">📝 साधारण प्रश्न Prompt</button>
          <button onClick={() => {
            const p = "Generate 25 Bilingual (Hindi + English) Assertion & Reason (कथन और कारण) MCQs for " + selSubExam + ". Follow exact format:\nQ1. नीचे दो कथन दिए गए हैं:\nकथन (A): [Hindi Assertion]\nकारण (R): [Hindi Reason]\nAssertion (A): [English Assertion]\nReason (R): [English Reason]\n(A) A और R दोनों सही हैं और R, A की सही व्याख्या है / Both A and R are true and R is correct explanation\n(B) A और R दोनों सही हैं परंतु R, A की सही व्याख्या नहीं है / Both true but R is not correct explanation\n(C) A सही है परंतु R गलत है / A is true but R is false\n(D) A गलत है परंतु R सही है / A is false but R is true\n(E) उपर्युक्त में से कोई नहीं / एक से अधिक\nAns: A\nExp: [Detailed Bilingual Explanation]";
            navigator.clipboard.writeText(p);
            alert("⚖️ कथन व कारण (Bilingual) Prompt कॉपी हो गया! अब Gemini में पेस्ट करें।");
          }} className="px-2.5 py-1 bg-purple-600 text-white rounded-lg font-black text-[11px]">⚖️ कथन-कारण Prompt</button>
          <button onClick={() => {
            const p = "Generate 25 Bilingual (Hindi + English) Parallel Match-the-Following (कूट और मिलान) MCQs for " + selSubExam + ". IMPORTANT: Instead of generic 'List-I | List-II', ALWAYS use topic-specific parallel column headers like 'वंश / Dynasty | संस्थापक / Founder', 'शासक / Ruler | राजधानी / Capital', 'घास के मैदान / Grasslands | देश / Country', or 'उद्यान / National Park | राज्य / State'. Format:\nQ1. सूची-I को सूची-II से सुमेलित कीजिए / Match List-I with List-II:\nसूची-I (वंश) / List-I (Dynasty) | सूची-II (संस्थापक) / List-II (Founder)\nA. [Item 1 Hindi / Eng] | 1. [Match 1 Hindi / Eng]\nB. [Item 2 Hindi / Eng] | 2. [Match 2 Hindi / Eng]\nC. [Item 3 Hindi / Eng] | 3. [Match 3 Hindi / Eng]\nD. [Item 4 Hindi / Eng] | 4. [Match 4 Hindi / Eng]\nE. [Item 5 Hindi / Eng] | 5. [Match 5 Hindi / Eng]\n(A) A-1, B-2, C-3, D-4, E-5\n(B) A-2, B-1, C-4, D-3, E-5\n(C) A-3, B-4, C-1, D-2, E-5\n(D) A-4, B-3, C-2, D-1, E-5\n(E) उपर्युक्त में से कोई नहीं / एक से अधिक\nAns: A\nExp: [Detailed Bilingual Explanation]";
            navigator.clipboard.writeText(p);
            alert("🔗 पैरेलल कूट-मिलान (List-I vs List-II) Prompt कॉपी हो गया! अब Gemini में पेस्ट करें।");
          }} className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded-lg font-black text-[11px]">🔗 पैरेलल कूट-मिलान Prompt</button>
          <button onClick={() => {
            const p = "Generate 30 Mixed Bilingual (Hindi + English) MCQs for " + selSubExam + " including Normal, Assertion-Reason (कथन-कारण), and Parallel Table Match-the-Following (सूची-I A,B,C,D,E | सूची-II 1,2,3,4,5) with 4 or 5 options (A to E), Ans: and Exp: in Hindi & English.";
            navigator.clipboard.writeText(p);
            alert("🌟 ऑल-इन-वन मिक्स (Bilingual) Prompt कॉपी हो गया!");
          }} className="px-2.5 py-1 bg-rose-600 text-white rounded-lg font-black text-[11px]">🌟 All-in-One Combo</button>
           <button onClick={() => {
            const p = "Generate 50 High-Level Bilingual (Hindi + English) MCQs for " + selSubExam + " covering ALL 16+ subjects: History (इतिहास), Geography (भूगोल), Polity (राजव्यवस्था), Economics (इकोनॉमी), General Science (सामान्य विज्ञान), Environment (पर्यावरण), Bihar & State GK/Current Affairs (बिहार विशेष व राज्य करंट अफेयर्स), Maths (गणित), Reasoning (रीज़निंग), Pedagogy (शिक्षण शास्त्र), Hindi (हिंदी), English, Sanskrit (संस्कृत), Maithili (मैथिली), Urdu (उर्दू). Include Normal, Assertion-Reason (कथन-कारण), and Parallel Table Match with topic-specific headers (e.g., वंश / Dynasty | संस्थापक / Founder, शासक / Ruler | राजधानी / Capital, राज्य / State | उद्यान / Park) with 4 or 5 options, Ans: and Exp: in Hindi & English.";
            navigator.clipboard.writeText(p);
            alert("📚 All-Subjects Master Bilingual Prompt (16+ विषय) कॉपी हो गया! अब Gemini में पेस्ट करें।");
          }} className="px-2.5 py-1 bg-emerald-500 text-slate-950 rounded-lg font-black text-[11px]">📚 All-Subjects Master Prompt</button>    
        </div>
        <textarea
          rows={4}
          value={bulkText}
          onChange={(e) => setBulkText(e.target.value)}
          placeholder="📋 Gemini या कहीं से भी कॉपी किए गए 100-150+ प्रश्न यहाँ पेस्ट करें (साधारण, कथन-कारण, पैरेलल सूची-I vs सूची-II, और 4, 5, 6+ विकल्प सब ऑटो-पहचान होंगे)..."
          className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white font-mono text-xs"
        /> 
        <button
          onClick={() => {
            const cleanRaw = bulkText.replace(/\r/g, "").trim();
            if (!cleanRaw) { alert("⚠️ पहले बॉक्स में प्रश्न पेस्ट करें!"); return; }
            const blocks = cleanRaw.split(/\n(?=(?:Q|Que|Question|प्रश्न|प्र\.|प्र)\s*\d*[\.\:\)\-]|\d+[\.\)]\s+)/i);
            const getAutoSub = (txt: string) => {
              const s = txt.toLowerCase();
              if (/बिहार|bihar|पटना|मगध|मिथिला|चंपारण|नालंदा|वैशाली/.test(s)) return "बिहार विशेष";
              if (/उत्तर प्रदेश|uttar pradesh|झारखंड|jharkhand|मध्य प्रदेश|राजस्थान|महाराष्ट्र|बंगाल/.test(s)) return "राज्य GK / CA";
              if (/करंट अफेयर्स|current affairs|2025|2026|सूचकांक|पुरस्कार|नियुक्ति|सम्मेलन/.test(s)) return "करंट अफेयर्स";
              if (/पियाजे|वाइगोत्स्की|कोहलबर्ग|pedagogy|शिक्षण|बाल विकास|nep 2020|ncf|समावेशी/.test(s)) return "शिक्षण शास्त्र (Pedagogy)";
              if (/संविधान|अनुच्छेद|संसद|राष्ट्रपति|polity|constitution|पंचायती|मौलिक अधिकार/.test(s)) return "राजव्यवस्था";
              if (/इतिहास|history|मुगल|मौर्य|गांधी|1857|हड़प्पा|गुप्त|अशोक/.test(s)) return "इतिहास";
              if (/भूगोल|geography|नदी|पर्वत|जलवायु|मिट्टी|अक्षांश|देशांतर|खनिज/.test(s)) return "भूगोल";
              if (/अर्थव्यवस्था|economy|बजट|gdp|rbi|मुद्रास्फीति|नीति आयोग|बैंकिंग/.test(s)) return "इकोनॉमी";
              if (/पर्यावरण|environment|पारिस्थितिकी|ओज़ोन|प्रदूषण|उद्यान|जैव विविधता/.test(s)) return "पर्यावरण";
              if (/भौतिकी|रसायन|जीवविज्ञान|विटामिन|कोशिका|physics|biology|chemistry/.test(s)) return "विज्ञान";
              if (/प्रतिशत|औसत|अनुपात|त्रिकोणमिति|गणित|profit|ratio|क्षेत्रमिति/.test(s)) return "गणित";
              if (/कोडिंग|रक्त संबंध|श्रृंखला|reasoning|syllogism|दिशा/.test(s)) return "रीज़निंग";
              if (/संधि|समास|अलंकार|पर्यायवाची|विलोम|मुहावरा|तत्सम/.test(s)) return "हिंदी";
              if (/synonym|antonym|preposition|idiom|tense|narration|voice/.test(s)) return "English";
              if (/लकार|प्रत्याहार|संस्कृत|विसर्ग|धातु रूप|माहेश्वर/.test(s)) return "संस्कृत";
              if (/विद्यापति|मैथिली|तिरहुत|मिथिलाक्षर/.test(s)) return "मैथिली";
              if (/उर्दू|ग़ज़ल|नज़्म|क़सीदा/.test(s) || /[\u0600-\u06FF]/.test(txt)) return "उर्दू";
              return newSub;
            };
            
                      const added: any[] = [];
                      const isMasterFmt = /---START OF QUESTION---|QUESTION_HI\s*:/i.test(cleanRaw);
                      if (isMasterFmt) {
                        const mBlocks = cleanRaw.split(/---START OF QUESTION---|(?=Q_NO\s*:)/i).filter((x: string) => /QUESTION_HI\s*:/i.test(x));
                        mBlocks.forEach((mb: string, bIdx: number) => {
                          const body = mb.split(/---END OF QUESTION---/i).at(0) || mb;
                          const getSec = (tag: string, nextTags: string) => {
                            const rx = new RegExp(tag + "\\s*:([\\s\\S]*?)(?=" + nextTags + "|$)", "i");
                            const m = body.match(rx);
                            return m && m.at(1) ? (m.at(1) as string).trim() : "";
                          };
                          const qHi = getSec("QUESTION_HI", "QUESTION_EN\\s*:|OPTIONS_HI\\s*:");
                          const qEn = getSec("QUESTION_EN", "OPTIONS_HI\\s*:|OPTIONS_EN\\s*:");
                          const oHiRaw = getSec("OPTIONS_HI", "OPTIONS_EN\\s*:|CORRECT_ANSWER\\s*:");
                          const oEnRaw = getSec("OPTIONS_EN", "CORRECT_ANSWER\\s*:|EXPLANATION_HI\\s*:");
                          const ansStr = getSec("CORRECT_ANSWER", "EXPLANATION_HI\\s*:|EXPLANATION_EN\\s*:");
                          const eHi = getSec("EXPLANATION_HI", "EXPLANATION_EN\\s*:|---END");
                          const eEn = getSec("EXPLANATION_EN", "---END|$");
                          const parseOptList = (rawO: string) => rawO.split("\n").map((l: string) => l.replace(/^[#*\u2022]+\s*/, "").replace(/^[(\[]?(?:[A-Ea-e1-5क-ङ0])[)\].:\-]\s*/, "").trim()).filter((x: string) => x.length > 0).slice(0, 5);
                          const hiOpts = parseOptList(oHiRaw);
                          const enOpts = parseOptList(oEnRaw);
                          const finalOpts = hiOpts.map((h: string, i: number) => enOpts[i] && enOpts[i] !== h ? (h + " / " + enOpts[i]) : h);
                          const aM = ansStr.match(/([1-5A-Ea-eक-ङ])/);
                          const aMap: any = { "1": 0, A: 0, "क": 0, "2": 1, B: 1, "ख": 1, "3": 2, C: 2, "ग": 2, "4": 3, D: 3, "घ": 3, "5": 4, E: 4, "ङ": 4 };
                          const ansKey = aM && aM.at(1) ? (aM.at(1) as string).toUpperCase() : "";
                          const cIdx = aMap[ansKey] !== undefined ? aMap[ansKey] : 0;
                          if (qHi && finalOpts.length >= 2) {
                            added.push({
                              id: Date.now() + bIdx,
                              cat: selCat,
                              subEx: selSubExam,
                              sec: selSection,
                              sub: getAutoSub(qHi + " " + qEn),
                              type: qHi.includes("|") ? "MATCH" : (qHi.includes("कथन") ? "AR" : "STD"),
                              q: qHi,
                              q_en: qEn,
                              opts: finalOpts,
                              correct: cIdx,
                              exp: eHi,
                              exp_en: eEn,
                              seriesNum: targetSeriesNum,
                              tier: selTier,
                              tierSub: selTierSub,
                              caMode: selCaMode,
                              shareScope: shareScope,
                              targetExams: multiExamTargets
                            });
                          }
                        });
                      } else {
                        blocks.forEach((b, i) => {
                          const lines = b.split("\n").map((l) => l.replace(/^[#*\u2022]+\s*/, "").replace(/^\*+|\*+$/g, "").trim()).filter((x) => x.length > 0 && !/^[-=_]{3,}$/.test(x));
                          if (lines.length < 3) return;
                          const optRe = /^[(\[]?([A-Ha-h]|[1-8]|[क-ङ]|0)[)\].:\-]\s*(.+)$/;
                          const ansRe = /^(?:\*+)?(?:Ans|Answer|Correct|Correct Answer|उत्तर|सही उत्तर)\s*[*:\-–=.]+\s*[(\[]?([A-Ha-h1-8क-ङ])[)\].]?\s*(.*)$/i;
                          const expRe = /^(?:\*+)?(?:Exp|Explanation|Solution|व्याख्या|हल|विवरण|विस्तृत व्याख्या)\s*[*:\-–=.]+\s*(.*)$/i;
                          const qLines: string[] = [];
                          const opts: string[] = [];
                          let rawAns = "";
                          let expText = "";
                          let inExp = false;
                          lines.forEach((ln, idx) => {
                            const am = ln.match(ansRe);
                            const em = ln.match(expRe);
                            const om = ln.match(optRe);
                            if (am && am.at(1)) {
                              rawAns = (am.at(1) as string).toUpperCase();
                              inExp = false;
                            } else if (em) {
                              expText = em.at(1) ? (em.at(1) as string) : "";
                              inExp = true;
                            } else if (inExp) {
                              expText = expText + "\n" + ln;
                            } else if (om && om.at(2) && idx > 0 && !ln.includes("|")) {
                              opts.push((om.at(2) as string).trim());
                            } else if (opts.length === 0) {
                              const cleanedQ = idx === 0 ? ln.replace(/^(?:Q|Que|Question|प्रश्न|प्र\.|प्र)\s*\.?\s*\d+\s*[:.)\-/]*\s*/i, "") : ln;
                              if (cleanedQ) qLines.push(cleanedQ);
                            }
                          });
                          if (qLines.length > 0 && opts.length >= 2) {
                            const mapAns: any = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "क": 0, "ख": 1, "ग": 2, "घ": 3, "ङ": 4 };
                            const cIdx = mapAns[rawAns] !== undefined ? mapAns[rawAns] : 0;
                            const fullQ = qLines.join("\n");
                            const low = fullQ.toLowerCase();
                            const qType = low.includes("कथन") ? "AR" : low.includes("assertion") ? "AR" : fullQ.includes("|") ? "MATCH" : "STD";
                            added.push({
                              id: Date.now() + i,
                              cat: selCat,
                              subEx: selSubExam,
                              sec: selSection,
                              sub: getAutoSub(fullQ),
                              type: qType,
                              q: fullQ,
                              opts: opts,
                              correct: cIdx,
                              exp: expText.replace(/^\[(?:हिन्दी|हिंदी|English)\]\s*/gi, "").trim(),
                              seriesNum: targetSeriesNum,
                              tier: selTier,
                              tierSub: selTierSub,
                              caMode: selCaMode,
                              shareScope: shareScope,
                              targetExams: multiExamTargets
                            });
                          }
                        });
                      }
            if (added.length === 0) { alert("⚠️ कोई मान्य प्रश्न नहीं मिला। ऊपर से कोई भी 1-Click Prompt कॉपी करके Gemini से प्रश्न बनवाएं!"); return; }
            setQuestions([...added, ...questions]);
            setBulkText("");
            alert("🎉 कुल " + added.length + " प्रश्न (साधारण / कथन-कारण / पैरेलल मिलान • 4/5/6+ विकल्प) सीधे " + selSubExam + " में जुड़ गए!");
          }}
          className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-black shadow"
        >
          ⚡ सभी प्रश्न एक साथ ऑटो-इम्पोर्ट करें (100-150+ Universal Parser)
        </button>
          </div>
                      <button onClick={() => {
                        const t = prompt("Live Test का नाम लिखें (जैसे: 72वीं BPSC Maha-Mock #2):"); if (!t || !t.trim()) return;
                        const stIn = prompt("कितने दिन/समय बाद आएगा? (जैसे: 3 दिन बाद, बुधवार शाम 7 बजे):", "3 दिन बाद") || "जल्द आ रहा है";
                        const dur = Number(prompt("टेस्ट का समय (मिनट में):", "120")) || 120;
                        setLiveTests([{ id: Date.now(), title: t.trim(), cat: selCat, subEx: selSubExam, startsIn: stIn, duration: dur, isLive: false }, ...liveTests]);
                        alert("✅ Live Test शेड्यूल हो गया! अब नीचे से प्रश्न बनाकर इस Live Test में जोड़ें।");
                      }} className="px-2 py-1 bg-rose-600 text-white font-bold rounded text-[10px]">➕ नया Live Test</button>
                    </div>
                  </div>
                </div>
              )}
                <div className="flex flex-wrap gap-1">
                {[{ id: "STD", name: "📝 सामान्य प्रश्न" }, { id: "MATCH", name: "🔗 कूट और मिलान डिब्बा" }, { id: "REASON", name: "⚖️ कथन और कारण डिब्बा" }].map((t) => (
                  <button key={t.id} onClick={() => setQType(t.id)} className={"px-2.5 py-1 rounded-lg font-extrabold border " + (qType === t.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-800")}>{t.name}</button>
                ))}
              </div>

              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg space-y-1">
                <div className="text-[11px] font-extrabold text-blue-900">📌 मुख्य प्रश्न का डिब्बा:</div>
                <textarea rows={2} value={newQ} onChange={(e) => setNewQ(e.target.value)} placeholder="🇮🇳 यहाँ हिंदी में मुख्य प्रश्न लिखें (कोने से खींचकर बड़ा करें)..." className="w-full border rounded p-2 text-sm bg-white font-medium resize-y" />
                <textarea rows={2} value={newQEn} onChange={(e) => setNewQEn(e.target.value)} placeholder="🇬🇧 Write question in English here (Drag corner to resize)..." className="w-full border rounded p-2 text-sm bg-indigo-50 font-medium mt-1.5 resize-y" />
              </div>
              {qType === "MATCH" && (
                <div className="p-2.5 bg-purple-50 border border-purple-300 rounded-lg space-y-2">
                  <div className="text-[11px] font-extrabold text-purple-900">🔗 कूट और मिलान डिब्बा (पूरी सूची एक ही डिब्बे में पेस्ट करें):</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-purple-900">📋 सूची-I (एक ही डिब्बा):</div>
                      <textarea rows={5} value={listLeft.join("\n")} onChange={(e) => setListLeft(e.target.value.split("\n"))} placeholder={"पूरी सूची-I यहाँ पेस्ट करें...\nA. ...\nB. ...\nC. ...\nD. ..."} className="w-full border border-purple-300 rounded-lg p-2 bg-white text-xs font-medium leading-relaxed resize-y" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-indigo-900">📋 सूची-II (एक ही डिब्बा):</div>
                      <textarea rows={5} value={listRight.join("\n")} onChange={(e) => setListRight(e.target.value.split("\n"))} placeholder={"पूरी सूची-II यहाँ पेस्ट करें...\n1. ...\n2. ...\n3. ...\n4. ..."} className="w-full border border-indigo-300 rounded-lg p-2 bg-white text-xs font-medium leading-relaxed resize-y" />
                    </div>
                  </div>
                </div>
              )}

              {qType === "REASON" && (
                <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-lg space-y-2">
                  <div className="text-[11px] font-extrabold text-amber-950">⚖️ अभिकथन / कथन (Assertion - A) का स्पेशल डिब्बा:</div>
                  <textarea rows={2} value={assertBox} onChange={(e) => setAssertBox(e.target.value)} placeholder="🇮🇳 यहाँ हिंदी में अभिकथन / कथन (A) लिखें..." className="w-full border rounded p-2 text-xs bg-white font-medium resize-y" />
                  <textarea rows={2} value={assertBoxEn} onChange={(e) => setAssertBoxEn(e.target.value)} placeholder="🇬🇧 Write Assertion / Statement (A) in English here..." className="w-full border rounded p-2 text-xs bg-indigo-50 font-medium resize-y" />
                  <div className="text-[11px] font-extrabold text-amber-950 pt-1">⚖️ कारण (Reason - R) का स्पेशल डिब्बा:</div>
                  <textarea rows={2} value={reasonBox} onChange={(e) => setReasonBox(e.target.value)} placeholder="🇮🇳 यहाँ हिंदी में कारण (R) लिखें..." className="w-full border rounded p-2 text-xs bg-white font-medium resize-y" />
                  <textarea rows={2} value={reasonBoxEn} onChange={(e) => setReasonBoxEn(e.target.value)} placeholder="🇬🇧 Write Reason (R) in English here..." className="w-full border rounded p-2 text-xs bg-indigo-50 font-medium resize-y" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg space-y-1">
                  <div className="text-[11px] font-extrabold text-emerald-900">🇮🇳 हिंदी विकल्प (एक ही डिब्बा):</div>
                  <textarea rows={4} value={newOpts.join("\n")} onChange={(e) => setNewOpts(e.target.value.split("\n"))} placeholder={"विकल्प A\nविकल्प B\nविकल्प C\nविकल्प D"} className="w-full border rounded p-2 bg-white text-xs resize-y" />
                </div>
                <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg space-y-1">
                  <div className="text-[11px] font-extrabold text-indigo-900">🇬🇧 English Options (Single Box):</div>
                  <textarea rows={4} value={newOptsEn.join("\n")} onChange={(e) => setNewOptsEn(e.target.value.split("\n"))} placeholder={"Option A\nOption B\nOption C\nOption D"} className="w-full border rounded p-2 bg-white text-xs resize-y" />
                </div>
              </div>

              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg space-y-1">
                <div className="text-[11px] font-extrabold text-amber-900">📖 व्याख्या / Explanation (हिंदी + English):</div>
                <textarea rows={2} value={newExp} onChange={(e) => setNewExp(e.target.value)} placeholder="🇮🇳 यहाँ हिंदी में व्याख्या लिखें..." className="w-full border rounded p-2 bg-white text-xs resize-y" />
                <textarea rows={2} value={newExpEn} onChange={(e) => setNewExpEn(e.target.value)} placeholder="🇬🇧 Write explanation in English here..." className="w-full border rounded p-2 bg-indigo-50 text-xs resize-y" />
              </div>

              {newOpts.filter((x) => x.trim() !== "").length > 0 && (
                <div className="p-2.5 bg-slate-50 border rounded-lg space-y-1">
                  <div className="text-[11px] font-extrabold text-slate-700">🎯 सही उत्तर चुनने के लिए नीचे किसी भी विकल्प पर क्लिक करें:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {newOpts.filter((x) => x.trim() !== "").map((opt, i) => (
                      <button key={i} type="button" onClick={() => setCorrectIdx(i)} className={"px-2.5 py-1 rounded border text-xs font-bold " + (correctIdx === i ? "bg-emerald-600 text-white border-emerald-700 shadow" : "bg-white text-slate-900")}>
                        ({String.fromCharCode(65 + i)}) {opt} {correctIdx === i && "✅"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="p-2.5 bg-rose-50 border-2 border-rose-300 rounded-lg flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold text-rose-950">🔴 साथ ही इस प्रश्न को Live Test में भी जोड़ें (Dual-Link):</span>
                <select value={targetLiveId} onChange={(e) => setTargetLiveId(Number(e.target.value))} className="px-2 py-1 border rounded bg-white font-bold text-xs text-slate-900">
                  <option value={0}>केवल सामान्य परीक्षा में रखें ({selCat} › {selSubExam})</option>
                  {liveTests.map((lt: any) => (<option key={lt.id} value={lt.id}>✅ सामान्य परीक्षा + 🔴 Live Test: {lt.title}</option>))}
                </select>
              </div>

              <button onClick={() => {
                const hiOpts = newOpts.filter((x) => x.trim() !== "");
                const enOpts = newOptsEn.filter((x) => x.trim() !== "");
                if (!newQ) return;
                if (hiOpts.length < 2) return;
                const lClean = listLeft.filter((x) => x.trim() !== "").join("\n");
                const rClean = listRight.filter((x) => x.trim() !== "").join("\n");
                let baseQ = newQEn.trim() ? newQ + " / " + newQEn : newQ;
                if (qType === "MATCH") baseQ = baseQ + "\n【सूची-I】\n" + lClean + "\n【सूची-II】\n" + rClean;
                if (qType === "REASON") baseQ = baseQ + " | कथन (A): " + assertBox + (assertBoxEn.trim() ? " / " + assertBoxEn : "") + " | कारण (R): " + reasonBox + (reasonBoxEn.trim() ? " / " + reasonBoxEn : "");
                const combinedOpts = hiOpts.map((h, i) => enOpts[i] ? h + " / " + enOpts[i] : h);
                const combinedExp = newExpEn.trim() ? newExp + " | English: " + newExpEn : newExp;
                const autoTag = selCat + " > " + selSubExam + " > " + selSection;
                const lIds = targetLiveId > 0 ? [targetLiveId] : [];
                if (editQId !== null) {
                  setQuestions(questions.map((item) => item.id === editQId ? { ...item, subject: newSub, text: baseQ, opts: combinedOpts, correct: correctIdx, exp: combinedExp, liveIds: targetLiveId > 0 ? Array.from(new Set([...(item.liveIds ? item.liveIds : []), targetLiveId])) : (item.liveIds ? item.liveIds : []) } : item));
                  setEditQId(null);
                  alert("✅ प्रश्न सफलतापूर्वक अपडेट (Edit) हो गया!");
                } else {
                  setQuestions([...questions, { id: Date.now(), cat: selCat, subEx: selSubExam, sec: selSection, seriesNum: targetSeriesNum, tier: selTier, tierSub: selTierSub, caMode: selCaMode, shareScope: shareScope, targetExams: multiExamTargets, subject: newSub, text: baseQ, opts: combinedOpts, correct: correctIdx, exp: combinedExp, tag: autoTag, liveIds: lIds }]);
                  alert(targetLiveId > 0 ? "✅ प्रश्न सामान्य परीक्षा और 🔴 Live Test दोनों में जुड़ गया!" : "✅ प्रश्न सामान्य परीक्षा में सेव हो गया!");
                }
                setNewQ(""); setNewQEn(""); setAssertBox(""); setAssertBoxEn(""); setReasonBox(""); setReasonBoxEn(""); setListLeft(["", "", "", ""]); setListRight(["", "", "", ""]); setListLeftEn(["", "", "", ""]); setListRightEn(["", "", "", ""]); setNewOpts(["", "", "", ""]); setNewOptsEn(["", "", "", ""]); setNewExp(""); setNewExpEn(""); setCorrectIdx(0);
              }} className={"w-full text-white font-bold py-2.5 rounded-lg " + (editQId !== null ? "bg-amber-600" : "bg-blue-600")}>
                {editQId !== null ? "💾 अपडेट किया हुआ प्रश्न सेव करें (Update Question)" : "Save Bilingual Question"}
              </button>
              {targetLiveId > 0 && (
                <div className="p-3 bg-rose-50 border-2 border-rose-400 rounded-xl space-y-2">
                  <div className="font-extrabold text-xs text-rose-950">🔴 चुने गए Live Test में जोड़े गए प्रश्न ({questions.filter((q: any) => (q.liveIds ? q.liveIds.includes(targetLiveId) : false)).length}):</div>
                  {questions.filter((q: any) => (q.liveIds ? q.liveIds.includes(targetLiveId) : false)).map((lq: any, idx: number) => (
                    <div key={lq.id} className="p-2 bg-white border rounded flex justify-between items-start gap-2">
                      <span className="text-[11px] font-bold text-slate-900">Q{idx + 1}. {lq.text}</span>
                      <div className="flex gap-1 shrink-0">
                        <button onClick={() => { const p = String(lq.text).split(" / "); setEditQId(lq.id); setNewQ(String(p.at(0) ? p.at(0) : "")); setNewQEn(String(p.at(1) ? p.at(1) : "")); const arr = lq.opts ? lq.opts : []; const hO = arr.map((o: string) => String(o.split(" / ").at(0) ? o.split(" / ").at(0) : "")); const eO = arr.map((o: string) => String(o.split(" / ").at(1) ? o.split(" / ").at(1) : "")); setNewOpts([String(hO.at(0) ? hO.at(0) : ""), String(hO.at(1) ? hO.at(1) : ""), String(hO.at(2) ? hO.at(2) : ""), String(hO.at(3) ? hO.at(3) : "")]); setNewOptsEn([String(eO.at(0) ? eO.at(0) : ""), String(eO.at(1) ? eO.at(1) : ""), String(eO.at(2) ? eO.at(2) : ""), String(eO.at(3) ? eO.at(3) : "")]); setCorrectIdx(lq.correct); const ex = String(lq.exp ? lq.exp : "").split(" | English: "); setNewExp(String(ex.at(0) ? ex.at(0) : "")); setNewExpEn(String(ex.at(1) ? ex.at(1) : "")); alert("✏️ ऊपर के बॉक्स में पूरा प्रश्न, चारों विकल्प, सही उत्तर और व्याख्या लोड हो गए हैं—सुधार करके Update दबाएं!"); }} className="px-2 py-0.5 bg-amber-500 text-white rounded font-bold text-[10px]">✏️ Edit</button>
                        <button onClick={() => setQuestions(questions.map((x) => x.id === lq.id ? { ...x, liveIds: (x.liveIds ? x.liveIds : []).filter((id: number) => id !== targetLiveId) } : x))} className="px-2 py-0.5 bg-rose-600 text-white rounded font-bold text-[10px]">✕ हटाएं</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-3 border-t space-y-2">
                <div className="font-bold text-slate-800">📚 कुल सेव किए गए प्रश्न ({questions.length}):</div>
                {questions.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-slate-50 border rounded-lg space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold text-slate-900 whitespace-pre-line">प्र.{idx + 1}: {q.text}</span>
                      <div className="flex gap-1.5 shrink-0">
                        <button onClick={() => { const p = String(q.text).split(" / "); setEditQId(q.id); setNewQ(String(p.at(0) ? p.at(0) : "")); setNewQEn(String(p.at(1) ? p.at(1) : "")); const arr = q.opts ? q.opts : []; const hO = arr.map((o: string) => String(o.split(" / ").at(0) ? o.split(" / ").at(0) : "")); const eO = arr.map((o: string) => String(o.split(" / ").at(1) ? o.split(" / ").at(1) : "")); setNewOpts([String(hO.at(0) ? hO.at(0) : ""), String(hO.at(1) ? hO.at(1) : ""), String(hO.at(2) ? hO.at(2) : ""), String(hO.at(3) ? hO.at(3) : "")]); setNewOptsEn([String(eO.at(0) ? eO.at(0) : ""), String(eO.at(1) ? eO.at(1) : ""), String(eO.at(2) ? eO.at(2) : ""), String(eO.at(3) ? eO.at(3) : "")]); setCorrectIdx(q.correct); const ex = String(q.exp ? q.exp : "").split(" | English: "); setNewExp(String(ex.at(0) ? ex.at(0) : "")); setNewExpEn(String(ex.at(1) ? ex.at(1) : "")); alert("✏️ ऊपर के बॉक्स में पूरा प्रश्न, चारों विकल्प, सही उत्तर और व्याख्या लोड हो गए हैं—सुधार करके Update दबाएं!"); }} className="px-2 py-0.5 bg-amber-500 text-white rounded font-bold text-[10px]">✏️ Edit</button>
                        {activeStaff.canDelete && <button onClick={() => { setDeletedQs([q, ...deletedQs]); setQuestions(questions.filter((item) => item.id !== q.id)); }} className="text-rose-600 font-bold">🗑️ डिलीट</button>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {writerPass && (
            <div className="p-3 bg-cyan-950 text-white border-2 border-cyan-400 rounded-xl space-y-2">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
                <span className="font-extrabold text-xs text-amber-300">🎟️ CrackBPSC Pass Banner Manager</span>
                <div className="flex gap-1.5">
                  <button onClick={() => setShowPass(!showPass)} className={"px-2 py-1 rounded font-black text-[11px] " + (showPass ? "bg-emerald-500 text-white" : "bg-rose-600 text-white")}>{showPass ? "👁️ बैनर चालू (हटाएं)" : "🙈 बैनर हटा हुआ (वापस लगाएं)"}</button>
                  <button onClick={() => { const b = prompt("1. छोटा बैज:", passBadge); if (b !== null && b.trim() !== "") setPassBadge(b.trim()); const t = prompt("2. मुख्य शीर्षक:", passTitle); if (t !== null && t.trim() !== "") setPassTitle(t.trim()); const btn = prompt("3. बटन टेक्स्ट:", passBtn); if (btn !== null && btn.trim() !== "") setPassBtn(btn.trim()); const msg = prompt("4. संदेश:", passMsg); if (msg !== null && msg.trim() !== "") setPassMsg(msg.trim()); }} className="px-2 py-1 bg-amber-400 text-slate-950 font-black rounded text-[11px]">✏️ टेक्स्ट एडिट</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {passFeats.map((f, i) => (<button key={i} onClick={() => { if (confirm(f + " हटाएं?")) setPassFeats(passFeats.filter((_, idx) => idx !== i)); }} className="px-2 py-0.5 bg-white/15 hover:bg-rose-600 rounded text-[11px] font-bold">✓ {f} ✕</button>))}
                <button onClick={() => { const nf = prompt("नया फ़ीचर लिखें:"); if (nf && nf.trim()) setPassFeats([...passFeats, nf.trim()]); }} className="px-2 py-0.5 bg-emerald-500 text-white font-black rounded text-[11px]">➕ फ़ीचर जोड़ें</button>
              </div>
            </div>
          )}
        </div>
      )}
      {role === "MOD" && (
        <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 bg-white mt-3 rounded-xl border space-y-3 text-xs"}>
          <h2 className="font-bold text-sm">🛡️ Moderator Panel</h2>
          {!allowMod ? <div className="p-3 bg-rose-100 text-rose-800 font-bold rounded">🔒 Head Admin ने आपका एक्सेस बंद कर रखा है।</div> : (
            <div className="flex gap-2">
              <input value={newNotif} onChange={(e) => setNewNotif(e.target.value)} placeholder="नोटिफिकेशन भेजें..." className="flex-1 border rounded px-2 py-1.5" />
              <button onClick={() => { if (!newNotif) return; setNotifs([newNotif, ...notifs]); setNewNotif(""); alert("🔔 भेज दिया गया!"); }} className="bg-amber-500 text-black px-3 py-1.5 rounded font-bold">Send 🔔</button>
            </div>
          )}
          {modPass && (
            <div className="p-3 bg-cyan-950 text-white border-2 border-cyan-400 rounded-xl space-y-2">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
                <span className="font-extrabold text-xs text-amber-300">🎟️ CrackBPSC Pass Banner Manager</span>
                <div className="flex gap-1.5">
                  <button onClick={() => setShowPass(!showPass)} className={"px-2 py-1 rounded font-black text-[11px] " + (showPass ? "bg-emerald-500 text-white" : "bg-rose-600 text-white")}>{showPass ? "👁️ बैनर चालू (हटाएं)" : "🙈 बैनर हटा हुआ (वापस लगाएं)"}</button>
                  <button onClick={() => { const b = prompt("1. छोटा बैज:", passBadge); if (b !== null && b.trim() !== "") setPassBadge(b.trim()); const t = prompt("2. मुख्य शीर्षक:", passTitle); if (t !== null && t.trim() !== "") setPassTitle(t.trim()); const btn = prompt("3. बटन टेक्स्ट:", passBtn); if (btn !== null && btn.trim() !== "") setPassBtn(btn.trim()); const msg = prompt("4. संदेश:", passMsg); if (msg !== null && msg.trim() !== "") setPassMsg(msg.trim()); }} className="px-2 py-1 bg-amber-400 text-slate-950 font-black rounded text-[11px]">✏️ टेक्स्ट एडिट</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {passFeats.map((f, i) => (<button key={i} onClick={() => { if (confirm(f + " हटाएं?")) setPassFeats(passFeats.filter((_, idx) => idx !== i)); }} className="px-2 py-0.5 bg-white/15 hover:bg-rose-600 rounded text-[11px] font-bold">✓ {f} ✕</button>))}
                <button onClick={() => { const nf = prompt("नया फ़ीचर लिखें:"); if (nf && nf.trim()) setPassFeats([...passFeats, nf.trim()]); }} className="px-2 py-0.5 bg-emerald-500 text-white font-black rounded text-[11px]">➕ फ़ीचर जोड़ें</button>
              </div>
            </div>
          )}
        </div>
      )}
{role === "ADTEAM" && (
        <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 bg-white mt-3 rounded-xl border-2 border-amber-300 space-y-3 text-xs"}>
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
          {adPass && (
            <div className="p-3 bg-cyan-950 text-white border-2 border-cyan-400 rounded-xl space-y-2">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
                <span className="font-extrabold text-xs text-amber-300">🎟️ CrackBPSC Pass Banner Manager</span>
                <div className="flex gap-1.5">
                  <button onClick={() => setShowPass(!showPass)} className={"px-2 py-1 rounded font-black text-[11px] " + (showPass ? "bg-emerald-500 text-white" : "bg-rose-600 text-white")}>{showPass ? "👁️ बैनर चालू (हटाएं)" : "🙈 बैनर हटा हुआ (वापस लगाएं)"}</button>
                  <button onClick={() => { const b = prompt("1. छोटा बैज:", passBadge); if (b !== null && b.trim() !== "") setPassBadge(b.trim()); const t = prompt("2. मुख्य शीर्षक:", passTitle); if (t !== null && t.trim() !== "") setPassTitle(t.trim()); const btn = prompt("3. बटन टेक्स्ट:", passBtn); if (btn !== null && btn.trim() !== "") setPassBtn(btn.trim()); const msg = prompt("4. संदेश:", passMsg); if (msg !== null && msg.trim() !== "") setPassMsg(msg.trim()); }} className="px-2 py-1 bg-amber-400 text-slate-950 font-black rounded text-[11px]">✏️ टेक्स्ट एडिट</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {passFeats.map((f, i) => (<button key={i} onClick={() => { if (confirm(f + " हटाएं?")) setPassFeats(passFeats.filter((_, idx) => idx !== i)); }} className="px-2 py-0.5 bg-white/15 hover:bg-rose-600 rounded text-[11px] font-bold">✓ {f} ✕</button>))}
                <button onClick={() => { const nf = prompt("नया फ़ीचर लिखें:"); if (nf && nf.trim()) setPassFeats([...passFeats, nf.trim()]); }} className="px-2 py-0.5 bg-emerald-500 text-white font-black rounded text-[11px]">➕ फ़ीचर जोड़ें</button>
              </div>
            </div>
          )}
        </div>
      )}
      {role === "ADMIN" && (
        <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 bg-white mt-3 rounded-xl border-2 border-indigo-200 space-y-3 text-xs"}>
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
            <button onClick={() => setWriterPass(!writerPass)} className={"w-full py-1 rounded font-bold " + (writerPass ? "bg-cyan-600 text-white" : "bg-slate-200")}>{writerPass ? "🎟️ Pass Banner: ON" : "🎟️ Pass Banner: OFF"}</button>
            </div>
            <div className="p-2.5 bg-slate-50 rounded border space-y-1">
              <div className="font-bold text-purple-800">🛡️ Moderator Controls:</div>
              <button onClick={() => setAllowMod(!allowMod)} className={"w-full py-1 rounded font-bold text-white " + (allowMod ? "bg-emerald-600" : "bg-rose-600")}>Panel: {allowMod ? "ON" : "OFF"}</button>
              <button onClick={() => setShowLive(!showLive)} className={"w-full py-1 rounded font-bold border " + (showLive ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900")}>Live Counter: {showLive ? "ON" : "OFF"}</button>
            <button onClick={() => setModPass(!modPass)} className={"w-full py-1 rounded font-bold " + (modPass ? "bg-cyan-600 text-white" : "bg-slate-200")}>{modPass ? "🎟️ Pass Banner: ON" : "🎟️ Pass Banner: OFF"}</button>
            </div>
            <div className="p-2.5 bg-slate-50 rounded border space-y-1">
              <div className="font-bold text-amber-800">📢 Ad Team Controls:</div>
              <button onClick={() => setAllowAd(!allowAd)} className={"w-full py-1 rounded font-bold text-white " + (allowAd ? "bg-emerald-600" : "bg-rose-600")}>Ad Studio: {allowAd ? "ON" : "OFF"}</button>
              <button onClick={() => setAdCanPopup(!adCanPopup)} className={"w-full py-1 rounded font-bold border " + (adCanPopup ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900")}>Popup Ads: {adCanPopup ? "ON" : "OFF"}</button>
            <button onClick={() => setAdPass(!adPass)} className={"w-full py-1 rounded font-bold " + (adPass ? "bg-cyan-600 text-white" : "bg-slate-200")}>{adPass ? "🎟️ Pass Banner: ON" : "🎟️ Pass Banner: OFF"}</button>
            </div>
          </div>
          <div className="p-3 bg-indigo-50 border-2 border-indigo-400 rounded-xl space-y-2.5">
            <div className="font-extrabold text-sm text-indigo-950 border-b border-indigo-200 pb-1.5">👥 Staff Registry, Gmail/Phone Verification & Custom Access</div>
            <button onClick={() => {
              const nm = prompt("1. सदस्य का नाम लिखें (जैसे: राहुल वर्मा):");
              if (!nm || !nm.trim()) return;
              const em = prompt("2. सदस्य की Gmail ID लिखें:") || "";
              const ph = prompt("3. 10-अंक का मोबाइल नंबर लिखें:") || "";
              const rl = (prompt("4. Role लिखें (WRITER / MOD / AD):", "WRITER") || "WRITER").toUpperCase();
              const pn = prompt("5. लॉगिन PIN बनाएं (जैसे: 4444):", "4444") || "4444";
              setStaffList([...staffList, { id: Date.now(), name: nm.trim(), email: em.trim(), phone: ph.trim(), role: rl, pin: pn.trim(), verified: true, cats: ["BPSC"], subs: ["बिहार विशेष"], canCreate: false, canDelete: false }]);
              alert("✅ नया सदस्य जोड़ा गया! अब नीचे से उसकी Exam Category और Subject चुनें।");
            }} className="w-full py-2 bg-indigo-700 text-white font-extrabold rounded-lg text-xs">➕ नया टीम सदस्य जोड़ें (Gmail + Mobile Verification)</button>
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {staffList.map((st) => (
                <div key={st.id} className="p-2.5 bg-white border border-indigo-200 rounded-lg space-y-1.5">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs">{st.name} <span className="px-1.5 py-0.5 bg-slate-200 rounded text-[10px]">{st.role}</span></div>
                      <div className="text-[10px] text-slate-600">📧 {st.email} | 📱 {st.phone} | 🔑 PIN: {st.pin}</div>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, verified: !x.verified } : x))} className={"px-2 py-0.5 rounded font-bold text-[10px] " + (st.verified ? "bg-emerald-600 text-white" : "bg-amber-500 text-white")}>
                        {st.verified ? "✅ Verified" : "⏳ Verify करें"}
                      </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canCat: !(x.canCat ?? x.canCreate) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canCat ?? st.canCreate) ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700")}>
                        {(st.canCat ?? st.canCreate) ? "+Cat: ON" : "+Cat: OFF"}
                      </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canSubCat: !(x.canSubCat ?? x.canCreate) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canSubCat ?? st.canCreate) ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-700")}>
                        {(st.canSubCat ?? st.canCreate) ? "+SubCat: ON" : "+SubCat: OFF"}
                      </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canSec: !(x.canSec ?? x.canCreate) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canSec ?? st.canCreate) ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-700")}>
                        {(st.canSec ?? st.canCreate) ? "+Sec: ON" : "+Sec: OFF"}
                      </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canSub: !(x.canSub ?? x.canCreate) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canSub ?? st.canCreate) ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700")}>
                        {(st.canSub ?? st.canCreate) ? "+Sub: ON" : "+Sub: OFF"}
                      </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canLiveTest: !(x.canLiveTest ?? false) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canLiveTest ?? false) ? "bg-rose-600 text-white" : "bg-slate-200 text-slate-700")}>
                     {(st.canLiveTest ?? false) ? "🔴 LiveTest: ON" : "🔴 LiveTest: OFF"}
                   </button>
                      <button onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, canToggleLive: !(x.canToggleLive ?? false) } : x))} className={"px-1.5 py-0.5 rounded font-bold text-[10px] " + ((st.canToggleLive ?? false) ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700")}>
                        {(st.canToggleLive ?? false) ? "👁️ Show/Hide: ON" : "👁️ Show/Hide: OFF"}
                      </button>
                      <button onClick={() => {
                        const nm = prompt("नया नाम लिखें:", st.name); if (!nm || !nm.trim()) return;
                        const em = prompt("नया Gmail लिखें:", st.email) || st.email;
                        const ph = prompt("नया मोबाइल नंबर लिखें:", st.phone) || st.phone;
                        const rl = (prompt("Role लिखें (WRITER / MOD / AD):", st.role) || st.role).toUpperCase();
                        const pn = prompt("नया PIN लिखें:", st.pin) || st.pin;
                        setStaffList(staffList.map((x) => x.id === st.id ? { ...x, name: nm.trim(), email: em.trim(), phone: ph.trim(), role: rl, pin: pn.trim() } : x));
                      }} className="px-2 py-0.5 rounded font-bold text-[10px] bg-amber-500 text-white">✏️ Edit</button>
                      <button onClick={() => { if (confirm(st.name + " को टीम से हटाकर तिजोरी में भेजें?")) { setDeletedStaff([st, ...deletedStaff]); setStaffList(staffList.filter((x) => x.id !== st.id)); } }} className="px-2 py-0.5 rounded font-bold text-[10px] bg-rose-700 text-white">🚫 हटाएं</button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 items-center pt-1 border-t">
                    <span className="text-[10px] font-bold text-indigo-900">🏛️ Exams:</span>
                    {Object.keys(examTree).map((cat) => {
                      const ok = st.cats.includes(cat);
                      return (
                        <button key={cat} onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, cats: ok ? x.cats.filter((c: string) => c !== cat) : [...x.cats, cat] } : x))} className={"px-1.5 py-0.5 rounded text-[10px] font-bold border " + (ok ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-500")}>
                          {ok ? "✓ " : ""}{cat}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1 items-center">
                    <span className="text-[10px] font-bold text-blue-900">📚 Subjects:</span>
                    {subjects.map((sub) => {
                      const ok = st.subs.includes(sub);
                      return (
                        <button key={sub} onClick={() => setStaffList(staffList.map((x) => x.id === st.id ? { ...x, subs: ok ? x.subs.filter((s: string) => s !== sub) : [...x.subs, sub] } : x))} className={"px-1.5 py-0.5 rounded text-[10px] font-bold border " + (ok ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-500")}>
                          {ok ? "✓ " : ""}{sub}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 bg-emerald-50 border-2 border-emerald-400 rounded-xl space-y-2">
            <div className="font-extrabold text-sm text-emerald-950 border-b border-emerald-200 pb-1.5">🏦 Master Question Bank (किसी भी परीक्षा में प्रश्न भेजें)</div>
            <div className="p-2 bg-white border border-emerald-300 rounded-lg space-y-1.5">
              <div className="text-[11px] font-extrabold text-indigo-950">🎯 1. लक्ष्य परीक्षा चुनें जहाँ प्रश्न भेजना है:</div>
              <div className="flex flex-wrap gap-1 items-center">
                {Object.keys(examTree).map((cat) => (
                  <button key={cat} onClick={() => { setAdminBankCat(cat); setAdminBankSubEx((examTree[cat] || [""])); }} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (adminBankCat === cat ? "bg-indigo-700 text-white" : "bg-slate-50")}>{cat}</button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 items-center">
                {(examTree[adminBankCat] || []).map((subEx: string) => (
                  <button key={subEx} onClick={() => setAdminBankSubEx(subEx)} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (adminBankSubEx === subEx ? "bg-purple-700 text-white" : "bg-slate-50")}>{subEx}</button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 items-center">
                {examSections.map((sec) => (
                  <button key={sec} onClick={() => setAdminBankSec(sec)} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (adminBankSec === sec ? "bg-amber-600 text-white" : "bg-slate-50")}>{sec}</button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              <button onClick={() => setBankSub("ALL")} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (bankSub === "ALL" ? "bg-slate-900 text-white" : "bg-white")}>सभी ({questions.length})</button>
              {subjects.map((s) => (
                <button key={s} onClick={() => setBankSub(s)} className={"px-2 py-0.5 rounded font-bold text-[11px] border " + (bankSub === s ? "bg-blue-700 text-white" : "bg-white")}>{s}</button>
              ))}
            </div>
            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {questions.filter((q) => bankSub === "ALL" || q.subject === bankSub).map((q: any, idx: number) => {
                const targetTag = adminBankCat + " > " + adminBankSubEx + " > " + adminBankSec;
                const qTags: string[] = q.tags || [];
                const alreadyAdded = qTags.includes(targetTag);
                return (
                  <div key={q.id} className="p-2 bg-white border rounded-lg space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold text-slate-900 text-[11px]">[{q.subject}] प्र.{idx + 1}: {q.text}</span>
                      <button onClick={() => setQuestions(questions.map((item: any) => item.id === q.id ? { ...item, tags: alreadyAdded ? qTags.filter((t) => t !== targetTag) : [...qTags, targetTag] } : item))} className={"px-2 py-1 rounded font-black text-[10px] shrink-0 " + (alreadyAdded ? "bg-slate-700 text-white" : "bg-emerald-600 text-white")}>
                        {alreadyAdded ? "✅ जुड़ा हुआ है" : "➕ जोड़ें"}
                      </button>
                    </div>
                    {qTags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {qTags.map((tg, ti) => (
                          <span key={ti} className="px-1.5 py-0.5 bg-indigo-100 text-indigo-900 rounded text-[10px] font-bold">📌 {tg}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3 bg-rose-50 border-2 border-rose-400 rounded-xl space-y-2">
            <div className="font-extrabold text-sm text-rose-950 border-b border-rose-200 pb-1.5">🗄️ Head Admin Safe Backup Vault (तिजोरी — डिलीट डेटा यहाँ सुरक्षित है)</div>
            <div className="text-[11px] font-bold text-slate-800">📝 तिजोरी में सुरक्षित प्रश्न ({deletedQs.length}):</div>
            {deletedQs.length === 0 ? <div className="text-[10px] text-slate-500">कोई डिलीट किया गया प्रश्न नहीं है।</div> : (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {deletedQs.map((dq: any) => (
                  <div key={dq.id} className="p-2 bg-white border rounded flex justify-between items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-800">[{dq.subject}] {dq.text}</span>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setQuestions([dq, ...questions]); setDeletedQs(deletedQs.filter((x) => x.id !== dq.id)); }} className="px-2 py-0.5 bg-emerald-600 text-white rounded font-bold text-[10px]">♻️ वापस लाएं</button>
                      <button onClick={() => { if (confirm("क्या इस प्रश्न को तिजोरी से भी हमेशा के लिए मिटा दें?")) setDeletedQs(deletedQs.filter((x) => x.id !== dq.id)); }} className="px-2 py-0.5 bg-rose-700 text-white rounded font-bold text-[10px]">❌ जड़ से हटाएं</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-[11px] font-bold text-slate-800 pt-1">👥 तिजोरी में सुरक्षित टीम सदस्य ({deletedStaff.length}):</div>
            {deletedStaff.length === 0 ? <div className="text-[10px] text-slate-500">कोई हटाया गया सदस्य नहीं है।</div> : (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {deletedStaff.map((ds: any) => (
                  <div key={ds.id} className="p-2 bg-white border rounded flex justify-between items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-800">{ds.name} ({ds.phone} | {ds.role})</span>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setStaffList([ds, ...staffList]); setDeletedStaff(deletedStaff.filter((x) => x.id !== ds.id)); }} className="px-2 py-0.5 bg-emerald-600 text-white rounded font-bold text-[10px]">♻️ वापस लाएं</button>
                      <button onClick={() => { if (confirm("क्या इस सदस्य को तिजोरी से भी हमेशा के लिए मिटा दें?")) setDeletedStaff(deletedStaff.filter((x) => x.id !== ds.id)); }} className="px-2 py-0.5 bg-rose-700 text-white rounded font-bold text-[10px]">❌ जड़ से हटाएं</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="p-3 bg-rose-950 text-white border-2 border-rose-500 rounded-xl space-y-2">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
              <span className="font-extrabold text-sm text-amber-300">🔴 Head Admin Live Test & Registration Manager</span>
              <button onClick={() => setShowLive(!showLive)} className={"px-2.5 py-1 rounded font-black text-xs " + (showLive ? "bg-emerald-500 text-white" : "bg-slate-600 text-white")}>
                {showLive ? "👁️ Student पर Live: ON" : "🙈 Student पर Live: OFF"}
              </button>
              <button onClick={() => {
                const t = prompt("1. Live Test का नाम लिखें:"); if (!t || !t.trim()) return;
                const ct = prompt("2. Exam Category लिखें (जैसे: BPSC / UPSC / Railway):", adminBankCat) || adminBankCat;
                const sb = prompt("3. Sub-Category लिखें:", adminBankSubEx) || adminBankSubEx;
                const stIn = prompt("4. कितने दिन/समय बाद आएगा? (जैसे: 2 दिन बाद, रविवार 10 AM):", "2 दिन बाद") || "जल्द आ रहा है";
                const dur = Number(prompt("5. समय अवधि (मिनट में):", "120")) || 120;
                setLiveTests([{ id: Date.now(), title: t.trim(), cat: ct, subEx: sb, startsIn: stIn, duration: dur, isLive: false }, ...liveTests]);
              }} className="px-2.5 py-1 bg-amber-400 text-slate-950 font-black rounded text-xs">➕ नया Live Test शेड्यूल करें</button>
            </div>
            <div className="space-y-1.5 max-h-56 overflow-y-auto">
              {liveTests.map((lt: any) => (
                <div key={lt.id} className="p-2 bg-white/10 rounded-lg flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <div className="font-bold text-xs text-white">{lt.title} <span className="text-amber-300">({lt.cat} › {lt.subEx})</span></div>
                    <div className="text-[10px] text-indigo-200">📅 {lt.startsIn} | ⏱️ {lt.duration}m</div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => setLiveTests(liveTests.map((x) => x.id === lt.id ? { ...x, isLive: !x.isLive, startsIn: !x.isLive ? "अभी LIVE चल रहा है" : "जल्द शुरू होगा" } : x))} className={"px-2 py-0.5 rounded font-black text-[10px] " + (lt.isLive ? "bg-emerald-500 text-white" : "bg-amber-400 text-slate-950")}>
                      {lt.isLive ? "🟢 LIVE चालू (बंद करें)" : "▶️ अभी LIVE करें"}
                    </button>
                    <button onClick={() => { const t = prompt("1. Live Test का नाम:", lt.title); const ct = prompt("2. Exam Category:", lt.cat); const sb = prompt("3. Sub-Category:", lt.subEx); const stIn = prompt("4. समय/तारीख:", lt.startsIn); const dur = Number(prompt("5. अवधि (मिनट में):", String(lt.duration))); setLiveTests(liveTests.map((x) => x.id === lt.id ? { ...x, title: t ? t : lt.title, cat: ct ? ct : lt.cat, subEx: sb ? sb : lt.subEx, startsIn: stIn ? stIn : lt.startsIn, duration: dur ? dur : lt.duration } : x)); }} className="px-2 py-1 bg-sky-500 text-white rounded font-black text-[10px]">✏️ Edit</button>
                    <button onClick={() => setLiveTests(liveTests.filter((x) => x.id !== lt.id))} className="px-2 py-0.5 bg-rose-600 text-white rounded font-bold text-[10px]">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white border-2 border-indigo-400 rounded-xl space-y-2 text-xs">
            <div className="font-black text-amber-300">👑 Exam Category Order (1, 2, 3...) & Student Show/Hide Access</div>
            <div className="space-y-1.5">
              {(Object.keys(examTree).sort((a, b) => (catOrder.indexOf(a) === -1 ? 999 : catOrder.indexOf(a)) - (catOrder.indexOf(b) === -1 ? 999 : catOrder.indexOf(b)))).map((cat, idx) => (
                <div key={cat} className="p-2 bg-slate-800 rounded-lg flex flex-wrap justify-between items-center gap-2 border border-slate-700">
                  <span className="font-black text-cyan-300">#{idx + 1} — {cat}</span>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => { const pos = Number(prompt(cat + " को कितने नंबर पर रखना है? (1 से " + Object.keys(examTree).length + " लिखें):", String(idx + 1))); if (pos >= 1) { const base = Object.keys(examTree).sort((a, b) => (catOrder.indexOf(a) === -1 ? 999 : catOrder.indexOf(a)) - (catOrder.indexOf(b) === -1 ? 999 : catOrder.indexOf(b))).filter((x) => x !== cat); base.splice(Math.min(pos - 1, base.length), 0, cat); setCatOrder(base); } }} className="px-2 py-1 bg-indigo-600 text-white rounded font-black text-[11px]">🔢 क्रम सेट करें</button>
                    <button onClick={() => setHiddenCats(hiddenCats.includes(cat) ? hiddenCats.filter((x) => x !== cat) : [...hiddenCats, cat])} className={"px-2 py-1 rounded font-black text-[11px] " + (hiddenCats.includes(cat) ? "bg-rose-600 text-white" : "bg-emerald-600 text-white")}>{hiddenCats.includes(cat) ? "🙈 छिपा है (Show करें)" : "👁️ दिखेगा (Hide करें)"}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-700 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-amber-300">🤖 Gemini AI Key:</span>
              <input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="AIzaSy... अपनी Gemini API Key यहाँ पेस्ट करें" className="flex-1 min-w-[160px] p-1.5 rounded bg-slate-950 border border-slate-600 text-white font-mono text-[11px]" />
            </div>
          </div>
          <div className="p-3 bg-cyan-950 text-white border-2 border-cyan-400 rounded-xl space-y-2.5">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
              <span className="font-extrabold text-sm text-amber-300">🎟️ CrackBPSC Pass Banner Manager (Edit & Remove)</span>
              <div className="flex gap-1.5">
                <button onClick={() => setShowPass(!showPass)} className={"px-2.5 py-1 rounded font-black text-xs " + (showPass ? "bg-emerald-500 text-white" : "bg-rose-600 text-white")}>
                  {showPass ? "👁️ बैनर चालू (हटाएं)" : "🙈 बैनर हटा हुआ (वापस लगाएं)"}
                </button>
                <button onClick={() => {
                  const b = prompt("1. ऊपर का छोटा बैज लिखें (जैसे: NEW या 50% OFF):", passBadge); if (b !== null && b.trim() !== "") setPassBadge(b.trim());
                  const t = prompt("2. मुख्य शीर्षक लिखें:", passTitle); if (t !== null && t.trim() !== "") setPassTitle(t.trim());
                  const btn = prompt("3. हरे बटन पर क्या लिखा हो? (जैसे: Get Pass या ₹199 में लें):", passBtn); if (btn !== null && btn.trim() !== "") setPassBtn(btn.trim());
                  const msg = prompt("4. बटन दबाने पर क्या संदेश दिखे?:", passMsg); if (msg !== null && msg.trim() !== "") setPassMsg(msg.trim());
                }} className="px-2.5 py-1 bg-amber-400 text-slate-950 font-black rounded text-xs">✏️ टेक्स्ट एडिट करें</button>
              </div>
            </div>
            <div className="text-[11px] text-cyan-200 font-bold">✅ बैनर के फ़ीचर्स (दबाकर हटाएं या नया जोड़ें):</div>
            <div className="flex flex-wrap gap-1.5 items-center">
              {passFeats.map((f, i) => (
                <button key={i} onClick={() => { if (confirm(f + " को बैनर से हटाएं?")) setPassFeats(passFeats.filter((_, idx) => idx !== i)); }} className="px-2 py-0.5 bg-white/15 hover:bg-rose-600 rounded text-[11px] font-bold">
                  ✓ {f} ✕
                </button>
              ))}
              <button onClick={() => { const nf = prompt("नया फ़ीचर लिखें (जैसे: Daily Current Affairs PDF):"); if (nf && nf.trim()) setPassFeats([...passFeats, nf.trim()]); }} className="px-2.5 py-0.5 bg-emerald-500 text-white font-black rounded text-[11px]">➕ फ़ीचर जोड़ें</button>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white border-2 border-amber-400 rounded-xl space-y-2.5 text-xs">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-700 pb-2">
              <span className="font-extrabold text-amber-300">⚖️ अंक व नेगेटिव मार्किंग सेटिंग (All Exams & Custom):</span>
              <button onClick={() => setNegEnabled(!negEnabled)} className={"px-2.5 py-1 rounded font-black text-[11px] " + (negEnabled ? "bg-rose-600 text-white" : "bg-emerald-600 text-white")}>
                {negEnabled ? "⚖️ Negative Marking: ON (हटाएं)" : "⚖️ Negative Marking: OFF (जोड़ें)"}
              </button>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-cyan-300">✅ 1 सही उत्तर के अंक (वर्तमान: +{posMark}):</div>
              <div className="flex flex-wrap gap-1.5">
                {[1, 2, 3, 4, 5].map((m) => (
                  <button key={m} onClick={() => setPosMark(m)} className={"px-2.5 py-1 rounded font-black text-xs " + (posMark === m ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-200")}>+{m}</button>
                ))}
                <button onClick={() => { const v = Number(prompt("1 सही उत्तर के लिए कस्टम अंक लिखें (जैसे 1, 2, 2.5, 4, 5):", String(posMark))); if (v > 0) setPosMark(v); }} className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded font-black text-xs">✏️ Custom Edit</button>
              </div>
            </div>
            {negEnabled && (
              <div className="space-y-1 pt-1 border-t border-slate-700">
                <div className="text-[11px] font-bold text-rose-300">❌ 1 गलत उत्तर पर कटौती (वर्तमान: -{negLabel}):</div>
                <div className="flex flex-wrap gap-1.5">
                  <button onClick={() => { setNegVal(0.20); setNegLabel("1/5 (0.20)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/5 (0.20)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/5 (0.20)</button>
                  <button onClick={() => { setNegVal(0.25); setNegLabel("1/4 (0.25)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/4 (0.25)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/4 (0.25)</button>
                  <button onClick={() => { setNegVal(1 / 3); setNegLabel("1/3 (0.33)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/3 (0.33)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/3 (0.33)</button>
                  <button onClick={() => { setNegVal(0.50); setNegLabel("1/2 (0.50)"); }} className={"px-2 py-1 rounded font-black text-[11px] " + (negLabel === "1/2 (0.50)" ? "bg-rose-600 text-white" : "bg-slate-700 text-slate-200")}>1/2 (0.50)</button>
                  <button onClick={() => { const cv = Number(prompt("गलत उत्तर पर कटने वाले अंक लिखें (जैसे 0.20, 0.25, 0.33, 0.50, 0.66, 1):", String(negVal))); if (cv >= 0) { setNegVal(cv); setNegLabel(String(cv)); } }} className="px-2 py-1 bg-amber-500 text-slate-950 rounded font-black text-[11px]">✏️ Custom Edit</button>
                </div>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
              <span className="text-[11px] font-bold text-amber-300">🌓 Test Screen Theme:</span>
              <button onClick={() => setExamTheme("AUTO")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "AUTO" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300")}>⏰ Auto IST (6AM–6PM)</button>
              <button onClick={() => setExamTheme("LIGHT")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "LIGHT" ? "bg-amber-400 text-slate-950" : "bg-slate-700 text-slate-300")}>☀️ White Mode</button>
              <button onClick={() => setExamTheme("DARK")} className={"px-2 py-0.5 rounded font-black text-[11px] " + (examTheme === "DARK" ? "bg-sky-600 text-white" : "bg-slate-700 text-slate-300")}>🌙 Dark Mode</button>
            </div>
          </div>
          <div className="p-3 bg-indigo-950 text-white border-2 border-indigo-400 rounded-xl flex flex-wrap justify-between items-center gap-2">
            <span className="font-extrabold text-xs text-amber-300">📱🖥️ Screen Layout Control (Mobile & Desktop):</span>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setEnableMobileView(!enableMobileView)} className={"px-2.5 py-1 rounded font-black text-xs " + (enableMobileView ? "bg-emerald-500 text-white" : "bg-slate-600 text-white")}>
                {enableMobileView ? "📱 Mobile App View: ON" : "📱 Mobile App View: OFF"}
              </button>
              <button onClick={() => setEnableDesktopView(!enableDesktopView)} className={"px-2.5 py-1 rounded font-black text-xs " + (enableDesktopView ? "bg-sky-500 text-white" : "bg-slate-600 text-white")}>
                {enableDesktopView ? "🖥️ Desktop / Tablet View: ON" : "🖥️ Desktop / Tablet View: OFF"}
              </button>
            </div>
          </div>
          {qReports.length > 0 && (
            <div className="p-3 bg-rose-950 text-white border-2 border-rose-400 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between items-center font-black text-amber-300">
                <span>⚠️ छात्रों की प्रश्न रिपोर्ट्स ({qReports.length}):</span>
                <button onClick={() => setQReports([])} className="px-2 py-0.5 bg-rose-700 rounded text-[10px]">सभी साफ़ करें</button>
              </div>
              {qReports.map((r: any) => (
                <div key={r.id} className="p-2.5 bg-slate-900 rounded-lg border border-rose-500/40 space-y-1">
                  <div className="font-extrabold text-amber-200">❓ प्रश्न: {r.qText}</div>
                  <div className="text-[11px] text-slate-300">विकल्प: {Array.isArray(r.opts) ? r.opts.join(" | ") : ""}</div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-black">
                    <span className="text-rose-400">❌ गलत बताया: {r.wrongOpt}</span>
                    <span className="text-emerald-400">✅ सही सुझाव: {r.correctOpt}</span>
                  </div>
                  {r.exp && <div className="text-[11px] text-cyan-200 bg-slate-800 p-1.5 rounded">📝 Explanation: {r.exp}</div>}
                </div>
              ))}
            </div>
          )}
        {allowAd && (
          <div className="p-3.5 bg-slate-900 text-white border-2 border-amber-400 rounded-2xl space-y-3 text-xs shadow-xl">
            <div className="font-black text-amber-300 text-sm">📢 Pro Ad Campaign & Smart Scheduler</div>
            <div className="flex flex-wrap gap-1.5">
              {["POPUP", "SPIN", "TIMER", "BANNER"].map((t) => (
                <button key={t} onClick={() => setAdType(t)} className={"px-2.5 py-1 rounded-lg font-black text-[11px] " + (adType === t ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-white")}>
                  {t === "SPIN" ? "🎡 SPIN" : t === "TIMER" ? "⏳ TIMER" : t === "BANNER" ? "🪧 BANNER" : "💬 POPUP"}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <input value={adTitle} onChange={(e) => setAdTitle(e.target.value)} placeholder="विज्ञापन शीर्षक (Title)..." className="p-2 rounded-lg bg-slate-800 border border-slate-600 text-white font-bold" />
              <input value={adDesc} onChange={(e) => setAdDesc(e.target.value)} placeholder="विवरण (Description)..." className="p-2 rounded-lg bg-slate-800 border border-slate-600 text-white" />
            </div>
            <div className="space-y-2 pt-1 border-t border-slate-700">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-cyan-300 text-[11px]">📐 साइज़:</span>
                {[{ id: "SMALL", name: "📏 छोटी पट्टी" }, { id: "MEDIUM", name: "🖼️ मध्यम" }, { id: "LARGE", name: "📸 बड़ा पोस्टर" }, { id: "FULL", name: "🖥️ फुल स्क्रीन" }].map((s) => (
                  <button key={s.id} onClick={() => { setAdSize(s.id); setAdCustomW(""); setAdCustomH(""); }} className={"px-2 py-1 rounded-lg font-black text-[11px] " + (adSize === s.id ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300")}>
                    {s.name}
                  </button>
                ))}
                <button onClick={() => setAdSize(adSize === "CUSTOM" ? "MEDIUM" : "CUSTOM")} className={"px-2.5 py-1 rounded-lg font-black text-[11px] border " + (adSize === "CUSTOM" ? "bg-cyan-500 text-slate-950 border-cyan-300" : "bg-slate-800 text-cyan-300 border-cyan-700")}>
                  ✏️ Custom Size
                </button>
              </div>
              {adSize === "CUSTOM" && (
                <div className="p-2.5 bg-slate-950/90 border border-cyan-500/60 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold text-cyan-300">
                    <span>🎛️ Custom Dimension Studio (चौड़ाई और ऊंचाई)</span>
                    <button onClick={() => { setAdCustomW(""); setAdCustomH(""); }} className="text-rose-400 underline">रीसेट</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input value={adCustomW} onChange={(e) => setAdCustomW(e.target.value)} placeholder="चौड़ाई (जैसे 360px)" className="w-full p-1.5 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold" />
                    <input value={adCustomH} onChange={(e) => setAdCustomH(e.target.value)} placeholder="ऊंचाई (जैसे 480px)" className="w-full p-1.5 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold" />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[{ l: "1:1 Square", w: "360px", h: "360px" }, { l: "4:5 Portrait", w: "360px", h: "450px" }, { l: "9:16 Story", w: "340px", h: "580px" }].map((pr) => (
                      <button key={pr.l} onClick={() => { setAdCustomW(pr.w); setAdCustomH(pr.h); }} className="px-2 py-0.5 bg-slate-800 text-cyan-200 rounded text-[10px] font-bold border border-slate-700">
                        {pr.l}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
           <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700">
              <span className="font-bold text-emerald-300 text-[11px]">🔢 प्रतिदिन कितनी बार दिखे:</span>
              {[1, 2, 3, 5, 10].map((n) => (
                <button key={n} onClick={() => setAdMaxDaily(n)} className={"px-2 py-0.5 rounded font-black text-[11px] " + (adMaxDaily === n ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-white")}>
                  {n} बार
                </button>
              ))}
              <button onClick={() => { const c = Number(prompt("प्रतिदिन कितनी बार दिखाना है?", String(adMaxDaily))); if (c >= 1) setAdMaxDaily(c); }} className="px-2 py-0.5 bg-slate-700 rounded text-[11px] font-bold">✏️ Custom</button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-amber-300 text-[11px]">⏰ समय स्लॉट:</span>
              {[{ id: "ALL", n: "पूरा दिन" }, { id: "8AM", n: "8:00 AM" }, { id: "10AM", n: "10:00 AM" }, { id: "EVENING", n: "शाम (5-9 PM)" }].map((sl) => (
                <button key={sl.id} onClick={() => setAdTimeSlot(sl.id)} className={"px-2 py-0.5 rounded font-black text-[11px] " + (adTimeSlot === sl.id ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-white")}>
                  {sl.n}
                </button>
              ))}
              <button onClick={() => { const cs = prompt("घंटे लिखें (जैसे 9-12 या 18-22):", adTimeSlot); if (cs) setAdTimeSlot(cs); }} className="px-2 py-0.5 bg-slate-700 rounded text-[11px] font-bold">✏️ Custom Time</button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-rose-300 text-[11px]">📅 तारीख से:</span>
              <input type="date" value={adStartDate} onChange={(e) => setAdStartDate(e.target.value)} className="p-1 rounded bg-slate-800 border border-slate-600 text-white text-[11px]" />
              <span className="font-bold text-rose-300 text-[11px]">तक:</span>
              <input type="date" value={adEndDate} onChange={(e) => setAdEndDate(e.target.value)} className="p-1 rounded bg-slate-800 border border-slate-600 text-white text-[11px]" />
            </div>
            <div className="space-y-2 pt-1 border-t border-slate-700">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-cyan-300 text-[11px]">🎯 क्लिक करने पर कहाँ जाए:</span>
                <button onClick={() => setAdTargetMode("EXAM")} className={"px-2.5 py-1 rounded-lg font-black text-[11px] " + (adTargetMode === "EXAM" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-white")}>📚 परीक्षा चुनें (Category / Sub)</button>
                <button onClick={() => setAdTargetMode("LINK")} className={"px-2.5 py-1 rounded-lg font-black text-[11px] " + (adTargetMode === "LINK" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-white")}>🔗 कस्टम लिंक (URL)</button>
              </div>
              {adTargetMode === "EXAM" ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-2 bg-slate-950/90 border border-cyan-500/50 rounded-xl">
                  <select value={adTargetCat} onChange={(e) => { const c = e.target.value; setAdTargetCat(c); const subs = examTree[c] ? examTree[c] : []; if (subs.length > 0) setAdTargetSub(subs.at(0)); }} className="p-1.5 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold">
                    {Object.keys(examTree).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <select value={adTargetSub} onChange={(e) => setAdTargetSub(e.target.value)} className="p-1.5 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold">
                    {(examTree[adTargetCat] ? examTree[adTargetCat] : []).map((sub: string) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                  <select value={adTargetSec} onChange={(e) => setAdTargetSec(e.target.value)} className="p-1.5 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold">
                    {examSections.map((sec: string) => (
                      <option key={sec} value={sec}>{sec}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <input value={adLink} onChange={(e) => setAdLink(e.target.value)} placeholder="https://..." className="w-full p-2 rounded-lg bg-slate-800 border border-cyan-700 text-white text-xs font-bold" />
              )}
            </div>
            <button onClick={() => { setAdVer(adVer + 1); setPopupOpen(true); setAdHideToday(false); alert("🚀 नया विज्ञापन लाइव हो गया! (प्रतिदिन अधिकतम " + adMaxDaily + " बार दिखेगा)"); }} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-black shadow">🚀 नया विज्ञापन लाइव करें (सभी छात्रों को 1 बार नया दिखेगा)</button>
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
