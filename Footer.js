import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 ajrak-pattern rounded-full flex items-center justify-center">
                <span className="topi-icon text-white"></span>
              </div>
              <span className="ml-2 text-xl font-bold">Sindhi AI</span>
            </div>
            <p className="text-gray-300">
              {translations.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                  {translations.home}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  {translations.about}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  {translations.contact}
                </a>
              </li>
              <li>
                <a href="/ai-tools" className="text-gray-300 hover:text-white transition duration-300">
                  AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sindhiai.org</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+92 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Hyderabad, Sindh, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {translations.copyright}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
              {translations.terms}
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
              {translations.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
