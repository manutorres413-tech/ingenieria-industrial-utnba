import React, { useState } from 'react';
import { planEstudios, asignaturasElectivas } from '../data/planEstudios';
import { 
  Download, 
  Search, 
  ExternalLink, 
  Award, 
  GraduationCap, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  X,
  BookOpen
} from 'lucide-react';

export default function SteppedStudyPlan() {
  const [selectedNivel, setSelectedNivel] = useState('all'); // 'all' or 1, 2, 3, 4, 5
  const [expandedCodigo, setExpandedCodigo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (codigo) => {
    setExpandedCodigo(expandedCodigo === codigo ? null : codigo);
  };

  // Filter subjects based on selected tab and search
  const filteredPlan = planEstudios.map(level => {
    if (selectedNivel !== 'all' && level.nivel !== Number(selectedNivel)) {
      return null;
    }
    const filteredMaterias = level.materias.filter(m => 
      m.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.codigo.includes(searchQuery) ||
      m.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...level,
      materias: filteredMaterias
    };
  }).filter(Boolean);

  const getTipoStyle = (tipo) => {
    if (tipo.includes('Integradora')) {
      return {
        badge: 'bg-[#FFF1F3] text-[#B71234] border-[#FCD4DA]',
        cardBorder: 'hover:border-[#B71234]',
        dot: 'bg-[#B71234]'
      };
    }
    if (tipo.includes('Ciencias Básicas')) {
      return {
        badge: 'bg-blue-50 text-blue-700 border-blue-200',
        cardBorder: 'hover:border-blue-400',
        dot: 'bg-blue-500'
      };
    }
    if (tipo.includes('Gestión') || tipo.includes('Economía')) {
      return {
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        cardBorder: 'hover:border-emerald-400',
        dot: 'bg-emerald-500'
      };
    }
    return {
      badge: 'bg-gray-100 text-gray-700 border-gray-200',
      cardBorder: 'hover:border-gray-400',
      dot: 'bg-gray-400'
    };
  };

  return (
    <section id="plan-estudios" className="py-12 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-6 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide bg-[#FFF1F3] text-[#B71234] border border-[#FCD4DA] mb-2">
            Plan I23 • Ordenanza N° 1909/23
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2F3336] tracking-tight">
            Plan de Estudios <span className="text-[#B71234]">Escalonado</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Estructurado en 5 niveles. Tocá cualquier materia para ver sus contenidos, carga horaria y correlativas.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2.5 no-print">
            <a
              href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
              download
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2F3336] bg-white hover:bg-gray-100 border border-gray-300 shadow-2xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#B71234]" />
              <span>Descargar PDF Oficial</span>
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

        {/* Year Filter Tabs */}
        <div className="mb-4 no-print overflow-x-auto pb-1 scrollbar-none">
          <div className="bg-white p-1.5 rounded-xl border border-gray-200 inline-flex items-center gap-1 sm:gap-1.5 min-w-full sm:min-w-0 justify-start sm:justify-center">
            <button
              onClick={() => setSelectedNivel('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedNivel === 'all'
                  ? 'bg-[#2F3336] text-white shadow-xs'
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
                    ? 'bg-[#B71234] text-white shadow-xs'
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

        {/* Search Bar */}
        <div className="mb-6 flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-gray-200 no-print">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar materia (ej: Datos, Costos, Física)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#B71234]"
            />
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[11px] text-gray-500 shrink-0">
            <span className="font-semibold text-gray-700">Tipos:</span>
            <span className="px-1.5 py-0.5 rounded bg-[#FFF1F3] text-[#B71234] font-bold border border-[#FCD4DA]">
              ★ Integradora
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Básica
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Gestión
            </span>
          </div>
        </div>

        {/* The Stepped Levels List */}
        <div className="space-y-6">
          {filteredPlan.map((level) => (
            <div 
              key={level.nivel} 
              className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden"
            >
              
              {/* Compact Level Bar */}
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#2F3336] text-white flex items-center justify-center font-black text-xs">
                    {level.nivel}°
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#2F3336]">
                      {level.anio}: {level.titulo}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200 font-semibold">
                    {level.horasSemanales} hs/sem
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200 font-semibold">
                    {level.materias.length} materias
                  </span>
                </div>
              </div>

              {/* Milestone Banner (Level 3 Intermediate Degree) */}
              {level.hitoTituloIntermedio && (
                <div className="bg-[#FFF8F9] border-b border-[#FCD4DA] px-4 py-2.5 flex items-center space-x-2.5 text-left">
                  <Award className="w-5 h-5 text-[#B71234] shrink-0" />
                  <div className="text-xs">
                    <strong className="text-[#B71234] block sm:inline">Título Intermedio (3° Año):</strong>{' '}
                    <span className="text-gray-700">{level.hitoTituloIntermedio.nombre}</span>
                  </div>
                </div>
              )}

              {/* Milestone Banner (Level 5 Final Project) */}
              {level.nivel === 5 && (
                <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 flex items-center space-x-2.5 text-left">
                  <GraduationCap className="w-5 h-5 text-amber-700 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-amber-900 block sm:inline">Tramo Final de Graduación:</strong>{' '}
                    <span className="text-amber-800">Práctica Profesional Supervisada (PPS - 200 hs) + Proyecto Final Integrador</span>
                  </div>
                </div>
              )}

              {/* COMPACT SQUARES GRID */}
              <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                {level.materias.map((mat) => {
                  const isExpanded = expandedCodigo === mat.codigo;
                  const isIntegradora = mat.tipo.includes('Integradora');
                  const style = getTipoStyle(mat.tipo);

                  return (
                    <div
                      key={mat.codigo}
                      className={`transition-all duration-200 rounded-xl border text-left flex flex-col justify-between ${
                        isExpanded
                          ? 'col-span-2 sm:col-span-3 lg:col-span-4 bg-white border-[#B71234] shadow-md p-4 sm:p-5 ring-1 ring-[#B71234]/20'
                          : `bg-white p-3 cursor-pointer border-gray-200 shadow-2xs hover:shadow-sm ${style.cardBorder} min-h-[92px]`
                      }`}
                      onClick={() => !isExpanded && toggleExpand(mat.codigo)}
                    >
                      {/* COMPACT VIEW (SQUARE TILE) */}
                      {!isExpanded ? (
                        <div className="flex flex-col justify-between h-full">
                          {/* Top row */}
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="text-[10px] font-mono text-gray-400 font-semibold">
                              {mat.codigo}
                            </span>
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                              {mat.horas}
                            </span>
                          </div>

                          {/* Subject Name */}
                          <h4 className="text-xs sm:text-sm font-bold text-[#2F3336] leading-snug line-clamp-2 mb-2">
                            {mat.nombre}
                          </h4>

                          {/* Bottom info */}
                          <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[10px]">
                            <span className="truncate text-gray-500 font-medium">
                              {isIntegradora ? '★ Integradora' : mat.tipo}
                            </span>
                            <span className="text-[#B71234] font-bold text-xs ml-1 shrink-0">
                              +
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* EXPANDED VIEW (DETAILED CARD) */
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2.5">
                            <div>
                              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                                  Código {mat.codigo}
                                </span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${style.badge}`}>
                                  {mat.tipo}
                                </span>
                                <span className="text-[10px] text-gray-500">
                                  • {mat.regimen}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-[#2F3336]">
                                {mat.nombre}
                              </h4>
                            </div>

                            <div className="flex items-center space-x-2 shrink-0">
                              <span className="text-xs font-bold text-[#2F3336] bg-gray-100 px-2 py-1 rounded">
                                {mat.horas}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpand(mat.codigo);
                                }}
                                className="p-1 rounded-lg text-gray-400 hover:text-[#B71234] hover:bg-gray-100 transition-colors"
                                title="Cerrar detalle"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {mat.descripcion}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs">
                            <div className="bg-gray-50 p-2.5 rounded-lg">
                              <strong className="text-gray-700 block mb-0.5">Para cursar necesitás:</strong>
                              <span className="text-gray-600">{mat.correlativasCursar}</span>
                            </div>
                            <div className="bg-gray-50 p-2.5 rounded-lg">
                              <strong className="text-gray-700 block mb-0.5">Para rendir final necesitás:</strong>
                              <span className="text-gray-600">{mat.correlativasRendir}</span>
                            </div>
                          </div>

                          <div className="text-right pt-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(mat.codigo);
                              }}
                              className="text-xs font-semibold text-[#B71234] hover:underline"
                            >
                              Cerrar detalle ▲
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Asignaturas Electivas Compact Squares */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-2xs text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-gray-200 gap-1">
            <h3 className="text-base sm:text-lg font-bold text-[#2F3336]">
              Materias Electivas del Último Tramo
            </h3>
            <span className="text-xs text-gray-500">
              Se cursan 10 horas anuales a elección
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {asignaturasElectivas.map((el, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-gray-50 hover:bg-[#FFF1F3] border border-gray-200 rounded-lg transition-colors flex flex-col justify-between min-h-[72px]"
              >
                <div>
                  <span className="text-[9px] font-bold text-gray-400 block mb-0.5">
                    {el.area}
                  </span>
                  <div className="text-xs font-bold text-[#2F3336] leading-snug">
                    {el.nombre}
                  </div>
                </div>
                <div className="text-[10px] text-[#B71234] font-semibold mt-1.5">
                  {el.horas}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
