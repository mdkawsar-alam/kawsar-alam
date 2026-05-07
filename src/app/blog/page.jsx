import EnhancedBlog from '@/components/ui/Blog/EnhancedBlog/EnhancedBlog';
import Container from '@/components/sheard/Contatiner/Container';
import React, { Suspense } from 'react';

const Blog = () => {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Container>
          <div className="py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                My <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Thoughts, tutorials, and insights about web development, technology, and the journey of becoming a better developer.
              </p>
            </div>
            <Suspense fallback={<div className="text-center text-white">Loading blog posts...</div>}>
              <EnhancedBlog />
            </Suspense>
          </div>
        </Container>
      </div>
    );
};

export default Blog;