// ============================================================
// CONTENIDO DEL SITIO WEB - ABOGADOS CONSULTORES GROUP
// ============================================================

const content = {
  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================
  nav: {
    logo: `
      <div style="display: flex; align-items: center; gap: 10px; line-height: 1.2;">
        <i class="fas fa-scale-balanced" style="font-size: 28px; color: var(--color-accent);"></i>
        <span style="font-size: 0.9rem; font-weight: 700; text-transform: uppercase;">
          Abogados<br>Consultores Group
        </span>
      </div>
    `,
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Dirección Estratégica Central", href: "#sobre-mi" },
      { label: "Áreas de Ejecución Tácticas", href: "#areas" },
      { label: "Hitos de Ejecución", href: "#testimonios" },
      { label: "Parámetros Operativos", href: "#faq" },
      { label: "Producción Intelectual", href: "#blog" },
    ],
    cta: "Solicitar Consulta Estratégica"
  },

  // ==========================================================
  // HERO
  // ==========================================================
  hero: {
    titulo: "Diseccionamos la <span class=\"hero-title-highlight\">Controversia</span>.<br>El Juicio se Gana en la <span class=\"hero-title-highlight\">Estructura</span>, No en la Improvisación.",
    tituloResaltado: "",
    subtitulo: "Más de 36 años ejecutando maniobras de exactitud quirúrgica y letalidad comprobada. Neutralizamos el margen de error para garantizar el quiebre de la pretensión del adversario en litigios de alta complejidad.",
    badge: "ASESORÍA ESTRATÉGICA Y ANÁLISIS ESTRUCTURAL",
    cta: "AGENDAR SESIÓN ESTRATÉGICA",
    ctaSecundario: "ÁREAS DE INTERVENCIÓN",
    bgImagen: "src/assets/hero-building.jpg" // Add hero bg mapping
  },

  // ==========================================================
  // SOBRE MÍ (DIRECCIÓN ESTRATÉGICA)
  // ==========================================================
  sobreMi: {
    tag: "DIRECCIÓN ESTRATÉGICA",
    titulo: "EL ESTRATEGA Y LA MAQUINARIA LEGAL",
    subtitulo: "LA MENTE MAESTRA QUE ARTICULA EL DESPLIEGUE DE MÁS DE 300 ESPECIALISTAS EN TODO EL TERRITORIO NACIONAL.",
    nombre: "DR. NORMAN MOLINA-MAESTRE, PHD | CHAIRMAN",
    cargo: "DR. NORMAN MOLINA | FUNDADOR Y DIRECTOR DE LA RED NACIONAL",
    descripcion: [
      "En <span style='font-weight: bold;'>Abogados Consultores Group</span>, somos un equipo multidisciplinario de profesionales de la ley, organizado desde el año 1990, apoyado por una red global de más de 300 abogados, especialistas regulatorios y aliados estratégicos interdisciplinarios desplegados en el territorio nacional, Estados Unidos y Europa. Esta estructura nos permite ofrecer una cobertura inmediata y capacidad de respuesta simultánea en múltiples jurisdicciones.",
      "Nuestra firma se distingue por combinar el rigor técnico y la doctrina legal, respaldados por un equipo articulado de consultores estratégicos con una comprensión profunda del entorno corporativo, financiero y regulatorio; todo orientado a la protección patrimonial, la estructuración de negocios y la resolución de controversias de alta complejidad.",
      "<strong>Puntos Clave de Nuestra Firma:</strong><br><span style='font-weight: bold;'>• Capacidad Multijurisdiccional</span>: Coordinamos y ejecutamos estrategias legales con alcance en el territorio nacional, Estados Unidos y Europa.<br><span style='font-weight: bold;'>• Enfoque de Élite</span>: Atendemos asuntos donde la precisión conceptual, el análisis estructural y la discreción son determinantes para el éxito del cliente.<br><span style='font-weight: bold;'>• Confidencialidad Absoluta</span>: Operamos bajo los más estrictos estándares de secreto profesional y protocolos de confidencialidad en cada patrocinio.",
      "<em>«Proporcionamos la solidez institucional y el respaldo táctico que las organizaciones y líderes de industria requieren para tomar decisiones con certeza jurídica».</em>",
      "<hr style='margin: 2rem 0; border: none; border-top: 1px solid var(--gray-light);'>",
      "A mis 60 años de vida y con 36 de ejercicio profesional ininterrumpido en la zona de impacto del litigio complejo, mi visión del Derecho trasciende el escritorio tradicional. Quien acude a nuestra consultoría no busca a un burócrata, sino a un estratega implacable. Oriundo de Caracas y con operaciones de alcance nacional e internacional, concibo cada conflicto legal como un problema de estructura que exige un análisis profundo, paciencia milimétrica y una ejecución de exactitud quirúrgica.",
      "A lo largo de décadas sosteniendo confrontaciones de desgaste hasta las últimas instancias del Tribunal Supremo de Justicia, mi razonamiento ha rechazado por completo el mal diseño de la 'normalidad' jurídica. Al procesar el conflicto a través del <strong>Teorema del Diferencial de la Lógica Invertida</strong> —del cual soy autor intelectual—, quiebro la miopía del razonamiento lineal clásico. Esta disidencia analítica me permite diseccionar la anatomía oculta de la controversia, revelar vectores invisibles para la academia ortodoxa y ejecutar el movimiento definitivo con la frialdad matemática de un francotirador.",
      "El sustento de cada estrategia corporativa, civil y penal que diseño reposa sobre una base académica del más alto nivel: soy Especialista, Magíster en Educación Superior, Doctor en Ciencias Penales y Criminológicas, y PhD en Filosofía. Mi compromiso con el pensamiento crítico no reconoce la autoridad del sistema estático y se refleja en dos líneas de producción intelectual y profesional completamente distintas:",
      "<strong>• Análisis Estructural y Asesoría Estratégica:</strong> Mi investigación sobre las disfunciones sistémicas y patologías institucionales va mucho más allá del ejercicio ensayístico o teórico. En la arena del litigio y la consultoría corporativa, aplico este rigor analítico como un arma táctica para identificar el punto de quiebre estructural en la argumentación de la contraparte. Al detectar esa falla milimétrica, provocamos un <strong>punto de inflexión</strong> irreversible en el conflicto, capitalizando su error para asegurar nuestro éxito y anular de manera absoluta y definitiva a nuestro adversario.",
      "<strong>• Filosofía y Lógica Formal:</strong> Mi obra en este campo trasciende la investigación académica para constituir un hito sin precedentes en el pensamiento humano. Soy el creador del modelo filosófico y analítico que he denominado <strong>Lógica Invertida</strong>, cuyo andamiaje inédito desarrollé por primera vez en mi tratado literario Perder para Ganar (ISBN 978-980-18-8717-1). En esta obra expongo quizás el hallazgo más importante en la historia de la Filosofía desde su creación hasta la actualidad. Al disolver matemática y lógicamente la inexpugnable Paradoja de Protágoras, demuestro el agotamiento del edificio aristotélico y entrego un nuevo andamiaje para la evolución del pensamiento jurídico y la justicia material.",
      "Pero más allá de los pergaminos de la academia, soy un diseñador de soluciones. Quienes confían en nuestra firma no solo obtienen el respaldo de una red nacional de especialistas, sino la tranquilidad de saber que la mente maestra detrás de su caso combina la madurez vital con la preparación técnica de décadas de experiencia. Cada uno de nuestros movimientos jurídicos está diseñado para ser certero, sin margen de error y absolutamente letal para la pretensión del adversario."
    ],
    valores: [
      { icono: "sitemap", titulo: "ANÁLISIS ESTRUCTURAL", descripcion: "APLICAMOS LA LÓGICA INVERTIDA PARA IDENTIFICAR LA FALLA ESTRUCTURAL DEL ADVERSARIO." },
      { icono: "globe", titulo: "DESPLIEGUE OPERATIVO", descripcion: "MÁS DE 300 ESPECIALISTAS EJECUTANDO TÁCTICAS DE ALTA COMPLEJIDAD A NIVEL NACIONAL." },
      { icono: "crosshairs", titulo: "EXACTITUD QUIRÚRGICA", descripcion: "MANIOBRAS LEGALES DISEÑADAS SIN MARGEN DE ERROR PARA ANULAR A LA CONTRAPARTE." }
    ],
    imagen: "src/assets/norman.png",
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
        caracteristicas: ["Fusiones y Adquisiciones", "Transacciones Críticas", "Compliance GOBIERNO CORPORATIVO", "DUE DILIGENCE", "PREVENCIÓN DE QUIEBRES"]
      },
      {
        icono: "bolt",
        titulo: "Regulación Energética e Hidrocarburos",
        descripcion: "Diseccionamos la complejidad regulatoria del sector energético. Estructuramos y blindamos contratos de hidrocarburos, procesamiento y comercialización, asegurando el control absoluto del cliente en disputas y operaciones de alta escala.",
        caracteristicas: ["Contratos Petroleros", "Marcos Regulatorios", "Disputas Energéticas"]
      },
      {
        icono: "scale-unbalanced",
        titulo: "Litigio Estratégico y Arbitraje",
        descripcion: "Aplicamos el análisis estructural para identificar la fisura exacta en el argumento rival. Intervenimos con maniobras letales orientadas a la neutralización absoluta en jurisdicciones civiles, mercantiles, tribunales de arbitraje y defensas penales corporativas.",
        caracteristicas: ["Penal Corporativo", "Casación Civil", "Arbitraje Internacional", "Litigio de alto nivel", "Ejecución de Garantías", "Contratos complejos", "Delitos económicos y Legitimación de Capitales"]
      },
      {
        icono: "microscope",
        titulo: "Dictamen Estratégico de Alta Complejidad",
        descripcion: "Intervención analítica en controversias donde la complejidad técnica, la doctrina o el interés jurídico exigen un rigor superior. Evaluamos el escenario de manera independiente a la escala del proceso para entregar un plan de acción infalible.",
        caracteristicas: ["Análisis Estructural", "Doctrina Jurídica", "Viabilidad de Casos"]
      },
      {
        icono: "users-gear",
        titulo: "Estrategia Laboral Corporativa",
        descripcion: "Neutralizamos contingencias en las relaciones de trabajo. Diseñamos políticas preventivas y asumimos la defensa táctica en controversias laborales, individuales o colectivas, que amenacen la estabilidad operativa y financiera de la empresa.",
        caracteristicas: ["Defensa Patronal", "Negociación Colectiva", "Contingencias Laborales"]
      },
      {
        icono: "shield-halved",
        titulo: "Protección de Activos Intangibles",
        descripcion: "Blindamos el núcleo de la innovación y el valor corporativo. Ejecutamos el registro y la defensa inquebrantable de marcas, patentes y derechos de autor, anticipando cualquier vulneración o litigio por parte de terceros.",
        caracteristicas: ["Patentes", "Registro de Marcas", "Defensa Intelectual"]
      }
    ]
  },

  // ==========================================================
  // POR QUÉ ELEGIRNOS (CAPACIDAD OPERATIVA)
  // ==========================================================
  porQue: {
    tag: "ESTRATEGIA Y EJECUCIÓN",
    titulo: "Capacidad Operativa",
    subtitulo: "Criterio Técnico, Nuestra Ventaja Táctica",
    items: [
      {
        icono: "star",
        titulo: "TRAYECTORIA",
        descripcion: "<span style='font-weight: bold;'>36 años de labor</span> ininterrumpida respaldan nuestro trabajo, liderando de manera exitosa cientos de litigios de alta complejidad y confrontaciones de desgaste hasta las últimas instancias."
      },
      {
        icono: "chess-knight",
        titulo: "METODOLOGÍA",
        descripcion: "Asesoría y dirección estratégica personalizada con enfoque preventivo, basada en <span style='font-weight: bold;'>Análisis Estructural y Lógica Invertida</span>: No aplicamos respuestas dogmáticas; diseccionamos la controversia para encontrar el punto de quiebre exacto de la contraparte, anticipando el colapso del adversario."
      },
      {
        icono: "map-location-dot",
        titulo: "DESPLIEGUE NACIONAL",
        descripcion: "<span style='font-weight: bold;'>Ejecución en cada jurisdicción</span>: Una dirección centralizada en Caracas respaldada por registros operativos de hasta 20 especialistas en cada ciudad del país."
      },
      {
        icono: "globe",
        titulo: "ALCANCE INTERNACIONAL",
        descripcion: "<span style='font-weight: bold;'>Alianzas Estratégicas Transfronterizas</span>: Mantenemos conexiones y alianzas consolidadas con firmas extranjeras de primer nivel, lo que nos permite ejecutar maniobras corporativas y litigios internacionales con la misma letalidad y precisión."
      }
    ]
  },

  // ==========================================================
  // TESTIMONIOS (REGISTRO OPERATIVO)
  // ==========================================================
  testimonios: {
    tag: "REGISTRO OPERATIVO",
    titulo: "Hitos de Ejecución Táctica",
    subtitulo: "Intervenciones estratégicas de alta complejidad, ejecutadas y resueltas bajo acuerdos de estricta confidencialidad corporativa.",
    items: [
      {
        nombre: "Caso de Alta Complejidad | Sector Hidrocarburos",
        cargo: "El Hito Financiero / Energético",
        texto: "«Neutralización de Contingencia Corporativa» «Mediante el análisis estructural de la arquitectura contractual, se identificó un punto de quiebre en la demanda adversaria, logrando anular una pretensión multimillonaria en contra de un consorcio del sector energético, sin necesidad de llegar a la etapa de juicio».",
        calificacion: 5
      },
      {
        nombre: "Litigio Penal | Jurisdicción Nacional",
        cargo: "El Hito Penal / Defensa Institucional",
        texto: "«Desmontaje de Acusación Penal» «Aplicación de Lógica Invertida para la deconstrucción de un expediente penal corporativo. Se demostró la inviabilidad estructural de las premisas acusatorias, logrando el sobreseimiento absoluto de la junta directiva».",
        calificacion: 5
      },
      {
        nombre: "Dictamen Estratégico | Consultoría Corporativa",
        cargo: "El Hito de Consultoría / Prevención",
        texto: "«Blindaje y Arquitectura Societaria» «Intervención analítica en un proceso de estructuración corporativa para transacciones críticas. Se diseñó un andamiaje legal inexpugnable, mitigando vulnerabilidades sistémicas y asegurando el control absoluto del patrimonio antes de cualquier fase de controversia».",
        calificacion: 5
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
        pregunta: "¿Cuál es el radio de acción de la firma a nivel nacional?",
        respuesta: "Aunque la dirección estratégica y el diseño de la Lógica Invertida se centralizan desde nuestra sede matriz en Caracas, contamos con una red operativa de más de 300 especialistas. Esto nos permite garantizar representación presencial, inmediata y fulminante en todo el territorio nacional, con una capacidad de despliegue de hasta 20 abogados por ciudad."
      },
      {
        pregunta: "¿En qué consiste exactamente la 'Lógica Invertida' en un litigio?",
        respuesta: "Es una metodología analítica forjada durante 36 años de ejercicio en la zona de impacto. En lugar de responder a los ataques del adversario, diseccionamos la anatomía de su argumento para encontrar su falla estructural. No nos defendemos de su fuerza; utilizamos su propio andamiaje lógico para provocar el colapso de su pretensión."
      },
      {
        pregunta: "¿En qué etapa de la controversia es recomendable solicitar su intervención?",
        respuesta: "La victoria se asegura antes de pisar el tribunal. Recomendamos la intervención en la fase de 'contingencia latente', antes de que el adversario formalice su ataque. Esto nos permite aplicar un blindaje preventivo o dictar el terreno del enfrentamiento desde el primer minuto."
      },
      {
        pregunta: "¿Cómo garantizan el secreto corporativo en sectores críticos como el energético o financiero?",
        respuesta: "Manejamos protocolos de confidencialidad de grado institucional. La información de nuestros clientes está sujeta a acuerdos de no divulgación (NDA) inquebrantables. El diseño de la estrategia se mantiene encapsulado en la dirección central para evitar cualquier fuga de información táctica."
      },
      {
        pregunta: "¿Cómo se estructura la valoración de honorarios en casos de alta complejidad?",
        respuesta: "No operamos bajo esquemas transaccionales básicos. La estructuración de honorarios obedece a un análisis riguroso de la magnitud del riesgo patrimonial, la complejidad técnica del sector (ej. hidrocarburos, corporativo) y el nivel de despliegue táctico requerido para garantizar la neutralización del conflicto."
      },
      {
        pregunta: "¿Cuál es el primer paso para iniciar un proceso de consultoría o defensa?",
        respuesta: "El proceso inicia con una Sesión Estratégica de Evaluación. En esta fase no solicitamos documentos misceláneos, sino el núcleo de la controversia. Realizamos un diagnóstico estructural inmediato para determinar si el caso requiere una intervención de nuestra maquinaria legal y, de ser así, trazamos la ruta de acción."
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
        titulo: "Perder para Ganar: La resolución de la paradoja de Protágoras",
        extracto: "Un análisis profundo sobre la Lógica Invertida aplicada a controversias estructurales. Una deconstrucción del clásico dilema histórico para encontrar el punto de quiebre y neutralizar cualquier sistema argumentativo adverso.",
        fecha: "Obra Cumbre",
        imagen: "src/assets/blog-1.jpg",
        categoria: "LÓGICA Y FILOSOFÍA",
        cta: "Explorar Obra"
      },
      {
        titulo: "Patologías Institucionales: Disfunciones sistémicas en marcos corporativos",
        extracto: "Ensayo crítico sobre las fallas estructurales dentro de los esquemas organizacionales. Una evaluación de cómo las deficiencias en el andamiaje legal provocan el colapso operativo mucho antes de la intervención judicial.",
        fecha: "Investigación",
        imagen: "src/assets/blog-2.jpg",
        categoria: "INGENIERÍA INSTITUCIONAL",
        cta: "Leer Análisis"
      },
      {
        titulo: "Arquitectura contractual en proyectos de procesamiento de gas licuado",
        extracto: "Evaluación de las vulnerabilidades regulatorias y el blindaje societario requerido para operaciones de alta escala y exportación en el sector energético, garantizando el control patrimonial absoluto.",
        fecha: "Dictamen",
        imagen: "src/assets/blog-3.jpg",
        categoria: "SECTOR ENERGÉTICO E HIDROCARBUROS",
        cta: "Ver Dictamen"
      }
    ]
  },

  // ==========================================================
  // CONTACTO (ENLACE OPERATIVO)
  // ==========================================================
  contacto: {
    tag: "ENLACE OPERATIVO",
    titulo: "Solicitar Intervención",
    subtitulo: "Canal confidencial para la evaluación estratégica y el despliegue de nuestra red nacional.",
    consultaGratuita: "Solicitar Consulta de Evaluación Estratégica.",
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
      telefono: "Estados unidos: +1 (202)975-0769<br>Europa: +44 (177) 3835478<br>Venezuela: +58 (414)088-8852 / +58 (422) 088-8852",
      email: "contacto@abogadosconsultores.group",
      horario: "Lun - Vie: 8:00 am - 5:00 pm | Sáb: 8:00 am - 1:00 pm"
    },
    sociales: {
      whatsapp: { url: "https://wa.me/5804265804237", label: "WhatsApp" },
      telegram: { url: "#", label: "Telegram" },
      facebook: { url: "#", label: "Facebook" },
      linkedin: { url: "#", label: "LinkedIn" },
      instagram: { url: "#", label: "Instagram" }
    }
  },

  // ==========================================================
  // WHATSAPP FLOTANTE
  // ==========================================================
  whatsappFlotante: {
    numero: "5804265804237",
    mensaje: "Deseo solicitar una intervención táctica o contacto corporativo.",
    texto: "Contacto Corporativo"
  },

  // ==========================================================
  // FOOTER
  // ==========================================================
  footer: {
    descripcion: "Red operativa nacional con 36 años de trayectoria en la zona de impacto. Aplicamos la Lógica Invertida para el análisis estructural y la neutralización definitiva de controversias de alta complejidad.",
    enlacesLegales: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Uso", href: "#" }
    ],
    copyright: `© ${new Date().getFullYear()} www.abogadosconsultores.group - Todos los derechos reservados.`
  }
};

if (typeof window !== 'undefined') {
  window.content = content;
}

export { content };
export default content;