import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Transformers and How They Work - Part 1',
    excerpt: 'Learn how transformers work intuitively',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    url: 'https://medium.com/@vikassrinivasa/transformers-and-how-they-work-part-1' // Add your blog link here
  },
  // Add more blog posts with URLs if needed
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-12">
        Blog
      </h1>

      <div className="grid gap-12 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
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
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.url}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-all duration-200"
              >
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
