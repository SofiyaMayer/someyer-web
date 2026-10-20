import { Box, Container, HStack } from '@chakra-ui/react'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <Box>
      <Container mb="8">
        {richText && <RichText data={richText} enableGutter={false} mb="6" />}

        {Array.isArray(links) && links.length > 0 && (
          <HStack as="ul" gap="4" listStyleType="none">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </HStack>
        )}
      </Container>
      <Container>
        {media && typeof media === 'object' && (
          <Box>
            <Media mx={{ base: '-4', md: '-8', '2xl': '-16' }} priority resource={media} />
            {media?.caption && (
              <Box mt="3">
                <RichText data={media.caption} enableGutter={false} />
              </Box>
            )}
          </Box>
        )}
      </Container>
    </Box>
  )
}
