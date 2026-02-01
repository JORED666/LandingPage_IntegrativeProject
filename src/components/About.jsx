import React from 'react';
import { Zap, Rocket, Terminal, Code, Database, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="proyecto" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 px-4">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            SOBRE EL PROYECTO
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="tech-card rounded-2xl p-6 sm:p-8 neon-border">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">¿Qué es?</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              [Describe aquí tu proyecto integrador. Por ejemplo: "Una plataforma web que permite a los usuarios gestionar tareas en tiempo real con un sistema de colaboración integrado. Incluye autenticación segura, notificaciones push y un dashboard interactivo."]
            </p>
          </div>
          
          <div className="tech-card rounded-2xl p-6 sm:p-8 neon-border">
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Objetivo</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              [Explica el propósito principal. Por ejemplo: "Desarrollar una solución escalable que optimice la gestión de proyectos para equipos remotos, mejorando la productividad y comunicación mediante herramientas modernas y una interfaz intuitiva."]
            </p>
          </div>
          
          <div className="tech-card rounded-2xl p-6 sm:p-8 md:col-span-2 neon-border">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">Características Principales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-cyan-500/30">
                  <Code className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-gray-300 font-semibold text-sm sm:text-base">Interfaz Moderna</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
                  <Database className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-gray-300 font-semibold text-sm sm:text-base">Base de Datos Robusta</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-500/30">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-gray-300 font-semibold text-sm sm:text-base">API RESTful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}