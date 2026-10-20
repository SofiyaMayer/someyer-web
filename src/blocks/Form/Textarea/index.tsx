import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Field, Textarea as TextAreaComponent } from '@chakra-ui/react'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width }) => {
  return (
    <Width width={width}>
      <Field.Root invalid={Boolean(errors[name])} required={Boolean(required)}>
        <Field.Label>
          {label}
          <Field.RequiredIndicator />
        </Field.Label>
        <TextAreaComponent
          defaultValue={defaultValue}
          rows={rows}
          {...register(name, { required: required })}
        />
        <Error name={name} />
      </Field.Root>
    </Width>
  )
}
