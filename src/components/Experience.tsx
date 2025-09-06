export default function Experience() {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "BlueSG",
      period: "December 2023 - Present",
      location: "Singapore",
      description: [
        "Led end-to-end strategy and execution for customer acquisition and engagement through subscription, onboarding, and voucher products",
        "Responsible for 20% of company revenue driven through customer subscriptions",
        "Achieved +30% sign-up conversion through free-tier subscription introduction and +15% through sign-up flow optimizations", 
        "Built subscription lifecycle and billing systems achieving 95% collectible success rate via automated enforcement flows",
        "Led re-platforming of legacy system with zero system downtime"
      ]
    },
    {
      title: "Senior Product Owner",
      company: "Yara International",
      period: "March 2023 - September 2023", 
      location: "Singapore",
      description: [
        "Led strategic product enhancements for farmer-facing app used by ~400,000 farmers across India, Southeast Asia, and East Africa",
        "Introduced guest browse and lean onboarding flows (+22% registration, –60% clicks to home)",
        "Enabled USSD-based registration and ordering for 4,000+ non-smartphone users",
        "Achieved –30% time-to-first-purchase, +9% basket size, and +14% cart conversion",
        "Launched input finance product in partnership with banks, allowing farmers to request loans at checkout"
      ]
    },
    {
      title: "Product Manager", 
      company: "Falabella India",
      period: "August 2022 - March 2023",
      location: "India",
      description: [
        "Led strategy and delivery of self-serve promotions platform to scale real-time campaign execution",
        "Scaled platform to support 5 countries, 4 businesses, and all sales channels",
        "Enabled marketing teams to create and deploy promotions without engineering dependency"
      ]
    },
    {
      title: "Senior Consultant - Business Analyst / Product Owner / Product Manager",
      company: "ThoughtWorks", 
      period: "September 2019 - June 2022",
      location: "Global",
      description: [
        "Created Omnichannel Promotions Product for largest retailer in Latin America",
        "Built robust promotion engine with microservice architecture supporting real-time evaluation",
        "Achieved 65% of all orders using promotions during shopping events in Chile 2021",
        "Increased conversion rate from 1.5% to 2.9% with 50% more promotions created",
        "Led digital transformation across multiple countries and business units"
      ]
    },
    {
      title: "Associate Product Owner",
      company: "Cognizant",
      period: "June 2016 - June 2019",
      location: "Mysore",
      description: [
        "Spearheaded development for Demand Management Product helping US retailers automate merchandise plan-to-sell process",
        "Managed 4-6 business analysts and led 3 development teams (15-20 members) simultaneously",
        "Reduced product development cost by 50% by setting up team in another country",
        "Completed multiple feature-rich releases including major release for largest US retailer with 1000+ stores",
        "Generated buy-in with strategic product roadmap by engaging stakeholders and analyzing competition"
      ]
    },
    {
      title: "Associate - Lead Business Analyst",
      company: "Cognizant",
      period: "July 2015 - June 2016",
      location: "Mysore",
      description: [
        "Led product development for Buyer's WorkMate merchandising solution for large US retailers",
        "Drove development across multiple modules for several clients via 2-3 Business Analysts",
        "Proposed and implemented innovative solutions to address performance and usability issues",
        "Successfully set up Merchandise Financial Planning to help retailers track planned vs actuals"
      ]
    },
    {
      title: "Senior Business Analyst",
      company: "Cognizant",
      period: "July 2013 - June 2015",
      location: "Mysore",
      description: [
        "Self-learnt Buyer's WorkMate and trained newly assembled team",
        "Set up agile processes for new team to increase productivity and support multiple clients",
        "Emerged as Go-To person for queries and impediments",
        "Recognized as 'Star of the month' employee for strong leadership"
      ]
    },
    {
      title: "Business Analyst",
      company: "Cognizant",
      period: "March 2012 - June 2013",
      location: "Mysore",
      description: [
        "Worked on vendor-retailer collaboration portal capturing vendor-allowance and contract information",
        "Created questionnaires and prototypes to elicit and freeze requirements",
        "Designed approval workflow with complex conditions determining next actor in flow",
        "Re-engineered portal based on pain-points from previous implementations"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}