import { Box, Heading, LinkBox, LinkOverlay, Text, type LinkBoxProps } from '@chakra-ui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<
  {
    doc?: CardPostData
    relationTo?: 'posts'
    showCategories?: boolean
    title?: string
  } & LinkBoxProps
> = (props) => {
  const { doc, relationTo, showCategories, title: titleFromProps, ...rest } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <LinkBox
      as="article"
      bg="bg.subtle"
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
      {...rest}
    >
      <Box position="relative" width="full">
        {!metaImage && <Box>No image</Box>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </Box>
      <Box p="4">
        {showCategories && hasCategories && (
          <Text mb="4" textStyle="sm" textTransform="uppercase">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category

                const categoryTitle = titleFromCategory || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <Fragment key={index}>
                    {categoryTitle}
                    {!isLast && <Fragment>, &nbsp;</Fragment>}
                  </Fragment>
                )
              }

              return null
            })}
          </Text>
        )}
        {titleToUse && (
          <Heading as="h3" size="lg">
            <LinkOverlay asChild>
              <Link href={href}>{titleToUse}</Link>
            </LinkOverlay>
          </Heading>
        )}
        {description && <Text mt="2">{sanitizedDescription}</Text>}
      </Box>
    </LinkBox>
  )
}
