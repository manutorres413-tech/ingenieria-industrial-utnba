import React from 'react';
import { Building2, GraduationCap, HeartHandshake } from 'lucide-react';

export default function WhyUTN() {
  const points = [
    {
      icon: Building2,
      title: "Dos sedes en la ciudad",
      description: "Sede Medrano en Almagro y Sede Campus en Villa Lugano (Mozart 2300), con talleres de máquinas, laboratorios de ensayo y centros de cómputo."
    },
    {
      icon: HeartHandshake,
      title: "Tutorías de apoyo en primer año",
      description: "Estudiantes avanzados brindan clases de consulta y grupos de estudio para acompañarte en materias como Análisis Matemático, Álgebra y Física."
    },
    {
      icon: GraduationCap,
      title: "Universidad pública y gratuita",
      description: "La UTN no cobra aranceles ni matrículas. Es una universidad nacional de excelencia en la formación de ingenieros de todo el país."
    }
  ];

  return (
    <section id="por-que-utn" className="py-12 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Cómo es cursar en la UTN Buenos Aires?
          </h2>
          <p className="mt-1 text-sm sm:text-base text-gray-600">
            Algunos puntos prácticos para tener en cuenta sobre la facultad:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between shadow-2xs text-left"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF1F3] text-[#B71234] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#2F3336] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
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
