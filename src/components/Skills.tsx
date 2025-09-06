'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CogIcon, 
  LightBulbIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

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
      icon: ChartBarIcon,
      title: "Product Management",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Product Strategy", level: 95, years: "10+ years" },
        { name: "Roadmap Planning", level: 90, years: "10+ years" },
        { name: "User Research", level: 85, years: "8+ years" },
        { name: "A/B Testing", level: 88, years: "7+ years" },
        { name: "Product Analytics", level: 92, years: "8+ years" },
        { name: "Stakeholder Management", level: 95, years: "10+ years" }
      ]
    },
    {
      icon: CurrencyDollarIcon,
      title: "Business & Growth",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Revenue Growth", level: 90, years: "8+ years" },
        { name: "Customer Acquisition", level: 92, years: "7+ years" },
        { name: "Conversion Optimization", level: 88, years: "6+ years" },
        { name: "Market Analysis", level: 85, years: "8+ years" },
        { name: "Pricing Strategy", level: 87, years: "5+ years" },
        { name: "Go-to-Market Strategy", level: 90, years: "7+ years" }
      ]
    },
    {
      icon: UserGroupIcon,
      title: "Leadership & Operations",
      color: "from-blue-500 to-teal-500",
      skills: [
        { name: "Team Leadership", level: 92, years: "8+ years" },
        { name: "Cross-functional Collaboration", level: 95, years: "10+ years" },
        { name: "Digital Strategy", level: 90, years: "8+ years" },
        { name: "Operations Management", level: 88, years: "7+ years" },
        { name: "Product Operations", level: 90, years: "8+ years" },
        { name: "Agile/Scrum", level: 90, years: "8+ years" }
      ]
    },
    {
      icon: LightBulbIcon,
      title: "Domain Expertise",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "E-commerce/Retail", level: 95, years: "8+ years" },
        { name: "SaaS Platforms", level: 88, years: "6+ years" },
        { name: "Mobility/Car-sharing", level: 85, years: "2+ years" },
        { name: "AgriTech", level: 82, years: "1+ year" },
        { name: "B2C Products", level: 92, years: "10+ years" },
        { name: "Subscription Business", level: 90, years: "3+ years" }
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive product management expertise with proven ability to drive growth and deliver user-centric solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-6"></div>
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
                          {category.skills.length} competencies
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

          {/* Core Competencies */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Core Competencies</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Beyond product skills, I bring strong analytical thinking, user empathy, and business acumen
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Data-Informed</h4>
                  <p className="text-gray-300">Making decisions based on metrics and user insights</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">User-Centric</h4>
                  <p className="text-gray-300">Focused on solving real user problems effectively</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Growth-Oriented</h4>
                  <p className="text-gray-300">Driving measurable business outcomes and revenue</p>
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