'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            "service_dou4iip",  // Replace with your EmailJS Service ID
            "template_t67xy4f",  // Replace with your EmailJS Template ID
            {
                from_name: formData.name,
                to_name: "wurbleweb",
                message: formData.message,
                reply_to: formData.email,
            },
            "bkOQ2CG2c4pxBnLuC"  // Replace with your EmailJS Public Key (User ID)
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
                router.push('/mail');  // Redirect to the mail success page
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-gray-100">
                <div className="flex-grow flex flex-col items-center">
                    <header className="text-center py-16 md:py-24">
                        <h1 className="text-5xl font-bold text-gray-800">Get in Touch</h1>
                        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                            We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </header>

                    <section className="w-full max-w-3xl mx-auto mt-4 px-4 sm:px-0">
                        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg border border-gray-200">
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </section>
                </div>

                <Footer />
            </div>
        </Layout>
    );
};

export default Contact;