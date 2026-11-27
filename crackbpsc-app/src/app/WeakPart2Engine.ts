
import { WeakQuestion } from "./WeakAreasPro";

export interface CwPermissions {
  aiGen: boolean;
  manual: boolean;
  bulk: boolean;
  editQ: boolean;
  deleteQ: boolean;
  examsSub: boolean;
  negAndOpt5: boolean;
  featuresAndSounds: boolean;
}

export const DEFAULT_CW_PERMS: CwPermissions = {
  aiGen: false,
  manual: false,
  bulk: false,
  editQ: false,
  deleteQ: false,
  examsSub: false,
  negAndOpt5: false,
  featuresAndSounds: false
};

export function detectSubjectAuto(text: string, fallback: string): string {
  const t = text.toLowerCase();
  if (t.includes("बिहार") || t.includes("bihar") || t.includes("पटना") || t.includes("चंपारण")) return "Bihar Special";
  if (t.includes("हड़प्पा") || t.includes("मौर्य") || t.includes("संगम") || t.includes("harappa") || t.includes("history")) return "History";
  if (t.includes("संविधान") || t.includes("अनुच्छेद") || t.includes("संसद") || t.includes("polity")) return "Polity";
  if (t.includes("नदी") || t.includes("पर्वत") || t.includes("जलवायु") || t.includes("geography")) return "Geography";
  if (t.includes("बजट") || t.includes("मुद्रास्फीति") || t.includes("gdp") || t.includes("economy")) return "Economy";
  if (t.includes("कोशिका") || t.includes("विटामिन") || t.includes("भौतिक") || t.includes("science")) return "General Science";
  return fallback;
}

export function balanceAnswerPositions(questions: WeakQuestion[], optMode: string, startOffset = 0): WeakQuestion[] {
  const targetCycle = new Array(1, 3, 0, 2);
  return questions.map((q, qIdx) => {
    const baseHi = q.opts_hi.slice(0, 4);
    const baseEn = q.opts_en.slice(0, 4);
    const safeAns = q.ans >= 0 && q.ans < baseHi.length ? q.ans : 0;
    const targetPos = targetCycle[(qIdx + startOffset) % targetCycle.length];
    const newHi = [...baseHi];
    const newEn = [...baseEn];
    if (baseHi.length === 4 && safeAns !== targetPos) {
      [newHi[safeAns], newHi[targetPos]] = [newHi[targetPos], newHi[safeAns]];
      [newEn[safeAns], newEn[targetPos]] = [newEn[targetPos], newEn[safeAns]];
    }
    if (optMode === "5_UNATTEMPTED") {
      newHi.push("अनुत्तरित प्रश्न");
      newEn.push("Unattempted Question");
    } else if (optMode === "5_BPSC_E") {
      newHi.push("उपर्युक्त में से कोई नहीं / एक से अधिक");
      newEn.push("None / More than one");
    }
    return { ...q, opts_hi: newHi, opts_en: newEn, ans: targetPos };
  });
}

