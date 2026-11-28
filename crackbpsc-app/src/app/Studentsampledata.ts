
import { CbtQuestion } from "./CbtExamPlayerPro";

export const SAMPLE_QS: CbtQuestion[] = [
  { id: "q1", pypYear: "2024", pypSize: "md", examTags: ["BPSC", "UPSC"], q_hi: "बिहार में 1857 की क्रांति के प्रमुख नेता कौन थे?", q_en: "Who was the prominent leader of the 1857 Revolt in Bihar?", opts_hi: ["कुँवर सिंह", "बिरसा मुंडा", "तात्या टोपे", "नाना साहेब"], opts_en: ["Kunwar Singh", "Birsa Munda", "Tatya Tope", "Nana Sahib"], ansIdx: 0, exp_hi: "जगदीशपुर (आरा) के बाबू कुँवर सिंह ने 1857 में बिहार का नेतृत्व किया।" },
  { id: "q2", pypYear: "2023", pypSize: "md", examTags: ["BPSC", "JPSC"], q_hi: "वाल्मीकि राष्ट्रीय उद्यान बिहार के किस जिले में स्थित है?", q_en: "Valmiki National Park is located in which district of Bihar?", opts_hi: ["पश्चिमी चंपारण", "पूर्वी चंपारण", "गया", "नालंदा"], opts_en: ["West Champaran", "East Champaran", "Gaya", "Nalanda"], ansIdx: 0, exp_hi: "वाल्मीकि टाइगर रिजर्व पश्चिमी चंपारण जिले में स्थित है।" }
];

export function loadSavedAdminData() {
  try {
    return {
      qs: JSON.parse(localStorage.getItem("cb_custom_qs") || "[]"),
      seats: JSON.parse(localStorage.getItem("cb_seats") || "{}"),
      achievers: JSON.parse(localStorage.getItem("cb_achievers") || "[]"),
      menu: JSON.parse(localStorage.getItem("cb_menu") || "{}")
    };
  } catch { return { qs: [], seats: {}, achievers: [], menu: {} }; }
}

