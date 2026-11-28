
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between"><span className="text-xs font-black uppercase">COMPARE</span><div className="flex gap-1 text-[10px] font-black"><button type="button" onClick={() => setCompMetric("SCORE")} className={"px-2 py-1 rounded border " + (compMetric === "SCORE" ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200 text-slate-500")}>SCORE</button><button type="button" onClick={() => setCompMetric("ACC")} className={"px-2 py-1 rounded border " + (compMetric === "ACC" ? "bg-sky-50 border-[#0084FF] text-[#0084FF]" : "border-slate-200 text-slate-500")}>ACC</button></div></div>
              <div className="grid grid-cols-3 gap-3 items-end h-28 pt-4 px-4 border-b">
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(youVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-[#0084FF]" style={{ height: `${Math.max(12, Math.round((youVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">You</span></div>
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(topperVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-purple-500" style={{ height: `${Math.max(12, Math.round((topperVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">Topper</span></div>
                <div className="flex flex-col items-center gap-1"><span className="text-[10px] font-black">{Number(avgVal.toFixed(1))}</span><div className="w-8 rounded-t-lg bg-slate-400" style={{ height: `${Math.max(12, Math.round((avgVal / barMax) * 72))}px` }} /><span className="text-[10px] font-bold text-slate-500">Average</span></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2"><div className="flex justify-between text-xs font-black"><span>MARKS VS RANK</span><span className="text-[#0084FF]">Marks: {sliderMarks} ➔ Rank #{Math.max(1, Math.round(4500 * (1 - sliderMarks / (maxTestMarks || 1)) + 5))}</span></div><input type="range" min={0} max={maxTestMarks || 100} value={sliderMarks} onChange={(e) => setSliderMarks(Number(e.target.value))} className="w-full accent-[#0084FF]" /></div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-black uppercase text-slate-800">🏆 Our Selected Achievers</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {champList.map((ch) => (
                  <div key={ch.name} className={"p-2 border rounded-xl flex items-center gap-2 " + (ch.bgClass || "bg-sky-50/70 border-sky-200 text-[#0084FF]")}>
                    {ch.imgUrl ? <img src={ch.imgUrl} alt={ch.name} className="w-8 h-8 rounded-full object-cover shrink-0" /> : <div className="w-8 h-8 rounded-full bg-white text-slate-800 font-black flex items-center justify-center text-xs border shrink-0">{ch.name.charAt(0)}</div>}
                    <div className="min-w-0"><div className="font-black text-slate-900 truncate">{ch.name}</div><div className="text-[10px] font-bold truncate">{ch.post}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between"><span className="text-xs font-black">Rate Test Quality</span><div className="flex gap-1"><button type="button" onClick={() => setStars(1)} className={"text-lg " + (stars >= 1 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(2)} className={"text-lg " + (stars >= 2 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(3)} className={"text-lg " + (stars >= 3 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(4)} className={"text-lg " + (stars >= 4 ? "text-amber-400" : "text-slate-300")}>★</button><button type="button" onClick={() => setStars(5)} className={"text-lg " + (stars >= 5 ? "text-amber-400" : "text-slate-300")}>★</button></div></div>
          </>
        )}
        {tab === "SOLUTIONS" && <TestSolutionsTab exam={exam} questions={questions} result={result} />}
        {tab === "LEADERBOARD" && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 grid grid-cols-3 gap-2 text-center items-end pt-3">
              <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#2</div><div className="text-[11px] font-black truncate">Kamlesh Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.92).toFixed(1)}</div></div>
              <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl"><div className="text-sm font-black text-amber-600">👑 #1</div><div className="text-xs font-black truncate">Jayant Kumar</div><div className="text-[11px] text-emerald-700 font-black">{(maxTestMarks * 0.95).toFixed(1)}</div></div>
              <div className="p-2 bg-slate-50 rounded-xl"><div className="text-xs font-black">#3</div><div className="text-[11px] font-black truncate">Triloki Kumar</div><div className="text-[10px] text-[#0084FF] font-black">{(maxTestMarks * 0.89).toFixed(1)}</div></div>
            </div>
            <div className="sticky bottom-0 p-3 bg-sky-50 border-2 border-[#0084FF] rounded-2xl flex justify-between items-center text-xs font-black">
              <span>#{rank} • {myName} (You • {cat})</span>
              <span className="text-[#0084FF]">{rawScore} / {maxTestMarks}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

