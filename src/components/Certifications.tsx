'use client';

import { useState, useEffect, useRef } from 'react';
import { AcademicCapIcon, CalendarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const certifications = [
    {
      title: "Product Management: Building a Product Roadmap",
      issuer: "LinkedIn Learning",
      category: "Product",
      date: "2023",
      status: "Active",
      description: "Certification in strategic product roadmap development and prioritization frameworks.",
      skills: ["Product Strategy", "Roadmapping", "Prioritization", "Stakeholder Management"],
      credentialId: "LI-PM-ROADMAP-2023"
    },
    {
      title: "Product Management: Building a Product Roadmap",
      issuer: "Coursera",
      category: "Product",
      date: "2023",
      status: "Active",
      description: "Advanced certification in product roadmap planning and execution strategies.",
      skills: ["Product Planning", "Strategic Thinking", "Feature Prioritization", "OKRs"],
      credentialId: "COURSERA-PM-2023"
    },
    {
      title: "Python Programming",
      issuer: "Python Institute",
      category: "Programming",
      date: "2022",
      status: "Active",
      description: "Professional certification in Python programming for data analysis and automation.",
      skills: ["Python", "Data Analysis", "Automation", "Scripting"],
      credentialId: "PY-PROG-2022"
    }
  ];

  const categories = ['All', 'Product', 'Programming'];

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Product': 'from-blue-500 to-cyan-500',
      'Programming': 'from-purple-500 to-pink-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product': return '📊';
      case 'Programming': return '💻';
      default: return '📜';
    }
  };

  return (
    <section id="certifications" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Certifications</span> & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications demonstrating expertise across various technologies and methodologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md border'
                }`}
              >
                {category === 'All' ? '🏆' : getCategoryIcon(category)} {category}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCertifications.map((cert, index) => (
              <div
                key={index}
                className={`card-modern p-6 rounded-2xl hover-lift transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Certification Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${getCategoryColor(cert.category)} flex items-center justify-center text-2xl`}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                      <CheckBadgeIcon className="w-4 h-4" />
                      <span>{cert.status}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs mt-1">
                      <CalendarIcon className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Certification Details */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-purple-600 font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Certification Journey</h3>
                <p className="text-purple-100 max-w-2xl mx-auto">
                  Continuous learning and professional development across multiple domains
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
                  <div className="text-purple-100">Active Certifications</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">2</div>
                  <div className="text-purple-100">Skill Domains</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-purple-100">Pass Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">24</div>
                  <div className="text-purple-100">Months Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Learning Plans */}
          <div className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Currently pursuing additional certifications in advanced product management, 
                data analytics, and emerging business strategies to stay at the forefront of product innovation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Growth Strategy</h4>
                  <p className="text-sm text-gray-600">Advanced growth hacking and revenue optimization</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Analytics</h4>
                  <p className="text-sm text-gray-600">Advanced analytics for product decision making</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">🤖</div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI Product Management</h4>
                  <p className="text-sm text-gray-600">Building and managing AI-powered products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;