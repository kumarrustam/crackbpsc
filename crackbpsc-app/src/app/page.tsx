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
  const [adVer, setAdVer] = useState<number>(1);
  const [spinDeg, setSpinDeg] = useState<number>(0);
  const [spinWon, setSpinWon] = useState<string>("");
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
  }, []);
  useEffect(() => {
    const payload = {
      staffList, deletedStaff, catOrder, hiddenCats, showPass, passBadge, passTitle, passBtn, passMsg, passFeats,
      writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel,
      examTimers, testMins, liveTests, regLiveIds, adType, adTitle, adDesc, adSize, adCustomW, adCustomH,
      adMaxDaily, adTimeSlot, adStartDate, adEndDate, adTargetMode, adTargetCat, adTargetSub, adTargetSec,
      adLink, adVer, bulkText, examQLimits
    };
    localStorage.setItem("cb_master_cfg_v1", JSON.stringify(payload));
  }, [
    staffList, deletedStaff, catOrder, hiddenCats, showPass, passBadge, passTitle, passBtn, passMsg, passFeats,
    writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel,
    examTimers, testMins, liveTests, regLiveIds, adType, adTitle, adDesc, adSize, adCustomW, adCustomH,
    adMaxDaily, adTimeSlot, adStartDate, adEndDate, adTargetMode, adTargetCat, adTargetSub, adTargetSec,
    adLink, adVer, bulkText, examQLimits
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

        const res = await fetch("https://supabase.co", {
          headers: {
            apikey: "sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go",
            Authorization: "Bearer sb_publishable_rHzmx1vhZtb64ibnpImGUA_Tq1oj1go"
          }
        });
        const rows = await res.json();
        if (Array.isArray(rows) && rows.length > 0 && rows.at(0).data) {
          const d = rows.at(0).data;
          if (d.questions) setQuestions(d.questions);
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
          examTimers
        }})
      });
    } catch (e) {}
  }, [isLoaded, questions, staffList, examTree, examSections, subjects, deletedQs, deletedStaff, liveTests, regLiveIds, showPass, passBadge, passTitle, passBtn, passMsg, passFeats, writerPass, modPass, adPass, enableMobileView, enableDesktopView, posMark, negEnabled, negVal, negLabel, examTheme, qReports, catOrder, hiddenCats, geminiKey, examTimers]);
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
  if (inExam) {
    const activeList = examQs.length > 0 ? examQs : questions;
    const q = activeList[qIdx];
    let right = 0, wrong = 0, skipped = 0;
activeList.forEach((item, i) => { if (ans[i] === undefined) skipped++; else if (ans[i] === item.correct) right++; else wrong++; });
    const posTotal = right * activePosMark;
    const negTotal = activeNegEnabled ? wrong * activeNegVal : 0;
    const score = (posTotal - negTotal).toFixed(2);
    return (
      <div className="min-h-screen bg-slate-200 text-slate-950 p-4">
  <div className="max-w-3xl mx-auto bg-white text-slate-950 rounded-2xl border-2 border-slate-300 shadow-lg p-5 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <div className="flex flex-wrap items-center gap-1.5"><h2 className="font-bold text-blue-700">{goal}</h2><span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded text-[10px] font-black">+{activePosMark} | {activeNegEnabled ? "-" + activeNegLabel + " Neg" : "No Negative"}</span></div>
            {!submitted ? <button onClick={() => setSubmitted(true)} className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Submit</button> : <button onClick={() => { setInExam(false); setSubmitted(false); }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Home</button>}
          </div>
          {submitted ? (
            <div className="space-y-3">
            <div className="p-4 bg-amber-100 border-2 border-amber-400 rounded-xl text-slate-950 font-black">🏆 कुल स्कोर: {score} / {questions.length}</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-extrabold">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">✅ सही: {right} (+{posTotal.toFixed(2)})</div>
              <div className="bg-rose-600 text-white p-2 rounded-lg">❌ गलत: {wrong} (-{negTotal.toFixed(2)})</div>
              <div className="bg-slate-600 text-white p-2 rounded-lg">⏭️ छोड़े: {skipped}</div>
              <div className="bg-indigo-700 text-white p-2 rounded-lg">🏆 कुल स्कोर: {score}</div>
            </div>
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
                      <button onClick={() => {
                        const msg = "🏆 CrackBPSC Scorecard (" + selSubExam + ")\n📊 Score: " + score + " | Accuracy: " + myPct + "% | Percentile: " + pctRank + "%ile\n💪 Strongest: " + (strongest ? strongest.sub : "GS") + "\n⏱️ Time: " + Math.floor(yourSec / 60) + "m " + (yourSec % 60) + "s\n👉 Test दें: https://vercel.app";
                        navigator.clipboard.writeText(msg);
                        alert("📲 Topper Scorecard कॉपी हो गया!");
                      }} className="w-full py-2 bg-amber-400 text-slate-950 rounded-xl font-black text-xs shadow">📲 1-Click Shareable Topper Scorecard कॉपी करें</button>
                    </div>
                  </div>
                );
              })()}
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
              <div className="p-3 sm:p-4 space-y-3">
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
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-600 space-y-2.5 text-xs">
                    <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5">
                      {activeList.map((_: any, i: number) => (
                        <button key={i} onClick={() => { setQIdx(i); setQSec(0); setShowPalette(false); }} className={"py-1.5 rounded font-black text-xs " + (ans[i] !== undefined ? "bg-emerald-600 text-white" : markedQs.includes(i) ? "bg-purple-600 text-white" : i === qIdx ? "bg-sky-500 text-white" : "bg-slate-700 text-slate-300")}>{i + 1}</button>
                      ))}
                    </div>
                    <button onClick={() => { setShowPalette(false); setSubmitted(true); }} className="w-full py-2 bg-emerald-600 text-white rounded-lg font-black text-xs">✅ Submit Test (अंतिम सबमिट करें)</button>
                  </div>
                )}
                <p className="font-extrabold text-sm sm:text-base leading-relaxed">{examLang === "HI" ? q.q.split(" / ").at(0) : examLang === "EN" ? (q.q.split(" / ").at(1) ? q.q.split(" / ").at(1) : q.q) : q.q}</p>

                <div className="space-y-2">
                  {q.opts.map((o: any, idx: number) => (
                    <div key={idx} onClick={() => setAns({ ...ans, [qIdx]: idx })} className={"p-3 rounded-xl border-2 cursor-pointer flex items-center gap-3 text-xs sm:text-sm font-bold transition " + (ans[qIdx] === idx ? "border-sky-500 bg-sky-500/20" : ((examTheme === "DARK" ? true : examTheme === "LIGHT" ? false : (new Date().getHours() >= 18 ? true : new Date().getHours() < 6)) ? "border-slate-700 bg-[#22252C]" : "border-slate-200 bg-slate-50"))}>
                      <span className={"w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 " + (ans[qIdx] === idx ? "bg-sky-500 text-white" : "bg-slate-600 text-white")}>{idx + 1}</span>
                      <span>{examLang === "HI" ? o.split(" / ").at(0) : examLang === "EN" ? (o.split(" / ").at(1) ? o.split(" / ").at(1) : o) : o}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-700/50 grid grid-cols-3 gap-2 text-xs font-black">
                  <button onClick={() => { if (!markedQs.includes(qIdx)) setMarkedQs([...markedQs, qIdx]); setQIdx((qIdx + 1) % activeList.length); setQSec(0); }} className="py-2.5 rounded-xl bg-slate-700 text-white">Mark & Next</button>
                  <button onClick={() => { const na = { ...ans }; delete na[qIdx]; setAns(na); }} className="py-2.5 rounded-xl bg-slate-600 text-white">Clear</button>
                  <button onClick={() => { setQIdx((qIdx + 1) % activeList.length); setQSec(0); }} className="py-2.5 rounded-xl bg-sky-500 text-white">Save & Next</button>
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
          <div className={(enableDesktopView ? (enableMobileView ? "max-w-md md:max-w-7xl " : "max-w-7xl ") : "max-w-md ") + "mx-auto p-3 sm:p-5 space-y-4"}>
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
          {showLive && (
<div className="p-4 bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white rounded-xl border-2 border-rose-500 shadow space-y-2.5">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/15 pb-1.5">
              <span className="font-extrabold text-sm text-amber-300">🔴 All-India Live & Upcoming Tests (Pre-Registration)</span>
              <span className="text-[10px] bg-rose-600 px-2 py-0.5 rounded-full font-bold">सीट पक्की करें</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {liveTests.map((lt: any) => {
                const isReg = regLiveIds.includes(lt.id);
                return (
                  <div key={lt.id} className="p-3 bg-white/10 border border-white/20 rounded-lg space-y-1.5">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-extrabold text-xs text-white">{lt.title}</span>
                      <span className={"px-2 py-0.5 rounded text-[10px] font-black shrink-0 " + (lt.isLive ? "bg-rose-600 text-white animate-pulse" : "bg-amber-400 text-slate-950")}>
                        {lt.isLive ? "🔴 LIVE NOW" : "⏳ UPCOMING"}
                      </span>
                    </div>
                    <div className="text-[11px] text-indigo-200">🏛️ {lt.cat} › {lt.subEx} | ⏱️ {lt.duration} मिनट</div>
                    <div className="text-[11px] font-bold text-amber-300">📅 {lt.startsIn}</div>
                    {lt.isLive ? (
                      <button onClick={() => { const ltQs = questions.filter((q: any) => (q.liveIds ? q.liveIds.includes(lt.id) : false)); if (ltQs.length === 0) { alert("⚠️ इस Live Test में अभी प्रश्न नहीं जोड़े गए हैं!"); return; } setExamQs(ltQs); setGoal(lt.title); setQIdx(0); setAns({}); setSubmitted(false); setInExam(true); }} className="w-full py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded text-xs">▶️ अभी Live Test शुरू करें ({questions.filter((q: any) => (q.liveIds ? q.liveIds.includes(lt.id) : false)).length} Qs)</button>
                    ) : (
                      <button onClick={() => {
                        if (isReg) { setRegLiveIds(regLiveIds.filter((id) => id !== lt.id)); }
                        else { setRegLiveIds([...regLiveIds, lt.id]); alert("✅ " + lt.title + " के लिए आपका रजिस्ट्रेशन पक्का हो गया है!"); }
                      }} className={"w-full py-1.5 font-black rounded text-xs " + (isReg ? "bg-emerald-600 text-white" : "bg-amber-400 text-slate-950")}>
                        {isReg ? "✅ Registered (सीट पक्की — रद्द करने के लिए दबाएं)" : "🎟️ निःशुल्क Register करें (Remind Me)"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          )}
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
          <div className="p-4 bg-white rounded-xl border shadow-sm space-y-2.5">
            <div className="font-extrabold text-sm text-indigo-950">🏛️ 1. परीक्षा बोर्ड / Category चुनें:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.keys(examTree)
        .filter((c) => !hiddenCats.includes(c))
        .sort((a, b) => (catOrder.indexOf(a) === -1 ? 999 : catOrder.indexOf(a)) - (catOrder.indexOf(b) === -1 ? 999 : catOrder.indexOf(b)))
        .map((cat) => (
                <button key={cat} onClick={() => { setSelCat(cat); const first = examTree[cat] ? examTree[cat].at(0) : ""; setSelSubExam(first); setGoal(first); }} className={"p-3 rounded-xl font-extrabold text-xs border text-left flex justify-between items-center " + (selCat === cat ? "bg-indigo-700 text-white border-indigo-800 shadow" : "bg-slate-50 text-slate-900 border-slate-200")}><span>🏛️ {cat}</span><span className="text-[10px] opacity-80">{examTree[cat] ? examTree[cat].length : 0} Exams ›</span></button>
              ))}
            </div>
            <div className="font-extrabold text-xs text-purple-950 pt-1">🎯 2. उप-परीक्षा / Sub-Category चुनें ({selCat}):</div>
            <div className="flex flex-wrap gap-1.5">
              {(examTree[selCat] || []).map((subEx: string) => (
                <button key={subEx} onClick={() => { setSelSubExam(subEx); setGoal(subEx); }} className={"px-2.5 py-1 rounded-lg font-bold text-xs border " + (selSubExam === subEx ? "bg-purple-700 text-white" : "bg-purple-50 text-purple-950")}>{subEx}</button>
              ))}
            </div>
            <div className="font-extrabold text-xs text-amber-950 pt-1">📂 3. टेस्ट सेक्शन चुनें ({examSections.length} Sections):</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {examSections.map((sec) => (
                <button key={sec} onClick={() => setSelSection(sec)} className={"p-2 rounded-lg font-extrabold text-xs border text-left " + (selSection === sec ? "bg-amber-600 text-white border-amber-700" : "bg-amber-50 text-amber-950 border-amber-200")}>
                  📑 {sec}
                </button>
              ))}
            </div>
          <div className="bg-white p-5 rounded-xl border shadow-sm space-y-3">
          <h2 className="font-extrabold text-base">{goal}</h2>
          <button
            onClick={() => {
              const matched = questions.filter((q: any) => q.cat === selCat && q.subEx === selSubExam && q.sec === selSection);
              if (matched.length === 0) {
                alert("⚠️ इस सेक्शन में अभी कोई प्रश्न नहीं है!");
                return;
              }
              setActiveList(matched);
              setQIdx(0);
              setQSec(0);
              const savedMin = examTimers[selCat + "_" + selSubExam + "_" + selSection];
              setTotalSec(savedMin ? savedMin * 60 : matched.length * 60);
              setAns({});
              setMarkedQs([]);
              setSubmitted(false);
              setActivePosMark(posMark);
              setActiveNegEnabled(negEnabled);
              setActiveNegVal(negVal);
              setActiveNegLabel(negLabel);
              setInExam(true);
            }}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-black text-sm shadow-lg"
          >
            🎯 CBT परीक्षा शुरू करें →
          </button>
        </div>
      </div>
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
                        prompt: "Generate BPSC MCQs on: " + aiTopic + " (max 25 questions per batch). Return ONLY a valid JSON array without markdown: [{\"q\":\"Hindi / English\",\"opts\":[\"A\",\"B\",\"C\",\"D\",\"E\"],\"correct\":0,\"exp\":\"Detailed Explanation in Hindi & English\"}]"
                      })
                    });
                    const data = await res.json();
                    if (!res.ok) {
                      alert("❌ Google AI त्रुटि: " + (data.error ? data.error.message : "Key जांचें"));
                      setAiLoading(false);
                      return;
                    }
                    const raw = data.candidates.at(0).content.parts.at(0).text.replace(/`json|```/g, "").trim();
                    const arr = JSON.parse(raw);
                    const formatted = arr.map((item: any, idx: number) => ({
                      id: Date.now() + idx,
                      cat: selCat,
                      subEx: selSubExam,
                      sec: selSection,
                      sub: "सामान्य अध्ययन",
                      type: "STD",
                      q: item.q,
                      opts: item.opts,
                      correct: item.correct,
                      exp: item.exp
                    }));
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
            const p = "Generate 25 Bilingual (Hindi + English) Parallel Match-the-Following (कूट और मिलान) MCQs for " + selSubExam + ". Create a Parallel Vertical Table with List-I (A, B, C, D, E) on left and List-II (1, 2, 3, 4, 5) on right. Follow exact format:\nQ1. सूची-I को सूची-II से सुमेलित कीजिए / Match List-I with List-II:\nसूची-I / List-I | सूची-II / List-II\nA. [Item 1 Hindi/Eng] | 1. [Match 1 Hindi/Eng]\nB. [Item 2 Hindi/Eng] | 2. [Match 2 Hindi/Eng]\nC. [Item 3 Hindi/Eng] | 3. [Match 3 Hindi/Eng]\nD. [Item 4 Hindi/Eng] | 4. [Match 4 Hindi/Eng]\nE. [Item 5 Hindi/Eng] | 5. [Match 5 Hindi/Eng]\n(A) A-1, B-2, C-3, D-4, E-5\n(B) A-2, B-1, C-4, D-3, E-5\n(C) A-3, B-4, C-1, D-2, E-5\n(D) A-4, B-3, C-2, D-1, E-5\n(E) उपर्युक्त में से कोई नहीं / एक से अधिक\nAns: A\nExp: [Detailed Bilingual Explanation]";
            navigator.clipboard.writeText(p);
            alert("🔗 पैरेलल कूट-मिलान (List-I vs List-II) Prompt कॉपी हो गया! अब Gemini में पेस्ट करें।");
          }} className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded-lg font-black text-[11px]">🔗 पैरेलल कूट-मिलान Prompt</button>
          <button onClick={() => {
            const p = "Generate 30 Mixed Bilingual (Hindi + English) MCQs for " + selSubExam + " including Normal, Assertion-Reason (कथन-कारण), and Parallel Table Match-the-Following (सूची-I A,B,C,D,E | सूची-II 1,2,3,4,5) with 4 or 5 options (A to E), Ans: and Exp: in Hindi & English.";
            navigator.clipboard.writeText(p);
            alert("🌟 ऑल-इन-वन मिक्स (Bilingual) Prompt कॉपी हो गया!");
          }} className="px-2.5 py-1 bg-rose-600 text-white rounded-lg font-black text-[11px]">🌟 All-in-One Combo</button>
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
            const added: any[] = [];
            blocks.forEach((b, i) => {
              const lines = b.split("\n").map((l) => l.trim()).filter((x) => x.length > 0);
              if (lines.length < 3) return;
              const optRe = /^[\(\[\{]?([A-Ha-h]|[1-8]|[क-ञ])[\)\]\}\.\:\-]\s*(.+)$/;
              const ansRe = /^(?:Ans|Answer|Correct|Correct Answer|उत्तर|सही उत्तर)\s*[\:\-\=\.]?\s*[\(\[]?([A-Ha-h1-8क-ञ])/i;
              const expRe = /^(?:Exp|Explanation|Solution|व्याख्या|हल|विवरण)\s*[\:\-\=\.]?\s*(.*)$/i;
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
                  expText = expText + " " + ln;
                } else if (om && om.at(2) && idx > 0 && !ln.includes("|")) {
                  opts.push((om.at(2) as string).trim());
                } else if (opts.length === 0) {
                  qLines.push(idx === 0 ? ln.replace(/^(?:Q|Que|Question|प्रश्न|प्र\.|प्र)\s*\d*[\.\:\)\-]\s*|^\d+[\.\)]\s+/i, "") : ln);
                }
              });
              if (qLines.length > 0 && opts.length >= 2) {
                const mapAns: any = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "क": 0, "ख": 1, "ग": 2, "घ": 3, "ङ": 4 };
                const cIdx = mapAns[rawAns] !== undefined ? mapAns[rawAns] : 0;
                const fullQ = qLines.join("\n");
                const low = fullQ.toLowerCase();
                const qType = low.includes("कथन") ? "AR" : low.includes("assertion") ? "AR" : fullQ.includes("|") ? "MATCH" : low.includes("सूची") ? "MATCH" : low.includes("list-i") ? "MATCH" : "STD";
                added.push({
                  id: Date.now() + i,
                  cat: selCat,
                  subEx: selSubExam,
                  sec: selSection,
                  sub: newSub,
                  type: qType,
                  q: fullQ,
                  opts: opts,
                  correct: cIdx,
                  exp: expText.trim()
                });
              }
            });
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
                  setQuestions([...questions, { id: Date.now(), subject: newSub, text: baseQ, opts: combinedOpts, correct: correctIdx, exp: combinedExp, tags: [autoTag], liveIds: lIds }]);
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
