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
              href="https://frba.utn.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A31235] bg-white hover:bg-[#FFF0F3] border border-[#FCD4DA] transition-colors"
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
                    ? 'bg-[#A31235] text-white'
                    : 'text-gray-600 hover:text-[#A31235] hover:bg-gray-100'
                }`}
              >
                <span>{num}° Año</span>
                {num === 3 && (
                  <span className={`text-[9px] px-1 rounded uppercase font-extrabold ${selectedNivel === 3 ? 'bg-white text-[#A31235]' : 'bg-[#FFF1F3] text-[#A31235]'}`}>
                    Intermedio
                  </span>
                )}
              </button>
            ))}

            <button
              onClick={() => setSelectedNivel('electivas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                selectedNivel === 'electivas'
                  ? 'bg-[#A31235] text-white'
                  : 'text-gray-600 hover:text-[#A31235] hover:bg-gray-100'
              }`}
            >
              <span>Electivas</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                selectedNivel === 'electivas'
                  ? 'bg-white text-[#A31235]'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {asignaturasElectivas.length}
              </span>
            </button>
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
                <div className="bg-[#FFF8F9] border-b border-[#FCD4DA] px-4 py-2.5 flex items-center space-x-2.5 text-left text-xs">
                  <Award className="w-4 h-4 text-[#A31235] shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div>
                      <strong className="text-[#A31235]">Título intermedio oficial (3° año):</strong>{' '}
                      <span className="text-[#231F20] font-bold">Técnico/a Universitario/a en Administración, Producción y Gestión Industrial</span>
                    </div>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-gray-500 text-[11px]">Acredita Bachiller Universitario en Ciencias de la Ingeniería</span>
                  </div>
                </div>
              )}

              {/* Hito 5° Año (Título Final de Grado) */}
              {level.nivel === 5 && (
                <div className="bg-emerald-50/80 border-b border-emerald-200 px-4 py-2.5 flex items-center space-x-2.5 text-left text-xs">
                  <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div>
                      <strong className="text-emerald-900">Título de Grado Final:</strong>{' '}
                      <span className="text-[#231F20] font-bold">Ingeniero/a Industrial</span>
                    </div>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-emerald-800 text-[11px]">5 años oficiales • Práctica Profesional Supervisada (PPS) y Proyecto Final</span>
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
                      className={`text-left p-3 rounded-xl border transition-all duration-150 flex flex-col justify-center min-h-[56px] sm:min-h-[62px] active:scale-98 group cursor-pointer ${
                        isIntegradora
                          ? 'border-[#FCD4DA] bg-[#FFF8F9] hover:border-[#A31235] hover:shadow-xs'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/70 hover:shadow-xs'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-[#231F20] leading-snug group-hover:text-[#A31235] transition-colors">
                        {mat.nombre}
                      </span>
                      {isIntegradora && (
                        <span className="text-[10px] text-[#A31235] font-bold mt-1">
                          ★ Integradora
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Nota de electivas en 5° año cuando se filtra específicamente por 5° año */}
              {level.nivel === 5 && selectedNivel === 5 && (
                <div className="p-3 bg-gray-50/80 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600">
                  <span>💡 En 5° año se cursan además <strong>10 hs/sem de Asignaturas Electivas</strong> a elección.</span>
                  <button
                    onClick={() => setSelectedNivel('electivas')}
                    className="inline-flex items-center text-xs font-bold text-[#A31235] hover:underline cursor-pointer shrink-0"
                  >
                    Ver las 12 materias electivas →
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Materias Electivas - Mostradas en 'Todos los Años' o en la pestaña 'Electivas' */}
        {(selectedNivel === 'all' || selectedNivel === 'electivas') && (
          <div className="mt-5 bg-white rounded-xl border border-gray-200 p-4 text-left shadow-2xs">
            <div className="pb-2 mb-3 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
                  Materias Electivas (5° Año)
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Asignaturas de especialización técnica y directiva a elección del estudiante (10 hs/sem anuales).
                </p>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {asignaturasElectivas.length} especialidades
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {asignaturasElectivas.map((el, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveMateria({
                    ...el,
                    tipo: 'Asignatura Electiva',
                    correlativasCursar: 'Según orientación y nivel de cursada',
                    correlativasRendir: 'Cursada regular'
                  })}
                  className="p-2.5 bg-gray-50/70 hover:bg-[#FFF8F9] border border-gray-200 hover:border-[#A31235] rounded-xl flex flex-col justify-center min-h-[52px] text-xs font-semibold text-[#2F3336] hover:text-[#A31235] text-left transition-all active:scale-98 cursor-pointer group shadow-2xs"
                >
                  <span>{el.nombre}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#A31235] mt-0.5">
                    {el.area}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

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
                {activeMateria.tipo.includes('Electiva') && (
                  <span className="inline-block text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200 mb-1.5">
                    Electiva • {activeMateria.area}
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

            {/* Pie del modal con enlace directo al temario de la materia y botón de cierre */}
            <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                {activeMateria.programaPdf ? (
                  <a
                    href={activeMateria.programaPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#A31235] hover:bg-[#850E2B] rounded-lg shadow-xs transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver Programa de la Materia (PDF)</span>
                    <ExternalLink className="w-3 h-3 opacity-90" />
                  </a>
                ) : (
                  <a
                    href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#A31235] hover:bg-[#850E2B] rounded-lg shadow-xs transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver en Plan Oficial (PDF)</span>
                    <ExternalLink className="w-3 h-3 opacity-90" />
                  </a>
                )}

                {activeMateria.programaPdf && (
                  <a
                    href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 px-2.5 py-2 text-[11px] font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Consultar cuadro completo de correlatividades y plan general"
                  >
                    <span>Plan General</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveMateria(null)}
                className="px-4 py-2 bg-[#231F20] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
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
