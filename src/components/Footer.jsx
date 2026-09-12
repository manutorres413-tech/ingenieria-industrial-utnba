import React from 'react';
import { ExternalLink, MapPin, Mail, Phone, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-[#1E2124] text-gray-300 pt-12 pb-10 border-t border-gray-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quality Badges Bar */}
        <div className="mb-10 pb-8 border-b border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#A31235]/30 text-[#FF4D6D] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Triple Ganador PNC</div>
              <div className="text-[11px] text-gray-400">Premio Nacional a la Calidad (2016, 2019, 2023)</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#A31235]/30 text-[#FF4D6D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Certificación ISO 9001:2015</div>
              <div className="text-[11px] text-gray-400">TÜV Rheinland (Cert. 01 10006 1427619/13)</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#A31235]/30 text-[#FF4D6D] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Acreditación CONEAU 6 Años</div>
              <div className="text-[11px] text-gray-400">Res. 992/14 • En proceso de reacreditación</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
          
          {/* Brand & Department Authorities */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center">
              <img 
                src="./assets/utnba-logo-white.png" 
                alt="UTN.BA Logo" 
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-white font-bold text-base">
                Departamento de Ingeniería Industrial
              </div>
              <div className="text-xs text-[#FF4D6D] font-medium mt-0.5">
                Director: Mg. Ing. Gastón Zotta
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Facultad Regional Buenos Aires • Universidad Tecnológica Nacional.
              30 años de trayectoria formando líderes en gestión integral, tecnología y sistemas de producción.
            </p>
            <div className="space-y-1.5 text-xs text-gray-300 pt-1">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D6D] shrink-0 mt-0.5" />
                <span>Medrano 951, 3º Piso - Of. 313, CABA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#FF4D6D] shrink-0" />
                <span>(+54 911) 4420-8083</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#FF4D6D] shrink-0" />
                <a href="mailto:info@industrial.frba.utn.edu.ar" className="hover:text-white transition-colors underline">
                  info@industrial.frba.utn.edu.ar
                </a>
              </div>
            </div>
          </div>

          {/* Sedes */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm">
              Sedes Académicas
            </div>
            
            <div className="space-y-1">
              <div className="font-semibold text-white flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B71234]" />
                <span>Sede Medrano (Almagro)</span>
              </div>
              <p className="text-gray-400 pl-5">
                Av. Medrano 951, CABA.<br />
                Oficinas de Departamento y aulas troncales.
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <div className="font-semibold text-white flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B71234]" />
                <span>Sede Campus (Villa Lugano)</span>
              </div>
              <p className="text-gray-400 pl-5">
                Mozart 2300, CABA.<br />
                Laboratorios de ensayo y talleres tecnológicos.
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
                  href="https://frba.utn.edu.ar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-rose-300 font-medium"
                >
                  <span>Portal Oficial UTN.BA</span>
                  <ExternalLink className="w-3 h-3" />
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
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Plan de Estudios Oficial I23 (PDF)</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:gastonzotta@frba.utn.edu.ar" 
                  className="hover:text-white transition-colors flex items-center space-x-1 text-gray-400"
                >
                  <span>Contacto Dirección</span>
                  <Mail className="w-3 h-3 text-gray-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Universidad Tecnológica Nacional • Facultad Regional Buenos Aires (UTN.BA).
          </div>
          <div>
            30 años de Ingeniería Industrial (1995 - {new Date().getFullYear()})
          </div>
        </div>

      </div>
    </footer>
  );
}
