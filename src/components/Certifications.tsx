export default function Certifications() {
  const certifications = [
    {
      title: "Product Management: Building a Product Roadmap",
      issuer: "Professional Certification Program",
      date: "2023",
      description: "Comprehensive certification covering product roadmap development, strategic planning, and stakeholder alignment for successful product delivery.",
      skills: ["Product Strategy", "Roadmap Planning", "Stakeholder Management", "Strategic Thinking"]
    },
    {
      title: "Python Programming",
      issuer: "Technical Certification",
      date: "2022",
      description: "Advanced Python programming certification covering data structures, algorithms, web development, and data analysis using Python.",
      skills: ["Python", "Data Analysis", "Programming", "Software Development"]
    },
    {
      title: "Digital Strategy Certification",
      issuer: "Business Strategy Institute",
      date: "2021",
      description: "Strategic certification focusing on digital transformation, technology adoption, and digital business model innovation.",
      skills: ["Digital Strategy", "Business Transformation", "Technology Leadership", "Innovation Management"]
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                <span className="text-gray-500 text-sm font-medium">{cert.date}</span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{cert.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}