// ============================================================================
// ASTROGAMA: ÁLBUM DE POSTALES Y RECUERDOS TURÍSTICOS DE MÉXICO (GALERÍA)
// ============================================================================

const GALLERY_POSTCARDS = [
  {
    id: "yucatan_chichen",
    title: "Chichén Itzá",
    state: "Yucatán",
    region: "Península Maya",
    keywords: ["Yucatán", "Mérida", "Chichén", "Chichen", "Itzá", "arqueológicos"],
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    trivia: "Durante los equinoccios de primavera y otoño, el sol de la tarde proyecta la sombra de una serpiente emplumada (Kukulkán) descendiendo por la escalinata norte.",
    stampCode: "YUC-97000-KUKULKAN",
    stampIcon: "🏛️"
  },
  {
    id: "cdmx_bellasartes",
    title: "Palacio de Bellas Artes",
    state: "Ciudad de México",
    region: "Valle de México",
    keywords: ["Ciudad de México", "CDMX", "Bellas Artes", "Coyoacán", "UNAM"],
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&w=800&q=80",
    trivia: "El icónico palacio combina estilos Art Nouveau y Art Déco; debido al terreno arcilloso de la cuenca lacustre, el edificio se ha hundido varios metros a lo largo de las décadas.",
    stampCode: "CDMX-06000-ARTES",
    stampIcon: "🎭"
  },
  {
    id: "quintana_cancun",
    title: "Playas de Cancún y Riviera Maya",
    state: "Quintana Roo",
    region: "Caribe Mexicano",
    keywords: ["Cancún", "Cancun", "Quintana Roo", "Playa del Carmen", "Tulum", "Riviera Maya", "playas"],
    image: "https://images.unsplash.com/photo-1510097467424-192d713fd8c2?auto=format&fit=crop&w=800&q=80",
    trivia: "La arena de Cancún proviene en su totalidad de restos de corales triturados por peces loro durante milenios, por lo que nunca se calienta intensamente al sol.",
    stampCode: "QROO-77500-CARIBE",
    stampIcon: "🏖️"
  },
  {
    id: "oaxaca_santo_domingo",
    title: "Templo de Santo Domingo y Monte Albán",
    state: "Oaxaca",
    region: "Valles Centrales",
    keywords: ["Oaxaca", "Monte Albán", "mezcal", "mole", "tlayudas", "gastronomía"],
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
    trivia: "Oaxaca es la capital gastronómica y cuna de 7 moles distintos y del auténtico mezcal artesanal, con tradiciones zapotecas y mixtecas vivas por milenios.",
    stampCode: "OAX-68000-MEZCAL",
    stampIcon: "🌮"
  },
  {
    id: "guanajuato_callejones",
    title: "Callejones y Mirador del Pípila",
    state: "Guanajuato",
    region: "El Bajío Colonial",
    keywords: ["Guanajuato", "San Miguel de Allende", "callejones", "Callejón del Beso", "Pípila", "Cervantino"],
    image: "https://images.unsplash.com/photo-1568402102990-bc541580b29f?auto=format&fit=crop&w=800&q=80",
    trivia: "Es una de las pocas ciudades coloniales del mundo con una compleja red de túneles subterráneos para el tráfico, construidos originalmente para encauzar el río.",
    stampCode: "GTO-36000-CERVANTES",
    stampIcon: "🎺"
  },
  {
    id: "edomex_teotihuacan",
    title: "Pirámide del Sol en Teotihuacán",
    state: "Estado de México",
    region: "Altiplano Central",
    keywords: ["Teotihuacán", "Teotihuacan", "Pirámides", "Estado de México", "Sol", "Luna"],
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80",
    trivia: "Los mexicas descubrieron la ciudad ya en ruinas siglos después de su abandono y la llamaron Teotihuacán: 'Lugar donde los hombres se convierten en dioses'.",
    stampCode: "EMEX-55800-DIOSES",
    stampIcon: "☀️"
  },
  {
    id: "jalisco_guadalajara",
    title: "Cuna del Mariachi y el Tequila",
    state: "Jalisco",
    region: "Occidente",
    keywords: ["Guadalajara", "Jalisco", "Puerto Vallarta", "Tequila", "Mariachi", "Hospicio"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    trivia: "En Guadalajara nacieron dos de los mayores símbolos mundiales de la mexicanidad: el mariachi tradicional y la denominación de origen del tequila de agave azul.",
    stampCode: "JAL-44100-AGAVE",
    stampIcon: "🎻"
  },
  {
    id: "puebla_barroca",
    title: "Catedral y Talavera Poblana",
    state: "Puebla",
    region: "Sierra Negra y Valles",
    keywords: ["Puebla", "Cholula", "Chiles en nogada", "Talavera", "Catedral"],
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=800&q=80",
    trivia: "La cocina poblana es cuna del mole poblano y de los Chiles en Nogada, creados por monjas agustinas para celebrar la consumación de la Independencia de México.",
    stampCode: "PUE-72000-BARROCO",
    stampIcon: "🏺"
  },
  {
    id: "bcs_cabosanlucas",
    title: "El Arco del Fin de la Tierra",
    state: "Baja California Sur",
    region: "Península de Baja California",
    keywords: ["Cabo San Lucas", "Los Cabos", "La Paz", "Baja California Sur", "ballenas"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    trivia: "Aquí se unen las aguas del Golfo de California (Mar de Cortés, calificado por Jacques Cousteau como 'el acuario del mundo') con la inmensidad del Océano Pacífico.",
    stampCode: "BCS-23450-BALLENAS",
    stampIcon: "🐋"
  },
  {
    id: "nuevoleon_monterrey",
    title: "Cerro de la Silla y Fundidora",
    state: "Nuevo León",
    region: "Norte Industrial",
    keywords: ["Monterrey", "Nuevo León", "Fundidora", "Cerro de la Silla", "Macroplaza", "cabrito"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    trivia: "El emblemático Cerro de la Silla tiene 1,820 metros de altitud y fue bautizado así por el explorador Alberto del Canto en 1577 por su silueta de montura ecuestre.",
    stampCode: "NL-64000-SILLA",
    stampIcon: "⛰️"
  },
  {
    id: "chiapas_sumidero",
    title: "Cañón del Sumidero y San Cristóbal",
    state: "Chiapas",
    region: "Selva y Montañas del Sur",
    keywords: ["Chiapas", "Palenque", "San Cristóbal", "Sumidero", "selva", "café"],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    trivia: "Las imponentes paredes rocosas del Cañón del Sumidero sobrepasan los 1,000 metros de altura sobre el cauce del río Grijalva.",
    stampCode: "CHIS-29000-SELVA",
    stampIcon: "🦜"
  },
  {
    id: "michoacan_patzcuaro",
    title: "Lago de Pátzcuaro y Tradición Purépecha",
    state: "Michoacán",
    region: "Tierra Lacustre Purépecha",
    keywords: ["Michoacán", "Morelia", "Pátzcuaro", "Janitzio", "Día de Muertos", "Uruapan"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    trivia: "La Noche de Muertos en el Lago de Pátzcuaro e Isla de Janitzio es una de las ceremonias más sagradas de México, declarada Patrimonio Inmaterial de la Humanidad.",
    stampCode: "MICH-61600-ANIMECHA",
    stampIcon: "🕯️"
  }
];

class PostcardsGalleryManager {
  constructor() {
    this.storageKey = "astrogama_gallery_unlocked_v1";
    this.postcards = GALLERY_POSTCARDS;
    this.unlocked = {};
    this.currentFilter = 'all';

    this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        this.unlocked = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("No se pudo cargar estado de galería", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.unlocked));
    } catch (e) {
      console.warn("No se pudo guardar estado de galería", e);
    }
  }

  isUnlocked(id) {
    return Boolean(this.unlocked[id]);
  }

  unlock(id) {
    if (this.isUnlocked(id)) return false;

    const postcard = this.postcards.find(p => p.id === id);
    if (!postcard) return false;

    this.unlocked[id] = {
      unlockedAt: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    this.saveState();

    if (window.sfx && window.sfx.playAchievement) {
      window.sfx.playAchievement();
    }

    this.showToast(postcard);
    this.updateBadgeCount();
    return true;
  }

  // Notificación flotante de nueva postal revelada
  showToast(postcard) {
    const toast = document.getElementById('achievement-toast');
    if (!toast) return;

    const iconEl = toast.querySelector('.toast-medal-icon');
    const badgeTagEl = toast.querySelector('.toast-badge-tag');
    const titleEl = toast.querySelector('.toast-medal-title');
    const descEl = toast.querySelector('.toast-medal-desc');

    if (iconEl) iconEl.textContent = "📸";
    if (badgeTagEl) badgeTagEl.textContent = "¡NUEVA POSTAL EN TU GALERÍA!";
    if (titleEl) titleEl.textContent = `${postcard.title} (${postcard.state})`;
    if (descEl) descEl.textContent = `Aprobaste el ingreso de un turista legítimo. ¡Postal revelada!`;

    toast.classList.remove('active');
    void toast.offsetWidth;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  // Comprobar si la decisión del jugador revela una postal
  checkUnlockFromTourist(dest, phraseText) {
    if (!dest && !phraseText) return;
    const combined = `${dest} ${phraseText}`.toLowerCase();

    for (const card of this.postcards) {
      if (this.isUnlocked(card.id)) continue;

      const matches = card.keywords.some(kw => combined.includes(kw.toLowerCase()));
      if (matches) {
        this.unlock(card.id);
        break; // Desbloquear 1 por cada turista
      }
    }
  }

  updateBadgeCount() {
    const count = Object.keys(this.unlocked).length;
    const total = this.postcards.length;

    const menuBadge = document.getElementById('gallery-count-badge');
    if (menuBadge) {
      menuBadge.textContent = `${count}/${total}`;
    }

    const modalCounter = document.getElementById('gallery-progress-text');
    if (modalCounter) {
      const pct = Math.round((count / total) * 100);
      modalCounter.textContent = `${count} de ${total} (${pct}%)`;
    }

    const modalBar = document.getElementById('gallery-progress-bar');
    if (modalBar) {
      const pct = Math.round((count / total) * 100);
      modalBar.style.width = `${pct}%`;
    }
  }

  renderModal(filter = 'all') {
    this.currentFilter = filter;
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    this.updateBadgeCount();

    const filteredCards = this.postcards.filter(card => {
      const isUn = this.isUnlocked(card.id);
      if (filter === 'unlocked') return isUn;
      if (filter === 'locked') return !isUn;
      return true;
    });

    if (filteredCards.length === 0) {
      grid.innerHTML = `
        <div class="gallery-empty-state">
          <span style="font-size: 2.5rem;">📭</span>
          <p>No hay postales en esta sección todavía.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filteredCards.map(card => {
      const isUn = this.isUnlocked(card.id);
      const unlockInfo = this.unlocked[card.id];

      if (isUn) {
        return `
          <div class="postcard-wrapper" data-card-id="${card.id}">
            <div class="postcard-inner" onclick="this.classList.toggle('flipped')">
              <!-- CARA FRONTAL: FOTO POLAROID RETRO -->
              <div class="postcard-front">
                <div class="postcard-photo-wrap">
                  <img src="${card.image}" alt="${card.title}" class="postcard-img" loading="lazy" onerror="this.src='assets/mexican_border_distant_ship_wallpaper.png'">
                  <div class="postcard-region-tag">📍 ${card.region}</div>
                  <div class="postcard-flip-hint">🔄 Clic para voltear</div>
                </div>
                <div class="postcard-caption">
                  <h4 class="postcard-title">${card.title}</h4>
                  <span class="postcard-state">🇲🇽 ${card.state}</span>
                </div>
              </div>

              <!-- CARA TRASERA: REVERSO POSTAL VINTAGE CON CURIOSIDAD -->
              <div class="postcard-back">
                <div class="postcard-back-header">
                  <div class="postal-postmark">
                    <span class="postmark-circle">MX • FRONTERA<br>${unlockInfo.unlockedAt}</span>
                  </div>
                  <div class="postal-stamp">
                    <span class="stamp-icon">${card.stampIcon}</span>
                    <span class="stamp-code">${card.stampCode}</span>
                  </div>
                </div>
                <div class="postcard-back-body">
                  <div class="postcard-curiosity-box">
                    <span class="curiosity-label">DATO CULTURAL PROTEGIDO:</span>
                    <p class="postcard-curiosity-text">${card.trivia}</p>
                  </div>
                </div>
                <div class="postcard-back-footer">
                  <span>DIVISIÓN ESPECIAL FRONTERIZA</span> • <span>TURISTA AUTORIZADO</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // Tarjeta bloqueada tipo expediente clasificado
        return `
          <div class="postcard-wrapper locked">
            <div class="postcard-inner">
              <div class="postcard-front postcard-locked-front">
                <div class="postcard-locked-silhouette">
                  <span class="locked-icon">🔒</span>
                  <div class="locked-title">DESTINO CLASIFICADO</div>
                  <div class="locked-state">📍 ${card.state}</div>
                </div>
                <div class="postcard-caption">
                  <p class="locked-clue">💡 <em>Aprueba a turistas legítimos que viajen a ${card.state} para revelar esta postal.</em></p>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }).join('');
  }
}

const galleryInstance = new PostcardsGalleryManager();

if (typeof window !== 'undefined') {
  window.PostcardsGalleryManager = PostcardsGalleryManager;
  window.gallery = galleryInstance;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PostcardsGalleryManager, gallery: galleryInstance };
}
