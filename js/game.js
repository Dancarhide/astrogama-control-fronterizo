// ============================================================================
// ASTROGAMA: CONTROLADOR PRINCIPAL DEL JUEGO (GAME ENGINE & MODOS MULTIPLES)
// ============================================================================

(function () {
  // MODOS DE JUEGO DISPONIBLES: 'classic' | 'blitz' | 'survival' | 'campaign'
  let currentGameMode = 'classic';
  let campaignDay = 1;
  const CAMPAIGN_TARGETS = { 1: 5, 2: 5, 3: 5, 4: 7 };
  const CAMPAIGN_DESCS = {
    1: "Día 1: Infiltración Acentual (Atento a las tildes)",
    2: "Día 2: Emboscada de Labiales y Silenciosas (B/V y H)",
    3: "Día 3: Confusión de Sibilantes y Velares (C/S/Z y G/J)",
    4: "Día 4: Invasión Masiva Mixta (Todas las reglas)"
  };

  const TOTAL_TRAVELERS_ROUND = 10;
  let roundQueue = [];
  let currentIndex = 0;
  let score = 0;
  let lives = 3;
  let correctCount = 0;
  let roundStartTime = null;
  let timerInterval = null;
  let totalSeconds = 0;
  let blitzTimeRemaining = 60;
  let currentStreak = 0;
  let maxStreakRound = 0;
  let blitzCorrectCount = 0;
  let isDecisionLocked = false;
  let autoNextTimeout = null;
  let travelerStartTime = Date.now();

  // Elementos del DOM
  const scoreDisplay = document.getElementById('score-display');
  const travelerNum = document.getElementById('traveler-num');
  const travelerLabel = document.getElementById('traveler-label');
  const travelerTotal = document.getElementById('traveler-total');
  const travelerTotalWrapper = document.getElementById('traveler-total-wrapper');
  const timerDisplay = document.getElementById('timer-display');
  const timeDeltaContainer = document.getElementById('time-delta-container');
  const hudModeBadge = document.getElementById('hud-mode-badge');
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
  const btnCampaignNext = document.getElementById('btn-campaign-next');
  const totalCasesBadge = document.getElementById('total-cases-badge');
  const startMenu = document.getElementById('start-menu');
  const btnMenuJugar = document.getElementById('btn-menu-jugar');
  const exitGameBtn = document.getElementById('exit-game-btn');
  const btnModalExit = document.getElementById('btn-modal-exit');
  const btnMenuLogros = document.getElementById('btn-menu-logros');
  const hudLogrosBtn = document.getElementById('hud-logros-btn');
  const achievementsModal = document.getElementById('achievements-modal');
  const btnCloseAchievements = document.getElementById('btn-close-achievements');
  const gameModesModal = document.getElementById('game-modes-modal');
  const btnCloseModes = document.getElementById('btn-close-modes');
  const blitzRecordBadge = document.getElementById('blitz-record-badge');
  const survivalRecordBadge = document.getElementById('survival-record-badge');
  const campaignDayBadge = document.getElementById('campaign-day-badge');
  const btnMenuGaleria = document.getElementById('btn-menu-galeria');
  const hudGalleryBtn = document.getElementById('hud-gallery-btn');
  const galleryModal = document.getElementById('gallery-modal');
  const btnCloseGallery = document.getElementById('btn-close-gallery');

  // Cargar estado de progreso de campaña desde almacenamiento
  try {
    const savedDay = localStorage.getItem('astrogama_campaign_day');
    if (savedDay) {
      campaignDay = Math.min(4, Math.max(1, parseInt(savedDay, 10)));
    }
  } catch (e) {
    campaignDay = 1;
  }

  // Helper para generar viajeros
  function createTravelerItem(caseData, profile) {
    const docNum = 'US-' + Math.floor(10000000 + Math.random() * 90000000) + 'A';
    const seed = profile.name.toLowerCase().replace(/\s+/g, '_') + '_' + Math.floor(Math.random() * 9999);
    return {
      phrase: caseData,
      name: profile.name,
      dest: caseData.dest || "Ciudad de México (CDMX)",
      dur: caseData.dur || "7 Días (Turismo)",
      docNum: docNum,
      seed: seed
    };
  }

  // Filtrar casos según modo y día de campaña
  function getModeCases(casesBank) {
    if (currentGameMode === 'campaign') {
      if (campaignDay === 1) {
        return casesBank.filter(c => c.category === 'Tildes' || !c.isAlien);
      } else if (campaignDay === 2) {
        return casesBank.filter(c => c.category === 'B/V' || c.category === 'Hache' || !c.isAlien);
      } else if (campaignDay === 3) {
        return casesBank.filter(c => c.category === 'C/S/Z' || c.category === 'G/J' || c.category === 'LL/Y' || !c.isAlien);
      } else {
        return casesBank;
      }
    }
    return casesBank;
  }

  // Inicializar partida según el modo de juego
  function initGame(startTimerNow = true) {
    const casesBank = window.CASES_BANK || [];
    const travelerProfiles = window.TRAVELER_PROFILES || [];

    if (totalCasesBadge) {
      if (currentGameMode === 'campaign') {
        totalCasesBadge.textContent = CAMPAIGN_DESCS[campaignDay] || `Día ${campaignDay} de 4`;
      } else {
        totalCasesBadge.textContent = `${casesBank.length} casos cargados`;
      }
    }

    score = 0;
    correctCount = 0;
    currentIndex = 0;
    totalSeconds = 0;
    currentStreak = 0;
    maxStreakRound = 0;
    blitzCorrectCount = 0;
    isDecisionLocked = false;

    scoreDisplay.textContent = '0';
    if (endModal) endModal.classList.remove('active');
    if (btnCampaignNext) btnCampaignNext.style.display = 'none';
    feedbackBanner.className = 'feedback-banner';
    stampMark.className = 'stamp-overlay';

    // Configuración específica de cada modo de juego
    if (hudModeBadge) {
      if (currentGameMode === 'classic') {
        hudModeBadge.textContent = 'PROTOCOLO CLÁSICO';
        hudModeBadge.style.color = 'var(--neon-green)';
        hudModeBadge.style.borderColor = 'var(--neon-green)';
      } else if (currentGameMode === 'blitz') {
        hudModeBadge.textContent = 'FIEBRE BLITZ (60s)';
        hudModeBadge.style.color = 'var(--accent-yellow)';
        hudModeBadge.style.borderColor = 'var(--accent-yellow)';
      } else if (currentGameMode === 'survival') {
        hudModeBadge.textContent = 'TOLERANCIA CERO (1 VIDA)';
        hudModeBadge.style.color = 'var(--alarm-red)';
        hudModeBadge.style.borderColor = 'var(--alarm-red)';
      } else if (currentGameMode === 'campaign') {
        hudModeBadge.textContent = `CAMPAÑA: DÍA ${campaignDay}/4`;
        hudModeBadge.style.color = 'var(--cyber-blue)';
        hudModeBadge.style.borderColor = 'var(--cyber-blue)';
      }
    }

    if (currentGameMode === 'survival') {
      lives = 1;
      if (travelerLabel) travelerLabel.textContent = 'Racha';
      if (travelerNum) travelerNum.textContent = '0';
      if (travelerTotalWrapper) travelerTotalWrapper.style.display = 'none';
    } else if (currentGameMode === 'blitz') {
      lives = 3;
      blitzTimeRemaining = 60;
      if (travelerLabel) travelerLabel.textContent = 'Aciertos';
      if (travelerNum) travelerNum.textContent = '0';
      if (travelerTotalWrapper) travelerTotalWrapper.style.display = 'none';
    } else if (currentGameMode === 'campaign') {
      lives = 3;
      const targetCount = CAMPAIGN_TARGETS[campaignDay] || 5;
      if (travelerLabel) travelerLabel.textContent = 'Viajero';
      if (travelerNum) travelerNum.textContent = '1';
      if (travelerTotal) travelerTotal.textContent = targetCount;
      if (travelerTotalWrapper) travelerTotalWrapper.style.display = 'inline';
    } else {
      // Clásico
      lives = 3;
      if (travelerLabel) travelerLabel.textContent = 'Viajero';
      if (travelerNum) travelerNum.textContent = '1';
      if (travelerTotal) travelerTotal.textContent = String(TOTAL_TRAVELERS_ROUND);
      if (travelerTotalWrapper) travelerTotalWrapper.style.display = 'inline';
    }

    updateLivesUI();

    // Barajar banco de casos y perfiles
    const availableCases = getModeCases(casesBank);
    const shuffledCases = [...availableCases].sort(() => Math.random() - 0.5);
    const shuffledProfiles = [...travelerProfiles].sort(() => Math.random() - 0.5);

    let roundLength = TOTAL_TRAVELERS_ROUND;
    if (currentGameMode === 'campaign') {
      roundLength = CAMPAIGN_TARGETS[campaignDay] || 5;
    } else if (currentGameMode === 'blitz' || currentGameMode === 'survival') {
      roundLength = 40; // Cola extendida que se auto-rellena
    }

    roundQueue = [];
    for (let i = 0; i < roundLength; i++) {
      const caseData = shuffledCases[i % shuffledCases.length];
      const profile = shuffledProfiles[i % shuffledProfiles.length];
      roundQueue.push(createTravelerItem(caseData, profile));
    }

    // Cronómetros según el modo
    if (timerInterval) clearInterval(timerInterval);
    if (startTimerNow) {
      if (window.sfx) {
        window.sfx.playGameMusic();
      }

      if (currentGameMode === 'blitz') {
        timerDisplay.textContent = '01:00';
        timerDisplay.style.color = '#fff';
        timerInterval = setInterval(updateBlitzTimer, 1000);
      } else {
        timerDisplay.textContent = '00:00';
        timerDisplay.style.color = '#fff';
        roundStartTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
      }
    }

    loadTraveler(0);
  }

  function updateTimer() {
    totalSeconds = Math.floor((Date.now() - roundStartTime) / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  function updateBlitzTimer() {
    blitzTimeRemaining--;
    if (blitzTimeRemaining <= 0) {
      blitzTimeRemaining = 0;
      timerDisplay.textContent = '00:00';
      timerDisplay.style.color = 'var(--alarm-red)';
      if (timerInterval) clearInterval(timerInterval);
      finishRound();
      return;
    }

    const minutes = String(Math.floor(blitzTimeRemaining / 60)).padStart(2, '0');
    const seconds = String(blitzTimeRemaining % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (blitzTimeRemaining <= 10) {
      timerDisplay.style.color = 'var(--alarm-red)';
    } else {
      timerDisplay.style.color = '#fff';
    }
  }

  // Notificación flotante de bonificación/penalización de tiempo
  function showTimeDelta(seconds, isPlus) {
    if (!timeDeltaContainer) return;
    const deltaEl = document.createElement('div');
    deltaEl.className = `time-delta-popup ${isPlus ? 'plus' : 'minus'}`;
    deltaEl.textContent = `${isPlus ? '+' : '-'}${seconds}s`;
    timeDeltaContainer.appendChild(deltaEl);
    setTimeout(() => {
      deltaEl.remove();
    }, 950);
  }

  // Cargar viajero en la mesa de inspección
  function loadTraveler(index) {
    // Si la cola se está agotando en Blitz o Supervivencia, auto-rellenarla
    if ((currentGameMode === 'blitz' || currentGameMode === 'survival') && index >= roundQueue.length - 5) {
      const casesBank = window.CASES_BANK || [];
      const profiles = window.TRAVELER_PROFILES || [];
      const shuffledCases = [...casesBank].sort(() => Math.random() - 0.5);
      const shuffledProfiles = [...profiles].sort(() => Math.random() - 0.5);
      for (let i = 0; i < 20; i++) {
        const c = shuffledCases[i % shuffledCases.length];
        const p = shuffledProfiles[i % shuffledProfiles.length];
        roundQueue.push(createTravelerItem(c, p));
      }
    }

    const targetLimit = (currentGameMode === 'campaign')
      ? (CAMPAIGN_TARGETS[campaignDay] || 5)
      : TOTAL_TRAVELERS_ROUND;

    if (currentGameMode === 'classic' || currentGameMode === 'campaign') {
      if (index >= targetLimit || lives <= 0) {
        finishRound();
        return;
      }
    } else if (lives <= 0) {
      finishRound();
      return;
    }

    isDecisionLocked = false;
    btnAllow.disabled = false;
    btnImpostor.disabled = false;

    stampMark.className = 'stamp-overlay';
    feedbackBanner.className = 'feedback-banner';

    const current = roundQueue[index];

    // Actualizar indicador de viajero según el modo
    if (currentGameMode === 'classic') {
      travelerNum.textContent = index + 1;
    } else if (currentGameMode === 'campaign') {
      travelerNum.textContent = index + 1;
    } else if (currentGameMode === 'survival') {
      travelerNum.textContent = currentStreak;
    } else if (currentGameMode === 'blitz') {
      travelerNum.textContent = blitzCorrectCount;
    }

    // Datos del pasaporte
    travelerNameEl.textContent = current.name;
    docNumberEl.textContent = current.docNum;
    signatureTextEl.textContent = current.name;

    // URL de avatar DiceBear Avataaars
    avatarImgEl.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(current.seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    // Código MRZ
    const nameParts = current.name.toUpperCase().split(' ');
    const lastName = nameParts[1] || nameParts[0];
    const firstName = nameParts[0];
    passportMrzEl.innerHTML = `P&lt;USA&lt;&lt;${lastName}&lt;&lt;${firstName}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>${current.docNum.replace(/[^A-Z0-9]/g, '')}USA${Math.floor(100000 + Math.random()*899999)}4M2911241&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02`;

    // Hoja de declaración de aduana
    destValEl.textContent = current.dest;
    durValEl.textContent = current.dur;
    motivoTextEl.textContent = `"${current.phrase.text}"`;

    travelerStartTime = Date.now();
  }

  // Toma de decisión del jugador
  function makeDecision(playerChoseAlien) {
    if (isDecisionLocked) return;
    isDecisionLocked = true;
    btnAllow.disabled = true;
    btnImpostor.disabled = true;

    const current = roundQueue[currentIndex];
    const isActuallyAlien = current.phrase.isAlien;
    const isCorrect = (playerChoseAlien === isActuallyAlien);
    const decisionDurationSeconds = (Date.now() - travelerStartTime) / 1000;

    if (window.sfx) window.sfx.playStamp();

    // Sello visual
    if (playerChoseAlien) {
      stampMark.textContent = "IMPOSTOR";
      stampMark.className = "stamp-overlay impostor stamped";
    } else {
      stampMark.textContent = "APROBADO";
      stampMark.className = "stamp-overlay aprobado stamped";
    }

    // Evaluar y registrar logro si corresponde
    if (window.achievements) {
      window.achievements.recordDecision({
        isCorrect,
        isAlien: isActuallyAlien,
        category: current.phrase.category,
        decisionDurationSeconds,
        livesLeft: lives,
        phraseText: current.phrase.text
      });
    }

    if (isCorrect) {
      correctCount++;
      if (window.sfx) window.sfx.playSuccess();

      // Revelar postal de recuerdo si se aprobó a un turista humano legítimo
      if (!isActuallyAlien && window.gallery) {
        window.gallery.checkUnlockFromTourist(current.dest, current.phrase.text);
      }

      if (currentGameMode === 'blitz') {
        score += 150;
        blitzCorrectCount++;
        blitzTimeRemaining += 5;
        showTimeDelta(5, true);
        travelerNum.textContent = blitzCorrectCount;
        feedbackMessage.textContent = `¡ACIERTO BLITZ! (+150 pts | +5s) ${current.phrase.reason}`;
      } else if (currentGameMode === 'survival') {
        score += 100;
        currentStreak++;
        if (currentStreak > maxStreakRound) maxStreakRound = currentStreak;
        travelerNum.textContent = currentStreak;
        feedbackMessage.textContent = `¡ACIERTO! Racha: ${currentStreak} | ${current.phrase.reason}`;
      } else {
        score += 100;
        feedbackMessage.textContent = `¡ACIERTO! (+100 pts) ${current.phrase.reason}`;
      }

      scoreDisplay.textContent = score;
      feedbackBanner.className = 'feedback-banner success show';
      feedbackIcon.textContent = playerChoseAlien ? '👾' : '👤';
    } else {
      if (window.sfx) window.sfx.playAlarm();
      triggerAlarmVisual();

      if (currentGameMode === 'blitz') {
        blitzTimeRemaining = Math.max(0, blitzTimeRemaining - 5);
        showTimeDelta(5, false);
        feedbackBanner.className = 'feedback-banner error show';
        feedbackIcon.textContent = '🚨';
        feedbackMessage.textContent = `¡FALLO BLITZ! (-5s) ${current.phrase.reason}`;

        if (blitzTimeRemaining <= 0) {
          finishRound();
          return;
        }
      } else if (currentGameMode === 'survival') {
        lives = 0;
        updateLivesUI();
        feedbackBanner.className = 'feedback-banner error show';
        feedbackIcon.textContent = '💀';
        feedbackMessage.textContent = `¡FALLO FATAL! Fin de la racha: ${current.phrase.reason}`;
        setTimeout(() => { finishRound(); }, 1400);
        return;
      } else {
        lives--;
        updateLivesUI();
        feedbackBanner.className = 'feedback-banner error show';
        feedbackIcon.textContent = '🚨';
        if (isActuallyAlien) {
          feedbackMessage.textContent = `¡FALLO! Era un alien impostor: ${current.phrase.reason}`;
        } else {
          feedbackMessage.textContent = `¡FALLO! Era un turista humano inocente: ${current.phrase.reason}`;
        }
      }
    }

    // Comprobar si se agotaron las vidas
    if (lives <= 0) {
      setTimeout(() => {
        finishRound();
      }, 1500);
      return;
    }

    // Avance automático tras 2.4s
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(() => {
      nextTraveler();
    }, 2400);
  }

  function nextTraveler() {
    if (autoNextTimeout) clearTimeout(autoNextTimeout);

    const targetLimit = (currentGameMode === 'campaign')
      ? (CAMPAIGN_TARGETS[campaignDay] || 5)
      : TOTAL_TRAVELERS_ROUND;

    if (currentGameMode === 'classic' || currentGameMode === 'campaign') {
      if (currentIndex + 1 < targetLimit && lives > 0) {
        currentIndex++;
        loadTraveler(currentIndex);
      } else {
        finishRound();
      }
    } else {
      // Blitz o Supervivencia: continuar indefinidamente mientras haya tiempo y vidas
      if (lives > 0 && (currentGameMode !== 'blitz' || blitzTimeRemaining > 0)) {
        currentIndex++;
        loadTraveler(currentIndex);
      } else {
        finishRound();
      }
    }
  }

  function updateLivesUI() {
    for (let i = 1; i <= 3; i++) {
      const heartEl = document.getElementById(`life-${i}`);
      if (heartEl) {
        if (currentGameMode === 'survival' && i > 1) {
          heartEl.style.display = 'none';
        } else {
          heartEl.style.display = 'inline';
        }

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

  // Finalizar ronda y mostrar informe en modal
  function finishRound() {
    if (timerInterval) clearInterval(timerInterval);
    if (autoNextTimeout) clearTimeout(autoNextTimeout);

    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const rankBadge = document.getElementById('rank-badge');
    const finalScoreEl = document.getElementById('final-score');
    const finalAccuracyEl = document.getElementById('final-accuracy');
    const finalTimeEl = document.getElementById('final-time');

    finalScoreEl.textContent = score;

    let accuracy = 100;
    const totalDecisions = (currentGameMode === 'classic' || currentGameMode === 'campaign')
      ? (currentIndex + 1)
      : (correctCount + (lives <= 0 ? 1 : 0));
    if (totalDecisions > 0) {
      accuracy = Math.round((correctCount / totalDecisions) * 100);
    }
    finalAccuracyEl.textContent = `${accuracy}%`;

    // MODAL SEGÚN MODO
    if (currentGameMode === 'blitz') {
      finalTimeEl.textContent = '60s Blitz';
      modalSubtitle.textContent = `Fiebre Blitz completada con ${blitzCorrectCount} aciertos`;

      // Guardar récord Blitz
      let savedBlitzRecord = 0;
      try {
        savedBlitzRecord = parseInt(localStorage.getItem('astrogama_record_blitz') || '0', 10);
      } catch (e) {}

      if (score > savedBlitzRecord) {
        localStorage.setItem('astrogama_record_blitz', score);
        rankBadge.textContent = `¡NUEVO RÉCORD BLITZ: ${score} PTS! ⚡`;
      } else {
        rankBadge.textContent = `Récord personal: ${savedBlitzRecord} pts | Lograste: ${score} pts`;
      }

      if (blitzCorrectCount >= 10) {
        modalIcon.textContent = "⚡";
        modalTitle.textContent = "¡RAYO FRONTERIZO!";
        modalTitle.style.color = "var(--accent-yellow)";
      } else {
        modalIcon.textContent = "⏱️";
        modalTitle.textContent = "TIEMPO AGOTADO";
        modalTitle.style.color = "#fff";
      }

    } else if (currentGameMode === 'survival') {
      finalTimeEl.textContent = `${totalSeconds}s`;
      modalSubtitle.textContent = `Supervivencia Tolerancia Cero - Racha: ${maxStreakRound}`;

      // Guardar récord de Supervivencia
      let savedSurvivalRecord = 0;
      try {
        savedSurvivalRecord = parseInt(localStorage.getItem('astrogama_record_survival') || '0', 10);
      } catch (e) {}

      if (maxStreakRound > savedSurvivalRecord) {
        localStorage.setItem('astrogama_record_survival', maxStreakRound);
        rankBadge.textContent = `¡NUEVO RÉCORD DE RACHA: ${maxStreakRound} SEGUIDOS! 💀`;
      } else {
        rankBadge.textContent = `Récord de Racha: ${savedSurvivalRecord} | Lograste: ${maxStreakRound}`;
      }

      modalIcon.textContent = maxStreakRound >= 8 ? "🛡️" : "💀";
      modalTitle.textContent = maxStreakRound >= 8 ? "¡DEFENSA INQUEBRANTABLE!" : "INSPECCIÓN TERMINADA";
      modalTitle.style.color = maxStreakRound >= 8 ? "var(--cyber-blue)" : "var(--alarm-red)";

    } else if (currentGameMode === 'campaign') {
      finalTimeEl.textContent = `${totalSeconds}s`;
      const dayTarget = CAMPAIGN_TARGETS[campaignDay] || 5;
      const isDayCleared = lives > 0 && correctCount >= dayTarget - 1;

      if (isDayCleared) {
        if (window.sfx) window.sfx.playVictory();
        modalIcon.textContent = "🎖️";
        modalTitle.textContent = `¡DÍA ${campaignDay} SUPERADO!`;
        modalTitle.style.color = "var(--neon-green)";
        modalSubtitle.textContent = `Has contenido la oleada del ${CAMPAIGN_DESCS[campaignDay]}`;
        rankBadge.textContent = `Pase Autorizado al Siguiente Turno 🇲🇽`;

        if (campaignDay < 4) {
          if (btnCampaignNext) {
            btnCampaignNext.style.display = 'block';
            btnCampaignNext.textContent = `⏩ AVANZAR AL DÍA ${campaignDay + 1}`;
            btnCampaignNext.onclick = () => {
              campaignDay++;
              try { localStorage.setItem('astrogama_campaign_day', campaignDay); } catch(e){}
              initGame(true);
            };
          }
        } else {
          // ¡Campaña finalizada!
          modalIcon.textContent = "👑";
          modalTitle.textContent = "¡CAMPAÑA VICTORIOSA!";
          modalSubtitle.textContent = "¡Has salvado a México de la invasión alienígena por completo!";
          rankBadge.textContent = "Héroe Supremo de la Frontera 💎";
          try { localStorage.setItem('astrogama_campaign_day', 1); } catch(e){}
        }
      } else {
        modalIcon.textContent = "🚨";
        modalTitle.textContent = `FALLO EN DÍA ${campaignDay}`;
        modalTitle.style.color = "var(--alarm-red)";
        modalSubtitle.textContent = "Los aliens rompieron el cerco migratorio en este turno.";
        rankBadge.textContent = "Reintenta el Día para continuar la Campaña";
      }

    } else {
      // Clásico
      finalTimeEl.textContent = `${totalSeconds}s`;
      modalSubtitle.textContent = "Reporte oficial del puesto fronterizo";

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
    }

    // Registrar estadísticas para logros
    if (window.achievements) {
      window.achievements.recordRoundFinish({
        lives,
        accuracy,
        roundScore: score,
        mode: currentGameMode,
        blitzCorrect: blitzCorrectCount,
        survivalStreak: maxStreakRound,
        campaignCompleted: (currentGameMode === 'campaign' && campaignDay === 4 && lives > 0)
      });
    }

    endModal.classList.add('active');
  }

  function restartRound() {
    initGame(true);
  }

  // Selector de Modos de Juego (Modal)
  function openGameModesModal() {
    let blitzRecord = 0;
    let survivalRecord = 0;
    try {
      blitzRecord = parseInt(localStorage.getItem('astrogama_record_blitz') || '0', 10);
      survivalRecord = parseInt(localStorage.getItem('astrogama_record_survival') || '0', 10);
    } catch(e) {}

    if (blitzRecordBadge) blitzRecordBadge.textContent = `${blitzRecord} pts`;
    if (survivalRecordBadge) survivalRecordBadge.textContent = `${survivalRecord} aciertos`;
    if (campaignDayBadge) campaignDayBadge.textContent = `Día ${campaignDay} de 4`;

    if (gameModesModal) {
      gameModesModal.classList.add('active');
    }
  }

  function closeGameModesModal() {
    if (gameModesModal) {
      gameModesModal.classList.remove('active');
    }
  }

  function selectGameMode(mode) {
    currentGameMode = mode;
    closeGameModesModal();

    if (startMenu) {
      startMenu.classList.add('hidden');
    }
    if (window.sfx) {
      window.sfx.playStamp();
      window.sfx.playGameMusic();
    }
    initGame(true);
  }

  // Listeners de tarjetas de modo
  ['classic', 'blitz', 'survival', 'campaign'].forEach(mode => {
    const cardEl = document.getElementById(`mode-card-${mode}`);
    if (cardEl) {
      cardEl.addEventListener('click', () => selectGameMode(mode));
    }
  });

  if (btnCloseModes) {
    btnCloseModes.addEventListener('click', closeGameModesModal);
  }

  // Control del expediente de Logros y Condecoraciones
  function openAchievements() {
    if (window.achievements) {
      window.achievements.renderModal();
    }
    if (achievementsModal) {
      achievementsModal.classList.add('active');
    }
  }

  function closeAchievements() {
    if (achievementsModal) {
      achievementsModal.classList.remove('active');
    }
  }

  if (btnMenuLogros) {
    btnMenuLogros.addEventListener('click', openAchievements);
  }
  if (hudLogrosBtn) {
    hudLogrosBtn.addEventListener('click', openAchievements);
  }
  if (btnCloseAchievements) {
    btnCloseAchievements.addEventListener('click', closeAchievements);
  }

  // Control del Álbum de Postales y Galería de México
  function openGallery(filter = 'all') {
    if (window.gallery) {
      window.gallery.renderModal(filter);
    }
    if (galleryModal) {
      galleryModal.classList.add('active');
    }
  }

  function closeGallery() {
    if (galleryModal) {
      galleryModal.classList.remove('active');
    }
  }

  if (btnMenuGaleria) {
    btnMenuGaleria.addEventListener('click', () => openGallery('all'));
  }
  if (hudGalleryBtn) {
    hudGalleryBtn.addEventListener('click', () => openGallery('all'));
  }
  if (btnCloseGallery) {
    btnCloseGallery.addEventListener('click', closeGallery);
  }

  // Pestañas de filtrado de la galería
  ['all', 'unlocked', 'locked'].forEach(filterName => {
    const tabEl = document.getElementById(`tab-gallery-${filterName}`);
    if (tabEl) {
      tabEl.addEventListener('click', () => {
        document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
        tabEl.classList.add('active');
        if (window.gallery) window.gallery.renderModal(filterName);
      });
    }
  });

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

  // Desbloqueo suave de audio
  function triggerUserAudioStart() {
    if (window.sfx) {
      if (startMenu && !startMenu.classList.contains('hidden')) {
        window.sfx.playMenuMusic();
      } else {
        window.sfx.playGameMusic();
      }
    }
  }
  window.addEventListener('click', triggerUserAudioStart, { once: true });
  window.addEventListener('keydown', triggerUserAudioStart, { once: true });

  // Botón JUGAR del Menú de Inicio: abre el Selector de Modos de Juego
  if (btnMenuJugar) {
    btnMenuJugar.addEventListener('click', () => {
      if (window.sfx) window.sfx.playStamp();
      openGameModesModal();
    });
  }

  // Regresar al Menú de Inicio desde el juego
  function returnToStartMenu() {
    if (timerInterval) clearInterval(timerInterval);
    if (autoNextTimeout) clearTimeout(autoNextTimeout);

    if (endModal) endModal.classList.remove('active');
    if (gameModesModal) gameModesModal.classList.remove('active');
    if (galleryModal) galleryModal.classList.remove('active');

    if (startMenu) {
      startMenu.classList.remove('hidden');
    }

    if (window.sfx) {
      window.sfx.playMenuMusic();
    }
  }

  if (exitGameBtn) {
    exitGameBtn.addEventListener('click', returnToStartMenu);
  }
  if (btnModalExit) {
    btnModalExit.addEventListener('click', returnToStartMenu);
  }

  // Botones de acción del juego
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

  // Atajos de teclado
  window.addEventListener('keydown', (e) => {
    // Si algún modal está abierto
    if (achievementsModal && achievementsModal.classList.contains('active')) {
      if (e.key === 'Escape' || e.key === 'Enter') closeAchievements();
      return;
    }

    if (galleryModal && galleryModal.classList.contains('active')) {
      if (e.key === 'Escape' || e.key === 'Enter') closeGallery();
      return;
    }

    if (gameModesModal && gameModesModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeGameModesModal();
      } else if (e.key === '1') {
        selectGameMode('classic');
      } else if (e.key === '2') {
        selectGameMode('blitz');
      } else if (e.key === '3') {
        selectGameMode('survival');
      } else if (e.key === '4') {
        selectGameMode('campaign');
      }
      return;
    }

    // Menú de inicio visible
    if (startMenu && !startMenu.classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (btnMenuJugar) btnMenuJugar.click();
      }
      return;
    }

    if (endModal && endModal.classList.contains('active')) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (btnCampaignNext && btnCampaignNext.style.display !== 'none') {
          btnCampaignNext.click();
        } else {
          restartRound();
        }
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

  // Exponer a window para hooks externos
  window.AstroGama = {
    initGame,
    makeDecision,
    nextTraveler,
    restartRound,
    selectGameMode,
    openGameModesModal,
    closeGameModesModal,
    openAchievements,
    closeAchievements,
    openGallery,
    closeGallery,
    goToMenu: returnToStartMenu
  };

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
      initGame(false);
      if (window.achievements) window.achievements.updateBadgesCount();
      if (window.gallery) window.gallery.updateBadgeCount();
    });
  } else {
    initGame(false);
    if (window.achievements) window.achievements.updateBadgesCount();
    if (window.gallery) window.gallery.updateBadgeCount();
  }
})();
