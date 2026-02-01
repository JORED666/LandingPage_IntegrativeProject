import React from 'react';
import { Code, Terminal, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-cyan-900/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Code className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        <p className="text-gray-500 font-light text-sm sm:text-base">
          © 2024 Proyecto Integrador - Todos los derechos reservados
        </p>
        <p className="text-cyan-400/60 text-xs sm:text-sm mt-2">
          Hecho con 💙 por el equipo de desarrollo
        </p>
      </div>
    </footer>
  );
}