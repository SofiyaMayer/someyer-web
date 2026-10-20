'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

// When React renders the tree on the client (e.g. the notFound() fallback) the inline theme script
// never runs and React warns about it; a non-JS type there marks it as inert data instead.
const scriptProps = {
  type: typeof window === 'undefined' ? 'text/javascript' : 'application/json',
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="data-theme"
      disableTransitionOnChange
      scriptProps={scriptProps}
      // Keeps the preference visitors saved with the previous theme switcher
      storageKey="payload-theme"
    >
      {children}
    </NextThemesProvider>
  )
}
