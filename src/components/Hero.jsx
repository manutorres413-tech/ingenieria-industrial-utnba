import React from 'react';
import { ArrowDown, ExternalLink, Download, Clock, Award, GraduationCap, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-14 sm:py-20 bg-[#161A1D] text-white overflow-hidden text-center border-b border-gray-800">
      {/* Imagen de fondo difuminada */}
      <div 
        className="absolute inset-0 bg-center bg-cover scale-105 filter blur-xs sm:blur-sm opacity-25 pointer-events-none transition-all"
        style={{ backgroundImage: `url('./assets/planta-industrial-3d.webp')` }}
        aria-hidden="true"
      />
      {/* Capa de contraste y gradiente para garantizar máxima legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161A1D]/90 via-[#161A1D]/70 to-[#161A1D] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Etiqueta institucional con logo */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-gray-200 mb-5 backdrop-blur-xs">
          <span>Universidad Tecnológica Nacional • Facultad Regional Buenos Aires</span>
        </div>

        {/* Título Principal Directo y Limpio */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
          Ingeniería Industrial
        </h1>
        <span className="text-2xl sm:text-3xl font-bold text-[#FF4D6D] mt-2">
          UTN Buenos Aires
        </span>

        {/* Datos clave compactos y destacados */}
        <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg w-full">
          <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">5 Años</span>
            <span className="text-[11px] sm:text-xs text-gray-300 font-medium mt-0.5">Título de Grado</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-[#FF4D6D]">3° Año</span>
            <span className="text-[11px] sm:text-xs text-gray-300 font-medium mt-0.5">Título Intermedio</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Gratuita</span>
            <span className="text-[11px] sm:text-xs text-gray-300 font-medium mt-0.5">Pública Nacional</span>
          </div>
        </div>

        {/* Botones de acción centrados */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-lg">
          <a
            href="#plan-estudios"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-[#A31235] hover:bg-[#870E2B] shadow-lg shadow-[#A31235]/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>Ver Plan de Estudios</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
          >
            <span>Web Oficial UTN</span>
            <ExternalLink className="w-4 h-4 text-gray-300" />
          </a>

          <a
            href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4 text-[#FF4D6D]" />
            <span>PDF Oficial</span>
          </a>
        </div>

        {/* Nota directa para consultas en el stand o por mail */}
        <div className="mt-7 inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-300 bg-white/5 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/10 max-w-md">
          <MessageCircle className="w-4 h-4 text-[#FF4D6D] shrink-0" />
          <span>
            ¿Tenés dudas? Acercate al <strong>stand de la Expo</strong> o escribinos a{' '}
            <a href="mailto:industrial@frba.utn.edu.ar" className="underline hover:text-white text-gray-200">
              industrial@frba.utn.edu.ar
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
