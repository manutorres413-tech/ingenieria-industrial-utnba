import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function AdmissionSection() {
  const steps = [
    {
      step: "01",
      title: "Preinscripción por SIU-Guaraní",
      description: "Completás tus datos personales en el sistema web de la facultad y subís una foto de tu DNI y constancia de alumno regular o título secundario.",
      linkText: "Ir a SIU-Guaraní",
      linkUrl: "https://guarani.frba.utn.edu.ar/preinscripcion"
    },
    {
      step: "02",
      title: "Seminario Universitario",
      description: "Cursás tres módulos introductorios: Matemática, Física y Taller de Inicio a la Vida Universitaria (TIVU). Hay modalidades cuatrimestrales, intensivas de verano o examen libre.",
      linkText: "Ver fechas de cursada",
      linkUrl: "https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
    },
    {
      step: "03",
      title: "Inicio de clases",
      description: "Una vez acreditado el seminario, te anotás a las materias de primer año y elegís tu turno de cursada según tus horarios.",
      linkText: "Portal de Aspirantes",
      linkUrl: "https://guarani.frba.utn.edu.ar/autogestion/aspirantes"
    }
  ];

  return (
    <section id="ingreso" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F3336] tracking-tight">
            Pasos para el ingreso
          </h2>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            El ingreso a la UTN se realiza mediante el Seminario Universitario. No es un filtro eliminatorio, sino una instancia nivelatoria para acompañarte en el paso de la secundaria a la universidad.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {steps.map((st, i) => (
            <div 
              key={i}
              className="bg-[#F5F6F8] rounded-xl p-6 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B71234] text-white flex items-center justify-center font-bold text-sm mb-4">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-[#2F3336] mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {st.description}
                </p>
              </div>

              <a
                href={st.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#B71234] hover:text-[#9E0E2B] group"
              >
                <span>{st.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Direct Link Banner */}
        <div className="bg-[#2F3336] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold">
              ¿Querés consultar las fechas de inscripción y cronogramas?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              En la web oficial del departamento podés ver las convocatorias abiertas y el calendario académico.
            </p>
          </div>

          <a
            href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm bg-[#B71234] hover:bg-[#9E0E2B] text-white transition-colors flex items-center space-x-2"
          >
            <span>Ingeniería Industrial - UTN.BA</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
