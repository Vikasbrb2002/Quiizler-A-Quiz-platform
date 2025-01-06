export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and App Info */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src="/quiizler.png"
              alt="Quiizler Logo"
              className="h-12 w-12 mr-3"
            />
            <span className="text-xl font-bold text-white">
              Quiizler Quiz App
            </span>
          </div>
          <p className="text-sm">
            Unlock your potential with our interactive quizzes and challenges.
            Whether you're preparing for exams or simply having fun, Quiizler
            has you covered.
          </p>
        </div>

        {/* Links Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <img
                src="/twitter-icon.png"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Quiizler Quiz App. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
