import { Box } from '@chakra-ui/react'
import React from 'react'

import { Code } from './Component.client'

export type CodeBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <Box className="not-prose">
      <Code code={code} language={language} />
    </Box>
  )
}
