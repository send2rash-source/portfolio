'use client';

import { useState, useEffect, useRef } from 'react';
import { CodeBracketIcon, CloudIcon, CpuChipIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: CodeBracketIcon,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: 95, years: "10+ years" },
        { name: "JavaScript/TypeScript", level: 90, years: "8+ years" },
        { name: "Python", level: 85, years: "5+ years" },
        { name: "SQL", level: 90, years: "10+ years" },
        { name: "HTML/CSS", level: 95, years: "10+ years" },
        { name: "C++", level: 75, years: "3+ years" }
      ]
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Frameworks & Libraries",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "React.js", level: 95, years: "6+ years" },
        { name: "Spring Boot", level: 90, years: "8+ years" },
        { name: "Node.js", level: 85, years: "5+ years" },
        { name: "Angular", level: 80, years: "4+ years" },
        { name: "Express.js", level: 85, years: "4+ years" },
        { name: "Next.js", level: 80, years: "3+ years" }
      ]
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 90, years: "6+ years" },
        { name: "Docker", level: 85, years: "5+ years" },
        { name: "Kubernetes", level: 80, years: "3+ years" },
        { name: "Jenkins", level: 85, years: "5+ years" },
        { name: "Terraform", level: 75, years: "2+ years" },
        { name: "CI/CD", level: 90, years: "6+ years" }
      ]
    },
    {
      icon: CpuChipIcon,
      title: "Databases & Tools",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 90, years: "8+ years" },
        { name: "MySQL", level: 90, years: "10+ years" },
        { name: "MongoDB", level: 85, years: "5+ years" },
        { name: "Redis", level: 80, years: "4+ years" },
        { name: "Git", level: 95, years: "10+ years" },
        { name: "Microservices", level: 90, years: "6+ years" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across the full technology stack with deep knowledge in modern development practices
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Category Tabs */}
            <div className="lg:col-span-4">
              <div className="space-y-2 sticky top-32">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === index
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{category.title}</div>
                        <div className={`text-sm ${
                          activeCategory === index ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {category.skills.length} technologies
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Details */}
            <div className="lg:col-span-8">
              <div className={`transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                {skillCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className={`transition-all duration-300 ${
                      activeCategory === categoryIndex ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center space-x-3 mb-8">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                          <p className="text-gray-600">Proficiency levels and experience</p>
                        </div>
                      </div>

                      <div className="grid gap-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">{skill.years}</span>
                                <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                                style={{
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 100}ms`
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Overview */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Core Competencies</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Beyond technical skills, I bring strong leadership, problem-solving, and communication abilities
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-300">Always exploring new technologies and methodologies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Leadership</h4>
                  <p className="text-gray-300">Leading teams and mentoring junior developers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Performance</h4>
                  <p className="text-gray-300">Optimizing applications for speed and scalability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;