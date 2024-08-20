'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <header className="flex-grow flex flex-col items-center justify-center text-center pt-32 md:pt-48 lg:pt-64">
          <h1 className="text-5xl font-bold mb-4">
            Designing Success, One Website at a Time
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Transform your business today with a website that connects and converts. Partner with us to create a powerful online presence that drives real results.
          </p>
          <a
            href="/pricing"
            className="mt-8 inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
        </header>

        <section className="w-full max-w-5xl mx-auto mt-20 mb-10">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What Our Clients Say
          </h2>
          <TestimonialSlideshow />
        </section>

        <section id="faq-section" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex-grow py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

const TestimonialSlideshow = () => {
  const testimonials = [
    {
      quote: "Stunning design, flawless functionality, and perfectly aligned with our brand. The toughest part? Deciding between their exceptional options!",
      name: "- Common Options",
    },
    {
      quote: "They delivered a beautiful, functional website that boosted our customer engagement. Their expertise and commitment made all the difference. Highly recommend!",
      name: "- Sofysam Fortune Enterprises",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center"
          >
            <Testimonial quote={testimonial.quote} name={testimonial.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonial = ({ quote, name }: { quote: string; name: string }) => (
  <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg text-center flex flex-col justify-center w-72 sm:w-96 md:w-[28rem] lg:w-[36rem] xl:w-[44rem]">
    <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-4">"{quote}"</p>
    <p className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">{name}</p>
  </div>
);

const FaqAccordion = () => {
  const faqs = [
    {
      question: "How do you build the websites?",
      answer: "We used to code websites from scratch, but we’re now transitioning to Squarespace to deliver faster results and a more user-friendly experience while maintaining our high design standards.",
    },
    {
      question: "How does the one-time payment plan work?",
      answer: "Our one-time payment plan is a $1400 flat fee with no hidden costs. This covers the design and building of your website, SEO, copywriting, and a custom domain. It includes one revision, but no monthly maintenance or hosting. Once the website is built, you’ll have full access and control over it on Squarespace. You’ll be responsible for paying for hosting, domains, and any other services, as well as maintaining the website going forward.",
    },
    {
      question: "How does the subscription plan work?",
      answer: "The subscription plan involves a one-time $850 setup fee to build your website, followed by a $120/month charge. This includes monthly maintenance, hosting, and two revisions per month. You’ll be charged $120/month for at least six months. After that, you can choose to continue the subscription or cancel it. If you cancel, you’ll gain full access and control of your website, but the included features like maintenance, hosting, and revisions will be removed, and you’ll be responsible for managing and paying for your website’s hosting and other services on Squarespace.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer expert web design and development services, including custom website creation, SEO optimization, and more, all designed to elevate your business online.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline for building a website depends on the complexity of the project. A simple website can take a few days, while more complex projects can take several weeks or even months.",
    },
    {
      question: "What is your pricing model?",
      answer: (
        <div>
          We offer various pricing plans to suit different needs, including one-time payments, subscription models, and custom project quotes.
          <a
            href="/pricing"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-center w-full sm:w-auto"
          >
            See Pricing
          </a>
        </div>
      ),
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md border border-gray-300">
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
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;