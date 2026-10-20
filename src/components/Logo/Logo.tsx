import { Image, type ImageProps } from '@chakra-ui/react'
import React from 'react'

type Props = Omit<ImageProps, 'loading'> & {
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, ...rest } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      maxWidth="9.375rem"
      w="full"
      h="34px"
      src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-logo-light.svg"
      {...rest}
    />
  )
}
