import React, { useState } from 'react';
import { Factory, Globe2, Cpu, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export default function CareerSkillTree() {
  const [activeTrack, setActiveTrack] = useState('produccion');

  const tracks = [
    {
      id: 'produccion',
      title: 'Fábricas & Manufactura',
      subtitle: 'De la idea al producto terminado',
      icon: Factory,
      color: '#A31235',
      lightBg: '#FFF0F3',
      borderColor: '#FCD4DA',
      goal: 'Aprender a diseñar, automatizar y liderar líneas de producción masiva en automotrices, farmacéuticas o de alimentos.',
      steps: [
        {
          year: '1° Año',
          subject: 'Pensamiento Sistémico',
          badge: 'Base de todo',
          desc: 'Entendés la empresa como un circuito vivo donde cada área influye en la otra.'
        },
        {
          year: '2° Año',
          subject: 'Ciencia de los Materiales',
          badge: 'Materia prima',
          desc: 'Descubrís las propiedades de metales, polímeros y compuestos para saber con qué fabricar.'
        },
        {
          year: '3° Año',
          subject: 'Estudio del Trabajo',
          badge: 'Hito Intermedio',
          desc: 'Eliminás tiempos muertos, rediseñás puestos y cuidás la ergonomía de los operarios.'
        },
        {
          year: '4° Año',
          subject: 'Planificación de la Producción',
          badge: 'Control fabril',
          desc: 'Programás cuántas unidades fabricar cada día para no parar las máquinas ni saturar el stock.'
        },
        {
          year: '5° Año',
          subject: 'Distribución en Planta & Robótica',
          badge: 'Especialización',
          desc: 'Diseñás el layout óptimo de una planta entera y coordinás brazos robóticos automatizados.'
        }
      ]
    },
    {
      id: 'logistica',
      title: 'Supply Chain & Envíos',
      subtitle: 'Conectar el mundo en 24 horas',
      icon: Globe2,
      color: '#A31235',
      lightBg: '#FFF0F3',
      borderColor: '#FCD4DA',
      goal: 'Organizar la logística global: compras internacionales, depósitos inteligentes y entregas de e-commerce sin demoras.',
      steps: [
        {
          year: '1° Año',
          subject: 'Álgebra y Modelado',
          badge: 'Matemática aplicada',
          desc: 'Herramientas matriciales para resolver redes de transporte complejas con miles de destinos.'
        },
        {
          year: '2° Año',
          subject: 'Probabilidad y Estadística',
          badge: 'Predecir demanda',
          desc: 'Analizás patrones de consumo para anticipar cuánto stock vas a necesitar antes de que se agote.'
        },
        {
          year: '3° Año',
          subject: 'Comercialización y Mercado',
          badge: 'El cliente primero',
          desc: 'Comprendés los canales de venta físicos y digitales y la satisfacción del consumidor final.'
        },
        {
          year: '4° Año',
          subject: 'Investigación Operativa',
          badge: 'Algoritmos de ruteo',
          desc: 'Calculás las rutas más cortas para camiones y la distribución óptima de almacenes gigantes.'
        },
        {
          year: '5° Año',
          subject: 'Manejo de Materiales & Logística',
          badge: 'E-commerce a escala',
          desc: 'Liderás centros de fulfillment robotizados como los de Mercado Libre o Andreani.'
        }
      ]
    },
    {
      id: 'datos',
      title: 'Datos & Industria 4.0',
      subtitle: 'Tecnología e Inteligencia Artificial',
      icon: Cpu,
      color: '#A31235',
      lightBg: '#FFF0F3',
      borderColor: '#FCD4DA',
      goal: 'Usar código, analítica de datos e inteligencia artificial para tomar decisiones sin intuiciones ni errores.',
      steps: [
        {
          year: '1° Año',
          subject: 'Informática I',
          badge: 'Código inicial',
          desc: 'Tus primeras líneas de programación y lógica algorítmica para automatizar cálculos tediosos.'
        },
        {
          year: '2° Año',
          subject: 'Informática II',
          badge: 'Bases de datos',
          desc: 'Manejo de estructuras de datos y desarrollo de software aplicado a la gestión empresarial.'
        },
        {
          year: '3° Año',
          subject: 'Análisis Numérico',
          badge: 'Simulación matemática',
          desc: 'Modelado por computadora para resolver ecuaciones que a mano llevarían meses de cálculo.'
        },
        {
          year: '4° Año',
          subject: 'Investigación Operativa',
          badge: 'Optimización algorítmica',
          desc: 'Simulaciones estocásticas y modelos matemáticos aplicados a la toma de decisiones empresariales.'
        },
        {
          year: '5° Año',
          subject: 'Ciencia de Datos & IA (Electiva)',
          badge: 'Vanguardia digital',
          desc: 'Machine learning, tableros predictivos con Power BI y Python para liderar la transformación digital.'
        }
      ]
    },
    {
      id: 'negocios',
      title: 'Finanzas & Proyectos',
      subtitle: 'Números, inversiones y dirección',
      icon: TrendingUp,
      color: '#A31235',
      lightBg: '#FFF0F3',
      borderColor: '#FCD4DA',
      goal: 'Evaluar negocios multimillonarios, armar presupuestos y liderar equipos directivos en cualquier sector económico.',
      steps: [
        {
          year: '1° Año',
          subject: 'Ingeniería y Sociedad',
          badge: 'Visión de contexto',
          desc: 'El rol económico de la industria en Argentina y el impacto socio-ambiental de cada proyecto.'
        },
        {
          year: '2° Año',
          subject: 'Administración & Economía',
          badge: 'Cómo funciona una empresa',
          desc: 'Estructuras de mercado, oferta, demanda y organización del capital humano.'
        },
        {
          year: '3° Año',
          subject: 'Costos y Presupuestos',
          badge: 'La billetera del proyecto',
          desc: 'Aprendés a costear cada tornillo y hora de trabajo para que el negocio sea rentable.'
        },
        {
          year: '4° Año',
          subject: 'Evaluación de Proyectos',
          badge: 'Materia Troncal',
          desc: 'Analizás si una nueva inversión (una fábrica nueva, una app, una refinería) va a dar ganancias reales.'
        },
        {
          year: '5° Año',
          subject: 'Control de Gestión & Proyecto Final',
          badge: 'Graduación',
          desc: 'Diseñás un plan de negocios e ingeniería completo como tesis final ante un tribunal de profesores.'
        }
      ]
    }
  ];

  const current = tracks.find(t => t.id === activeTrack);

  return (
    <section id="rutas-carrera" className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-8 text-left">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D6D]" />
            <span>Evolución de la Carrera</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#231F20] tracking-tight">
            Rutas de la Carrera: ¿Cómo evolucionás año a año?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Las materias no están aisladas. Elegí un área temática y mirá cómo las materias básicas de primer año se transforman en tus herramientas de liderazgo para quinto año:
          </p>
        </div>

        {/* Selector de Rutas Temáticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isSelected = activeTrack === track.id;

            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFF0F3] border-[#A31235] shadow-xs ring-2 ring-[#A31235]/20'
                    : 'bg-[#F9FAFB] border-gray-200 hover:border-gray-300 hover:bg-gray-100/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-[#A31235] text-white' : 'bg-white border border-gray-200 text-gray-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-black uppercase text-[#A31235] bg-white px-2 py-0.5 rounded-full border border-[#FCD4DA]">
                      Activa
                    </span>
                  )}
                </div>
                <div>
                  <h3 className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#A31235]' : 'text-[#231F20]'}`}>
                    {track.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                    {track.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Vista del Camino / Ruta seleccionada */}
        <div className="bg-[#F5F6F8] rounded-2xl p-5 sm:p-7 border border-gray-200 text-left">
          
          {/* Resumen de la Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A31235]">
                Objetivo Profesional de esta ruta:
              </span>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                {current.goal}
              </p>
            </div>
            <a
              href="#plan-estudios"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#A31235] hover:underline shrink-0"
            >
              <span>Ver todas en el plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Línea de evolución en 5 pasos */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {current.steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col justify-between shadow-2xs hover:border-[#A31235] hover:shadow-xs transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-black text-white bg-[#231F20] px-2 py-0.5 rounded-md">
                      {step.year}
                    </span>
                    <span className="text-[9px] font-bold text-[#A31235] bg-[#FFF0F3] px-1.5 py-0.5 rounded border border-[#FCD4DA]">
                      {step.badge}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#231F20] group-hover:text-[#A31235] transition-colors leading-snug mb-1.5">
                    {step.subject}
                  </h4>

                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
