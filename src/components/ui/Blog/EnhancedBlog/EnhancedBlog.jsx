"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdSearch, MdFilterList, MdCalendarToday, MdPerson, MdVisibility, MdBookmark, MdShare } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/index';

const BlogCard = ({ post, index, featured = false, saved = false, onToggleSave }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`group relative overflow-hidden rounded-lg transition-all duration-500 transform hover:scale-105 ${
        featured ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* clickable overlay, prevents interfering with save/share via stopPropagation */}
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-0" />
      <div className="card h-full">
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-[#00eeff] text-slate-900 text-sm font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Post Image */}
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={post.image}
            alt={post.title}
            width={featured ? 600 : 400}
            height={featured ? 300 : 200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleSave && onToggleSave(post.id);
                }}
                className="flex items-center space-x-1 px-3 py-2 bg-[#00eeff] text-slate-900 rounded-lg text-sm font-semibold hover:bg-[#00eeff]/80 transition-colors"
              >
                <MdBookmark className="text-lg" />
                <span>{saved ? 'Unsave' : 'Save'}</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-2 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors">
                <MdShare className="text-lg" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="space-y-4">
          {/* Category and Date */}
          <div className="flex items-center justify-between text-sm">
            <span className="px-3 py-1 bg-[#00eeff]/10 text-[#00eeff] rounded-full">
              {post.category}
            </span>
            <div className="flex items-center space-x-1 text-gray-400">
              <MdCalendarToday className="text-lg" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-[#00eeff] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {post.content}
          </p>

          {/* Author and Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="flex items-center space-x-2">
              <MdPerson className="text-gray-400" />
              <span className="text-gray-400 text-sm">{post.author}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MdVisibility className="text-lg" />
                <span>{Math.floor(Math.random() * 1000) + 100}</span>
              </div>
              <span>{Math.ceil(post.content.length / 200)} min read</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const EnhancedBlog = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  // compute categories from post data to avoid mismatch
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  // saved posts state persisted in localStorage
  const [savedPosts, setSavedPosts] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('savedBlogPosts');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('savedBlogPosts', JSON.stringify(savedPosts));
    }
  }, [savedPosts]);

  const toggleSave = (id) => {
    setSavedPosts(prev => {
      if (prev.includes(id)) {
        return prev.filter(pid => pid !== id);
      }
      return [...prev, id];
    });
  };

  // update category when URL parameter is present (e.g. dropdown links)
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags || []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setFeaturedPost(filtered[0]); // First post as featured
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="relative flex-1 max-w-md"
      >
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field pl-10 pr-4"
        />
      </form>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <MdFilterList className="text-gray-400 text-xl" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field w-48"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Article</h2>
          <BlogCard
            post={featuredPost}
            index={0}
            featured={true}
            saved={savedPosts.includes(featuredPost.id)}
            onToggleSave={toggleSave}
          />
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(1).map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index + 1}
            saved={savedPosts.includes(post.id)}
            onToggleSave={toggleSave}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-white mb-2">No Articles Found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Blog Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">{blogPosts.length}</div>
          <div className="text-gray-300">Total Articles</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {blogPosts.filter(p => p.category === 'Programming').length}
          </div>
          <div className="text-gray-300">Programming</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {blogPosts.reduce((acc, p) => acc + (p.tags ? p.tags.length : 0), 0)}
          </div>
          <div className="text-gray-300">Tags Used</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {Math.floor(Math.random() * 10000) + 5000}
          </div>
          <div className="text-gray-300">Total Views</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBlog;
