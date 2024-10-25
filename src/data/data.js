const supportCategories = [
    {
        title: "Account Opening",
        subcategories: [
            {
                name: "Getting Started",
                link: "/account-opening/how-to-open-an-account-with-our-pms-as-an-individual",
                questions: [
                    { question: "How can I open Qode Account?", },
                    { question: "How can i reach out to Qode representatives?", },
                    { question: "Who can i open an Account with Qode?", },
                    { question: "Are there any account maintenance fees?", },
                    {
                        question: "How can I find detailed information about fees and charges?",
                    }
                ]
            },
            {
                name: "Online", link: "/account-opening/how-to-open-an-account-with-our-pms-as-an-individual", questions: [
                    { question: "How can i open an Account online?", },
                    { question: "How much time does it take to open an account online?", },
                ]
            },
            {
                name: "Offline", link: "/account-opening/how-to-open-an-account-with-our-pms-as-an-individual", questions: [
                    { question: "How can i open an Account offline?", },
                    { question: "How much time does it take to open an account offline?", },
                ]
            },
            // {
            //     name: "Individual", link: "/account-opening/how-to-open-an-account-with-our-pms-as-an-individual", questions: [
            //         { question: "How long does it take to process a withdrawal?", },
            //         { question: "What is the minimum withdrawal amount?", },
            //         { question: "Can I withdraw to multiple bank accounts?", }
            //     ]
            // },
            // {
            //     name: " HUF", link: "/account-opening/how-to-setup-an-account-with-our-pms-as-a-huf", questions: [
            //         { question: "How long does it take to process a withdrawal?", },
            //         { question: "What is the minimum withdrawal amount?", },
            //         { question: "Can I withdraw to multiple bank accounts?", }
            //     ]
            // },
            // {
            //     name: "LLP/Partnership ", link: "/account-opening/how-to-open-an-account-with-our-pms-as-a-llp-partnership", questions: [
            //         { question: "How long does it take to process a withdrawal?", },
            //         { question: "What is the minimum withdrawal amount?", },
            //         { question: "Can I withdraw to multiple bank accounts?", }
            //     ]
            // }
        ]
    },
    {
        title: "Funds",
        subcategories: [
            {
                name: "Funds Withdrawals", link: "/funds/withdrawals", questions: [
                    { question: "How to withdraw money from my account?", },
                    { question: "What is the withdrawal limit?", },
                    { question: "How much time does it take to proceess a withdrawal request?", },
                    { question: "Can my withdrawal request be rejected?", },
                    {
                        question: "Is there a specific process for corporate or institutional accounts to request fund withdrawals?",
                    },
                    { question: "Can money be withdrawn to a secondary account?", }
                ]
            },
            {
                name: "Adding Funds", link: "/funds/deposits", questions: [
                    { question: "How can I add funds directly to my account?", },
                    { question: "What are the different ways of transferring money to Qode account?", },
                    { question: "How much time does it take for the funds to get transferred to Qode account?", },
                    { question: "How much time does it take for my funds to get reflected in my account?", }
                ]
            },
        ]
    },
    {
        title: "Your Qode Account",
        subcategories: [
            {
                name: "Login Credentials", link: "/your-qode-account/deposits", questions: [
                    { question: "Can my login credentials be changed?", },
                    { question: "How can I login to the portal?", },
                    { question: "When will I get my login credentials?", },
                    { question: "How to reset the password on the portal?", },
                    {
                        question: "How can I reset my login credentials?",
                    }
                ]
            },
            {
                name: "Your Profile", link: "/your-qode-account/withdrawals", questions: [
                    { question: "How long does it take to process a withdrawal?", },
                    { question: "What is the minimum withdrawal amount?", },
                    { question: "Can I withdraw to multiple bank accounts?", },
                    {
                        question: "Can I set up alerts or notifications for specific account activities, like large withdrawals or changes in asset value?",
                    },
                    { question: "How can I set up a systematic investment or withdrawal plan (SIP or SWP) for regular contributions?", },
                    {
                        question: "How do I switch my account type after it's been opened (from individual to joint)?",
                    }
                ]
            },
            {
                name: "Adding Bank Accounts", link: "/your-qode-account/limits", questions: [
                    { question: "How long does it take to process a withdrawal?", },
                    { question: "What is the minimum withdrawal amount?", },
                    { question: "Can I withdraw to multiple bank accounts?", }
                ]
            },
            {
                name: "Nominations", link: "/your-qode-account/limits", questions: [
                    { question: "I want to update my nominee?", },
                    { question: "How to add nominee?", },
                    { question: "I want to update details of my existing nominee?", },
                    { question: "I want to remove my nominee?", }
                ]
            },
        ]
    },
    {
        title: "Console",
        subcategories: [
            {
                name: "Fund Statements", link: "/console/deposits", questions: [
                    { question: "How to view or download fund statements?", },
                    { question: "Where can I view my transaction history?", },
                ]
            },
            {
                name: "Reports", link: "/console/withdrawals", questions: [
                    { question: "How to view or download fund report?", },
                    { question: "How can I download tax proof for my investments?", },
                ]
            },

        ]
    },
    {
        title: "Technical Support",
        subcategories: [

            {
                name: "General Technical Issues",
                link: "/support/technical-issues",
                questions: [
                    { question: "What should I do if I encounter a login error or a session timeout?" },
                    { question: "Who can I contact for urgent technical support, and what is the response time?" },
                    { question: "Do I need any specific software or app for viewing all my account details and downloading reports?" },
                    { question: "What should I do if there’s an error in my account statement or report?" }
                ]
            }
        ]
    },
    {
        title: "Compliance and Security",
        subcategories: [
            {
                name: "Data Security",
                link: "/support/data-security",
                questions: [
                    { question: "How does Qode ensure the security and privacy of my data?" },
                    { question: "What are the measures in place to prevent unauthorized access to my account?" },
                    { question: "How can I report suspicious activity on my account?" },
                ]
            },
            {
                name: "Compliance",
                link: "/support/data-security",
                questions: [

                    { question: "What compliance standards does Qode adhere to, and where can I review these policies?" }
                ]
            }
        ]
    }
]

export default supportCategories