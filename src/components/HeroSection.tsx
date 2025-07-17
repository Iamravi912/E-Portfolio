import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Download, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Building tomorrow's tech today — with design, data, and innovation at heart.";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Profile Image with Orbital Rings */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Orbital Ring 1 - Stationary ring with moving planet along the ring line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-cyan-400/30 -z-10">
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full animate-spin"
                   style={{ 
                     boxShadow: '0 0 10px #00FFFF',
                     animationDuration: '10s',
                     transformOrigin: '160px 160px',
                     top: '-2px',
                     left: '158px'
                   }} />
            </div>
            
            {/* Orbital Ring 2 - Stationary ring with moving planet along the ring line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-purple-500/30 -z-10">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full animate-spin"
                   style={{ 
                     boxShadow: '0 0 8px #8A2BE2',
                     animationDuration: '15s',
                     animationDirection: 'reverse',
                     transformOrigin: '192px 192px',
                     top: '-1.5px',
                     left: '190.5px'
                   }} />
            </div>
            
            {/* Profile Image */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl z-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
              <img 
                src="/ravi copy.jpg" 
                alt="Ravi Gupta - AI Developer & Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left space-y-8">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold font-orbitron text-slate-100 mb-4">
              <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
                Ravi
              </span>
              <br />
              <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
                Gupta
              </span>
            </h1>
            <p className="text-xl text-sky-400 font-exo mb-6">
              AI Developer & Designer
            </p>
          </div>

          {/* Typewriter Text */}
          <div className="min-h-[80px]">
            <p className="text-lg lg:text-xl text-violet-400 font-exo leading-relaxed">
              {displayedText}
              {isTyping && (
                <span className="text-cyan-400 animate-pulse ml-1">|</span>
              )}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 font-exo"
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                View Projects
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 blur-md -z-10"></div>
            </a>

            <button className="group relative w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-sky-400">
              <Download className="w-6 h-6 text-slate-900" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-pink-500 blur-md -z-10"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Iamravi912"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <Github className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-400 blur-md -z-10"></div>
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-gupta-4939a2286"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-400 blur-md -z-10"></div>
            </a>

            <a
              href="https://www.instagram.com/ravi.khandelwal912?igsh=bTUyaXdqbG1pcWRp"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <Instagram className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-400 blur-md -z-10"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;