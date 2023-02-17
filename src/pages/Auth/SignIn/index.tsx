import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { ISignInForm } from '@utils/types'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@utils/schemas'
import { Input } from '@ui/Input'
import { showErrorText } from '@utils/utils'
import { useLogin } from '../../../services/auth.service'
import { useContext } from 'react'
import { AuthContext } from '@components/Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@utils/constants'

const SignWrapper = styled(Box)`
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
`

const SignContainer = styled(Box)`
  background-color: #0775b4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
`

const SignIn = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const { mutate, error } = useLogin()

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignInForm>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  })
  const { username, password } = getValues()

  const submitHandler = (data: ISignInForm) => {
    const { username, password } = data

    mutate(
      { username, password },
      {
        onSuccess: ({ data }) => {
          login({ username: data.username, email: data.email })

          localStorage.setItem('token', data.token)

          navigate(ROUTES.HOME)
        },
        onError: () => {
          reset()
        },
      }
    )
  }

  return (
    <SignContainer>
      <SignWrapper>
        <Box>
          <Typography
            variant='h3'
            mb={2}
            sx={{ color: '#000' }}
          >
            Hello System
          </Typography>
          <Typography
            variant='h5'
            mb={2}
          >
            Log In
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
          >
            <Input
              fullWidth
              helperText={showErrorText(errors, 'username', username)}
              autoFocus
              placeholder='Example123'
              error={!!errors.username && !!username}
              control={control}
              formName='username'
              label='Username'
            />
            <Input
              fullWidth
              helperText={showErrorText(errors, 'password', password)}
              error={!!errors.password && !!password}
              sx={{ mb: 2 }}
              placeholder='***************'
              control={control}
              formName='password'
              label='Password'
              isPassword
            />
          </Stack>
          <Button
            sx={{ mr: 2 }}
            variant='contained'
            type='submit'
            disabled={!isValid}
          >
            Log In
          </Button>
        </form>
        {error && (
          <Typography
            variant='h6'
            sx={{ color: 'red', mt: 2 }}
          >
            {error.message}
          </Typography>
        )}
      </SignWrapper>
    </SignContainer>
  )
}

export default SignIn
