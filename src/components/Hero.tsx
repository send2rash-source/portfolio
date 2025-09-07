'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-blue-600 font-medium mb-4">Senior Product Manager</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Rashmi Singh
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            13+ years of experience driving growth and building B2C, SaaS, and platform products. 
            Specializing in customer acquisition, platform strategy, and data-driven solutions.
          </p>
          
          <div className="flex flex-wrap gap-8 mb-12">
            <div>
              <span className="text-3xl font-bold text-gray-900">13+</span>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">5</span>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">20%</span>
              <p className="text-gray-600">Growth Rate</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
          <span className="text-xs tracking-wider mb-2">SCROLL</span>
          <ChevronDownIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;