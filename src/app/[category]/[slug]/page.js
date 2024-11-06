import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Section from '@/components/container/Section';
import { notFound } from 'next/navigation';

// Add export const dynamic = 'force-dynamic' at the top level
export const dynamic = 'force-dynamic';
// Add revalidate = 0 to disable caching at the page level
export const revalidate = 0;

// Modify fetch function to include cache: 'no-store'
async function getBlogPost(slug) {
    try {
        const key = process.env.NEXT_PUBLIC_GHOST_BLOG_KEY;
        const response = await fetch(
            `https://blogs.qodeinvest.com/ghost/api/content/posts/?key=${key}&filter=slug:${slug}&include=tags`,
            {
                cache: 'no-store', // Disable caching for this fetch request
                next: { revalidate: 0 } // Additional way to disable caching
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }

        const data = await response.json();
        if (!data.posts || data.posts.length === 0) {
            console.log('No post found with this slug.');
            return null;
        }

        return data.posts[0];
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

// Blog post component (rest remains the same)
export default async function BlogPost({ params }) {
    const { category, slug } = params;

    console.log('Category:', category);
    console.log('Slug:', slug);

    const post = await getBlogPost(slug);

    if (!post) {
        return notFound();
    }

    const hasMatchingTag = post.tags.some(
        (tag) =>
            tag.visibility === 'internal' &&
            tag.name.replace(/^#/, '').toLowerCase() === category.toLowerCase()
    );

    if (!hasMatchingTag) {
        console.log('Tag mismatch detected');
        return notFound();
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
                    {post.title}
                </Heading>
                <div className="text-center mb-18">
                    <Text className="text-primary font-body text-sm">
                        {formatDate(post.published_at)}
                    </Text>
                </div>
                {post.feature_image && (
                    <img
                        src={post.feature_image}
                        alt={post.title}
                        className="w-full object-cover h-auto sm:mb-8 mb-5 rounded-lg"
                    />
                )}
                <div className="post-content gh-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Section>
    );
}