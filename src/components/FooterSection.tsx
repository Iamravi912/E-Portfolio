import React from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-orbitron text-slate-100 mb-6">
              <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
                Contact
              </span>
            </h3>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-300 text-sm font-exo">Email</p>
                <p className="text-slate-100 font-exo">ravi9991ct@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-slate-300 text-sm font-exo">Location</p>
                <p className="text-slate-100 font-exo">India</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-orbitron text-slate-100 mb-6">
              <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
                Navigation
              </span>
            </h3>
            
            <div className="space-y-3">
              {['About', 'Experience', 'Projects', 'Tech Stack', 'Education', 'Video Resume'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-exo"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-orbitron text-slate-100 mb-6">
              <span className="text-pink-500" style={{ textShadow: '0 0 20px #FF00FF' }}>
                Connect
              </span>
            </h3>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/Iamravi912"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <Github className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/ravi-gupta-4939a2286"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.instagram.com/ravi.khandelwal912?igsh=bTUyaXdqbG1pcWRp"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <Instagram className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-600">
          <div className="text-center">
            <p className="text-slate-100 font-exo text-lg">
              <span className="text-cyan-400" style={{ textShadow: '0 0 10px #00FFFF' }}>
                Crafted in the stars
              </span>{' '}
              ✨{' '}
              <span className="text-purple-500" style={{ textShadow: '0 0 10px #8A2BE2' }}>
                by Ravi Gupta
              </span>
            </p>
            <p className="text-slate-400 text-sm mt-2 font-exo">
              © 2024 - Building tomorrow's tech today
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;