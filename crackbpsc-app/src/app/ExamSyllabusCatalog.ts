import { PGT_30_SUBJECTS, TGT_16_SUBJECTS, MIDDLE_6_SUBJECTS } from "./ExamSubjectsList";

export interface ExamCategoryItem { id: string; label: string; count: number; freeCount?: number; tab: "MOCK" | "PYP"; subTopics: { id: string; title: string; count: number }[]; }
export interface ExamBlueprint { id: string; matchKeys: string[]; group: string; name: string; shortName: string; hasPicker: boolean; pickerLabel: string; totalTests: number; freeTests: number; durationMins: number; totalQs: number; maxMarks: number; posMark: number; negMark: number; unansNeg: number; hasOpt5: boolean; subjects: string[]; sections: { name: string; qsCount: number; qualifying?: string }[]; categories: ExamCategoryItem[]; instructions: string[]; }

export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  {
    id: "bpsc_72", matchKeys: ["bpsc", "72वीं", "71वीं", "cce"], group: "BPSC", name: "72वीं BPSC CCE (Prelims) Mock Test Series 2026", shortName: "72वीं BPSC CCE",
    hasPicker: false, pickerLabel: "", totalTests: 650, freeTests: 6, durationMins: 120, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true, subjects: [],
    sections: [{ name: "सामान्य अध्ययन (150 Qs)", qsCount: 150 }],
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
    instructions: ["कुल 150 प्रश्न (150 अंक) और समय 120 मिनट है।", "सही पर +1.0, गलत पर -0.33, और 5वाँ विकल्प 'अनुत्तरित' न चुनने पर -0.33 अंक कटेगा।"]
  },
  {
    id: "bpsc_tre4_pgt", matchKeys: ["tre", "pgt", "11-12", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 उच्च माध्यमिक शिक्षक भर्ती (PGT 11–12)", shortName: "BPSC TRE 4.0 PGT (30 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 720, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true, subjects: PGT_30_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (GS)", count: 125, freeCount: 2, tab: "MOCK", subTopics: [{ id: "anc", title: "प्राचीन भारत", count: 15 }, { id: "mod", title: "राष्ट्रीय आंदोलन", count: 30 }] },
      { id: "LANG", label: "भाषा टेस्ट (अर्हता)", count: 28, tab: "MOCK", subTopics: [{ id: "eng", title: "English", count: 10 }, { id: "hin", title: "हिन्दी", count: 18 }] },
      { id: "SUBJECT_MAIN", label: "सब्जेक्ट टेस्ट (PGT विषय)", count: 60, freeCount: 1, tab: "MOCK", subTopics: [{ id: "pgt_sub", title: "PGT Subject", count: 60 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 25, freeCount: 1, tab: "MOCK", subTopics: [{ id: "pgt_f", title: "PGT Full Mock", count: 25 }] },
      { id: "PYP", label: "Previous Year Paper (TRE 1–3)", count: 15, tab: "PYP", subTopics: [{ id: "tre_p", title: "Official Papers", count: 15 }] }
    ],
    instructions: ["भाग-I भाषा (30 Qs अर्हता), भाग-II GS (40 Qs), भाग-III मुख्य विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_tgt", matchKeys: ["tre", "tgt", "9-10", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 माध्यमिक शिक्षक भर्ती (TGT 9–10)", shortName: "BPSC TRE 4.0 TGT (16 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 717, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true, subjects: TGT_16_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (9 to 10)", count: 150, freeCount: 2, tab: "MOCK", subTopics: [{ id: "sub_c", title: "Topic Wise", count: 90 }, { id: "gs_c", title: "GS Chapter", count: 60 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 41, freeCount: 2, tab: "MOCK", subTopics: [{ id: "tgt_f", title: "TGT Full Mock", count: 41 }] },
      { id: "PYP", label: "Previous Year Paper", count: 15, tab: "PYP", subTopics: [{ id: "tgt_p", title: "TRE Official", count: 15 }] }
    ],
    instructions: ["भाग-I भाषा (30 Qs अर्हता), भाग-II GS (40 Qs), भाग-III विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_middle", matchKeys: ["tre", "middle", "6-8", "शिक्षक"], group: "TEACHING", name: "BPSC 4.0 मध्य विद्यालय शिक्षक भर्ती (6–8)", shortName: "BPSC TRE 4.0 Middle (6 विषय)",
    hasPicker: true, pickerLabel: "Subject", totalTests: 714, freeTests: 4, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true, subjects: MIDDLE_6_SUBJECTS,
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 40 }, { name: "विषय भाग - III", qsCount: 80 }],
    categories: [
      { id: "CHAPTER", label: "चैप्टर टेस्ट (Class 6 to 8)", count: 140, freeCount: 2, tab: "MOCK", subTopics: [{ id: "nc68", title: "NCERT/SCERT 6–8", count: 140 }] },
      { id: "FULL", label: "फुल टेस्ट (150 Qs)", count: 35, freeCount: 2, tab: "MOCK", subTopics: [{ id: "f68", title: "6–8 Full Mock", count: 35 }] }
    ],
    instructions: ["कक्षा 6–8 के लिए भाग-I भाषा (30 Qs अर्हता), भाग-II GS (40 Qs), भाग-III विषय (80 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bpsc_tre4_prt", matchKeys: ["tre", "prt", "1-5", "प्राथमिक"], group: "TEACHING", name: "BPSC 4.0 प्राथमिक शिक्षक भर्ती (PRT Class 1–5)", shortName: "BPSC TRE 4.0 PRT (Class 1-5)",
    hasPicker: false, pickerLabel: "", totalTests: 540, freeTests: 5, durationMins: 150, totalQs: 150, maxMarks: 150, posMark: 1.0, negMark: 0.33, unansNeg: 0.33, hasOpt5: true, subjects: [],
    sections: [{ name: "भाषा भाग - I", qsCount: 30, qualifying: "30% अर्हता" }, { name: "सामान्य अध्ययन - भाग II", qsCount: 120 }],
    categories: [
      { id: "CHAPTER", label: "SCERT/NCERT चैप्टर टेस्ट (1–5)", count: 180, freeCount: 3, tab: "MOCK", subTopics: [{ id: "evs", title: "EVS & Science", count: 60 }, { id: "math", title: "Maths & Reasoning", count: 60 }] },
      { id: "FULL", label: "PRT फुल टेस्ट (150 Qs)", count: 35, freeCount: 2, tab: "MOCK", subTopics: [{ id: "prt_f", title: "PRT Full Mock", count: 35 }] }
    ],
    instructions: ["कक्षा 1–5 के लिए भाग-I भाषा (30 Qs अर्हता) तथा भाग-II सामान्य अध्ययन (120 Qs)। 5वाँ विकल्प 'अनुत्तरित' अनिवार्य।"]
  },
  {
    id: "bssc_inter", matchKeys: ["bssc", "cgl", "inter", "daroga"], group: "BSSC_STATE", name: "Bihar SSC (BSSC) Inter Level & CGL-4 Mock Test 2026", shortName: "BSSC Inter Level & CGL-4",
    hasPicker: false, pickerLabel: "", totalTests: 636, freeTests: 6, durationMins: 135, totalQs: 150, maxMarks: 600, posMark: 4.0, negMark: 1.0, unansNeg: 0, hasOpt5: false, subjects: [],
    sections: [{ name: "सामान्य अध्ययन (50)", qsCount: 50 }, { name: "विज्ञान एवं गणित (50)", qsCount: 50 }, { name: "मानसिक क्षमता (50)", qsCount: 50 }],
    categories: [
      { id: "CA_SPEC", label: "🔥 Special Current Affairs", count: 13, tab: "MOCK", subTopics: [{ id: "cs1", title: "Bihar & National", count: 13 }] },
      { id: "FULL_NEW", label: "New Full Test", count: 6, freeCount: 1, tab: "MOCK", subTopics: [{ id: "fn1", title: "Latest Pattern", count: 6 }] },
      { id: "CHAPTER_NEW", label: "New Chapter Test", count: 172, freeCount: 1, tab: "MOCK", subTopics: [{ id: "reas", title: "Reasoning", count: 65 }, { id: "math", title: "Maths", count: 55 }] },
      { id: "PYP", label: "Previous Year Paper", count: 10, freeCount: 1, tab: "PYP", subTopics: [{ id: "p1", title: "BSSC Official", count: 10 }] }
    ],
    instructions: ["कुल 150 प्रश्न (600 अंक) व समय 135 मिनट। सही पर +4.0 और गलत पर -1.0 अंक कटेगा।"]
  },
  {
    id: "upsc_epfo", matchKeys: ["upsc", "ias", "epfo", "uppsc", "jpsc"], group: "UPSC_PCS", name: "UPSC CSE, EPFO (APFC) & UPPSC RO/ARO Mock Series", shortName: "UPSC CSE / EPFO / RO-ARO",
    hasPicker: false, pickerLabel: "", totalTests: 520, freeTests: 4, durationMins: 120, totalQs: 100, maxMarks: 200, posMark: 2.0, negMark: 0.66, unansNeg: 0, hasOpt5: false, subjects: [],
    sections: [{ name: "GS Paper - I (100 Qs)", qsCount: 100 }],
    categories: [

    
