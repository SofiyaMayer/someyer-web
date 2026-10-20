import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Checkbox as CheckboxUi, Field } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<
  CheckboxField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, defaultValue, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <Field.Root invalid={Boolean(errors[name])} required={Boolean(required)}>
        <Controller
          control={control}
          defaultValue={Boolean(defaultValue)}
          name={name}
          render={({ field }) => (
            <CheckboxUi.Root
              checked={field.value}
              name={field.name}
              onCheckedChange={({ checked }) => field.onChange(checked === true)}
            >
              <CheckboxUi.HiddenInput onBlur={field.onBlur} />
              <CheckboxUi.Control />
              <CheckboxUi.Label>
                {label}
                <Field.RequiredIndicator />
              </CheckboxUi.Label>
            </CheckboxUi.Root>
          )}
          rules={{ required }}
        />
        <Error name={name} />
      </Field.Root>
    </Width>
  )
}
