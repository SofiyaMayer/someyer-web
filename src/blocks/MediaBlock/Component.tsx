import type { StaticImageData } from 'next/image'

import { Box, Container, type BoxProps } from '@chakra-ui/react'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  captionProps?: BoxProps
  enableGutter?: boolean
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const { captionProps, enableGutter = true, media, staticImage, disableInnerContainer } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  const Wrapper = enableGutter ? Container : Box
  const CaptionWrapper = disableInnerContainer ? Box : Container

  return (
    <Wrapper>
      {(media || staticImage) && (
        <Media
          // The block styles its own image; rich text prose would otherwise add margins to it
          className="not-prose"
          imgProps={{ borderRadius: '0.8rem', borderWidth: '1px' }}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <CaptionWrapper mt="6" {...captionProps}>
          <RichText data={caption} enableGutter={false} />
        </CaptionWrapper>
      )}
    </Wrapper>
  )
}
