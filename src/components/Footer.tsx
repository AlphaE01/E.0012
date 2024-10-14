import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Engineering Society</h3>
            <p>ADP, Taylor's University</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect with us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tadp.engineering/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/company/adp-engineering-society" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2024 Engineering Society. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;