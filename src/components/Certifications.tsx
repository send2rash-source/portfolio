'use client';

import { useState, useEffect, useRef } from 'react';
import { CertificateIcon, CalendarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

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
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      category: "Cloud",
      date: "2023",
      status: "Active",
      description: "Advanced certification demonstrating expertise in designing distributed systems on AWS.",
      skills: ["AWS", "Cloud Architecture", "System Design", "Security"],
      credentialId: "AWS-CSA-PRO-2023"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      category: "DevOps",
      date: "2022",
      status: "Active",
      description: "Demonstrates the ability to work as a Kubernetes administrator in a production environment.",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Linux"],
      credentialId: "CKA-2022-RAS"
    },
    {
      title: "Oracle Certified Professional, Java SE Developer",
      issuer: "Oracle",
      category: "Programming",
      date: "2021",
      status: "Active",
      description: "Professional-level certification in Java SE development and enterprise programming.",
      skills: ["Java", "Spring Framework", "Enterprise Development", "Design Patterns"],
      credentialId: "OCP-JAVA-2021"
    },
    {
      title: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      category: "Agile",
      date: "2020",
      status: "Active",
      description: "Professional certification in Scrum methodology and agile project management.",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership"],
      credentialId: "CSM-2020-RS"
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      category: "Cloud",
      date: "2020",
      status: "Active",
      description: "Demonstrates expertise in developing and maintaining applications on AWS platform.",
      skills: ["AWS", "Serverless", "DynamoDB", "Lambda"],
      credentialId: "AWS-DEV-2020"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      category: "Database",
      date: "2019",
      status: "Active",
      description: "Certification in MongoDB development and database design patterns.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      credentialId: "MDB-DEV-2019"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      category: "Cloud",
      date: "2021",
      status: "Active",
      description: "Professional certification in Google Cloud Platform architecture and design.",
      skills: ["Google Cloud", "Microservices", "System Design", "Security"],
      credentialId: "GCP-PCA-2021"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      category: "Frontend",
      date: "2022",
      status: "Active",
      description: "Professional certification in React development and modern frontend practices.",
      skills: ["React", "JavaScript", "Frontend Development", "State Management"],
      credentialId: "META-REACT-2022"
    }
  ];

  const categories = ['All', 'Cloud', 'DevOps', 'Programming', 'Database', 'Frontend', 'Agile'];

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Cloud': 'from-blue-500 to-cyan-500',
      'DevOps': 'from-green-500 to-teal-500',
      'Programming': 'from-purple-500 to-pink-500',
      'Database': 'from-orange-500 to-red-500',
      'Frontend': 'from-indigo-500 to-purple-500',
      'Agile': 'from-yellow-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud': return '☁️';
      case 'DevOps': return '⚙️';
      case 'Programming': return '💻';
      case 'Database': return '🗄️';
      case 'Frontend': return '🎨';
      case 'Agile': return '🔄';
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
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">8+</div>
                  <div className="text-purple-100">Active Certifications</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-purple-100">Technology Domains</div>
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
                Currently pursuing additional certifications in AI/ML, advanced cloud architecture, 
                and emerging technologies to stay at the forefront of software engineering.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">🤖</div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI/ML Engineering</h4>
                  <p className="text-sm text-gray-600">Machine Learning and AI application development</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Solution Architecture</h4>
                  <p className="text-sm text-gray-600">Advanced system design and enterprise architecture</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Emerging Technologies</h4>
                  <p className="text-sm text-gray-600">Blockchain, IoT, and next-gen development tools</p>
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