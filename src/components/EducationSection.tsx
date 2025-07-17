import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Bachelor of Computer Applications (BCA)",
      status: "Final Year",
      description: "Comprehensive computer science education with focus on programming and system design",
      color: "#00FFFF"
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Red Hat Certified",
      color: "text-purple-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Coursera Graduate",
      color: "text-pink-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "EXIN Certified",
      color: "text-sky-400"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "IBM Certified",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              Education
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              & Certifications
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100 font-orbitron">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-cyan-400/20 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-all duration-300">
                    <div className="text-cyan-400">
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-100 mb-2 font-orbitron">
                      {edu.title}
                    </h4>
                    <p className="text-purple-500 font-semibold mb-3 font-exo">
                      {edu.status}
                    </p>
                    <p className="text-slate-300 text-sm font-exo">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold text-slate-100 font-orbitron">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                      <div className={cert.color}>
                        {cert.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-100 font-orbitron">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;