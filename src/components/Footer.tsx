'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/nav-logo.svg'; // ✅ your logo file in src/images

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                            <Image
                                src={logo}
                                alt="WurbleWeb Logo"
                                width={40}
                                height={40}
                                className="object-contain h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
                                priority
                            />
                            <h2 className="text-2xl font-bold">WurbleWeb</h2>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Designing Success, One Website at a Time
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-base">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-end">
                        <a
                            href="mailto:contactwurbleweb@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                        >
                            contactwurbleweb@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom border */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} WurbleWeb. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;