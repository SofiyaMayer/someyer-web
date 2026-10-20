import { Box } from '@chakra-ui/react'
import React from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const {
    alt,
    fill,
    imgProps,
    loading,
    onClick,
    onLoad,
    priority,
    ref,
    resource,
    size,
    src,
    videoProps,
    ...wrapperProps
  } = props

  const mediaProps = {
    alt,
    fill,
    imgProps,
    loading,
    onClick,
    onLoad,
    priority,
    ref,
    resource,
    size,
    src,
    videoProps,
  }

  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')

  return (
    <Box {...wrapperProps}>
      {isVideo ? <VideoMedia {...mediaProps} /> : <ImageMedia {...mediaProps} />}
    </Box>
  )
}
