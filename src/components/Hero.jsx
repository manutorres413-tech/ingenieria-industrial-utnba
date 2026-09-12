import React from 'react';
import { ArrowDown, ExternalLink, Download, Clock, Award, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 bg-white border-b border-gray-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Title & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#2F3336] leading-tight">
              Ingeniería Industrial <br />
              <span className="text-[#B71234]">UTN Buenos Aires</span>
            </h1>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#plan-estudios"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#B71234] hover:bg-[#9E0E2B] transition-colors"
              >
                <span>Ver Plan de Estudios</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#2F3336] bg-gray-50 hover:bg-gray-100 border border-gray-300 transition-colors"
              >
                <span>Web Oficial Industrial</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>

              <a
                href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
                download
                className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-gray-600 hover:text-[#B71234] transition-colors"
                title="Descargar PDF Oficial"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Oficial</span>
              </a>
            </div>

            {/* Key Data Points */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase text-gray-500">Duración</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">5 Años</div>
                <div className="text-[10px] text-gray-500">Título de Grado</div>
              </div>

              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase text-gray-500">Intermedio</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">3° Año</div>
                <div className="text-[10px] text-gray-500">Analista Industrial</div>
              </div>

              <div className="bg-[#F5F6F8] p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-1.5 text-[#B71234] mb-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase text-gray-500">Arancel</span>
                </div>
                <div className="text-sm font-bold text-[#2F3336]">Gratuita</div>
                <div className="text-[10px] text-gray-500">Pública nacional</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Image */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-[#23272A]">
              <img 
                src="./assets/planta-industrial-3d.png" 
                alt="Planta Industrial y Modelado de Procesos UTNBA"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
