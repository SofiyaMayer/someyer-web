import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <Flex
      align="flex-end"
      className="chakra-theme"
      color="fg"
      data-theme="dark"
      mt="-10.4rem"
      position="relative"
    >
      <Container
        display={{ lg: 'grid' }}
        gridTemplateColumns={{ lg: '1fr 48rem 1fr' }}
        pb="8"
        position="relative"
        zIndex={10}
      >
        <Box gridColumn={{ base: '1 / span 1', md: '2 / span 2' }}>
          <Text mb="6" textStyle="sm" textTransform="uppercase">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </Text>

          <Heading as="h1" mb="6" size={{ base: '3xl', md: '5xl', lg: '6xl' }}>
            {title}
          </Heading>

          <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 16 }}>
            {hasAuthors && (
              <Stack gap="1">
                <Text textStyle="sm">Author</Text>

                <Text>{formatAuthors(populatedAuthors)}</Text>
              </Stack>
            )}
            {publishedAt && (
              <Stack gap="1">
                <Text textStyle="sm">Date Published</Text>

                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </Stack>
            )}
          </Stack>
        </Box>
      </Container>
      <Box minHeight="80vh" userSelect="none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            fill
            imgProps={{ objectFit: 'cover', zIndex: -10 }}
            priority
            resource={heroImage}
          />
        )}
        <Box
          bgGradient="to-t"
          bottom="0"
          gradientFrom="black"
          gradientTo="transparent"
          height="50%"
          left="0"
          pointerEvents="none"
          position="absolute"
          width="full"
        />
      </Box>
    </Flex>
  )
}
