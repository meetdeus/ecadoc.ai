import type { Metadata } from "next";
import { AccordionController } from "@/components/AccordionController";

export const metadata: Metadata = {
  title: "Ecadoc AI — Intelligent Blueprint Reader",
  description:
    "Ecadoc AI understands architectural drawings in seconds. Ask questions, extract measurements, and auto-annotate PDFs, CAD exports, and scans with vision-grade accuracy.",
  alternates: { canonical: "https://www.ecadoc.ai/faq" },
};

const FaqPage = () => (
  <>
    <main className="bg-background-3 dark:bg-background-7">
      <section
        className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32"
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
                FAQ
              </a>
            </span>
            <h1
              data-ns-animate
              data-delay="0.2"
              className="font-normal lg:text-heading-2"
            >
              Frequently asked questions
            </h1>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="main-container">
          <div className="text-center space-y-5">
            <span data-ns-animate data-delay="0.2" className="badge badge-cyan">
              FAQ
            </span>
            <div className="space-y-3 text-center">
              <h2 data-ns-animate data-delay="0.3">
                Blueprint intelligence support center
              </h2>
              <p
                data-ns-animate
                data-delay="0.4"
                className="max-w-[600px] mx-auto"
              >
                Explore the questions teams ask while rolling out Ecadoc AI so
                you can plan pilots, coordinate securely, and brief stakeholders
                with confidence before your next project milestone.
              </p>
            </div>
          </div>
          <div className="py-[70px]">
            <div
              role="tablist"
              data-ns-animate
              data-delay="0.5"
              className="hidden md:flex tab-bar justify-center items-center border-b border-stroke-2 dark:border-stroke-6 relative"
            >
              <div className="active-tab-bar" />
              <button className="py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px data-[state=selected]:text-secondary text-secondary/60 dark:data-[state=selected]:text-accent dark:text-accent/60">
                <span className="text-tagline-1 font-medium">General</span>
              </button>
              <button className="py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px data-[state=selected]:text-secondary text-secondary/60 dark:data-[state=selected]:text-accent dark:text-accent/60">
                <span className="text-tagline-1 font-medium">Privacy</span>
              </button>
              <button className="py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px data-[state=selected]:text-secondary text-secondary/60 dark:data-[state=selected]:text-accent dark:text-accent/60">
                <span className="text-tagline-1 font-medium">
                  Terms &amp; Condition
                </span>
              </button>
            </div>
            <div className="tab-mobile flex items-center flex-wrap md:hidden gap-4">
              <button className="px-3.5 py-2 min-w-16 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 border border-stroke-2 dark:border-stroke-7 rounded-full dark:bg-background-7">
                General
              </button>
              <button className="px-3.5 py-2 min-w-16 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 border border-stroke-2 dark:border-stroke-7 rounded-full dark:bg-background-7">
                Privacy
              </button>
              <button className="px-3.5 py-2 min-w-16 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 border border-stroke-2 dark:border-stroke-7 rounded-full dark:bg-background-7 text-nowrap">
                Terms &amp; Condition
              </button>
            </div>
          </div>
          <div data-ns-animate data-delay="0.6" data-instant>
            <div
              className="tab-content max-w-[850px] mx-auto space-y-4"
              data-display="block"
            >
              <div className="accordion-item active-accordion bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How does Ecadoc protect stored blueprints?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Blueprint uploads stay encrypted at rest using AES-256
                      storage, with project metadata separated from drawing
                      content. Customers define retention policies so archived
                      sets purge after set intervals while audit logs preserve
                      who accessed or exported drawings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Where are Ecadoc environments hosted?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Ecadoc hosts data in customer-selected regions, supporting
                      US, EU, Canada, and APAC availability zones. You can pin
                      individual workspaces to specific jurisdictions and
                      require residency for derived attachments, ensuring
                      sensitive projects meet mandates or government
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    What access controls can we enforce?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Single sign-on with conditional access policies ensures
                      only approved employees or partners reach projects. You
                      can require MFA, device compliance, and project-level
                      permissions, while session timeouts and watermarking
                      discourage unauthorized sharing during reviews or screen
                      captures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Does Ecadoc provide detailed audit logs?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Every action—uploads, measurements, exports, comments—is
                      written to an immutable audit log with timestamps and user
                      IDs. Export CSVs or push to your SIEM to satisfy owner
                      audits, ISO certifications, or cybersecurity reporting
                      with minimal manual effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How is support access to our data handled?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Support engineers only access customer environments during
                      scheduled sessions with your approval. Access windows
                      expire automatically, and all interactions are recorded
                      with redacted transcripts, ensuring troubleshooting help
                      never exposes confidential sheets beyond the agreed
                      diagnostic scope.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Where can we review Ecadoc’s privacy commitments?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Our privacy policy outlines data collection, processing
                      purposes, retention durations, and contact details for
                      compliance teams. Review it inside the admin console
                      anytime and export a PDF for bids, regulatory filings, or
                      assurances during tenders easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-ns-animate data-delay="0.6" data-instant>
            <div
              className="tab-content max-w-[850px] mx-auto space-y-4"
              data-display="block"
            >
              <div className="accordion-item active-accordion bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    What drawing files can I upload to Ecadoc AI?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Ecadoc AI accepts layered PDFs, flattened sheets, IFC
                      exports, and high-resolution image scans from field
                      capture. Each upload is auto-tagged by project, sheet
                      discipline, and revision, letting teams locate context
                      quickly without renaming files or repeating recognition
                      across previously processed drawings for audit-ready
                      coordination history records.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How fast does Ecadoc process a typical drawing set?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Typical 50-sheet architectural packages finish ingestion
                      in under five minutes, and individual sheets stream
                      results within seconds. Teams can start reviewing takeoffs
                      while the remaining queue continues, with progress
                      indicators showing which drawings are ready, still
                      processing, or awaiting manual review checkpoints for QA
                      visibility always.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Can we pilot Ecadoc without connecting our project systems?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Pilot workspaces spin up without integrations, letting you
                      drag-and-drop sample drawing sets, test measurements, and
                      invite collaborators instantly. When leadership approves
                      rollout, toggle on Procore, BIM 360, SharePoint, or S3
                      connectors from workspace settings while preserving the
                      pilot artifacts for comparison and governance validation
                      audit logs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How does Ecadoc maintain measurement accuracy across sheets?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Ecadoc calibrates each sheet automatically using detected
                      scale bars, title block data, and manual overrides when
                      needed. Every measurement records who captured it, the
                      tolerance applied, and linked markup, so reviewers can
                      audit changes, comment inline, and roll back to previous
                      states instantly for assured compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How does Ecadoc keep everyone aligned during coordination?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Assign disciplines to drawing layers, mention teammates,
                      and subscribe to sheet updates so everyone sees the latest
                      context. Ecadoc routes notifications through email, Slack,
                      or Teams, and uses activity digests so superintendents or
                      estimators catch overnight changes before daily
                      coordination meetings and plan review standups easily.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    What does onboarding with Ecadoc usually look like?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Most teams onboard within two weeks: week one focuses on
                      secure data connections, permission templates, and pilot
                      drawing calibration, while week two trains estimators,
                      coordinators, and field leads through live projects.
                      Customer success tracks milestones, executive updates, and
                      adoption analytics throughout deployment to report
                      measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-ns-animate data-delay="0.6" data-instant>
            <div
              className="tab-content max-w-[850px] mx-auto space-y-4"
              data-display="block"
            >
              <div className="accordion-item active-accordion bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    What do Ecadoc’s terms and conditions cover?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Ecadoc’s terms outline permitted use of drawing data,
                      licensing for derived analytics, and the privacy,
                      security, and uptime commitments we deliver while hosting
                      your project portfolios.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Why must our team accept the terms?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Accepting them confirms you will share authorized
                      drawings, honor role-based permissions, and notify us of
                      compliance issues so we can safeguard projects and
                      maintain service levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    What happens if someone violates the terms?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Violating the terms may trigger access suspensions, audit
                      investigations, or termination of workspace agreements,
                      and we may notify owners so obligations and data
                      protections stay intact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Where can we review the complete agreement?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      You can review the complete terms inside workspace
                      settings, download a PDF for procurement packets, or
                      request a countersigned copy from our legal team for
                      archives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    Which activities are prohibited under your terms?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      Prohibited activities include sharing unauthorized
                      drawings, reverse engineering our models, bypassing
                      security controls, or uploading malware. Violations risk
                      suspension, remedies, and recovery of remediation expenses
                      incurred.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-background-1 dark:bg-background-6 rounded-[20px] px-8">
                <button className="accordion-action flex items-center cursor-pointer justify-between pt-8 pb-8 w-full">
                  <span className="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent">
                    How will we learn about updates to the terms?
                  </span>
                  <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                    >
                      <path
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        className="stroke-secondary dark:stroke-accent"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                    <p>
                      We notify admins before term updates, provide redlines,
                      and allow thirty days to review. Continuing to use the
                      platform after notice confirms acceptance of the
                      agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[100px] pb-[200px]">
        <div className="main-container">
          <div className="space-y-[70px]">
            <div className="main-w-[850px] md:w-full mx-auto text-center space-y-5">
              <span
                data-ns-animate
                data-delay="0.2"
                className="badge badge-cyan"
              >
                Contact
              </span>
              <div className="space-y-3">
                <h2 id="contact-heading" data-ns-animate data-delay="0.3">
                  Still have questions?
                </h2>
                <p
                  data-ns-animate
                  data-delay="0.4"
                  className="max-w-[442px] sm:w-full mx-auto"
                >
                  If your question isn't listed here, feel free to contact us or
                  start a live chat with our team. We're happy to help!
                </p>
              </div>
            </div>
            <div
              data-ns-animate
              data-delay="0.5"
              className="contact-form max-w-[850px] md:w-full mx-auto bg-white dark:bg-background-6 rounded-[20px] p-5 sm:p-[42px]"
            >
              <form action="/index.html" method="POST">
                <div className="space-y-2 mb-8">
                  <label
                    htmlFor="fullname"
                    className="block text-tagline-1 text-secondary dark:text-accent font-medium"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    className="w-full px-[18px] shadow-1 dark:text-accent dark:bg-background-6 py-2 rounded-full border border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                <div className="space-y-2 mb-8">
                  <label
                    htmlFor="email"
                    className="block text-tagline-1 text-secondary dark:text-accent font-medium"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="w-full px-[18px] py-2 dark:text-accent rounded-full border dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <label
                    htmlFor="message"
                    className="block text-tagline-1 text-secondary dark:text-accent font-medium"
                  >
                    Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your messages"
                    required
                    className="w-full px-[18px] py-2 rounded-xl dark:bg-background-6 border dark:text-accent border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                    defaultValue={""}
                  />
                </div>
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input
                      id="terms"
                      type="checkbox"
                      className="sr-only peer"
                      required
                    />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
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
                  className="btn btn-md btn-secondary dark:btn-accent w-full before:content-none first-letter:uppercase hover:btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center">
            <h2 data-ns-animate data-delay="0.1" className="mb-3">
              Try Ecadoc free today and
              <br className="hidden lg:block" />
              watch your
              <span className="text-primary-500"> projects move.</span>
            </h2>
            <p
              data-ns-animate
              data-delay="0.2"
              className="mb-8 lg:max-w-[390px] mx-auto"
            >
              Create an account to review drawings with AI-driven clarity across
              the entire project team.
            </p>
            <div data-ns-animate data-delay="0.3">
              <a
                href="https://app.ecadoc.ai/"
                className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md block w-full md:w-auto md:inline-block text-center mx-auto md:mx-0 text-tagline-2"
              >
                <span>Get started</span>
              </a>
            </div>
            <ul className="flex flex-wrap max-lg:gap-5 items-center justify-center gap-[42px] max-lg:mt-5 mt-20">
              <li
                data-ns-animate
                data-delay="0.4"
                className="flex gap-3 items-center"
              >
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p>No credit card required</p>
              </li>
              <li
                data-ns-animate
                data-delay="0.5"
                className="flex gap-3 items-center"
              >
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p>Free 30-day pilot.</p>
              </li>
              <li
                data-ns-animate
                data-delay="0.6"
                className="flex gap-3 items-center"
              >
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p>Cancel anytime.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <AccordionController />
  </>
);

export default FaqPage;
