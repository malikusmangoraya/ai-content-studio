import React from 'react';

const PricingTable = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      frequency: '/month',
      description: 'Perfect for getting started and experimenting.',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        'Community support',
        '100 API requests/day',
      ],
      isMostPopular: false,
      lemonSqueezyVariantId: 'FREE_TIER_ID', // Update with your Lemon Squeezy Variant ID
    },
    {
      name: 'Pro',
      price: '$29',
      frequency: '/month',
      description: 'Everything you need to grow your business.',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Email support',
        '10,000 API requests/day',
        'Custom domains',
      ],
      isMostPopular: true,
      lemonSqueezyVariantId: 'PRO_TIER_ID', // Update with your Lemon Squeezy Variant ID
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: '',
      description: 'Dedicated support and features for large teams.',
      features: [
        'All Pro features',
        'SLA support',
        'Dedicated account manager',
        'Unlimited API requests',
        'On-premise deployment',
      ],
      isMostPopular: false,
      lemonSqueezyVariantId: 'ENTERPRISE_TIER_ID', // Update with your Lemon Squeezy Variant ID
    },
  ];

  const getLemonSqueezyCheckoutUrl = (variantId) => {
    // In a real application, you would construct this URL using VITE_LEMONSQUEEZY_STORE_ID
    // and the variantId, e.g., `https://[YOUR_STORE_DOMAIN].lemonsqueezy.com/buy/[variantId]`
    return `https://app.lemonsqueezy.com/checkout/buy/${variantId}`;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the plan that's right for you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10"
            >
              {plan.isMostPopular && (
                <p className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold leading-6 text-white">
                  Most popular
                </p>
              )}
              <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {plan.frequency}
                  </span>
                )}
              </p>
              <a
                href={getLemonSqueezyCheckoutUrl(plan.lemonSqueezyVariantId)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  ${
                    plan.isMostPopular
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600'
                  }`}
              >
                {plan.name === 'Free'
                  ? 'Get started'
                  : plan.price === 'Custom'
                    ? 'Contact sales'
                    : 'Buy plan'}
              </a>
              <ul className="mt-8 flex-1 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
