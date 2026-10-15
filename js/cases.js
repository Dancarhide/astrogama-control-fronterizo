// ============================================================================
// ASTROGAMA: CONTROL FRONTERIZO - BANCO DE MÁS DE 110 CASOS Y DECLARACIONES
// Compatible tanto con carga directa <script> (file://) como con módulos ES
// ============================================================================

const TRAVELER_PROFILES = [
  { name: "John Miller", dest: "Cancún, Quintana Roo", dur: "7 Días" },
  { name: "Sarah Connor", dest: "Ciudad de México", dur: "10 Días" },
  { name: "Brad Cooper", dest: "Monterrey, N.L.", dur: "5 Días" },
  { name: "Emily Watson", dest: "Guadalajara, Jalisco", dur: "14 Días" },
  { name: "Michael Vance", dest: "Puerto Vallarta", dur: "4 Días" },
  { name: "Jessica Alba", dest: "Los Cabos, B.C.S.", dur: "8 Días" },
  { name: "David Sterling", dest: "Tijuana, B.C.", dur: "3 Días" },
  { name: "Amanda Ripley", dest: "Mérida, Yucatán", dur: "12 Días" },
  { name: "Robert Langdon", dest: "Oaxaca de Juárez", dur: "9 Días" },
  { name: "Rachel Green", dest: "San Miguel de Allende", dur: "6 Días" },
  { name: "Thomas Anderson", dest: "Puebla de Zaragoza", dur: "15 Días" },
  { name: "Claire Redfield", dest: "Mazatlán, Sinaloa", dur: "7 Días" },
  { name: "Arthur Dent", dest: "Guanajuato Capital", dur: "11 Días" },
  { name: "Dana Scully", dest: "Veracruz Puerto", dur: "6 Días" },
  { name: "Fox Mulder", dest: "Chichén Itzá, Yucatán", dur: "8 Días" },
  { name: "Ellen Ripley", dest: "Huatulco, Oaxaca", dur: "10 Días" },
  { name: "Peter Parker", dest: "Riviera Nayarit", dur: "5 Días" },
  { name: "Bruce Wayne", dest: "San Cristóbal de las Casas", dur: "13 Días" },
  { name: "Diana Prince", dest: "Querétaro Capital", dur: "6 Días" },
  { name: "Clark Kent", dest: "Acapulco, Guerrero", dur: "4 Días" },
  { name: "Tony Stark", dest: "Playa del Carmen", dur: "7 Días" },
  { name: "Natasha Romanoff", dest: "Ensenada, Baja California", dur: "9 Días" },
  { name: "Steve Rogers", dest: "Zacatecas, Zacatecas", dur: "5 Días" },
  { name: "Wanda Maximoff", dest: "Tulum, Quintana Roo", dur: "12 Días" }
];

const CASES_BANK = [
  // -------------------------------------------------------------------------
  // CATEGORÍA 1: CONFUSIÓN B / V (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo de vasaciones a comer tacos en la playa.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'vasaciones' es incorrecto; se escribe 'vacaciones' (con 'v' y 'c')."
  },
  {
    text: "Deseo provar la auténtica comida mexicana y sus salsas.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'provar' se escribe con 'b' ('probar')."
  },
  {
    text: "Voy a viavar en autobús turístico por toda la península.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'viavar' se escribe con 'j' ('viajar')."
  },
  {
    text: "El doctor me recomendó un clima cálido para aliviar mi sintoma de salu.",
    isAlien: true,
    category: "Ortografía",
    reason: "Error ortográfico y acento: 'salu' lleva 'd' final ('salud') y 'síntoma' lleva tilde."
  },
  {
    text: "Vengo a gravar un documental sobre la flora de Chiapas.",
    isAlien: true,
    category: "B/V",
    reason: "Error semántico/ortográfico: Registrar sonido o video se escribe 'grabar' con 'b'."
  },
  {
    text: "Quiero saver más sobre las costumbres y leyendas locales.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'saver' se escribe con 'b' ('saber')."
  },
  {
    text: "El tubo un problema con su equipaje y lo vengo a ayudar.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: La forma del verbo tener es 'tuvo' con 'v'; 'tubo' es una pieza cilíndrica hueca."
  },
  {
    text: "Biajo con mi familia para descansar una semana entera.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'Biajo' se escribe con 'v' ('Viajo')."
  },
  {
    text: "Vengo a combulsar el mercado hotelero con una nueva cadena.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'combulsar' se escribe con 'v' ('convulsionar' / 'convulsar')."
  },
  {
    text: "Planeo bolver a mi país en cuanto termine el congreso.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: 'bolver' se escribe con 'v' ('volver')."
  },
  {
    text: "Necesito canbiar dólares por pesos para mis gastos de viaje.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: Antes de 'b' y 'p' siempre se escribe 'm', nunca 'n' ('cambiar')."
  },
  {
    text: "El guía fue muy amavle durante todo el recorrido por la selva.",
    isAlien: true,
    category: "B/V",
    reason: "Error ortográfico: Las terminaciones en -ble se escriben con 'b' ('amable')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 2: CONFUSIÓN C / S / Z (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Voy a tomar una desision importante respecto a mis estudios.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'desision' se escribe 'decisión' (con 'c', 's' y tilde en la 'o')."
  },
  {
    text: "Me dirijo a Guanajuato para conoser sus famosos museos.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'conoser' se escribe con 'c' ('conocer')."
  },
  {
    text: "Vengo a festejar el cumpleañoz de mi estimado sobrino.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'cumpleañoz' termina con 's' ('cumpleaños')."
  },
  {
    text: "Viajo para resibir un reconocimiento universitario en biología.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'resibir' se escribe con 'c' ('recibir')."
  },
  {
    text: "Quiero apresiar los paisajes desérticos del norte del país.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'apresiar' se escribe con 'c' ('apreciar')."
  },
  {
    text: "Asisto a una reunión con una organisación civil de protección animal.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'organisación' se escribe con 'z' ('organización')."
  },
  {
    text: "Vengo con la esperansa de encontrar paz y tranquilidad.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'esperansa' se escribe con 'z' ('esperanza')."
  },
  {
    text: "Compraré una cása frente al mar para retirarme.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error de acentuación: 'casa' es palabra llana terminada en vocal y jamás lleva tilde."
  },
  {
    text: "Solicito lizensia temporal para practicar pesca deportiva.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'lizensia' se escribe 'licencia' (con 'c')."
  },
  {
    text: "Espero que no aiga ningún problema para cruzar a México.",
    isAlien: true,
    category: "Morfología",
    reason: "Error vulgar: La forma correcta del verbo haber es 'haya', nunca 'aiga'."
  },
  {
    text: "Visito la ciudad para aser un trámite consular de rutina.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico doble: 'aser' se escribe con 'h' y con 'c' ('hacer')."
  },
  {
    text: "Vengo a admirar los peses de colores en el arrecife de coral.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: El plural de pez es 'peces' (con 'c', no con 's')."
  },
  {
    text: "Mis amigos están muy felizes por nuestra visita a Puebla.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: El plural de feliz es 'felices' (con 'c', nunca con 'z')."
  },
  {
    text: "Quiero conozer los talleres de platería en Taxco.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'conozer' se escribe con 'c' ('conocer')."
  },
  {
    text: "Vengo a realizar unas conpras al mercado municipal de artesanías.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: Antes de 'p' va 'm', no 'n' ('compras')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 3: CONFUSIÓN G / J (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Solicito permiso para visitar a mi jente en Monterrey.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'jente' se escribe con 'g' ('gente')."
  },
  {
    text: "Viajo por motivo de trabaso y negocios del sector automotriz.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'trabaso' se escribe con 'j' ('trabajo')."
  },
  {
    text: "Me voy a dirijir al consulado para tramitar mis papeles.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: El infinitivo es 'dirigir' con 'g' (verbos en -gir con g)."
  },
  {
    text: "Tengo que escojer qué ruta tomar hacia el sur del territorio.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'escojer' se escribe con 'g' ('escoger')."
  },
  {
    text: "Vengo a recojer unos documentos aduanales pendientes.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'recojer' se escribe con 'g' ('recoger')."
  },
  {
    text: "Soy un extrangero que viene a disfrutar del folclor mexicano.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: 'extrangero' se escribe con 'j' ('extranjero')."
  },
  {
    text: "Perdí mi equipaje y necesito que me agilicen el tramije.",
    isAlien: true,
    category: "G/J",
    reason: "Error léxico: La palabra es 'trámite' con 't', no 'tramije'."
  },
  {
    text: "Quiero provar la comida con sabor jenuino tradicional.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico doble: 'genuino' se escribe con 'g' y 'probar' con 'b'."
  },
  {
    text: "El agente de aduanas me pidió protejer mis pertenencias.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Verbos en -ger se escriben con 'g' ('proteger')."
  },
  {
    text: "Mi equipahe fue inspeccionado en el aeropuerto de salida.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Sustantivos en -aje se escriben con 'j' ('equipaje')."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 4: USO DE LA H (FALTA DE H O H INTRUSA) (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Voy a acer un viaje familiar por carretera hacia Oaxaca.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Falta la 'h' en el verbo 'hacer'."
  },
  {
    text: "Asta el próximo lunes permaneceré hospedado en la capital.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: La preposición es 'hasta' con 'h'."
  },
  {
    text: "Avia mucha congestión en el cruce internacional de entrada.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico doble: 'Había' lleva 'h', 'b' y tilde en la 'í'."
  },
  {
    text: "Vengo a dar un paseo por la oriya de la hermosa playa.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'oriya' se escribe con doble 'll' ('orilla')."
  },
  {
    text: "Busco un ospedaje económico cerca del centro histórico.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'ospedaje' se escribe con 'h' ('hospedaje')."
  },
  {
    text: "El hotel no tiene ninguna avitación disponible para mí.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'avitación' se escribe 'habitación' (con 'h', 'b' y tilde)."
  },
  {
    text: "Hayer llegué en avión desde Los Ángeles con mi pasaporte.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: 'Ayer' no lleva 'h'."
  },
  {
    text: "Vengo a comprar unos hermosos recuerdos echos a mano.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Del verbo hacer, el participio es 'hechos' con 'h'."
  },
  {
    text: "E decidido pasar las fiestas decembrinas en Acapulco.",
    isAlien: true,
    category: "Hache",
    reason: "Error ortográfico: Del verbo haber, la forma auxiliar es 'He decidido' con 'h'."
  },
  {
    text: "Quiero provar los helados de la bahia de Acapulco.",
    isAlien: true,
    category: "Hache",
    reason: "Error triple: 'bahía' lleva tilde, y 'probar' va con 'b'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 5: FALTAS DE TILDE Y ACENTUACIÓN (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo a comprar recuerdos para mi pais.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'país' lleva tilde en la 'í' para romper el diptongo (hiato acentual)."
  },
  {
    text: "Quiero visitar la piramide del Sol en Teotihuacán.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'pirámide' es palabra esdrújula y todas las esdrújulas llevan tilde."
  },
  {
    text: "Viajo para asistir a una importante consulta con mi medico.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'médico' es palabra esdrújula y lleva tilde en la primera 'e'."
  },
  {
    text: "Perdí el autobus que me llevaba directo a Querétaro.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'autobús' es palabra aguda terminada en 's', debe llevar tilde."
  },
  {
    text: "Llegue anoche muy cansado del largo viaje internacional.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: En pretérito perfecto es 'Llegué' con tilde en la 'e'."
  },
  {
    text: "Necesito comprar un boleto en la estacion de trenes.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'estación' es palabra aguda terminada en 'n', requiere tilde."
  },
  {
    text: "Vengo a tomar un cafe caliente en una plaza típica.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'café' es palabra aguda terminada en vocal y lleva tilde."
  },
  {
    text: "Planeo comprar un vehiculo para recorrer el país entero.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'vehículo' lleva tilde en la 'í' (esdrújula con h intermedia)."
  },
  {
    text: "Quiero escuchar musica regional mexicana en vivo.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'música' es esdrújula y lleva tilde en la 'u'."
  },
  {
    text: "El tramite migratorio me pareció sumamente veloz.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: El sustantivo es 'trámite' (esdrújula) con tilde en la 'a'."
  },
  {
    text: "Viajo solo por diversion con mis compañeros de trabajo.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'diversión' es palabra aguda terminada en 'n' y lleva tilde."
  },
  {
    text: "Visito a mi tia que vive en Morelia desde hace años.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'tía' lleva tilde en la 'í' por hiato acentual."
  },
  {
    text: "Llegare mañana temprano a la reunión con los inversionistas.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: En futuro del indicativo es 'Llegaré' con tilde en la 'e'."
  },
  {
    text: "Vengo a practicar paracaidismo en una zona increible.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'increíble' lleva tilde en la 'í' para marcar el hiato."
  },
  {
    text: "Comeré en un restaurante cuyo menu sea tradicional.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'menú' es aguda terminada en vocal y debe llevar tilde."
  },
  {
    text: "El camion de carga bloqueó la carretera federal anoche.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'camión' es palabra aguda terminada en 'n' y lleva tilde."
  },
  {
    text: "Mi proposito principal es visitar las ruinas mayas.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'propósito' es palabra esdrújula y lleva tilde en la segunda 'o'."
  },
  {
    text: "Se me olvidó cargar la bateria de mi cámara fotográfica.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'batería' lleva tilde en la 'í' por hiato acentual."
  },
  {
    text: "Mi número de telefono está registrado en la embajada.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'teléfono' es palabra esdrújula y lleva tilde en la segunda 'e'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 6: CONFUSIÓN LL / Y (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Espero yegar a tiempo al festival de música en Guadalajara.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'yegar' se escribe con doble 'll' ('llegar')."
  },
  {
    text: "Mi trajecto comprende tres ciudades coloniales del centro.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'trajecto' se escribe con 'y' ('trayecto')."
  },
  {
    text: "Alquilé un llate de lujo para navegar en la bahía de Cancún.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'llate' se escribe con 'y' ('yate')."
  },
  {
    text: "Presentaré un proyeto de ecoturismo sustentable en Chiapas.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'proyeto' se escribe 'proyecto' (con 'c' y 't')."
  },
  {
    text: "Vengo a dar apollo a una organización comunitaria local.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: 'apollo' se escribe con 'y' ('apoyo')."
  },
  {
    text: "Caminé junto al arrollo para disfrutar de la fresca vegetación.",
    isAlien: true,
    category: "LL/Y",
    reason: "Error ortográfico: Corriente pequeña de agua es 'arroyo' con 'y'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 7: ERRORES DIVERSOS Y ESTRUCTURAS RARAS (ALIENS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo a comprar unos zapátos de piel fina en León.",
    isAlien: true,
    category: "Tildes",
    reason: "Tilde errónea: 'zapatos' es palabra llana terminada en 's', no lleva tilde."
  },
  {
    text: "Exijo protexión diplomática durante mi estancia turística.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'protexión' se escribe con 'cc' ('protección')."
  },
  {
    text: "Quiero una esplicación sobre los requisitos de aduana.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'esplicación' se escribe con 'x' ('explicación')."
  },
  {
    text: "Vengo con mi conyugue a celebrar nuestro décimo aniversario.",
    isAlien: true,
    category: "G/J",
    reason: "Error ortográfico: Se escribe 'cónyuge' (sin 'u' después de la 'g' y con tilde)."
  },
  {
    text: "Voy a inagurar una sucursal de ropa de playa en Tulum.",
    isAlien: true,
    category: "Léxico",
    reason: "Error fonético/escritura: Es 'inaugurar' con diptongo 'au'."
  },
  {
    text: "Tengo una fobia al desorden y busco un hotel pulkro.",
    isAlien: true,
    category: "C/S/Z",
    reason: "Error ortográfico: 'pulkro' se escribe con 'c' ('pulcro')."
  },
  {
    text: "Vengo a descansar porqe el trabajo me tiene muy agotado.",
    isAlien: true,
    category: "Léxico",
    reason: "Falta ortográfica: Se escribe 'porque' completo, no 'porqe'."
  },
  {
    text: "Cruzo la frontera para asisitir al festival del mariachi.",
    isAlien: true,
    category: "Ortografía",
    reason: "Error alienígena: 'asisitir' tiene una sílaba repetida ('asistir')."
  },
  {
    text: "Mi maleta contiene solo articulos de uso personal y ropa.",
    isAlien: true,
    category: "Tildes",
    reason: "Falta de tilde: 'artículos' es palabra esdrújula y lleva tilde en la 'i'."
  },
  {
    text: "Deseo conoser gente amable y provar comida picante.",
    isAlien: true,
    category: "Ortografía",
    reason: "Error doble: 'conocer' con 'c' y 'probar' con 'b'."
  },

  // -------------------------------------------------------------------------
  // CATEGORÍA 8: FRASES CORRECTAS (HUMANOS REALES - TURISTAS Y VIAJEROS)
  // -------------------------------------------------------------------------
  {
    text: "Vengo de vacaciones a disfrutar de la gastronomía y las playas.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso impecable: 'vacaciones', 'gastronomía' con tilde y sintaxis pulcra."
  },
  {
    text: "Solicito autorización para asistir a una conferencia médica.",
    isAlien: false,
    category: "Correcto",
    reason: "Gramática y tildes perfectas: 'autorización' y 'médica' correctamente acentuadas."
  },
  {
    text: "Viajo por motivos de estudio a la universidad pública del estado.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía perfecta: 'universidad' y 'estudio' escritas con total precisión."
  },
  {
    text: "Voy a visitar a mis familiares durante las fiestas decembrinas.",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente redacción: 'visitar' con 'v' y consonantes en regla."
  },
  {
    text: "Vengo a explorar los sitios arqueológicos de la península de Yucatán.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes exactas: 'arqueológicos' y 'península' (esdrújulas) y 'Yucatán' (aguda)."
  },
  {
    text: "Deseo conocer las hermosas playas de la Riviera Maya.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso adecuado: 'conocer' con 'c' y mayúsculas en nombres propios."
  },
  {
    text: "Asistiré a una reunión de negocios con socios en Guadalajara.",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación correcta: 'Asistiré' en tiempo futuro con tilde en la 'é'."
  },
  {
    text: "Planeo pasar una temporada de descanso y tranquilidad en Oaxaca.",
    isAlien: false,
    category: "Correcto",
    reason: "Redacción impecable: 'descanso' con 's' y puntuación exacta."
  },
  {
    text: "Quiero fotografiar los majestuosos volcanes del centro del país.",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación perfecta: 'país' con hiato acentual y ortografía limpia."
  },
  {
    text: "Vengo a firmar un contrato comercial con una destacada empresa textil.",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente redacción formal sin ninguna falla ortográfica ni gramatical."
  },
  {
    text: "Participaré en una carrera atlética de montaña en el Nevado de Toluca.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes impecables: 'Participaré' y 'atlética' perfectamente tildadas."
  },
  {
    text: "Viajo para realizar una investigación académica sobre el arte virreinal.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías perfectas: 'investigación' y 'académica' correctamente escritas."
  },
  {
    text: "Deseo recorrer la ruta del mezcal y conocer las tradiciones locales.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso impecable del vocabulario y ortografía: 'mezcal' con 'z' y 'conocer' con 'c'."
  },
  {
    text: "Vengo a comprar artesanías de barro negro para llevar a mi hogar.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde exacta en 'artesanías' (hiato acentual) y vocabulario sin errores."
  },
  {
    text: "Solicito ingreso como turista para recorrer el Cañón del Sumidero.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de tildes: 'ingreso', 'turista' y 'Cañón' con tilde en la 'o'."
  },
  {
    text: "Tengo una reserva confirmada en un hotel de Puerto Vallarta.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía correcta: 'reserva' con 'v' y redacción natural humana."
  },
  {
    text: "Vengo a practicar buceo en los arrecifes de Cozumel.",
    isAlien: false,
    category: "Correcto",
    reason: "Grafías correctas: 'buceo' con 'b' y 'arrecifes' con doble 'r' y 'c'."
  },
  {
    text: "Asisto a la boda de mi mejor amigo en San Miguel de Allende.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía pulcra: 'boda' con 'b' y nombres propios con mayúsculas."
  },
  {
    text: "Vengo a impartir un taller de fotografía documental en Puebla.",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación correcta: 'fotografía' con tilde y sintaxis natural."
  },
  {
    text: "Viajo por placer para conocer los pueblos mágicos de Michoacán.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes perfectas: 'mágicos' (esdrújula) y 'Michoacán' (aguda en 'n')."
  },
  {
    text: "Permaneceré diez días en el país para visitar a mis abuelos maternos.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes impecables: 'días' y 'país' con hiato acentual exacto."
  },
  {
    text: "Vengo a dar una conferencia sobre energías renovables en Monterrey.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes exactas: 'energías' e impecable redacción en 'renovables'."
  },
  {
    text: "Visito las reservas naturales para observar aves migratorias.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía cuidada: 'observar' con 'b' y 'reservas' con 'v'."
  },
  {
    text: "Quiero presenciar la celebración del Día de Muertos en Pátzcuaro.",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación perfecta: 'celebración', 'Día' y 'Pátzcuaro' con tildes según la norma."
  },
  {
    text: "Mi viaje es estrictamente cultural y con fines recreativos familiares.",
    isAlien: false,
    category: "Correcto",
    reason: "Estructura oracional impecable y sin faltas de ortografía."
  },
  {
    text: "Deseo degustar la cocina tradicional en los mercados de Mérida.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde exacta en 'Mérida' (esdrújula) y verbos conjugados correctamente."
  },
  {
    text: "Vengo con un grupo de senderismo a subir el volcán Iztaccíhuatl.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía compleja respetada con exactitud y tildes correspondientes."
  },
  {
    text: "Asistiré a un simposio internacional de arquitectura contemporánea.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías perfectas: 'Asistiré', 'simposio' y 'contemporánea'."
  },
  {
    text: "Tengo programada una estancia de dos semanas en Los Cabos.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía limpia: 'estancia' con 'c' y concordancia de género y número."
  },
  {
    text: "Vengo a disfrutar del clima soleado y a relajarme junto al mar.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso adecuado del léxico y verbos reflexivos sin ningún error."
  },
  {
    text: "Mi visita tiene como propósito celebrar mi luna de miel en Cancún.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'propósito' y aguda en 'Cancún'."
  },
  {
    text: "Solicito autorización turística para realizar una travesía en tren.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía impecable: 'autorización', 'turística' y 'travesía' con tildes."
  },
  {
    text: "Vengo a participar en un congreso médico sobre cardiología pediátrica.",
    isAlien: false,
    category: "Correcto",
    reason: "Acentuación exquisita: 'médico', 'cardiología' y 'pediátrica' bien tildadas."
  },
  {
    text: "Viajo con el fin de aprender más sobre la historia prehispánica.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'prehispánica' y ortografía sin defecto alguno."
  },
  {
    text: "Vengo a adquirir artesanías típicas elaboradas por manos mexicanas.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde esdrújula en 'típicas' y uso adecuado de 'adquirir'."
  },
  {
    text: "Haré un recorrido por las haciendas coloniales del estado de Hidalgo.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso exacto de la 'h': 'Haré' (futuro de hacer con tilde) e 'Hidalgo'."
  },
  {
    text: "Vengo a descansar unos días y a probar el chocolate oaxaqueño.",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente uso de 'probar' con 'b', 'días' con tilde y 'oaxaqueño'."
  },
  {
    text: "Visito la ciudad para acudir a una feria internacional del libro.",
    isAlien: false,
    category: "Correcto",
    reason: "Gramática impecable y redacción fluida sin faltas ortográficas."
  },
  {
    text: "Tengo una reunión agendada con productores cafetaleros de Veracruz.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía correcta: 'reunión' con tilde y nombres propios respetados."
  },
  {
    text: "Vengo a navegar en kayak por las lagunas de Montebello.",
    isAlien: false,
    category: "Correcto",
    reason: "Excelente concordancia y vocabulario deportivo bien empleado."
  },
  {
    text: "Planeo quedarme un mes para estudiar el idioma y su rica cultura.",
    isAlien: false,
    category: "Correcto",
    reason: "Oración natural y gramaticalmente impecable."
  },
  {
    text: "Vengo a pasear en bicicleta por el Paseo de la Reforma.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de 'pasear' y 'bicicleta' sin faltas ortográficas."
  },
  {
    text: "Asistiré a un homenaje luctuoso en honor a mi abuelo.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde en 'Asistiré' y grafía correcta en 'homenaje' y 'luctuoso'."
  },
  {
    text: "Quiero conocer los cenotes de agua cristalina en la península.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto: 'cenotes' con 'c', 'conocer' con 'c' y 'península' con tilde."
  },
  {
    text: "Vengo a tomar clases de cocina mexicana tradicional en Puebla.",
    isAlien: false,
    category: "Correcto",
    reason: "Sintaxis humana impecable y ortografía pulcra."
  },
  {
    text: "Viajo para asistir al festival internacional de cine de Morelia.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía sin fallas y vocabulario institucional correcto."
  },
  {
    text: "Deseo descansar junto a la alberca y leer durante toda la semana.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso perfecto de 'alberca' con 'b' y conjugaciones verbales correctas."
  },
  {
    text: "Vengo a firmar un convenio de colaboración científica entre universidades.",
    isAlien: false,
    category: "Correcto",
    reason: "Tildes y grafías cuidadas: 'colaboración' y 'científica' correctamente escritas."
  },
  {
    text: "Pasaré el fin de semana en las cabañas de Mazamitla con mi familia.",
    isAlien: false,
    category: "Correcto",
    reason: "Tilde en futuro 'Pasaré', 'cabañas' con 'b' y nombres geográficos correctos."
  },
  {
    text: "Vengo a practicar surf en las olas de Puerto Escondido.",
    isAlien: false,
    category: "Correcto",
    reason: "Redacción limpia y adecuada para un turista extranjero legítimo."
  },
  {
    text: "Deseo recorrer el Museo Nacional de Antropología en Chapultepec.",
    isAlien: false,
    category: "Correcto",
    reason: "Ortografía y mayúsculas institucionales perfectamente respetadas."
  },
  {
    text: "Vengo a comprar granos de café de altura en Coatepec.",
    isAlien: false,
    category: "Correcto",
    reason: "Uso correcto de la tilde en 'café' y redacción natural humana."
  }
];

// Attach to window for direct file:// script tag compatibility
if (typeof window !== 'undefined') {
  window.CASES_BANK = CASES_BANK;
  window.TRAVELER_PROFILES = TRAVELER_PROFILES;
  window.TOTAL_CASES_AVAILABLE = CASES_BANK.length;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASES_BANK, TRAVELER_PROFILES, TOTAL_CASES_AVAILABLE: CASES_BANK.length };
}
