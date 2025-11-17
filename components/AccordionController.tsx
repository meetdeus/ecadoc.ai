"use client";

import { useEffect } from "react";

export const AccordionController = () => {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".accordion-item"),
    );

    const closeItem = (item: HTMLElement) => {
      item.classList.remove("active-accordion");
      const content = item.querySelector<HTMLElement>(".accordion-content");
      content?.classList.add("hidden");
    };

    const openItem = (item: HTMLElement) => {
      item.classList.add("active-accordion");
      const content = item.querySelector<HTMLElement>(".accordion-content");
      content?.classList.remove("hidden");
    };

    const listeners: Array<() => void> = [];

    items.forEach((item) => {
      const button = item.querySelector<HTMLButtonElement>(".accordion-action");
      if (!button) return;

      const handler = () => {
        const isActive = item.classList.contains("active-accordion");
        items.forEach(closeItem);
        if (!isActive) {
          openItem(item);
        }
      };

      button.addEventListener("click", handler);
      listeners.push(() => button.removeEventListener("click", handler));
    });

    return () => listeners.forEach((off) => off());
  }, []);

  return null;
};
