'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import bgHero from '../images/bg-hero.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        {/* Hero Section */}
        <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <Image
            src={bgHero}
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10" />
          <div className="relative z-20 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Designing Success, One Website at a Time</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Transform your business today with a website that connects and converts. Partner with us to create a powerful online presence that drives real results.
            </p>
            <a
              href="/pricing"
              className="mt-8 inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-grow">
          {/* Testimonials Section */}
          <section className="w-full bg-[#0f172a] py-20 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-center mb-12 text-white">What Our Clients Say</h2>
              <TestimonialSlideshow />
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-section" className="w-full pt-20 pb-4">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
              <FaqAccordion />
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

const TestimonialSlideshow = () => {
  const testimonials = [
    {
      quote: 'Stunning design, flawless functionality, and perfectly aligned with our brand. The toughest part? Deciding between their exceptional options!',
      name: '- Common Options LLC',
    },
    {
      quote: 'They delivered a beautiful, functional website that boosted our customer engagement. Their expertise and commitment made all the difference. Highly recommend!',
      name: '- Sofysam Fortune Enterprises',
    },
    {
      quote: "Our new website is a game changer. Clients find us easier, the design is clean, and we've seen a real increase in inquiries. Seamless experience from start to finish!",
      name: '- Care Axis Management',
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-2xl">
          <Testimonial quote={testimonials[index].quote} name={testimonials[index].name} />
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};

const Testimonial = ({ quote, name }: { quote: string; name: string }) => (
  <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-center items-center w-full h-72 border border-blue-300">
    <p className="text-base sm:text-lg lg:text-xl mb-4 max-w-xs sm:max-w-sm md:max-w-md text-gray-900 italic text-center">"{quote}"</p>
    <p className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">{name}</p>
  </div>
);

const FaqAccordion = () => {
  const faqs = [
    {
      question: 'Is there a down payment required?',
      answer: "Yes, we typically collect a down payment before starting any project. It's generally half of the cost—whether you're choosing the one-time payment plan or the subscription setup fee. This ensures commitment from both sides and helps us begin the work with clarity and confidence.",
    },
    {
      question: 'How do you build the websites?',
      answer: "We used to code websites from scratch, but we’re now transitioning to Squarespace to deliver faster results and a more user-friendly experience while maintaining our high design standards.",
    },
    {
      question: 'How does the one-time payment plan work?',
      answer: 'Our one-time payment plan is now $699 (originally $1400). This covers the design and building of your website, SEO, copywriting, and up to 4 pages. It includes one revision, but no monthly maintenance or hosting. You’ll be responsible for hosting, domain, and future updates.',
    },
    {
      question: 'How does the subscription plan work?',
      answer: 'The subscription plan is $129/month with a one-time setup fee of $699 (originally $850). It includes hosting, maintenance, copywriting, SEO, up to 4 pages, and 1 revision per month. After 6 months, you can cancel and take full control of your website on Squarespace, minus included services.',
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer expert web design and development services, including custom website creation, SEO optimization, and more, all designed to elevate your business online.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline for building a website depends on the complexity of the project. A simple website can take a few weeks, while more complex projects can take several weeks or even months.',
    },
    {
      question: 'What is your pricing model?',
      answer: (
        <div>
          We offer one-time, subscription, and custom pricing models to fit your business needs. Visit our{' '}
          <a
            href="/pricing"
            className="text-blue-200 hover:text-white underline transition-colors duration-200"
          >
            pricing page
          </a>{' '}
          to learn more.
        </div>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white text-gray-900 rounded-lg shadow-md border border-gray-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center focus:outline-none"
          >
            {faq.question}
            <svg
              className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <div>{faq.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;