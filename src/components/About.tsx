'use client';

import { useState, useEffect, useRef } from 'react';
import { ChartBarIcon, UserGroupIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const About = () => {
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

  const highlights = [
    {
      icon: ChartBarIcon,
      title: "13+ Years Experience",
      description: "Product management across B2C, SaaS, and platform products"
    },
    {
      icon: UserGroupIcon,
      title: "Cross-functional Leadership",
      description: "Led teams across 5 countries and multiple business units"
    },
    {
      icon: AcademicCapIcon,
      title: "Continuous Learning",
      description: "MBA + Computer Science with Product Management certifications"
    },
    {
      icon: TrophyIcon,
      title: "Proven Impact",
      description: "Driven 20% revenue growth and 30% conversion improvements"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-800">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I&apos;m a passionate <span className="font-semibold text-blue-600">Senior Product Manager</span> with over 
                  <span className="font-semibold text-blue-600"> 13 years</span> of experience driving growth and building 
                  B2C, SaaS, and platform products. My journey spans across car-sharing, agritech, and retail sectors, 
                  where I&apos;ve consistently delivered measurable business impact.
                </p>
                
                <p>
                  Throughout my career at companies like <span className="font-semibold">BlueSG, Yara International, Falabella India, 
                  ThoughtWorks, and Cognizant</span>, I&apos;ve specialized in customer acquisition, platform strategy, and 
                  user-centric problem-solving. I&apos;ve built and scaled products for customers across US, Latin America, 
                  Asia, and East Africa, driving significant revenue growth and conversion improvements.
                </p>
                
                <p>
                  What drives me is the opportunity to create products that solve real user problems and deliver measurable 
                  business outcomes. I believe in data-informed decision making and bringing together cross-functional teams 
                  to build exceptional products that delight customers.
                </p>

                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="btn-primary hover-lift inline-flex items-center space-x-2"
                  >
                    <span>Let&apos;s Connect</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="card-modern p-6 rounded-2xl hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <highlight.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">13+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">400K+</div>
                  <div className="text-blue-100">Users Impacted</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">5</div>
                  <div className="text-blue-100">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">30%</div>
                  <div className="text-blue-100">Conversion Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;