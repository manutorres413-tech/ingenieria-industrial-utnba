import React from 'react';
import { Factory, Globe2, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

export default function CareerProfile() {
  const fields = [
    {
      icon: Factory,
      title: "Producción y Fábricas",
      tag: "Cómo se fabrica",
      description: "Coordinar líneas de trabajo, tiempos, máquinas y equipos para fabricar autos, alimentos, medicamentos, energía o indumentaria."
    },
    {
      icon: Globe2,
      title: "Logística y Envíos",
      tag: "Cómo se distribuye",
      description: "Planificar cómo viajan los productos desde el depósito hasta el cliente, compras con proveedores y depósitos inteligentes."
    },
    {
      icon: TrendingUp,
      title: "Negocios y Economía",
      tag: "Números y proyectos",
      description: "Analizar costos, armar presupuestos y evaluar si una nueva idea o proyecto de inversión es viable y rentable."
    },
    {
      icon: Cpu,
      title: "Tecnología y Datos",
      tag: "Optimización digital",
      description: "Usar software, analítica e inteligencia artificial para detectar demoras, ahorrar recursos y tomar mejores decisiones."
    }
  ];

  return (
    <section id="perfil" className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Qué hace un/a ingeniero/a industrial?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            Vas a aprender a mirar organizaciones en conjunto: conectar personas, tecnología, números y procesos. No te limitás a un solo rubro; estas son las 4 áreas principales donde podés desarrollarte:
          </p>
        </div>

        {/* 4 Sectors Grid ocupando toda la pantalla de forma equilibrada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {fields.map((field, idx) => {
            const Icon = field.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F6F8] rounded-xl p-5 border border-gray-200 flex flex-col justify-between shadow-2xs hover:border-[#A31235] hover:shadow-xs transition-all text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#B71234] border border-gray-200 flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-md">
                      {field.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2F3336] mb-1.5">
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

        {/* Informative Note: Lenguaje directo y claro */}
        <div className="bg-[#2F3336] text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-[#FF4D6D] uppercase tracking-wider mb-1">
              <span>Inserción Laboral Temprana</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Salida laboral real antes de recibirte
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-3xl leading-relaxed">
              9 de cada 10 estudiantes ya trabajan o realizan pasantías pagas a partir de 3° y 4° año. Además, el plan contempla 200 horas de Práctica Profesional Supervisada (PPS) en industrias y empresas líderes.
            </p>
          </div>
          <a
            href="#ingreso"
            className="shrink-0 px-4 py-2.5 text-xs sm:text-sm font-bold bg-[#A31235] hover:bg-[#870E2B] text-white rounded-xl transition-all flex items-center space-x-2 shadow-xs"
          >
            <span>Ver Cómo Ingresar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
