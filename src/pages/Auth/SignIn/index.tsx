import {
  Box, Button, Stack, Typography
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import {ISignInForm} from '@utils/types'
import {useForm} from 'react-hook-form'
import {signInSchema} from '@utils/schemas'
import {Input} from '@ui/Input'
import {showErrorText} from '@utils/utils'
import {useLogin} from '../../../services/auth.service'

// CREDENTIAL TO SIGN IN
// username: kminchelle
// password: 0lelplR

const SignIn = () => {
  const {mutate,data} = useLogin()

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignInForm>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  })
  const { username, password } = getValues()

  const submitHandler = (data: ISignInForm) => {
    const { username, password } = data

    mutate({ username, password })
  }

  const cancelRequestHandler = () => {
    //!!TODO CANCEL THE REQUEST
  }

  if (data) {
    return <Typography sx={{width: 5}}>USERNAME: {data?.username}</Typography>
  }

  return <Box sx={{maxWidth: '500px'}}>
    <Typography variant='h1' mb={2}>
      Sign In
    </Typography>
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
        sx={{mr: 2}}
        variant='contained'
        type='submit'
        disabled={!isValid}
      >
        Log In
      </Button>
      <Button
        variant='contained'
        onClick={cancelRequestHandler}
      >
        Cancel
      </Button>
    </form>
  </Box>
}

export default SignIn
