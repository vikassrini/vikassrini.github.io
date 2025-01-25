import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-indigo-600">Vikas Srinivasa</span>
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5">
          I am an AI & FinTech enthusiast and machine learning engineer based in Bengaluru, India. Passionate about crafting intuitive and insightful technical blogs, I strive to make complex concepts accessible and engaging.
          <br></br>
          To learn more about me, visit the About page. For deep dives into AI, ML, and FinTech, explore my Blog and immerse yourself in cutting-edge ideas.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Read Blog
            </Link>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Developer workspace"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;