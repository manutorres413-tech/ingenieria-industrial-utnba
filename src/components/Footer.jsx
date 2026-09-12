import React from 'react';
import { ExternalLink, MapPin, Mail, Globe, Phone, FileText, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2124] text-gray-300 pt-14 pb-10 border-t border-gray-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 bg-white p-2.5 rounded-lg w-fit">
              <img 
                src="./assets/utnba-logo.png" 
                alt="UTN.BA Logo" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="text-white font-bold text-base">
              Departamento de Ingeniería Industrial
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Facultad Regional Buenos Aires • Universidad Tecnológica Nacional.
              Formando líderes tecnológicos que impulsan la productividad, la innovación y la soberanía industrial argentina.
            </p>
            <div className="pt-2">
              <a
                href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#B71234] hover:text-white transition-colors"
              >
                <span>Ingeniería Industrial - UTN.BA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Sedes */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm">
              Sedes Académicas
            </div>
            
            <div className="space-y-1">
              <div className="font-semibold text-white flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B71234]" />
                <span>Sede Campus (Villa Lugano)</span>
              </div>
              <p className="text-gray-400 pl-5">
                Mozart 2300, CABA.<br />
                Sede de la Expo Carreras y laboratorios pesados.
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <div className="font-semibold text-white flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B71234]" />
                <span>Sede Medrano (Almagro)</span>
              </div>
              <p className="text-gray-400 pl-5">
                Av. Medrano 951, CABA.
              </p>
            </div>
          </div>

          {/* Enlaces Oficiales */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm">
              Canales y Portales
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://frba.utn.edu.ar/ingreso/ingenieria-industrial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-rose-300 font-medium"
                >
                  <span>Portal Ingreso Ingeniería Industrial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://frba.utn.edu.ar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Portal Central UTN.BA</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://guarani.frba.utn.edu.ar/preinscripcion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>SIU-Guaraní Preinscripción</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a 
                  href="./PLAN_I23_Ingenieria_Industrial_UTNBA.pdf" 
                  download
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Descargar Plan de Estudios (PDF)</span>
                  <FileText className="w-3 h-3 text-gray-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Botón Volver Arriba */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 hover:bg-[#B71234] text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-semibold"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Subir</span>
            </button>
            <div className="text-[11px] text-gray-500 mt-6 lg:mt-0">
              Expo Carreras UTN Buenos Aires
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Universidad Tecnológica Nacional • Facultad Regional Buenos Aires (UTN.BA).
          </div>
          <div>
            Diseñado para aspirantes y futuros ingenieros industriales.
          </div>
        </div>

      </div>
    </footer>
  );
}
