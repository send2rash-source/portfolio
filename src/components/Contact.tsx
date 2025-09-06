export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I'm always interested in new opportunities, interesting projects, and meaningful conversations. 
              Whether you're looking for a product manager, have a question about my experience, or just want to connect, I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <a
                href="mailto:singh.rashmi2509@gmail.com"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center gap-2"
              >
                <span>📧</span>
                Send Email
              </a>
              
              <div className="flex space-x-8">
                <a
                  href="https://www.linkedin.com/in/rashmi-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors font-semibold text-lg flex items-center gap-2"
                >
                  <span>💼</span>
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors font-semibold text-lg flex items-center gap-2"
                >
                  <span>📄</span>
                  Resume
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Location</h3>
                  <p className="text-gray-600">Singapore</p>
                  <p className="text-gray-500 text-sm">Available worldwide</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⏰ Response Time</h3>
                  <p className="text-gray-600">24-48 hours</p>
                  <p className="text-gray-500 text-sm">Usually faster</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🎯 Availability</h3>
                  <p className="text-gray-600">Open to opportunities</p>
                  <p className="text-gray-500 text-sm">Full-time & consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}