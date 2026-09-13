import React from 'react';

const features = [
  {
    name: 'Launches in days',
    description: 'Pricing, billing, and onboarding pages that turn interest into users fast.',
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    name: 'Analytics that matter',
    description: 'Conversion and usage dashboards that drive decisions, not vanity metrics.',
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: 'Enterprise-grade trust',
    description: 'Security, compliance, and uptime that unlock bigger customers.',
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.928 12c0 3.072 1.871 5.766 4.512 8.163A11.99 11.99 0 0012 21.054c3.125-.91 5.7-3.834 5.7-3.834h2.213a2 2 0 001.66-2.92l-1.352-2.34A12.007 12.007 0 0021.072 12c0-3.072-1.871-5.766-4.512-8.163z"
        />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            The platform your team will thank you for
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">
            Launch in days with pricing, onboarding, and analytics built in — the infrastructure you
            need to grow.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
