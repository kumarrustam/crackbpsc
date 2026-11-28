export interface ExamCategoryItem {
  id: string;
  label: string;
  count: number;
  freeCount?: number;
  tab: "MOCK" | "PYP";
  subTopics: { id: string; title: string; count: number }[];
}

export interface ExamBlueprint {
  id: string;
  matchKeys: string[];
  group: "BPSC" | "TEACHING" | "BSSC_STATE" | "UPSC_PCS" | "RAILWAY" | "BANKING";
  name: string;
  shortName: string;
  hasPicker: boolean;
  pickerLabel: string;
  totalTests: number;
  freeTests: number;
  durationMins: number;
  totalQs: number;
  maxMarks: number;
  posMark: number;
  negMark: number;
  unansNeg: number;
  hasOpt5: boolean;
  subjects: string[];
  sections: { name: string; qsCount: number; qualifying?: string }[];
  categories: ExamCategoryItem[];
  instructions: string[];
}

export const PGT_30_SUBJECTS = [
  "All", "Zoology (जन्तु विज्ञान)", "Botany (वनस्पति विज्ञान)", "Chemistry (रसायन शास्त्र)", "Mathematics (गणित)", "Physics (भौतिकी)",
  "Economics (अर्थशास्त्र)", "Geography (भूगोल)", "History (इतिहास)", "Home Science (गृह विज्ञान)", "Music (संगीत)",
  "Philosophy (दर्शनशास्त्र)", "Political Science (राजनीति विज्ञान)", "Psychology (मनोविज्ञान)", "Sociology (समाजशास्त्र)",
  "Accountancy (एकाउंटेंसी)", "Business Studies (बिजनेस स्टडीज)", "Entrepreneurship (एंटरप्रेन्योरशिप)",
  "Arabic (अरबी)", "Bangla (बांग्ला)", "Bhojpuri (भोजपुरी)", "Computer Science (कंप्यूटर साइंस)", "English (अंग्रेजी)",
  "Hindi (हिन्दी)", "Magahi (मगही)", "Maithili (मैथिली)", "Pali (पाली)", "Persian (फारसी)", "Prakrit (प्राकृत)", "Sanskrit (संस्कृत)", "Urdu (उर्दू)"
];

export const TGT_16_SUBJECTS = [
  "All", "Hindi (हिन्दी)", "Bangla (बांग्ला)", "Urdu (उर्दू)", "Sanskrit (संस्कृत)", "Arabic (अरबी)", "Persian (फारसी)",
  "English (अंग्रेजी)", "Science (विज्ञान)", "Mathematics (गणित)", "Social Science (सामाजिक विज्ञान)",
  "Fine Arts (ललित कला)", "Dance (नृत्य)", "Physical Education (शारीरिक शिक्षा)", "Maithili (मैथिली)", "Music (संगीत)", "Computer (कंप्यूटर)"
];

export const MIDDLE_6_SUBJECTS = [
  "All", "Mathematics & Science (गणित एवं विज्ञान)", "Social Science (सामाजिक विज्ञान)",
  "Hindi (हिन्दी)", "English (अंग्रेजी)", "Sanskrit (संस्कृत)", "Urdu (उर्दू)"
];

export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  {
    id: "bpsc_72", matchKeys: ["bpsc", "72वीं", "71वीं", "cce"], group: "BPSC", name: "72वीं BPSC CCE (Prelims) Mock Test Series 2026", shortName: "72वीं BPSC CCE",
    hasPicker: false, pickerLabel: "", totalTests: 650, freeTests: 6, durationMins: 120, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true,
    subjects: [], sections: [{ name: "सामान्य अध्ययन (150 Qs)", qsCount: 150 }],
    categories: [
      { id: "LIVE", label: "Live Test (All-Bihar)", count: 4, freeCount: 4, tab: "MOCK", subTopics: [{ id: "l1", title: "Weekly Live", count: 4 }] },
      { id: "CA_SPEC", label: "🔥 Special Bihar Current Affairs", count: 15, freeCount: 2, tab: "MOCK", subTopics: [{ id: "bc1", title: "Bihar Budget & Survey", count: 8 }, { id: "bc2", title: "Bihar Monthly", count: 7 }] },
      { id: "FULL_NEW", label: "New Full Test (150 Qs)", count: 12, freeCount: 2, tab: "MOCK", subTopics: [{ id: "fn1", title: "72वीं BPSC Pattern", count: 12 }] },
      { id: "CHAPTER_NEW", label: "New Chapter Test (GS)", count: 145, freeCount: 3, tab: "MOCK", subTopics: [{ id: "anc", title: "प्राचीन भारत", count: 25 }, { id: "mod", title: "आधुनिक इतिहास", count: 40 }, { id: "bih", title: "बिहार स्पेशल", count: 45 }, { id: "sci", title: "सामान्य विज्ञान", count: 35 }] },
      { id: "NCERT", label: "Chapter Test (NCERT Based)", count: 95, freeCount: 2, tab: "MOCK", subTopics: [{ id: "nc1", title: "Class 6–12 NCERT", count: 95 }] },
      { id: "SUBJECT", label: "Subject Test (GS)", count: 48, freeCount: 1, tab: "MOCK", subTopics: [{ id: "his", title: "इतिहास", count: 16 }, { id: "pol", title: "राजव्यवस्था", count: 16 }, { id: "eco", title: "अर्थव्यवस्था", count: 16 }] },
      { id: "FULL", label: "Full Test", count: 30, tab: "MOCK", subTopics: [{ id: "f1", title: "Standard Full Mocks", count: 30 }] },
      { id: "PYP", label: "Previous Year Paper (60वीं–71वीं)", count: 18, freeCount: 2, tab: "PYP", subTopics: [{ id: "p1", title: "Official Papers", count: 18 }] },
      { id: "PYST", label: "45 PYST (Topic-Wise PYQs)", count: 45, tab: "PYP", subTopics: [{ id: "ps1", title: "BPSC Topic PYQs", count: 45 }] }
    ],
    instructions: [
      "कुल 150 प्रश्न (150 अंक) और समय 120 मिनट (2 घंटे) है।",
      "प्रत्येक प्रश्न के 5 विकल्प (1–4 और 5. अनुत्तरित) हैं। सही पर +1.0 और गलत पर -0.33 अंक कटेगा।",
      "यदि प्रश्न हल नहीं करना चाहते तो 5वाँ विकल्प 'अनुत्तरित (Unanswered)' चुनना अनिवार्य है, अन्यथा 1/3 (-0.33) अंक कटेगा।"
    ]
  },
  {
    id: "bpsc_tre4_pgt", matchKeys: ["tre", "pgt", "11-12", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 बिहार उच्च माध्यमिक शिक्षक भर्ती (PGT 11–12)", shortName: "BPSC TRE 4.0 PGT (30 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 720, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true,
    subjects: PGT_30_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (GS)", count: 125, freeCount: 2, tab: "MOCK", subTopics: [{ id: "anc", title: "प्राचीन भारत", count: 15 }, { id: "med", title: "मध्यकालीन भारत", count: 12 }, { id: "mod", title: "राष्ट्रीय आंदोलन", count: 30 }] },
      { id: "SUBJECT_GS", label: "सब्जेक्ट टेस्ट (GS)", count: 22, tab: "MOCK", subTopics: [{ id: "ca", title: "करेंट अफेयर्स", count: 8 }, { id: "reas", title: "मानसिक योग्यता", count: 7 }, { id: "sci", title: "विज्ञान", count: 7 }] },
      { id: "LANG", label: "भाषा टेस्ट (अर्हता)", count: 28, tab: "MOCK", subTopics: [{ id: "eng", title: "English", count: 10 }, { id: "hin", title: "सामान्य हिन्दी", count: 18 }] },
      { id: "SUBJECT_MAIN", label: "सब्जेक्ट टेस्ट (PGT मुख्य विषय)", count: 60, freeCount: 1, tab: "MOCK", subTopics: [{ id: "pgt_sub", title: "PGT Subject", count: 60 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 25, freeCount: 1, tab: "MOCK", subTopics: [{ id: "pgt_f", title: "PGT Full Mock", count: 25 }] },
      { id: "PYP", label: "Previous Year Paper (TRE 1–3)", count: 15, tab: "PYP", subTopics: [{ id: "tre_p", title: "Official Papers", count: 15 }] }
    ],
    instructions: ["भाग-I भाषा (30 Qs — 30% अर्हता), भाग-II सामान्य अध्ययन (40 Qs), भाग-III मुख्य विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_tgt", matchKeys: ["tre", "tgt", "9-10", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 माध्यमिक शिक्षक भर्ती (TGT Class 9–10)", shortName: "BPSC TRE 4.0 TGT (16 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 717, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true,
    subjects: TGT_16_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (9 to 10)", count: 150, freeCount: 2, tab: "MOCK", subTopics: [{ id: "sub_c", title: "Topic Wise", count: 90 }, { id: "gs_c", title: "GS Chapter", count: 60 }] },
      { id: "LANG", label: "भाषा टेस्ट (अर्हता)", count: 28, tab: "MOCK", subTopics: [{ id: "eng", title: "English", count: 10 }, { id: "hin", title: "हिन्दी", count: 18 }] },
      { id: "SUBJECT_MAIN", label: "सब्जेक्ट टेस्ट (TGT विषय)", count: 35, freeCount: 1, tab: "MOCK", subTopics: [{ id: "tgt_s", title: "Subject Sectional", count: 35 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 41, freeCount: 2, tab: "MOCK", subTopics: [{ id: "tgt_f", title: "TGT Full Mock", count: 41 }] },
      { id: "PYP", label: "Previous Year Paper (TRE 1–3)", count: 15, tab: "PYP", subTopics: [{ id: "tgt_p", title: "TRE Official", count: 15 }] }
    ],
    instructions: ["भाग-I भाषा (30 Qs अर्हता), भाग-II सामान्य अध्ययन (40 Qs), भाग-III विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_middle", matchKeys: ["tre", "middle", "6-8", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 मध्य विद्यालय शिक्षक भर्ती (Class 6–8)", shortName: "BPSC TRE 4.0 Middle (6 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 714, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true,
    subjects: MIDDLE_6_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (Class 6 to 8)", count: 140, freeCount: 2, tab: "MOCK", subTopics: [{ id: "nc68", title: "NCERT/SCERT 6–8", count: 140 }] },
      { id: "LANG", label: "भाषा टेस्ट (अर्हता)", count: 25, tab: "MOCK", subTopics: [{ id: "l68", title: "Hindi & English", count: 25 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 35, freeCount: 2, tab: "MOCK", subTopics: [{ id: "f68", title: "6–8 Full Mock", count: 35 }] },
      { id: "PYP", label: "Previous Year Paper", count: 12, tab: "PYP", subTopics: [{ id: "p68", title: "TRE 6–8 Papers", count: 12 }] }
    ],
    instructions: ["कक्षा 6–8 के लिए भाग-I भाषा (30 Qs अर्हता), भाग-II GS (40 Qs), भाग-III विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_prt", matchKeys: ["tre", "prt", "1-5", "प्राथमिक"], group: "TEACHING", name: "BPSC 4.0 प्राथमिक शिक्षक भर्ती (PRT Class 1–5)", shortName: "BPSC TRE 4.0 PRT (Class 1-5)",
    hasPicker: false, pickerLabel: "", totalTests: 540, freeTests: 5, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true,

    
