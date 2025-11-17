import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactMap } from '@/components/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Ecadoc AI — Vancouver Blueprint Intelligence Hub',
  description:
    'Connect with Ecadoc AI in Vancouver, BC. Schedule a demo, request pricing, or chat with our document intelligence team about secure blueprint analytics.',
  alternates: { canonical: 'https://www.ecadoc.ai/contact' },
  openGraph: {
    type: 'website',
    url: 'https://www.ecadoc.ai/contact',
    title: 'Contact Ecadoc AI — Secure Blueprint Intelligence',
    description:
      'Visit Ecadoc AI in Vancouver or reach the team to learn how we secure, search, and annotate construction drawings.',
    images: [
      {
        url: '/images/ecadoc-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecadoc AI blueprint intelligence'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecadocai',
    creator: '@ecadocai',
    title: 'Contact Ecadoc AI — Secure Blueprint Intelligence',
    description:
      'Book time with the Ecadoc AI team in Vancouver to explore secure blueprint storage, AI measurement, and markup automation.',
    images: ['https://www.ecadoc.ai/social/ecadoc-card.jpg']
  }
};

const ContactPage = () => (
<main className="bg-background-3 dark:bg-background-7">
  {/* ======================  
 Page Hero 
====================== */}
  <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]" aria-label="Page hero section">
    <div className="main-container">
      {/* Hero content */}
      <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
        <span data-ns-animate data-delay="0.1" className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
            Home
          </Link>
          <span className="mx-2">-</span>
          <Link href="/contact" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
            Contact Ecadoc AI
          </Link>
        </span>
        <h1 data-ns-animate data-delay="0.2" className="font-normal lg:text-heading-2">Contact Ecadoc AI</h1>
        <span data-ns-animate data-delay="0.3" className="badge badge-yellow mx-auto mt-2">
          Ecadoc AI is currently in its MVP Testing Edition. Commercial sales will begin later.
        </span>
      </div>
    </div>
  </section>
  {/* =========================
Contact
===========================*/}
  <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]" aria-label="Contact Information and Form">
    <div className="main-container">
      <div className="space-y-[70px]">
        {/* heading  */}
        <div className="max-w-[680px] mx-auto text-center space-y-3">
          <h2 data-ns-animate data-delay="0.2">Partner with our Vancouver blueprint intelligence team.</h2>
          <p data-ns-animate data-delay="0.3">
            Book a discovery call, schedule an on-site workshop, or request secure blueprint storage details.
            Our specialists respond within one business day to keep your projects moving.
          </p>
        </div>
        <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
          {/* contact info cards  */}
          <div data-ns-animate data-delay="0.4" className="flex flex-col gap-8 md:flex-row lg:flex-col">
            {/* contact info one  */}
            <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
              {/* bg overlay  */}
              <figure className="absolute select-none pointer-events-none size-[350px] overflow-hidden top-[-187px] left-[174px] -rotate-[78deg]">
                <img src="/images/gradient-22.png" alt="Decorative gradient overlay" className="size-full object-cover" />
              </figure>
              <figure className="size-10 overflow-hidden mx-auto">
                <img src="/images/home.svg" alt="Office location icon" className="size-full object-cover" />
              </figure>
              <div className="space-y-2.5">
                <p className="text-heading-6 text-accent">Vancouver Office</p>
                <p className="text-accent/60">Vancouver canada</p>
              </div>
            </div>
            {/* contact info two  */}
            <div className="card-item bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
              {/* bg overlay  */}
              <figure className="absolute size-[350px] select-none pointer-events-none overflow-hidden top-[-206px] left-[-36px] rotate-[62deg]">
                <img src="/images/gradient-17.png" alt="Decorative gradient overlay" className="size-full object-cover" />
              </figure>
              <div className="space-y-6">
                <figure className="size-10 overflow-hidden mx-auto">
                  <img src="/images/mail-open.svg" alt="Email icon" className="size-full object-cover" />
                </figure>
                <div className="space-y-2.5">
                  <p className="text-heading-6 text-accent">Email Sales</p>
                  <p className="text-accent/60">
                    <a href="mailto:kfiawoyife@capstruct.ca">kfiawoyife@capstruct.ca</a>
                  </p>
                </div>
              </div>
            </div>
            {/* contact info three  */}
            <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
              {/* bg-overlay  */}
              <figure className="size-[450px] top-[-264px] left-[-255px] absolute select-none pointer-events-none">
                <img src="/images/gradient-6.png" alt="Decorative gradient overlay" />
              </figure>
              <div className="space-y-6">
                <figure className="size-10 overflow-hidden mx-auto">
                  <img src="/images/phone-right.svg" alt="Phone icon" className="size-full object-cover" />
                </figure>
                <div className="space-y-2.5">
                  <p className="text-heading-6 text-accent">Call Sales</p>
                  <p className="text-accent/60">
                    <a href="tel:+16476577706">+1 (647) 657-7706</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* contact form  */}
          <div data-ns-animate data-delay="0.3" className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11">
            <form action="/index.html" method="POST" className="space-y-8">
              {/* name and phone number  */}
              <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                {/*  name */}
                <div className="space-y-2 lg:max-w-[364px] w-full">
                  <label htmlFor="fullname" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Your name</label>
                  <input type="text" id="fullname" name="fullname" placeholder="Enter your name" required autoComplete="name" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal" />
                </div>
                {/* number */}
                <div className="space-y-2 max-w-[364px] w-full">
                  <label htmlFor="number" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Your number</label>
                  <input type="text" id="number" name="number" placeholder="Enter your number" required autoComplete="tel" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal" />
                </div>
              </div>
              {/* email  */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Email address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required autoComplete="email" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal" />
              </div>
              {/* subject  */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter your subject" required className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal" />
              </div>
              {/* message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Write message</label>
                <textarea id="message" name="message" rows={7} placeholder="Enter your messages" required className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal" defaultValue={""} />
              </div>
              {/* terms checkbox */}
              <fieldset className="flex items-center gap-2 mb-4">
                <label htmlFor="terms" className="flex items-center gap-x-3">
                  <input id="terms" type="checkbox" className="sr-only peer" required />
                  <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                </label>
                <label htmlFor="terms" className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                  I agree with the
                  <a href="/terms-conditions-page.html" className="text-primary-500 underline text-tagline-3">terms and conditions</a>
                </label>
              </fieldset>
              {/* submit button */}
              <button type="submit" className="btn btn-md btn-secondary w-full hover:btn-primary dark:btn-accent before:content-none first-letter:uppercase">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =========================
Contact Map
===========================*/}
  <section className="md:pt-[80px] lg:pt-[100px] pb-[100px] md:pb-[150px] lg:pb-[200px]" aria-label="Location Map">
    <div className="main-container">
      <div className="max-w-[680px] mx-auto text-center space-y-3 mb-8">
        <h2 data-ns-animate data-delay="0.1">Visit our Vancouver office</h2>
        <p data-ns-animate data-delay="0.2">Book an on-site session at Suite 1200, 401 W Georgia St, Vancouver, BC, or join virtually from anywhere.</p>
      </div>
      <div data-ns-animate data-delay="0.1" className="rounded-[20px] bg-white dark:bg-background-6 p-2.5">
        <ContactMap />
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

export default ContactPage;
