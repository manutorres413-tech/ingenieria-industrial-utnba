import React from 'react';
import { Building2, GraduationCap, Compass, ShieldCheck } from 'lucide-react';

export default function WhyUTN() {
  const points = [
    {
      icon: Compass,
      title: "Enfocada 100% en ingeniería",
      description: "A diferencia de otras universidades, en la UTN no se dictan otras disciplinas. Todos los recursos, laboratorios y claustros docentes están dedicados exclusivamente a la ingeniería y la tecnología."
    },
    {
      icon: Building2,
      title: "Dos sedes en la ciudad",
      description: "Sede Medrano en Almagro y Sede Campus en Villa Lugano (Mozart 2300), equipadas con talleres pesados, laboratorios de ensayo y centros de cómputo."
    },
    {
      icon: GraduationCap,
      title: "Universidad pública y gratuita",
      description: "Formación de excelencia sin aranceles ni matrículas. Además, contás con tutorías de apoyo gratuitas dictadas por estudiantes avanzados en materias de 1° año."
    }
  ];

  return (
    <section id="por-que-utn" className="py-12 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Por qué estudiar en la UTN Buenos Aires?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            La UTN es una universidad enfocada únicamente en ingeniería: no se dictan carreras de otras áreas. Esto asegura que la comunidad, los espacios de práctica y la investigación estén totalmente alineados a la formación técnica.
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
