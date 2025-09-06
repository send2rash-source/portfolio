'use client';

import { useState, useEffect, useRef } from 'react';
import { AcademicCapIcon, CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Business Administration and Management",
      institution: "Bharathiar University",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2006 - 2008",
      type: "Master's Degree",
      description: "Comprehensive business education focusing on strategic management, leadership, and organizational behavior.",
      highlights: [
        "Strategic Management and Business Planning",
        "Leadership and Team Management",
        "Financial Analysis and Decision Making",
        "Operations and Project Management"
      ]
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "Anna University",
      location: "Chennai, Tamil Nadu, India",
      period: "2002 - 2006",
      type: "Bachelor's Degree",
      description: "Strong foundation in computer science fundamentals, programming languages, and software engineering principles.",
      highlights: [
        "Data Structures and Algorithms",
        "Software Engineering Principles",
        "Database Management Systems",
        "Computer Networks and Security"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistently maintained high academic performance throughout both degree programs"
    },
    {
      title: "Technical Foundation",
      description: "Built strong foundation in computer science that enabled successful software engineering career"
    },
    {
      title: "Business Acumen",
      description: "Combined technical expertise with business knowledge for strategic decision making"
    },
    {
      title: "Leadership Development",
      description: "Developed leadership skills that helped in managing technical teams effectively"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Education</span> & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strong academic foundation combining technical expertise with business acumen
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="card-modern p-8 rounded-2xl hover-lift">
                        {/* Institution Badge */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <AcademicCapIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-purple-600 font-medium">{edu.type}</div>
                            <div className="text-xs text-gray-500">{edu.period}</div>
                          </div>
                        </div>

                        {/* Degree Information */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-purple-600 font-medium mb-4">{edu.field}</p>
                        
                        {/* Institution Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <AcademicCapIcon className="w-4 h-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">{edu.description}</p>

                        {/* Key Highlights */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Key Areas of Study:</h4>
                          <div className="space-y-2">
                            {edu.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    </div>

                    {/* Empty Space for Alternating Layout */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Academic Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How my educational foundation shaped my professional journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover-lift text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrophyIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning Section */}
          <div className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Commitment to Continuous Learning</h3>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Beyond formal education, I continuously update my skills through certifications, 
                online courses, and hands-on experimentation with emerging technologies.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-purple-100">Online Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">8+</div>
                  <div className="text-purple-100">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-purple-100">Tech Conferences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;