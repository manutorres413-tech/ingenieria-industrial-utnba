import React from 'react';
import { MapPin, ExternalLink, Navigation, Building2 } from 'lucide-react';

export default function CampusLocations() {
  const sedes = [
    {
      nombre: "Sede Medrano",
      barrio: "Almagro",
      direccion: "Av. Medrano 951, C.A.B.A.",
      descripcion: "Cursada de materias de 3° a 5° año, Departamento de Ingeniería Industrial y gestión institucional.",
      mapEmbedUrl: "https://maps.google.com/maps?q=Av.+Medrano+951,+Almagro,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed",
      mapsLink: "https://maps.app.goo.gl/mGgVQ4Z1vWab5UhH9",
      comoLlegar: "Subte B (Estación Medrano / Ángel Gallardo) y colectivos 19, 24, 26, 36, 92, 105, 127, 128, 146, 151, 160, 168."
    },
    {
      nombre: "Sede Campus",
      barrio: "Villa Lugano",
      direccion: "Mozart 2300 (esq. Dellepiane), C.A.B.A.",
      descripcion: "Cursada de 1° y 2° año (Ciencias Básicas), laboratorios principales, predio deportivo y estacionamiento.",
      mapEmbedUrl: "https://maps.google.com/maps?q=Mozart+2300,+Villa+Lugano,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed",
      mapsLink: "https://maps.app.goo.gl/L2q7Sc96txL2sHUj7",
      comoLlegar: "Metrobús Dellepiane, colectivos 7, 46, 47, 50, 56, 86, 101, 114, 193 y acceso rápido por autopista."
    }
  ];

  return (
    <section id="sedes" className="py-10 bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado directo */}
        <div className="max-w-3xl mb-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#231F20] tracking-tight">
            Ubicación de las Sedes
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            La UTN Buenos Aires cuenta con dos predios de cursada en la Ciudad de Buenos Aires.
          </p>
        </div>

        {/* Grid de 2 Sedes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sedes.map((sede, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-200 shadow-2xs overflow-hidden flex flex-col justify-between"
            >
              {/* Mapa Interactivo */}
              <div className="relative w-full h-52 sm:h-60 bg-gray-100 border-b border-gray-200">
                <iframe
                  title={`Mapa ${sede.nombre}`}
                  src={sede.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Contenido Informativo Compacto */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#231F20] flex items-center space-x-1.5">
                      <Building2 className="w-4 h-4 text-[#A31235]" />
                      <span>{sede.nombre}</span>
                    </h3>
                    <span className="text-[11px] font-bold text-[#A31235] bg-[#FFF0F3] px-2.5 py-0.5 rounded-full border border-[#FCD4DA]">
                      {sede.barrio}
                    </span>
                  </div>

                  <div className="flex items-start space-x-1.5 text-xs text-gray-700 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A31235] shrink-0 mt-0.5" />
                    <span>{sede.direccion}</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {sede.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="text-[11px] text-gray-500 line-clamp-1 sm:max-w-xs">
                    <span className="font-semibold text-gray-700">Cómo llegar:</span> {sede.comoLlegar}
                  </div>

                  <a
                    href={sede.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#A31235] hover:bg-[#870E2B] transition-colors shrink-0 shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Ver en Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
