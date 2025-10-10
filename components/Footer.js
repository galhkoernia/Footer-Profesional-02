/* ============================================================
   Project : Footer-Profesional-02
   File    : components/Footer.js
   Author  : Galuh Kurnia
   Date    : 10/10/2025
   Purpose : Landing page utama dengan navigasi & hero section
   ============================================================ */
import Footer from "./components/Footer";

{
  /* II. Professional Footer */
}
<div className="border-t border-gray-200 bg-gray-800 mt-auto">
  <div className="max-w-4xl mx-auto px-6 py-8">
    {/* Main Footer Content */}
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
      {/* Developer Info */}
      <div className="text-center lg:text-left">
        <h3 className="text-lg font-semibold text-white mb-3">
          Developed with 💻
        </h3>
        <p className="text-gray-300 text-sm max-w-md leading-relaxed">
          Crafted with modern web technologies and a passion for creating
          meaningful digital experiences. Focused on performance, security, and
          user-centric design.
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-xs font-medium">
            Active Development By Galuh Kurnia
          </span>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center lg:text-right">
        <h4 className="text-white font-medium mb-4">Connect with Developer</h4>
        <div className="flex justify-center lg:justify-end space-x-4">
          {/* GitHub */}
          <motion.a
            href="https://github.com/galhkoernia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl border border-gray-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              GitHub
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/galuh-kurnia-a25b9b325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSq2Ht6N%2FSR6a32l1xvoR2A%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl border border-gray-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              LinkedIn
            </span>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/galh_krnia?igsh=aXVrbjZuZm90cnBk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl border border-gray-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Instagram
            </span>
          </motion.a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 pt-6 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 AI Companion Project. All rights reserved.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
            </svg>
            <span className="text-xs">Production Ready</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1z" />
            </svg>
            <span className="text-xs">Secure</span>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="mt-6 flex justify-center space-x-3">
      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
    </div>
  </div>
</div>;
