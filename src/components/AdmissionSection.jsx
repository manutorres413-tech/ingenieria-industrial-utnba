import React from 'react';
import { Calendar, UserCheck, BookOpenCheck, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

export default function AdmissionSection() {
  const steps = [
    {
      step: "01",
      title: "Preinscripción Online",
      description: "Completá el formulario digital en el sistema SIU-Guaraní de la UTN Buenos Aires y cargá tu documentación escolar.",
      linkText: "Ir a SIU-Guaraní",
      linkUrl: "https://guarani.frba.utn.edu.ar/preinscripcion"
    },
    {
      step: "02",
      title: "Seminario Universitario",
      description: "Cursá o rendí libre los tres módulos nivelatorios obligatorios: Matemática, Física y el Taller de Inicio a la Vida Universitaria (TIVU).",
      linkText: "Ver Modalidades",
      linkUrl: "https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
    },
    {
      step: "03",
      title: "Comenzá las Clases",
      description: "Elegí tu turno de cursada (mañana, tarde o noche en Campus Villa Lugano) y empezá tu carrera como futuro/a Ingeniero/a Industrial.",
      linkText: "Portal Aspirantes",
      linkUrl: "https://guarani.frba.utn.edu.ar/autogestion/aspirantes"
    }
  ];

  return (
    <section id="ingreso" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF1F3] text-[#B71234] border border-[#FCD4DA] mb-3">
            Camino a la facultad
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            ¿Cómo ingresar a <span className="text-[#B71234]">Ingeniería Industrial</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            El ingreso se realiza mediante el Seminario Universitario. No es eliminatorio: es una instancia formativa y nivelatoria para acompañarte en la transición desde la secundaria.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((st, i) => (
            <div 
              key={i}
              className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between relative hover:border-[#B71234]/40 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#B71234] text-white flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                  {st.step}
                </div>
                <h3 className="text-xl font-bold text-[#2F3336] mb-3">
                  {st.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {st.description}
                </p>
              </div>

              <a
                href={st.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#B71234] hover:text-[#9E0E2B] group"
              >
                <span>{st.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Callout Box with direct link requested by user */}
        <div className="bg-gradient-to-r from-[#2F3336] to-[#1E2124] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#B71234] font-bold mb-1">
              Portal Oficial de la Especialidad
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              ¿Querés consultar las fechas de inscripción y requisitos vigentes?
            </h4>
            <p className="text-sm text-gray-300 mt-1 max-w-2xl">
              Visitá la sección dedicada de Ingeniería Industrial en el sitio oficial de la UTN Facultad Regional Buenos Aires.
            </p>
          </div>

          <a
            href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#B71234] hover:bg-[#9E0E2B] text-white shadow-md transition-all flex items-center space-x-2 transform hover:-translate-y-0.5"
          >
            <span>Ingeniería Industrial - UTN.BA</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
