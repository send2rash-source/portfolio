export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 pt-20">
        <div className="animate-fadeInUp mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-5xl mb-8 shadow-2xl animate-float">
            👩‍💼
          </div>
        </div>
        
        <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Rashmi</span>{' '}
            <span className="text-slate-800">Singh</span>
          </h1>
        </div>
        
        <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto font-medium">
            Senior Product Manager | Ex-Thoughtworks | Retail | Ecommerce | Product Strategy
          </p>
        </div>
        
        <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed">
            13+ years of experience driving growth and building B2C, SaaS, and platform products 
            across car-sharing, agritech, and retail. Proven success delivering growth, platform strategy, 
            and user-centric problem-solving across <span className="font-semibold text-indigo-600">US, Latin America, Asia, and East Africa</span>.
          </p>
        </div>
        
        <div className="animate-fadeInUp flex flex-col sm:flex-row gap-6 justify-center" style={{animationDelay: '0.8s'}}>
          <a
            href="#contact"
            className="group gradient-bg text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
          >
            Get In Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#projects"
            className="border-2 border-slate-300 text-slate-700 px-10 py-4 rounded-xl hover:border-indigo-400 hover:text-indigo-600 hover:bg-white hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}