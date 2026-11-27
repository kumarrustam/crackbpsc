
"use client";
import React, { useState, useEffect } from "react";

export function FlipCardActionDrawer({ cardId }: { cardId: string }) {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeBounce, setLikeBounce] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [boxH, setBoxH] = useState(110);

  useEffect(() => {
    try {
      setLiked(localStorage.getItem(`cb_ca_like_${cardId}`) === "1");
      setSaved(localStorage.getItem(`cb_ca_save_${cardId}`) === "1");
      const raw = localStorage.getItem(`cb_ca_notes_${cardId}`);
      if (raw) setNotes(JSON.parse(raw));
    } catch {}
  }, [cardId]);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    setLikeBounce(true);
    setTimeout(() => setLikeBounce(false), 600);
    try { localStorage.setItem(`cb_ca_like_${cardId}`, next ? "1" : "0"); } catch {}
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    try { localStorage.setItem(`cb_ca_save_${cardId}`, next ? "1" : "0"); } catch {}
  };

  const addNote = () => {
    if (!noteInput.trim()) return;
    const next = [noteInput.trim(), ...notes];
    setNotes(next);
    setNoteInput("");
    try { localStorage.setItem(`cb_ca_notes_${cardId}`, JSON.stringify(next)); } catch {}
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center">
      {commentOpen && open && (
        <div className="mr-2 w-64 sm:w-72 bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl p-3 space-y-2 text-xs">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
            <span className="font-black text-slate-800">💬 अनलिमिटेड नोट्स / कमेंट ({notes.length})</span>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => setBoxH((h) => Math.max(70, h - 40))} className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">−</button>
              <button type="button" onClick={() => setBoxH((h) => Math.min(280, h + 40))} className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">+</button>
              <button type="button" onClick={() => setCommentOpen(false)} className="px-1.5 py-0.5 text-rose-600 font-bold">✕</button>
            </div>
          </div>
          <textarea value={noteInput} onChange={(e) => setNoteInput(e.target.value)} style={{ height: `${boxH}px` }} placeholder="यहाँ अपने अनगिनत परीक्षा बिंदु लिखें (ऊपर +/− या नीचे से छोटा-बड़ा करें)..." className="w-full p-2 border border-slate-300 rounded-xl resize-y bg-slate-50 text-xs focus:outline-none focus:border-[#0084FF]" />
          <button type="button" onClick={addNote} className="w-full py-1.5 bg-[#0084FF] text-white rounded-xl font-black">✓ नोट सेव करें</button>
          {notes.length > 0 && (
            <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-slate-100">
              {notes.map((n, idx) => (
                <div key={idx} className="p-1.5 bg-slate-50 rounded-lg flex justify-between items-start gap-1 text-[11px]">
                  <span>• {n}</span>
                  <button type="button" onClick={() => { const u = notes.filter((_, i) => i !== idx); setNotes(u); localStorage.setItem(`cb_ca_notes_${cardId}`, JSON.stringify(u)); }} className="text-rose-500 font-bold">✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {open && (
        <div className="mr-1.5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl p-1.5 flex flex-col gap-1.5 transition-all">
          <button type="button" onClick={toggleLike} className={"px-2.5 py-2 rounded-xl border text-center transition " + (liked ? "bg-rose-50 border-rose-300 text-rose-600" : "bg-white border-slate-200 text-slate-700")}>
            <div className={"text-base " + (likeBounce ? "animate-bounce scale-125" : "")}>{liked ? "❤️" : "🤍"}</div>
            <div className="text-[9px] font-black mt-0.5">{liked ? "Liked" : "Like"}</div>
          </button>
          <button type="button" onClick={() => setCommentOpen(!commentOpen)} className={"px-2.5 py-2 rounded-xl border text-center transition " + (commentOpen ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "bg-white border-slate-200 text-slate-700")}>
            <div className="text-base">💬</div>
            <div className="text-[9px] font-black mt-0.5">Note ({notes.length})</div>
          </button>
          <button type="button" onClick={toggleSave} className={"px-2.5 py-2 rounded-xl border text-center transition " + (saved ? "bg-amber-50 border-amber-400 text-amber-700" : "bg-white border-slate-200 text-slate-700")}>
            <div className="text-base">{saved ? "🔖" : "📑"}</div>
            <div className="text-[9px] font-black mt-0.5">{saved ? "Saved" : "Save"}</div>
          </button>
        </div>
      )}

      <button type="button" onClick={() => setOpen(!open)} title="Quick Actions" className="w-4 h-16 bg-white/90 hover:bg-white border border-r-0 border-slate-300 rounded-l-full shadow-md flex items-center justify-center text-[10px] font-black text-slate-600">
        {open ? "›" : "‹"}
      </button>
    </div>
  );
}

