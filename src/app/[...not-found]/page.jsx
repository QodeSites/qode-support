"use client"; // Ensures client-side rendering for UI components

import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import Text from "@/components/common/Text";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBeige text-center p-8">
      <Heading className=" text-brown mb-4">404 - Page Not Found</Heading>
      <Text className="text-body sm:text-body text-gray-600 mb-6">
        Sorry, the page you`&apos;`re looking for doesn`&apos;`t exist.
      </Text>
      <Link href="/" passHref>
        <Button className=" text-black bg-brown ">Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
