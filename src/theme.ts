import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  // Tailwind's preflight already resets the page; a second reset would restyle existing components
  preflight: false,
  // The site's theme switcher sets data-theme, not Chakra's default .dark/.light classes
  conditions: {
    light: ':root &, [data-theme=light] &',
    dark: '[data-theme=dark] &, [data-theme=dark] .chakra-theme:not([data-theme=light]) &',
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: 'var(--font-geist-sans), sans-serif' },
        heading: { value: 'var(--font-geist-sans), sans-serif' },
        mono: { value: 'var(--font-geist-mono), monospace' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
