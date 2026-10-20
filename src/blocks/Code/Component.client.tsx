'use client'
import { Box, chakra } from '@chakra-ui/react'
import { Highlight, themes } from 'prism-react-renderer'
import React from 'react'
import { CopyButton } from './CopyButton'

type Props = {
  code: string
  language?: string
}

export const Code: React.FC<Props> = ({ code, language = '' }) => {
  if (!code) return null

  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <chakra.pre
          bg="black"
          borderRadius="sm"
          borderWidth="1px"
          fontSize="xs"
          overflowX="auto"
          p="4"
        >
          {tokens.map((line, i) => (
            <Box display="table-row" key={i} {...getLineProps({ line })}>
              <chakra.span
                color="whiteAlpha.400"
                display="table-cell"
                textAlign="right"
                userSelect="none"
              >
                {i + 1}
              </chakra.span>
              <chakra.span display="table-cell" pl="4">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </chakra.span>
            </Box>
          ))}
          <CopyButton code={code} />
        </chakra.pre>
      )}
    </Highlight>
  )
}
