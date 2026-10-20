'use client'

import { ClientOnly, NativeSelect, Skeleton } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import React from 'react'

export const ThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme()

  return (
    // next-themes only knows the stored preference in the browser
    <ClientOnly fallback={<Skeleton height="8" width="24" />}>
      <NativeSelect.Root size="sm" variant="plain" width="auto">
        <NativeSelect.Field
          aria-label="Select a theme"
          onChange={(event) => setTheme(event.currentTarget.value)}
          value={theme}
        >
          <option value="system">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </ClientOnly>
  )
}
