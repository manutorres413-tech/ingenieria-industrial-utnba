import React from 'react';
import { Briefcase, Building, Cpu, Globe2, TrendingUp, ShieldCheck, Factory, LineChart, Users } from 'lucide-react';

export default function CareerProfile() {
  const fields = [
    {
      icon: Factory,
      title: "Plantas Industriales & Manufactura",
      description: "Dirección de operaciones, balanceo de líneas productivas, mantenimiento industrial, seguridad y plantas automotrices, alimenticias y farmacéuticas.",
      tag: "Producción"
    },
    {
      icon: Globe2,
      title: "Supply Chain & Logística Global",
      description: "Centros de distribución inteligentes, transporte multimodal, compras internacionales (comercio exterior) y redes de abastecimiento masivo.",
      tag: "Logística"
    },
    {
      icon: TrendingUp,
      title: "Finanzas & Proyectos de Inversión",
      description: "Estudios de factibilidad técnico-económica, análisis de costos, valuación de proyectos (VAN/TIR) y control presupuestario corporativo.",
      tag: "Finanzas"
    },
    {
      icon: Cpu,
      title: "Tecnología, Datos & Mejora Continua",
      description: "Modelado predictivo, ciencia de datos aplicada a procesos, automatización inteligente, Lean Manufacturing y metodologías ágiles.",
      tag: "Tecnología"
    },
    {
      icon: LineChart,
      title: "Consultoría Estratégica & Negocios",
      description: "Diagnóstico organizacional, reingeniería de procesos, consultoría en transformación digital y asesoramiento a PyMEs y corporaciones.",
      tag: "Estrategia"
    },
    {
      icon: ShieldCheck,
      title: "Calidad, Sustentabilidad & Medio Ambiente",
      description: "Sistemas integrados de gestión (normas ISO 9001, 14001, 45001), ergonomía laboral, economía circular y gestión de la energía.",
      tag: "Sustentabilidad"
    }
  ];

  return (
    <section id="perfil" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF1F3] text-[#B71234] border border-[#FCD4DA] mb-3">
            Inserción Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            Perfil del Graduado y <span className="text-[#B71234]">Salida Laboral</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            La formación integral de la UTN Buenos Aires capacita al profesional para liderar en cualquier sector donde se coordinen personas, recursos materiales, tecnología y capital.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fields.map((field, idx) => {
            const Icon = field.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F6F8] rounded-2xl p-6 border border-gray-200 hover:border-[#B71234]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#B71234] border border-gray-200 shadow-2xs flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded">
                      {field.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#2F3336] mb-2">
                    {field.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {field.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="bg-[#2F3336] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#B71234] font-bold">
              <span>Empleabilidad y Demanda Constante</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Una de las ingenierías con mayor versatilidad del mercado
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gracias al régimen de cursada vespertina y nocturna de la UTN.BA, más del 85% de los estudiantes ya se encuentra trabajando en empresas líderes antes de rendir su Proyecto Final.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-[#B71234]">+95%</div>
              <div className="text-xs text-gray-300 mt-1">Inserción laboral antes del año de egreso</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-black text-white">Top 1</div>
              <div className="text-xs text-gray-300 mt-1">Universidad Tecnológica de Argentina</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
