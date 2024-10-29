import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Section from '@/components/container/Section';
import { notFound } from 'next/navigation';

// Fetch post by slug only
async function getBlogPost(slug) {
    try {
        const key = process.env.NEXT_PUBLIC_GHOST_BLOG_KEY;
        const response = await fetch(
            `https://blogs.qodeinvest.com/ghost/api/content/posts/?key=${key}&filter=slug:${slug}&include=tags`
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

// Blog post component
export default async function BlogPost({ params }) {
    const { category, slug } = params;

    console.log('Category:', category); // Should be "account-opening"
    console.log('Slug:', slug);         // Should be "how-to-open-an-account-with-our-pms-as-a-llp-partnership"

    const post = await getBlogPost(slug);

    if (!post) {
        return notFound();  // If no post found with slug, show 404
    }

    // Optionally: Validate if the category matches the internal tag
    const hasMatchingTag = post.tags.some(
        (tag) =>
            tag.visibility === 'internal' &&
            tag.name.replace(/^#/, '').toLowerCase() === category.toLowerCase()
    );

    if (!hasMatchingTag) {
        console.log('Tag mismatch detected');
        return notFound();  // If the category doesn't match, show 404
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
