import React from 'react';
import { ArrowDown, ExternalLink, Download, Clock, Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Title & Presentation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B71234]">
                Universidad Tecnológica Nacional • Facultad Regional Buenos Aires
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#2F3336] leading-tight">
                Ingeniería Industrial <br />
                <span className="text-[#B71234]">UTN Buenos Aires</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Plan de estudios oficial (Plan I23), asignaturas por nivel, correlatividades, título intermedio al 3° año y requisitos de ingreso para la carrera de grado.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#plan-estudios"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#B71234] hover:bg-[#9E0E2B] shadow-sm transition-all"
              >
                <span>Ver Plan de Estudios</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#2F3336] bg-gray-50 hover:bg-gray-100 border border-gray-300 transition-all"
              >
                <span>Web Oficial Industrial</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>

              <a
                href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
                download
                className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-gray-600 hover:text-[#B71234] transition-colors"
                title="Descargar PDF Oficial"
              >
                <Download className="w-4 h-4" />
                <span>PDF Oficial</span>
              </a>
            </div>

            {/* Simple Key Data Points */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase text-gray-500">Duración</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">5 Años</div>
                <div className="text-[11px] text-gray-500">Título de Grado</div>
              </div>

              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase text-gray-500">Intermedio</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">3° Año</div>
                <div className="text-[11px] text-gray-500">Analista Industrial</div>
              </div>

              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase text-gray-500">Horarios</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">Tarde y Noche</div>
                <div className="text-[11px] text-gray-500">Permite trabajar</div>
              </div>

              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase text-gray-500">Arancel</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">Gratuita</div>
                <div className="text-[11px] text-gray-500">Universidad Pública</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Illustration */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-[#23272A]">
              <img 
                src="./assets/planta-industrial-3d.png" 
                alt="Planta Industrial y Modelado de Procesos UTNBA"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-[#23272A] text-white flex items-center justify-between text-xs">
                <span className="text-gray-300 font-medium">Modelado de Procesos y Operaciones</span>
                <span className="text-[#B71234] font-bold">UTN.BA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
