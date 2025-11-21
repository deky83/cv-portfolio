import React from 'react';
import { Code, Palette, Wrench, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockSkills } from '../data/mockData';

const AboutSkills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-indigo-600" size={32} />,
      skills: mockSkills.frontend
    },
    {
      title: 'Backend & CMS',
      icon: <Wrench className="text-indigo-600" size={32} />,
      skills: mockSkills.backend
    },
    {
      title: 'Design Tools',
      icon: <Palette className="text-indigo-600" size={32} />,
      skills: mockSkills.design
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web and WordPress developer with expertise in creating 
            modern, responsive websites. I combine technical skills with creative 
            design to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Zap className="text-indigo-600" size={32} />
              What I Do
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              I specialize in building responsive websites, custom WordPress themes and plugins, 
              and modern web applications. My approach combines clean code, beautiful design, 
              and optimal performance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Custom WordPress theme and plugin development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Responsive web design and development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Modern JavaScript and React applications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">UI/UX design with Figma and Photoshop</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-indigo-600 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="text-xl font-bold text-gray-900">{category.title}</h4>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level ? 'bg-indigo-600' : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;