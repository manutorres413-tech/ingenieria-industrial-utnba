import React, { useState } from 'react';
import { planEstudios, asignaturasElectivas } from '../data/planEstudios';
import { Download, ExternalLink, Award, GraduationCap, X, FileText } from 'lucide-react';

export default function SteppedStudyPlan() {
  const [selectedNivel, setSelectedNivel] = useState('all');
  const [activeMateria, setActiveMateria] = useState(null);

  const filteredPlan = planEstudios.filter(level => 
    selectedNivel === 'all' || level.nivel === Number(selectedNivel)
  );

  return (
    <section id="plan-estudios" className="py-8 sm:py-10 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-5 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2F3336] tracking-tight">
            Plan de Estudios
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2 no-print">
            <a
              href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#231F20] bg-white hover:bg-gray-100 border border-gray-300 shadow-2xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#A31235]" />
              <span>Plan Oficial (PDF)</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
            <a
              href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#B71234] bg-white hover:bg-[#FFF1F3] border border-[#FCD4DA] transition-colors"
            >
              <span>Web Oficial UTN.BA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filtros rápidos por año */}
        <div className="mb-5 no-print overflow-x-auto pb-1 scrollbar-none">
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

        {/* Cuadrados por Año y Materias */}
        <div className="space-y-4">
          {filteredPlan.map((level) => (
            <div 
              key={level.nivel} 
              className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden"
            >
              {/* Encabezado del Año: Limpio, sin números duplicados ni badges negros */}
              <div className="px-4 py-2.5 bg-gray-50/90 border-b border-gray-200 flex items-center justify-between text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#2F3336]">
                  {level.anio}
                </h3>
                <span className="text-xs text-gray-400 font-medium">
                  {level.materias.length} materias
                </span>
              </div>

              {/* Hito 3° Año (Título Intermedio) */}
              {level.hitoTituloIntermedio && (
                <div className="bg-[#FFF8F9] border-b border-[#FCD4DA] px-4 py-2 flex items-center space-x-2 text-left text-xs">
                  <Award className="w-4 h-4 text-[#B71234] shrink-0" />
                  <div>
                    <strong className="text-[#B71234]">Título intermedio al finalizar 3° año:</strong>{' '}
                    <span className="text-gray-700">Analista Industrial / Bachiller Universitario</span>
                  </div>
                </div>
              )}

              {/* Hito 5° Año (Graduación) */}
              {level.nivel === 5 && (
                <div className="bg-amber-50/80 border-b border-amber-200 px-4 py-2 flex items-center space-x-2 text-left text-xs">
                  <GraduationCap className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <strong className="text-amber-900">Graduación:</strong>{' '}
                    <span className="text-amber-800">Práctica Profesional Supervisada (PPS) y Proyecto Final</span>
                  </div>
                </div>
              )}

              {/* Cuadrícula compacta de materias */}
              <div className="p-3 sm:p-3.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5">
                {level.materias.map((mat) => {
                  const isIntegradora = mat.tipo.includes('Integradora');

                  return (
                    <button
                      key={mat.codigo}
                      onClick={() => setActiveMateria(mat)}
                      className={`text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-150 flex flex-col justify-between min-h-[70px] sm:min-h-[78px] active:scale-98 group cursor-pointer ${
                        isIntegradora
                          ? 'border-[#FCD4DA] bg-[#FFF9FA] hover:border-[#B71234] hover:shadow-xs'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/70 hover:shadow-xs'
                      }`}
                    >
                      {/* Nombre de la materia bien visible y legible */}
                      <span className="text-xs sm:text-sm font-semibold text-[#2F3336] leading-snug group-hover:text-[#B71234] transition-colors">
                        {mat.nombre}
                      </span>

                      {/* Pie de la tarjeta */}
                      <div className="flex items-center justify-between w-full pt-1.5 mt-1 border-t border-gray-100 text-[10px]">
                        {isIntegradora ? (
                          <span className="font-bold text-[#B71234]">
                            ★ Integradora
                          </span>
                        ) : (
                          <span className="text-gray-400 truncate">
                            Ver detalle
                          </span>
                        )}
                        <span className="text-gray-300 group-hover:text-[#B71234] font-bold text-xs shrink-0 ml-1 transition-colors">
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

        {/* Materias Electivas - Diseño compacto en cuadrados */}
        <div className="mt-5 bg-white rounded-xl border border-gray-200 p-4 text-left">
          <div className="pb-2 mb-3 border-b border-gray-100">
            <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
              Materias Electivas
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {asignaturasElectivas.map((el, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-gray-50/70 border border-gray-200 rounded-lg flex items-center min-h-[50px] text-xs font-semibold text-[#2F3336] leading-snug"
              >
                {el.nombre}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal para ver detalle de la materia */}
      {activeMateria && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveMateria(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-gray-200 text-left space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del modal */}
            <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                {activeMateria.tipo.includes('Integradora') && (
                  <span className="inline-block text-[10px] font-bold text-[#B71234] bg-[#FFF1F3] px-2 py-0.5 rounded-md border border-[#FCD4DA] mb-1.5">
                    Materia Integradora
                  </span>
                )}
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

            {/* Qué se aprende */}
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                De qué trata la materia
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeMateria.descripcion}
              </p>
            </div>

            {/* Correlatividades explicadas de forma directa */}
            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-gray-800 block mb-0.5">Para cursarla necesitás tener:</strong>
                <span className="text-gray-600">
                  {activeMateria.correlativasCursar && activeMateria.correlativasCursar !== '-'
                    ? activeMateria.correlativasCursar
                    : 'No requiere materias previas (se puede cursar directamente)'}
                </span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-gray-800 block mb-0.5">Para rendir el examen final necesitás:</strong>
                <span className="text-gray-600">
                  {activeMateria.correlativasRendir && activeMateria.correlativasRendir !== '-'
                    ? activeMateria.correlativasRendir
                    : 'No requiere finales previos'}
                </span>
              </div>
            </div>

            {/* Pie del modal */}
            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setActiveMateria(null)}
                className="px-4 py-2 bg-[#2F3336] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors"
              >
                Entendido
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
