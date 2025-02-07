import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import { blogSeries } from '../data/blogPosts';

const BlogSeries = () => {
  const { seriesId } = useParams();
  const series = blogSeries.find((s) => s.id === seriesId);

  if (!series) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Series not found</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Blog
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{series.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{series.description}</p>
      </div>

      <div className="space-y-8">
        {series.posts.map((post) => (
          <article
            key={post.id}
            className="flex gap-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-none w-16 bg-indigo-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{post.partNumber}</span>
            </div>
            <div className="flex-grow py-6 pr-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <a 
                href={post.hashnodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Read Article
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="flex-none w-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSeries