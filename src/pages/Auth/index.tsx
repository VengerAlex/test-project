import { AuthForm } from '@components/UI/AuthForm'
import { Box, styled } from '@mui/material'

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
  return (
    <SignContainer>
      <AuthForm />
    </SignContainer>
  )
}

export default SignIn
