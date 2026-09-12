import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building2, GraduationCap, Users, Calendar, Sparkles } from 'lucide-react';

export default function WhyUTN() {
  const qualityBadges = [
    {
      title: "Triple Ganador Premio Nacional a la Calidad",
      subtitle: "Ediciones 2016, 2019 y 2023 • Premio al Compromiso Institucional con la Calidad"
    },
    {
      title: "Certificación ISO 9001:2015 TÜV Rheinland",
      subtitle: "Dpto. de Industrial certificado hace 3 años (Cert. 01 10006 1427619/13) • UTN.BA desde 2006"
    },
    {
      title: "Acreditada CONEAU por 6 Años",
      subtitle: "Máximo plazo legal (Res. 992/14) • Actualmente en proceso de reacreditación"
    }
  ];

  const points = [
    {
      icon: Award,
      title: "Cultura de Calidad y Premios Nacionales",
      description: "La UTN Buenos Aires es triple ganadora del prestigioso Premio Nacional a la Calidad (PNC 2016, 2019 y 2023), galardonada por su Compromiso Institucional y finalista del Premio Iberoamericano a la Calidad (FUNDIBEQ 2018)."
    },
    {
      icon: ShieldCheck,
      title: "Gestión Certificada ISO 9001:2015",
      description: "El Departamento de Ingeniería Industrial cuenta con su Sistema de Gestión de la Calidad certificado por el organismo internacional TÜV Rheinland hace 3 años. Además, la UTN.BA sostiene procesos certificados ininterrumpidamente desde 2006."
    },
    {
      icon: CheckCircle2,
      title: "Máxima Acreditación Académica CONEAU",
      description: "La carrera de Ingeniería Industrial cuenta con acreditación otorgada por el máximo período legal de 6 años por la CONEAU (Res. 992/14), encontrándose actualmente transitando con éxito el nuevo proceso de reacreditación."
    },
    {
      icon: Users,
      title: "30 Años de Trayectoria en Industrial",
      description: "Creada en 1995, Ingeniería Industrial es la 2ª carrera con más estudiantes de la UTN.BA: cuenta con más de 2.500 alumnos activos, un claustro de 260 docentes y más de 100 nuevos graduados por año liderando industrias."
    },
    {
      icon: Building2,
      title: "El 40% de los Ingenieros de Argentina",
      description: "La UTN forma a 4 de cada 10 ingenieros de todo el país a través de su red federal de 30 Facultades Regionales. UTN Buenos Aires es la regional más grande, con 77 años de trayectoria y 20.600 estudiantes."
    },
    {
      icon: GraduationCap,
      title: "100% Ingeniería, Pública y Gratuita",
      description: "Una universidad dedicada exclusivamente a la ingeniería y la tecnología, sin aranceles. Con dos sedes estratégicas (Medrano en Almagro y Campus en Lugano) y turnos pensados para acompañar la inserción laboral y pasantías."
    }
  ];

  return (
    <section id="por-que-utn" className="py-12 sm:py-16 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF0F3] border border-[#FCD4DA] text-[#B71234] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excelencia y Trayectoria Oficial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Por qué estudiar en la UTN Buenos Aires?
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed">
            Formación tecnológica de vanguardia respaldada por los más altos estándares nacionales e internacionales de acreditación, calidad de gestión y reconocimiento institucional.
          </p>
        </div>

        {/* Cinta Destacada de Hitos de Calidad Oficial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {qualityBadges.map((badge, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-4 border-l-4 border-l-[#B71234] border border-gray-200 shadow-2xs text-left flex flex-col justify-center"
            >
              <span className="text-xs sm:text-sm font-extrabold text-[#2F3336] leading-snug">
                {badge.title}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                {badge.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Cuadrícula de 6 Pilares Institucionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-gray-300 transition-all text-left"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF1F3] text-[#B71234] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#2F3336] mb-1.5 leading-snug">
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
