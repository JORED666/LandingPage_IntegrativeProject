import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Pirámide animada */}
        <div className="floating mb-6 sm:mb-8 flex justify-center">
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="side side5"></span>
              <span className="side side6"></span>
              <span className="side side7"></span>
              <span className="side side8"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 glitch-text px-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            PROYECTO
          </span>
          <br />
          <span className="text-white">INTEGRADOR</span>
        </h1>
        
        <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6 sm:mb-8" />
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
          Una aplicación web innovadora desarrollada con las últimas tecnologías
          <br className="hidden sm:block" />
          <span className="text-cyan-400 font-semibold block sm:inline mt-2 sm:mt-0">Diseñada • Desarrollada • Desplegada</span>
        </p>
        
        <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
          <a href="#proyecto" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Ver Proyecto
          </a>
          <a href="#equipo" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-lg font-bold text-base sm:text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            Conocer al Equipo
          </a>
        </div>
      </div>
    </section>
  );
}