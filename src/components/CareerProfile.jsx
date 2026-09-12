import React from 'react';
import { Factory, Globe2, TrendingUp, Cpu, LineChart, ShieldCheck } from 'lucide-react';

export default function CareerProfile() {
  const fields = [
    {
      icon: Factory,
      title: "Plantas y Producción",
      description: "Organización de líneas de trabajo, tiempos de fabricación, mantenimiento de equipos y coordinación del personal en fábricas de alimentos, autopartes, fármacos o energía.",
      tag: "Operaciones"
    },
    {
      icon: Globe2,
      title: "Logística y Abastecimiento",
      description: "Gestión de depósitos, distribución de mercadería a nivel local e internacional, trato con proveedores y control de stock.",
      tag: "Cadena de Suministro"
    },
    {
      icon: TrendingUp,
      title: "Costos y Finanzas",
      description: "Cálculo de costos de producción, armado de presupuestos y análisis para evaluar si un nuevo proyecto o inversión conviene económicamente.",
      tag: "Economía"
    },
    {
      icon: Cpu,
      title: "Datos y Mejora de Procesos",
      description: "Uso de herramientas estadísticas y software para analizar datos de la empresa, encontrar demoras y hacer que los procesos funcionen mejor.",
      tag: "Tecnología"
    },
    {
      icon: LineChart,
      title: "Consultoría y Gestión",
      description: "Asesoramiento a empresas medianas y grandes para reorganizar sectores, implementar cambios tecnológicos o definir planes de trabajo.",
      tag: "Estrategia"
    },
    {
      icon: ShieldCheck,
      title: "Calidad y Seguridad Ambiental",
      description: "Cuidado de las condiciones de trabajo en planta, cumplimiento de normas de calidad y reducción del impacto ambiental de las operaciones.",
      tag: "Normativa"
    }
  ];

  return (
    <section id="perfil" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Dónde trabaja un graduado de Industrial?
          </h2>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            La carrera tiene un campo laboral amplio porque enseña a mirar las organizaciones en conjunto: los números, las personas, las máquinas y la tecnología. Estos son los ámbitos más comunes de trabajo:
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {fields.map((field, idx) => {
            const Icon = field.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F6F8] rounded-xl p-5 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#B71234] border border-gray-200 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded">
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

        {/* Informative Note */}
        <div className="bg-[#2F3336] text-white rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-base font-bold">
              Inserción laboral durante la carrera
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
              La mayoría de los estudiantes realiza pasantías o se incorpora a empresas a partir del tercer o cuarto año de la carrera.
            </p>
          </div>
          <a
            href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 text-xs sm:text-sm font-bold bg-[#B71234] hover:bg-[#9E0E2B] text-white rounded-lg transition-colors"
          >
            Web Oficial UTN.BA
          </a>
        </div>

      </div>
    </section>
  );
}
