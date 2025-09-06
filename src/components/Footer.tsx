export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Rashmi Singh</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Senior Product Manager passionate about building user-centric solutions and driving measurable business impact.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:singh.rashmi2509@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rashmi-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Rashmi Singh. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}