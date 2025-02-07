import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogSeries } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogSeries
    .flatMap(series => series.posts)
    .find(post => post.id === Number(id));
  
  const series = post ? blogSeries.find(s => s.id === post.seriesId) : null;

  if (!post || !series) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <Link 
          to={`/blog/series/${series.id}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Series
        </Link>
        <div className="text-sm text-gray-500">
          Part {post.partNumber} of {series.posts.length}
        </div>
      </div>
      
      <article>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
        />
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost