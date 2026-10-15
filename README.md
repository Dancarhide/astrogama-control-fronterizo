# 🛸 AstroGama: Control Fronterizo

> **Juego web retro-sci-fi de detección de aliens impostores a través del análisis ortográfico del español.**

Los extraterrestres siempre aterrizan en Estados Unidos y ahora intentan cruzar la frontera hacia México disfrazados de turistas humanos. Su punto débil: **no dominan la ortografía del español** y cometen errores en sus declaraciones aduanales.

Como Agente de Control Fronterizo, tu misión es inspeccionar sus pasaportes y fichas de declaración para determinar quién es un turista legítimo y quién es un **¡Alien Impostor!**

---

## 🎮 Mecánicas de Juego

- **Análisis de la Declaración:** Examina detenidamente el *"Motivo de Visita"* de cada viajero.
- **Detector de Ortografía:** Identifica errores de tildes (hiatos, agudas, esdrújulas), confusión B/V, C/S/Z, G/J, uso de la H y grafías LL/Y.
- **Acciones Rápidas:**
  - `🟢 PERMITIR PASO` (Atajo: `[A]` o `[←]`) para turistas humanos legítimos.
  - `🔴 ¡ALIEN IMPOSTOR!` (Atajo: `[D]` o `[→]`) para detener invasores con faltas de ortografía.
- **Sistema de Puntuación:** +100 puntos por acierto con sello visual animado (`APROBADO` o `IMPOSTOR`).
- **Sistema de Vidas:** Tienes 3 vidas; un error activa la alarma fronteriza.
- **Banco Extenso:** Más de 110 casos variados y explicaciones didácticas en cada veredicto.
- **Efectos de Sonido Sintetizados:** Audio retro-arcade generado con la Web Audio API nativa (sin descargas externas).
- **Avatares Dinámicos:** Integración con la API de DiceBear Avataaars.

---

## 🛠️ Tecnologías

- **HTML5:** Estructura semántica por secciones.
- **CSS3:** Paleta retro-espacial (neón verde, rojo alarma, azul cibernético, tipografías Chakra Petch, Share Tech Mono y Special Elite).
- **JavaScript (Vanilla):** Lógica desacoplada en arquitectura modular (`cases.js`, `audio.js`, `game.js`).
- **Web Audio API:** Síntesis sonora nativa en el navegador.

---

## 🚀 Despliegue

Diseñado para ejecutarse directamente en cualquier navegador o desplegarse instantáneamente en plataformas como Vercel o GitHub Pages.
