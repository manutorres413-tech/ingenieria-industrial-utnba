import React from 'react';
import { Moon, Building2, GraduationCap, HeartHandshake } from 'lucide-react';

export default function WhyUTN() {
  const points = [
    {
      icon: Moon,
      title: "Pensada para trabajar y estudiar",
      description: "La facultad ofrece turnos tarde y noche. Esto permite que puedas tener un trabajo o hacer pasantías sin que se te superponga con las materias."
    },
    {
      icon: Building2,
      title: "Dos sedes en la ciudad",
      description: "La sede Medrano está en Almagro y el Campus en Villa Lugano (Mozart 2300), donde funcionan los laboratorios de ensayo, talleres de máquinas y centros de cómputo."
    },
    {
      icon: HeartHandshake,
      title: "Tutorías de apoyo en primer año",
      description: "Estudiantes de años superiores dan clases de consulta y arman grupos de estudio para ayudarte con las materias iniciales como Análisis Matemático, Álgebra y Física."
    },
    {
      icon: GraduationCap,
      title: "Universidad pública y gratuita",
      description: "La UTN no cobra aranceles ni matrículas. Es una universidad nacional con prestigio histórico en la formación de ingenieros en todo el país."
    }
  ];

  return (
    <section id="por-que-utn" className="py-14 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Cómo es cursar en la UTN Buenos Aires?
          </h2>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            La Regional Buenos Aires tiene particularidades prácticas pensadas para acompañar al estudiante a lo largo de la carrera:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between shadow-2xs"
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
