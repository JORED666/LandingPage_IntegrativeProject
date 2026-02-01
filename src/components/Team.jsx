import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { teamData } from '../data/teamData';

export default function Team() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <section id="equipo" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
              NUESTRO EQUIPO
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Los desarrolladores detrás del proyecto</p>
          <p className="text-sm text-gray-500 mt-2">Haz click en las cards para ver más información</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="flip-card-container"
              onClick={() => handleCardClick(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flip-card ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                {/* FRENTE - Foto */}
                <div className="flip-card-front team-card-spin rounded-2xl">
                  <div className="team-card-content">
                    <div className="relative mb-4">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
                      {member.name}
                    </h3>
                    
                    <div className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${member.color} inline-block`}>
                      {member.role}
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-4">Click para ver más</p>
                  </div>
                </div>

                {/* ATRÁS - Información */}
                <div className="flip-card-back team-card-spin rounded-2xl">
                  <div className="team-card-content justify-center h-full">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-4`}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 text-white">
                      {member.role}
                    </h3>
                    
                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-4" />
                    
                    <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed px-2">
                      {member.focus}
                    </p>
                    
                    <p className="text-xs text-gray-400 mt-6">Click para volver</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}