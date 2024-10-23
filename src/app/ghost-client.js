const GhostContentAPI = require("@tryghost/content-api");

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_KEY,
    version: "v5.0"
});

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            include: 'tags',
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        });
}