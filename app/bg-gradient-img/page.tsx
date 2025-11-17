import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found - NextSaaS",
  description:
    "NextSaaS is a collection of premium Tailwind templates for SaaS businesses with responsive layouts, auth flows, pricing pages, and modern UI components.",
  alternates: { canonical: "https:,
  openGraph: {
    type: "website",
    url: "https://next-sass-html.vercel.app/",
    title: "NextSaaS - Software, SaaS & Startup Tailwind Template",
    description:
      "NextSaaS delivers 35+ premium Tailwind templates for SaaS startups, covering onboarding, pricing, and conversion-focused layouts.",
    images: [
      {
        url: "/images/aPD-K55xUNkB2D2X_og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextSaaS - Software, SaaS & Startup Tailwind Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NextSaaS",
    creator: "@NextSaaS",
    title: "NextSaaS - Software, SaaS & Startup Tailwind Template",
    description:
      "Explore the NextSaaS Tailwind template pack for modern SaaS marketing sites, authentication flows, and pricing pages.",
    images: [
      "https:
    ],
  },
};

const GradientShowcasePage = () => (
  <main className="bg-background-2 dark:bg-background-5">
    <section className="pt-28 md:pt-36 lg:pt-44 xl:pt-60 pb-20 md:pb-28 lg:pb-40 xl:pb-52 section-reveal">
      <div className="main-container">
        <div
          data-ns-animate
          data-delay="0.1"
          className="bg-background-3 dark:bg-background-5 rounded-4xl border-[10px] border-white dark:border-background-9 relative overflow-hidden flex flex-col justify-center items-center py-10 md:py-20 lg:py-[100px] text-center pr-2.5"
        >
          <figure
            data-ns-animate
            data-delay="0.2"
            data-direction="right"
            data-offset={200}
            className="hero-gradient-2 absolute -top-[45%] sm:-top-[65%] -right-[68%] sm:-right-[48%] w-full -rotate-[68deg] h-full opacity-70 -z-0 pointer-events-none select-none"
          >
            <img
              src="/images/gradient-6.png"
              alt="gradient"
              className="rotate-180"
            />
          </figure>
          <h1
            data-ns-animate
            data-delay="0.3"
            className="text-[80px] md:text-[120px] lg:!text-[180px] xl:!text-[200px] font-medium leading-[1.1]"
          >
            404
          </h1>
          <h2 data-ns-animate data-delay="0.4" className="pt-6 pb-3">
            Opps! <br />
            Lost in the page?
          </h2>
          <p data-ns-animate data-delay="0.5" className="mb-10 md:mb-14">
            Don’t worry, we’ll help you find your way
          </p>
          <div data-ns-animate data-delay="0.6" data-instant>
            <a
              href="./"
              className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent"
            >
              <span>Go to Home</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default GradientShowcasePage;
