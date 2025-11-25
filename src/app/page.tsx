'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import TestimonialRotator from '../components/TestimonialRotator';
import bgHero from '../images/bg-hero.jpg';

function Home() {
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
          <div className="relative z-20 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 leading-[1.2] sm:leading-[1.25] md:leading-[1.3]">
              Get More Leads, More Clients, and More Growth
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Grow your business with a website that attracts, engages, and converts. Work with us to create an online presence that delivers real results—from only $95/month.
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
          {/* Testimonials Section – premium bold look */}
          <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800">
            {/* Soft glowing accents */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] bg-indigo-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-40 w-40 bg-purple-500/10 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-center mb-12 text-white">
                What Our Clients Say
              </h2>
              <TestimonialRotator />
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
}

/* -------------------- FAQ -------------------- */

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  const faqs = [
    {
      question: 'Is there a down payment required?',
      answer:
        "Whether you choose the one-time plan or the subscription plan, a $250 down payment (half of the $500 setup cost) is required to begin. For the one-time plan, the remaining balance is collected once your website is completed. For the subscription plan, the remaining setup balance plus the first $95 monthly payment is collected upon completion, and your subscription officially begins at that time. This upfront investment secures your project in our schedule, shows commitment on both sides, and ensures we can dedicate the focus your website deserves.",
    },
    {
      question: 'How do you build the websites?',
      answer:
        'Powered by Webflow, our websites combine performance, usability, and standout design.',
    },
    {
      question: 'How does the one-time payment plan work?',
      answer:
        'Our one-time payment plan is $500. It includes the full design and build of your website with up to 4 pages, SEO, copywriting, and one round of revisions. With this option, you fully own your site, while any webflow fees, hosting, domain, and future updates remain your responsibility.',
    },
    {
      question: 'How does the subscription plan work?',
      answer:
        'Our subscription plan is $95/month with a one-time $500 setup fee. It includes hosting, a custom domain, monthly backups and security checks, ongoing maintenance, SEO, copywriting, and one revision per month. You can cancel anytime with no long-term contract.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer expert web design and development services, including custom website creation, SEO optimization, and more, all designed to elevate your business online.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'The timeline for building a website depends on the complexity of the project. A simple website can take a few weeks, while more complex projects can take several weeks or even months.',
    },
    {
      question: 'What is your pricing model?',
      answer: (
        <div>
          We offer one-time, subscription, and custom pricing models to fit your business needs. Visit our{' '}
          <a
            href="/pricing"
            className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 font-semibold transition-colors duration-200"
          >
            pricing page
          </a>{' '}
          to learn more.
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white text-gray-900 rounded-lg shadow-md border border-gray-300"
        >
          <button
            onClick={() => toggleAccordion(i)}
            className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center focus:outline-none"
          >
            {faq.question}
            <svg
              className={`w-6 h-6 transform transition-transform ${openIndex === i ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4">
              <div>{faq.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;