import Link from "next/link";
import Heading from "./common/Heading";

function BlogCard({
  title,
  excerpt,
  feature_image,
  slug,
  primary_author,
  tags,
}) {
  const getRouteFromTags = (tags) => {
    if (!tags?.length) return "/blog";

    // Find the internal tag (tags starting with #)
    const internalTag = tags.find(
      (tag) => tag.visibility === "internal" && tag.name.startsWith("#")
    );

    // Remove the # and use the tag name as the route, fallback to 'blog' if no internal tag
    return internalTag ? `/${internalTag.name.slice(1)}` : "/blog";
  };

  const baseRoute = getRouteFromTags(tags);

  return (
    <Link href={`${baseRoute}/${slug}`} className="block flex-grow">
      <div className="h-full group overflow-hidden relative flex flex-col">
        <div className="flex flex-col h-full">
          <div className="mb-2 overflow-hidden h-[4.5em]">
            <Heading className="md:text-subheading text-mobileSubHeading text-brown group-hover:text-black font-bold line-clamp-2">
              {title}
            </Heading>
          </div>
          <div className="flex-grow">
            <p className="text-body line-clamp-4 font-body">{excerpt}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4 items-center">
          <div className="group-hover:text-black -mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="44"
              height="44"
            >
              <path
                d="M66.3 65.5l0.3-32.1-32.1 0.3v4l25.3-0.2-26.3 26.3 2.8 2.8 26.3-26.3-0.2 25.2 4 0z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <hr className="mt-1 border-t group-hover:border-beige border-lightBeige" />
      </div>
    </Link>
  );
}

export default BlogCard;
