'use client'

import { HStack, Link as ChakraLink, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <HStack as="nav" gap="3">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <ChakraLink asChild>
        <Link href="/search">
          <VisuallyHidden>Search</VisuallyHidden>
          <SearchIcon size={20} />
        </Link>
      </ChakraLink>
    </HStack>
  )
}
