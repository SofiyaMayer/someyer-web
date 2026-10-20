import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Field, Input } from '@chakra-ui/react'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Email: React.FC<
  EmailField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <Field.Root invalid={Boolean(errors[name])} required={Boolean(required)}>
        <Field.Label>
          {label}
          <Field.RequiredIndicator />
        </Field.Label>
        <Input
          defaultValue={defaultValue}
          type="text"
          {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required })}
        />
        <Error name={name} />
      </Field.Root>
    </Width>
  )
}
