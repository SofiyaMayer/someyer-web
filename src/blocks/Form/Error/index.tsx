'use client'

import { Field } from '@chakra-ui/react'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <Field.ErrorText>
      {(errors[name]?.message as string) || 'This field is required'}
    </Field.ErrorText>
  )
}
