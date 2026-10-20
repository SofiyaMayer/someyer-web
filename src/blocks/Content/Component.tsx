import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

const columnSpans = {
  full: 12,
  half: 6,
  oneThird: 4,
  twoThirds: 8,
}

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  return (
    <Container my="16">
      <Grid
        columnGap="16"
        rowGap="8"
        templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(12, 1fr)' }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <GridItem
                colSpan={{ base: 4, md: size === 'full' ? 4 : 2, lg: columnSpans[size!] }}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </GridItem>
            )
          })}
      </Grid>
    </Container>
  )
}
