'use client';

import { useState, useEffect, useRef } from 'react';
import { BuildingOfficeIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(0);
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

  const experiences = [
    {
      company: "BlueSG",
      role: "Senior Software Engineer",
      period: "Nov 2023 - Present",
      location: "Singapore",
      type: "Full-time",
      description: "Leading full-stack development for electric vehicle sharing platform, focusing on scalable microservices architecture and cloud solutions.",
      achievements: [
        "Architected and developed microservices using Spring Boot and React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Led team of 5 engineers in delivering critical platform features",
        "Optimized system performance resulting in 40% faster response times"
      ],
      technologies: ["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes"]
    },
    {
      company: "Yara International",
      role: "Senior Software Engineer",
      period: "Jun 2022 - Oct 2023",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      description: "Developed agricultural technology solutions and digital farming platforms for global markets.",
      achievements: [
        "Built scalable web applications serving 10,000+ farmers globally",
        "Implemented real-time data analytics for crop monitoring systems",
        "Collaborated with cross-functional teams across multiple time zones",
        "Mentored junior developers and established coding best practices"
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "MongoDB"]
    },
    {
      company: "Falabella India",
      role: "Senior Software Engineer",
      period: "Apr 2021 - Jun 2022",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      description: "Developed e-commerce solutions and retail technology platforms for Latin American markets.",
      achievements: [
        "Led development of order management system handling 100k+ daily transactions",
        "Implemented payment gateway integrations with multiple providers",
        "Optimized database queries reducing page load times by 50%",
        "Established automated testing framework improving code coverage to 85%"
      ],
      technologies: ["Java", "Spring Framework", "Angular", "MySQL", "Redis", "Microservices"]
    },
    {
      company: "ThoughtWorks",
      role: "Senior Consultant Developer",
      period: "Aug 2019 - Mar 2021",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      description: "Consulted for multiple clients delivering custom software solutions and digital transformation projects.",
      achievements: [
        "Delivered 5+ client projects with 100% on-time completion rate",
        "Implemented DevOps practices reducing deployment cycles from weeks to hours",
        "Led technical workshops and knowledge sharing sessions",
        "Contributed to open-source projects and community initiatives"
      ],
      technologies: ["Java", "React", "Docker", "Jenkins", "AWS", "Terraform"]
    },
    {
      company: "Cognizant",
      role: "Senior Associate / Team Lead",
      period: "Jul 2011 - Jul 2019",
      location: "Chennai, Tamil Nadu, India",
      type: "Full-time",
      description: "Progressed through multiple roles from Associate to Team Lead, delivering enterprise solutions for Fortune 500 clients.",
      achievements: [
        "Led team of 12 developers across multiple client engagements",
        "Delivered 15+ enterprise applications with zero critical production issues",
        "Established center of excellence for modern web development practices",
        "Achieved 95% client satisfaction score across all managed projects"
      ],
      technologies: ["Java", "J2EE", "Spring", "Hibernate", "Oracle", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey through innovative companies and transformative projects
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company List - Left Side */}
            <div className="lg:col-span-4">
              <div className="space-y-2 sticky top-32">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExperience(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedExperience === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <BuildingOfficeIcon className="w-5 h-5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold truncate">{exp.company}</div>
                        <div className={`text-sm truncate ${
                          selectedExperience === index ? 'text-purple-100' : 'text-gray-500'
                        }`}>
                          {exp.role}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details - Right Side */}
            <div className="lg:col-span-8">
              <div className={`transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      selectedExperience === index ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="card-modern p-8 rounded-2xl">
                      {/* Company Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Career Timeline</h3>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full"></div>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-4 rounded-xl shadow-md hover-lift">
                        <h4 className="font-semibold text-gray-800">{exp.company}</h4>
                        <p className="text-sm text-gray-600">{exp.period}</p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;