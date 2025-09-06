export default function Education() {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Operations and Marketing",
      institution: "SDM Institute for Management Development",
      period: "2010 - 2012",
      description: "Focused on strategic operations management and marketing with emphasis on business strategy, supply chain management, and market analysis."
    },
    {
      degree: "Bachelor's Degree",
      field: "Computer Science",
      institution: "The ICFAI University, Dehradun",
      period: "2006 - 2010", 
      description: "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, and software engineering principles."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-1">{edu.field}</p>
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}