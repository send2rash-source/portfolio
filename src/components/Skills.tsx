'use client';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Product Management',
      skills: [
        'Product Strategy',
        'Roadmap Planning',
        'User Research',
        'A/B Testing',
        'Agile/Scrum',
        'Data Analysis'
      ]
    },
    {
      title: 'Business',
      skills: [
        'Revenue Growth',
        'Market Analysis',
        'Stakeholder Management',
        'Cross-functional Leadership',
        'Strategic Planning',
        'Business Development'
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-gray-50 py-2 px-4 rounded-md text-gray-700">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;