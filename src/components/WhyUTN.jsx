import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, CheckCircle2, Building2, GraduationCap, Users, User } from 'lucide-react';

function EngineersStatGraphic() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const total = 10;
  const utn = 4;
  const radius = 17;
  const circumference = 2 * Math.PI * radius; // ~106.8
  const strokeDashoffset = animated ? circumference * (1 - 0.40) : circumference;

  return (
    <div className="my-2.5 p-2.5 bg-gray-50/90 rounded-xl border border-gray-200">
      <div className="flex items-center gap-3">
        {/* Gráfico circular / dona animado */}
        <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
          <svg className="w-11 h-11 -rotate-90 transform" viewBox="0 0 42 42">
            <circle
              cx="21"
              cy="21"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
            />
            <circle
              cx="21"
              cy="21"
              r={radius}
              fill="none"
              stroke="#B71234"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] font-black text-[#2F3336] leading-none">40%</span>
            <span className="text-[7px] font-bold text-[#B71234] uppercase tracking-tight">UTN</span>
          </div>
        </div>

        {/* Pictograma de 10 personitas (4 UTN vs 6 resto del país) */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-[10px] font-bold mb-1">
            <span className="text-[#B71234]">4 de cada 10 ingenieros</span>
            <span className="text-gray-400">Total País</span>
          </div>

          <div className="grid grid-cols-10 gap-0.5">
            {Array.from({ length: total }).map((_, i) => {
              const isUtn = i < utn;
              return (
                <div
                  key={i}
                  title={isUtn ? "Ingeniero/a formado en UTN (40%)" : "Otras universidades (60%)"}
                  className={`h-6 rounded flex items-center justify-center transition-all duration-200 hover:scale-125 cursor-default ${
                    isUtn
                      ? 'bg-[#FFF0F3] text-[#B71234] border border-[#FCD4DA] shadow-2xs font-bold'
                      : 'bg-white text-gray-300 border border-gray-200'
                  }`}
                >
                  <User className={`w-3 h-3 ${isUtn ? 'text-[#B71234]' : 'text-gray-300'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

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
      hasGraphic: true,
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

                  {item.hasGraphic && <EngineersStatGraphic />}

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
