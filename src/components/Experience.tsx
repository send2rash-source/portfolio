'use client';

const Experience = () => {
  const experiences = [
    {
      company: 'BlueSG',
      role: 'Senior Product Manager',
      period: '2023 - Present',
      location: 'Singapore',
      description: 'Leading product strategy for electric car-sharing platform in Singapore.',
      achievements: [
        'Responsible for 20% of company revenue through subscriptions',
        'Increased sign-up conversion by 30% with free-tier introduction',
        'Reduced time-to-signup by 46% with Singpass integration'
      ]
    },
    {
      company: 'Yara International',
      role: 'Senior Product Owner',
      period: '2023',
      location: 'Singapore',
      description: 'Led strategic enhancements for farmer-facing app serving 400K+ users.',
      achievements: [
        'Increased registration by 22% with lean onboarding',
        'Reduced time-to-first-purchase by 30%',
        'Launched input finance product with banking partners'
      ]
    },
    {
      company: 'Falabella / ThoughtWorks',
      role: 'Product Manager',
      period: '2019 - 2023',
      location: 'India & Chile',
      description: 'Built self-serve promotions platform for LATAM\'s largest retailer.',
      achievements: [
        'Scaled to 5 countries and 4 business units',
        'Enabled 1.5× more promotions post-launch',
        'Reduced engineering dependency by 60%'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                <div className="absolute -left-9 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;