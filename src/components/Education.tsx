'use client';

const Education = () => {
  const education = [
    {
      degree: 'PGDM (MBA)',
      field: 'Marketing & Operations',
      institution: 'SDMIMD Mysore',
      year: '2010 - 2012'
    },
    {
      degree: 'B.Tech',
      field: 'Computer Science & Engineering',
      institution: 'ICFAI University, Dehradun',
      year: '2006 - 2010'
    }
  ];

  const certifications = [
    'Product Management Certificate',
    'Data Analytics Certificate',
    'Agile & Scrum Certification'
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Education & Certifications
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.field}</p>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;