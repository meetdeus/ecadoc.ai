import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecadoc AI — Intelligent Blueprint Reader",
  description:
    "Ecadoc AI understands architectural drawings in seconds. Ask questions, extract measurements, and auto-annotate PDFs, CAD exports, and scans with vision-grade accuracy.",
  alternates: { canonical: "https://www.ecadoc.ai/privacy" },
};

const PrivacyPage = () => (
  <main className="bg-background-3 dark:bg-background-7">
    <section
      className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
      aria-label="Page hero section"
    >
      <div className="main-container">
        <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
          <span
            data-ns-animate
            data-delay="0.1"
            className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent"
          >
            <a
              href="/"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Home
            </a>
            <span className="mx-2">-</span>
            <a
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Privacy policy
            </a>
          </span>
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-normal lg:text-heading-2"
          >
            Privacy policy
          </h1>
          <span
            data-ns-animate
            data-delay="0.3"
            className="badge badge-yellow mx-auto mt-2"
          >
            Note: Ecadoc AI is currently operating as an MVP Testing Edition.
            Certain commercial features (billing, subscriptions, refunds) are
            inactive during this phase.
          </span>
        </div>
      </div>
    </section>
    <section className="pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[75px] privacy-policy">
          <div className="space-y-2">
            <h2 data-ns-animate data-delay="0.1">
              Data protection guidelines
            </h2>
            <p data-ns-animate data-delay="0.2">
              <span className="text-secondary dark:text-accent">Ecadoc AI</span>{" "}
              is a product operated by
              <span className="text-secondary dark:text-accent">
                Capstruct Inc
              </span>
              . Ecadoc AI provides intelligent blueprint reading and annotation
              features for AEC professionals to accelerate plan review and
              preserve project confidentiality securely promptly reliably
              accurately efficiently with precision for teams on site.
            </p>
          </div>
          <div data-ns-animate data-delay="0.3" className="space-y-2">
            <h4>Ecadoc AI privacy policy</h4>
            <p>
              This Privacy Policy explains how we collect use and disclose
              information when you access or use Ecadoc AI and related
              documentation
              <a
                href="https://ecadoc.ai"
                className="text-secondary dark:text-accent"
              >
                https://ecadoc.ai
              </a>
              (the "Site").
            </p>
          </div>
          <div data-ns-animate data-delay="0.4" className="space-y-6">
            <div className="space-y-2">
              <h4>Personal information we collect</h4>
              <p>
                When you access the Site we automatically collect technical
                device details including browser type IP address time zone and
                cookie identifiers. Additionally we record which drawing pages
                you view which search terms or external links referred you and
                how you interact with documents for rendering and analytics
                purposes. "Device Information."
              </p>
            </div>
            <ul
              data-ns-animate
              data-delay="0.5"
              className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60"
            >
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Cookies
                </strong>
                Data files placed on your device often including an anonymous
                unique identifier. ( Learn more about cookies and how to disable
                them:
                <a
                  href="http://www.allaboutcookies.org"
                  className="text-secondary"
                >
                  http://www.allaboutcookies.org
                </a>
                )
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Log Files
                </strong>
                Track actions on the Site and collect IP address browser type
                referring pages and timestamps.
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Web Beacons Tags and Pixels
                </strong>
                Electronic files to monitor site usage and interaction.
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Google Analytics and Pixels
                </strong>
                Collect traffic related information and interaction behavior.
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <div
                  data-ns-animate
                  data-delay="0.6"
                  className="text-left mb-[70px]"
                >
                  <p className="max-w-[550px]">
                    When you use subscription or purchase related features we
                    may collect your name email billing address payment details
                    and other information necessary to manage your account and
                    invoices.
                  </p>
                </div>
                <figure
                  data-ns-animate
                  data-delay="0.7"
                  className="max-w-[595px] w-full overflow-hidden rounded-[20px] self-end"
                >
                  <img
                    src="/images/privacy.png"
                    className="size-full object-cover"
                    alt="support-contact"
                  />
                </figure>
              </div>
              <div
                data-ns-animate
                data-delay="0.8"
                className="col-span-12 lg:col-span-6"
              >
                <form className="p-6 lg:p-[42px] rounded-[20px] bg-white dark:bg-background-8">
                  <fieldset className="space-y-2 mb-8">
                    <label
                      htmlFor="name"
                      className="text-tagline-1 text-secondary dark:text-accent font-medium block"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12 focus-visible:outline focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 font-normal"
                    />
                  </fieldset>
                  <fieldset className="space-y-2 mb-8">
                    <label
                      htmlFor="billing-shipping-addresses"
                      className="text-tagline-1 text-secondary dark:text-accent font-medium block"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="billing-shipping-addresses"
                      id="billing-shipping-addresses"
                      placeholder="Enter your phone number"
                      className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12 focus-visible:outline focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 font-normal"
                    />
                  </fieldset>
                  <fieldset className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-tagline-1 text-secondary dark:text-accent font-medium block"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12 focus-visible:outline focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 font-normal"
                    />
                  </fieldset>
                  <fieldset className="space-y-2 mb-8">
                    <label
                      htmlFor="payment-information"
                      className="text-tagline-1 text-secondary dark:text-accent font-medium block"
                    >
                      Message
                    </label>
                    <input
                      type="text"
                      name="payment-information"
                      id="payment-information"
                      placeholder="Enter your message"
                      className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12 focus-visible:outline focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 font-normal"
                    />
                  </fieldset>
                  <fieldset className="flex mt-4 items-center gap-2 mb-4">
                    <label
                      htmlFor="agree-terms"
                      className="flex items-center gap-x-3"
                    >
                      <input
                        id="agree-terms"
                        type="checkbox"
                        className="sr-only peer"
                        required
                      />
                      <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                    </label>
                    <label
                      htmlFor="agree-terms"
                      className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer"
                    >
                      I agree with the
                      <a
                        href="/terms-conditions-page.html"
                        className="text-primary-500 underline text-tagline-3"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </fieldset>
                  <button
                    type="submit"
                    className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full before:content-none first-letter:uppercase"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div data-ns-animate data-delay="0.5" className="space-y-6">
            <div className="space-y-2">
              <h4>How we use your personal information</h4>
              <p>We use the collected Account Information to:</p>
            </div>
            <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
              <li>
                Process subscription payments generate invoices and receipts
              </li>
              <li>Communicate with you</li>
              <li>Screen for potential fraud and risks</li>
              <li>
                Provide you with product updates feature announcements and
                service notices when consistent with your preferences
              </li>
            </ul>
            <div>
              <p className="text-secondary dark:text-accent">
                We use the collected Account Information to:
              </p>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>Improve and optimize the Site experience</li>
                <li>Analyze user interactions for performance tracking</li>
                <li>Screen for potential risk and fraud</li>
              </ul>
            </div>
          </div>
          <div data-ns-animate data-delay="0.6" className="space-y-6">
            <div className="space-y-2">
              <h4>Sharing your personal information</h4>
              <p>
                We share your Personal Information with trusted third-party
                service providers to help us operate effectively:
              </p>
            </div>
            <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
              <li>
                Google Analytics: To understand customer interactions and
                optimize experience (Learn more:
                <a href="#" className="text-secondary dark:text-accent">
                  {" "}
                  Google Privacy Policy{" "}
                </a>
                )
              </li>
              <li>Payment processor (Stripe)</li>
            </ul>
          </div>
          <div data-ns-animate data-delay="0.7" className="space-y-6">
            <div className="space-y-2">
              <h4>Do not track</h4>
              <p>
                Please note, we do not alter our Site’s data collection
                practices when we detect a "Do Not Track" signal from your
                browser.
              </p>
            </div>
          </div>
          <div data-ns-animate data-delay="0.8" className="space-y-6">
            <div className="space-y-2">
              <h4>Your rights</h4>
              <p>If you are a resident of the European Economic Area (EEA):</p>
            </div>
            <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
              <li>
                You have the right to access update or delete your personal
                information.
              </li>
              <li>
                If you wish to exercise these rights please contact us at
                <a
                  href="mailto:support@ecadoc.ai"
                  className="text-secondary dark:text-accent"
                >
                  support@ecadoc.ai
                </a>
              </li>
            </ul>
          </div>
          <div data-ns-animate data-delay="0.9" className="space-y-6">
            <div className="space-y-2">
              <h4>Data retention</h4>
              <p>
                We will retain your Account Information for our records unless
                you ask us to delete this information.
              </p>
            </div>
          </div>
          <div data-ns-animate data-delay={1} className="space-y-6">
            <div className="space-y-2">
              <h4>Minors</h4>
              <p>
                Our Site is not intended for individuals under the age of 18.
              </p>
            </div>
          </div>
          <div data-ns-animate data-delay="1.1" className="space-y-6">
            <div className="space-y-2">
              <h4>Changes</h4>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes to our practices or for legal or operational reasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="py-[50px] md:py-20 lg:py-28 dark:bg-background-5 bg-white"
      aria-label="Use Case Overview"
    >
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <span
              data-ns-animate
              data-delay="0.3"
              className="badge badge-green badge-yellow-v2"
            >
              Get started
            </span>
            <div className="space-y-3">
              <h2
                data-ns-animate
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
              >
                Start a secure Ecadoc workspace in minutes.
              </h2>
              <p data-ns-animate data-delay="0.5">
                Create a drawing vault that automates markups, measurements, and
                reviews for every architect, engineer, and builder on your team.
              </p>
            </div>
          </div>
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
            >
              <input
                type="email"
                name="email"
                id="userEmail-cta-v1"
                placeholder="Enter your email"
                required
                className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"
              />
              <button
                type="submit"
                className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-accent"
              >
                <span>Get started</span>
              </button>
            </form>
            <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
              <li
                data-ns-animate
                data-delay="0.7"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={7}
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="fill-white dark:fill-secondary"
                  >
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">
                  No credit card required
                </p>
              </li>
              <li
                data-ns-animate
                data-delay="0.8"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={7}
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="fill-white dark:fill-secondary"
                  >
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">
                  Free 30-day pilot
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default PrivacyPage;
