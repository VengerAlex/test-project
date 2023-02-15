import { useState } from 'react'
import {
  IconButton,
  InputAdornment, TextField,
  TextFieldProps, Typography,
} from '@mui/material'

// TODO! Replace any

type InputProps = TextFieldProps & {
  isPassword?: boolean;
  isResetPassword?: boolean;
  control: any;
  formName: string;
};

export const Input = ({
  isPassword = false,
  formName,
  control,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField
      {...control.register(formName)}
      {...props}
      InputLabelProps={{ shrink: true }}
      onCopy={(event) => isPassword && event.preventDefault()}
      onPaste={(event) => isPassword && event.preventDefault()}
      name={formName}
      type={!isPassword ? 'text' : showPassword ? 'text' : 'password'}
      variant='standard'
      InputProps={
        isPassword
          ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <Typography>{showPassword ? 'Hide' : 'Show'}</Typography>
                </IconButton>
              </InputAdornment>
            ),
          }
          : {}
      }
    />
  )
}
