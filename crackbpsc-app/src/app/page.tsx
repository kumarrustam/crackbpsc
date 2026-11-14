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
