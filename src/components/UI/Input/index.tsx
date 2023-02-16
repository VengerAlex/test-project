import {useState} from 'react'
import {
  IconButton,
  InputAdornment, TextField,
  TextFieldProps, Typography,
} from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'

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
      InputLabelProps={{shrink: true}}
      name={formName}
      type={!isPassword ? 'text' : showPassword ? 'text' : 'password'}
      variant='standard'
      InputProps={
        isPassword
          ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <Typography>{showPassword ? <Eye size={32} /> : <EyeSlash size={32} />}</Typography>
                </IconButton>
              </InputAdornment>
            ),
          }
          : {}
      }
    />
  )
}
