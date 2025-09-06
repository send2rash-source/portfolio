export default function Skills() {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        "Product Strategy", "Product Roadmapping", "Product Operations", "Go-to-Market Strategy",
        "User Research", "Data Analysis", "Product Analytics", "Customer Acquisition",
        "Revenue Optimization", "Platform Strategy", "Product-Market Fit", "Product Lifecycle Management"
      ]
    },
    {
      title: "Technical Skills", 
      skills: [
        "Python Programming", "SQL", "Data Analysis", "API Design", "Microservices Architecture",
        "System Design", "Database Management", "Cloud Platforms", "Business Intelligence",
        "A/B Testing", "Analytics Tools", "Technical Documentation"
      ]
    },
    {
      title: "Leadership & Operations",
      skills: [
        "Digital Strategy", "Operations Management", "Cross-functional Leadership", 
        "Agile Methodologies", "Scrum", "Kanban", "Team Management", "Stakeholder Management",
        "Strategic Planning", "Budget Management", "Vendor Management", "Process Improvement"
      ]
    },
    {
      title: "Domain Expertise",
      skills: [
        "E-commerce", "Retail Technology", "AgriTech", "Car-sharing", "SaaS Platforms",
        "B2C Products", "Subscription Models", "Promotions & Pricing", "Supply Chain",
        "Financial Services", "International Markets", "Emerging Markets"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800">Skills &</span> <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}