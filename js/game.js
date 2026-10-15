// ============================================================================
// ASTROGAMA: CONTROLADOR PRINCIPAL DEL JUEGO (GAME ENGINE & UI)
// ============================================================================

(function () {
  const TOTAL_TRAVELERS_ROUND = 10;
  let roundQueue = [];
  let currentIndex = 0;
  let score = 0;
  let lives = 3;
  let correctCount = 0;
  let roundStartTime = null;
  let timerInterval = null;
  let totalSeconds = 0;
  let isDecisionLocked = false;
  let autoNextTimeout = null;

  // DOM Elements
  const scoreDisplay = document.getElementById('score-display');
  const travelerNum = document.getElementById('traveler-num');
  const timerDisplay = document.getElementById('timer-display');
  const alarmOverlay = document.getElementById('alarm-overlay');
  const travelerNameEl = document.getElementById('traveler-name');
  const docNumberEl = document.getElementById('doc-number');
  const passportMrzEl = document.getElementById('passport-mrz');
  const avatarImgEl = document.getElementById('avatar-img');
  const destValEl = document.getElementById('dest-val');
  const durValEl = document.getElementById('dur-val');
  const motivoTextEl = document.getElementById('motivo-text');
  const signatureTextEl = document.getElementById('signature-text');
  const stampMark = document.getElementById('stamp-mark');
  const feedbackBanner = document.getElementById('feedback-banner');
  const feedbackMessage = document.getElementById('feedback-message');
  const feedbackIcon = document.getElementById('feedback-icon');
  const btnAllow = document.getElementById('btn-allow');
  const btnImpostor = document.getElementById('btn-impostor');
  const endModal = document.getElementById('end-modal');
  const musicBtn = document.getElementById('music-btn');
  const musicIcon = document.getElementById('music-icon');
  const soundBtn = document.getElementById('sound-btn');
  const soundIcon = document.getElementById('sound-icon');
  const btnNext = document.getElementById('btn-next');
  const btnRestart = document.getElementById('btn-restart');
  const totalCasesBadge = document.getElementById('total-cases-badge');
  const startMenu = document.getElementById('start-menu');
  const btnMenuJugar = document.getElementById('btn-menu-jugar');

  function initGame(startTimerNow = true) {
    const casesBank = window.CASES_BANK || [];
    const travelerProfiles = window.TRAVELER_PROFILES || [];

    if (totalCasesBadge) {
      totalCasesBadge.textContent = `${casesBank.length} casos cargados`;
    }

    score = 0;
    lives = 3;
    correctCount = 0;
    currentIndex = 0;
    totalSeconds = 0;
    isDecisionLocked = false;

    updateLivesUI();
    scoreDisplay.textContent = '0';
    travelerNum.textContent = '1';
    timerDisplay.textContent = '00:00';
    endModal.classList.remove('active');
    feedbackBanner.className = 'feedback-banner';
    stampMark.className = 'stamp-overlay';

    // Shuffle the 100+ cases and traveler profiles
    const shuffledCases = [...casesBank].sort(() => Math.random() - 0.5);
    const shuffledProfiles = [...travelerProfiles].sort(() => Math.random() - 0.5);

    roundQueue = [];
    for (let i = 0; i < TOTAL_TRAVELERS_ROUND; i++) {
      const caseData = shuffledCases[i % shuffledCases.length];
      const profile = shuffledProfiles[i % shuffledProfiles.length];
      const docNum = 'US-' + Math.floor(10000000 + Math.random() * 90000000) + 'A';
      const seed = profile.name.toLowerCase().replace(/\s+/g, '_') + '_' + Math.floor(Math.random() * 9999);
      
      roundQueue.push({
        phrase: caseData,
        name: profile.name,
        dest: profile.dest,
        dur: profile.dur,
        docNum: docNum,
        seed: seed
      });
    }

    // Start global round timer if requested
    if (timerInterval) clearInterval(timerInterval);
    if (startTimerNow) {
      roundStartTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
    }

    loadTraveler(0);
  }

  function updateTimer() {
    totalSeconds = Math.floor((Date.now() - roundStartTime) / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  function loadTraveler(index) {
    if (index >= TOTAL_TRAVELERS_ROUND || lives <= 0) {
      finishRound();
      return;
    }

    isDecisionLocked = false;
    btnAllow.disabled = false;
    btnImpostor.disabled = false;

    // Reset visual stamp & feedback banner
    stampMark.className = 'stamp-overlay';
    feedbackBanner.className = 'feedback-banner';

    const current = roundQueue[index];
    travelerNum.textContent = index + 1;

    // Passport data
    travelerNameEl.textContent = current.name;
    docNumberEl.textContent = current.docNum;
    signatureTextEl.textContent = current.name;

    // DiceBear Avataaars URL
    avatarImgEl.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(current.seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    // MRZ code
    const nameParts = current.name.toUpperCase().split(' ');
    const lastName = nameParts[1] || nameParts[0];
    const firstName = nameParts[0];
    passportMrzEl.innerHTML = `P&lt;USA&lt;&lt;${lastName}&lt;&lt;${firstName}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>${current.docNum.replace(/[^A-Z0-9]/g, '')}USA${Math.floor(100000 + Math.random()*899999)}4M2911241&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02`;

    // Declaration form
    destValEl.textContent = current.dest;
    durValEl.textContent = current.dur;
    motivoTextEl.textContent = `"${current.phrase.text}"`;
  }

  function makeDecision(playerChoseAlien) {
    if (isDecisionLocked) return;
    isDecisionLocked = true;
    btnAllow.disabled = true;
    btnImpostor.disabled = true;

    const current = roundQueue[currentIndex];
    const isActuallyAlien = current.phrase.isAlien;
    const isCorrect = (playerChoseAlien === isActuallyAlien);

    if (window.sfx) window.sfx.playStamp();

    // Show stamp animation
    if (playerChoseAlien) {
      stampMark.textContent = "IMPOSTOR";
      stampMark.className = "stamp-overlay impostor stamped";
    } else {
      stampMark.textContent = "APROBADO";
      stampMark.className = "stamp-overlay aprobado stamped";
    }

    if (isCorrect) {
      score += 100;
      correctCount++;
      scoreDisplay.textContent = score;
      if (window.sfx) window.sfx.playSuccess();

      feedbackBanner.className = 'feedback-banner success show';
      feedbackIcon.textContent = playerChoseAlien ? '👾' : '👤';
      feedbackMessage.textContent = `¡ACIERTO! (+100 pts) ${current.phrase.reason}`;
    } else {
      lives--;
      updateLivesUI();
      if (window.sfx) window.sfx.playAlarm();
      triggerAlarmVisual();

      feedbackBanner.className = 'feedback-banner error show';
      feedbackIcon.textContent = '🚨';
      if (isActuallyAlien) {
        feedbackMessage.textContent = `¡FALLO! Era un alien impostor: ${current.phrase.reason}`;
      } else {
        feedbackMessage.textContent = `¡FALLO! Era un turista humano inocente: ${current.phrase.reason}`;
      }
    }

    // Check if player ran out of lives
    if (lives <= 0) {
      setTimeout(() => {
        finishRound();
      }, 1600);
      return;
    }

    // Auto advance after 2.6 seconds if not clicked manually
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(() => {
      nextTraveler();
    }, 2600);
  }

  function nextTraveler() {
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    if (currentIndex + 1 < TOTAL_TRAVELERS_ROUND && lives > 0) {
      currentIndex++;
      loadTraveler(currentIndex);
    } else {
      finishRound();
    }
  }

  function updateLivesUI() {
    for (let i = 1; i <= 3; i++) {
      const heartEl = document.getElementById(`life-${i}`);
      if (heartEl) {
        if (i <= lives) {
          heartEl.classList.remove('lost');
        } else {
          heartEl.classList.add('lost');
        }
      }
    }
  }

  function triggerAlarmVisual() {
    alarmOverlay.classList.add('active');
    setTimeout(() => {
      alarmOverlay.classList.remove('active');
    }, 800);
  }

  function finishRound() {
    if (timerInterval) clearInterval(timerInterval);
    if (autoNextTimeout) clearTimeout(autoNextTimeout);

    const accuracy = Math.round((correctCount / TOTAL_TRAVELERS_ROUND) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-accuracy').textContent = `${accuracy}%`;
    document.getElementById('final-time').textContent = `${totalSeconds}s`;

    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const rankBadge = document.getElementById('rank-badge');

    if (lives <= 0) {
      modalIcon.textContent = "🚨";
      modalTitle.textContent = "¡INSPECCIÓN FALLIDA!";
      modalTitle.style.color = "var(--alarm-red)";
      rankBadge.textContent = "Agente Novato (Se filtraron aliens) 🚨";
    } else {
      if (window.sfx) window.sfx.playVictory();
      modalTitle.style.color = "#fff";
      if (accuracy === 100) {
        modalIcon.textContent = "🎖️";
        rankBadge.textContent = "Agente Élite Anti-Aliens 🎖️";
      } else if (accuracy >= 70) {
        modalIcon.textContent = "🔍";
        rankBadge.textContent = "Inspector Oficial 🔍";
      } else {
        modalIcon.textContent = "🚨";
        rankBadge.textContent = "Agente Novato (Se filtraron aliens) 🚨";
      }
    }

    endModal.classList.add('active');
  }

  function restartRound() {
    initGame();
  }

  // Music toggle listener
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (window.sfx) {
        const isPlaying = window.sfx.toggleMusic();
        musicIcon.textContent = isPlaying ? '🎵' : '🔇';
        musicBtn.style.color = isPlaying ? '#fff' : '#64748b';
      }
    });
  }

  // Sound toggle listener
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      if (window.sfx) {
        window.sfx.enabled = !window.sfx.enabled;
        soundIcon.textContent = window.sfx.enabled ? '🔊' : '🔇';
        soundBtn.style.color = window.sfx.enabled ? '#fff' : '#64748b';
      }
    });
  }

  // Desbloqueo suave de música en bucle con la primera interacción del usuario
  function triggerUserAudioStart() {
    if (window.sfx) {
      window.sfx.startBgm();
    }
  }
  window.addEventListener('click', triggerUserAudioStart, { once: true });
  window.addEventListener('keydown', triggerUserAudioStart, { once: true });

  // Botón JUGAR del Menú de Inicio: Transiciona a la mesa de inspección
  if (btnMenuJugar) {
    btnMenuJugar.addEventListener('click', () => {
      if (startMenu) {
        startMenu.classList.add('hidden');
      }
      if (window.sfx) {
        window.sfx.startBgm();
        window.sfx.playStamp();
      }
      initGame();
    });
  }

  // Action button listeners
  if (btnAllow) {
    btnAllow.addEventListener('click', () => makeDecision(false));
  }
  if (btnImpostor) {
    btnImpostor.addEventListener('click', () => makeDecision(true));
  }
  if (btnNext) {
    btnNext.addEventListener('click', nextTraveler);
  }
  if (btnRestart) {
    btnRestart.addEventListener('click', restartRound);
  }

  // Global keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    // Si el menú de inicio está visible
    if (startMenu && !startMenu.classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (btnMenuJugar) btnMenuJugar.click();
      }
      return;
    }

    if (endModal.classList.contains('active')) {
      if (e.key === 'Enter' || e.key === ' ') {
        restartRound();
      }
      return;
    }

    if (isDecisionLocked) {
      if (e.key === ' ' || e.key === 'Enter') {
        nextTraveler();
      }
      return;
    }

    if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
      makeDecision(false);
    } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
      makeDecision(true);
    }
  });

  // Expose to window for debugging or manual hooks
  window.AstroGama = {
    initGame,
    makeDecision,
    nextTraveler,
    restartRound,
    goToMenu: () => {
      if (startMenu) startMenu.classList.remove('hidden');
      if (timerInterval) clearInterval(timerInterval);
    }
  };

  // Preparar juego en segundo plano sin arrancar el cronómetro hasta pulsar Jugar
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
      initGame(false);
    });
  } else {
    initGame(false);
  }
})();
