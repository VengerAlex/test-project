import { DeepMap, FieldError, FieldValues } from 'react-hook-form'

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<TFieldValues, FieldError>

export const showErrorText = (errors: FieldErrors, value: string, fieldValue?: string) => {
  return errors[value]?.message && !!fieldValue ? errors[value]?.message : ' '
}
