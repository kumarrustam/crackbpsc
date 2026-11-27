"use client";
import React from "react";

export function FlipCardsList(props: {
  items: any[];
  onEdit: (it: any) => void;
  onDelete: (id: string) => void;
}) {
  const { items, onEdit, onDelete } = props;
  if (!items.length) return null;
  return (
    <div className="max-h-36 overflow-y-auto space-y-1 pt-1 border-t border-slate-800">
      {items.slice(0, 15).map((it) => (
        <div key={it.id} className="p-2 bg-slate-950 rounded-lg flex justify-between items-center gap-2">
          <span className="truncate">[{it.subject}] {it.title_hi}</span>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => onEdit(it)} className="px-2 py-0.5 bg-amber-500 text-slate-950 rounded font-bold">Edit</button>
            <button type="button" onClick={() => onDelete(it.id)} className="px-2 py-0.5 bg-rose-600 rounded font-bold">Del</button>
          </div>
        </div>
      ))}
    </div>
  );
}

