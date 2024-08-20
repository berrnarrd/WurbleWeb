import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Pricing: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <div className="flex-grow flex flex-col items-center">
                    <header className="text-center py-20">
                        <h1 className="text-5xl font-bold text-gray-800">Our Pricing Plans</h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Choose the best plan that fits your needs.
                        </p>
                    </header>

                    <section className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                        <PricingCard
                            title="One-Time Payment"
                            price="$1400"
                            features={[
                                { name: 'Up to 5 Pages', included: true },
                                { name: '1 Revision', included: true },
                                { name: 'Maintenance', included: false },
                                { name: 'Custom Domain', included: true },
                                { name: 'Hosting', included: false },
                                { name: 'SEO (Search Engine Optimization)', included: true },
                                { name: 'Copywriting', included: true },
                            ]}
                        />
                        <PricingCard
                            title="Subscription"
                            price="$120/month"
                            features={[
                                { name: 'Up to 4 Pages', included: true },
                                { name: '2 Revisions/month', included: true },
                                { name: 'Maintenance', included: true },
                                { name: 'Custom Domain', included: true },
                                { name: 'Hosting', included: true },
                                { name: 'SEO (Search Engine Optimization)', included: true },
                                { name: 'Copywriting', included: true },
                            ]}
                            popular // Adding the popular prop to highlight this card
                            setupFee="+$850 one-time payment for the initial setup of the website"
                        />
                        <PricingCard
                            title="Custom Project"
                            price="Contact Us"
                            features={[
                                { name: "If our existing plans don’t meet your requirements, or if you have unique needs for your website, reach out to us to explore a tailored solution." },
                            ]}
                            custom // Mark this card as custom
                        />
                    </section>
                </div>

                <Footer />
            </div>
        </Layout>
    );
};

const PricingCard = ({
    title,
    price,
    features,
    popular = false,
    custom = false,
    setupFee = '',
}: {
    title: string;
    price: string;
    features: { name: string; included?: boolean }[];
    popular?: boolean;
    custom?: boolean;
    setupFee?: string;
}) => (
    <div className={`bg-white p-8 rounded-lg shadow-lg border ${popular ? 'border-blue-500 transform scale-105' : 'border-gray-300'} hover:border-gray-400 transition-transform duration-300`}>
        {popular && (
            <div className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
            </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-800 text-3xl font-bold">{price}</p>
        <ul className="mt-6 space-y-2">
            {features.map((feature, index) => (
                <li key={index} className={`text-gray-700 ${!custom ? 'flex items-center' : ''}`}>
                    {!custom && feature.included !== undefined ? (
                        feature.included ? (
                            <svg
                                className="w-6 h-6 text-blue-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6 text-red-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )
                    ) : null}
                    {feature.name}
                </li>
            ))}
        </ul>
        {setupFee && (
            <p className="mt-4 text-sm text-gray-500">{setupFee}</p>
        )}
        {!custom ? (
            <a
                href="/#faq-section"
                className="mt-6 block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 w-full text-center flex justify-center items-center"
            >
                Learn More
                <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                </svg>
            </a>
        ) : (
            <a
                href="/contact"
                className="mt-6 block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 w-full text-center"
            >
                Contact Us
            </a>
        )}
    </div>
);

export default Pricing;