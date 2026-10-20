import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <Container>
      <Flex
        align={{ md: 'center' }}
        bg="bg.subtle"
        borderRadius="md"
        borderWidth="1px"
        direction={{ base: 'column', md: 'row' }}
        gap="8"
        justify={{ md: 'space-between' }}
        p="4"
      >
        <Box alignItems="center" display="flex" maxWidth="48rem">
          {richText && <RichText data={richText} enableGutter={false} mb="0" />}
        </Box>
        <Stack gap="8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </Stack>
      </Flex>
    </Container>
  )
}
