import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Field, NativeSelect } from '@chakra-ui/react'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Select: React.FC<
  SelectField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, options, register, required, width }) => {
  return (
    <Width width={width}>
      <Field.Root invalid={Boolean(errors[name])} required={Boolean(required)}>
        <Field.Label>
          {label}
          <Field.RequiredIndicator />
        </Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            defaultValue={defaultValue}
            placeholder={label}
            {...register(name, { required })}
          >
            {options.map(({ label, value }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            })}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <Error name={name} />
      </Field.Root>
    </Width>
  )
}
