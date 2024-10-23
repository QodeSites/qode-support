// src/hooks/useBlogs.js
import { useState, useEffect } from 'react';

export function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const key = process.env.NEXT_PUBLIC_GHOST_BLOG_KEY;
                const response = await fetch(
                    `https://blogs.qodeinvest.com/ghost/api/content/posts/?key=${key}&filter=tag:qode-support`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }

                const data = await response.json();
                setBlogs(data.posts);
            } catch (err) {
                setError('Failed to fetch blog posts. Please try again later.');
                console.error('Error fetching blogs:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, isLoading, error };
}