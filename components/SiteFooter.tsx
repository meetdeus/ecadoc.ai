import Link from "next/link";
import { Fragment } from "react";
import { ThemeToggle } from "./ThemeToggle";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#capabilities" },
  { label: "Start Pilot", href: "https://app.ecadoc.ai", external: true },
  { label: "Team", href: "https://app.ecadoc.ai", external: true },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact Sales", href: "/contact" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Insights", href: "/#insights" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "GDPR Compliance", href: "/gdpr" },
];

const socials = [
  { label: "Facebook", icon: "/images/facebook.svg", href: "#" },
  { label: "Instagram", icon: "/images/instagram.svg", href: "#" },
  { label: "YouTube", icon: "/images/youtube.svg", href: "#" },
  { label: "LinkedIn", icon: "/images/linkedin.svg", href: "#" },
];

export const SiteFooter = () => (
  <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
    <figure
      data-ns-animate
      data-delay="0.4"
      data-duration="0.8"
      data-direction="right"
      data-offset="400"
      className="pointer-events-none select-none absolute size-[550px] top-[-17%] md:top-[-25%] xl:top-[-32%] max-[376px]:right-[-83%] right-[-64%] md:right-[-30%] lg:right-[-19%] xl:right-[-9%] bg-top-right rotate-[-30deg]"
    >
      <img
        className="size-full object-cover object-top"
        src="/images/gradient-1.png"
        alt="Decorative gradient background"
      />
    </figure>
    <figure
      data-ns-animate
      data-delay="0.4"
      data-duration="0.8"
      data-direction="left"
      data-offset="400"
      className="pointer-events-none select-none absolute size-[728px] md:size-[870px] bottom-[-33%] md:bottom-[-60%] xl:bottom-[-77%] left-[-83%] md:left-[-52%] lg:left-[-38%] xl:left-[-30%] 2xl:left-[-22%] min-[2559px]:!left-[-16%]"
    >
      <img
        className="size-full object-bottom"
        src="/images/gradient-2.png"
        alt="Decorative gradient background"
      />
    </figure>
    <div className="main-container px-5">
      <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
        <div className="col-span-12 xl:col-span-4">
          <div data-ns-animate data-delay="0.3" className="max-w-[306px]">
            <figure>
              <img src="/images/dark-logo.svg" alt="Ecadoc AI logo" />
            </figure>
            <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-4">
              Ecadoc AI delivers blueprint intelligence for architecture,
              engineering, and construction teams.
            </p>
            <span className="badge badge-yellow mb-3">
              MVP Pilot • Testing Edition
            </span>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <Fragment key={social.label}>
                  <a
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <img
                      className="size-6"
                      src={social.icon}
                      alt={social.label}
                    />
                  </a>
                  {index < socials.length - 1 && (
                    <div className="h-6 w-px bg-stroke-1/20" />
                  )}
                </Fragment>
              ))}
            </div>
            <p className="text-accent/80 font-normal text-tagline-1 mt-4">
              Ecadoc AI is currently operating as an MVP Testing Edition.
              Certain commercial features (billing, subscriptions, refunds) are
              inactive during this phase.
            </p>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-8 grid grid-cols-12 gap-x-0 gap-y-8">
          <div className="col-span-12 md:col-span-4">
            <div data-ns-animate data-delay="0.4" className="space-y-8">
              <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">
                Company
              </p>
              <ul className="sm:space-y-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div data-ns-animate data-delay="0.5" className="space-y-8">
              <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">
                Support
              </p>
              <ul className="sm:space-y-5 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div data-ns-animate data-delay="0.6" className="space-y-8">
              <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">
                Legal Policies
              </p>
              <ul className="sm:space-y-5 space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[26px] pb-[100px] text-center relative">
        <div className="footer-divider absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-stroke-4/10" />
        <p
          data-ns-animate
          data-delay="0.7"
          data-offset="10"
          data-start="top 105%"
          className="text-tagline-1 font-normal text-primary-50"
        >
          Copyright © Ecadoc AI – intelligent blueprint assistant for AEC teams
        </p>
      </div>
    </div>
    <ThemeToggle />
  </footer>
);
