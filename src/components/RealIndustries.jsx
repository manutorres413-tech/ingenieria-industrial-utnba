import React from 'react';
import { Factory, Globe2, ShoppingBag, Flame, Cpu, Building2 } from 'lucide-react';

export default function RealIndustries() {
  const sectors = [
    {
      title: "Automotriz y Metalmecánica",
      icon: Factory,
      rol: "Ingeniería de procesos, mejora continua (Lean/Kaizen) y control de calidad en planta.",
      empresas: ["Toyota", "Grupo Techint (Tenaris / Ternium)", "Ford", "Volkswagen", "Aluar"]
    },
    {
      title: "Logística y Cadena de Suministro",
      icon: Globe2,
      rol: "Planificación de abastecimiento, ruteo de transporte y operación de centros de distribución.",
      empresas: ["Mercado Libre", "Andreani", "DHL Express", "Celsur Logística"]
    },
    {
      title: "Consumo Masivo y Alimentos",
      icon: ShoppingBag,
      rol: "Programación de la producción, líneas continuas de envasado y gestión de inventarios.",
      empresas: ["Quilmes", "Arcor", "Unilever", "Molinos Río de la Plata", "Danone"]
    },
    {
      title: "Energía, Petróleo y Gas",
      icon: Flame,
      rol: "Logística técnica de yacimientos, compras estratégicas y evaluación de inversiones.",
      empresas: ["YPF", "Pan American Energy (PAE)", "Vista Energy", "Raízen", "Tecpetrol"]
    },
    {
      title: "Consultoría y Transformación Digital",
      icon: Cpu,
      rol: "Reingeniería de procesos de negocio, analítica de datos y gestión de proyectos corporativos.",
      empresas: ["Accenture", "Deloitte", "PwC", "Globant", "EY"]
    }
  ];

  return (
    <section id="sectores-empleo" className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado limpio y formal */}
        <div className="max-w-3xl mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3336] tracking-tight">
            Sectores y Empresas de Inserción Laboral
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Los estudiantes avanzados y graduados de la UTN Buenos Aires se insertan en las principales industrias del país. Estos son los sectores y las empresas más elegidas para el desarrollo profesional:
          </p>
        </div>

        {/* Grilla de Sectores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F6F8] rounded-xl p-5 border border-gray-200 flex flex-col justify-between shadow-2xs hover:border-gray-300 transition-all"
              >
                <div>
                  <div className="flex items-center space-x-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#A31235] shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                        Rol habitual
                      </span>
                      <p className="text-xs text-gray-700 leading-snug mt-0.5">
                        {sec.rol}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/70">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Empresas habituales
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sec.empresas.map((emp, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-[#2F3336] bg-white border border-gray-200 px-2 py-0.5 rounded-md"
                      >
                        {emp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota formal institucional */}
        <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-4 text-xs text-gray-600 text-left flex items-start space-x-2.5">
          <Building2 className="w-4 h-4 text-[#A31235] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            La facultad articula la inserción laboral mediante convenios marco de pasantías (Ley 26.427), la plataforma institucional <strong>Talentia UTN.BA</strong> y la Feria Anual de Empresas organizada por el Área de Desarrollo Profesional.
          </p>
        </div>

      </div>
    </section>
  );
}
