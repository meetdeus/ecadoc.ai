'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    {children}
  </ThemeProvider>
);
