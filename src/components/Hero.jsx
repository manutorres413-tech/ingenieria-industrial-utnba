import React from 'react';
import { ArrowDown, ExternalLink, Download, Sparkles, CheckCircle2, Clock, Briefcase, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FB] to-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expo Carreras Ribbon */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#FFF1F3] text-[#B71234] border border-[#FCD4DA]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expo Carreras UTN Buenos Aires</span>
          </div>
          <span className="text-xs font-semibold text-gray-500 hidden sm:inline">•</span>
          <span className="text-xs text-gray-600 font-medium">
            Departamento de Ingeniería Industrial (Plan I23)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500">
                INDUSTRIALITO • EL SIMULADOR DE INGENIERÍA INDUSTRIAL
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
                <span className="block text-[#2F3336]">Tu fábrica.</span>
                <span className="block text-[#B71234]">Tus decisiones.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-normal text-[#4A5055] max-w-2xl leading-relaxed">
              Diseñá y gerenciá una fábrica en 10 minutos. Descubrí cómo la <strong className="text-[#2F3336] font-semibold">Ingeniería Industrial en la UTN.BA</strong> articula personas, tecnología, logística y negocios para transformar la matriz productiva del país.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#plan-estudios"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm sm:text-base font-bold text-white bg-[#B71234] hover:bg-[#9E0E2B] shadow-md shadow-[#B71234]/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explorar Plan Escalonado</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold text-[#2F3336] bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all"
              >
                <span>Web Oficial Industrial</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>

              <a
                href="/PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
                download
                className="inline-flex items-center space-x-1.5 px-3 py-3 rounded-lg text-xs sm:text-sm font-medium text-gray-600 hover:text-[#B71234] transition-colors"
                title="Descargar PDF Oficial"
              >
                <Download className="w-4 h-4" />
                <span>PDF Plan I23</span>
              </a>
            </div>

            {/* Quick Key Highlights Grid */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-2 text-[#B71234] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase text-gray-500">Duración</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2F3336]">5 Años</div>
                <div className="text-[11px] text-gray-500">Carrera de grado</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-2 text-[#B71234] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase text-gray-500">Intermedio</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2F3336]">3° Año</div>
                <div className="text-[11px] text-gray-500">Analista Industrial</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-2 text-[#B71234] mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase text-gray-500">Horarios</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2F3336]">Noche y Tarde</div>
                <div className="text-[11px] text-gray-500">Para trabajar y cursar</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-2 text-[#B71234] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase text-gray-500">Empleabilidad</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2F3336]">+95%</div>
                <div className="text-[11px] text-gray-500">Inserción laboral rápida</div>
              </div>
            </div>

          </div>

          {/* Right Column: Poster 3D Factory Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#23272A] border-4 border-white">
              
              {/* Badge Over Image */}
              <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-white text-xs font-semibold">Simulador en el Stand</span>
              </div>

              <img 
                src="/assets/industrialito-factory.png" 
                alt="Planta Industrial 3D y Avatares Ingenieros de Industrialito"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />

              <div className="p-4 bg-[#23272A] text-white flex items-center justify-between border-t border-white/10">
                <div>
                  <h3 className="text-sm font-bold tracking-wide">¿Probaste Industrialito?</h3>
                  <p className="text-xs text-gray-400">Tomá decisiones de producción en tiempo real</p>
                </div>
                <a
                  href="#industrialito"
                  className="px-3 py-1.5 bg-[#B71234] hover:bg-[#9E0E2B] text-white text-xs font-bold rounded transition-colors"
                >
                  Conocer más
                </a>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200">
              <div className="text-xs font-bold text-[#B71234]">Plan I23 Actualizado</div>
              <div className="text-[11px] text-gray-600">Resolución y ordenanza oficial vigente</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
