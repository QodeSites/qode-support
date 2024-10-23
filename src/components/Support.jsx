// src/components/Blogs.js
"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { useBlogs } from "@/hooks/useBlogs";
import Section from "./container/Section";
import Text from "./common/Text";

const Skeleton = () => {
  const skeletonItems = [1, 2, 3, 4, 5, 6]; // Adjust the number of skeletons based on the number of blog cards you're displaying

  return (
    <Section padding="none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skeletonItems.map((item) => (
          <div key={item} className="p-1 border border-gray-300  animate-pulse">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <div className="h-3 bg-gray-200 mb-2"></div>
            <div className="h-1 bg-gray-200 mb-2"></div>
            <div className="h-1 bg-gray-200"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Support = () => {
  const { blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="mx-auto mt-4">
        <Section padding="none">
          <Text className="text-subheading font-subheading text-start text-brown sm:mb-2 mb-2">
            Account Opening
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            {blogs.map((post) => (
              <BlogCard
                key={post.id}
                html={post.html}
                title={post.title}
                excerpt={post.excerpt}
                reading_time={post.reading_time}
                slug={post.slug}
                published_at={post.published_at}
              />
            ))}
          </div>
          {/* <div className="text-center">
            <Link href="/blogs" className="inline-block">
              <Button>All Blogs</Button>
            </Link>
          </div> */}
        </Section>
      </div>
    </>
  );
};

export default Support;
