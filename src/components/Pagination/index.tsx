'use client'
import {
  Box,
  ButtonGroup,
  IconButton,
  Pagination as ChakraPagination,
  type BoxProps,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const pageHref = (page: number) => `/posts/page/${page}`

export const Pagination: React.FC<
  {
    page: number
    totalPages: number
  } & BoxProps
> = (props) => {
  const { page, totalPages, ...rest } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return (
    <Box my="12" {...rest}>
      <ChakraPagination.Root count={totalPages} page={page} pageSize={1} siblingCount={1}>
        <ButtonGroup size="sm" variant="ghost">
          <IconButton aria-label="Go to previous page" asChild disabled={!hasPrevPage}>
            {hasPrevPage ? (
              <Link href={pageHref(page - 1)}>
                <ChevronLeftIcon />
              </Link>
            ) : (
              <span>
                <ChevronLeftIcon />
              </span>
            )}
          </IconButton>

          <ChakraPagination.Context>
            {({ pages }) =>
              pages.map((item, index) =>
                item.type === 'page' ? (
                  <IconButton
                    asChild
                    key={index}
                    variant={item.value === page ? 'outline' : 'ghost'}
                  >
                    <Link
                      aria-current={item.value === page ? 'page' : undefined}
                      href={pageHref(item.value)}
                    >
                      {item.value}
                    </Link>
                  </IconButton>
                ) : (
                  <ChakraPagination.Ellipsis index={index} key={index} />
                ),
              )
            }
          </ChakraPagination.Context>

          <IconButton aria-label="Go to next page" asChild disabled={!hasNextPage}>
            {hasNextPage ? (
              <Link href={pageHref(page + 1)}>
                <ChevronRightIcon />
              </Link>
            ) : (
              <span>
                <ChevronRightIcon />
              </span>
            )}
          </IconButton>
        </ButtonGroup>
      </ChakraPagination.Root>
    </Box>
  )
}
