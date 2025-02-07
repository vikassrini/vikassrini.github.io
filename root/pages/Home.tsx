import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfileImage from '../public/VikasSrinivasa.jpeg';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary-600">Vikas Srinivasa</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5">
            I am an AI & FinTech enthusiast and machine learning engineer based in Bengaluru, India. Passionate about crafting intuitive and insightful technical blogs, I strive to make complex concepts accessible and engaging.
          </p>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5">
            To learn more about me, visit the About page.🚀 For deep dives into AI, ML, and FinTech, explore my Blog and immerse yourself in cutting-edge ideas.           
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300"
            >
              About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
            >
              Read Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Image with Animation */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <motion.img
            className="rounded-full w-80 h-80 shadow-lg border-4 border-primary-600"
            src={ProfileImage} // Replace with your actual photo path
            alt="Vikas Srinivasa"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
