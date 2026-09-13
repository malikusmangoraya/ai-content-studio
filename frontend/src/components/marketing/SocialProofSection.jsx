import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 lg:col-start-3">
            <blockquote className="text-center text-3xl font-bold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
              <p>
                &ldquo;We shipped our pricing page in a weekend and trials started flowing the same
                week.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
