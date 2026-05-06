"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

import { blogPosts } from "@/index";
import Container from "@/components/sheard/Contatiner/Container";
import Image from "next/image";

export default function BlogPostPage({ params }) {
  const { id } = params; 

  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!post) return <div>Loading...</div>; 

  return (
    <div className="bg-[#09101A] text-gray-200">
      <Container>
        <div className="pt-24 px-4">
          {/* back link */}
          <Link href="/blog" className="inline-flex items-center text-sm text-[#00eeff] hover:underline mb-6">
            <MdArrowBack className="mr-2" /> Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-50">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
              <span className="px-2 py-1 bg-[#00eeff]/20 rounded-full">{post.category}</span>
              <span>{post.date}</span>
              <span>by {post.author}</span>
            </div>

            <div className="w-full mx-auto">
              <Image
                src={post.image}
                alt={post.title}
                className="rounded-lg my-4"
                layout="responsive"
              />
            </div>

            <div className="prose prose-invert max-w-none leading-relaxed text-base">
              <div dangerouslySetInnerHTML={{ __html: post.fullDescription }} />
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
