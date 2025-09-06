'use client';

import { useState, useEffect, useRef } from 'react';
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
      degree: "PGDM (MBA)",
      field: "Marketing & Operations",
      institution: "SDMIMD Mysore",
      location: "Mysore, India",
      period: "2010 - 2012"
    },
    {
      degree: "B.Tech",
      field: "Computer Science & Engineering", 
      institution: "ICFAI University, Dehradun",
      location: "Dehradun, India",
      period: "2006 - 2010"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`card-modern p-8 rounded-2xl hover-lift transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>

                {/* Degree Information */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-lg text-blue-600 font-medium mb-4">{edu.field}</p>
                
                {/* Institution Details */}
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <AcademicCapIcon className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;