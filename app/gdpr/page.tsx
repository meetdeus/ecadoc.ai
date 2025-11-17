import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecadoc AI — Intelligent Blueprint Reader',
  description:
    'Ecadoc AI understands architectural drawings in seconds. Ask questions, extract measurements, and auto-annotate PDFs, CAD exports, and scans with vision-grade accuracy.',
  alternates: { canonical: 'https://www.ecadoc.ai/' }
};

const GdprPage = () => (
<main className="bg-background-3 dark:bg-background-7">
  {/* ======================  
 Page Hero 
====================== */}
  <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]" aria-label="Page hero section">
    <div className="main-container">
      {/* Hero content */}
      <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
        <span data-ns-animate data-delay="0.1" className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
          <a href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Home</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">Documentation</a>
        </span>
        <h1 data-ns-animate data-delay="0.2" className="font-normal lg:text-heading-2">Documentation</h1>
        <span data-ns-animate data-delay="0.3" className="badge badge-yellow mx-auto mt-2">
          Note: Ecadoc AI is currently operating as an MVP Testing Edition. Certain commercial features (billing, subscriptions, refunds) are inactive during this phase.
        </span>
      </div>
    </div>
  </section>
  {/* =========================
Documentation
===========================*/}
  <section className="pb-[200px] pt-[100px]">
    <div className="main-container mb-[70px]">
      <div className="space-y-3 text-center">
        <h2 data-ns-animate data-delay="0.1">Welcome to the Ecadoc AI documentation</h2>
        <p data-ns-animate data-delay="0.2">
          Find everything you need to install configure and master Ecadoc AI for professional plan review and takeoff.
        </p>
      </div>
    </div>
    <div className="main-container">
      <div className="space-y-[70px] documentation">
        <div className="space-y-8">
          <h4 data-ns-animate data-delay="0.3">Documentation sections (main categories)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-ns-animate data-delay="0.4" className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-3 rounded-[20px] overflow-hidden relative z-10">
              <div className="-z-100 absolute -right-[107%] -top-[110%] sm:-right-[65%] sm:-top-[105%] md:-right-[99%] md:-top-[112%] lg:-right-[79%] lg:-top-[108%] xl:-right-[62%] xl:-top-[107%] -rotate-[138deg] size-[650px] md:[1060px] -skew-[10deg] pointer-events-none select-none">
                <img src="/images/gradient-27.png" alt="gradient" />
              </div>
              <h5>Getting started</h5>
              <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Introduction to Ecadoc AI</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">System requirements</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Account setup</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Dashboard overview</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">First steps after signup</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">System requirements</a>
                </li>
              </ul>
            </div>
            <div data-ns-animate data-delay="0.5" className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-3 rounded-[20px] relative overflow-hidden z-10">
              <div className="-z-100 absolute -right-[107%] -top-[110%] sm:-right-[65%] sm:-top-[105%] md:-right-[99%] md:-top-[112%] lg:-right-[79%] lg:-top-[108%] xl:-right-[62%] xl:-top-[107%] -rotate-[138deg] size-[650px] md:[1060px] -skew-[10deg] pointer-events-none select-none">
                <img src="/images/gradient-27.png" alt="gradient" />
              </div>
              <h5>User management</h5>
              <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Adding and managing users</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Role-based access control</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Setting permissions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Managing teams and groups</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">First steps after signup</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">System requirements</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-ns-animate data-delay="0.6" className="space-y-6">
          <div className="space-y-2">
            <h4>Billing and subscription</h4>
            <p>Handle billing subscriptions and invoices for Ecadoc AI with ease.</p>
          </div>
          <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">How to subscribe</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Managing your subscription plan</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Payment methods</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Viewing and downloading invoices</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Canceling or upgrading plans</a>
            </li>
          </ul>
        </div>
        <div data-ns-animate data-delay="0.7" className="space-y-6">
          <div className="space-y-2">
            <h4>Settings &amp; customization</h4>
            <p>Tailor Ecadoc AI to your workflow and project requirements.</p>
          </div>
          <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">General settings overview</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Customize your branding</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Notification settings</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Language and localization options</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Custom fields and filters</a>
            </li>
          </ul>
        </div>
        <div data-ns-animate data-delay="0.8" className="space-y-6">
          <div className="space-y-2">
            <h4>Reporting and analytics</h4>
            <p>Gain insights from drawing usage metrics and takeoff analytics.</p>
          </div>
          <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Understanding the analytics dashboard</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Exporting reports</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Setting up custom reports</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">KPI and metrics guide</a>
            </li>
          </ul>
        </div>
        <div data-ns-animate data-delay="0.9" className="space-y-6">
          <div className="space-y-2">
            <h4>Troubleshooting &amp; FAQs</h4>
            <p>Solutions for common issues and answers to frequent questions.</p>
          </div>
          <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Login issues</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Error messages and solutions</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">Data sync issues</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">General FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* =========================
CTA v1 section
===========================*/}
  <section className="py-[50px] md:py-20 lg:py-28 dark:bg-background-5 bg-white" aria-label="Use Case Overview">
    <div className="main-container">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
          <span data-ns-animate data-delay="0.3" className="badge badge-green badge-yellow-v2">Get started</span>
          <div className="space-y-3">
            <h2 data-ns-animate data-delay="0.4" className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2">
              Start a secure Ecadoc workspace in minutes.
            </h2>
            <p data-ns-animate data-delay="0.5">Create a drawing vault that automates markups, measurements, and reviews for every architect, engineer, and builder on your team.</p>
          </div>
        </div>
        <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
          <form data-ns-animate data-delay="0.6" action="#" method="post" className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3">
            <input type="email" name="email" id="userEmail-cta-v1" placeholder="Enter your email" required className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal" />
            <button type="submit" className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-accent">
              <span>Get started</span>
            </button>
          </form>
          <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
            <li data-ns-animate data-delay="0.7" className="flex items-center justify-center gap-2">
              <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
                  <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                </svg>
              </span>
              <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
            </li>
            <li data-ns-animate data-delay="0.8" className="flex items-center justify-center gap-2">
              <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
                  <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                </svg>
              </span>
              <p className="text-tagline-3 sm:text-tagline-2">Free 30-day pilot</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
);

export default GdprPage;
