import React from 'react';
import { BookOpen, ArrowRight, Mail, FileText } from 'lucide-react';

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
        
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
          Ingeniería Industrial
        </h1>
        <span className="text-2xl sm:text-3xl font-bold text-[#FF4D6D] mt-2">
          UTN Buenos Aires
        </span>

        {/* Frase directa para aspirantes */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
          Vas a aprender a mejorar procesos, coordinar equipos y tomar decisiones con datos y tecnología en cualquier tipo de organización.
        </p>

        {/* Línea de tiempo de evolución del estudio (5 Años) con hito en 3° año */}
        <div className="mt-8 w-full max-w-xl bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10">
          <div className="flex items-center justify-between text-xs text-gray-300 font-semibold mb-5 px-1">
            <span>Evolución de la Carrera</span>
            <span className="text-[#FF4D6D] font-bold">5 Años de Cursada</span>
          </div>

          <div className="relative flex items-center justify-between px-2 sm:px-4">
            {/* Línea conectora base */}
            <div className="absolute left-6 right-6 top-4 sm:top-5 h-0.5 bg-white/20 -z-0" />
            {/* Línea de progreso hasta el 3° año */}
            <div className="absolute left-6 w-[52%] top-4 sm:top-5 h-0.5 bg-gradient-to-r from-white/50 to-[#FF4D6D] -z-0" />

            {/* 1° Año */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A1E22] border-2 border-white/30 text-white flex items-center justify-center font-black text-xs sm:text-sm">
                1°
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1.5">Bases</span>
            </div>

            {/* 2° Año */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A1E22] border-2 border-white/30 text-white flex items-center justify-center font-black text-xs sm:text-sm">
                2°
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1.5">Ciencias</span>
            </div>

            {/* 3° Año - TÍTULO INTERMEDIO DESTACADO */}
            <div className="flex flex-col items-center relative z-10">
              <div className="relative">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#A31235] border-2 border-[#FF4D6D] text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-lg shadow-[#A31235]/60 ring-4 ring-[#FF4D6D]/20 animate-pulse">
                  3°
                </div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold uppercase bg-[#FF4D6D] text-white px-2 py-0.5 rounded-full shadow-xs">
                  Intermedio
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#FF4D6D] font-bold mt-1 text-center whitespace-nowrap">
                Técnico/a Univ.
              </span>
            </div>

            {/* 4° Año */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A1E22] border-2 border-white/30 text-white flex items-center justify-center font-black text-xs sm:text-sm">
                4°
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1.5">Gestión</span>
            </div>

            {/* 5° Año - TÍTULO DE GRADO */}
            <div className="flex flex-col items-center relative z-10">
              <div className="relative">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-emerald-600 border-2 border-emerald-400 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/50 ring-4 ring-emerald-400/20">
                  5°
                </div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold uppercase bg-emerald-500 text-emerald-950 px-2 py-0.5 rounded-full shadow-xs">
                  ¡Te Recibís!
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-bold mt-1 text-center whitespace-nowrap">
                Ingeniero/a
              </span>
            </div>
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-white/10 text-[11px] text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
            <span>★ Título intermedio (3°): <strong className="text-white">Técnico/a Universitario/a</strong></span>
            <span>🎓 Título de grado (5°): <strong className="text-emerald-400">Ingeniero/a Industrial</strong></span>
          </div>
        </div>

        {/* Dos acciones principales elegidas: Ver Plan y Cómo Ingresar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-lg">
          <a
            href="#plan-estudios"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#A31235] hover:bg-[#870E2B] shadow-lg shadow-[#A31235]/40 transition-all transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Ver Plan de Estudios</span>
          </a>

          <a
            href="#ingreso"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
          >
            <span>Cómo Ingresar</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </a>
        </div>

        {/* Enlace sutil al PDF oficial */}
        <div className="mt-3">
          <a
            href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF4D6D]" />
            <span>Descargar Plan Oficial I23 completo (PDF)</span>
          </a>
        </div>

        {/* Contacto directo por mail */}
        <div className="mt-6 inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-300 bg-white/5 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/10">
          <Mail className="w-4 h-4 text-[#FF4D6D] shrink-0" />
          <span>
            ¿Dudas sobre la carrera? Escribinos a{' '}
            <a href="mailto:info@industrial.frba.utn.edu.ar" className="font-semibold text-white underline hover:text-[#FF4D6D] transition-colors">
              info@industrial.frba.utn.edu.ar
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
