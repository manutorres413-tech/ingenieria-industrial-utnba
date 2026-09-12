import React from 'react';
import { Moon, Building2, GraduationCap, Users2, ShieldCheck, TrendingUp, Compass, HeartHandshake } from 'lucide-react';

export default function WhyUTN() {
  const benefits = [
    {
      icon: Moon,
      title: "Diseñada para Trabajar y Estudiar",
      description: "Franjas horarias vespertinas y nocturnas pensadas expresamente para que puedas tener tu empleo o pasantía y cursar tu carrera sin superposiciones."
    },
    {
      icon: Building2,
      title: "Campus Lugano y Sede Medrano",
      description: "Laboratorios pesados de ensayo, centros de cómputo de alta performance, talleres de manufactura y vida universitaria en un predio de primer nivel."
    },
    {
      icon: HeartHandshake,
      title: "Tutorías Universitarias de Pares",
      description: "Estudiantes avanzados te acompañan en grupos de estudio y clases de apoyo para las materias clave de 1° año (Álgebra, Análisis I y Física I)."
    },
    {
      icon: GraduationCap,
      title: "Universidad Pública y Gratuita",
      description: "Formación de máxima excelencia académica reconocida a nivel nacional e internacional (entre las 100 mejores universidades de Latinoamérica)."
    },
    {
      icon: TrendingUp,
      title: "Red Laboral y Convenios Activos",
      description: "Bolsa de trabajo exclusiva con las principales industrias, empresas de tecnología, logística y consultoras del país."
    },
    {
      icon: Compass,
      title: "Formación Humanística y Social",
      description: "Compromiso con el desarrollo de la soberanía productiva, el cuidado ambiental y el crecimiento federal de Argentina."
    }
  ];

  return (
    <section id="por-que-utn" className="py-16 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-200 text-gray-700 mb-3">
            El valor diferencial UTN
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Por qué estudiar en la <span className="text-[#B71234]">UTN Buenos Aires</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            La UTN es la casa tecnológica de altos estudios que gradúa a más de la mitad de los ingenieros de la Argentina, con un modelo pedagógico centrado en la práctica productiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1F3] text-[#B71234] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2F3336] mb-2">
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

        {/* Quotes / Testimonial band */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#B71234] text-white flex items-center justify-center font-black text-xl shrink-0">
              ”
            </div>
            <div>
              <p className="text-sm sm:text-base text-gray-800 font-medium italic">
                "En la UTN no te preparan para ver la ingeniería en un pizarrón: te enseñan a gestionar sistemas reales, trabajar en equipo y resolver problemas de planta."
              </p>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                Comunidad de Graduados • Departamento de Ingeniería Industrial UTNBA
              </div>
            </div>
          </div>
          <a
            href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#B71234] hover:bg-[#9E0E2B] transition-colors"
          >
            Conocé el Departamento
          </a>
        </div>

      </div>
    </section>
  );
}
