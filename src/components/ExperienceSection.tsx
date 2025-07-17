import React from 'react';
import { Building, Calendar, Users } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              Experience
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              Journey
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-400/20 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-all duration-300">
                <Building className="w-8 h-8 text-cyan-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100 mb-2 font-orbitron">
                  Social Media Manager
                </h3>
                <p className="text-xl text-purple-500 mb-4 font-exo">
                  PetsGO Door to Door Pvt. Ltd.
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sky-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-exo">6 Months</span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-exo">Brand Management</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-100 font-exo">
                      Managed branding and campaigns across multiple platforms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-slate-100 font-exo">
                      Created content with Canva and design tools
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <p className="text-slate-100 font-exo">
                      Used Meta dashboards for analytics and engagement tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;