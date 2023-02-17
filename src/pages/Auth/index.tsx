import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { ISignInForm } from '@utils/types'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@utils/schemas'
import { Input } from '@ui/Input'
import { showErrorText } from '@utils/utils'
import { useLogin } from '../../services/auth.service'
import { useContext } from 'react'
import { AuthContext } from '@components/Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@utils/constants'

const SignWrapper = styled(Box)`
  width: 350px;
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 6px;
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
const Title = styled(Typography)`
  padding: 60px 0 30px;
  font-weight: bold;
  color: dimgray;
  border-bottom: 1px solid lightgray;
`
const Subtitle = styled(Typography)`
  padding: 30px;
  color: dimgray;
`
const PrimaryButton = styled(Button)`
  width: 100%;
  font-size: 14px;
  padding: 7px 10px;
  text-transform: none;
  color: white;
  background-color: #0775b4;

  :disabled {
    color: white;
    opacity: 0.6;
  }

  :hover {
    color: white;
    background-color: #1976d2;;
  }
`
const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color: #0775b4;
  padding: 7px 10px;

  :hover {
    background-color: white;
    color: #1976d2;
    border-color: #1976d2;
  }
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
          <Title variant='h4'>Hello System</Title>
          <Subtitle variant='h5'>Log In</Subtitle>
        </Box>

        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack
            direction='column'
            alignItems='center'
          >
            <Input
              fullWidth
              helperText={showErrorText(errors, 'username', username)}
              autoFocus
              error={!!errors.username && !!username}
              control={control}
              formName='username'
              label='Username'
            />
            <Input
              fullWidth
              helperText={showErrorText(errors, 'password', password)}
              error={!!errors.password && !!password}
              control={control}
              formName='password'
              label='Password'
              isPassword
            />
          </Stack>

          <PrimaryButton
            variant='outlined'
            type='submit'
            disabled={!isValid}
            sx={{ mb: 2 }}
          >
            Log In
          </PrimaryButton>
          <SecondaryButton
            variant='outlined'
            onClick={() => navigate(-1)}
          >
            Cancel
          </SecondaryButton>
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
