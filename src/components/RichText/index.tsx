import { Box, Container, type HTMLChakraProps } from '@chakra-ui/react'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'
import { Prose } from '@/components/ui/prose'

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => (
      <Box mb="4">
        <BannerBlock {...node.fields} />
      </Box>
    ),
    mediaBlock: ({ node }) => (
      <MediaBlock
        {...node.fields}
        captionProps={{ maxWidth: '48rem', mx: 'auto' }}
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & HTMLChakraProps<'div'>

export default function RichText(props: Props) {
  const { data, enableProse = true, enableGutter = true, ...rest } = props

  const content = <ConvertRichText converters={jsxConverters} data={data} disableContainer />

  if (!enableProse) {
    const Wrapper = enableGutter ? Container : Box
    return (
      <Wrapper className="payload-richtext" {...rest}>
        {content}
      </Wrapper>
    )
  }

  if (enableGutter) {
    return (
      <Container {...rest}>
        <Prose className="payload-richtext" mx="auto" size="lg">
          {content}
        </Prose>
      </Container>
    )
  }

  return (
    <Prose className="payload-richtext" maxWidth="none" size="lg" {...rest}>
      {content}
    </Prose>
  )
}
