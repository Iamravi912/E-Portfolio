import React from 'react';
import { Brain, Code, Palette, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              About
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              Mission
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-100 leading-relaxed font-exo">
              I'm an intermediate developer skilled in UI/UX design, web development, machine learning, 
              AI, data science, video editing, canvas, Docker, Jenkins, Canva, and social media strategy. 
              I love blending design and technology to build real-world solutions.
            </p>
            
            <p className="text-lg text-sky-400 leading-relaxed font-exo">
              My mission is to create innovative solutions that bridge the gap between cutting-edge 
              technology and human-centered design, making complex systems accessible and beautiful.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 font-orbitron">6+</div>
                <div className="text-sm text-slate-100 font-exo">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 font-orbitron">6</div>
                <div className="text-sm text-slate-100 font-exo">Months Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-cyan-400/20 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-400/30 transition-all duration-300">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2 font-orbitron">AI & ML</h3>
              <p className="text-sm text-slate-300 font-exo">Building intelligent systems</p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-all duration-300">
                <Code className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2 font-orbitron">Development</h3>
              <p className="text-sm text-slate-300 font-exo">Full-stack solutions</p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-pink-500/20 transform transition-all duration-300 hover:scale-105 hover:border-pink-500/50">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-all duration-300">
                <Palette className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2 font-orbitron">Design</h3>
              <p className="text-sm text-slate-300 font-exo">UI/UX excellence</p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-sky-400/20 transform transition-all duration-300 hover:scale-105 hover:border-sky-400/50">
              <div className="w-12 h-12 bg-sky-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-400/30 transition-all duration-300">
                <Rocket className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2 font-orbitron">DevOps</h3>
              <p className="text-sm text-slate-300 font-exo">CI/CD pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;