import React, { useState } from 'react';
import { Play, Sparkles, Check, ArrowRight, RotateCcw, AlertTriangle, TrendingUp } from 'lucide-react';

export default function IndustrialitoSimulator() {
  const [decision, setDecision] = useState(null);

  const scenarios = {
    title: "Desafío de Planta: Pedido extraordinario de 1.000 bicicletas",
    context: "Tu planta trabaja a capacidad estándar. Llega un cliente que pide duplicar la entrega en 5 días. ¿Qué decisión tomás como Ingeniero/a?",
    options: [
      {
        id: 'A',
        label: "Opción A: Contratar más horas extra sin modificar el layout",
        cost: "Alto costo laboral",
        output: "Se satura la estación de pintura (cuello de botella) y aumentan las piezas defectuosas por fatiga. Margen de ganancia negativo.",
        resultType: 'bad',
        lesson: "Sin balanceo de líneas, meter más personal sólo genera inventario acumulado frente al cuello de botella."
      },
      {
        id: 'B',
        label: "Opción B: Aplicar balanceo de línea y redistribuir estaciones críticas",
        cost: "Inversión mínima",
        output: "Aliviaste el cuello de botella, el flujo de materiales se volvió continuo y se cumplió la entrega a tiempo con rentabilidad récord.",
        resultType: 'good',
        lesson: "¡Decisión de Ingeniero Industrial! Optimizaste el sistema sin gastar de más mediante Estudio del Trabajo y PCP."
      },
      {
        id: 'C',
        label: "Opción C: Comprar de urgencia un robot automatizado",
        cost: "Inversión altísima",
        output: "La maquinaria tarda 3 meses en calibrarse e importarse. El pedido se perdió.",
        resultType: 'bad',
        lesson: "La tecnología requiere planificación estratégica y Evaluación de Proyectos, no decisiones impulsivas."
      }
    ]
  };

  return (
    <section id="industrialito" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with dark theme matching the poster's 3D image atmosphere */}
        <div className="bg-[#222426] text-white rounded-3xl overflow-hidden shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B71234] text-white mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>En vivo en el Stand</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Industrialito: El Simulador
                </h3>
                <p className="text-xl text-[#B71234] font-bold mt-1">
                  Tu fábrica. Tus decisiones.
                </p>

                <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                  ¿Estuviste en el stand de la Expo Carreras? <strong>Industrialito</strong> es el simulador desarrollado por docentes y estudiantes de la UTN.BA para experimentar cómo es gerenciar una planta en tiempo real.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-[#B71234] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span><strong>No necesitás conocimientos previos:</strong> aprendés jugando en 10 minutos.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-[#B71234] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span><strong>Simulá escenarios reales:</strong> tiempos de ciclo, stock de seguridad, mantenimiento y costos.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-[#B71234] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span><strong>Compite en vivo:</strong> compará tu rentabilidad con otros postulantes de la expo.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-xs text-gray-400">
                  Acercate al stand de <strong>Ingeniería Industrial en el Campus de Villa Lugano</strong> para jugar una partida completa con los tutores de la carrera.
                </p>
              </div>
            </div>

            {/* Right Column: Mini Interactive Decision Teaser */}
            <div className="lg:col-span-6 bg-[#1A1C1E] p-6 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-800">
              <div className="bg-[#262A2E] rounded-2xl p-5 sm:p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#B71234] uppercase tracking-wider">
                    Simulación Rápida
                  </span>
                  {decision && (
                    <button 
                      onClick={() => setDecision(null)}
                      className="text-xs text-gray-400 hover:text-white flex items-center space-x-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reiniciar</span>
                    </button>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  {scenarios.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-5">
                  {scenarios.context}
                </p>

                {/* Options */}
                <div className="space-y-2.5">
                  {scenarios.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDecision(opt)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${
                        decision?.id === opt.id
                          ? opt.resultType === 'good'
                            ? 'bg-emerald-900/40 border-emerald-500 text-white'
                            : 'bg-rose-900/40 border-rose-500 text-white'
                          : 'bg-[#1F2327] border-gray-700 text-gray-200 hover:border-gray-500 hover:bg-[#2A2E33]'
                      }`}
                    >
                      <div className="flex items-start space-x-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                          decision?.id === opt.id
                            ? 'bg-white text-black'
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {opt.id}
                        </span>
                        <span>{opt.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Feedback Outcome */}
                {decision && (
                  <div className={`mt-5 p-4 rounded-xl text-xs sm:text-sm border animate-fade-in ${
                    decision.resultType === 'good'
                      ? 'bg-emerald-950/80 border-emerald-600 text-emerald-100'
                      : 'bg-rose-950/80 border-rose-600 text-rose-100'
                  }`}>
                    <div className="flex items-center space-x-2 font-bold mb-1">
                      {decision.resultType === 'good' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                      )}
                      <span>Resultado de tu decisión:</span>
                    </div>
                    <p className="text-xs opacity-90 mb-2">{decision.output}</p>
                    <div className="text-[11px] pt-2 border-t border-white/10 font-medium">
                      💡 <strong>Concepto UTN:</strong> {decision.lesson}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
