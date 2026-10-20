import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <Container>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 4, lg: 8 }}>
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return <Card height="full" doc={result} key={index} relationTo="posts" showCategories />
          }

          return null
        })}
      </SimpleGrid>
    </Container>
  )
}
