'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import supportCategories from '@/data/data';
import Text from '@/components/common/Text';
import Heading from '@/components/common/Heading';
import Breadcrumb from '@/components/BreadCrumb';

const CategoryPage = () => {
    const { category } = useParams();
    const searchParams = useSearchParams();
    const subcategoryParam = searchParams.get('sub');

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    // Improved slug generator that handles special characters
    const generateSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/&/g, 'and') // Replace & with 'and'
            .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
    };

    useEffect(() => {
        const currentCategory = supportCategories.find(
            cat => generateSlug(cat.title) === category
        );

        if (currentCategory) {
            setActiveCategory(currentCategory);

            if (subcategoryParam) {
                const subcategory = currentCategory.subcategories.find(
                    sub => generateSlug(sub.name) === subcategoryParam
                );
                if (subcategory) {
                    setActiveSubcategory(subcategory);
                } else {
                    setActiveSubcategory(currentCategory.subcategories[0]);
                }
            } else {
                setActiveSubcategory(currentCategory.subcategories[0]);
            }
        }
    }, [category, subcategoryParam]);

    if (!activeCategory || !activeSubcategory) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen mt-7">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full max-w-7xl">
                        <Breadcrumb
                            category={activeCategory.title}
                            subcategory={activeSubcategory.name}
                        />
                        <div className="flex items-start gap-20">
                            <div className="p-3 h-screen">
                                <div className="mb-2">
                                    <Text className="font-semibold text-beige px-2">
                                        {activeCategory.title}
                                    </Text>
                                    <ul className="mt-2 space-y-0.5">
                                        {activeCategory.subcategories.map((subcategory) => (
                                            <li key={subcategory.name}>
                                                <Link
                                                    href={`/support/${generateSlug(activeCategory.title)}?sub=${generateSlug(subcategory.name)}`}
                                                    className={`flex items-center px-2 py-1.5 text-sm rounded hover:bg-gray-50 ${
                                                        generateSlug(subcategory.name) === generateSlug(activeSubcategory.name)
                                                        ? 'text-beige font-semibold bg-gray-50'
                                                        : 'text-gray-600'
                                                    }`}
                                                >
                                                    <span className="text-gray-400 mr-2">-</span>
                                                    {subcategory.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Text className="text-subheading font-subheading text-beige mb-2">
                                    {activeSubcategory.name}
                                </Text>

                                <div className="space-y-1">
                                    {activeSubcategory.questions.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white transition-shadow"
                                        >
                                            <Text className="text-lg font-semibold mb-2 text-gray-800">
                                                {item.question}
                                            </Text>
                                            <Text className="text-gray-600">{item.answer}</Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;