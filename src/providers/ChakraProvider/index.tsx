'use client'

import { ChakraProvider as BaseChakraProvider } from '@chakra-ui/react'
import React from 'react'

import { system } from '@/theme'

import { EmotionRegistry } from './EmotionRegistry'

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionRegistry>
      <BaseChakraProvider value={system}>{children}</BaseChakraProvider>
    </EmotionRegistry>
  )
}
