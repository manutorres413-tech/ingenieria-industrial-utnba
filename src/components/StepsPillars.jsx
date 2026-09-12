import React from 'react';
import { Factory, Cog, Truck, BarChart3, Users, Cpu, ShieldCheck } from 'lucide-react';

export default function StepsPillars() {
  const posterSteps = [
    {
      number: "01",
      title: "Construí",
      subtitle: "Organizá tu planta.",
      description: "Diseñá la distribución de maquinarias, depósitos y puestos de trabajo para minimizar traslados y cuellos de botella.",
      icon: Factory
    },
    {
      number: "02",
      title: "Fabricá",
      subtitle: "Poné la producción en marcha.",
      description: "Sincronizá el flujo de materiales, balanceá los tiempos de operarios y robots, y garantizá estándares de calidad ISO.",
      icon: Cog
    },
    {
      number: "03",
      title: "Entregá",
      subtitle: "Completá tus pedidos.",
      description: "Gestioná la logística de despacho, optimizá rutas de distribución y asegurá entregas a tiempo con costos mínimos.",
      icon: Truck
    }
  ];

  const careerPillars = [
    {
      title: "Operaciones & Industria 4.0",
      description: "Planificación de la producción, balanceo de líneas, robótica industrial y mantenimiento inteligente.",
      icon: Cog,
      tag: "Producción"
    },
    {
      title: "Datos, Modelado & Simulación",
      description: "Investigación operativa, ciencia de datos aplicada y simulación computacional de escenarios complejos.",
      icon: Cpu,
      tag: "Tecnología"
    },
    {
      title: "Finanzas, Costos & Negocios",
      description: "Evaluación de proyectos de inversión, control de gestión estratégica, presupuestos y comercio exterior.",
      icon: BarChart3,
      tag: "Gestión"
    },
    {
      title: "Personas, Calidad & Planeta",
      description: "Liderazgo de equipos multidisciplinarios, ergonomía, normas ambientales y sustentabilidad productiva.",
      icon: Users,
      tag: "Sustentabilidad"
    }
  ];

  return (
    <section id="carrera" className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 mb-3">
            El perfil profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Qué es la <span className="text-[#B71234]">Ingeniería Industrial</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Es la rama de la ingeniería que actúa como <strong>puente integrador</strong> entre la técnica, las personas, la tecnología y los negocios. El ingeniero industrial optimiza sistemas productivos y de servicios para hacerlos más eficientes, rentables y sustentables.
          </p>
        </div>

        {/* 3 Poster Steps Banner */}
        <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-10 border border-gray-200 mb-16 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-gray-300 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B71234]">
                La lógica del simulador Industrialito
              </span>
              <h3 className="text-2xl font-bold text-[#2F3336]">
                El ciclo operativo de una organización
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md">
              Como en el afiche de la expo: <em>"Vení a jugar. No necesitás conocimientos previos. Descubrí la carrera jugando."</em>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posterSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {/* Circle badge matching poster: #B71234 with white text */}
                    <div className="w-11 h-11 rounded-full bg-[#B71234] text-white flex items-center justify-center font-black text-lg shadow-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#2F3336] group-hover:text-[#B71234] transition-colors">
                        {step.title}
                      </h4>
                      <div className="text-xs font-semibold text-gray-500">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars of Knowledge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-[#B71234]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF1F3] text-[#B71234] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#2F3336] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
