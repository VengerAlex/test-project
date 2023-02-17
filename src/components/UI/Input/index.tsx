import { useState } from 'react'
import {
  IconButton, InputAdornment, TextField, TextFieldProps
} from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'

// TODO! Replace any
type InputProps = TextFieldProps & {
  isPassword?: boolean
  isResetPassword?: boolean
  control: any
  formName: string
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
                  {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
                </IconButton>
              </InputAdornment>
            ),
          }
          : {}
      }
    />
  )
}
