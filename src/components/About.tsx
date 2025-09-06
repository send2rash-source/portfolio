export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800">About</span> <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a Senior Product Manager with <span className="font-semibold text-indigo-600">13+ years of experience</span> driving growth and building B2C, SaaS, and platform products across car-sharing, agritech, and retail. I specialize in transforming complex business challenges into user-centric solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I have built and scaled products for customers across <span className="font-semibold text-purple-600">US, Latin America, Asia, and East Africa</span>. My expertise lies in platform strategy, data-informed decision making, and delivering measurable business impact through innovative product solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in <span className="font-semibold text-emerald-600">Singapore</span>, I bring a global perspective to product development and have a proven track record of increasing conversion rates, driving revenue growth, and building scalable platforms.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">13+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600">400K+</div>
                  <div className="text-sm text-slate-600">Users Impacted</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 card-hover">
              <h3 className="font-display text-2xl font-semibold text-slate-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700">13+ years in Product Management</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700">Ex-Thoughtworks Senior Consultant</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700">Global experience across 4+ regions</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700">MBA in Operations & Marketing</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700">Computer Science Graduate</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌏</div>
                  <p className="text-slate-600 text-sm">Working globally from Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}