'use client'
import React, { useState } from 'react';
import Button from '@/components/common/Button';

const TicketRaiseForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        description: '',
        custom_customer_name: '',
        customer_email: '',
        priority: '',
        raised_by: '',
        owner: ''
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
            const response = await fetch('/api/ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to raise ticket');
            }

            setNotification({ type: 'success', message: 'Ticket raised successfully!' });
            setFormData({
                subject: '',
                description: '',
                custom_customer_name: '',
                customer_email: '',
                priority: 'High',
                raised_by: '',
                owner: ''
            });
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
                                name="custom_customer_name"
                                placeholder="Name"
                                value={formData.custom_customer_name}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="customer_email"
                                placeholder="Email"
                                value={formData.customer_email}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
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
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            />
                        </div>

                        {/* <div>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <div>
                            <input
                                type="email"
                                name="raised_by"
                                placeholder="Raised By"
                                value={formData.raised_by}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="owner"
                                placeholder="Owner"
                                value={formData.owner}
                                onChange={handleChange}
                                required
                                className="appearance-none block w-full p-1 border border-brown focus:outline-none focus:ring-2"
                            />
                        </div> */}
                        <div className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className={`text-white font-semibold py-2 px-6 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Submitting...' : 'Submit Ticket'}
                            </Button>
                        </div>
                    </form>

                    {notification && (
                        <div
                            className={`mt-4 p-1 text-center ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}
                        >
                            {notification.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketRaiseForm;