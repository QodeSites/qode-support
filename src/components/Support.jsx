import Heading from '@/components/common/Heading'
import Text from '@/components/common/Text'
import Link from 'next/link'
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { CiCirclePlus } from "react-icons/ci";
import supportCategories from '../data/data'


import Section from '@/components/container/Section'


const page = () => {
    return (
        <div className=" ">
            {/* Banner */}
            <div className=" pt-8 px-2">
                <div className="max-w-4xl mx-auto text-center">
                    <Heading isItalic className="text-brown">Support Portal</Heading>
                    {/* <p className="text-xl text-black">Find answers to your questions and get the support you need</p> */}
                </div>
            </div>

            {/* Categories Section */}
            <Section>
                <div className="grid grid-cols-3 gap-18">
                    {supportCategories.map((category) => (
                        <div key={category.title} className="flex-1 p-2">
                            <div className="flex items-center gap-2 mb-3">

                                <Text className="text-subheading font-semibold text-brown">
                                    {category.title}
                                </Text>
                            </div>
                            <ul className="space-y-18 pl-0">
                                {category.subcategories.map((subcategory) => (
                                    <li key={subcategory.name}>
                                        <Link
                                            href={`/support/${category.title.toLowerCase().replace(/\s+/g, '-')}?sub=${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="flex items-center gap-2 text-beige text-body font-body hover:text-brown"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div >
    )
}

export default page