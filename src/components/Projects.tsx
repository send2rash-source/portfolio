'use client';

import { useState, useEffect, useRef } from 'react';
import { EyeIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      title: "Electric Vehicle Sharing Platform",
      category: "Full Stack",
      description: "Comprehensive EV sharing platform with real-time vehicle tracking, smart booking system, and payment integration for BlueSG.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Spring Boot", "AWS", "PostgreSQL", "Docker"],
      features: [
        "Real-time vehicle tracking and availability",
        "Smart booking algorithm with route optimization",
        "Integrated payment gateway with multiple providers",
        "Admin dashboard for fleet management"
      ],
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "40% faster"
      }
    },
    {
      title: "Agricultural Intelligence Platform",
      category: "Data Analytics",
      description: "AI-powered platform for crop monitoring and yield prediction serving farmers across multiple countries at Yara International.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "React", "MongoDB", "AWS", "TensorFlow"],
      features: [
        "Satellite imagery analysis for crop health monitoring",
        "ML-based yield prediction models",
        "Weather data integration and alerts",
        "Mobile-responsive farmer dashboard"
      ],
      metrics: {
        farmers: "10,000+",
        accuracy: "85%",
        countries: "15+"
      }
    },
    {
      title: "E-commerce Order Management System",
      category: "Enterprise",
      description: "High-volume order processing system handling complex workflows for Falabella's Latin American operations.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring", "MySQL", "Redis", "Angular"],
      features: [
        "High-throughput order processing pipeline",
        "Inventory management with real-time updates",
        "Multi-channel integration (web, mobile, POS)",
        "Advanced reporting and analytics dashboard"
      ],
      metrics: {
        orders: "100K+ daily",
        speed: "50% faster",
        accuracy: "99.8%"
      }
    },
    {
      title: "Microservices Migration Platform",
      category: "DevOps",
      description: "Led enterprise monolith to microservices migration with containerization and CI/CD automation at ThoughtWorks.",
      image: "/api/placeholder/400/250",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      features: [
        "Automated containerization of legacy applications",
        "Service mesh implementation with Istio",
        "CI/CD pipeline with zero-downtime deployments",
        "Monitoring and observability stack"
      ],
      metrics: {
        services: "25+",
        deployment: "10x faster",
        downtime: "Zero"
      }
    },
    {
      title: "Financial Services Portal",
      category: "Enterprise",
      description: "Secure banking portal with multi-factor authentication and real-time transaction processing for enterprise clients.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring Security", "Oracle", "JavaScript"],
      features: [
        "Multi-factor authentication system",
        "Real-time transaction processing",
        "Regulatory compliance (PCI DSS, SOX)",
        "Advanced security monitoring"
      ],
      metrics: {
        transactions: "1M+ daily",
        security: "Zero breaches",
        compliance: "100%"
      }
    },
    {
      title: "Cloud-Native Analytics Platform",
      category: "Cloud",
      description: "Scalable data analytics platform with real-time processing capabilities and interactive dashboards.",
      image: "/api/placeholder/400/250",
      technologies: ["AWS Lambda", "DynamoDB", "React", "D3.js", "Apache Kafka"],
      features: [
        "Serverless data processing architecture",
        "Real-time streaming analytics",
        "Interactive data visualization",
        "Auto-scaling based on demand"
      ],
      metrics: {
        data: "1TB+ daily",
        latency: "<100ms",
        cost: "60% reduction"
      }
    }
  ];

  const categories = ['All', 'Full Stack', 'Enterprise', 'Data Analytics', 'DevOps', 'Cloud'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of impactful solutions delivered across various industries and technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`card-modern p-6 rounded-2xl group transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center">
                  <div className="text-6xl text-purple-300">
                    <CodeBracketIcon className="w-16 h-16" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'Full Stack' ? 'bg-blue-100 text-blue-700' :
                      project.category === 'Enterprise' ? 'bg-green-100 text-green-700' :
                      project.category === 'Data Analytics' ? 'bg-purple-100 text-purple-700' :
                      project.category === 'DevOps' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                      <EyeIcon className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-all duration-300 text-sm">
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in My Work?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and explore how we can build something amazing together.
              </p>
              <a 
                href="#contact" 
                className="btn-primary hover-lift inline-flex items-center space-x-2"
              >
                <span>Start a Conversation</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;