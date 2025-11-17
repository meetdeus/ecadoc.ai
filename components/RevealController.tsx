"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Direction = "up" | "down" | "left" | "right";

const getNumericAttr = (el: HTMLElement, attr: string, fallback: number) => {
  const value = parseFloat(el.getAttribute(attr) ?? "");
  return Number.isFinite(value) ? value : fallback;
};

const getDirectionOffset = (direction: Direction, offset: number) => {
  switch (direction) {
    case "down":
    case "right":
      return offset;
    case "left":
    case "up":
    default:
      return -offset;
  }
};

const axisForDirection = (direction: Direction) =>
  direction === "left" || direction === "right" ? "X" : "Y";

const prepareElement = (el: HTMLElement) => {
  const direction = (el.getAttribute("data-direction") as Direction) || "up";
  const offsetValue = getNumericAttr(el, "data-offset", 60);
  const initialOffset = getDirectionOffset(direction, offsetValue);
  const axis = axisForDirection(direction);

  el.style.opacity = "0";
  el.style.transform = `translate${axis}(${initialOffset}px)`;
};

const animateElement = (el: HTMLElement) => {
  const duration = getNumericAttr(el, "data-duration", 0.8);
  const delay = getNumericAttr(el, "data-delay", 0);

  el.style.transitionProperty = "opacity, transform";
  el.style.transitionDuration = `${duration}s`;
  el.style.transitionDelay = `${delay}s`;
  el.style.transitionTimingFunction = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translate3d(0, 0, 0)";
  });
};

export const RevealController = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-ns-animate]"),
    );
    if (!elements.length) return;

    elements.forEach(prepareElement);

    const instantElements = elements.filter((el) =>
      el.hasAttribute("data-instant"),
    );
    instantElements.forEach((el) => animateElement(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          animateElement(target);
          observer.unobserve(target);
        });
      },
      { threshold: 0.2, root: null, rootMargin: "0px 0px -10% 0px" },
    );

    elements
      .filter((el) => !el.hasAttribute("data-instant"))
      .forEach((el) => observer.observe(el));

    const heroPerspective =
      document.querySelector<HTMLElement>(".hero-perspective");
    if (heroPerspective) {
      heroPerspective.style.opacity = "0";
      heroPerspective.style.filter = "blur(20px)";
      heroPerspective.style.transform =
        "perspective(1200px) scale(0.896871) rotateX(14.4381deg)";
      requestAnimationFrame(() => {
        heroPerspective.style.transition =
          "opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease";
        heroPerspective.style.transitionDelay = "0.7s";
        heroPerspective.style.opacity = "1";
        heroPerspective.style.filter = "blur(0px)";
        heroPerspective.style.transform =
          "perspective(1200px) scale(1) rotateX(0deg)";
      });
    }

    const heroLines = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hero-line]"),
    );
    if (heroLines.length) {
      heroLines.forEach((line) => {
        line.style.height = "0px";
        line.style.transition = "height 0.8s ease";
        line.style.transitionDelay = "0.7s";
        requestAnimationFrame(() => {
          line.style.height = "100%";
        });
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};
