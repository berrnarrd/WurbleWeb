'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Static imports from src/components → src/images
import commonOptionsLogo from '../images/commonoptionslogo.svg';
import sofysamLogo from '../images/sofysamlogo.svg';
import careAxisLogo from '../images/careaxislogo.svg';

type Testimonial = {
    quote: string;
    logo: any;      // StaticImageData (SVG/PNG/WebP)
    scale?: number; // Optional fine-tune per logo (1 = default)
};

const testimonials: Testimonial[] = [
    {
        quote:
            'Stunning design, flawless functionality, and perfectly aligned with our brand. The toughest part? Deciding between their exceptional options!',
        logo: commonOptionsLogo,
        scale: 1.3, // baseline
    },
    {
        quote:
            'They delivered a beautiful, functional website that boosted our customer engagement. Their expertise and commitment made all the difference. Highly recommend!',
        logo: sofysamLogo,
        scale: 1.2, // ⬅ bump up smaller logo so all feel equal
    },
    {
        quote:
            "Our new website is a game changer. Clients find us easier, the design is clean, and we've seen a real increase in inquiries. Seamless experience from start to finish!",
        logo: careAxisLogo,
        scale: 1,
    },
];

export default function TestimonialRotator() {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [animating, setAnimating] = useState(false);

    // Advance every 5s with a controlled crossfade
    useEffect(() => {
        const id = setInterval(() => {
            setPrevIndex(index);
            setIndex((i) => (i + 1) % testimonials.length);
            setAnimating(true);
        }, 5000);
        return () => clearInterval(id);
    }, [index]);

    const current = testimonials[index];
    const previous = prevIndex !== null ? testimonials[prevIndex] : null;

    // When the leaving animation finishes, unmount the previous slide
    const handleLeaveEnd = () => {
        setPrevIndex(null);
        setAnimating(false);
    };

    return (
        <div className="relative w-full min-h-[18rem] sm:min-h-[20rem]">
            {/* Previous (fade-out). Renders only during transition */}
            {previous && (
                <Slide
                    key={`prev-${prevIndex}`}
                    quote={previous.quote}
                    logo={previous.logo}
                    scale={previous.scale}
                    state="leaving"
                    onLeaveEnd={handleLeaveEnd}
                />
            )}

            {/* Current (fade-in / idle) */}
            <Slide
                key={`curr-${index}`}
                quote={current.quote}
                logo={current.logo}
                scale={current.scale}
                state={animating ? 'entering' : 'idle'}
            />
        </div>
    );
}

/* ------------ Slide (presentational) ------------ */

function Slide({
    quote,
    logo,
    scale = 1,
    state,
    onLeaveEnd,
}: {
    quote: string;
    logo: any;
    scale?: number;
    state: 'idle' | 'entering' | 'leaving';
    onLeaveEnd?: () => void;
}) {
    // Layering + animation states
    const base =
        'absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 will-change-transform will-change-opacity';
    const anim =
        state === 'idle'
            ? 'opacity-100 translate-x-0 z-20'
            : state === 'entering'
                ? 'opacity-0 translate-x-2 z-20 animate-slideFadeIn'
                : 'opacity-100 translate-x-0 z-10 animate-slideFadeOut';

    return (
        <div
            className={`${base} ${anim}`}
            onAnimationEnd={(e) => {
                if (state === 'leaving' && e.animationName === 'slideFadeOut') {
                    onLeaveEnd?.();
                }
            }}
        >
            <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto italic text-white">
                “{quote}”
            </p>

            {/* Fixed-size logo box prevents layout shift between slides */}
            <div className="mt-6 h-14 w-40 sm:w-44 md:w-48 flex items-center justify-center">
                <div
                    className="h-14 w-40 sm:w-44 md:w-48 flex items-center justify-center"
                    style={{ transform: `scale(${scale})` }}
                >
                    <Image
                        src={logo}
                        alt="Company logo"
                        width={192}   // matches md:w-48
                        height={56}   // ~ h-14
                        className="object-contain max-h-14 w-full"
                        unoptimized   // fine for SVG; remove if PNG/WebP
                        priority
                    />
                </div>
            </div>

            {/* Local CSS keyframes (350ms) */}
            <style jsx>{`
        .animate-slideFadeIn {
          animation: slideFadeIn 350ms ease-out forwards;
        }
        .animate-slideFadeOut {
          animation: slideFadeOut 350ms ease-in forwards;
        }
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateX(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideFadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-8px);
          }
        }
      `}</style>
        </div>
    );
}