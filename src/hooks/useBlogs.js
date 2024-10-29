import { useState, useEffect } from 'react';

export function useBlogs() {
    const [blogs, setBlogs] = useState({});
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const key = process.env.NEXT_PUBLIC_GHOST_BLOG_KEY;
                const response = await fetch(
                    `https://blogs.qodeinvest.com/ghost/api/content/posts/?key=${key}&filter=tag:qode-support&include=tags`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }

                const data = await response.json();

                // Find all unique internal tags and create categories
                const internalTags = new Set();
                data.posts.forEach(post => {
                    post.tags.forEach(tag => {
                        if (tag.visibility === 'internal' && tag.name.startsWith('#')) {
                            internalTags.add(tag.name);
                        }
                    });
                });

                // Create category metadata for each internal tag
                const categoryList = Array.from(internalTags)
                    .map(tagName => ({
                        id: tagName.substring(1), // Remove the # prefix
                        title: formatTagTitle(tagName), // Convert #tag-name to "Tag Name"
                        tag: tagName
                    }))
                    .reverse(); // Reverse the order of categories

                // Group posts by categories
                const categorizedPosts = categoryList.reduce((acc, category) => {
                    acc[category.id] = data.posts.filter(post =>
                        post.tags.some(tag => tag.name === category.tag && tag.visibility === 'internal')
                    );
                    return acc;
                }, {});

                setCategories(categoryList);
                setBlogs(categorizedPosts);
            } catch (err) {
                setError('Failed to fetch blog posts. Please try again later.');
                console.error('Error fetching blogs:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, categories, isLoading, error };
}

// Helper function to format tag names into display titles
function formatTagTitle(tagName) {
    // Remove # prefix and convert kebab-case to Title Case
    return tagName
        .substring(1) // Remove #
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}