import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, Clock, CheckCircle2, User, Sparkles } from 'lucide-react';

function EngineersStatGraphic() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const total = 10;
  const utn = 4;
  const radius = 24;
  const circumference = 2 * Math.PI * radius; // ~150.8
  const strokeDashoffset = animated ? circumference * (1 - 0.40) : circumference;

  return (
    <div className="bg-white/90 rounded-2xl p-5 border border-gray-200 shadow-2xs">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {/* Gráfico circular / dona animado */}
        <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
          <svg className="w-20 h-20 -rotate-90 transform" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r={radius}
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="6"
            />
            <circle
              cx="30"
              cy="30"
              r={radius}
              fill="none"
              stroke="#A31235"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-base font-black text-[#2F3336] leading-none">40%</span>
            <span className="text-[9px] font-extrabold text-[#A31235] tracking-tight uppercase mt-0.5">UTN</span>
          </div>
        </div>

        {/* Pictograma de 10 personitas (4 UTN vs 6 resto del país) */}
        <div className="flex-1 w-full text-left">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-[#A31235] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>4 de cada 10 ingenieros de Argentina</span>
            </span>
            <span className="text-gray-400 text-[11px]">Total país</span>
          </div>

          <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
            {Array.from({ length: total }).map((_, i) => {
              const isUtn = i < utn;
              return (
                <div
                  key={i}
                  title={isUtn ? "Ingeniero/a formado en UTN (40%)" : "Otras universidades (60%)"}
                  className={`h-9 rounded-lg flex flex-col items-center justify-center transition-all duration-200 hover:scale-110 cursor-default ${
                    isUtn
                      ? 'bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] shadow-2xs font-bold'
                      : 'bg-gray-50 text-gray-300 border border-gray-200'
                  }`}
                >
                  <User className={`w-4 h-4 ${isUtn ? 'text-[#A31235]' : 'text-gray-300'}`} />
                  <span className={`text-[8px] leading-none mt-0.5 font-bold ${isUtn ? 'text-[#A31235]' : 'text-gray-400'}`}>
                    {isUtn ? 'UTN' : ''}
                  </span>
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
  const studentBenefits = [
    {
      icon: GraduationCap,
      title: "100% Pública y Gratuita",
      description: "Sin matrículas ni cuotas. Acceso abierto, sistema de becas, tutorías académicas y comedor universitario."
    },
    {
      icon: Clock,
      title: "Turnos pensados para trabajar",
      description: "Podés elegir cursar en turno mañana, tarde o noche, lo que te permite trabajar o hacer pasantías sin retrasarte."
    },
    {
      icon: Award,
      title: "Prestigio y Calidad Reconocida",
      description: "Título oficial con máxima acreditación CONEAU, certificación internacional de calidad y convenios con más de 200 empresas líderes."
    }
  ];

  return (
    <section id="por-que-utn" className="py-12 sm:py-16 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado directo y equilibrado */}
        <div className="w-full mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Por qué estudiar en la UTN Buenos Aires?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            La mayor universidad tecnológica del país, pensada para acompañar tu formación profesional y darte una salida laboral rápida.
          </p>
        </div>

        {/* Layout equilibrado de 2 columnas: Gráfico estadístico + 3 Puntos clave para el estudiante */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Columna Izquierda: Tarjeta de Estadística y Comunidad */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-2xs flex flex-col justify-between text-left">
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] mb-3">
                Liderazgo Nacional
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#2F3336] mb-2 leading-snug">
                El 40% de los ingenieros del país se forman en la UTN
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                La UTN es la única universidad argentina dedicada de forma exclusiva a carreras técnicas y de ingeniería. En la regional Buenos Aires (UTN.BA) somos más de 20.000 estudiantes y contamos con 30 años de experiencia específica en Ingeniería Industrial.
              </p>
            </div>

            {/* Componente Gráfico Interactivo */}
            <EngineersStatGraphic />
          </div>

          {/* Columna Derecha: 3 Beneficios concretos para el ingresante */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {studentBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs flex items-start space-x-4 text-left hover:border-gray-300 transition-all flex-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0F3] text-[#A31235] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2F3336] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
