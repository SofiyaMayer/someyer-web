import { Button, type ButtonProps, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import type { LinkAppearances } from '@/fields/link'
import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | 'link' | LinkAppearances | null
  children?: React.ReactNode
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

const buttonVariants = {
  default: 'solid',
  outline: 'outline',
} as const satisfies Record<LinkAppearances, ButtonProps['variant']>

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const { type, appearance = 'inline', children, label, newTab, reference, size, url } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  const link = (
    <Link href={href} {...newTabProps}>
      {label && label}
      {children && children}
    </Link>
  )

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') return link

  if (appearance === 'link') return <ChakraLink asChild>{link}</ChakraLink>

  return (
    <Button asChild size={size ?? undefined} variant={buttonVariants[appearance ?? 'default']}>
      {link}
    </Button>
  )
}
