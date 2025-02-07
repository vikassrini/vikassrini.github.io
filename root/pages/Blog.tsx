import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { blogSeries } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-6">
        Blog
      </h1>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Explore our series of in-depth articles covering various topics in artificial intelligence,
        finance and technology.
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        {blogSeries.map((series) => (
          <article
            key={series.id}
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
              <img
                src={series.image}
                alt={series.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {series.title}
                </h2>
                <p className="text-gray-200 line-clamp-2">
                  {series.description}
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{series.posts.length} articles in series</span>
                <span>Latest: {series.posts[1].date}</span>
              </div>
              <Link 
                to={`/blog/series/${series.id}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
              >
                View Series
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog