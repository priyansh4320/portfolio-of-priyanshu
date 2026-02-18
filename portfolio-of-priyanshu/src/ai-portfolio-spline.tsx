import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Code, Briefcase, Rocket, User, ExternalLink } from 'lucide-react';
import './App.css';

// Replace with your Spline scene URL from https://spline.design (Export → Code export)
// Example: 'https://my.spline.design/untitled-abc123'
const SPLINE_SCENE_URL = '';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and TypeScript',
      link: '#',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Project 2',
      description: 'Full-stack application with Node.js and MongoDB',
      link: '#',
      tags: ['Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Project 3',
      description: 'Mobile app developed with React Native',
      link: '#',
      tags: ['React Native', 'Firebase', 'Redux']
    }
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Spline (iframe) */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {SPLINE_SCENE_URL ? (
            <iframe
              src={SPLINE_SCENE_URL}
              title="Spline 3D"
              className="w-full h-full border-0 pointer-events-none"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
          )}
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <User className="w-10 h-10" />
            About Me
          </h2>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            I'm a passionate developer who loves creating beautiful and functional web applications.
            With expertise in modern web technologies, I bring ideas to life through clean code
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Code className="w-10 h-10" />
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Rocket className="w-10 h-10" />
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-600/20 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-gray-800/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10" />
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
