// Datos oficiales del Plan de Estudios I23 (Ordenanza N° 1909/23)
// Departamento de Ingeniería Industrial - UTN Facultad Regional Buenos Aires

export const planEstudios = [
  {
    nivel: 1,
    anio: "1° Año",
    titulo: "Fundamentos y Ciencias Básicas",
    descripcion: "Bases científicas de la ingeniería, lógica computacional y visión sistémica de la profesión.",
    horasSemanales: 31,
    materias: [
      {
        codigo: "950701",
        nombre: "Álgebra y Geometría Analítica",
        horas: "5 hs/sem",
        programaPdf: "./programas/algebra-y-geometria-analitica.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Matrices, vectores, sistemas lineales y espacios vectoriales esenciales para el modelado matemático.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "950702",
        nombre: "Análisis Matemático I",
        horas: "5 hs/sem",
        programaPdf: "./programas/analisis-matematico-i.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Cálculo diferencial e integral en una variable, límites y optimización de funciones continuas.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "950605",
        nombre: "Física I",
        horas: "5 hs/sem",
        programaPdf: "./programas/fisica-i.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Mecánica clásica, cinemática, dinámica de cuerpos y principios de conservación de la energía.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "951407",
        nombre: "Química General",
        horas: "5 hs/sem",
        programaPdf: "./programas/quimica-general.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Estructura atómica, estequiometría, soluciones y termoquímica aplicada a materiales y procesos.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "952595",
        nombre: "Pensamiento Sistémico",
        horas: "3 hs/sem",
        programaPdf: "./programas/pensamiento-sistemico.pdf",
        tipo: "Integradora",
        regimen: "Anual",
        descripcion: "Materia eje integrador de 1° año. Comprensión holística de organizaciones, procesos y cadenas de valor.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "952522",
        nombre: "Informática I",
        horas: "3 hs/sem",
        programaPdf: "./programas/informatica-i.pdf",
        tipo: "Tecnología",
        regimen: "Anual",
        descripcion: "Fundamentos de programación, algoritmos, estructuras de datos y automatización de cálculo.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "951601",
        nombre: "Sistemas de Representación",
        horas: "3 hs/sem",
        programaPdf: "./programas/sistemas-de-representacion.pdf",
        tipo: "Tecnología",
        regimen: "Anual",
        descripcion: "Dibujo técnico asistido por computadora (CAD), modelado 2D/3D y lectura de planos industriales.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      },
      {
        codigo: "951604",
        nombre: "Ingeniería y Sociedad",
        horas: "2 hs/sem",
        programaPdf: "./programas/programa-ingenieria-y-sociedad.pdf",
        tipo: "Social / Humanística",
        regimen: "Anual",
        descripcion: "Rol social e histórico de la ingeniería, impacto ambiental, soberanía científico-tecnológica y ética.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      }
    ]
  },
  {
    nivel: 2,
    anio: "2° Año",
    titulo: "Ciencias de la Ingeniería & Gestión Inicial",
    descripcion: "Modelado matemático multivariable, electromagnetismo, economía, materiales y administración.",
    horasSemanales: 30,
    materias: [
      {
        codigo: "032521",
        nombre: "Administración General",
        horas: "4 hs/sem",
        programaPdf: "./programas/administracion-general.pdf",
        tipo: "Integradora",
        regimen: "Anual",
        descripcion: "Materia eje integrador de 2° año. Estructura organizacional, toma de decisiones y planeamiento estratégico.",
        correlativasCursar: "Informática I, Pensamiento Sistémico, Álgebra, Ing. y Sociedad",
        correlativasRendir: "4, 5, 7, 8"
      },
      {
        codigo: "950703",
        nombre: "Análisis Matemático II",
        horas: "5 hs/sem",
        programaPdf: "./programas/analisis-matematico-ii.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Cálculo en varias variables, integrales múltiples, campos vectoriales y ecuaciones diferenciales.",
        correlativasCursar: "Análisis Mat. I, Álgebra",
        correlativasRendir: "1, 7"
      },
      {
        codigo: "950606",
        nombre: "Física II",
        horas: "5 hs/sem",
        programaPdf: "./programas/fisica-ii.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Electromagnetismo, circuitos, ondas y óptica con aplicaciones a sensores e instrumentación.",
        correlativasCursar: "Análisis Mat. I, Física I",
        correlativasRendir: "1, 6"
      },
      {
        codigo: "950704",
        nombre: "Probabilidad y Estadística",
        horas: "6 hs/sem",
        programaPdf: "./programas/probabilidad-y-estadistica.pdf",
        tipo: "Ciencias Básicas",
        regimen: "Anual",
        descripcion: "Distribuciones probabilísticas, muestreo, intervalos de confianza, regresión y control de calidad.",
        correlativasCursar: "Análisis Mat. I, Álgebra",
        correlativasRendir: "1, 7"
      },
      {
        codigo: "072522",
        nombre: "Ciencia de los Materiales",
        horas: "4 hs/sem",
        programaPdf: "./programas/ciencia-de-los-materiales.pdf",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Propiedades mecánicas, térmicas y eléctricas de metales, polímeros, cerámicos y materiales compuestos.",
        correlativasCursar: "Química General, Física I",
        correlativasRendir: "2, 6"
      },
      {
        codigo: "952557",
        nombre: "Economía General",
        horas: "4 hs/sem",
        programaPdf: "./programas/economia-general.pdf",
        tipo: "Economía",
        regimen: "Anual",
        descripcion: "Microeconomía, dinámica de mercados, oferta y demanda, macroeconomía y política monetaria.",
        correlativasCursar: "Análisis Mat. I, Pensamiento Sist., Ing. y Sociedad",
        correlativasRendir: "1, 5, 8"
      },
      {
        codigo: "072521",
        nombre: "Informática II",
        horas: "6 hs/sem",
        programaPdf: "./programas/informatica-ii.pdf",
        tipo: "Tecnología",
        regimen: "Anual",
        descripcion: "Bases de datos relacionales, SQL, estructuras avanzadas y desarrollo de software para gestión.",
        correlativasCursar: "Informática I",
        correlativasRendir: "4"
      },
      {
        codigo: "951602",
        nombre: "Inglés I",
        horas: "2 hs/sem",
        programaPdf: "./programas/ingles-i.pdf",
        tipo: "Idiomas",
        regimen: "Anual",
        descripcion: "Lectura y comprensión de manuales, papers técnicos y documentación de ingeniería en inglés.",
        correlativasCursar: "-",
        correlativasRendir: "-"
      }
    ]
  },
  {
    nivel: 3,
    anio: "3° Año",
    titulo: "Tecnologías Aplicadas & Título Intermedio",
    descripcion: "Física térmica, fluidos, estructuras mecánicas, estudio de tiempos, costos y comercialización.",
    horasSemanales: 31,
    hitoTituloIntermedio: {
      nombre: "Título Intermedio: Técnico/a Universitario/a en Administración, Producción y Gestión Industrial",
      reconocimiento: "Bachiller Universitario en Ciencias de la Ingeniería (CIN/CONEAU)",
      descripcion: "Habilita inserción laboral técnica calificada tras aprobar 1°, 2° y 3° año completos y cursar Gestión Industrial."
    },
    materias: [
      {
        codigo: "072523",
        nombre: "Estudio del Trabajo",
        horas: "4 hs/sem",
        tipo: "Integradora",
        regimen: "Anual",
        descripcion: "Materia eje integrador de 3° año. Medición de tiempos, balanceo de líneas, métodos y simplificación de tareas.",
        correlativasCursar: "Administración Gral., Probabilidad y Estadística",
        correlativasRendir: "10, 11"
      },
      {
        codigo: "072526",
        nombre: "Termodinámica y Máquinas Térmicas",
        horas: "4 hs/sem",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Ciclos termodinámicos, generación de vapor, motores de combustión y eficiencia energética.",
        correlativasCursar: "Química General, Física II",
        correlativasRendir: "2, 13"
      },
      {
        codigo: "072525",
        nombre: "Mecánica de los Fluidos",
        horas: "3 hs/sem",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Hidrostática, hidrodinámica en cañerías, bombas industriales, pérdidas de carga y redes hidráulicas.",
        correlativasCursar: "Análisis Mat. II",
        correlativasRendir: "9"
      },
      {
        codigo: "032526",
        nombre: "Estática y Resistencia de Materiales",
        horas: "4 hs/sem",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Cálculo de tensiones, deformaciones, flexión, torsión y dimensionamiento de estructuras.",
        correlativasCursar: "Análisis Mat. II, Ciencia Materiales",
        correlativasRendir: "9, 12"
      },
      {
        codigo: "072524",
        nombre: "Electrotecnia y Máquinas Eléctricas",
        horas: "5 hs/sem",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Sistemas trifásicos, transformadores, motores de inducción, tableros eléctricos y potencia.",
        correlativasCursar: "Física II",
        correlativasRendir: "13"
      },
      {
        codigo: "952540",
        nombre: "Costos y Presupuestos",
        horas: "3 hs/sem",
        tipo: "Gestión y Economía",
        regimen: "Anual",
        descripcion: "Contabilidad de costos fabriles, costeo por órdenes, costeo estándar, punto de equilibrio y presupuesto maestro.",
        correlativasCursar: "Administración Gral., Economía Gral.",
        correlativasRendir: "10, 14"
      },
      {
        codigo: "032599",
        nombre: "Comercialización",
        horas: "3 hs/sem",
        tipo: "Gestión y Economía",
        regimen: "Anual",
        descripcion: "Investigación de mercado, estrategia de producto, fijación de precios, canales de distribución y ventas.",
        correlativasCursar: "Administración Gral., Probabilidad, Economía Gral.",
        correlativasRendir: "10, 11, 14"
      },
      {
        codigo: "032525",
        nombre: "Economía de la Empresa",
        horas: "3 hs/sem",
        tipo: "Gestión y Economía",
        regimen: "Anual",
        descripcion: "Análisis de estados contables, finanzas corporativas básicas y estructura financiera corporativa.",
        correlativasCursar: "Administración Gral., Economía Gral.",
        correlativasRendir: "10, 14"
      },
      {
        codigo: "032597",
        nombre: "Análisis Numérico y Cálculo Avanzado",
        horas: "2 hs/sem",
        tipo: "Tecnología",
        regimen: "Anual",
        descripcion: "Métodos numéricos de resolución, aproximación de raíces, simulación numérica y ajuste de curvas.",
        correlativasCursar: "Análisis Mat. II",
        correlativasRendir: "9"
      },
      {
        codigo: "232530",
        nombre: "Gestión Industrial (Opcional Título Intermedio)",
        horas: "2 hs/sem",
        tipo: "Especial Título Intermedio",
        regimen: "Anual",
        descripcion: "Módulo integrativo obligatorio para la titulación intermedia de Técnico/a Universitario/a en Administración, Producción y Gestión Industrial.",
        correlativasCursar: "10, 11, 14, 15",
        correlativasRendir: "1°, 2° y 3° año completo"
      }
    ]
  },
  {
    nivel: 4,
    anio: "4° Año",
    titulo: "Dirección de Operaciones & Especialización",
    descripcion: "Planificación de producción (PCP), investigación operativa, formulación de proyectos, calidad e higiene.",
    horasSemanales: 34,
    materias: [
      {
        codigo: "032590",
        nombre: "Evaluación de Proyectos",
        horas: "5 hs/sem",
        programaPdf: "./programas/evaluacion-de-proyectos.pdf",
        tipo: "Integradora",
        regimen: "Anual",
        descripcion: "Materia eje integrador de 4° año. Análisis de viabilidad técnica, económica y financiera (VAN, TIR, Payback).",
        correlativasCursar: "Costos, Estudio del Trabajo, Comercialización, Economía Empresa",
        correlativasRendir: "17, 18, 19, 23"
      },
      {
        codigo: "072528",
        nombre: "Planificación y Control de la Producción (PCP)",
        horas: "4 hs/sem",
        programaPdf: "./programas/planificacion-y-control-de-la-produccion.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Pronósticos de demanda, Plan Maestro de Producción (MPS), MRP I/II, gestión de inventarios y Lean Manufacturing.",
        correlativasCursar: "Estudio del Trabajo",
        correlativasRendir: "18"
      },
      {
        codigo: "032598",
        nombre: "Investigación Operativa",
        horas: "4 hs/sem",
        programaPdf: "./programas/investigacion-operativa.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Programación lineal, método simplex, teoría de colas, inventarios probabilísticos y optimización.",
        correlativasCursar: "Análisis II, Probabilidad, Análisis Numérico",
        correlativasRendir: "9, 11, 25"
      },
      {
        codigo: "032591",
        nombre: "Procesos Industriales",
        horas: "5 hs/sem",
        programaPdf: "./programas/procesos-industriales.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Mecanizado, fundición, conformación plástica, soldadura, inyección y automatización de fabricación.",
        correlativasCursar: "Estudio Trabajo, Termodinámica, Electrotecnia",
        correlativasRendir: "18, 20, 24"
      },
      {
        codigo: "032589",
        nombre: "Ingeniería en Calidad",
        horas: "3 hs/sem",
        programaPdf: "./programas/ingenieria-en-calidad.pdf",
        tipo: "Gestión",
        regimen: "Anual",
        descripcion: "Sistemas de gestión de calidad, Seis Sigma, normas ISO 9001, diagramas de control estadístico y mejora continua.",
        correlativasCursar: "Estudio del Trabajo",
        correlativasRendir: "18"
      },
      {
        codigo: "072527",
        nombre: "Instalaciones Industriales",
        horas: "3 hs/sem",
        programaPdf: "./programas/instalaciones-industriales.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Servicios de planta: aire comprimido, redes de vapor, gas, agua, efluentes e iluminación fabril.",
        correlativasCursar: "Termodinámica, Estática, Fluidos, Electrotecnia",
        correlativasRendir: "20, 21, 22, 24"
      },
      {
        codigo: "072529",
        nombre: "Mecánica y Mecanismos",
        horas: "3 hs/sem",
        programaPdf: "./programas/mecanica-y-mecanismos.pdf",
        tipo: "Tecnología Básica",
        regimen: "Anual",
        descripcion: "Cinemática de máquinas, engranajes, transmisiones mecánicas, levas y acoplamientos.",
        correlativasCursar: "Análisis Mat. II",
        correlativasRendir: "9"
      },
      {
        codigo: "952530",
        nombre: "Seguridad, Higiene e Ingeniería Ambiental",
        horas: "3 hs/sem",
        programaPdf: "./programas/seguridad-higiene-e-ingenieria-ambiental.pdf",
        tipo: "Gestión / Normativa",
        regimen: "Anual",
        descripcion: "Prevención de riesgos laborales, ergonomía básica, gestión de residuos y evaluación de impacto ambiental.",
        correlativasCursar: "Estudio del Trabajo",
        correlativasRendir: "18"
      },
      {
        codigo: "950310",
        nombre: "Legislación",
        horas: "2 hs/sem",
        programaPdf: "./programas/legislacion.pdf",
        tipo: "Legal",
        regimen: "Anual",
        descripcion: "Derecho laboral, contratos comerciales, propiedad intelectual, marcas, patentes y responsabilidad civil profesional.",
        correlativasCursar: "Administración General",
        correlativasRendir: "10"
      },
      {
        codigo: "951603",
        nombre: "Inglés II",
        horas: "2 hs/sem",
        programaPdf: "./programas/ingles-ii.pdf",
        tipo: "Idiomas",
        regimen: "Anual",
        descripcion: "Redacción técnica, presentaciones orales profesionales y negociación en idioma inglés.",
        correlativasCursar: "Inglés I",
        correlativasRendir: "16"
      }
    ]
  },
  {
    nivel: 5,
    anio: "5° Año",
    titulo: "Gerenciamiento Estratégico, Práctica & Proyecto Final",
    descripcion: "Control de gestión directivo, logística de planta, comercio internacional, pasantía profesional y tesis de graduación.",
    horasSemanales: 33,
    hitoTituloFinal: {
      nombre: "Título de Grado: Ingeniero/a Industrial",
      descripcion: "Título profesional habilitante de 5 años con validez nacional y acreditación internacional."
    },
    materias: [
      {
        codigo: "032596",
        nombre: "Proyecto Final (Tesis de Ingeniería)",
        horas: "6 hs/sem",
        programaPdf: "./programas/proyecto-final.pdf",
        tipo: "Integradora Final",
        regimen: "Anual",
        descripcion: "Desarrollo completo de una planta industrial o empresa de base tecnológica: desde el estudio de mercado y layout hasta la ingeniería de detalle y factibilidad financiera.",
        correlativasCursar: "Investigación Op., Seguridad, Procesos, Evaluación de Proyectos, PCP",
        correlativasRendir: "Todas las asignaturas previas del plan"
      },
      {
        codigo: "952555",
        nombre: "Control de Gestión",
        horas: "3 hs/sem",
        programaPdf: "./programas/control-de-gestion.pdf",
        tipo: "Gestión Directiva",
        regimen: "Anual",
        descripcion: "Tableros de control (Balanced Scorecard), KPIs estratégicos, auditoría operativa y control presupuestario.",
        correlativasCursar: "Costos y Presupuestos, Economía Empresa",
        correlativasRendir: "17, 23"
      },
      {
        codigo: "072530",
        nombre: "Manejo de Materiales y Distribución en Planta",
        horas: "3 hs/sem",
        programaPdf: "./programas/manejo-de-materiales-y-distribucion-de-plantas.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Diseño del layout fabril, almacenes automatizados, cintas transportadoras, montacargas y AGVs.",
        correlativasCursar: "Estudio del Trabajo, Mecánica y Mecanismos",
        correlativasRendir: "18, 29"
      },
      {
        codigo: "032588",
        nombre: "Diseño de Producto",
        horas: "2 hs/sem",
        programaPdf: "./programas/diseno-de-producto.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "Ciclo de vida del producto, ecodiseño, Design Thinking, prototipado rápido y análisis de valor.",
        correlativasCursar: "Informática II, Comercialización",
        correlativasRendir: "15, 19"
      },
      {
        codigo: "952586",
        nombre: "Comercio Exterior",
        horas: "3 hs/sem",
        programaPdf: "./programas/comercio-exterior.pdf",
        tipo: "Gestión y Economía",
        regimen: "Anual",
        descripcion: "Incoterms, regímenes aduaneros, logística internacional de contenedores y finanzas de exportación/importación.",
        correlativasCursar: "Evaluación de Proyectos",
        correlativasRendir: "30"
      },
      {
        codigo: "032595",
        nombre: "Mantenimiento",
        horas: "3 hs/sem",
        programaPdf: "./programas/mantenimiento.pdf",
        tipo: "Tecnología Aplicada",
        regimen: "Anual",
        descripcion: "TPM (Mantenimiento Productivo Total), mantenimiento predictivo, confiabilidad (RCM) y repuestos.",
        correlativasCursar: "Instalaciones Industriales",
        correlativasRendir: "34"
      },
      {
        codigo: "952587",
        nombre: "Relaciones Industriales",
        horas: "3 hs/sem",
        programaPdf: "./programas/relaciones-industriales.pdf",
        tipo: "Gestión de Personas",
        regimen: "Anual",
        descripcion: "Gestión del talento humano, convenios colectivos, negociación sindical, liderazgo y clima organizacional.",
        correlativasCursar: "Estudio del Trabajo",
        correlativasRendir: "18"
      },
      {
        codigo: "PPS",
        nombre: "Práctica Profesional Supervisada (PPS)",
        horas: "200 hs reloj",
        programaPdf: "./programas/practica-profesional-supervisada.pdf",
        tipo: "Práctica en Empresas",
        regimen: "Práctica Externa",
        descripcion: "200 horas de pasantía profesional en planta, consultora o corporación con convenio UTN aplicando metodologías de ingeniería en el mundo productivo real.",
        correlativasCursar: "Cumplimiento de requisitos académicos de Proyecto Final",
        correlativasRendir: "Requisitos Proyecto Final"
      }
    ]
  }
];

export const asignaturasElectivas = [
  {
    codigo: "EL-01",
    nombre: "IA Aplicada a Comercio Electrónico y Marketing",
    horas: "4 hs/sem",
    area: "Inteligencia Artificial",
    programaPdf: "./programas/ia-aplicada-a-comercio-electronico-y-marketing.pdf",
    descripcion: "Modelos predictivos de Machine Learning y LLMs aplicados a plataformas digitales, sistemas de recomendación, pricing dinámico, embudos de conversión y analítica comercial avanzada."
  },
  {
    codigo: "EL-02",
    nombre: "Ciencia de Datos",
    horas: "4 hs/sem",
    area: "Analítica y Big Data",
    programaPdf: "./programas/ciencia-de-datos.pdf",
    descripcion: "Procesamiento de datos a gran escala, modelos probabilísticos y estadísticos con Python, aprendizaje automático e inferencia predictiva para optimización en operaciones y toma de decisiones."
  },
  {
    codigo: "EL-03",
    nombre: "Robótica Industrial",
    horas: "4 hs/sem",
    area: "Automatización y Robótica",
    programaPdf: "./programas/robotica-industrial.pdf",
    descripcion: "Cinemática, programación y control de robots manipuladores, cobots colaborativos, celdas de soldadura y ensamble automatizado en líneas de manufactura avanzada."
  },
  {
    codigo: "EL-04",
    nombre: "Automatización en Logística",
    horas: "4 hs/sem",
    area: "Cadena de Suministro 4.0",
    programaPdf: "./programas/automatizacion-en-logistica.pdf",
    descripcion: "Almacenes automáticos inteligentes (AS/RS), vehículos guiados automáticamente (AGVs), trazabilidad por RFID, visión artificial e integración IoT en centros de distribución."
  },
  {
    codigo: "EL-05",
    nombre: "Fabricación Flexible y Sistemas Inteligentes",
    horas: "4 hs/sem",
    area: "Industria 4.0",
    programaPdf: "./programas/fabricacion-flexible-y-sistemas-inteligentes.pdf",
    descripcion: "Sistemas de Manufactura Flexible (FMS), gemelos digitales (Digital Twins), integración de sistemas SCADA, control numérico computarizado (CNC) y manufactura aditiva 3D."
  },
  {
    codigo: "EL-06",
    nombre: "Ingeniería para Organizaciones Inteligentes",
    horas: "4 hs/sem",
    area: "Transformación Digital y Agilidad",
    programaPdf: "./programas/ingenieria-para-organizaciones-inteligentes.pdf",
    descripcion: "Modelos organizacionales basados en datos, agilidad empresarial a escala, gestión estratégica del conocimiento y adaptación a entornos dinámicos y complejos."
  },
  {
    codigo: "EL-07",
    nombre: "Certificación de Sistemas de Calidad ISO 9001 y Productos",
    horas: "4 hs/sem",
    area: "Calidad y Normas",
    programaPdf: "./programas/certificacion-de-sistemas-de-calidad-iso-9001-y-productos.pdf",
    descripcion: "Diseño, auditoría y certificación de Sistemas de Gestión de Calidad (SGC) bajo estándares ISO 9001, integración con normas ambientales y aseguramiento de calidad de producto ante entes certificadores (TÜV, IRAM)."
  },
  {
    codigo: "EL-08",
    nombre: "Tecnología y Gestión de la Energía",
    horas: "4 hs/sem",
    area: "Transición Energética y Sostenibilidad",
    programaPdf: "./programas/tecnologia-y-gestion-de-la-energia.pdf",
    descripcion: "Diagnósticos y auditorías energéticas industriales, eficiencia en redes térmicas y eléctricas, energías renovables, descarbonización y norma ISO 50001."
  },
  {
    codigo: "EL-09",
    nombre: "Gestión de Proyectos",
    horas: "4 hs/sem",
    area: "Dirección de Proyectos",
    programaPdf: "./programas/gestion-de-proyectos.pdf",
    descripcion: "Gestión ágil (Scrum, Kanban) y tradicional (estándares PMI), balance de recursos, mitigación de riesgos y seguimiento de presupuestos y plazos en proyectos de ingeniería."
  },
  {
    codigo: "EL-10",
    nombre: "Análisis de Mercados y Finanzas Globales",
    horas: "4 hs/sem",
    area: "Finanzas Internacionales",
    programaPdf: "./programas/analisis-de-mercados-y-finanzas-globales.pdf",
    descripcion: "Interpretación de variables macroeconómicas globales en tiempo real (tasas, tipo de cambio, riesgo país, commodities), derivados financieros y valuación estratégica bajo incertidumbre."
  },
  {
    codigo: "952594",
    nombre: "Finanzas",
    horas: "5 hs/sem",
    area: "Finanzas Corporativas",
    programaPdf: "./programas/finanzas.pdf",
    descripcion: "Estructura de financiamiento corporativo, administración del capital de trabajo, valuación de activos, flujo de fondos descontado y mercado de capitales."
  },
  {
    codigo: "EL-12",
    nombre: "Logística",
    horas: "4 hs/sem",
    area: "Cadena de Suministro",
    programaPdf: "./programas/logistica.pdf",
    descripcion: "Modelado de redes logísticas, gestión de flotas y transporte multimodal, cross-docking, optimización de inventarios y logística inversa."
  },
  {
    codigo: "EL-13",
    nombre: "Innovación y Emprendedorismo",
    horas: "4 hs/sem",
    area: "Emprendimiento y Startups",
    programaPdf: "./programas/innovacion-y-emprendedorismo.pdf",
    descripcion: "Creación y escalado de empresas de base tecnológica, metodologías de innovación (Lean Startup, Design Thinking), validación de propuestas de valor y rondas de inversión."
  },
  {
    codigo: "EL-14",
    nombre: "Marketing Industrial",
    horas: "4 hs/sem",
    area: "Negocios B2B",
    programaPdf: "./programas/marketing-industrial.pdf",
    descripcion: "Inteligencia de mercado interempresarial (B2B), pricing técnico, desarrollo de clientes industriales, licitaciones complejas y gestión de canales comerciales."
  },
  {
    codigo: "EL-15",
    nombre: "Gestión Empresarial",
    horas: "4 hs/sem",
    area: "Gestión Directiva",
    programaPdf: "./programas/gestion-empresarial.pdf",
    descripcion: "Modelos directivos contemporáneos de administración de empresas, cuadros de mando integral, formulación de planes de negocios y gobierno corporativo."
  },
  {
    codigo: "EL-16",
    nombre: "Negociación",
    horas: "4 hs/sem",
    area: "Habilidades Directivas",
    programaPdf: "./programas/negociacion.pdf",
    descripcion: "Métodos colaborativos de negociación (Método Harvard), manejo de intereses contrapuestos, dinámicas de persuasión y resolución estratégica de controversias comerciales y laborales."
  },
  {
    codigo: "EL-17",
    nombre: "Ergonomía",
    horas: "4 hs/sem",
    area: "Salud Ocupacional y Ergonomía",
    programaPdf: "./programas/ergonomia.pdf",
    descripcion: "Evaluación biomecánica de puestos laborales, análisis de carga física y postural, factores ambientales (ruido, iluminación) y prevención de trastornos músculo-esqueléticos."
  },
  {
    codigo: "EL-18",
    nombre: "Política Económica",
    horas: "4 hs/sem",
    area: "Entorno Macroeconómico",
    programaPdf: "./programas/politica-economica.pdf",
    descripcion: "Análisis del marco macroeconómico argentino, políticas monetarias, fiscales y arancelarias, y su incidencia sobre el desarrollo industrial y la competitividad regional."
  },
  {
    codigo: "EL-19",
    nombre: "Responsabilidad Social Empresaria",
    horas: "4 hs/sem",
    area: "Ética y Sustentabilidad",
    programaPdf: "./programas/responsabilidad-social-empresaria.pdf",
    descripcion: "Modelos de sostenibilidad corporativa, lineamientos ESG (Environmental, Social and Governance), balance social y diálogo con grupos de interés."
  },
  {
    codigo: "EL-20",
    nombre: "Cooperativismo, Tecnología y Economía Solidaria",
    horas: "4 hs/sem",
    area: "Economía Social y Autogestión",
    programaPdf: "./programas/cooperativismo-tecnologia-y-economia-solidaria.pdf",
    descripcion: "Marco doctrinario y legal de empresas recuperadas, cooperativas de trabajo, autogestión de la producción y modelos de tecnología social."
  },
  {
    codigo: "EL-21",
    nombre: "Inglés Comunicacional II",
    horas: "4 hs/sem",
    area: "Idiomas Extranjeros",
    programaPdf: "./programas/ingles-comunicacional-ii.pdf",
    descripcion: "Desarrollo de competencias comunicacionales en inglés orientadas a presentaciones ejecutivas, lectura de papers técnicos y reuniones de negocios internacionales."
  }
];
