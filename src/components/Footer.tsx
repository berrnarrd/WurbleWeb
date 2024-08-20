import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">WurbleWeb</h2>
                        <p className="mt-2 text-gray-400">Designing Success, One Website at a Time</p>
                    </div>
                    <div className="flex space-x-6">
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
                    <div className="mt-6 md:mt-0">
                        <a
                            href="mailto:contactwurbleweb@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            contactwurbleweb@gmail.com
                        </a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} WurbleWeb. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;