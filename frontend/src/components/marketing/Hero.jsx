import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Ship faster, scale further
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">The platform your team</span>
                  <span className="block text-primary-600">will thank you for</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Launch in days with pricing, onboarding, and analytics built in — the
                  infrastructure you need to grow.
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:px-10 md:py-4"
                      >
                        Start Free Trial
                      </a>
                    </div>
                    <div className="mt-3 sm:ml-3 sm:mt-0">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-100 px-8 py-3 text-base font-medium text-primary-700 hover:bg-primary-200 md:px-10 md:py-4"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Image Placeholder */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1556761175-5973dd0f76c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
