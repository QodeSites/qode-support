import Heading from '@/components/common/Heading'
import Text from '@/components/common/Text'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const page = () => {
    const supportCategories = [
        {
            title: "Account Opening",
            subcategories: [
                { name: "Individual", link: "/support/how-to-open-an-account-with-our-pms-as-an-individual" },
                { name: " HUF", link: "/support/how-to-setup-an-account-with-our-pms-as-a-huf" },
                { name: "LLP/Partnership ", link: "/support/how-to-open-an-account-with-our-pms-as-a-llp-partnership" }
            ]
        },
        {
            title: "Funds",
            subcategories: [
                { name: "Deposits", link: "/support/deposits" },
                { name: "Withdrawals", link: "/support/withdrawals" },
                { name: "Transfer Limits", link: "/support/limits" },
                { name: "Payment Methods", link: "/support/payment-methods" }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <div className=" pt-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Heading isItalic className="text-brown">Support Portal</Heading>
                    {/* <p className="text-xl text-black">Find answers to your questions and get the support you need</p> */}
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex flex-row gap-8">
                    {supportCategories.map((category) => (
                        <div key={category.title} className="flex-1 p-2">
                            <div className="flex items-center gap-2 mb-3">
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    className="text-brown w-1 h-1"
                                />
                                <Text className="text-subheading font-semibold text-brown">
                                    {category.title}
                                </Text>
                            </div>
                            <ul className="space-y-18 pl-4">
                                {category.subcategories.map((subcategory) => (
                                    <li key={subcategory.name}>
                                        <Link
                                            href={subcategory.link}
                                            className="flex items-center gap-2 text-black text-body font-body hover:text-brown"
                                        >
                                            {subcategory.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page