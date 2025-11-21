import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-indigo-600 font-semibold text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Web & WordPress
              <span className="block text-indigo-600">Developer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Crafting beautiful, responsive websites and powerful WordPress solutions. 
              Transforming ideas into digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg"
              >
                View My Work <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Linkedin size={24} className="text-gray-700" />
              </a>
              <a
                href="mailto:developer@example.com"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Mail size={24} className="text-gray-700" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-green-400">
                    <span className="text-purple-400">const</span> developer = {'{'}
                    <div className="ml-4">
                      <span className="text-blue-400">name:</span> <span className="text-yellow-300">"Your Name"</span>,<br />
                      <span className="text-blue-400">skills:</span> [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"WordPress"</span>],<br />
                      <span className="text-blue-400">passion:</span> <span className="text-yellow-300">"Building"</span>
                    </div>
                    {'}'};
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;