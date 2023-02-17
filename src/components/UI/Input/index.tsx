import { useState } from 'react'
import {
  IconButton, InputAdornment, TextField, TextFieldProps
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoginPayload } from 'src/services/auth.service'
import { Control } from 'react-hook-form'

type InputProps = TextFieldProps & {
  isPassword?: boolean
  isResetPassword?: boolean
  control: Control<LoginPayload>
  formName: keyof LoginPayload
}

export const Input = ({
  isPassword = false, formName, control, ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField
      {...control.register(formName)}
      {...props}
      name={formName}
      type={!isPassword ? 'text' : showPassword ? 'text' : 'password'}
      variant='outlined'
      size='small'
      sx={{
        label: {
          color: 'dimgray',
          fontSize: '16px',
        },
        input: {
          color: 'dimgray',
          fontSize: '16px',
        },
        '& .MuiFormHelperText-root': {
          margin: 0,
          fontSize: '12px',
        },
      }}
      InputProps={
        isPassword
          ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
          : {}
      }
    />
  )
}
