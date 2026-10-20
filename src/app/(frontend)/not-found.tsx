import { Button, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Container py="28">
      <Heading as="h1" size="5xl">
        404
      </Heading>
      <Text mb="4">This page could not be found.</Text>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </Container>
  )
}
