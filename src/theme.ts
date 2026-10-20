import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  // The site's theme switcher (next-themes) sets data-theme, not Chakra's default .dark/.light classes
  // `&[data-theme=…]` lets an element scope its own subtree, e.g. the header over a dark hero image
  conditions: {
    light: ':root &, &[data-theme=light], [data-theme=light] &',
    dark: '&[data-theme=dark], [data-theme=dark] &',
  },
  globalCss: {
    // Palette variables resolve where they are declared (html); scoped themes must declare them again
    '[data-theme]': {
      colorPalette: 'gray',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
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
