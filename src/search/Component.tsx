'use client'
import { Field, Input, VisuallyHidden } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Field.Root>
        <VisuallyHidden asChild>
          <Field.Label>Search</Field.Label>
        </VisuallyHidden>
        <Input
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="Search"
        />
      </Field.Root>
      <VisuallyHidden asChild>
        <button type="submit">submit</button>
      </VisuallyHidden>
    </form>
  )
}
