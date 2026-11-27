
export const SOUNDS_10 = [
  { id: "snd_1", name: "1. गोल्डन ट्रॉफ़ी झंकार", wave: "triangle" as OscillatorType, notes: new Array(523, 659, 784, 1046), step: 0.11 },
  { id: "snd_2", name: "2. शाही विजय बिगुल", wave: "sawtooth" as OscillatorType, notes: new Array(523, 523, 659, 587, 784), step: 0.14 },
  { id: "snd_3", name: "3. जादुई सितारा-फुलझड़ी", wave: "sine" as OscillatorType, notes: new Array(523, 659, 784, 1046, 1318), step: 0.07 },
  { id: "snd_4", name: "4. ग्रैंड विजय घंटी", wave: "sine" as OscillatorType, notes: new Array(440, 554, 659, 880), step: 0.16 },
  { id: "snd_5", name: "5. सुपर लेवल-अप पॉप", wave: "square" as OscillatorType, notes: new Array(494, 659, 784, 988, 1318), step: 0.08 },
  { id: "snd_6", name: "6. सुरीली बाँसुरी तान", wave: "sine" as OscillatorType, notes: new Array(523, 587, 659, 784, 1046), step: 0.13 },
  { id: "snd_7", name: "7. डायमंड कॉइन शावर", wave: "triangle" as OscillatorType, notes: new Array(988, 1318, 988, 1318, 1568), step: 0.08 },
  { id: "snd_8", name: "8. ओलंपिक पोडियम सलामी", wave: "triangle" as OscillatorType, notes: new Array(392, 523, 659, 784, 1046), step: 0.12 },
  { id: "snd_9", name: "9. बबल-पॉप सेलिब्रेशन", wave: "sine" as OscillatorType, notes: new Array(659, 880, 1175, 1568), step: 0.09 },
  { id: "snd_10", name: "10. आतिशबाज़ी ग्रैंड फिनाले", wave: "sawtooth" as OscillatorType, notes: new Array(523, 659, 784, 1046, 1568), step: 0.07 }
];

export const ALL_PATTERNS = [
  { id: "STANDARD", label: "1. साधारण (Standard)", desc: "Direct Factual MCQ" },
  { id: "ASSERTION", label: "2. कथन-कारण (A & R)", desc: "Assertion (A) and Reason (R)" },
  { id: "MATCHING", label: "3. कूट-मिलान (List I-II)", desc: "Match List-I with List-II" },
  { id: "ORDERING", label: "4. क्रम सजाएं (पूर्व-पश्चिम)", desc: "East-to-West / Chronological Ordering" },
  { id: "STATEMENT", label: "5. बहु-कथन (1, 2 और 3)", desc: "Multi-statement question" },
  { id: "PAIRS", label: "6. युग्म मिलान (केवल 1/2)", desc: "How many pairs are matched" },
  { id: "NOT_CORRECT", label: "7. असत्य पहचानें", desc: "Find INCORRECT statement" },
  { id: "CONCEPTUAL", label: "8. अवधारणात्मक", desc: "Conceptual & Analytical question" }
];

export const NEG_MODES = [
  { id: "BPSC_UNATTEMPTED_1_3", label: "BPSC नियम: गलत पर -1/3 + बिना 'अनुत्तरित प्रश्न' चुने छोड़ने पर भी -1/3" },
  { id: "STD_1_3", label: "सामान्य नेगेटिव: गलत पर -1/3 (छोड़ने पर 0)" },
  { id: "STD_1_4", label: "सामान्य नेगेटिव: गलत पर -1/4 (छोड़ने पर 0)" },
  { id: "NONE", label: "कोई नेगेटिव मार्किंग नहीं (0)" }
];
