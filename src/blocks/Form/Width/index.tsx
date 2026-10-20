import { Box, type BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export const Width: React.FC<
  {
    children: React.ReactNode
    width?: number | string
  } & BoxProps
> = ({ children, width, ...rest }) => {
  return (
    <Box maxWidth={width ? `${width}%` : undefined} {...rest}>
      {children}
    </Box>
  )
}
