'use client';

import React from 'react';
import Link from 'next/link';

const MailSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border border-gray-200 max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">WurbleWeb</h1>
                </div>
                <div className="flex justify-center mb-6">
                    <svg
                        className="w-16 h-16 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2l4-4"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-4 text-center">Message Sent Successfully!</h1>
                <p className="mb-6 text-gray-600 text-center">Thank you for getting in touch. We have received your message and will get back to you shortly.</p>
                <Link href="/" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-center w-full">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default MailSuccess;