export default function Achievements() {
  const achievements = [
    {
      title: "Revenue Impact",
      value: "20%",
      description: "of company revenue driven through customer subscriptions at BlueSG"
    },
    {
      title: "User Growth",
      value: "400K+",
      description: "farmers served across India, Southeast Asia, and East Africa"
    },
    {
      title: "Conversion Rate",
      value: "1.5% → 2.9%",
      description: "improvement in conversion rate with new promotions platform"
    },
    {
      title: "Sign-up Boost",
      value: "+30%",
      description: "sign-up conversion increase through free-tier subscription"
    },
    {
      title: "Global Reach",
      value: "5 Countries",
      description: "platform scaled across countries and multiple business units"
    },
    {
      title: "System Reliability",
      value: "95%",
      description: "collectible success rate via automated enforcement flows"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Big Wins</h2>
        <p className="text-gray-600 mb-12">Key achievements and measurable impact</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}