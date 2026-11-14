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
