import { Box, Container, Flex } from '@chakra-ui/react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/components/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <Box
      as="footer"
      bg="bg.subtle"
      borderTopWidth="1px"
      className="chakra-theme"
      data-theme="dark"
      color="fg"
      mt="auto"
    >
      <Container
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="8"
        justifyContent={{ md: 'space-between' }}
        py="8"
      >
        <Flex align="center" asChild>
          <Link href="/">
            <Logo />
          </Link>
        </Flex>

        <Flex
          align={{ base: 'start', md: 'center' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          gap="4"
        >
          <ThemeSelector />
          <Flex as="nav" direction={{ base: 'column', md: 'row' }} gap="4">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
