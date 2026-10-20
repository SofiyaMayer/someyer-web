'use client'
import { Container, Flex } from '@chakra-ui/react'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  return (
    <Container
      as="header"
      {...(headerTheme === 'dark' ? { className: 'chakra-theme', 'data-theme': 'dark' } : {})}
      color="fg"
      position="relative"
      zIndex={20}
    >
      <Flex justify="space-between" py="8">
        <Link href="/">
          <Logo _dark={{ filter: 'none' }} filter="invert(1)" loading="eager" priority="high" />
        </Link>
        <HeaderNav data={data} />
      </Flex>
    </Container>
  )
}
