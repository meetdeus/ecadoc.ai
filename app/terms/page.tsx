import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecadoc AI — Intelligent Blueprint Reader',
  description:
    'Ecadoc AI understands architectural drawings in seconds. Ask questions, extract measurements, and auto-annotate PDFs, CAD exports, and scans with vision-grade accuracy.',
  alternates: { canonical: 'https://www.ecadoc.ai/' }
};

const TermsPage = () => (
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
          <span className="mx-2">-</span>
          <a href="#" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">Terms &amp; Conditions</a>
        </span>
        <h1 data-ns-animate data-delay="0.2" className="font-normal lg:text-heading-2">Terms &amp; Conditions</h1>
        <span data-ns-animate data-delay="0.3" className="badge badge-yellow mx-auto mt-2">
          Note: Ecadoc AI is currently operating as an MVP Testing Edition. Certain commercial features (billing, subscriptions, refunds) are inactive during this phase.
        </span>
      </div>
    </div>
  </section>
  {/* ===============
  Terms & Conditions
  ==================== */}
  <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
    <div className="main-container">
      <div data-ns-animate data-delay="0.3" className="space-y-3">
        <h2>Terms &amp; conditions</h2>
        <div className="space-y-7">
          <p>Ecadoc.ai is owned and operated by Capstruct Inc. (‘Ecadoc’, ‘we’, ‘us’). These Terms govern customer use of our blueprint intelligence software, integrations, analytics, and professional services.</p>
          <p>Please read these Terms before enabling a workspace, installing integrations, uploading drawings, or inviting collaborators. Accessing the Service or signing an order form indicates acceptance on behalf of your organisation, project partners, contractors, and subcontractors who rely on issued credentials or API tokens daily.</p>
          <p>If you disagree with any provision, discontinue use immediately and contact legal@ecadoc.ai to discuss alternatives or request immediate export of workspace data backups.</p>
        </div>
      </div>
      <article className="terms-conditions-body">
        <div data-ns-animate data-delay="0.4" className="space-y-6">
          <h3>1. Limitation of liability</h3>
          <p>Under no circumstances will Ecadoc be liable for indirect, incidental, consequential, exemplary, special, or punitive damages, including lost profits, lost savings, lost data, loss of goodwill, schedule delays, cost overruns, rework, or construction claims, even if advised of the possibility. Some jurisdictions limit exclusions, so certain rights may remain available to you, your affiliates, or project owners globally.</p>
          <p>Customers are responsible for repairing or replacing hardware, software, drawings, archives, or materials impacted by their use of the Service, integrations, or APIs, including pilot environments.</p>
        </div>
        <div data-ns-animate data-delay="0.5" className="space-y-6">
          <h3>2. License</h3>
          <p>Subscriptions grant a non-exclusive, non-transferable licence to access Ecadoc during the active term. Each licence covers the seat count or usage volume purchased, remains subject to these Terms, and requires timely payment.</p>
          <p>Licence keys and administrator credentials must stay confidential. You may not resell, rent, sublicense, lend, lease, or bypass technical controls that enforce workspace permissions, consumption limits, or geographic residency restrictions.</p>
        </div>
        <div data-ns-animate data-delay="0.6" className="space-y-6">
          <h3>3. Ownership and liability</h3>
          <p>Customer owns all uploaded drawings, annotations, models, reports, and derived measurements. Ecadoc processes that content only to deliver the Service, troubleshoot issues, or satisfy legal obligations.</p>
          <p>Ecadoc maintains administrative, technical, and physical safeguards—including encryption, network segmentation, least privilege access, monitoring, vulnerability management, audit logging, penetration tests, disaster recovery, and ongoing employee training—to protect confidential information entrusted to the platform.</p>
          <p>User accounts and product licences are <strong className="font-bold !text-secondary dark:!text-accent">non-transferable</strong>. Agencies must arrange separate agreements so every client receives support, audit trails, and admin controls without compromising security requirements.</p>
        </div>
        <div data-ns-animate data-delay="0.3" className="space-y-6">
          <h3>4. Refund policy</h3>
          <p>We want you to love Ecadoc. New subscriptions include a thirty-day pilot; if expectations are not met, cancel within that window for a full subscription refund. Fees for implementation, migrations, training, or other professional services already delivered remain payable under their respective statements of work, engagement letters, formal purchase orders, invoices, and documented change-orders.</p>
        </div>
        <div data-ns-animate data-delay="0.4">
          <a href="/refund-policy" className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary">
            <span>Learn more about our refund policy</span>
          </a>
        </div>
        <div data-ns-animate data-delay="0.5" className="space-y-6">
          <h3>5. Warranty</h3>
          <p>THE SERVICE IS PROVIDED ‘AS IS’ AND ‘AS AVAILABLE’. ECADOC MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. Continuous availability, perfect accuracy, uninterrupted integrations, or specific construction outcomes are not guaranteed by Ecadoc worldwide today.</p>
        </div>
        <div data-ns-animate data-delay="0.6" className="space-y-6">
          <h3>6. Account termination and suspension</h3>
          <p>We may suspend or terminate access if accounts are compromised, invoices remain unpaid, limits are exceeded, or activities threaten platform integrity.</p>
          <ul>
            <li>Abusive, defamatory, or malicious behavior towards NextSaaS staff or customers</li>
            <li>Spreading false information or misleading reviews</li>
            <li>Unauthorized resale, distribution, or promotion of competitor products</li>
            <li>Involvement in hacking, spamming, piracy, or illegal activities</li>
            <li>Security threats due to account compromise or unauthorized sharing</li>
          </ul>
        </div>
        <div data-ns-animate data-delay="0.3" className="space-y-6">
          <h3>7. Privacy policy</h3>
          <p>We respect your privacy. Ecadoc never sells personal data and shares information only with subprocessors necessary to operate the Service, as detailed in our Privacy Policy.</p>
          <ul>
            <li>Order processing</li>
            <li>Account management</li>
            <li>Billing disputes</li>
            <li>Fraudulent activities</li>
            <li>Legal compliance</li>
          </ul>
          <p>Using Ecadoc authorises us to collect and process data consistent with this agreement, applicable law, and regional standards.</p>
        </div>
        <div data-ns-animate data-delay="0.4">
          <a href="/refund-policy" className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
            <span>Read our detailed privacy policy</span>
          </a>
        </div>
      </article>
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

export default TermsPage;
