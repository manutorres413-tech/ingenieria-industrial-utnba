import React, { useState } from 'react';
import { Factory, Globe2, TrendingUp, Cpu, RotateCcw, ArrowRight, Building2, CheckCircle2, Sparkles } from 'lucide-react';

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "¿Qué tipo de problema te motivaría más resolver en tu día a día?",
      options: [
        {
          id: 'produccion',
          icon: Factory,
          text: "Coordinar y mejorar la línea de fabricación de una planta automotriz, farmacéutica o de alimentos.",
          area: "Producción y Fabricación"
        },
        {
          id: 'logistica',
          icon: Globe2,
          text: "Planificar cómo hacer que millones de envíos lleguen en menos de 24 hs a cualquier rincón del país.",
          area: "Logística y Cadena de Suministro"
        },
        {
          id: 'negocios',
          icon: TrendingUp,
          text: "Evaluar costos, presupuestos e inversiones para decidir si un nuevo proyecto multimillonario es rentable.",
          area: "Finanzas, Proyectos y Negocios"
        },
        {
          id: 'tecnologia',
          icon: Cpu,
          text: "Usar datos, algoritmos e inteligencia artificial para detectar demoras y automatizar procesos.",
          area: "Tecnología, Analítica e IA"
        }
      ]
    },
    {
      question: "Si tuvieras que liderar un equipo dentro de una empresa, ¿dónde te gustaría estar?",
      options: [
        {
          id: 'produccion',
          icon: Factory,
          text: "En el corazón de la fábrica, interactuando con operarios y optimizando máquinas y seguridad.",
          area: "Producción y Fabricación"
        },
        {
          id: 'logistica',
          icon: Globe2,
          text: "En centros de distribución inteligentes monitoreando rutas, transportes y abastecimiento.",
          area: "Logística y Cadena de Suministro"
        },
        {
          id: 'negocios',
          icon: TrendingUp,
          text: "En reuniones de directorio presentando estrategias, balances y nuevos acuerdos comerciales.",
          area: "Finanzas, Proyectos y Negocios"
        },
        {
          id: 'tecnologia',
          icon: Cpu,
          text: "Diseñando dashboards en tiempo real y conectando software industrial con la nube.",
          area: "Tecnología, Analítica e IA"
        }
      ]
    },
    {
      question: "¿Qué innovación tecnológica te da más curiosidad aprender?",
      options: [
        {
          id: 'produccion',
          icon: Factory,
          text: "Robótica industrial, manufactura esbelta (Kaizen) y líneas de ensamblaje automatizadas.",
          area: "Producción y Fabricación"
        },
        {
          id: 'logistica',
          icon: Globe2,
          text: "Depósitos con robots autónomos, seguimiento satelital de cargas y comercio electrónico masivo.",
          area: "Logística y Cadena de Suministro"
        },
        {
          id: 'negocios',
          icon: TrendingUp,
          text: "Modelos de valuación de empresas, mercados energéticos y gestión de proyectos internacionales.",
          area: "Finanzas, Proyectos y Negocios"
        },
        {
          id: 'tecnologia',
          icon: Cpu,
          text: "Machine learning predictivo, analítica de datos (Python / Power BI) y gemelos digitales.",
          area: "Tecnología, Analítica e IA"
        }
      ]
    }
  ];

  const profileData = {
    produccion: {
      title: "Líder de Producción y Procesos Industriales",
      tagline: "El motor de la industria en el piso de fábrica",
      badge: "Producción & Operaciones",
      icon: Factory,
      description: "Tenés un perfil dinámico y pragmático. Te gusta ver resultados concretos en el mundo físico: cómo la materia prima se convierte en autos, alimentos o energía gracias a procesos eficientes y personas coordinadas.",
      materiasClave: ["Estudio del Trabajo", "Procesos Industriales", "Planificación de la Producción", "Seguridad e Higiene"],
      empresas: ["Toyota Argentina", "Grupo Techint (Tenaris)", "Quilmes", "Ford", "Arcor", "Aluar"]
    },
    logistica: {
      title: "Estratega de Logística y Cadena de Suministro",
      tagline: "Hacer que el mundo no se detenga nunca",
      badge: "Supply Chain & Logística",
      icon: Globe2,
      description: "Tu visión conecta los puntos: desde que se compran los insumos hasta que el paquete llega a la puerta del cliente. En un mundo globalizado y de compras online inmediatas, sos quien garantiza que todo esté en tiempo y forma.",
      materiasClave: ["Manejo de Materiales y Distribución", "Investigación Operativa", "Comercio Exterior", "Logística (Electiva)"],
      empresas: ["Mercado Libre", "Andreani", "DHL Express", "Celsur Logística", "Cencosud"]
    },
    negocios: {
      title: "Gestor/a de Proyectos y Finanzas Corporativas",
      tagline: "Visión global, decisiones estratégicas y rentabilidad",
      badge: "Estrategia & Negocios",
      icon: TrendingUp,
      description: "Te apasionan los números, el planeamiento estratégico y el liderazgo de proyectos de gran escala. Sabés equilibrar las metas técnicas de la ingeniería con la viabilidad financiera y económica.",
      materiasClave: ["Costos y Presupuestos", "Economía de la Empresa", "Evaluación de Proyectos", "Control de Gestión"],
      empresas: ["YPF", "Pan American Energy (PAE)", "Unilever", "Accenture", "PwC / Deloitte"]
    },
    tecnologia: {
      title: "Especialista en Datos, Optimización y Transformación Digital",
      tagline: "Ingeniería 4.0 impulsada por software y algoritmos",
      badge: "Datos & Industria 4.0",
      icon: Cpu,
      description: "Tu enfoque es el futuro digital: usar software, análisis masivo de datos e inteligencia artificial para tomar decisiones sin suposiciones. Transformás fábricas tradicionales en organizaciones inteligentes.",
      materiasClave: ["Informática I y II", "Investigación Operativa", "Ciencia de Datos (Electiva)", "Sistemas Inteligentes (Electiva)"],
      empresas: ["Mercado Libre", "Accenture", "Globant", "Siemens", "Techint Digital"]
    }
  };

  const handleSelectOption = (profileId) => {
    const updatedAnswers = [...answers, profileId];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateWinner = () => {
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    let maxCount = -1;
    let winningProfile = 'produccion';
    for (const [prof, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        winningProfile = prof;
      }
    }
    return winningProfile;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const winningProfileKey = showResult ? calculateWinner() : 'produccion';
  const result = profileData[winningProfileKey];
  const ResultIcon = result.icon;

  return (
    <section id="test-vocacional" className="py-12 sm:py-16 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D6D]" />
            <span>Orientación Vocacional Interactiva</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#2F3336] tracking-tight">
            ¿En qué área te ves trabajando?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Respondé 3 preguntas rápidas y descubrí qué perfil de la carrera conecta mejor con tus intereses y en qué empresas líderes podrías trabajar.
          </p>
        </div>

        {/* Tarjeta interactiva del Quiz */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-left">
          
          {!showResult ? (
            <div className="p-6 sm:p-8">
              {/* Barra de Progreso */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-4">
                <span className="text-[#A31235]">Pregunta {currentQuestion + 1} de {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                <div 
                  className="bg-[#A31235] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Título de la Pregunta */}
              <h3 className="text-lg sm:text-xl font-bold text-[#231F20] mb-6 leading-snug">
                {questions[currentQuestion].question}
              </h3>

              {/* Opciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {questions[currentQuestion].options.map((opt, idx) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.id)}
                      className="group p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#A31235] bg-[#F9FAFB] hover:bg-[#FFF8F9] text-left transition-all flex items-start space-x-3.5 active:scale-98 cursor-pointer shadow-2xs hover:shadow-xs"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 group-hover:border-[#A31235] flex items-center justify-center text-[#A31235] shrink-0 transition-colors shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-bold text-[#A31235] uppercase tracking-wider block mb-1">
                          {opt.area}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#231F20] leading-snug block">
                          {opt.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Vista de Resultados */
            <div className="p-6 sm:p-8 animate-fade-in space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] flex items-center justify-center shrink-0 shadow-xs">
                    <ResultIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A31235] bg-[#FFF0F3] px-2.5 py-0.5 rounded-md border border-[#FCD4DA]">
                      {result.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#231F20] mt-1">
                      {result.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Volver a intentar</span>
                </button>
              </div>

              {/* Descripción del Perfil */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {result.description}
              </p>

              {/* Empresas Empleadoras Reales y Materias */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                
                {/* Empresas verificadas de la Bolsa de Trabajo UTN.BA */}
                <div className="bg-[#F9FAFB] rounded-xl p-4 sm:p-5 border border-gray-200">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#231F20] mb-2.5">
                    <Building2 className="w-4 h-4 text-[#A31235]" />
                    <span>Empresas destacadas en esta área</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3 leading-tight">
                    Corporaciones con convenios activos de pasantías que reclutan estudiantes de la UTN.BA:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.empresas.map((emp, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-gray-800 bg-white border border-gray-200 px-2.5 py-1 rounded-lg shadow-2xs"
                      >
                        {emp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Materias Clave del Plan */}
                <div className="bg-[#F9FAFB] rounded-xl p-4 sm:p-5 border border-gray-200">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#231F20] mb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A31235]" />
                    <span>Materias clave que vas a cursar</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3 leading-tight">
                    Asignaturas troncales del Plan I23 vinculadas directamente a este rol:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {result.materiasClave.map((mat, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A31235]" />
                        <span className="font-medium">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Banner de inserción con la bolsa de empleo Talentia UTN */}
              <div className="bg-[#231F20] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#FF4D6D] uppercase text-[10px] tracking-wider block">
                    Bolsa de Trabajo UTN.BA (Talentia +1.000 organizaciones)
                  </span>
                  <p className="text-gray-300 mt-0.5 leading-snug">
                    El 85% de los estudiantes avanzados ya trabaja en su especialidad antes de recibirse a través de convenios de pasantía remunerada (Ley 26.427).
                  </p>
                </div>
                <a
                  href="#plan-estudios"
                  className="shrink-0 px-4 py-2 bg-[#A31235] hover:bg-[#850E2B] text-white font-bold rounded-lg transition-colors inline-flex items-center space-x-1.5 shadow-xs"
                >
                  <span>Ver materias en el Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
