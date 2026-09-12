import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building2, GraduationCap, Users } from 'lucide-react';

export default function WhyUTN() {
  const points = [
    {
      icon: Award,
      title: "Premios Nacionales a la Calidad",
      description: "Triple ganadora del Premio Nacional a la Calidad (2016, 2019 y 2023) y finalista del Premio Iberoamericano (FUNDIBEQ)."
    },
    {
      icon: ShieldCheck,
      title: "Certificación ISO 9001:2015",
      description: "Departamento de Industrial certificado por TÜV Rheinland hace 3 años, y procesos de la UTN.BA certificados desde 2006."
    },
    {
      icon: CheckCircle2,
      title: "Acreditación CONEAU por 6 Años",
      description: "Acreditada por el plazo máximo legal (Res. 992/14) y actualmente en proceso de reacreditación institucional."
    },
    {
      icon: Users,
      title: "30 Años de Trayectoria en Industrial",
      description: "Creada en 1995: 2ª carrera más grande de UTN.BA, con 2.500 estudiantes, 260 docentes y +100 graduados por año."
    },
    {
      icon: Building2,
      title: "El 40% de los Ingenieros del País",
      description: "La UTN forma a 4 de cada 10 ingenieros de la Argentina. UTN.BA es la regional más grande, con 77 años y 20.600 alumnos."
    },
    {
      icon: GraduationCap,
      title: "100% Ingeniería, Pública y Gratuita",
      description: "Dedicada exclusivamente a la tecnología, no arancelada, con dos sedes (Medrano y Campus) y turnos pensados para trabajar."
    }
  ];

  return (
    <section id="por-que-utn" className="py-12 sm:py-14 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Por qué estudiar en la UTN Buenos Aires?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Puntos clave de nuestra identidad, calidad académica y liderazgo en formación tecnológica:
          </p>
        </div>

        {/* Cuadrícula de 6 Puntos Específicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-gray-300 transition-all text-left"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#FFF1F3] text-[#B71234] flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#2F3336] mb-1 leading-snug">
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
