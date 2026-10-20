import { Box, SimpleGrid, type BoxProps } from '@chakra-ui/react'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { Card } from '../../components/Card'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export type RelatedPostsProps = {
  docs?: Post[]
  introContent?: DefaultTypedEditorState
} & BoxProps

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { docs, introContent, ...rest } = props

  return (
    <Box {...rest}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <SimpleGrid alignItems="stretch" columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 8 }}>
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <Card doc={doc} key={index} relationTo="posts" showCategories />
        })}
      </SimpleGrid>
    </Box>
  )
}
