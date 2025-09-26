'use client';

import React, { useEffect, useState } from 'react';

const messages = [
    "📈 Websites that grow your business — starting at $95/month",
    "🚀 Launch your online presence — just $95/month",
    "💼 Look professional, build trust — from $95/month",
    "⚡ Turn visitors into customers — only $95/month",
    "🌟 Your growth engine starts here — as low as $95/month",
];

const CTABanner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white z-50 shadow-md">
            {/* Match Navbar width and padding */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                {/* Centered rotating message */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p
                        key={index}
                        className="text-xs sm:text-sm md:text-base font-medium animate-slide"
                    >
                        {messages[index]}
                    </p>
                </div>

                {/* Right-aligned Contact button */}
                <div className="ml-auto">
                    <a
                        href="/contact"
                        aria-label="Contact us now"
                        className="hidden sm:inline-flex items-center rounded-md border-2 border-yellow-400 bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-gray-900 shadow-md hover:bg-yellow-300 transition animate-softGlow"
                    >
                        Contact Us Now
                    </a>
                </div>
            </div>

            <style jsx>{`
        .animate-slide {
          animation: slideFade 4s ease-in-out forwards;
        }
        @keyframes slideFade {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          12% {
            transform: translateY(0);
            opacity: 1;
          }
          88% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        /* Subtle glowing effect */
        .animate-softGlow {
          animation: softGlow 3s ease-in-out infinite;
        }
        @keyframes softGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 255, 0, 0);
          }
          50% {
            box-shadow: 0 0 12px rgba(255, 221, 0, 0.6);
          }
        }
      `}</style>
        </div>
    );
};

export default CTABanner;