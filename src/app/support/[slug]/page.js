"use client"
// src/app/support/[slug]/page.js
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Updated to use the new navigation API
import Section from '@/components/container/Section';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Skeleton from '@/components/Skeleton';

const BlogDetailsPage = () => {
    const { slug } = useParams(); // Retrieve the slug from the dynamic route
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            if (!slug) return; // Avoid fetching before slug is available

            try {
                const key = process.env.NEXT_PUBLIC_GHOST_BLOG_KEY;
                const response = await fetch(
                    `https://blogs.qodeinvest.com/ghost/api/content/posts/slug/${slug}/?key=${key}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch the blog post.');
                }

                const data = await response.json();
                setBlog(data.posts[0]); // Assuming the API returns an array with a single post
            } catch (err) {
                setError('Failed to fetch the blog post. Please try again later.');
                console.error('Error fetching blog post:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogDetails();
    }, [slug]);

    if (isLoading) {
        return <div><Skeleton /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!blog) {
        return <div>No blog post found.</div>;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
    return (
        <Section padding="none" className="mt-9 p-18">
            <div className="sm:max-w-[820px] mx-auto">
                <Heading className="text-mobileHeading sm:text-heading font-heading text-brown mb-1 text-center">
                    {blog.title}
                </Heading>
                <div className="text-center mb-18">
                    <Text className="text-primary font-body text-sm">
                        {formatDate(blog.published_at)}
                    </Text>
                </div>
                {blog.feature_image && (
                    <img
                        src={blog.feature_image}
                        alt={blog.title}
                        className="w-full object-cover h-auto sm:mb-8 mb-5 rounded-lg"
                    />
                )}
                <div className="post-content gh-content" dangerouslySetInnerHTML={{ __html: blog.html }} />
            </div>
        </Section>
    );
};

export default BlogDetailsPage;
