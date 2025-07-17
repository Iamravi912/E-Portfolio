import React from 'react';

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'HTML', color: 'text-cyan-400', icon: '🖥️' },
    { name: 'CSS', color: 'text-purple-500', icon: '🎨' },
    { name: 'JavaScript', color: 'text-pink-500', icon: '🧠' },
    { name: 'Python', color: 'text-sky-400', icon: '🐍' },
    { name: 'Java', color: 'text-violet-400', icon: '☕' },
    { name: 'Figma', color: 'text-cyan-400', icon: '🎨' },
    { name: 'Canva', color: 'text-purple-500', icon: '🖼️' },
    { name: 'Machine Learning', color: 'text-pink-500', icon: '🤖' },
    { name: 'Data Science', color: 'text-sky-400', icon: '📊' },
    { name: 'Docker', color: 'text-violet-400', icon: '🐳' },
    { name: 'Jenkins', color: 'text-cyan-400', icon: '🧪' },
    { name: 'Git', color: 'text-purple-500', icon: '🔧' },
    { name: 'Video Editing', color: 'text-pink-500', icon: '🎬' },
    { name: 'Prompt Writing', color: 'text-sky-400', icon: '✍️' },
    { name: 'Logo Designing', color: 'text-violet-400', icon: '🖌️' },
    { name: 'Content Writing', color: 'text-cyan-400', icon: '📝' }
  ];

  return (
    <section id="tech" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              Tech
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-exo">
            A comprehensive toolkit for building tomorrow's solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border border-slate-600 transform transition-all duration-300 hover:scale-110 hover:border-slate-400 cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{tech.icon}</span>
                <span className={`text-sm font-semibold font-exo transition-colors duration-300 ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md bg-cyan-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;