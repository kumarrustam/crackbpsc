
"use client";
import React from "react";
import { CwPermissions } from "./WeakPart2Engine";

export function WeakPart3Perms({
  cwPerms,
  updatePerms
}: {
  cwPerms: CwPermissions;
  updatePerms: (next: CwPermissions) => void;
}) {
  const setAll = (val: boolean) =>
    updatePerms({
      aiGen: val,
      manual: val,
      bulk: val,
      editQ: val,
      deleteQ: val,
      examsSub: val,
      negAndOpt5: val,
      featuresAndSounds: val
    });

  const items: { k: keyof CwPermissions; label: string }[] = [
    { k: "aiGen", label: "1. ✨ AI Chapter + 8-Pattern Builder" },
    { k: "manual", label: "2. ➕ Manual Templates (कथन-कारण, कूट-मिलान)" },
    { k: "bulk", label: "3. 📥 Gemini Bilingual Bulk Importer" },
    { k: "editQ", label: "4. ✏️ बने हुए प्रश्नों को सुधारना (Edit Qs)" },
    { k: "deleteQ", label: "5. 🗑️ प्रश्नों को हटाना (Delete Qs)" },
    { k: "examsSub", label: "6. 🏛️ कस्टम परीक्षा व विषय जोड़ना/हटाना" },
    { k: "negAndOpt5", label: "7. ⚖️ नेगेटिव मार्किंग व BPSC 5वाँ विकल्प" },
    { k: "featuresAndSounds", label: "8. ⚙️ UI फ़ीचर टॉगल व 10 विजयी धुनें" }
  ];

  return (
    <div className="p-4 bg-white rounded-2xl border border-indigo-200 space-y-2.5 text-xs">
      <div className="flex items-center justify-between border-b pb-2">
        <span className="font-extrabold text-sm text-indigo-950">🔐 Content Writer Permissions</span>
        <div className="flex gap-2">
          <button type="button" onClick={() => setAll(true)} className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-extrabold">Allow ALL</button>
          <button type="button" onClick={() => setAll(false)} className="px-3 py-1 bg-rose-600 text-white rounded-lg font-extrabold">Block ALL</button>
        </div>
      </div>
      {items.map((it) => {
        const isOn = cwPerms[it.k];
        return (
          <div key={it.k} className="p-2.5 bg-slate-50 rounded-xl border flex items-center justify-between font-bold">
            <span>{it.label}</span>
            <button type="button" onClick={() => updatePerms({ ...cwPerms, [it.k]: !isOn })} className={"px-3 py-1 rounded-full font-extrabold " + (isOn ? "bg-emerald-600 text-white" : "bg-slate-300 text-slate-700")}>
              {isOn ? "ON" : "OFF"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

