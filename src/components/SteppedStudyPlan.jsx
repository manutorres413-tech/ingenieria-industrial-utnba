import React, { useState } from 'react';
import { planEstudios, asignaturasElectivas } from '../data/planEstudios';
import { Download, ExternalLink, Award, GraduationCap, X } from 'lucide-react';

export default function SteppedStudyPlan() {
  const [selectedNivel, setSelectedNivel] = useState('all');
  const [activeMateria, setActiveMateria] = useState(null);

  const filteredPlan = planEstudios.filter(level => 
    selectedNivel === 'all' || level.nivel === Number(selectedNivel)
  );

  return (
    <section id="plan-estudios" className="py-10 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2F3336] tracking-tight">
            Plan de Estudios
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            Tocá cualquier materia para ver sus contenidos y correlatividades.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2 no-print">
            <a
              href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
              download
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2F3336] bg-white hover:bg-gray-100 border border-gray-300 shadow-2xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#B71234]" />
              <span>Descargar PDF</span>
            </a>
            <a
              href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#B71234] bg-white hover:bg-[#FFF1F3] border border-[#FCD4DA] transition-colors"
            >
              <span>Web Oficial UTN.BA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Year Filter Tabs */}
        <div className="mb-6 no-print overflow-x-auto pb-1 scrollbar-none">
          <div className="bg-white p-1 rounded-xl border border-gray-200 inline-flex items-center gap-1 min-w-full sm:min-w-0 justify-start sm:justify-center">
            <button
              onClick={() => setSelectedNivel('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedNivel === 'all'
                  ? 'bg-[#2F3336] text-white'
                  : 'text-gray-600 hover:text-[#2F3336] hover:bg-gray-100'
              }`}
            >
              Todos los Años
            </button>

            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                onClick={() => setSelectedNivel(num)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1 ${
                  selectedNivel === num
                    ? 'bg-[#B71234] text-white'
                    : 'text-gray-600 hover:text-[#B71234] hover:bg-gray-100'
                }`}
              >
                <span>{num}° Año</span>
                {num === 3 && (
                  <span className={`text-[9px] px-1 rounded uppercase font-extrabold ${selectedNivel === 3 ? 'bg-white text-[#B71234]' : 'bg-[#FFF1F3] text-[#B71234]'}`}>
                    Intermedio
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Years & Subjects */}
        <div className="space-y-5">
          {filteredPlan.map((level) => (
            <div 
              key={level.nivel} 
              className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden"
            >
              {/* Clean Year Bar */}
              <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-left">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-[#2F3336] text-white flex items-center justify-center font-bold text-xs">
                    {level.nivel}°
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
                    {level.anio}
                  </h3>
                </div>

                <div className="text-xs text-gray-500 font-medium">
                  {level.horasSemanales} hs/sem • {level.materias.length} materias
                </div>
              </div>

              {/* Hito 3° Año */}
              {level.hitoTituloIntermedio && (
                <div className="bg-[#FFF8F9] border-b border-[#FCD4DA] px-4 py-2 flex items-center space-x-2 text-left text-xs">
                  <Award className="w-4 h-4 text-[#B71234] shrink-0" />
                  <div>
                    <strong className="text-[#B71234]">Título Intermedio (3° Año):</strong>{' '}
                    <span className="text-gray-700">Analista Industrial / Bachiller Universitario</span>
                  </div>
                </div>
              )}

              {/* Hito 5° Año */}
              {level.nivel === 5 && (
                <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center space-x-2 text-left text-xs">
                  <GraduationCap className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <strong className="text-amber-900">Graduación:</strong>{' '}
                    <span className="text-amber-800">Práctica Profesional Supervisada (PPS - 200 hs) + Proyecto Final</span>
                  </div>
                </div>
              )}

              {/* CUADRADOS COMPACTOS */}
              <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5">
                {level.materias.map((mat) => {
                  const isIntegradora = mat.tipo.includes('Integradora');

                  return (
                    <button
                      key={mat.codigo}
                      onClick={() => setActiveMateria(mat)}
                      className={`text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-150 flex flex-col justify-between h-24 sm:h-28 active:scale-98 ${
                        isIntegradora
                          ? 'border-[#FCD4DA] bg-[#FFFDFE] hover:border-[#B71234]'
                          : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-xs'
                      }`}
                    >
                      {/* Top Code & Hours */}
                      <div className="flex items-center justify-between w-full text-[10px] text-gray-500">
                        <span className="font-mono text-gray-400">{mat.codigo}</span>
                        <span className="font-semibold">{mat.horas}</span>
                      </div>

                      {/* Subject Name */}
                      <div className="text-xs sm:text-sm font-bold text-[#2F3336] leading-snug line-clamp-2 my-1">
                        {mat.nombre}
                      </div>

                      {/* Bottom Category */}
                      <div className="flex items-center justify-between w-full pt-1 border-t border-gray-100 text-[10px]">
                        <span className="truncate text-gray-400">
                          {isIntegradora ? '★ Integradora' : mat.tipo}
                        </span>
                        <span className="text-[#B71234] font-bold text-xs shrink-0 ml-1">
                          +
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Electivas */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4 text-left">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
            <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
              Materias Electivas
            </h3>
            <span className="text-xs text-gray-500">
              10 hs anuales a elección
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {asignaturasElectivas.map((el, i) => (
              <div 
                key={i} 
                className="p-2 bg-gray-50 border border-gray-200 rounded-lg flex flex-col justify-between h-18 text-xs"
              >
                <div className="font-bold text-[#2F3336] line-clamp-2 leading-tight">
                  {el.nombre}
                </div>
                <div className="text-[10px] text-[#B71234] font-semibold mt-1">
                  {el.horas}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* POPUP MODAL PARA DETALLE DE MATERIA */}
      {activeMateria && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveMateria(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-gray-200 text-left space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                  <span className="font-mono font-bold bg-gray-100 px-1.5 py-0.5 rounded">
                    Código {activeMateria.codigo}
                  </span>
                  <span>• {activeMateria.horas}</span>
                  <span>• {activeMateria.regimen}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#2F3336]">
                  {activeMateria.nombre}
                </h4>
              </div>

              <button
                onClick={() => setActiveMateria(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Contenidos principales
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeMateria.descripcion}
              </p>
            </div>

            {/* Correlatividades */}
            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-gray-700 block mb-0.5">Para cursar necesitás:</strong>
                <span className="text-gray-600">{activeMateria.correlativasCursar}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-gray-700 block mb-0.5">Para rendir examen final necesitás:</strong>
                <span className="text-gray-600">{activeMateria.correlativasRendir}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setActiveMateria(null)}
                className="px-4 py-2 bg-[#2F3336] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
