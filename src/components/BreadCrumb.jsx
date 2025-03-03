import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = ({ category, subcategory }) => {
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/&/g, 'and') // Replace & with 'and'
      .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
  };
  return (
    <nav className="flex items-center space-x-18 ml-20 text-sm text-gray-600 mt-20">
      <Link href="/" className="hover:text-brown transition-colors">
        Home
      </Link>

      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-gray-400 w-18 h-18"
      />

      <Link
        href={`/support/${generateSlug(category)}`}
        className="hover:text-brown transition-colors"
      >
        {category}
      </Link>

      {subcategory && (
        <>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-gray-400 w-18 h-18"
          />
          <span className="text-brown">{subcategory}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
