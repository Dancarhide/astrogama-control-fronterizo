// ============================================================================
// ASTROGAMA: CONTROL FRONTERIZO - BANCO DE CASOS Y DECLARACIONES COHERENTES
// Cada caso cuenta con Destino Declarado (dest) y Estancia (dur) sincronizados
// con la geografía mexicana mencionada en el motivo de visita.
// ============================================================================

const TRAVELER_PROFILES = [
  { name: "John Miller" },
  { name: "Sarah Connor" },
  { name: "Brad Cooper" },
  { name: "Emily Watson" },
  { name: "Michael Vance" },
  { name: "Jessica Alba" },
  { name: "David Sterling" },
  { name: "Amanda Ripley" },
  { name: "Robert Langdon" },
  { name: "Rachel Green" },
  { name: "Thomas Anderson" },
  { name: "Claire Redfield" },
  { name: "Arthur Dent" },
  { name: "Dana Scully" },
  { name: "Fox Mulder" },
  { name: "Ellen Ripley" },
  { name: "Peter Parker" },
  { name: "Bruce Wayne" },
  { name: "Diana Prince" },
  { name: "Clark Kent" },
  { name: "Tony Stark" },
  { name: "Natasha Romanoff" },
  { name: "Steve Rogers" },
  { name: "Wanda Maximoff" }
];

const CASES_BANK = [
  // -------------------------------------------------------------------------
  // CATEGORÍA 1: CONFUSIÓN B / V (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo de vasaciones a comer tacos en la playa.",
    dest: "Cancún, Quintana Roo",
    dur: "7 Días (Vacaciones)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'vasaciones' es incorrecto; se escribe 'vacaciones' (con 'v' y 'c')."
  },
  {
    text: "Deseo provar la auténtica comida mexicana y sus salsas.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "5 Días (Turismo)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'provar' se escribe con 'b' ('probar')."
  },
  {
    text: "Voy a viavar en autobús turístico por toda la península de Yucatán.",
    dest: "Mérida, Yucatán",
    dur: "10 Días (Tour Peninsular)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'viavar' se escribe con 'j' ('viajar')."
  },
  {
    text: "El doctor me recomendó un clima cálido para aliviar mi sintoma de salu.",
    dest: "Cuernavaca, Morelos",
    dur: "14 Días (Salud y Descanso)",
    isAlien: true,
    category: "Ortografía",
    reason: "Error ortográfico y acento: 'salu' lleva 'd' final ('salud') y 'síntoma' lleva tilde."
  },
  {
    text: "Vengo a gravar un documental sobre la flora de Chiapas.",
    dest: "Palenque, Chiapas",
    dur: "12 Días (Filmación)",
    isAlien: true,
    category: "B/V",
    reason: "Error semántico/ortográfico: Registrar sonido o video se escribe 'grabar' con 'b'."
  },
  {
    text: "Quiero saver más sobre las costumbres y leyendas de Guanajuato.",
    dest: "Guanajuato Capital, Guanajuato",
    dur: "6 Días (Cultural)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'saver' se escribe con 'b' ('saber')."
  },
  {
    text: "El tubo un problema con su equipaje y lo vengo a ayudar a Tijuana.",
    dest: "Tijuana, Baja California",
    dur: "3 Días (Familiar)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: La forma del verbo tener es 'tuvo' con 'v'; 'tubo' es una pieza cilíndrica hueca."
  },
  {
    text: "Biajo con mi familia para descansar una semana entera en Puerto Vallarta.",
    dest: "Puerto Vallarta, Jalisco",
    dur: "7 Días (Vacaciones)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'Biajo' se escribe con 'v' ('Viajo')."
  },
  {
    text: "Vengo a combulsar el mercado hotelero de Monterrey con una nueva cadena.",
    dest: "Monterrey, Nuevo León",
    dur: "8 Días (Negocios)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'combulsar' se escribe con 'v' ('convulsionar' / 'convulsar')."
  },
  {
    text: "Planeo bolver a mi país en cuanto termine el congreso en Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "4 Días (Congreso)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'bolver' se escribe con 'v' ('volver')."
  },
  {
    text: "Necesito canbiar dólares por pesos para mis gastos de viaje en Ciudad Juárez.",
    dest: "Ciudad Juárez, Chihuahua",
    dur: "5 Días (Turismo)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: Antes de 'b' y 'p' siempre se escribe 'm', nunca 'n' ('cambiar')."
  },
  {
    text: "El guía fue muy amavle durante todo el recorrido por la selva lacandona.",
    dest: "Tuxtla Gutiérrez, Chiapas",
    dur: "9 Días (Ecoturismo)",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: Las terminaciones en -ble se escriben con 'b' ('amable')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 2: CONFUSIÓN C / S / Z (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Voy a tomar una desision importante respecto a mis estudios en la capital.",
    dest: "Ciudad de México (CDMX)",
    dur: "15 Días (Estudio)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'desision' se escribe 'decisión' (con 'c', 's' y tilde en la 'o')."
  },
  {
    text: "Me dirijo a Guanajuato para conoser sus famosos museos.",
    dest: "Guanajuato Capital, Guanajuato",
    dur: "5 Días (Cultural)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'conoser' se escribe con 'c' ('conocer')."
  },
  {
    text: "Vengo a festejar el cumpleañoz de mi estimado sobrino en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "4 Días (Familiar)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'cumpleañoz' termina con 's' ('cumpleaños')."
  },
  {
    text: "Viajo para resibir un reconocimiento universitario en Xalapa.",
    dest: "Xalapa, Veracruz",
    dur: "6 Días (Académico)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'resibir' se escribe con 'c' ('recibir')."
  },
  {
    text: "Quiero apresiar los paisajes desérticos del estado de Sonora.",
    dest: "Hermosillo, Sonora",
    dur: "8 Días (Turismo)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'apresiar' se escribe con 'c' ('apreciar')."
  },
  {
    text: "Asisto a una reunión con una organisación civil de protección animal.",
    dest: "Ciudad de México (CDMX)",
    dur: "5 Días (Conferencia)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'organisación' se escribe con 'z' ('organización')."
  },
  {
    text: "Vengo con la esperansa de encontrar paz y tranquilidad en Tepoztlán.",
    dest: "Tepoztlán, Morelos",
    dur: "7 Días (Retiro)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'esperansa' se escribe con 'z' ('esperanza')."
  },
  {
    text: "Compraré una cása frente al malecón de Mazatlán para retirarme.",
    dest: "Mazatlán, Sinaloa",
    dur: "10 Días (Bienes Raíces)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error de acentuación: 'casa' es palabra llana terminada en vocal y jamás lleva tilde."
  },
  {
    text: "Solicito lizensia temporal para practicar pesca deportiva en Los Cabos.",
    dest: "Cabo San Lucas, B.C.S.",
    dur: "6 Días (Pesca Deportiva)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'lizensia' se escribe 'licencia' (con 'c')."
  },
  {
    text: "Espero que no aiga ningún problema para cruzar hacia Nogales.",
    dest: "Nogales, Sonora",
    dur: "3 Días (Tránsito)",
    isAlien: true,
    category: "Morfología",
    reason: "Error vulgar: La forma correcta del verbo haber es 'haya', nunca 'aiga'."
  },
  {
    text: "Visito la ciudad fronteriza para aser un trámite consular de rutina.",
    dest: "Ciudad Juárez, Chihuahua",
    dur: "2 Días (Trámite)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico doble: 'aser' se escribe con 'h' y con 'c' ('hacer')."
  },
  {
    text: "Vengo a admirar los peses de colores en el arrecife de Cozumel.",
    dest: "Cozumel, Quintana Roo",
    dur: "7 Días (Buceo)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: El plural de pez es 'peces' (con 'c', no con 's')."
  },
  {
    text: "Mis amigos están muy felizes por nuestra visita a Puebla.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "5 Días (Familiar)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: El plural de feliz es 'felices' (con 'c', nunca con 'z')."
  },
  {
    text: "Quiero conozer los talleres tradicionales de platería en Taxco.",
    dest: "Taxco de Alarcón, Guerrero",
    dur: "4 Días (Turismo)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'conozer' se escribe con 'c' ('conocer')."
  },
  {
    text: "Vengo a realizar unas conpras al mercado 20 de Noviembre de Oaxaca.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "6 Días (Compras)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: Antes de 'p' va 'm', no 'n' ('compras')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 3: CONFUSIÓN G / J (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Solicito permiso para visitar a mi jente en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "7 Días (Familiar)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'jente' se escribe con 'g' ('gente')."
  },
  {
    text: "Viajo por motivo de trabaso y negocios del sector automotriz en Saltillo.",
    dest: "Saltillo, Coahuila",
    dur: "5 Días (Negocios)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'trabaso' se escribe con 'j' ('trabajo')."
  },
  {
    text: "Me voy a dirijir al consulado general en Guadalajara para tramitar mis papeles.",
    dest: "Guadalajara, Jalisco",
    dur: "3 Días (Trámite)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: El infinitivo es 'dirigir' con 'g' (verbos en -gir con g)."
  },
  {
    text: "Tengo que escojer qué ruta tomar hacia San Cristóbal de las Casas.",
    dest: "San Cristóbal de las Casas, Chiapas",
    dur: "10 Días (Turismo)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'escojer' se escribe con 'g' ('escoger')."
  },
  {
    text: "Vengo a recojer unos documentos aduanales pendientes en Nuevo Laredo.",
    dest: "Nuevo Laredo, Tamaulipas",
    dur: "2 Días (Aduana)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'recojer' se escribe con 'g' ('recoger')."
  },
  {
    text: "Soy un extrangero que viene a disfrutar del folclor en el puerto de Veracruz.",
    dest: "Veracruz Puerto, Veracruz",
    dur: "6 Días (Vacaciones)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'extrangero' se escribe con 'j' ('extranjero')."
  },
  {
    text: "Perdí mi equipaje en Cancún y necesito que me agilicen el tramije.",
    dest: "Cancún, Quintana Roo",
    dur: "8 Días (Turismo)",
    isAlien: true,
    category: "G/J",
    reason: "Error léxico: La palabra es 'trámite' con 't', no 'tramije'."
  },
  {
    text: "Quiero provar la comida yucateca con sabor jenuino tradicional.",
    dest: "Mérida, Yucatán",
    dur: "5 Días (Gastronomía)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico doble: 'genuino' se escribe con 'g' y 'probar' con 'b'."
  },
  {
    text: "El oficial me pidió protejer mis pertenencias en la frontera de Tijuana.",
    dest: "Tijuana, Baja California",
    dur: "4 Días (Tránsito)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Verbos en -ger se escriben con 'g' ('proteger')."
  },
  {
    text: "Mi equipahe fue inspeccionado al aterrizar en la Ciudad de México.",
    dest: "Ciudad de México (CDMX)",
    dur: "6 Días (Turismo)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Sustantivos en -aje se escriben con 'j' ('equipaje')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 4: USO DE LA H (FALTA DE H O H INTRUSA) (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Voy a acer un viaje familiar por carretera hacia Oaxaca.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "9 Días (Familiar)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Falta la 'h' en el verbo 'hacer'."
  },
  {
    text: "Asta el próximo lunes permaneceré hospedado en la Ciudad de México.",
    dest: "Ciudad de México (CDMX)",
    dur: "7 Días (Turismo)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: La preposición es 'hasta' con 'h'."
  },
  {
    text: "Avia mucha congestión en el puente internacional de Matamoros.",
    dest: "Matamoros, Tamaulipas",
    dur: "4 Días (Turismo)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico doble: 'Había' lleva 'h', 'b' y tilde en la 'í'."
  },
  {
    text: "Vengo a dar un paseo por la oriya de la playa en Playa del Carmen.",
    dest: "Playa del Carmen, Quintana Roo",
    dur: "8 Días (Playa)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'oriya' se escribe con doble 'll' ('orilla')."
  },
  {
    text: "Busco un ospedaje económico cerca del acueducto de Querétaro.",
    dest: "Santiago de Querétaro, Querétaro",
    dur: "5 Días (Turismo)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'ospedaje' se escribe con 'h' ('hospedaje')."
  },
  {
    text: "El hotel no tiene ninguna avitación disponible en San Miguel de Allende.",
    dest: "San Miguel de Allende, Guanajuato",
    dur: "4 Días (Vacaciones)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'avitación' se escribe 'habitación' (con 'h', 'b' y tilde)."
  },
  {
    text: "Hayer llegué en vuelo directo a Guadalajara con mi pasaporte.",
    dest: "Guadalajara, Jalisco",
    dur: "6 Días (Visita)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'Ayer' no lleva 'h'."
  },
  {
    text: "Vengo a comprar unos hermosos recuerdos echos a mano en Pátzcuaro.",
    dest: "Pátzcuaro, Michoacán",
    dur: "5 Días (Artesanías)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Del verbo hacer, el participio es 'hechos' con 'h'."
  },
  {
    text: "E decidido pasar las fiestas decembrinas en las costas de Acapulco.",
    dest: "Acapulco, Guerrero",
    dur: "10 Días (Vacaciones)",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Del verbo haber, la forma auxiliar es 'He decidido' con 'h'."
  },
  {
    text: "Quiero provar los ricos cocos frescos en la bahia de Acapulco.",
    dest: "Acapulco, Guerrero",
    dur: "6 Días (Playa)",
    isAlien: true,
    category: "Hache",
    reason: "Error triple: 'bahía' lleva tilde, y 'probar' va con 'b'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 5: FALTAS DE TILDE Y ACENTUACIÓN (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo a comprar recuerdos típicos de Cancún para mi pais.",
    dest: "Cancún, Quintana Roo",
    dur: "7 Días (Vacaciones)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'país' lleva tilde en la 'í' para romper el diptongo (hiato acentual)."
  },
  {
    text: "Quiero visitar la piramide del Sol en Teotihuacán.",
    dest: "Teotihuacán, Estado de México",
    dur: "3 Días (Arqueología)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'pirámide' es palabra esdrújula y todas las esdrújulas llevan tilde."
  },
  {
    text: "Viajo para asistir a una importante consulta con mi medico en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "4 Días (Médico)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'médico' es palabra esdrújula y lleva tilde en la primera 'e'."
  },
  {
    text: "Perdí el autobus que me llevaba directo al centro de Querétaro.",
    dest: "Santiago de Querétaro, Querétaro",
    dur: "5 Días (Turismo)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'autobús' es palabra aguda terminada en 's', debe llevar tilde."
  },
  {
    text: "Llegue anoche muy cansado a la Ciudad de México por el viaje.",
    dest: "Ciudad de México (CDMX)",
    dur: "6 Días (Descanso)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: En pretérito perfecto es 'Llegué' con tilde en la 'e'."
  },
  {
    text: "Necesito comprar un boleto en la estacion de trenes de Los Mochis.",
    dest: "Los Mochis, Sinaloa",
    dur: "8 Días (Ruta Chepe)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'estación' es palabra aguda terminada en 'n', requiere tilde."
  },
  {
    text: "Vengo a tomar un cafe caliente en los portales de San Cristóbal.",
    dest: "San Cristóbal de las Casas, Chiapas",
    dur: "6 Días (Cultural)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'café' es palabra aguda terminada en vocal y lleva tilde."
  },
  {
    text: "Planeo comprar un vehiculo en Hermosillo para recorrer el desierto.",
    dest: "Hermosillo, Sonora",
    dur: "14 Días (Viaje)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'vehículo' lleva tilde en la 'í' (esdrújula con h intermedia)."
  },
  {
    text: "Quiero escuchar musica regional mexicana en las playas de Mazatlán.",
    dest: "Mazatlán, Sinaloa",
    dur: "5 Días (Música y Playa)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'música' es esdrújula y lleva tilde en la 'u'."
  },
  {
    text: "El tramite migratorio en Tijuana me pareció sumamente veloz.",
    dest: "Tijuana, Baja California",
    dur: "3 Días (Negocios)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: El sustantivo es 'trámite' (esdrújula) con tilde en la 'a'."
  },
  {
    text: "Viajo solo por diversion a los clubes nocturnos de Puerto Vallarta.",
    dest: "Puerto Vallarta, Jalisco",
    dur: "5 Días (Diversión)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'diversión' es palabra aguda terminada en 'n' y lleva tilde."
  },
  {
    text: "Visito a mi tia que vive en Morelia desde hace años.",
    dest: "Morelia, Michoacán",
    dur: "8 Días (Familiar)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'tía' lleva tilde en la 'í' por hiato acentual."
  },
  {
    text: "Llegare mañana temprano a la reunión en el Parque Fundidora de Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "3 Días (Negocios)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: En futuro del indicativo es 'Llegaré' con tilde en la 'e'."
  },
  {
    text: "Vengo a practicar paracaidismo en una zona increible del lago de Tequesquitengo.",
    dest: "Tequesquitengo, Morelos",
    dur: "3 Días (Deporte)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'increíble' lleva tilde en la 'í' para marcar el hiato."
  },
  {
    text: "Comeré en un restaurante de Mérida cuyo menu sea tradicional.",
    dest: "Mérida, Yucatán",
    dur: "6 Días (Gastronomía)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'menú' es aguda terminada en vocal y debe llevar tilde."
  },
  {
    text: "El camion de carga bloqueó la carretera federal hacia San Luis Potosí.",
    dest: "San Luis Potosí, S.L.P.",
    dur: "4 Días (Comercial)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'camión' es palabra aguda terminada en 'n' y lleva tilde."
  },
  {
    text: "Mi proposito principal es visitar las ruinas mayas de Tulum.",
    dest: "Tulum, Quintana Roo",
    dur: "7 Días (Arqueología)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'propósito' es palabra esdrújula y lleva tilde en la segunda 'o'."
  },
  {
    text: "Se me olvidó cargar la bateria de mi cámara antes de ir a Chichén Itzá.",
    dest: "Chichén Itzá, Yucatán",
    dur: "5 Días (Turismo)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'batería' lleva tilde en la 'í' por hiato acentual."
  },
  {
    text: "Mi número de telefono de la Ciudad de México está registrado en la embajada.",
    dest: "Ciudad de México (CDMX)",
    dur: "10 Días (Oficial)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'teléfono' es palabra esdrújula y lleva tilde en la segunda 'e'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 6: CONFUSIÓN LL / Y (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Espero yegar a tiempo al festival de música en Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "4 Días (Festival Musical)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'yegar' se escribe con doble 'll' ('llegar')."
  },
  {
    text: "Mi trajecto comprende las ciudades coloniales de Zacatecas y Guanajuato.",
    dest: "Zacatecas, Zacatecas",
    dur: "10 Días (Ruta Colonial)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'trajecto' se escribe con 'y' ('trayecto')."
  },
  {
    text: "Alquilé un llate de lujo para navegar en la bahía de Cancún.",
    dest: "Cancún, Quintana Roo",
    dur: "7 Días (Playa)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'llate' se escribe con 'y' ('yate')."
  },
  {
    text: "Presentaré un proyeto de ecoturismo sustentable en la selva de Chiapas.",
    dest: "San Cristóbal de las Casas, Chiapas",
    dur: "12 Días (Ecoturismo)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'proyeto' se escribe 'proyecto' (con 'c' y 't')."
  },
  {
    text: "Vengo a dar apollo a una organización comunitaria en los valles de Oaxaca.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "14 Días (Voluntariado)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'apollo' se escribe con 'y' ('apoyo')."
  },
  {
    text: "Caminé junto al arrollo de montaña en las cabañas de Tapalpa.",
    dest: "Tapalpa, Jalisco",
    dur: "4 Días (Cabañas)",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: Corriente pequeña de agua es 'arroyo' con 'y'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 7: ERRORES DIVERSOS Y ESTRUCTURAS RARAS (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo a comprar unos zapátos de piel fina en la zona piel de León.",
    dest: "León, Guanajuato",
    dur: "3 Días (Compras)",
    isAlien: true,
    category: "Tildes",
    reason: "Tilde errónea: 'zapatos' es palabra llana terminada en 's', no lleva tilde."
  },
  {
    text: "Exijo protexión diplomática durante mi estancia turística en la capital.",
    dest: "Ciudad de México (CDMX)",
    dur: "7 Días (Estancia)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'protexión' se escribe con 'cc' ('protección')."
  },
  {
    text: "Quiero una esplicación sobre los requisitos de la garita de Tijuana.",
    dest: "Tijuana, Baja California",
    dur: "2 Días (Aduanal)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'esplicación' se escribe con 'x' ('explicación')."
  },
  {
    text: "Vengo con mi conyugue a celebrar nuestro aniversario en Los Cabos.",
    dest: "Los Cabos, B.C.S.",
    dur: "8 Días (Aniversario)",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Se escribe 'cónyuge' (sin 'u' después de la 'g' y con tilde)."
  },
  {
    text: "Voy a inagurar una sucursal de ropa de playa en Tulum.",
    dest: "Tulum, Quintana Roo",
    dur: "9 Días (Negocios)",
    isAlien: true,
    category: "Léxico",
    reason: "Error fonético/escritura: Es 'inaugurar' con diptongo 'au'."
  },
  {
    text: "Tengo fobia al desorden y busco un hotel pulkro en Puebla.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "5 Días (Hospedaje)",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'pulkro' se escribe con 'c' ('pulcro')."
  },
  {
    text: "Vengo a descansar porqe el trabajo me tiene agotado en Valle de Bravo.",
    dest: "Valle de Bravo, Estado de México",
    dur: "6 Días (Descanso)",
    isAlien: true,
    category: "Léxico",
    reason: "Falta ortográfica: Se escribe 'porque' completo, no 'porqe'."
  },
  {
    text: "Cruzo la frontera para asisitir al festival internacional del mariachi.",
    dest: "Guadalajara, Jalisco",
    dur: "5 Días (Festival)",
    isAlien: true,
    category: "Ortografía",
    reason: "Error alienígena: 'asisitir' tiene una sílaba repetida ('asistir')."
  },
  {
    text: "Mi maleta solo contiene articulos de uso personal para mi viaje a Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "4 Días (Equipaje)",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'artículos' es palabra esdrújula y lleva tilde en la 'i'."
  },
  {
    text: "Deseo conoser gente amable y provar comida picante en Oaxaca.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "6 Días (Turismo)",
    isAlien: true,
    category: "Ortografía",
    reason: "Error doble: 'conocer' con 'c' y 'probar' con 'b'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 8: FRASES CORRECTAS (HUMANOS REALES - TURISTAS Y VIAJEROS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo de vacaciones a disfrutar de la gastronomía y las playas de Cancún.",
    dest: "Cancún, Quintana Roo",
    dur: "7 Días (Vacaciones)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso impecable: 'vacaciones', 'gastronomía' con tilde y sintaxis pulcra."
  },
  {
    text: "Solicito autorización para asistir a una conferencia médica en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "5 Días (Médico)",
    isAlien: false,
    category: "Correcto",
    reason: "Gramática y tildes perfectas: 'autorización' y 'médica' correctamente acentuadas."
  },
  {
    text: "Viajo por motivos de estudio a la Universidad Nacional Autónoma de México.",
    dest: "Ciudad de México (CDMX)",
    dur: "14 Días (Estudio)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía perfecta: 'universidad' y 'estudio' escritas con total precisión."
  },
  {
    text: "Voy a visitar a mis familiares durante las fiestas decembrinas en Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "10 Días (Familiar)",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente redacción: 'visitar' con 'v' y consonantes en regla."
  },
  {
    text: "Vengo a explorar los sitios arqueológicos de la península de Yucatán.",
    dest: "Mérida, Yucatán",
    dur: "12 Días (Arqueología)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes exactas: 'arqueológicos' y 'península' (esdrújulas) y 'Yucatán' (aguda)."
  },
  {
    text: "Deseo conocer las hermosas playas de la Riviera Maya.",
    dest: "Playa del Carmen, Quintana Roo",
    dur: "7 Días (Playa)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso adecuado: 'conocer' con 'c' y mayúsculas en nombres propios."
  },
  {
    text: "Asistiré a una reunión de negocios con socios en Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "4 Días (Negocios)",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación correcta: 'Asistiré' en tiempo futuro con tilde en la 'é'."
  },
  {
    text: "Planeo pasar una temporada de descanso y tranquilidad en Oaxaca.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "9 Días (Descanso)",
    isAlien: false,
    category: "Correcto",
    reason: "Redacción impecable: 'descanso' con 's' y puntuación exacta."
  },
  {
    text: "Quiero fotografiar los majestuosos volcanes del centro del país.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "6 Días (Fotografía)",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación perfecta: 'país' con hiato acentual y ortografía limpia."
  },
  {
    text: "Vengo a firmar un contrato comercial con una destacada empresa textil en León.",
    dest: "León, Guanajuato",
    dur: "5 Días (Comercial)",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente redacción formal sin ninguna falla ortográfica ni gramatical."
  },
  {
    text: "Participaré en una carrera atlética de montaña en el Nevado de Toluca.",
    dest: "Toluca, Estado de México",
    dur: "4 Días (Deporte)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes impecables: 'Participaré' y 'atlética' perfectamente tildadas."
  },
  {
    text: "Viajo para realizar una investigación académica sobre el arte virreinal en Puebla.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "10 Días (Académico)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías perfectas: 'investigación' y 'académica' correctamente escritas."
  },
  {
    text: "Deseo recorrer la ruta del mezcal y conocer las tradiciones locales en Matatlán.",
    dest: "Santiago Matatlán, Oaxaca",
    dur: "7 Días (Turismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso impecable del vocabulario y ortografía: 'mezcal' con 'z' y 'conocer' con 'c'."
  },
  {
    text: "Vengo a comprar artesanías de barro negro para llevar a mi hogar.",
    dest: "San Bartolo Coyotepec, Oaxaca",
    dur: "5 Días (Artesanías)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde exacta en 'artesanías' (hiato acentual) y vocabulario sin errores."
  },
  {
    text: "Solicito ingreso como turista para recorrer el Cañón del Sumidero.",
    dest: "Tuxtla Gutiérrez, Chiapas",
    dur: "6 Días (Ecoturismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de tildes: 'ingreso', 'turista' y 'Cañón' con tilde en la 'o'."
  },
  {
    text: "Tengo una reserva confirmada en un hotel de Puerto Vallarta.",
    dest: "Puerto Vallarta, Jalisco",
    dur: "7 Días (Vacaciones)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía correcta: 'reserva' con 'v' y redacción natural humana."
  },
  {
    text: "Vengo a practicar buceo en los arrecifes de Cozumel.",
    dest: "Cozumel, Quintana Roo",
    dur: "8 Días (Buceo)",
    isAlien: false,
    category: "Correcto",
    reason: "Grafías correctas: 'buceo' con 'b' y 'arrecifes' con doble 'r' y 'c'."
  },
  {
    text: "Asisto a la boda de mi mejor amigo en San Miguel de Allende.",
    dest: "San Miguel de Allende, Guanajuato",
    dur: "4 Días (Evento Social)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía pulcra: 'boda' con 'b' y nombres propios con mayúsculas."
  },
  {
    text: "Vengo a impartir un taller de fotografía documental en el centro de Puebla.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "5 Días (Taller)",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación correcta: 'fotografía' con tilde y sintaxis natural."
  },
  {
    text: "Viajo por placer para conocer los pueblos mágicos de Michoacán.",
    dest: "Pátzcuaro, Michoacán",
    dur: "9 Días (Pueblos Mágicos)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes perfectas: 'mágicos' (esdrújula) y 'Michoacán' (aguda en 'n')."
  },
  {
    text: "Permaneceré diez días en el país para visitar a mis abuelos maternos en Querétaro.",
    dest: "Santiago de Querétaro, Querétaro",
    dur: "10 Días (Familiar)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes impecables: 'días' y 'país' con hiato acentual exacto."
  },
  {
    text: "Vengo a dar una conferencia sobre energías renovables en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "5 Días (Conferencia)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes exactas: 'energías' e impecable redacción en 'renovables'."
  },
  {
    text: "Visito las reservas naturales de Calakmul para observar aves migratorias.",
    dest: "Calakmul, Campeche",
    dur: "8 Días (Ecoturismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía cuidada: 'observar' con 'b' y 'reservas' con 'v'."
  },
  {
    text: "Quiero presenciar la celebración del Día de Muertos en Pátzcuaro.",
    dest: "Pátzcuaro, Michoacán",
    dur: "6 Días (Cultural)",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación perfecta: 'celebración', 'Día' y 'Pátzcuaro' con tildes según la norma."
  },
  {
    text: "Mi viaje es estrictamente cultural y con fines recreativos familiares en Guanajuato.",
    dest: "Guanajuato Capital, Guanajuato",
    dur: "7 Días (Cultural)",
    isAlien: false,
    category: "Correcto",
    reason: "Estructura oracional impecable y sin faltas de ortografía."
  },
  {
    text: "Deseo degustar la cocina tradicional en los mercados de Mérida.",
    dest: "Mérida, Yucatán",
    dur: "6 Días (Gastronomía)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde exacta en 'Mérida' (esdrújula) y verbos conjugados correctamente."
  },
  {
    text: "Vengo con un grupo de senderismo a subir el volcán Iztaccíhuatl.",
    dest: "Amecameca, Estado de México",
    dur: "5 Días (Montañismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía compleja respetada con exactitud y tildes correspondientes."
  },
  {
    text: "Asistiré a un simposio internacional de arquitectura contemporánea en Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "4 Días (Simposio)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías perfectas: 'Asistiré', 'simposio' y 'contemporánea'."
  },
  {
    text: "Tengo programada una estancia de dos semanas de descanso en Los Cabos.",
    dest: "San José del Cabo, B.C.S.",
    dur: "14 Días (Vacaciones)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía limpia: 'estancia' con 'c' y concordancia de género y número."
  },
  {
    text: "Vengo a disfrutar del clima soleado y a relajarme junto al mar en Huatulco.",
    dest: "Bahías de Huatulco, Oaxaca",
    dur: "8 Días (Playa)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso adecuado del léxico y verbos reflexivos sin ningún error."
  },
  {
    text: "Mi visita tiene como propósito celebrar mi luna de miel en Cancún.",
    dest: "Cancún, Quintana Roo",
    dur: "10 Días (Luna de Miel)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'propósito' y aguda en 'Cancún'."
  },
  {
    text: "Solicito autorización turística para realizar una travesía en el tren Chepe.",
    dest: "Barrancas del Cobre, Chihuahua",
    dur: "7 Días (Turismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía impecable: 'autorización', 'turística' y 'travesía' con tildes."
  },
  {
    text: "Vengo a participar en un congreso médico sobre cardiología en Monterrey.",
    dest: "Monterrey, Nuevo León",
    dur: "5 Días (Congreso)",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación exquisita: 'médico', 'cardiología' y 'pediátrica' bien tildadas."
  },
  {
    text: "Viajo con el fin de aprender más sobre la historia prehispánica en Monte Albán.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "6 Días (Arqueología)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'prehispánica' y ortografía sin defecto alguno."
  },
  {
    text: "Vengo a adquirir artesanías típicas elaboradas por artesanos de Tlaquepaque.",
    dest: "San Pedro Tlaquepaque, Jalisco",
    dur: "5 Días (Artesanías)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'típicas' y uso adecuado de 'adquirir'."
  },
  {
    text: "Haré un recorrido por las haciendas coloniales del estado de Hidalgo.",
    dest: "Huasca de Ocampo, Hidalgo",
    dur: "6 Días (Turismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso exacto de la 'h': 'Haré' (futuro de hacer con tilde) e 'Hidalgo'."
  },
  {
    text: "Vengo a descansar unos días y a probar el chocolate oaxaqueño tradicional.",
    dest: "Oaxaca de Juárez, Oaxaca",
    dur: "7 Días (Gastronomía)",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente uso de 'probar' con 'b', 'días' con tilde y 'oaxaqueño'."
  },
  {
    text: "Visito la ciudad para acudir a la Feria Internacional del Libro de Guadalajara.",
    dest: "Guadalajara, Jalisco",
    dur: "6 Días (Feria del Libro)",
    isAlien: false,
    category: "Correcto",
    reason: "Gramática impecable y redacción fluida sin faltas ortográficas."
  },
  {
    text: "Tengo una reunión agendada con productores cafetaleros de Coatepec.",
    dest: "Coatepec, Veracruz",
    dur: "4 Días (Comercial)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía correcta: 'reunión' con tilde y nombres propios respetados."
  },
  {
    text: "Vengo a navegar en kayak por las lagunas de Montebello.",
    dest: "Lagunas de Montebello, Chiapas",
    dur: "7 Días (Ecoturismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente concordancia y vocabulario deportivo bien empleado."
  },
  {
    text: "Planeo quedarme un mes para estudiar el idioma y su rica cultura en Cuernavaca.",
    dest: "Cuernavaca, Morelos",
    dur: "30 Días (Estudio)",
    isAlien: false,
    category: "Correcto",
    reason: "Oración natural y gramaticalmente impecable."
  },
  {
    text: "Vengo a pasear en bicicleta por el Paseo de la Reforma.",
    dest: "Ciudad de México (CDMX)",
    dur: "5 Días (Turismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de 'pasear' y 'bicicleta' sin faltas ortográficas."
  },
  {
    text: "Asistiré a un homenaje luctuoso en honor a mi abuelo en Morelia.",
    dest: "Morelia, Michoacán",
    dur: "4 Días (Familiar)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde en 'Asistiré' y grafía correcta en 'homenaje' y 'luctuoso'."
  },
  {
    text: "Quiero conocer los cenotes de agua cristalina en la península de Yucatán.",
    dest: "Valladolid, Yucatán",
    dur: "8 Días (Turismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto: 'cenotes' con 'c', 'conocer' con 'c' y 'península' con tilde."
  },
  {
    text: "Vengo a tomar clases de cocina mexicana tradicional en Puebla.",
    dest: "Puebla de Zaragoza, Puebla",
    dur: "7 Días (Gastronomía)",
    isAlien: false,
    category: "Correcto",
    reason: "Sintaxis humana impecable y ortografía pulcra."
  },
  {
    text: "Viajo para asistir al festival internacional de cine de Morelia.",
    dest: "Morelia, Michoacán",
    dur: "6 Días (Festival de Cine)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía sin fallas y vocabulario institucional correcto."
  },
  {
    text: "Deseo descansar junto a la alberca y leer durante toda la semana en Manzanillo.",
    dest: "Manzanillo, Colima",
    dur: "7 Días (Descanso)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso perfecto de 'alberca' con 'b' y conjugaciones verbales correctas."
  },
  {
    text: "Vengo a firmar un convenio de colaboración científica entre universidades en Querétaro.",
    dest: "Santiago de Querétaro, Querétaro",
    dur: "4 Días (Académico)",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías cuidadas: 'colaboración' y 'científica' correctamente escritas."
  },
  {
    text: "Pasaré el fin de semana en las cabañas de Mazamitla con mi familia.",
    dest: "Mazamitla, Jalisco",
    dur: "4 Días (Cabañas)",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde en futuro 'Pasaré', 'cabañas' con 'b' y nombres geográficos correctos."
  },
  {
    text: "Vengo a practicar surf en las olas de Zicatela en Puerto Escondido.",
    dest: "Puerto Escondido, Oaxaca",
    dur: "8 Días (Surf)",
    isAlien: false,
    category: "Correcto",
    reason: "Redacción limpia y adecuada para un turista extranjero legítimo."
  },
  {
    text: "Deseo recorrer el Museo Nacional de Antropología en Chapultepec.",
    dest: "Ciudad de México (CDMX)",
    dur: "6 Días (Cultural)",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía y mayúsculas institucionales perfectamente respetadas."
  },
  {
    text: "Vengo a comprar granos de café de altura en las fincas de Coatepec.",
    dest: "Coatepec, Veracruz",
    dur: "5 Días (Agroturismo)",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de la tilde en 'café' y redacción natural humana."
  }
];

// Compatibilidad directa en navegador (file:// y web)
if (typeof window !== 'undefined') {
  window.CASES_BANK = CASES_BANK;
  window.TRAVELER_PROFILES = TRAVELER_PROFILES;
  window.TOTAL_CASES_AVAILABLE = CASES_BANK.length;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASES_BANK, TRAVELER_PROFILES, TOTAL_CASES_AVAILABLE: CASES_BANK.length };
}
