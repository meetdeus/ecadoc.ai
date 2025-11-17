'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/#overview' },
  { label: 'Features', href: '/#capabilities' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Insights', href: '/#insights' }
];

const secondaryLinks = [...navLinks, { label: 'Contact Sales', href: '/contact' }];

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', sidebarOpen);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <header>
      <div
        className={clsx(
          'header-one opacity-0 rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[350px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2.5 xl:py-0 py-2.5 bg-white/60 backdrop-blur-[25px] top-5 dark:bg-background-7 dark:border dark:border-stroke-7 max-[400px]:max-w-[340px]',
          { 'scroll-header': isScrolled }
        )}
        data-ns-animate
        data-direction="up"
        data-offset="100"
        data-instant=""
      >
        <div>
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="lg:max-w-[198px] lg:block hidden">
              <img src="/images/main-logo.svg" alt="Ecadoc AI" className="dark:invert" />
            </figure>
            <figure className="max-w-[44px] lg:hidden block">
              <img src="/images/logo.svg" alt="Ecadoc AI" className="w-full dark:hidden block" />
              <img src="/images/logo-dark.svg" alt="Ecadoc AI" className="w-full dark:block hidden" />
            </figure>
          </Link>
        </div>
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2.5">
                <Link href={link.href} className="nav-item-link">
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
            <li className="py-2.5">
              <Link
                href="/contact"
                className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
              >
                Contact Sales
              </Link>
            </li>
          </ul>
        </nav>
        <div className="xl:flex hidden items-center justify-center">
          <Link href="https://app.ecadoc.ai" className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent border-0">
            <span>Start Pilot</span>
          </Link>
        </div>
        <div className="xl:hidden block">
          <button
            type="button"
            className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer"
            aria-label="Open navigation"
            onClick={toggleSidebar}
          >
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
          </button>
        </div>
      </div>

      <aside
        className={clsx(
          'sidebar fixed top-0 right-0 w-full sm:w-1/2 translate-x-full transition-all duration-300 h-screen bg-white dark:bg-background-7 xl:hidden z-[999] scroll-bar',
          { 'show-sidebar': sidebarOpen }
        )}
        aria-hidden={!sidebarOpen}
      >
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <img src="/images/logo.svg" alt="Ecadoc AI" className="w-full dark:hidden block" />
                <img src="/images/logo-dark.svg" alt="Ecadoc AI" className="w-full dark:block hidden" />
              </figure>
            </Link>
            <button
              type="button"
              className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative"
              aria-label="Close navigation"
              onClick={toggleSidebar}
            >
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute" />
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute" />
            </button>
          </div>
          <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
            <ul className="mt-4">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-left text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 last:border-b-0"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};
