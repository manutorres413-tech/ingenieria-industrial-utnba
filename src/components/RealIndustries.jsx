import React, { useState } from 'react';
import { Building2, Car, ShoppingBag, Zap, Flame, Award, ArrowUpRight, CheckCircle2, Users } from 'lucide-react';

export default function RealIndustries() {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: 'automotriz',
      title: 'Automotriz & Fabricación',
      short: 'Automotriz',
      icon: Car,
      leadRole: 'Ingeniero/a de Procesos y Mejora Continua',
      empresas: ['Toyota Argentina', 'Ford Motor Company', 'Volkswagen Group', 'Stellantis'],
      location: 'Plantas industriales de Zárate, Pacheco y El Palomar',
      dailyMission: 'Aplicar manufactura esbelta (Kaizen) para que un vehículo nuevo salga de la línea de ensamble cada 90 segundos, coordinando robots de soldadura, operarios y calidad cero defectos.',
      keyMetrics: [
        { label: 'Método clave', val: 'Filosofía Lean / Toyota Production System (TPS)' },
        { label: 'Convenio UTN', val: 'Pasantías remuneradas de 20 hs semanales' }
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Logística Inteligente',
      short: 'E-Commerce & Supply',
      icon: ShoppingBag,
      leadRole: 'Process Engineer de Operaciones & Fulfillment',
      empresas: ['Mercado Libre', 'Andreani', 'DHL Express', 'Celsur Logística'],
      location: 'Centros de distribución inteligentes y hubs de última milla',
      dailyMission: 'Diseñar el flujo de millones de paquetes dentro de centros logísticos de más de 70.000 m², calculando rutas óptimas de camiones y monitoreando tiempos en tiempo real para entregar en menos de 24 horas.',
      keyMetrics: [
        { label: 'Herramienta clave', val: 'Ruteo con algoritmos, dashboards en vivo y simulación' },
        { label: 'Inserción laboral', val: 'Reclutamiento directo a partir de 3° año' }
      ]
    },
    {
      id: 'consumo',
      title: 'Consumo Masivo & Alimentos',
      short: 'Alimentos & Consumo',
      icon: Users,
      leadRole: 'Planificador de Demanda y Coordinador de Planta',
      empresas: ['Cervecería y Maltería Quilmes', 'Arcor', 'Unilever', 'Molinos Río de la Plata', 'Danone'],
      location: 'Grandes complejos de elaboración y envasado de alimentos y bebidas',
      dailyMission: 'Calcular cuántos millones de paquetes y bebidas se van a consumir el mes que viene, programar las líneas de envasado a alta velocidad y garantizar que el producto esté fresco en cada supermercado.',
      keyMetrics: [
        { label: 'Práctica técnica', val: 'Visitas guiadas de cátedras UTN a plantas de Quilmes y Arcor' },
        { label: 'Enfoque', val: 'Sustentabilidad, ahorro de energía y cero desperdicios' }
      ]
    },
    {
      id: 'energia',
      title: 'Petróleo, Gas & Minería',
      short: 'Energía & Oil & Gas',
      icon: Flame,
      leadRole: 'Ingeniero/a de Logística Operativa y Compras Técnicas',
      empresas: ['YPF', 'Pan American Energy (PAE)', 'Vista Energy', 'Raízen', 'Tecpetrol'],
      location: 'Complejos de refinación, yacimientos (Vaca Muerta) y oficinas corporativas',
      dailyMission: 'Coordinar el abastecimiento de equipos pesados en zonas de extracción remotas, calcular presupuestos multimillonarios de perforación y planificar la transición hacia energías renovables.',
      keyMetrics: [
        { label: 'Programas', val: 'Jóvenes Profesionales (JP) con rotación técnica' },
        { label: 'Impacto', val: 'Soberanía productiva y desarrollo energético nacional' }
      ]
    },
    {
      id: 'siderurgia',
      title: 'Siderurgia & Acero Pesado',
      short: 'Siderurgia',
      icon: Zap,
      leadRole: 'Planificador de Acería y Proyectos Industriales',
      empresas: ['Grupo Techint (Tenaris, Ternium)', 'Acindar ArcelorMittal', 'Aluar'],
      location: 'Centros industriales siderúrgicos de Campana, San Nicolás y Villa Constitución',
      dailyMission: 'Programar la laminación y forjado de tubos de acero sin costura que se exportan a todo el planeta para oleoductos submarinos, calculando tolerancias mecánicas y resistencia de materiales.',
      keyMetrics: [
        { label: 'Programa especial', val: 'Prácticas Educativas de Verano (PEV de 3 meses)' },
        { label: 'Vínculo histórico', val: 'Premio Techint a la excelencia académica UTN' }
      ]
    }
  ];

  const current = sectors[activeSector];
  const CurrentIcon = current.icon;

  return (
    <section id="industrias" className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF0F3] text-[#A31235] border border-[#FCD4DA] mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#FF4D6D]" />
            <span>Salida Laboral Concreta en Argentina</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#231F20] tracking-tight">
            ¿Dónde vas a trabajar cuando seas estudiante o graduado?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            La UTN.BA mantiene convenios directos con más de 1.000 organizaciones. Mirá qué hace un/a ingeniero/a industrial en los sectores más demandados de nuestro país:
          </p>
        </div>

        {/* Barra de Pestañas / Tabs por Sector */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-6 text-xs sm:text-sm">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isSelected = activeSector === idx;

            return (
              <button
                key={sec.id}
                onClick={() => setActiveSector(idx)}
                className={`px-4 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center space-x-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#A31235] text-white border-[#A31235] shadow-xs'
                    : 'bg-[#F9FAFB] text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-[#A31235]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                <span>{sec.short}</span>
              </button>
            );
          })}
        </div>

        {/* Ficha Detallada del Sector */}
        <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 border border-gray-200 text-left transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Columna Principal: Qué hace y misión diaria */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#A31235]">
                  Rol típico que vas a ocupar:
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#231F20] mt-0.5">
                  {current.leadRole}
                </h3>
                <p className="text-xs text-gray-500 mt-1 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A31235]" />
                  <span>{current.location}</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Tu misión en el día a día
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {current.dailyMission}
                </p>
              </div>

              {/* Métricas / Claves del sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {current.keyMetrics.map((met, i) => (
                  <div key={i} className="bg-white rounded-xl p-3.5 border border-gray-200 text-xs">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase">
                      {met.label}
                    </span>
                    <span className="font-bold text-[#231F20] mt-0.5 block leading-snug">
                      {met.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Lateral: Empresas Empleadoras Reales */}
            <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-gray-200 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#231F20] flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#A31235]" />
                  <span>Empresas destacadas del sector</span>
                </span>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Convenios de pasantía y contratación de graduados UTN.BA:
                </p>
              </div>

              <div className="space-y-2">
                {current.empresas.map((emp, i) => (
                  <div 
                    key={i}
                    className="p-3 bg-[#F9FAFB] rounded-xl border border-gray-100 flex items-center justify-between text-xs font-bold text-gray-800 hover:border-[#A31235] transition-colors"
                  >
                    <span>{emp}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#A31235]" />
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#FFF0F3] rounded-xl border border-[#FCD4DA] text-[11px] text-gray-700 leading-snug">
                💡 <strong className="text-[#A31235]">Dato oficial:</strong> La facultad cuenta con su propia <em>Feria Anual de Empresas</em> donde estos mismos reclutadores entrevistan personalmente a los alumnos en el Campus de Lugano y la sede Medrano.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
