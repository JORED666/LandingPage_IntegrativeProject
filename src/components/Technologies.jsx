import React from 'react';
import { Cpu } from 'lucide-react';
import { technologiesData } from '../data/techData';

export default function Technologies() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Cpu className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
              TECNOLOGÍAS
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Stack tecnológico utilizado</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologiesData.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="tech-card rounded-xl p-4 sm:p-6 text-center neon-border group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-3 sm:mb-4 text-cyan-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white mb-1 text-sm sm:text-base">{tech.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{tech.category}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 sm:mt-16 tech-card rounded-2xl p-6 sm:p-8 text-center neon-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">Stack Completo</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            [Describe brevemente cómo se integran las tecnologías. Por ejemplo: "Utilizamos React para el frontend con TailwindCSS para el diseño. El backend está construido con Node.js y Express, conectado a una base de datos MongoDB. La arquitectura REST API permite una comunicación eficiente entre cliente y servidor."]
          </p>
        </div>
      </div>
    </section>
  );
}