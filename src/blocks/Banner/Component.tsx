import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { Alert } from '@chakra-ui/react'
import React from 'react'
import RichText from '@/components/RichText'

export const BannerBlock: React.FC<BannerBlockProps> = ({ content, style }) => {
  return (
    <Alert.Root my="8" status={style}>
      <Alert.Content>
        <RichText data={content} enableGutter={false} enableProse={false} />
      </Alert.Content>
    </Alert.Root>
  )
}
