import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Mail, Linkedin, ExternalLink, Code, Brain, Shield, Zap, Users, Cpu, GitBranch, Award, Briefcase, Terminal, Sparkles, Rocket, Target } from 'lucide-react';

// 3D Netted Sphere Component
const NettedSphere = () => {
  const sphereRef = useRef(null);
  
  useEffect(() => {
    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      if (sphereRef.current) {
        sphereRef.current.style.transform = `rotateX(${rotation}deg) rotateY(${rotation * 0.7}deg)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="sphere-container">
      <div ref={sphereRef} className="sphere">
        {/* Create longitude lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`long-${i}`}
            className="sphere-line longitude"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
        {/* Create latitude lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`lat-${i}`}
            className="sphere-line latitude"
            style={{ transform: `rotateX(${i * 22.5}deg)` }}
          />
        ))}
        {/* Glowing core */}
        <div className="sphere-core" />
        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="orbit-particle"
            style={{
              animation: `orbit-${i} ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { label: 'AG2 Contributors', value: '20K+', icon: Users },
    { label: 'GitHub Commits', value: '506+', icon: GitBranch },
    { label: 'Enterprise Clients', value: '50+', icon: Briefcase },
    { label: 'AI Systems Built', value: '15+', icon: Cpu }
  ];

  const skills = [
    { name: 'Multi-Agent Systems', level: 95, emoji: '🤖', description: 'Orchestrating AI armies' },
    { name: 'RAG Architecture', level: 92, emoji: '🧠', description: 'Knowledge synthesis master' },
    { name: 'Enterprise Security', level: 88, emoji: '🔐', description: 'Digital fortress builder' },
    { name: 'LLM Integration', level: 90, emoji: '⚡', description: 'AI whisperer' },
    { name: 'Cloud Architecture', level: 85, emoji: '☁️', description: 'Sky infrastructure architect' }
  ];

  const experience = [
    {
      title: 'AI Engineer & Maintainer',
      company: 'AG2 (AutoGen)',
      period: 'Jul 2025 - Present',
      highlights: [
        'Leading multi-agent conversation framework serving 20K+ developers',
        'Pioneered multi-modal RAG query engine with Vector, Graph & Structured RAG',
        'Built MCP services for automated code analysis with Semgrep integration'
      ],
      tech: ['LangGraph', 'Neo4j', 'RAG', 'MCP', 'Kubernetes']
    },
    {
      title: 'AI Engineer',
      company: 'Alvyl Consulting',
      period: 'Aug 2024 - Jul 2025',
      highlights: [
        'Architected FusionSecurity.ai platform for Fortune 500 clients',
        'Designed LangGraph-powered security intelligence with 15+ specialized agents',
        'Achieved 99.9% uptime for mission-critical security monitoring'
      ],
      tech: ['LangGraph', 'AWS', 'Kubernetes', 'Semgrep', 'Neo4j']
    }
  ];

  const projects = [
    {
      title: 'AG2 Framework',
      icon: '🚀',
      description: 'Core contributor to multi-agent conversation framework',
      stats: ['20K+ Users', 'Open Source', '500+ Commits'],
      link: 'https://github.com/ag2ai/ag2',
      gradient: 'from-green-600 to-emerald-400'
    },
    {
      title: 'FusionSecurity.ai',
      icon: '🛡️',
      description: 'Enterprise security intelligence platform',
      stats: ['Fortune 500', '99.9% Uptime', '15+ Agents'],
      gradient: 'from-emerald-600 to-green-400'
    },
    {
      title: 'RAG Engine',
      icon: '🧬',
      description: 'Multi-modal knowledge retrieval system',
      stats: ['Vector+Graph', 'Neo4j', 'Production Ready'],
      gradient: 'from-lime-600 to-green-400'
    },
    {
      title: 'MCP Services',
      icon: '⚙️',
      description: 'Automated code analysis & security',
      stats: ['Semgrep', 'Real-time', 'DevSecOps'],
      gradient: 'from-green-700 to-lime-400'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden">
      <style jsx>{`
        /* 3D Sphere Styles */
        .sphere-container {
          width: 400px;
          height: 400px;
          perspective: 1000px;
          position: relative;
        }
        
        .sphere {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite;
        }
        
        .sphere-line {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
        }
        
        .sphere-core {
          position: absolute;
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent);
          border-radius: 50%;
          filter: blur(30px);
          animation: pulse 3s ease-in-out infinite;
        }
        
        .orbit-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 20px #22c55e;
          top: 50%;
          left: 50%;
        }
        
        @keyframes orbit-0 { 
          100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); } 
        }
        @keyframes orbit-1 { 
          100% { transform: rotate(360deg) translateX(180px) rotate(-360deg) rotateY(60deg); } 
        }
        @keyframes orbit-2 { 
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg) rotateX(45deg); } 
        }
        @keyframes orbit-3 { 
          100% { transform: rotate(360deg) translateX(190px) rotate(-360deg) rotateZ(30deg); } 
        }
        @keyframes orbit-4 { 
          100% { transform: rotate(360deg) translateX(170px) rotate(-360deg) rotateY(-45deg); } 
        }
        @keyframes orbit-5 { 
          100% { transform: rotate(360deg) translateX(185px) rotate(-360deg) rotateX(-60deg); } 
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        /* Matrix rain effect */
        .matrix-rain {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100vh;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.1;
        }
        
        .matrix-column {
          position: absolute;
          top: -100%;
          font-family: monospace;
          font-size: 20px;
          color: #22c55e;
          animation: matrix-fall linear infinite;
          text-shadow: 0 0 5px #22c55e;
        }
        
        @keyframes matrix-fall {
          to { transform: translateY(200vh); }
        }
        
        /* Glitch effect */
        .glitch {
          position: relative;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.2s infinite;
          color: #22c55e;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 0.2s infinite;
          color: #10b981;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(100% 0 0 0); transform: translate(-2px); }
          40% { clip-path: inset(0 0 100% 0); transform: translate(2px); }
          60% { clip-path: inset(0 100% 0 0); transform: translate(-1px); }
          80% { clip-path: inset(0 0 0 100%); transform: translate(1px); }
          100% { clip-path: inset(0 0 0 0); transform: translate(0); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(0 0 100% 0); transform: translate(2px); }
          40% { clip-path: inset(100% 0 0 0); transform: translate(-2px); }
          60% { clip-path: inset(0 0 0 100%); transform: translate(1px); }
          80% { clip-path: inset(0 100% 0 0); transform: translate(-1px); }
          100% { clip-path: inset(0 0 0 0); transform: translate(0); }
        }
        
        /* Hexagon styles for skills */
        .hexagon {
          width: 150px;
          height: 150px;
          position: relative;
          margin: 30px;
          transform: rotate(30deg);
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .hexagon:hover {
          transform: rotate(30deg) scale(1.1);
        }
        
        .hexagon-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(-30deg);
          background: linear-gradient(135deg, #065f46, #10b981);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid #22c55e;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
        }
        
        .hexagon.active .hexagon-inner {
          animation: hex-pulse 1s ease-in-out infinite;
        }
        
        @keyframes hex-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5); }
          50% { box-shadow: 0 0 60px rgba(34, 197, 94, 0.9); }
        }
        
        /* Project cards - tilted and funky */
        .project-card {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .project-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }
        
        .project-card:hover .project-card-inner {
          transform: rotateY(10deg) rotateX(10deg);
        }
        
        .project-card:nth-child(odd) {
          transform: rotate(-2deg);
        }
        
        .project-card:nth-child(even) {
          transform: rotate(2deg);
        }
        
        /* Terminal effect */
        .terminal {
          background: #000;
          border: 1px solid #22c55e;
          border-radius: 8px;
          padding: 20px;
          font-family: 'Courier New', monospace;
          box-shadow: 0 0 40px rgba(34, 197, 94, 0.3);
        }
        
        .terminal::before {
          content: '> ';
          color: #22c55e;
        }
        
        .blink {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        /* Neon glow buttons */
        .neon-btn {
          background: transparent;
          border: 2px solid #22c55e;
          color: #22c55e;
          padding: 12px 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }
        
        .neon-btn:hover {
          color: #000;
          box-shadow: 0 0 40px #22c55e, inset 0 0 40px rgba(34, 197, 94, 0.2);
        }
        
        .neon-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #22c55e;
          transition: left 0.3s;
          z-index: -1;
        }
        
        .neon-btn:hover::before {
          left: 0;
        }
        
        /* Scanner line effect */
        .scanner {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          top: 0;
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>

      {/* Matrix Rain Background */}
      <div className="matrix-rain">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 5}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({length: 30}, () => String.fromCharCode(Math.random() > 0.5 ? Math.floor(Math.random() * 26) + 65 : Math.floor(Math.random() * 10) + 48)).join('')}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4' : 'py-6'} border-b border-green-900`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-green-400" />
            <span className={`text-xl font-bold ${glitchText ? 'glitch' : ''}`} data-text="Priyanshu.AI">
              Priyanshu.AI
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-green-400 hover:text-green-300 transition-colors hover:text-shadow"
              >
                /{item.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Sphere */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <div className="terminal mb-8">
                <span className="text-green-400">
                  Initializing AI_ENGINEER.exe<span className="blink">_</span>
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-green-400">AI</span>
                <span className="text-green-300"> ARCHITECT</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-400">
                  Building Multi-Agent Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                <Sparkles className="inline w-5 h-5 mr-2 text-green-400" />
                AG2 Maintainer | Enterprise AI Systems | Transforming Reality with Code
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://github.com/priyansh4320" target="_blank" rel="noopener noreferrer"
                   className="neon-btn rounded-lg flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="mailto:priyanshu@ag2.ai"
                   className="neon-btn rounded-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Connect</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <NettedSphere />
            </div>
          </div>
        </div>
        
        <div className="scanner" />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="terminal text-center relative overflow-hidden group">
                <div className="relative z-10">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <div className="text-3xl font-bold text-green-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Hexagon Grid */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
            <Code className="inline w-10 h-10 mr-3" />
            CORE COMPETENCIES
          </h2>
          <p className="text-center text-gray-400 mb-12">Click hexagons to explore skill domains</p>
          
          <div className="flex flex-wrap justify-center items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`hexagon ${activeSkill === index ? 'active' : ''}`}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              >
                <div className="hexagon-inner">
                  <span className="text-4xl mb-2">{skill.emoji}</span>
                  <span className="text-xs font-bold text-center px-2">{skill.name}</span>
                  <span className="text-xl font-bold mt-1">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
          
          {activeSkill !== null && (
            <div className="terminal max-w-2xl mx-auto mt-12">
              <p className="text-green-400">
                SKILL: {skills[activeSkill].name}<br />
                LEVEL: {skills[activeSkill].level}%<br />
                DESC: {skills[activeSkill].description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section - Funky Cards */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
            <Rocket className="inline w-10 h-10 mr-3" />
            PROJECT MATRIX
          </h2>
          <p className="text-center text-gray-400 mb-12">Explore the digital creations</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card-inner">
                  <div className={`terminal relative overflow-hidden bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                    <div className="text-6xl mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-green-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stats.map((stat, i) => (
                        <span key={i} className="px-3 py-1 border border-green-600 rounded-full text-xs">
                          {stat}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center text-green-400 hover:text-green-300">
                        <Target className="w-4 h-4 mr-2" />
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    
                    <div className="scanner" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            <Briefcase className="inline w-10 h-10 mr-3" />
            EXPERIENCE TIMELINE
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="terminal relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">{job.title}</h3>
                    <p className="text-xl text-green-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400">{job.period}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <Zap className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm border border-green-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-400">
            <Terminal className="inline w-10 h-10 mr-3" />
            INITIATE CONNECTION
          </h2>
          
          <div className="terminal max-w-2xl mx-auto mb-8">
            <p className="text-green-400">
              Ready to build the future of AI together?<br />
              Let's create something extraordinary.<span className="blink">_</span>
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="mailto:priyanshu@ag2.ai" 
               className="neon-btn rounded-lg flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span>priyanshu@ag2.ai</span>
            </a>
            
            <a href="https://github.com/priyansh4320" target="_blank" rel="noopener noreferrer"
               className="neon-btn rounded-lg flex items-center space-x-3">
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Priyanshu Deshmukh | <span className="text-green-400">AI ENGINEER @ AG2</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;