// ============================================================
// CONTENIDO DEL SITIO WEB - ABOGADOS CONSULTORES GROUP
// ============================================================

const content = {
  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================
  nav: {
    logo: `
      <div class="brand-logo-container" style="display: flex; align-items: center; gap: 12px; line-height: 1.2;">
        <img src="/assets/law-firm-logo.svg" alt="LAW FIRM LOGO" class="nav-custom-logo" style="width: 48px; height: 48px; object-fit: contain; border-radius: 4px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <div>
          <span style="font-variant: small-caps; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.5px; color: var(--color-accent); display: block;">
            Firma Boutique Legal KIBS
          </span>
          <span style="font-size: 0.95rem; font-weight: 700; color: var(--color-white); display: block;">
            Abogados Consultores Group
          </span>
        </div>
      </div>
    `,
    links: [
      { label: "INICIO", href: "#hero" },
      { label: "PERFIL CORPORATIVO", href: "#sobre-mi" },
      { label: "PRÁCTICA KIBS", href: "#areas" },
      { label: "COBERTURA INTERNACIONAL", href: "#por-que" },
      { label: "PRÁCTICA LEGAL ESPECIALIZADA", href: "#testimonios" },
      { label: "PRODUCCIÓN INTELECTUAL", href: "#blog" },
    ],
    cta: "SOLICITAR CONSULTA ESTRATÉGICA"
  },

  // ==========================================================
  // HERO
  // ==========================================================
  hero: {
    badge: "FIRMA BOUTIQUE LEGAL KIBS",
    titulo: "ABOGADOS CONSULTORES GROUP",
    subtituloHero: "Análisis Estructural y Litigio de Alta Complejidad",
    subtitulo: "MÁS DE 36 AÑOS DE TRAYECTORIA ININTERRUMPIDA APLICANDO EXACTITUD QUIRÚRGICA. NEUTRALIZAMOS EL MARGEN DE ERROR Y DISOLVEMOS PARADOJAS NORMATIVAS PARA GARANTIZAR EL QUIEBRE DE LA PRETENSIÓN DEL ADVERSARIO EN LITIGIOS DE ALTA COMPLEJIDAD.<br><br>36 AÑOS DE TRAYECTORIA ININTERRUMPIDA REDEFINIENDO EL EJERCICIO ESTRATÉGICO DEL DERECHO BAJO LA DIRECCIÓN DEL DR. NORMAN MOLINA-MAESTRE, CREADOR DEL MARCO ANALÍTICO «LÓGICA INVERTIDA».",
    cta: "SOLICITAR CONSULTA ESTRATÉGICA",
    ctaSecundario: "PRÁCTICA KIBS",
    bgImagen: "/assets/hero-building-day.jpg"
  },

  // ==========================================================
  // SOBRE MÍ (DIRECCIÓN ESTRATÉGICA Y PERFIL CORPORATIVO)
  // ==========================================================
  sobreMi: {
    tag: "DIRECCIÓN ESTRATÉGICA",
    titulo: "EL ESTRATEGA Y LA MAQUINARIA LEGAL",
    subtitulo: "La mente maestra que articula el despliegue de especialistas en todo el territorio nacional.",
    nombre: "DR. NORMAN MOLINA-MAESTRE, PH.D.",
    cargo: "CHAIRMAN & DIRECTOR ESTRATÉGICO",
    perfilCorporativo: {
      titulo: "PERFIL CORPORATIVO",
      parrafos: [
        "En Abogados Consultores Group, somos un equipo multidisciplinario de profesionales del Derecho, organizado desde el año 1990, apoyado por una red global de especialistas regulatorios y aliados estratégicos interdisciplinarios desplegados en el territorio nacional, Estados Unidos y Europa. Esta estructura nos permite ofrecer una cobertura inmediata y capacidad de respuesta simultánea en múltiples jurisdicciones.",
        "Nuestra firma se distingue por combinar el rigor técnico y la doctrina legal, respaldados por un equipo articulado de consultores estratégicos con una comprensión profunda del entorno corporativo, financiero y regulatorio; todo orientado a la protección patrimonial, la estructuración de negocios y la resolución de controversias de alta complejidad."
      ],
      puntosClaveTitulo: "Puntos Clave de Nuestra Firma:",
      puntosClave: [
        { label: "Capacidad Multijurisdiccional", texto: "Coordinamos y ejecutamos estrategias legales con alcance en el territorio nacional, Estados Unidos y Europa." },
        { label: "Enfoque de Élite", texto: "Atendemos asuntos donde la precisión conceptual, el análisis estructural y la discreción son determinantes para el éxito del cliente." },
        { label: "Confidencialidad Absoluta", texto: "Operamos bajo los más estrictos estándares de secreto profesional y protocolos de confidencialidad en cada patrocinio." }
      ]
    },
    citaDestacada: {
      texto: "«Proporcionamos la solidez institucional y el respaldo táctico que las organizaciones y líderes de industria requieren para tomar decisiones con certeza jurídica».",
      autor: "DR. NORMAN MOLINA-MAESTRE, PHD | CHAIRMAN",
      cargo: "SOCIO FUNDADOR – DIRECTOR ESTRATÉGICO"
    },
    biografia: {
      titulo: "BIOGRAFÍA",
      parrafos: [
        "Con décadas de madurez vital y 36 años de ejercicio profesional ininterrumpido en la zona de impacto del litigio complejo, mi visión del Derecho trasciende el escritorio tradicional. Quien acude a nuestra consultoría no busca a un burócrata, sino a un estratega corporativo. Oriundo de Caracas y con operaciones de alcance nacional e internacional, concibo cada conflicto legal como un problema de estructura que exige un análisis profundo, paciencia milimétrica y una ejecución de exactitud quirúrgica.",
        "A lo largo de décadas sosteniendo confrontaciones de desgaste hasta las últimas instancias del Tribunal Supremo de Justicia, mi razonamiento ha rechazado por completo el mal diseño de la 'normalidad' jurídica. Al procesar el conflicto a través del Teorema del Diferencial de la «Lógica Invertida» —del cual soy autor intelectual—, quiebro la miopía del razonamiento lineal clásico. Esta disidencia analítica me permite diseccionar la anatomía oculta de la controversia, revelar vectores invisibles para la academia ortodoxa y ejecutar el movimiento definitivo con la frialdad matemática de un arquitecto estructural.",
        "<strong>• Análisis Estructural y Asesoría Estratégica:</strong> Mi investigación sobre las disfunciones sistémicas y patologías institucionales va mucho más allá del ejercicio teórico. En la arena del litigio y la consultoría corporativa, aplico este rigor analítico como un instrumento táctico para identificar el punto de quiebre estructural en la argumentación de la contraparte. Al detectar esa falla milimétrica, provocamos un punto de inflexión irreversible en el conflicto, capitalizando su error para asegurar nuestro éxito y neutralizar estratégicamente a la contraparte.",
        "<strong>• Filosofía y Lógica Formal:</strong> Mi labor en este campo fractura los límites de la dogmática tradicional. Soy el creador del marco analítico «Lógica Invertida» como herramienta de análisis estructural, formalizado en mi tratado Perder para Ganar (ISBN 978-980-18-8717-1). En dicha obra demuestro la disolución matemática y lógica de la Paradoja de Protágoras —considerada insoluble durante más de dos milenios—, evidenciando los límites operativos del edificio aristotélico y dotando a la ciencia jurídica de un andamiaje inédito para el análisis del conflicto y la materialización de la justicia.",
        "Pero más allá de los pergaminos de la academia, soy un diseñador de soluciones. Quienes confían en nuestra firma no solo obtienen el respaldo de una red nacional de especialistas, sino la tranquilidad de saber que la mente maestra detrás de su caso combina la madurez vital con la preparación técnica de décadas de experiencia. Cada uno de nuestros movimientos jurídicos está diseñado para ser certero, sin margen de error y estratégicamente inapelable para la pretensión del adversario."
      ]
    },
    valores: [
      {
        icono: "sitemap",
        titulo: "ANÁLISIS ESTRUCTURAL",
        descripcion: "APLICAMOS «LÓGICA INVERTIDA» PARA IDENTIFICAR LA FALLA ESTRUCTURAL DEL ADVERSARIO."
      },
      {
        icono: "globe",
        titulo: "DESPLIEGUE OPERATIVO",
        descripcion: "ESPECIALISTAS EJECUTANDO TÁCTICAS DE ALTA COMPLEJIDAD A NIVEL NACIONAL E INTERNACIONAL."
      },
      {
        icono: "crosshairs",
        titulo: "EXACTITUD QUIRÚRGICA",
        descripcion: "MANIOBRAS LEGALES DISEÑADAS SIN MARGEN DE ERROR PARA ANULAR A LA CONTRAPARTE."
      }
    ],
    imagen: "/assets/norman.png",
    experienciaNum: "36",
    experienciaTexto: "AÑOS DE TRAYECTORIA"
  },

  // ==========================================================
  // ÁREAS DE PRÁCTICA
  // ==========================================================
  areas: {
    tag: "CAPACIDAD DE INTERVENCIÓN",
    titulo: "ÁREAS DE EJECUCIÓN TÁCTICA",
    subtitulo: "DESPLIEGUE DE NUESTRA MAQUINARIA LEGAL Y ANÁLISIS ESTRUCTURAL EN CONTROVERSIAS DE ALTA COMPLEJIDAD.",
    items: [
      {
        icono: "building-columns",
        titulo: "Arquitectura Societaria y Corporativa",
        descripcion: "Diseñamos estructuras corporativas inexpugnables. Dirigimos procesos de constitución, fusiones, adquisiciones y transacciones críticas. Protegemos el patrimonio empresarial neutralizando vulnerabilidades sistémicas mediante un cumplimiento normativo (Compliance) hermético antes de que escalen a la fase de controversia.",
        caracteristicas: [
          "FUSIONES Y ADQUISICIONES",
          "TRANSACCIONES CRÍTICAS",
          "COMPLIANCE",
          "GOBIERNO CORPORATIVO",
          "DUE DILIGENCE",
          "PREVENCIÓN DE QUIEBRES"
        ]
      },
      {
        icono: "bolt",
        titulo: "Regulación Energética e Hidrocarburos",
        descripcion: "Diseccionamos la complejidad regulatoria del sector energético. Estructuramos y blindamos contratos de hidrocarburos, procesamiento y comercialización, asegurando el control absoluto del cliente en disputas y operaciones de alta escala.",
        caracteristicas: [
          "CONTRATOS PETROLEROS",
          "MARCOS REGULATORIOS",
          "DISPUTAS ENERGÉTICAS"
        ]
      },
      {
        icono: "scale-unbalanced",
        titulo: "Litigio Estratégico y Arbitraje",
        descripcion: "Resolución de controversias de alto impacto financiero. Aplicamos el análisis estructural para identificar la fisura exacta en el argumento rival. Intervenimos con estrategias de precisión absoluta orientadas a la neutralización de la contraparte en jurisdicciones civiles, mercantiles, tribunales de arbitraje y defensas penales corporativas.",
        caracteristicas: [
          "PENAL CORPORATIVO",
          "CASACIÓN CIVIL",
          "ARBITRAJE INTERNACIONAL",
          "LITIGIO DE ALTO NIVEL",
          "EJECUCIÓN DE GARANTÍAS",
          "CONTRATOS COMPLEJOS",
          "DELITOS ECONÓMICOS Y LEGITIMACIÓN DE CAPITALES"
        ]
      },
      {
        icono: "microscope",
        titulo: "Dictamen Estratégico de Alta Complejidad",
        descripcion: "Intervención analítica en controversias donde la complejidad técnica, la doctrina o el interés jurídico exigen un rigor superior. Evaluamos el escenario de manera independiente a la escala del proceso para entregar un andamiaje argumental irrefutable.",
        caracteristicas: [
          "ANÁLISIS ESTRUCTURAL",
          "DOCTRINA JURÍDICA",
          "VIABILIDAD DE CASOS"
        ]
      },
      {
        icono: "users-gear",
        titulo: "Estrategia Laboral Corporativa",
        descripcion: "Neutralizamos contingencias en las relaciones de trabajo. Diseñamos políticas preventivas y asumimos la defensa táctica en controversias laborales, individuales o colectivas, que amenacen la estabilidad operativa y financiera de la empresa.",
        caracteristicas: [
          "DEFENSA PATRONAL",
          "NEGOCIACIÓN COLECTIVA",
          "CONTINGENCIAS LABORALES"
        ]
      },
      {
        icono: "shield-halved",
        titulo: "Protección de Activos Intangibles",
        descripcion: "Blindamos el núcleo de la innovación y el valor corporativo. Ejecutamos el registro y la defensa inquebrantable de marcas, patentes y derechos de autor, anticipando cualquier vulneración o litigio por parte de terceros.",
        caracteristicas: [
          "PATENTES",
          "REGISTRO DE MARCAS",
          "DEFENSA INTELECTUAL"
        ]
      }
    ]
  },

  // ==========================================================
  // POR QUÉ ELEGIRNOS (ESTRATEGIA Y EJECUCIÓN)
  // ==========================================================
  porQue: {
    tag: "ESTRATEGIA Y EJECUCIÓN",
    titulo: "Capacidad Operativa",
    subtitulo: "Criterio Técnico, Nuestra Ventaja Táctica",
    items: [
      {
        icono: "book-bookmark",
        titulo: "FONDO EDITORIAL ACG",
        descripcion: "<strong>INVESTIGACIÓN DOGMÁTICA:</strong> Nuestra práctica no solo aplica la doctrina; la creamos. A través de nuestro sello editorial propio, publicamos investigaciones que disuelven contradicciones normativas, destacando el tratado <strong>PERDER PARA GANAR</strong> (ISBN 978-980-18-8717-1)."
      },
      {
        icono: "robot",
        titulo: "ASISTENTE CORPORATIVO (ÓSCAR)",
        descripcion: "<strong>INTELIGENCIA ARTIFICIAL:</strong> Incorporamos tecnología de vanguardia en la atención a nuestros clientes. Nuestro ecosistema de WhatsApp Business está gestionado por inteligencia artificial para perfilar y atender requerimientos corporativos de alta confidencialidad con precisión inmediata, ofreciendo cobertura en más de 30 idiomas (24/7)."
      },
      {
        icono: "shield-halved",
        titulo: "ECOSISTEMA TECNOLÓGICO",
        descripcion: "<strong>INFRAESTRUCTURA DE DATOS / TRANSMISIÓN ENCRIPTADA:</strong> Sustituimos el intercambio analógico por protocolos encriptados in-situ utilizando tecnología NFC (Smart Rings y Brazaletes), respaldando nuestras operaciones con una red logística internacional de primera línea para el aprovisionamiento de recursos e investigación."
      },
      {
        icono: "globe",
        titulo: "ALIANZAS INTERNACIONALES",
        descripcion: "<strong>ALCANCE TRANSFRONTERIZO:</strong> Mantenemos conexiones consolidadas con firmas y especialistas de primer nivel en Estados Unidos y Europa. Esta sólida red nos permite ejecutar estructuraciones corporativas, cumplimiento normativo y litigios de alta complejidad con alcance global y precisión absoluta."
      }
    ]
  },

  // ==========================================================
  // REGISTRO OPERATIVO (HITOS)
  // ==========================================================
  testimonios: {
    tag: "REGISTRO OPERATIVO",
    titulo: "Hitos de Ejecución Táctica",
    subtitulo: "Intervenciones estratégicas de alta complejidad, ejecutadas y resueltas bajo acuerdos de estricta confidencialidad corporativa.",
    items: [
      {
        tipo: "FINANCIERO / ENERGÉTICO",
        tituloHito: "«Neutralización de Contingencia Corporativa»",
        texto: "«Mediante el análisis estructural de la arquitectura contractual, se identificó un punto de quiebre en la demanda adversaria, logrando anular una pretensión multimillonaria en contra de un consorcio del sector energético, sin necesidad de llegar a la etapa de juicio.»",
        autor: "— Caso de Alta Complejidad | Sector Hidrocarburos",
        calificacion: 5
      },
      {
        tipo: "PENAL / DEFENSA INSTITUCIONAL",
        tituloHito: "«Desmontaje de Acusación Penal»",
        texto: "«Aplicación de Lógica Invertida para la deconstrucción de un expediente penal corporativo. Se demostró la inviabilidad estructural de las premisas acusatorias, logrando el sobreseimiento absoluto de la junta directiva.»",
        autor: "— Litigio Penal | Jurisdicción Nacional",
        calificacion: 5
      },
      {
        tipo: "CONSULTORÍA / PREVENCIÓN",
        tituloHito: "«Blindaje y Arquitectura Societaria»",
        texto: "«Intervención analítica en un proceso de estructuración corporativa para transacciones críticas. Se diseñó un andamiaje legal inexpugnable, mitigando vulnerabilidades sistémicas y asegurando el control absoluto del patrimonio antes de cualquier fase de controversia.»",
        autor: "— Dictamen Estratégico | Consultoría Corporativa",
        calificacion: 5
      },
      {
        tipo: "HITO FINANCIERO PENAL",
        tituloHito: "«Legitimación de Capitales un Fiasco Legal»",
        texto: "Intervención y análisis estructural frente a acusaciones financieras y corporativas de alta sensibilidad institucional. Análisis epistemológico y procesal del marco normativo.",
        autor: "— Dictamen Doctrinal | Criminología Crítica",
        calificacion: 5,
        link: "#seccion-legitimacion",
        linkText: "Ver Dictamen Doctrinal"
      }
    ]
  },

  // ==========================================================
  // PREGUNTAS FRECUENTES (PARÁMETROS OPERATIVOS)
  // ==========================================================
  faq: {
    tag: "PARÁMETROS OPERATIVOS",
    titulo: "Consultas Estratégicas",
    subtitulo: "Criterios de intervención, doctrina y despliegue de nuestra maquinaria legal.",
    items: [
      {
        pregunta: "¿Cuál es el alcance operativo y jurisdiccional de la firma?",
        respuesta: "Operamos bajo un modelo de Boutique Legal KIBS, lo que significa que nuestro núcleo intelectual es deliberadamente cerrado y exclusivo. Toda la dirección estratégica y el diseño analítico (Lógica Invertida) se centralizan en nuestra sede matriz en Caracas. Para la ejecución táctica, sustituimos la burocracia masiva por una selecta red de alianzas estratégicas interjurisdiccionales. Esta estructura nos permite desplegar intervenciones quirúrgicas de manera inmediata en todo el territorio nacional, Estados Unidos y Europa, garantizando un control absoluto del litigio sin vulnerar la estricta confidencialidad que exigen nuestros clientes."
      },
      {
        pregunta: "¿En qué consiste exactamente la «Lógica Invertida» en un litigio?",
        respuesta: "La «Lógica Invertida» es nuestro marco exclusivo de análisis estructural, diseñado para disolver controversias que la dogmática tradicional considera insolubles. En la arena del litigio, abandonamos el razonamiento lineal clásico y aplicamos el Teorema del Diferencial. En lugar de confrontar frontalmente la narrativa del adversario, diseccionamos la anatomía oculta de su argumentación para identificar su falla estructural milimétrica. Al detectar este punto de quiebre, utilizamos el propio peso y las contradicciones de la pretensión contraria para provocar su colapso lógico y jurídico. En términos prácticos: logramos la disolución de la paradoja normativa, garantizando a nuestros clientes una victoria estratégica, predecible y matemáticamente irrefutable."
      },
      {
        pregunta: "¿En qué fase del conflicto corporativo es estratégico solicitar su intervención?",
        respuesta: "Nuestra capacidad de intervención se despliega en dos momentos críticos. El escenario óptimo es la fase de estructuración, donde diseñamos una arquitectura legal y normativa inexpugnable (contratos de alta escala, compliance hermético, fusiones) que blinda el patrimonio y evita la gestación del conflicto. Sin embargo, el verdadero poder de nuestro modelo KIBS brilla en las fases de alta complejidad, fricción o desgaste procesal —cuando el conflicto ha escalado, los intereses en juego son masivos, o el caso se encuentra en un «callejón sin salida» donde la dogmática tradicional ha fracasado. Es en estas etapas críticas donde nuestra intervención es decisiva: aplicamos el análisis estructural y la «Lógica Invertida» para revertir el escenario, identificar la falla milimétrica en la argumentación contraria y ejecutar la disolución definitiva de la controversia."
      },
      {
        pregunta: "¿Cómo garantizan la confidencialidad y el secreto corporativo en sectores críticos como el energético o financiero?",
        respuesta: "En Abogados Consultores Group, la confidencialidad no es solo un deber ético; es la arquitectura central de nuestra operación KIBS. Entendemos que en megaproyectos energéticos, estructuraciones financieras y litigios de alto impacto, la filtración de información es el mayor riesgo. Para erradicar esta vulnerabilidad, hemos sustituido el intercambio analógico por un ecosistema tecnológico de máxima seguridad. Operamos con protocolos de transmisión encriptada in-situ mediante tecnología NFC (Smart Rings y Brazaletes) exclusiva para el manejo de credenciales con juntas directivas. Asimismo, el perfilamiento de requerimientos de alta sensibilidad es gestionado en primera instancia por nuestra Inteligencia Artificial corporativa bajo estándares cifrados. Este núcleo operativo cerrado y tecnológicamente blindado garantiza un hermetismo absoluto antes, durante y después de cada maniobra legal."
      },
      {
        pregunta: "¿Cómo se estructura la valoración de honorarios profesionales en intervenciones de alta complejidad?",
        respuesta: "Como Firma Boutique Legal KIBS, descartamos los modelos de facturación genéricos o estandarizados. Entendemos que en el litigio corporativo complejo y la estructuración de negocios, el cliente no compra horas de trabajo, sino certeza jurídica y protección patrimonial. Por ello, nuestros honorarios se estructuran con base en el valor de la solución aportada, la magnitud de los activos bajo riesgo y la profundidad del diseño analítico requerido.<br><br>Toda intervención inicia con un Dictamen Estratégico preliminar. Esta evaluación nos permite dimensionar la arquitectura del conflicto y presentar una propuesta económica estrictamente a la medida, garantizando que el despliegue de nuestro intelecto y maquinaria legal represente siempre un retorno de inversión estratégico (ROI) para la corporación, y no un gasto operativo."
      },
      {
        pregunta: "¿Cuál es el protocolo de inicio para solicitar una intervención estratégica o defensa corporativa?",
        respuesta: "Todo encargo profesional en nuestra firma inicia con un protocolo de perfilamiento estricto y confidencial. El primer punto de contacto es gestionado a través de nuestro Asistente Corporativo de Inteligencia Artificial (Óscar), el cual recaba los vectores básicos de su requerimiento bajo estándares de encriptación y sin fricciones operativas.<br><br>Una vez procesada esta información inicial, agendamos una Sesión de Dirección Estratégica reservada (presencial o telemática). En esta evaluación preliminar, analizamos la arquitectura de su conflicto para determinar si el escenario exige el nivel de complejidad y rigor analítico que maneja nuestra firma. De ser admitido el caso, procedemos a estructurar la hoja de ruta y a aplicar nuestro andamiaje de «Lógica Invertida»."
      }
    ]
  },

  // ==========================================================
  // BLOG (PRODUCCIÓN INTELECTUAL)
  // ==========================================================
  blog: {
    tag: "DOCTRINA Y ANÁLISIS ESTRUCTURAL",
    titulo: "Producción Intelectual",
    subtitulo: "Tratados, ensayos y análisis de alta complejidad sobre disfunciones institucionales y lógica procesal.",
    items: [
      {
        id: "2026-08-24-resolucion-paradoja-protagoras",
        titulo: "Perder para Ganar: La resolución de la paradoja de Protágoras",
        extracto: "Un análisis profundo sobre la Lógica Invertida aplicada a controversias estructurales. Una deconstrucción del clásico dilema histórico para encontrar el punto de quiebre y neutralizar cualquier sistema argumentativo adverso.",
        fecha: "Obra Cumbre",
        imagen: "/images/uploads/protagoras.jpg",
        categoria: "LÓGICA Y FILOSOFÍA",
        cta: "Explorar Obra"
      },
      {
        id: "2026-08-24-patologias-institucionales",
        titulo: "Patologías Institucionales: Disfunciones sistémicas en marcos corporativos",
        extracto: "Ensayo crítico sobre las fallas estructurales dentro de los esquemas organizacionales. Una evaluación de cómo las deficiencias en el andamiaje legal provocan el colapso operativo mucho antes de la intervención judicial.",
        fecha: "Investigación Actual",
        imagen: "/images/uploads/socios.jpg",
        categoria: "INGENIERÍA INSTITUCIONAL",
        cta: "Leer Análisis"
      },
      {
        id: "2026-08-24-procesamiento-gas-licuado",
        titulo: "Arquitectura contractual en proyectos de procesamiento de gas licuado",
        extracto: "Evaluación de las vulnerabilidades regulatorias y el blindaje societario requerido para operaciones de alta escala y exportación en el sector energético, garantizando el control patrimonial absoluto.",
        fecha: "Enfoque Industrial",
        imagen: "/images/uploads/documentos.jpg",
        categoria: "SECTOR ENERGÉTICO E HIDROCARBUROS",
        cta: "Ver Dictamen"
      },
      {
        id: "legitimacion-de-capitales",
        isInteractiveModal: true,
        targetAnchor: "#seccion-legitimacion",
        titulo: "Legitimación de Capitales, un fiasco legal",
        extracto: "Análisis Estructural y Crítica Epistemológica a la Arquitectura Financiera Global y su Impacto Procesal en Venezuela. Tratado en 4 ventanas analíticas.",
        fecha: "11 de septiembre de 2026",
        imagen: "/assets/hero-building-day.jpg",
        categoria: "CRIMINOLOGÍA CRÍTICA",
        cta: "Ver Dictamen (4 Ventanas)"
      }
    ]
  },

  // ==========================================================
  // ARTÍCULO INTERACTIVO DE 4 VENTANAS (SECCIÓN 7)
  // ==========================================================
  articuloLegitimacion: {
    ficha: {
      titulo: "LEGITIMACIÓN DE CAPITALES, UN FIASCO LEGAL",
      subtitulo: "Análisis Estructural y Crítica Epistemológica a la Arquitectura Financiera Global y su Impacto Procesal en Venezuela",
      autor: "Dr. Norman Molina-Maestre, PhD (Inpreabogado #41.550 | Ilustre Colegio de Abogados de Caracas #24.665)",
      areaDogmatica: "Criminología Crítica, Filosofía del Derecho, Derecho Penal Económico y Extinción de Dominio.",
      lineaInvestigacion: "Desmantelamiento de Disfunciones Sistémicas y Lógica Invertida Aplicada al Litigio de Alta Complejidad.",
      fechaEmision: "11 de septiembre de 2026.",
      citaApertura: "«Si la justicia no es igual para todos, no es justicia: es tiranía disfrazada de ley.» — Simón Bolívar"
    },
    pestanas: [
      {
        id: "tab-grietas",
        tituloBoton: "VENTANA 1: LAS TRES GRIETAS",
        titulo: "VENTANA 1 · LAS TRES GRIETAS ESTRUCTURALES DEL FIASCO NORMATIVO",
        subtitulo: "Desmontaje conceptual de la ficción tutelar y el colapso de las garantías procesales",
        pullQuote: "«Como advertía proféticamente Simón Bolívar en su carta a Patricio Campbell (1829), los sistemas imperiales son capaces de sembrar miseria “en nombre de la libertad”.»",
        intro: "La lucha global contra el lavado de activos y la legitimación de capitales se ha erigido sobre un pedestal de rectitud moral que, bajo el escrutinio de las ciencias penales y la filosofía del derecho, colapsa por completo. Lo que nació como un esfuerzo concertado para asfixiar las finanzas del crimen organizado se ha desnaturalizado en un dispositivo de coacción y control hegemónico. Como advertía proféticamente Simón Bolívar en su carta a Patricio Campbell (1829), los sistemas imperiales son capaces de sembrar miseria «en nombre de la libertad». Este fiasco legal se articula sobre tres grietas insalvables:",
        puntos: [
          {
            num: "1",
            titulo: "La Ficción del Bien Jurídico Tutelado",
            texto: "La norma no protege la estabilidad macroeconómica ni el orden socioeconómico. Su función real es garantizar el peaje transaccional de los centros hegemónicos, evitando que la liquidez fluya fuera de sus circuitos bancarios. Para ello se diseñan tipos penales deliberadamente vagos y elásticos, facilitando la judicialización de adversarios geopolíticos mientras se blinda la especulación de los fondos buitre."
          },
          {
            num: "2",
            titulo: "El Colapso del Principio de Igualdad y la Presunción de Inocencia",
            texto: "Se instaura una inquisición financiera que invierte la carga probatoria. Se impone al administrado o empresario nacional la obligación diabólica de certificar la pureza absoluta de sus fondos frente a un tribunal internacional que jamás se aplica ese baremo a sí mismo. Es un filtro aduanero asimétrico formulado para asfixiar el capital emergente."
          },
          {
            num: "3",
            titulo: "La Instrumentación del Subdesarrollo (Antagonismo Funcional de Alternabilidad)",
            texto: "La normativa obliga a las naciones soberanas a adoptar marcos regulatorios que, por diseño estructural, les impiden capitalizarse de forma autónoma, sometiéndolas a la dependencia del endeudamiento multilateral externo."
          }
        ],
        conclusion: "Cuando la norma penal se redacta para perdonar el saqueo propio y castigar el progreso ajeno, cesa su naturaleza de Derecho y muta en una simple arma de asedio económico."
      },
      {
        id: "tab-chantaje",
        tituloBoton: "VENTANA 2: EL CHANTAJE GLOBAL",
        titulo: "VENTANA 2 · LA ANATOMÍA DEL CHANTAJE GLOBAL",
        subtitulo: "Geopolítica del GAFI, asimetría centro-periferia y control patrimonial interno",
        pullQuote: "«El ordenamiento global sitúa a los países en desarrollo ante una paradoja estructural: un sistema que formalmente predica la pureza del capital, pero que fácticamente opera bajo una lógica invertida de expolio y subordinación.»",
        intro: "La doble moral de la arquitectura financiera contemporánea no es una percepción retórica; es una patología sistémica documentada. El ordenamiento global sitúa a los países en desarrollo ante una paradoja estructural: un sistema que formalmente predica la pureza del capital, pero que fácticamente opera bajo una lógica invertida de expolio y subordinación. Tres factores articulan este dispositivo:",
        puntos: [
          {
            num: "•",
            titulo: "La Coacción del Ecosistema GAFI (El Garrote Internacional)",
            texto: "Las naciones del Sur global no importan estas leyes por docilidad intelectual, sino bajo extorsión financiera directa. Quien no calca mecánicamente las directrices del GAFI es arrojado a «listas grises» o «negras», sufriendo la cancelación de su banca corresponsal, la expulsión de la red SWIFT y la desconexión del comercio internacional."
          },
          {
            num: "•",
            titulo: "La Asimetría del Capital (El Eje Centro-Periferia)",
            texto: "Reglas draconianas en la periferia para evitar la acumulación autóctona y normas laxas en los centros de poder (fideicomisos opacos, estructuras offshore) para absorber esa misma liquidez en fuga."
          },
          {
            num: "•",
            titulo: "La Instrumentalización del Control Interno",
            texto: "A escala doméstica, los Estados encuentran en esta inflación legislativa una excusa técnica para expandir el poder punitivo: embargos expeditos, confiscaciones sin sentencia penal firme y la neutralización arbitraria de competidores comerciales y disidentes políticos."
          }
        ],
        conclusion: "Axioma de la Desigualdad Lógica: El poder de los centros hegemónicos no es una cualidad moral intrínseca; es relativo y depende enteramente de la sumisión de la periferia. La hemorragia regulatoria no es una barrera para frenar el dinero sucio, sino un cerco de contención para forzar al capital global a tributar exclusivamente en las arcas del hegemón."
      },
      {
        id: "tab-miami",
        tituloBoton: "VENTANA 3: EL ESPEJISMO DE MIAMI",
        titulo: "VENTANA 3 · EL ESPEJISMO DE MIAMI Y LOS TIBURONES DE WALL STREET",
        subtitulo: "El doble estándar moral entre la inyección histórica del capital y la predatory finance",
        pullQuote: "«No se castiga la sangre en el dinero, sino la negativa a pagar tributo al monopolio financiero internacional.»",
        intro: "¿Bajo qué estándares de pureza ética se levantó el emporio inmobiliario y comercial del sur de la Florida? El análisis criminológico e histórico destruye el mito: Miami no floreció mediante el libre mercado puritano, sino mediante una inyección colosal de liquidez ilícita durante los años 70 y 80, tolerada con frialdad por las agencias federales:",
        puntos: [
          {
            num: "•",
            titulo: "La Anomalía de la Reserva Federal",
            texto: "Mientras las sucursales de la FED en todo el país sufrían contracciones de liquidez, la oficina de Miami registraba superávits físicos multimillonarios que desbordaban las bóvedas bancarias."
          },
          {
            num: "•",
            titulo: "El Skyline del Efectivo",
            texto: "Rascacielos enteros en Brickell, centros comerciales y urbanismos de lujo fueron edificados mediante operaciones en efectivo y corporaciones de maletín (shell companies), sin exigencias de beneficiario final."
          },
          {
            num: "•",
            titulo: "Amnistía Institucional Autootorgada",
            texto: "Una vez capitalizada la ciudad y consolidada su infraestructura, el sistema clausuró el acceso, dictó las leyes de PLC/FT y criminalizó el mismo método de acumulación rápida para el resto del planeta."
          }
        ],
        extra: "<strong>La Falsa Frontera Ética: Narcotráfico vs. Wall Street.</strong> ¿Qué diferencia a los actores de economías subterráneas de los especuladores de Wall Street que desmiembran corporaciones enteras, liquidan fondos de pensiones y arrojan a miles de familias a la miseria, o de los operadores de Chicago que inflan artificialmente los derivados sobre el trigo y el arroz provocando hambrunas en continentes enteros?",
        conclusion: "Diagnóstico: No existe diferencia ontológica de daño social. La única diferencia radica en la titularidad del autor y la jurisdicción de depósito de la renta. Si el sufrimiento humano lo genera un operador de Manhattan amparado por la Reserva Federal, el sistema lo bautiza como «eficiencia de mercado»; si ocurre en la periferia, se califica de delincuencia organizada. No se castiga la sangre en el dinero, sino la negativa a pagar tributo al monopolio financiero internacional."
      },
      {
        id: "tab-procesal",
        tituloBoton: "VENTANA 4: LA BATALLA PROCESAL",
        titulo: "VENTANA 4 · LA REALIDAD VENEZOLANA Y LA BATALLA PROCESAL",
        subtitulo: "Extinción de dominio, el colapso del mero Compliance y la resistencia forense",
        pullQuote: "«Tu deber es luchar por el Derecho; pero el día que encuentres en conflicto el Derecho con la Justicia, lucha por la Justicia.» — Eduardo J. Couture",
        intro: "En el foro venezolano, este conflicto converge en el marco de la Prevención y Control de Legitimación de Capitales, Financiamiento al Terrorismo y Proliferación de Armas de Destrucción Masiva (PLC/FT/FPADM) y su conexión directa con la Ley Orgánica de Extinción de Dominio:",
        puntos: [
          {
            num: "•",
            titulo: "Ruptura de la Prejudicialidad Penal",
            texto: "La acción real de extinción de dominio opera de forma autónoma al juicio penal ordinario. Cualquier activo empresarial bajo sospecha queda expuesto a medidas cautelares y pérdida de titularidad si no se demuestra la licitud de su génesis."
          },
          {
            num: "•",
            titulo: "Inversión de la Carga de la Prueba",
            texto: "El peso de acreditar la procedencia del activo y la buena fe exenta de culpa recae estrictamente sobre el titular corporativo afectado."
          },
          {
            num: "•",
            titulo: "El Teatro del Mero «Compliance» Administrativo",
            texto: "Reducir la defensa corporativa a acumular carpetas de debida diligencia para complacer a entes reguladores (SUDEBAN, SUNAVAL, SAREN) es un autoengaño. Adoptar una posición de simple «mitigación y control de daños» implica capitular antes de entrar a la sala de audiencias, asumiendo la derrota y legitimando un marco confiscatorio."
          }
        ],
        extra: "<strong>La Obligación Dogmática del Litigante:</strong> El abogado litigante no puede degradarse a notario o gestor administrativo de la desposesión de su cliente. La verdadera defensa patrimonial en el litigio complejo no se logra llenando formularios burocráticos, sino aplicando el rigor de la lógica procesal para desarticular en estrados la validez de la imputación fiscal, exhibir los vicios estructurales de la acusación y hacer prevalecer la justicia material por encima de la inercia regulatoria.",
        conclusion: "«Tu deber es luchar por el Derecho; pero el día que encuentres en conflicto el Derecho con la Justicia, lucha por la Justicia.» — Eduardo J. Couture"
      }
    ],
    pdfDownloadUrl: "/assets/dictamen-legitimacion-de-capitales-un-fiasco-legal.pdf"
  },

  // ==========================================================
  // FOOTER GLOBAL (SECCIÓN 2B)
  // ==========================================================
  footerGlobalBanner: {
    marca: "ABOGADOS CONSULTORES GROUP.",
    subtitulo: "BOUTIQUE LEGAL KIBS",
    acronimo: "(KNOWLEDGE INTENSIVE BUSINESS SERVICES)",
    descripcion: "Consultoría estratégica de élite orientada a la protección patrimonial, la estructuración de negocios y la resolución de controversias de alta complejidad.",
    copyright: "© 2026 www.abogadosconsultores.group - Todos los derechos reservados."
  },

  // ==========================================================
  // CONTACTO (ENLACE OPERATIVO)
  // ==========================================================
  contacto: {
    tag: "ENLACE OPERATIVO",
    titulo: "Solicitar Intervención",
    subtitulo: "Canal confidencial para la evaluación estratégica y el despliegue de nuestra red nacional.",
    consultaGratuita: "Solicitar Consulta de Evaluación Estratégica",
    formulario: {
      nombre: { label: "Nombre completo", placeholder: "Nombre completo" },
      email: { label: "Correo electrónico", placeholder: "Correo electrónico" },
      telefono: { label: "Teléfono", placeholder: "Teléfono" },
      asunto: { label: "Asunto", placeholder: "Asunto" },
      mensaje: { label: "Breve descripción de su caso", placeholder: "Breve descripción de su caso" },
      submit: "Enviar Consulta Confidencial"
    },
    datos: {
      direccion: "CENTRO EMPRESARIAL LA ESMERALDA, AVENIDA LOS CORTIJOS, CAMPO ALEGRE, CHACAO, CARACAS, VENEZUELA 1060",
      web: "www.abogadosconsultores.group",
      telefono: "Worldwide: +1 (202) 975-0769<br>Venezuela: +58 (424) 780.8894",
      email: "contacto@abogadosconsultores.group",
      horario: "Lun - Vie: 8:00 am - 5:00 pm | Sáb: 8:00 am - 1:00 pm"
    },
    sociales: {
      whatsapp: { url: "https://wa.me/584247808894", label: "WhatsApp" },
      telegram: { url: "https://t.me/abogadosconsultoresgroupbot", label: "Telegram" },
      facebook: { url: "https://www.facebook.com/profile.php?id=61594078108249", label: "Facebook" },
      linkedin: { url: "https://www.linkedin.com/in/norman-molina-maestre-phd", label: "LinkedIn" },
      instagram: { url: "https://www.instagram.com/abogadosconsultores.group/", label: "Instagram" },
      twitter: { url: "https://x.com/LawAdvisorGroup", label: "X (Twitter)" },
      tiktok: { url: "https://www.tiktok.com/@abogadosconsultoresgroup", label: "TikTok" }
    }
  },

  // ==========================================================
  // WHATSAPP FLOTANTE
  // ==========================================================
  whatsappFlotante: {
    numero: "584247808894",
    mensaje: "Deseo solicitar una intervención táctica o contacto corporativo.",
    texto: "Contacto Corporativo"
  },

  // ==========================================================
  // FOOTER (FINAL DE LA PÁGINA: 4 COLUMNAS AZUL OSCURO)
  // ==========================================================
  footer: {
    identidadTitulo: "ABOGADOS CONSULTORES GROUP",
    identidadSubtitulo: "DIRECCIÓN ESTRATÉGICA CENTRAL",
    descripcion: "Red operativa nacional e internacional con 36 años de trayectoria en la zona de impacto. Aplicamos la Lógica Invertida para el análisis estructural y la neutralización definitiva de controversias de alta complejidad.",
    enlacesRapidos: [
      { label: "INICIO", href: "#hero" },
      { label: "Dirección Estratégica Central", href: "#sobre-mi" },
      { label: "Áreas de Ejecución Tácticas", href: "#areas" },
      { label: "Hitos de Ejecución", href: "#testimonios" },
      { label: "Parámetros Operativos", href: "#faq" },
      { label: "Producción Intelectual", href: "#blog" }
    ],
    servicios: [
      { label: "Arquitectura Societaria y Corporativa", href: "#areas" },
      { label: "Regulación Energética e Hidrocarburos", href: "#areas" },
      { label: "Litigio Estratégico y Arbitraje", href: "#areas" },
      { label: "Dictamen Estratégico de Alta Complejidad", href: "#areas" },
      { label: "Estrategia Laboral Corporativa", href: "#areas" },
      { label: "Protección de Activos Intangibles", href: "#areas" }
    ],
    enlacesLegales: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Uso", href: "#" }
    ],
    copyright: "© 2026 www.abogadosconsultores.group - Todos los derechos reservados."
  }
};

if (typeof window !== 'undefined') {
  window.content = content;
}

export { content };
export default content;
