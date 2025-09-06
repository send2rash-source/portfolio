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
      role: "Senior Product Manager",
      period: "Dec 2023 - Present",
      location: "Singapore",
      type: "Car-sharing subscription service",
      description: "Led end-to-end strategy and execution for customer acquisition and engagement through subscription, onboarding, and voucher products.",
      achievements: [
        "Responsible for 20% of company revenue driven through customer subscriptions",
        "Introduction of free-tier subscription achieving +30% sign-up conversion",
        "Sign-up flow optimizations resulting in +15% sign-up conversion",
        "Improved Singpass integration reducing time-to-signup by 46%",
        "Built subscription lifecycle and billing systems with 95% collectible success rate via automated enforcement flows"
      ],
      technologies: ["Growth Strategy", "Customer Acquisition", "Subscription Models", "Revenue Optimization", "Platform Strategy"]
    },
    {
      company: "Yara",
      role: "Senior Product Owner",
      period: "Mar 2023 - Sep 2023",
      location: "Singapore",
      type: "Agritech platform for smallholder farmers",
      description: "Led strategic product enhancements for a farmer-facing app used by ~400,000 farmers across India, Southeast Asia, and East Africa.",
      achievements: [
        "Introduced guest browse and lean onboarding flows (+22% registration, -60% clicks to home)",
        "Enabled USSD-based registration and ordering for 4,000+ non-smartphone users",
        "Introduced crop-based navigation and ordering flow optimisations",
        "Achieved -30% time-to-first-purchase, +9% basket size, and +14% cart conversion",
        "Launched input finance product in partnership with banks"
      ],
      technologies: ["Product Strategy", "User Experience", "Mobile Apps", "AgriTech", "Financial Services"]
    },
    {
      company: "Falabella / ThoughtWorks",
      role: "Product Manager",
      period: "Sep 2019 - Mar 2023",
      location: "India & Chile",
      type: "Omnichannel promotions platform",
      description: "Led strategy and delivery of a self-serve promotions platform for Latin America's largest retailer to scale real-time campaign execution across countries, businesses, and sales channels.",
      achievements: [
        "Scaled platform to support 5 countries, 4 businesses, and all channels",
        "Replaced legacy tools enabling 1.5× more promotions post-launch",
        "Reduced engineering dependency for promo setup by 60%, accelerating time-to-launch",
        "Automated onboarding of 2,000+ daily store promotions to increase in-store adoption",
        "Supported 65% of peak campaign orders with at least one promotion applied",
        "Setup dashboards to evaluate promotion effectiveness and guide campaign strategy"
      ],
      technologies: ["E-commerce", "Promotions Platform", "Multi-country Operations", "Retail Tech", "Data Analytics"]
    },
    {
      company: "Cognizant",
      role: "Associate Product Owner",
      period: "Jul 2016 - May 2019",
      location: "India/Nepal",
      type: "Retail merchandising & planning suite",
      description: "Led roadmap and delivery for Softvision Suite, a platform supporting end-to-end merchandise planning for large US retailers.",
      achievements: [
        "Delivered plan-to-sell workflows for multi-store retailers, including one with 1,000+ stores",
        "Managed 3 agile teams and 4-6 analysts across India and Nepal",
        "Reduced operating costs by 50% by establishing and scaling a Nepal delivery center",
        "Prioritized and shipped high-impact releases through structured roadmap and stakeholder alignment",
        "Mentored business analysts and converted epics to well-defined stories with edge-case coverage"
      ],
      technologies: ["Product Management", "Retail Systems", "Team Leadership", "Agile", "Cost Optimization"]
    },
    {
      company: "Cognizant",
      role: "Business Analyst → Lead Business Analyst",
      period: "Mar 2012 - Jun 2016",
      location: "India",
      type: "Assortment planning & vendor collaboration systems",
      description: "Contributed to end-to-end product delivery across multiple merchandising tools used by top North American retailers.",
      achievements: [
        "Enhanced assortment, purchasing, and allocation modules across 7 retail clients",
        "Implemented merchandise financial planning workflows to track plan vs actuals",
        "Delivered dashboards to monitor product health and measure KPIs across sprints",
        "Launched configurable vendor contract management platform to streamline retailer-vendor collaboration",
        "Reduced manual overhead in allowance tracking and approvals"
      ],
      technologies: ["Business Analysis", "Merchandising Systems", "Vendor Management", "Dashboard Analytics", "Process Automation"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-800">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company List */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExperience(index)}
                    className={`w-full text-left p-4 rounded-xl mb-3 transition-all duration-300 ${
                      selectedExperience === index
                        ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-lg">{exp.company}</div>
                    <div className={`text-sm ${selectedExperience === index ? 'text-blue-100' : 'text-gray-500'}`}>
                      {exp.period}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-2">
              <div className="card-modern p-8 rounded-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {experiences[selectedExperience].role}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      <span>{experiences[selectedExperience].company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{experiences[selectedExperience].period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{experiences[selectedExperience].location}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-blue-600 font-medium">
                    {experiences[selectedExperience].type}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {experiences[selectedExperience].description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experiences[selectedExperience].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">▸</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Skills & Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;