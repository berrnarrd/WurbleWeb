import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Pricing: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-gradient-to-tr from-white via-blue-50 to-blue-100">
                <div className="flex-grow flex flex-col items-center">
                    <header className="text-center py-16 sm:py-24">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">Our Pricing Plans</h1>
                        <p className="mt-4 text-gray-600 text-md sm:text-lg max-w-xl mx-auto">
                            Choose the best plan that fits your needs — <span className="text-blue-600 font-semibold">Summer Sale: 50% Off!</span>
                        </p>
                    </header>

                    <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <PricingCard
                            title="One-Time Payment"
                            price={<><span className="line-through text-gray-400 mr-2">$1400</span><span className="text-blue-600 font-bold">$699</span></>}
                            features={[
                                { name: 'Up to 4 Pages', included: true },
                                { name: '1 Revision', included: true },
                                { name: 'Maintenance', included: false },
                                { name: 'Custom Domain', included: false },
                                { name: 'Hosting', included: false },
                                { name: 'SEO (Search Engine Optimization)', included: true },
                                { name: 'Copywriting', included: true },
                            ]}
                        />
                        <div className="lg:scale-110">
                            <PricingCard
                                title="Subscription"
                                price={<span className="text-blue-600 font-bold">$129/month</span>}
                                features={[
                                    { name: 'Up to 4 Pages', included: true },
                                    { name: '1 Revision/month', included: true },
                                    { name: 'Maintenance', included: true },
                                    { name: 'Custom Domain', included: true },
                                    { name: 'Hosting', included: true },
                                    { name: 'SEO (Search Engine Optimization)', included: true },
                                    { name: 'Copywriting', included: true },
                                ]}
                                popular
                                setupFee={<><span className="line-through text-gray-400 mr-2">$850</span><span className="text-blue-600 font-bold">+$699</span> setup fee</>}
                            />
                        </div>
                        <PricingCard
                            title="Custom Project"
                            price="Contact Us"
                            features={[
                                { name: "If our existing plans don’t meet your requirements, or if you have unique needs for your website, reach out to us to explore a tailored solution." },
                            ]}
                            custom
                        />
                    </section>

                    {/* Updated spacing for "Still Have Questions?" */}
                    <section className="w-full px-4 mt-32 mb-24 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
                        <p className="text-gray-600 max-w-lg mx-auto mb-6">
                            Reach out to us to get a personalized recommendation and consultation for your business website needs.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            Schedule a Free Consultation
                        </a>
                    </section>
                </div>

                <Footer />
            </div>
        </Layout>
    );
};

type PricingCardProps = {
    title: string;
    price: React.ReactNode;
    features: { name: string; included?: boolean }[];
    popular?: boolean;
    custom?: boolean;
    setupFee?: React.ReactNode;
};

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    features,
    popular = false,
    custom = false,
    setupFee = '',
}) => {
    return (
        <div className={`bg-white p-8 rounded-2xl shadow-xl border flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105 ${popular ? 'border-blue-500 shadow-2xl z-10' : 'border-gray-200'}`}>
            <div>
                {popular && (
                    <div className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-4 animate-bounce">
                        Most Popular
                    </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
                <p className="text-gray-800 text-3xl font-bold leading-tight text-center">{price}</p>
                <ul className="mt-6 space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className={`text-gray-700 ${!custom ? 'flex items-center' : ''}`}>
                            {!custom && feature.included !== undefined ? (
                                feature.included ? (
                                    <svg
                                        className="w-5 h-5 text-blue-600 mr-2 shrink-0"
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
                                        className="w-5 h-5 text-red-500 mr-2 shrink-0"
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
                    <p className="mt-4 text-sm text-gray-500 text-center">{setupFee}</p>
                )}
            </div>
            <div className="mt-8">
                <a
                    href="/contact"
                    className={`block w-full px-6 py-3 text-center rounded-lg shadow-md font-semibold transition-colors duration-300 ${custom ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                >
                    {custom ? 'Contact Us' : 'Get Started'}
                </a>
            </div>
        </div>
    );
};

export default Pricing;