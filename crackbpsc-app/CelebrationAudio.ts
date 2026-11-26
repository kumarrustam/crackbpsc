
export interface SoundPreset {
  id: string;
  name: string;
  desc: string;
  wave: OscillatorType;
  notes: number[];
  stepSec: number;
}

export const CELEBRATION_SOUNDS: SoundPreset[] = [
  { id: "snd_1", name: "1. गोल्डन ट्रॉफ़ी झंकार", desc: "मीठी 4-सुरों की क्रिस्टल घंटी", wave: "triangle", notes: [523.25, 659.25, 783.99, 1046.5], stepSec: 0.11 },
  { id: "snd_2", name: "2. शाही विजय बिगुल", desc: "जोश भरने वाला शाही बिगुल", wave: "sawtooth", notes: [523.25, 523.25, 659.25, 587.33, 783.99], stepSec: 0.14 },
  { id: "snd_3", name: "3. जादुई सितारा-फुलझड़ी", desc: "ऊपर उठते सितारों की लहर", wave: "sine", notes: [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1318.5], stepSec: 0.065 },
  { id: "snd_4", name: "4. ग्रैंड विजय घंटी", desc: "गहरी और गूँजने वाली घंटी", wave: "sine", notes: [440, 554.37, 659.25, 880], stepSec: 0.16 },
  { id: "snd_5", name: "5. सुपर लेवल-अप पॉप", desc: "तेज़ और ऊर्जावान गेमिंग धुन", wave: "square", notes: [493.88, 659.25, 783.99, 987.77, 1318.5], stepSec: 0.08 },
  { id: "snd_6", name: "6. सुरीली बाँसुरी तान", desc: "मधुर भारतीय सुरों वाली तान", wave: "sine", notes: [523.25, 587.33, 659.25, 783.99, 1046.5], stepSec: 0.13 },
  { id: "snd_7", name: "7. डायमंड कॉइन शावर", desc: "खनकते सितारों की बौछार", wave: "triangle", notes: [987.77, 1318.5, 987.77, 1318.5, 1567.98], stepSec: 0.075 },
  { id: "snd_8", name: "8. ओलंपिक पोडियम सलामी", desc: "गौरव और सम्मान की धुन", wave: "triangle", notes: [392.0, 523.25, 659.25, 783.99, 659.25, 1046.5], stepSec: 0.12 },
  { id: "snd_9", name: "9. बबल-पॉप सेलिब्रेशन", desc: "हल्की और ताज़गी भरी आवाज़", wave: "sine", notes: [659.25, 880, 1174.66, 1567.98], stepSec: 0.09 },
  { id: "snd_10", name: "10. आतिशबाज़ी ग्रैंड फिनाले", desc: "फुलझड़ी जैसी तेज़ गूँज", wave: "sawtooth", notes: [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98], stepSec: 0.07 }
];

export function playPresetSound(presetId?: string, forcePreview?: boolean) {
  try {
    if (!forcePreview && typeof window !== "undefined" && localStorage.getItem("cb_sound_enabled") === "false") return;
    
    const saved = typeof window !== "undefined" ? localStorage.getItem("cb_active_sound") : null;
    const chosenId = presetId || saved || "snd_10";
    const preset = CELEBRATION_SOUNDS.find((s) => s.id === chosenId) || CELEBRATION_SOUNDS;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    preset.notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = preset.wave;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * preset.stepSec);
      gain.gain.setValueAtTime(preset.wave === "sawtooth" || preset.wave === "square" ? 0.11 : 0.2, ctx.currentTime + idx * preset.stepSec);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * preset.stepSec + 0.42);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * preset.stepSec);
      osc.stop(ctx.currentTime + idx * preset.stepSec + 0.44);
    });
  } catch {}
}
