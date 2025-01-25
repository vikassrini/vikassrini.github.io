import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/vikassrini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-srinivasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:1rn20cs178.vikassrinivasa@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vikas Srinivasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;