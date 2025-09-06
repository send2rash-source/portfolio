export default function Projects() {
  const projects = [
    {
      title: "Omnichannel Promotions Platform",
      company: "ThoughtWorks - Latin America Retailer",
      description: "Built comprehensive promotions platform for largest retailer in Latin America, empowering promotion managers to create advanced promotions & coupons across various attributes with real-time evaluation engine.",
      technologies: ["Microservices", "APIs", "Real-time Processing", "Multi-channel", "Cloud Architecture"],
      achievements: [
        "65% of all orders used at least one promotion during peak shopping events",
        "Conversion rate increased from 1.5% to 2.9% within one month of launch",
        "50% more promotions created compared to legacy system",
        "Zero dependency on engineering teams for promotion setup",
        "Scaled across multiple countries and business units"
      ]
    },
    {
      title: "Agricultural Input Platform",
      company: "Yara International",
      description: "Strategic product enhancements for farmer-facing mobile application serving ~400,000 farmers across India, Southeast Asia, and East Africa with agricultural inputs and services.",
      technologies: ["Mobile App", "USSD Integration", "Multi-region", "Payment Systems", "Offline Capability"],
      achievements: [
        "Enabled 4,000+ non-smartphone users through USSD-based registration",
        "22% increase in registration with guest browse and lean onboarding",
        "30% reduction in time-to-first-purchase",
        "9% increase in basket size and 14% improvement in cart conversion",
        "Launched input finance product enabling loan requests at checkout"
      ]
    },
    {
      title: "Car-sharing Subscription System",
      company: "BlueSG",
      description: "End-to-end customer acquisition and engagement platform with subscription lifecycle management, billing systems, and automated enforcement flows for car-sharing service.",
      technologies: ["Subscription Management", "Billing Systems", "Payment Integration", "Mobile App", "Data Analytics"],
      achievements: [
        "Responsible for driving 20% of total company revenue",
        "95% collectible success rate via automated enforcement flows",
        "30% increase in sign-up conversion through free-tier introduction",
        "15% improvement in sign-up conversion through flow optimizations",
        "Successful legacy system re-platforming with zero downtime"
      ]
    },
    {
      title: "Self-serve Promotions Platform",
      company: "Falabella India",
      description: "Strategy and delivery of self-serve promotions platform to scale real-time campaign execution across countries, businesses, and sales channels.",
      technologies: ["Campaign Management", "Real-time Processing", "Multi-tenant Architecture", "Analytics Dashboard"],
      achievements: [
        "Scaled platform to support 5 countries simultaneously",
        "Integrated 4 different business units on single platform",
        "Enabled all sales channels (online, mobile, in-store)",
        "Reduced campaign setup time from days to minutes",
        "Empowered marketing teams with self-service capabilities"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{project.company}</p>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}