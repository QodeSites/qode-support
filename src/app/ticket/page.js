'use client'
import Button from '@/components/common/Button';
import React, { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        from: '',
        subject: '',
        message: '',
        actAsType: 'customer',
        actAsEmail: '',
    });
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification(null);

        try {
            const response = await fetch('/api/ticket', {  // Note the updated URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to raise ticket');
            }

            setNotification({ type: 'success', message: 'Ticket raised successfully!' });
            setFormData({ name: '', from: '', subject: '', message: '', actAsType: 'customer', actAsEmail: '' });
        } catch (error) {
            setNotification({ type: 'error', message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen mt-5 flex flex-col justify-between overflow-hidden">

            <div className="flex-1 flex items-center justify-center">
                <div className="w-full sm:p-2 p-4 xl:max-w-lg md:max-w-2xl max-w-lg border mt-4 border-brown bg-lightBeige ">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Raise a Ticket</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown  focus:outline-none focus:ring-2  "
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="from"
                                placeholder="Email"
                                value={formData.from}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown  focus:outline-none focus:ring-2  "
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown  focus:outline-none focus:ring-2  "
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown  focus:outline-none focus:ring-2  "
                            />
                        </div>
                        {/* <div>
                            <input
                                type="email"
                                name="actAsEmail"
                                placeholder="Act as Email"
                                value={formData.actAsEmail}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown  focus:outline-none focus:ring-2  "
                            />
                        </div> */}
                        <div className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className={` text-white font-semibold py-2 px-6   transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Submitting...' : 'Submit Ticket'}
                            </Button>
                        </div>
                    </form>

                    {notification && (
                        <div className={`mt-4 p-1 text-center  ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {notification.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
