// ============================================================================
// ASTROGAMA: MOTOR DE AUDIO (EFECTOS DE SONIDO SINTETIZADOS + MÚSICA DUAL)
// - Menú Principal: "assets/Menú Oscuro.mp3"
// - Partida de Juego: "assets/La Noja del Mariachi.mp3"
// ============================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicEnabled = true;
    this.currentTrack = null; // 'menu' | 'game' | null
    
    // Pistas de audio
    this.menuMusic = null;
    this.gameMusic = null;

    this.menuVolume = 0.32;  // Volumen ideal envolvente para el menú
    this.gameVolume = 0.26;  // Volumen equilibrado para no tapar efectos
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initTracks() {
    if (!this.menuMusic) {
      this.menuMusic = new Audio('assets/Men%C3%BA%20Oscuro.mp3');
      this.menuMusic.loop = true;
      this.menuMusic.volume = this.menuVolume;
      this.menuMusic.preload = 'auto';
    }

    if (!this.gameMusic) {
      this.gameMusic = new Audio('assets/La%20Noja%20del%20Mariachi.mp3');
      this.gameMusic.loop = true;
      this.gameMusic.volume = this.gameVolume;
      this.gameMusic.preload = 'auto';
    }
  }

  playMenuMusic() {
    this.initTracks();
    this.currentTrack = 'menu';

    // Pausar música del juego si estaba sonando
    if (this.gameMusic && !this.gameMusic.paused) {
      this.gameMusic.pause();
      this.gameMusic.currentTime = 0;
    }

    if (!this.musicEnabled) return;

    this.menuMusic.play().catch(err => {
      console.log("Autoplay del menú esperando interacción del usuario...", err);
    });
  }

  playGameMusic() {
    this.initTracks();
    this.currentTrack = 'game';

    // Pausar música del menú
    if (this.menuMusic && !this.menuMusic.paused) {
      this.menuMusic.pause();
      this.menuMusic.currentTime = 0;
    }

    if (!this.musicEnabled) return;

    this.gameMusic.play().catch(err => {
      console.log("Autoplay del juego esperando interacción del usuario...", err);
    });
  }

  toggleMusic() {
    this.initTracks();
    this.musicEnabled = !this.musicEnabled;

    if (this.musicEnabled) {
      if (this.currentTrack === 'game') {
        this.gameMusic.play();
      } else {
        this.menuMusic.play();
      }
    } else {
      if (this.menuMusic) this.menuMusic.pause();
      if (this.gameMusic) this.gameMusic.pause();
    }

    return this.musicEnabled;
  }

  // --- EFECTOS DE SONIDO SINTETIZADOS (SFX) ---
  playStamp() {
    if (!this.enabled) return;
    this.init();
    const t = this.ctx.currentTime;
    
    // Impacto mecánico de sello
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.12);
    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.14);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);

    // Chasquido de papel
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
    noise.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start(t);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.06);
      gain.gain.setValueAtTime(0.2, t + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.06);
      osc.stop(t + idx * 0.06 + 0.2);
    });
  }

  playAlarm() {
    if (!this.enabled) return;
    this.init();
    const t = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const start = t + i * 0.16;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, start);
      osc.frequency.setValueAtTime(160, start + 0.08);
      gain.gain.setValueAtTime(0.35, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + 0.15);
    }
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    const t = this.ctx.currentTime;
    const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    fanfare.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, t + i * 0.1);
      gain.gain.setValueAtTime(0.3, t + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.1);
      osc.stop(t + i * 0.1 + 0.45);
    });
  }
}

const sfxInstance = new SoundEngine();

if (typeof window !== 'undefined') {
  window.SoundEngine = SoundEngine;
  window.sfx = sfxInstance;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SoundEngine, sfx: sfxInstance };
}
