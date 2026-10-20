'use client'
import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <Flex
      align="center"
      className="chakra-theme"
      color="fg"
      data-theme="dark"
      justify="center"
      mt="-10.4rem"
      position="relative"
    >
      <Container
        alignItems="center"
        display="flex"
        justifyContent="center"
        mb="8"
        position="relative"
        zIndex={10}
      >
        <Box maxWidth="36.5rem" textAlign={{ md: 'center' }}>
          {richText && <RichText data={richText} enableGutter={false} mb="6" />}
          {Array.isArray(links) && links.length > 0 && (
            <HStack as="ul" gap="4" justify={{ md: 'center' }} listStyleType="none">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </HStack>
          )}
        </Box>
      </Container>
      <Box minHeight="80vh" userSelect="none">
        {media && typeof media === 'object' && (
          <Media fill imgProps={{ objectFit: 'cover', zIndex: -10 }} priority resource={media} />
        )}
      </Box>
    </Flex>
  )
}
