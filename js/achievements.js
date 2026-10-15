// ============================================================================
// ASTROGAMA: SISTEMA DE LOGROS Y MEDALLAS
// ============================================================================

const ACHIEVEMENTS_DATA = [
  {
    id: "primer_alien",
    title: "¡No Pasarán!",
    tier: "bronce",
    symbol: "🛸",
    ribbon: "🥉",
    desc: "Descubre y detén a tu primer Alien Impostor en la frontera."
  },
  {
    id: "bienvenido_mexico",
    title: "Bienvenido a México",
    tier: "bronce",
    symbol: "🇲🇽",
    ribbon: "🥉",
    desc: "Aprueba el ingreso de tu primer turista humano legítimo."
  },
  {
    id: "ojo_halcon",
    title: "Ojo de Halcón Acentual",
    tier: "plata",
    symbol: "👁️",
    ribbon: "🥈",
    desc: "Caza a un alien que cometió falta de tilde (hiato o esdrújula)."
  },
  {
    id: "guardian_bv",
    title: "Guardián de la B y la V",
    tier: "plata",
    symbol: "🛡️",
    ribbon: "🥈",
    desc: "Descubre a un alien confundiendo la B con la V en su declaración."
  },
  {
    id: "cazador_hache",
    title: "La Hache No es Invisible",
    tier: "plata",
    symbol: "👻",
    ribbon: "🥈",
    desc: "Atrapa a un extraterrestre que olvidó o inventó una 'h'."
  },
  {
    id: "racha_cinco",
    title: "Racha Furia Fronteriza",
    tier: "oro",
    symbol: "⚡",
    ribbon: "🥇",
    desc: "Logra 5 aciertos consecutivos sin ningún fallo en la ronda."
  },
  {
    id: "reflejos_alien",
    title: "Reflejo Instantáneo",
    tier: "oro",
    symbol: "⏱️",
    ribbon: "🥇",
    desc: "Emite un veredicto correcto en menos de 2.5 segundos."
  },
  {
    id: "al_borde",
    title: "Sobreviviente al Límite",
    tier: "oro",
    symbol: "💓",
    ribbon: "🥇",
    desc: "Supera la ronda completa con solo 1 vida restante."
  },
  {
    id: "cazador_diez",
    title: "Cazador Intergaláctico",
    tier: "oro",
    symbol: "👾",
    ribbon: "🥇",
    desc: "Captura a 10 aliens impostores en total durante tu carrera."
  },
  {
    id: "curioso_turista",
    title: "Inspector de Sabores",
    tier: "plata",
    symbol: "🌮",
    ribbon: "🥈",
    desc: "Permite el paso a 5 humanos con motivos gastronómicos o culturales."
  },
  {
    id: "maestro_rae",
    title: "Académico de la Frontera",
    tier: "platino",
    symbol: "📜",
    ribbon: "💎",
    desc: "Acumula 2,000 puntos en tu carrera como agente anti-aliens."
  },
  {
    id: "inspeccion_perfecta",
    title: "Agente Élite Legendario",
    tier: "platino",
    symbol: "👑",
    ribbon: "💎",
    desc: "Completa los 10 viajeros con 100% de aciertos y las 3 vidas intactas."
  },
  {
    id: "blitz_master",
    title: "Rayo Fronterizo",
    tier: "oro",
    symbol: "⚡",
    ribbon: "🥇",
    desc: "Consigue al menos 10 aciertos en una sola sesión de Fiebre Blitz."
  },
  {
    id: "survival_legend",
    title: "Incorruptible",
    tier: "platino",
    symbol: "🛡️",
    ribbon: "💎",
    desc: "Alcanza una racha de 8 aciertos consecutivos en Tolerancia Cero."
  },
  {
    id: "campana_heroe",
    title: "Héroe de la Frontera",
    tier: "platino",
    symbol: "🎖️",
    ribbon: "💎",
    desc: "Supera con éxito los 4 días de la Campaña de Turnos Fronterizos."
  }
];

class AchievementsManager {
  constructor() {
    this.storageKey = "astrogama_achievements_v2";
    this.statsKey = "astrogama_player_stats_v2";
    this.achievements = ACHIEVEMENTS_DATA;
    this.unlocked = {};
    this.stats = {
      totalAliensCaught: 0,
      totalHumansAllowed: 0,
      totalCultureAllowed: 0,
      careerScore: 0,
      consecutiveStreak: 0,
      maxStreak: 0
    };

    this.loadState();
  }

  loadState() {
    try {
      const savedUnlocked = localStorage.getItem(this.storageKey);
      if (savedUnlocked) {
        this.unlocked = JSON.parse(savedUnlocked);
      }

      const savedStats = localStorage.getItem(this.statsKey);
      if (savedStats) {
        this.stats = { ...this.stats, ...JSON.parse(savedStats) };
      }
    } catch (e) {
      console.warn("No se pudo cargar localStorage para logros", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.unlocked));
      localStorage.setItem(this.statsKey, JSON.stringify(this.stats));
    } catch (e) {
      console.warn("No se pudo guardar logros en localStorage", e);
    }
  }

  isUnlocked(id) {
    return Boolean(this.unlocked[id]);
  }

  unlock(id) {
    if (this.isUnlocked(id)) return false;

    const ach = this.achievements.find(a => a.id === id);
    if (!ach) return false;

    this.unlocked[id] = {
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })
    };
    this.saveState();

    // Notificación en pantalla y sonido especial
    if (window.sfx && window.sfx.playAchievement) {
      window.sfx.playAchievement();
    }
    this.showToast(ach);
    this.updateBadgesCount();
    return true;
  }

  showToast(ach) {
    const toast = document.getElementById('achievement-toast');
    if (!toast) return;

    const iconEl = toast.querySelector('.toast-medal-icon');
    const titleEl = toast.querySelector('.toast-medal-title');
    const descEl = toast.querySelector('.toast-medal-desc');

    if (iconEl) iconEl.textContent = ach.symbol;
    if (titleEl) titleEl.textContent = ach.title;
    if (descEl) descEl.textContent = ach.desc;

    toast.classList.remove('active');
    void toast.offsetWidth; // Force reflow
    toast.classList.add('active');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  updateBadgesCount() {
    const count = Object.keys(this.unlocked).length;
    const total = this.achievements.length;
    const badgeEl = document.getElementById('logros-count-badge');
    if (badgeEl) {
      badgeEl.textContent = `${count}/${total}`;
    }
  }

  renderModal() {
    const grid = document.getElementById('achievements-grid');
    const progressFill = document.getElementById('achievements-progress-bar');
    const progressText = document.getElementById('achievements-progress-text');
    if (!grid) return;

    const unlockedCount = Object.keys(this.unlocked).length;
    const totalCount = this.achievements.length;
    const percent = Math.round((unlockedCount / totalCount) * 100);

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${unlockedCount} de ${totalCount} (${percent}%)`;

    grid.innerHTML = this.achievements.map(ach => {
      const isUn = this.isUnlocked(ach.id);
      const info = this.unlocked[ach.id];

      return `
        <div class="medal-card ${isUn ? 'unlocked' : 'locked'} tier-${ach.tier}">
          <div class="medal-emblem-wrap">
            <div class="medal-circle">
              <span class="medal-symbol">${isUn ? ach.symbol : '🔒'}</span>
            </div>
            <span class="medal-ribbon">${ach.ribbon}</span>
          </div>

          <div class="medal-info">
            <div class="medal-tier-tag">${ach.tier.toUpperCase()}</div>
            <h4 class="medal-title">${ach.title}</h4>
            <p class="medal-desc">${ach.desc}</p>
            ${isUn && info ? `<span class="medal-date">Desbloqueado: ${info.date}</span>` : `<span class="medal-locked-hint">Bloqueado</span>`}
          </div>
        </div>
      `;
    }).join('');
  }

  // --- REGISTRO DE EVENTOS DEL JUEGO PARA EVALUAR LOGROS ---
  recordDecision({ isCorrect, isAlien, category, decisionDurationSeconds, livesLeft, phraseText }) {
    if (isCorrect) {
      this.stats.consecutiveStreak++;
      if (this.stats.consecutiveStreak > this.stats.maxStreak) {
        this.stats.maxStreak = this.stats.consecutiveStreak;
      }

      this.stats.careerScore += 100;

      // 1. Primer alien
      if (isAlien) {
        this.stats.totalAliensCaught++;
        this.unlock('primer_alien');

        // Cazador de 10 aliens
        if (this.stats.totalAliensCaught >= 10) {
          this.unlock('cazador_diez');
        }

        // Categorías específicas de ortografía
        if (category === 'Tildes') this.unlock('ojo_halcon');
        if (category === 'B/V') this.unlock('guardian_bv');
        if (category === 'Hache') this.unlock('cazador_hache');
      } else {
        // 2. Humano
        this.stats.totalHumansAllowed++;
        this.unlock('bienvenido_mexico');

        if (phraseText && (phraseText.includes('gastronomía') || phraseText.includes('comida') || phraseText.includes('cultural') || phraseText.includes('museos') || phraseText.includes('chocolate'))) {
          this.stats.totalCultureAllowed++;
          if (this.stats.totalCultureAllowed >= 5) {
            this.unlock('curioso_turista');
          }
        }
      }

      // Reflejos rápidos (menos de 2.5s)
      if (decisionDurationSeconds > 0 && decisionDurationSeconds <= 2.5) {
        this.unlock('reflejos_alien');
      }

      // Racha de 5 aciertos
      if (this.stats.consecutiveStreak >= 5) {
        this.unlock('racha_cinco');
      }

      // Puntos de carrera
      if (this.stats.careerScore >= 2000) {
        this.unlock('maestro_rae');
      }
    } else {
      // Si falla, se rompe la racha
      this.stats.consecutiveStreak = 0;
    }

    this.saveState();
  }

  recordRoundFinish({ lives, accuracy, roundScore, mode, blitzCorrect, survivalStreak, campaignCompleted }) {
    // Sobrevivir con 1 sola vida (en modo clásico o campaña)
    if (lives === 1 && (mode === 'classic' || mode === 'campaign')) {
      this.unlock('al_borde');
    }

    // Ronda 100% y 3 vidas
    if (accuracy === 100 && lives === 3) {
      this.unlock('inspeccion_perfecta');
    }

    // Logros de nuevos modos de juego
    if (blitzCorrect >= 10) {
      this.unlock('blitz_master');
    }

    if (survivalStreak >= 8) {
      this.unlock('survival_legend');
    }

    if (campaignCompleted) {
      this.unlock('campana_heroe');
    }

    this.saveState();
  }
}

const achievementsInstance = new AchievementsManager();

if (typeof window !== 'undefined') {
  window.AchievementsManager = AchievementsManager;
  window.achievements = achievementsInstance;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AchievementsManager, achievements: achievementsInstance };
}
