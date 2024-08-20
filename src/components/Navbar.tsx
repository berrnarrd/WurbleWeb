'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-800">
                            WurbleWeb
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;