// Cached AudioContext instance to avoid creating new contexts on every haptic call
let cachedAudioCtx: AudioContext | null = null;

// Shared haptic driver with pointer pressure & Web Audio API
export function triggerHaptic(
  type: "light" | "medium" | "heavy" | "success" | "warning",
  pressure?: number | React.PointerEvent | React.MouseEvent | React.TouchEvent | PointerEvent | MouseEvent
) {
  if (typeof window === "undefined") return;

  // Extract pressure value (between 0.0 and 1.0)
  let pressureVal = 0.5; // default center weight
  if (typeof pressure === "number") {
    pressureVal = pressure;
  } else if (pressure && typeof pressure === "object" && "nativeEvent" in pressure) {
    const nativeEvent = pressure.nativeEvent;
    if (nativeEvent instanceof PointerEvent) {
      pressureVal = nativeEvent.pressure > 0 ? nativeEvent.pressure : 0.5;
    }
  } else if (pressure && pressure instanceof PointerEvent) {
    pressureVal = pressure.pressure > 0 ? pressure.pressure : 0.5;
  }

  // Ensure pressure ranges between 0.15 and 1.0
  pressureVal = Math.max(0.15, Math.min(1.0, pressureVal));

  // 1. Device Vibration
  if (navigator.vibrate) {
    try {
      let duration = 0;
      switch (type) {
        case "light":
          duration = 8;
          break;
        case "medium":
          duration = 15;
          break;
        case "heavy":
          duration = 30;
          break;
        case "success":
          navigator.vibrate([
            Math.round(12 * (0.5 + pressureVal)), 
            Math.round(45 * (0.5 + pressureVal)), 
            Math.round(12 * (0.5 + pressureVal))
          ]);
          break;
        case "warning":
          navigator.vibrate([
            Math.round(45 * (0.5 + pressureVal)), 
            Math.round(75 * (0.5 + pressureVal))
          ]);
          break;
      }
      if (duration > 0) {
        const scaledDuration = Math.round(duration * (0.5 + pressureVal));
        navigator.vibrate(scaledDuration);
      }
    } catch (e) {}
  }

  // 2. Synthesized Web Audio Tones
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    if (!cachedAudioCtx || cachedAudioCtx.state === 'closed') {
      cachedAudioCtx = new AudioContextClass();
    }
    const audioCtx = cachedAudioCtx;

    // Resume suspended context (common browser auto-play policy restriction)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const sweepTone = (startFreq: number, endFreq: number, baseDuration: number, baseGain: number) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = "triangle";
      
      const scaledStartFreq = startFreq * (0.7 + 0.6 * pressureVal);
      const scaledEndFreq = endFreq * (0.7 + 0.6 * pressureVal);
      const scaledGainVal = baseGain * (0.5 + pressureVal);
      const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
      
      osc.frequency.setValueAtTime(scaledStartFreq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(scaledEndFreq, audioCtx.currentTime + scaledDuration);
      
      gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + scaledDuration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + scaledDuration);
    };

    const playTone = (freq: number, start: number, baseDuration: number, oscType: "sine" | "triangle" = "sine", baseGain = 0.15) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = oscType;
      
      const scaledFreq = freq * (0.8 + 0.4 * pressureVal);
      const scaledGainVal = baseGain * (0.5 + pressureVal);
      const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
      
      osc.frequency.setValueAtTime(scaledFreq, audioCtx.currentTime + start);
      gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime + start);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + scaledDuration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + start);
      osc.stop(audioCtx.currentTime + start + scaledDuration);
    };

    switch (type) {
      case "light":
        sweepTone(850, 180, 0.04, 0.08);
        break;
      case "medium":
        sweepTone(700, 120, 0.06, 0.12);
        break;
      case "heavy":
        sweepTone(550, 80, 0.09, 0.18);
        break;
      case "success":
        // Premium ascending triple-chime chord (E5 [659.25 Hz] -> B5 [987.77 Hz] -> E6 [1318.51 Hz])
        playTone(659.25, 0, 0.15, "triangle", 0.06); 
        playTone(987.77, 0.08, 0.20, "sine", 0.08);
        playTone(1318.51, 0.16, 0.35, "sine", 0.07);
        break;
      case "warning":
        sweepTone(220, 130, 0.12, 0.15);
        setTimeout(() => {
          try {
            sweepTone(220, 130, 0.12, 0.15);
          } catch {}
        }, 140);
        break;
    }
  } catch (e) {}
}
