import React, { useState } from 'react';
import { ExternalLink, Menu, X, BookOpen, Layers, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Department Branding (Matching Poster Top Bar) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="./assets/utnba-logo.png" 
                alt="UTN.BA Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="hidden sm:block h-8 w-[1px] bg-gray-300"></div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Departamento de
                </span>
                <span className="text-sm sm:text-base font-bold text-[#2F3336] leading-tight group-hover:text-[#B71234] transition-colors">
                  Ingeniería Industrial
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#2F3336]">
            <a href="#plan-estudios" className="flex items-center space-x-1 hover:text-[#B71234] transition-colors">
              <span>Plan de Estudios</span>
            </a>
            <a href="#perfil" className="hover:text-[#B71234] transition-colors">
              Salida Laboral
            </a>
            <a href="#por-que-utn" className="hover:text-[#B71234] transition-colors">
              ¿Por qué UTN?
            </a>
            <a href="#ingreso" className="hover:text-[#B71234] transition-colors">
              Ingreso
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://frba.utn.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#A31235] hover:bg-[#870E2B] rounded-md shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>Web Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#231F20] hover:text-[#A31235] focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#plan-estudios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-700 hover:text-[#B71234]"
          >
            Plan de Estudios
          </a>
          <a
            href="#perfil"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-700 hover:text-[#B71234]"
          >
            Perfil y Salida Laboral
          </a>
          <a
            href="#por-que-utn"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-700 hover:text-[#B71234]"
          >
            ¿Por qué la UTN Buenos Aires?
          </a>
          <a
            href="#ingreso"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-700 hover:text-[#B71234]"
          >
            Cómo Ingresar (Seminario)
          </a>

          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <a
              href="https://frba.utn.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 text-sm font-bold text-white bg-[#A31235] hover:bg-[#870E2B] rounded-md shadow-sm"
            >
              <span>Web Oficial UTN.BA</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
