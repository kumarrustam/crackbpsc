import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { apiKey, prompt } = await req.json();
    const cleanKey = (apiKey ? apiKey : "").trim();
    const url = cleanKey.startsWith("AQ.")
      ? "https://googleapis.com" + cleanKey
      : "https://googleapis.com" + cleanKey;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }]
      })
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: { message: err.message ? err.message : "Server Error" } }, { status: 500 });
  }
}
