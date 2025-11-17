import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecadoc AI — Intelligent Blueprint Reader",
  description:
    "Ecadoc AI understands architectural drawings in seconds. Ask questions, extract measurements, and auto-annotate PDFs, CAD exports, and scans with vision-grade accuracy.",
  alternates: { canonical: "https://www.ecadoc.ai/refund-policy" },
};

const RefundPolicyPage = () => (
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
            <span className="mx-2">·</span>
            <a
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Refund policy
            </a>
          </span>
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-normal lg:text-heading-2"
          >
            Refund policy
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
    <section className="pb-[100px] md:pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[70px] refund-policy">
          <div data-ns-animate data-delay="0.3" className="space-y-3">
            <h2>Return and refund guidelines</h2>
            <p>
              At Ecadoc AI we are committed to delivering an accurate secure AI
              powered blueprint reader that supports professional plan review
              workflows. If our service fails to meet your expectations we
              provide a clear refund route to resolve the matter promptly and
              professionally.
            </p>
          </div>
          <div data-ns-animate data-delay="0.4" className="space-y-3">
            <h2>14-Day money-back guarantee</h2>
            <p>
              We are confident that Ecadoc AI will improve plan review
              efficiency and accuracy. <br />
              If you remain unsatisfied you may request a full refund within 14
              days of your original purchase subject to the conditions stated
              below.
            </p>
          </div>
          <div data-ns-animate data-delay="0.5">
            <h2>Conditions for refund</h2>
            <p>You are eligible for a full refund if</p>
            <ul className="mt-6 space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
              <li>
                You request a refund within 14 days from the date of purchase.
              </li>
              <li>
                You provide required information such as account details and
                purchase reference if requested.
              </li>
              <li>
                You do not have outstanding violations of our Terms and
                Conditions.
              </li>
              <li>
                Your request is not for features expressly excluded in the
                product description.
              </li>
              <li>
                You have not exceeded acceptable usage under a higher-tier plan
                prior to downgrade.
              </li>
              <li>
                Your request is not for issues already resolved by our support
                team where resolution was provided.
              </li>
            </ul>
          </div>
          <div data-ns-animate data-delay="0.4">
            <h2>How to request a refund</h2>
            <p>Simply follow these easy steps</p>
            <ol className="mt-8 mb-6 space-y-8">
              <li data-ns-animate data-delay="0.5">
                <div className="max-w-[596px] sm:rounded-[20px] rounded-2xl bg-background-1 dark:bg-background-6 sm:py-6 py-5 sm:px-[34px] px-7 flex sm:gap-[22px] gap-4 items-start">
                  <div className="size-10 flex items-center justify-center bg-ns-yellow text-tagline-1 font-semibold text-secondary shrink-0 rounded-full">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="sm:text-lg text-tagline-1 font-medium leading-[27px] text-secondary dark:text-accent">
                      Submit a support ticket through our Contact Page.
                    </p>
                    <p>
                      If you experience issues or require assistance our support
                      team will guide you. Visit the Contact Page and complete
                      the ticket form with relevant details.
                    </p>
                  </div>
                </div>
              </li>
              <li data-ns-animate data-delay="0.6">
                <div className="max-w-[596px] sm:rounded-[20px] rounded-2xl bg-background-1 dark:bg-background-6 sm:py-6 py-5 sm:px-[34px] px-7 flex sm:gap-[22px] gap-4 items-start">
                  <div className="size-10 flex items-center justify-center bg-ns-green text-tagline-1 font-semibold text-secondary shrink-0 rounded-full">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="sm:text-lg text-tagline-1 font-medium leading-[27px] text-secondary dark:text-accent">
                      Provide your account reference purchase ID and a concise
                      description.
                    </p>
                    <p>
                      Once received our team will review the request and respond
                      with next steps and any information required to complete
                      the assessment.
                    </p>
                  </div>
                </div>
              </li>
              <li data-ns-animate data-delay="0.7">
                <div className="max-w-[596px] sm:rounded-[20px] rounded-2xl bg-background-1 dark:bg-background-6 sm:py-6 py-5 sm:px-[34px] px-7 flex sm:gap-[22px] gap-4 items-start">
                  <div className="size-10 flex items-center justify-center bg-ns-cyan text-tagline-1 font-semibold text-secondary shrink-0 rounded-full">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="sm:text-lg text-tagline-1 font-medium leading-[27px] text-secondary dark:text-accent">
                      Our team will validate and process your refund request.
                    </p>
                    <p>
                      We will review the details verify eligibility and confirm
                      the approved outcome to your registered contact email.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
            <p data-ns-animate data-delay="0.7">
              Refunds will be issued to the
              <span className="text-secondary dark:text-accent">
                original payment method
              </span>
              used at checkout.
            </p>
          </div>
          <div data-ns-animate data-delay="0.8" className="space-y-3">
            <h2>Refund processing time</h2>
            <p>
              Once your refund is approved the transaction may take between 5
              and 10 business days to appear in your account depending on your
              payment provider.
            </p>
          </div>
          <div data-ns-animate data-delay="0.9">
            <h2>Non-refundable situations</h2>
            <p>
              Ecadoc AI reserves the right to suspend or terminate any user
              account without prior notice for reasons including but not limited
              to
            </p>
            <ul className="mt-6 space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
              <li>Purchases made through unauthorized channels.</li>
              <li>
                Refund requests based on omissions that are clearly described in
                the product documentation.
              </li>
              <li>
                Downgrades after material usage on a higher tier plan that
                materially consumed included credits or allowances.
              </li>
            </ul>
          </div>
          <div data-ns-animate data-delay="0.8">
            <h2>We appreciate your feedback</h2>
            <p>
              If you request a refund we welcome brief feedback about your
              experience. Your input helps us improve Ecadoc AI function
              reliability and usability for future users.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="pb-[120px] pt-[80px]">
      <div className="main-container">
        <div className="text-center">
          <p className="text-tagline-1 text-secondary dark:text-accent max-w-[820px] mx-auto">
            No payments are processed during the pilot; refund terms do not
            apply.
          </p>
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

export default RefundPolicyPage;
