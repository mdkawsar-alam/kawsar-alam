"use client"
import Container from '@/components/sheard/Contatiner/Container';
import { blogPosts, projects } from '@/index';

import { useState } from "react"; 
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import BlogPost from '../blogPost/blogPost';


export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Programing", "Business", "Lifestyle"];

  
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-[#09101A] px-4 ">
      <Container>
       
        <CategoryFilter
          
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}
