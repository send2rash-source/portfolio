'use client';

const About = () => {
  const highlights = [
    'Led product strategy for platforms with 10M+ users',
    'Drove 20% YoY growth through data-driven initiatives',
    'Built and managed cross-functional teams across 5 countries',
    'Expertise in B2C, SaaS, and platform products'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            I am a Senior Product Manager with over 13 years of experience in building and scaling 
            digital products across diverse industries. My expertise spans from early-stage startups 
            to established enterprises, where I've consistently delivered products that drive user 
            engagement and business growth.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            I specialize in transforming complex business challenges into elegant product solutions. 
            My approach combines strategic thinking with hands-on execution, leveraging data insights 
            to make informed decisions that balance user needs with business objectives.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;