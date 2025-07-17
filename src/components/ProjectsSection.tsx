import React from 'react';
import { Bot, TrendingUp, Lightbulb, FileText, Settings, GraduationCap, ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      icon: <Lightbulb className="w-8 h-8" />, // Reuse an appropriate icon
      title: "Story Maker by Langchain",
      description: "An interactive app that asks you for a topic, generates a story based on your input, and then provides a quiz related to the story.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      hoverBg: "hover:bg-yellow-400/30",
      borderColor: "border-yellow-400/20",
      hoverBorder: "hover:border-yellow-400/50",
      links: {
        demo: null,
        github: "https://github.com/Iamravi912/langchain-"
      }
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Teacher",
      description: "GPT-based AI that answers all tech questions with 100% accuracy",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
      hoverBg: "hover:bg-cyan-400/30",
      borderColor: "border-cyan-400/20",
      hoverBorder: "hover:border-cyan-400/50",
      links: {
        demo: "https://www.instagram.com/ravi.khandelwal912?igsh=bTUyaXdqbG1pcWRp",
        github: "https://github.com/Iamravi912/AI-teacher"
      }
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Career Guidance Chatbot",
      description: "Guides students from class 10 to career planning with personalized assistance",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
      hoverBg: "hover:bg-purple-500/30",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/50",
      links: {
        demo: null,
        github: "https://github.com/Iamravi912/career-guidance-chat-boat"
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Stock Market Predictor",
      description: "Analyzes 10-day moving averages to give stock movement confidence predictions",
      color: "text-pink-500",
      bgColor: "bg-pink-500/20",
      hoverBg: "hover:bg-pink-500/30",
      borderColor: "border-pink-500/20",
      hoverBorder: "hover:border-pink-500/50",
      links: {
        demo: null,
        github: null
      }
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "BorroSmart",
      description: "Evaluates startup ideas and shows future potential with detailed analysis",
      color: "text-sky-400",
      bgColor: "bg-sky-400/20",
      hoverBg: "hover:bg-sky-400/30",
      borderColor: "border-sky-400/20",
      hoverBorder: "hover:border-sky-400/50",
      links: {
        demo: null,
        github: "https://github.com/Iamravi912/borrosmart"
      }
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "ATS Resume Ranker",
      description: "Matches resumes with job descriptions and shows match percentage via graph",
      color: "text-violet-400",
      bgColor: "bg-violet-400/20",
      hoverBg: "hover:bg-violet-400/30",
      borderColor: "border-violet-400/20",
      hoverBorder: "hover:border-violet-400/50",
      links: {
        demo: null,
        github: "https://github.com/Iamravi912/ATS-project"
      }
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CI/CD DevOps Pipeline",
      description: "Automates Docker builds and deployment using Jenkins pipelines",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
      hoverBg: "hover:bg-cyan-400/30",
      borderColor: "border-cyan-400/20",
      hoverBorder: "hover:border-cyan-400/50",
      links: {
        demo: null,
        github: null
      }
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
              <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
                Featured
              </span>{' '}
              <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-300 font-exo">
              Innovative solutions built with AI, design, and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              project.title === "Story Maker by Langchain" ? (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                  onClick={() => window.open("https://github.com/Iamravi912/langchain-", '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open("https://github.com/Iamravi912/langchain-", '_blank', 'noopener,noreferrer'); }}
                  style={{ outline: 'none' }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>
                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 rounded-lg text-purple-500 text-sm font-exo hover:bg-purple-500/30 transition-all duration-300"
                          style={{ cursor: "pointer" }}
                          onClick={e => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-yellow-400" />
                  </div>
                </div>
              ) : project.title === "AI Teacher" ? (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                  onClick={() => window.open("https://github.com/Iamravi912/AI-teacher", '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open("https://github.com/Iamravi912/AI-teacher", '_blank', 'noopener,noreferrer'); }}
                  style={{ outline: 'none' }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>
                    {/* Only show Demo button if present, no Code button for AI Teacher */}
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-cyan-400/20 rounded-lg text-cyan-400 text-sm font-exo hover:bg-cyan-400/30 transition-all duration-300"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-cyan-400" />
                  </div>
                </div>
              ) : project.title === "Career Guidance Chatbot" ? (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                  onClick={() => window.open("https://github.com/Iamravi912/career-guidance-chat-boat", '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open("https://github.com/Iamravi912/career-guidance-chat-boat", '_blank', 'noopener,noreferrer'); }}
                  style={{ outline: 'none' }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>
                    {/* Only show Demo button if present, no Code button for Career Guidance Chatbot */}
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-cyan-400/20 rounded-lg text-cyan-400 text-sm font-exo hover:bg-cyan-400/30 transition-all duration-300"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-cyan-400" />
                  </div>
                </div>
              ) : project.title === "BorroSmart" ? (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                  onClick={() => window.open("https://github.com/Iamravi912/borrosmart", '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open("https://github.com/Iamravi912/borrosmart", '_blank', 'noopener,noreferrer'); }}
                  style={{ outline: 'none' }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>
                    {/* Only show Demo button if present, no Code button for BorroSmart */}
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-cyan-400/20 rounded-lg text-cyan-400 text-sm font-exo hover:bg-cyan-400/30 transition-all duration-300"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-cyan-400" />
                  </div>
                </div>
              ) : project.title === "Stock Market Predictor" ? (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                  onClick={() => window.open("https://github.com/Iamravi912/stock-market-prediction-using-ML-DS", '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open("https://github.com/Iamravi912/stock-market-prediction-using-ML-DS", '_blank', 'noopener,noreferrer'); }}
                  style={{ outline: 'none' }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>
                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/Iamravi912/stock-market-prediction-using-ML-DS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 rounded-lg text-purple-500 text-sm font-exo hover:bg-purple-500/30 transition-all duration-300"
                        style={{ cursor: "pointer" }}
                        onClick={e => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-pink-500" />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border ${project.borderColor} transform transition-all duration-300 hover:scale-105 ${project.hoverBorder} hover:shadow-2xl hover:-rotate-1 cursor-pointer relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${project.hoverBg}`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-100 mb-3 font-orbitron">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                      {project.description}
                    </p>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-cyan-400/20 rounded-lg text-cyan-400 text-sm font-exo hover:bg-cyan-400/30 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 rounded-lg text-purple-500 text-sm font-exo hover:bg-purple-500/30 transition-all duration-300"
                          style={{ cursor: "pointer" }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-cyan-400" />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;