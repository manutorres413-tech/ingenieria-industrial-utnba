import React, { useState } from 'react';
import { planEstudios, asignaturasElectivas } from '../data/planEstudios';
import { 
  CheckCircle2, 
  Layers, 
  ChevronRight, 
  ChevronDown, 
  Download, 
  GraduationCap, 
  Clock, 
  Search, 
  Filter, 
  FileText,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';

export default function SteppedStudyPlan() {
  const [selectedNivel, setSelectedNivel] = useState('all'); // 'all' or 1, 2, 3, 4, 5
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (codigo) => {
    setExpandedSubject(expandedSubject === codigo ? null : codigo);
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

  const getTipoBadgeColor = (tipo) => {
    if (tipo.includes('Integradora')) {
      return 'bg-[#FFF1F3] text-[#B71234] border-[#FCD4DA] font-bold';
    }
    if (tipo.includes('Ciencias Básicas')) {
      return 'bg-blue-50 text-blue-700 border-blue-200';
    }
    if (tipo.includes('Gestión') || tipo.includes('Economía')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (tipo.includes('Tecnología')) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section id="plan-estudios" className="py-16 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF1F3] text-[#B71234] border border-[#FCD4DA] mb-3">
            Plan I23 • Ord. 1909/23
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2F3336] tracking-tight">
            Plan de Estudios <span className="text-[#B71234]">Escalonado</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Estructurado en 5 niveles formativos progresivos. Diseñado para acompañarte paso a paso desde las ciencias básicas hasta la dirección estratégica de empresas y operaciones industriales.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 no-print">
            <a
              href="/PLAN_I23_Ingenieria_Industrial_UTNBA.pdf"
              download
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#2F3336] bg-white hover:bg-gray-100 border border-gray-300 shadow-2xs transition-colors"
            >
              <Download className="w-4 h-4 text-[#B71234]" />
              <span>Descargar PDF Oficial con Correlatividades</span>
            </a>
            <a
              href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#B71234] bg-white hover:bg-[#FFF1F3] border border-[#FCD4DA] transition-colors"
            >
              <span>Ver en frba.utn.edu.ar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Stepper Navigation Tabs (Escalones) */}
        <div className="mb-8 no-print">
          <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-xs flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            
            <button
              onClick={() => setSelectedNivel('all')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                selectedNivel === 'all'
                  ? 'bg-[#2F3336] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#2F3336] hover:bg-gray-100'
              }`}
            >
              Vista Completa (1° a 5°)
            </button>

            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                onClick={() => setSelectedNivel(num)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 ${
                  selectedNivel === num
                    ? 'bg-[#B71234] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#B71234] hover:bg-gray-100'
                }`}
              >
                <span>{num}° Nivel</span>
                {num === 3 && (
                  <span className={`text-[10px] px-1 rounded uppercase font-extrabold ${selectedNivel === 3 ? 'bg-white text-[#B71234]' : 'bg-[#FFF1F3] text-[#B71234]'}`}>
                    Intermedio
                  </span>
                )}
                {num === 5 && (
                  <span className={`text-[10px] px-1 rounded uppercase font-extrabold ${selectedNivel === 5 ? 'bg-white text-[#B71234]' : 'bg-gray-200 text-gray-700'}`}>
                    Tesis
                  </span>
                )}
              </button>
            ))}

          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-2xs no-print">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar materia (ej: Datos, Costos, Física, Calidad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#B71234] focus:ring-1 focus:ring-[#B71234]"
            />
          </div>

          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span className="font-semibold text-gray-700">Referencias:</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#FFF1F3] text-[#B71234] font-bold border border-[#FCD4DA]">
              ★ Integradora
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Ciencias Básicas
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Gestión / Negocios
            </span>
          </div>
        </div>

        {/* The Stepped Levels List */}
        <div className="space-y-10">
          {filteredPlan.map((level) => (
            <div 
              key={level.nivel} 
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all print-break-inside-avoid"
            >
              
              {/* Level Header (Staircase Step) */}
              <div className="p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {/* Step Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#2F3336] text-white flex flex-col items-center justify-center font-black shadow-sm">
                    <span className="text-xs uppercase text-gray-400 font-bold -mb-1">Año</span>
                    <span className="text-xl leading-none text-white">{level.nivel}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl sm:text-2xl font-black text-[#2F3336]">
                        {level.anio}: {level.titulo}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      {level.descripcion}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs sm:text-sm">
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-medium">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span><strong>{level.horasSemanales}</strong> hs semanales</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-medium">
                    <strong>{level.materias.length}</strong> asignaturas
                  </div>
                </div>
              </div>

              {/* Milestone Banner (Level 3 Intermediate Degree) */}
              {level.hitoTituloIntermedio && (
                <div className="bg-gradient-to-r from-[#FFF1F3] to-[#FDF2F4] border-b border-[#FCD4DA] p-4 sm:px-6 flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[#B71234] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#B71234] uppercase tracking-wide">
                      {level.hitoTituloIntermedio.nombre}
                    </div>
                    <p className="text-xs text-gray-700 mt-0.5">
                      {level.hitoTituloIntermedio.descripcion}
                    </p>
                  </div>
                </div>
              )}

              {/* Milestone Banner (Level 5 Final Project & PPS) */}
              {level.nivel === 5 && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-4 sm:px-6 flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                      Graduación: Práctica Profesional Supervisada (PPS - 200 hs) + Proyecto Final de Grado
                    </div>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Integración total de conocimientos resolviendo un caso real de planta o creando una nueva empresa con factibilidad técnica y económica demostrada.
                    </p>
                  </div>
                </div>
              )}

              {/* Subjects Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {level.materias.map((mat) => {
                  const isExpanded = expandedSubject === mat.codigo;
                  const isIntegradora = mat.tipo.includes('Integradora');

                  return (
                    <div
                      key={mat.codigo}
                      onClick={() => toggleExpand(mat.codigo)}
                      className={`cursor-pointer rounded-xl border p-4 transition-all materia-card ${
                        isIntegradora 
                          ? 'border-[#B71234]/30 bg-[#FFFDFE] hover:border-[#B71234] shadow-xs' 
                          : 'border-gray-200 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                              {mat.codigo}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getTipoBadgeColor(mat.tipo)}`}>
                              {mat.tipo}
                            </span>
                            <span className="text-[10px] text-gray-500 font-medium">
                              • {mat.regimen}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[#2F3336] leading-snug">
                            {mat.nombre}
                          </h4>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                            {mat.horas}
                          </span>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {mat.descripcion}
                      </p>

                      {/* Expandable details (Correlatividades) */}
                      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        <span>
                          <strong>Para cursar:</strong> {mat.correlativasCursar}
                        </span>
                        <div className="text-[#B71234] font-semibold flex items-center space-x-0.5 no-print">
                          <span>{isExpanded ? 'Menos' : 'Detalles'}</span>
                          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-600 space-y-1 bg-gray-50 -mx-4 -mb-4 p-3 rounded-b-xl">
                          <div><strong>Requisito para rendir examen final:</strong> {mat.correlativasRendir}</div>
                          <div className="text-gray-500 italic">Materia oficial del Plan I23 - UTN Facultad Regional Buenos Aires</div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Electives Section */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-gray-200 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B71234]">
                Flexibilidad Curricular
              </span>
              <h3 className="text-2xl font-bold text-[#2F3336]">
                Asignaturas Electivas de Vanguardia
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md">
              En el último tramo cursás 10 hs anuales eligiendo entre temáticas de frontera tecnológica y gestión.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {asignaturasElectivas.map((el, i) => (
              <div 
                key={i} 
                className="p-3 bg-gray-50 hover:bg-[#FFF1F3] hover:border-[#FCD4DA] border border-gray-200 rounded-lg transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-gray-400 block mb-1">
                    {el.area}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-[#2F3336] leading-snug">
                    {el.nombre}
                  </div>
                </div>
                <div className="text-[11px] text-[#B71234] font-semibold mt-2">
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
