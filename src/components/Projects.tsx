'use client';

const Projects = () => {
  const projects = [
    {
      title: 'BlueSG Car-Sharing Platform',
      role: 'Senior Product Manager',
      description: 'Led product strategy for Singapore\'s electric car-sharing service, increasing user base by 30% and improving retention.',
      achievements: [
        'Launched mobile app with 4.5+ rating',
        'Reduced customer acquisition cost by 25%',
        'Improved conversion rate by 20%'
      ]
    },
    {
      title: 'Yara Digital Farming Platform',
      role: 'Product Manager',
      description: 'Built digital farming solutions helping 100K+ farmers optimize crop yields through data-driven insights.',
      achievements: [
        'Scaled platform to 5 countries',
        'Increased farmer engagement by 40%',
        'Generated $2M+ in revenue'
      ]
    },
    {
      title: 'Falabella Retail Ecosystem',
      role: 'Product Lead',
      description: 'Transformed omnichannel retail experience for Latin America\'s largest retail chain.',
      achievements: [
        'Unified online and offline experience',
        'Reduced cart abandonment by 15%',
        'Improved NPS score by 20 points'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-blue-600 mb-4">{project.role}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Key Achievements:</p>
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-sm text-gray-600">{achievement}</span>
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

export default Projects;