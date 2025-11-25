import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Pricing: React.FC = () => {
    return (
        <Layout>
            {/* Match home page theme: blue→indigo gradient background, white text */}
            <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="flex-grow flex flex-col items-center">
                    <header className="text-center py-16 sm:py-24">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Transparent, Fair Pricing
                        </h1>
                        <p className="mt-4 text-white/90 text-md sm:text-lg max-w-2xl mx-auto">
                            Simple options that match your plan:{" "}
                            <span className="font-semibold">one-time build</span> you own forever, or{" "}
                            <span className="font-semibold">monthly maintenance</span> so you never worry about updates.
                        </p>
                    </header>

                    <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* One-Time Build */}
                        <PricingCard
                            title="One-Time Plan"
                            price={<span className="text-blue-500 font-bold">$500</span>}
                            subtitle="You fully own your site"
                            features={[
                                { name: 'Up to 4 pages (Home, About, Services, Contact)', included: true },
                                { name: 'Mobile-responsive design', included: true },
                                { name: 'Contact/Inquiry form setup', included: true },
                                { name: '1 revision round', included: true },
                                { name: 'Performance & accessibility checks', included: true },
                                { name: 'SEO & copywriting', included: true },
                                { name: 'Custom domain', included: false },
                                { name: 'Hosting', included: false },
                                { name: 'Ongoing maintenance/updates', included: false },
                            ]}
                            ctaLabel="Choose Plan"
                            highlight={false}
                        />

                        {/* Subscription Plan — FEATURED with OUTER GLOW */}
                        <div className="lg:scale-110">
                            <PricingCard
                                title="Subscription Plan"
                                price={<span className="text-blue-500 font-bold">$95/mo</span>}
                                subtitle="Everything handled for you so you can focus on your business"
                                popular
                                chips={['Best Value', 'Set It and Forget It', 'Satisfaction Guaranteed — Our Promise']}
                                features={[
                                    { name: 'Includes One-Time Plan features', included: true },
                                    { name: 'Custom domain', included: true },
                                    { name: 'Hosting', included: true },
                                    { name: 'Ongoing maintenance/updates', included: true },
                                    { name: '1 revision/month', included: true },
                                    { name: 'Monthly backups & security checks', included: true }
                                ]}
                                footnote={
                                    <span className="block text-sm text-gray-600 mt-4">
                                        Cancel anytime.
                                    </span>
                                }
                                badgeText="Most Popular"
                                ctaLabel="Choose Plan"
                                highlight
                            />
                        </div>

                        {/* Custom / More Pages */}
                        <PricingCard
                            title="Custom / More Pages"
                            price={<span className="text-blue-500">Contact Us</span>}
                            subtitle="Need extra pages or a custom build?"
                            features={[
                                { name: 'Websites beyond 4 pages', included: true },
                                { name: 'Unique functionality & integrations', included: true },
                                { name: 'Custom design requirements', included: true },
                            ]}
                            ctaLabel="Contact Us"
                            highlight={false}
                        />
                    </section>

                    {/* Payment Terms */}
                    <section className="w-full px-4 mt-24 mb-20 text-center">
                        <div className="bg-white text-gray-900 border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto shadow-2xl">
                            <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                            <p className="text-sm sm:text-base">
                                A <span className="font-bold">$250 down payment</span> (half of the $500 setup cost) is required to begin any project.
                                <br />
                                • <span className="font-semibold">One-Time Plan:</span> Remaining balance is collected upon completion of the website.
                                <br />
                                • <span className="font-semibold">Subscription Plan:</span> Remaining setup balance <em>plus</em> your first <span className="font-bold">$95 monthly payment</span> are collected upon completion of the website, and your subscription starts then.
                            </p>
                            <p className="mt-3 text-xs text-gray-500 italic">
                                All payments — including down payments, balances, and subscription fees — are final and non-refundable.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="w-full px-4 mt-2 mb-24 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Have questions or ready to start?
                        </h2>
                        <p className="text-white/90 max-w-lg mx-auto mb-6">
                            We’ll recommend the simplest option for your goals. No pressure, no upsell.
                        </p>

                        {/* Buttons: View FAQs first, then "or", then Schedule */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/#faq-section"
                                className="inline-block bg-white text-blue-700 border border-blue-200 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:border-blue-300 transition-transform transform hover:scale-105"
                            >
                                View FAQs
                            </a>

                            <span className="text-white/70 font-medium">or</span>

                            <a
                                href="/contact"
                                className="inline-block bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
                            >
                                Schedule a Free Consultation
                            </a>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </Layout>
    );
};

/* -------------------- Types -------------------- */

type PricingCardProps = {
    title: string;
    price: React.ReactNode;
    subtitle?: string;
    features: { name: string; included?: boolean }[];
    popular?: boolean;
    badgeText?: string;
    ctaLabel?: string;
    highlight?: boolean;
    chips?: string[];
    footnote?: React.ReactNode;
};

/* -------------------- Components -------------------- */

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    subtitle,
    features,
    popular = false,
    badgeText,
    ctaLabel = 'Get Started',
    highlight = false,
    chips = [],
    footnote,
}) => {
    return (
        <div
            className={`relative bg-white p-8 rounded-2xl border flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105 shadow-xl
                ${highlight
                    ? 'border-yellow-500 ring-1 ring-yellow-400/60 shadow-[0_0_35px_rgba(234,179,8,0.55)]'
                    : 'border-gray-200'
                }`}
        >
            <div>
                {popular && (
                    <div className="text-sm text-gray-900 bg-yellow-500 px-3 py-1 rounded-full inline-block mb-4">
                        {badgeText || 'Popular'}
                    </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-1 text-center">{title}</h3>
                {subtitle && <p className="text-sm text-gray-600 text-center mb-3">{subtitle}</p>}

                {/* Price */}
                <div className="text-gray-900 text-3xl font-bold leading-tight text-center">{price}</div>

                {/* Value Chips */}
                {chips.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                        {chips.map((chip, i) => (
                            <span
                                key={i}
                                className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-800 flex items-center">
                            {feature.included !== undefined ? (
                                feature.included ? (
                                    <svg
                                        className="w-5 h-5 text-blue-600 mr-2 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5 text-red-500 mr-2 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )
                            ) : null}
                            {feature.name}
                        </li>
                    ))}
                </ul>

                {/* Footnote (kept only the line you liked) */}
                {footnote && <div>{footnote}</div>}
            </div>

            <div className="mt-8">
                <a
                    href="/contact"
                    className="block w-full px-6 py-3 text-center rounded-full shadow-md font-semibold transition-colors duration-300 bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                >
                    {ctaLabel}
                </a>
            </div>
        </div>
    );
};

export default Pricing;