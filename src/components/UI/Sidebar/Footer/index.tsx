import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '@components/Contexts/AuthContext'
import { Link } from 'react-router-dom'
import { ROUTES } from '@utils/constants'
import styled from '@emotion/styled'

const PrimaryButton = styled(Button)`
  width: 100%;
  font-size: 14px;
  padding: 7px 10px;
  text-transform: none;
  color: #0775b4;
  background-color: white;

  :hover {
    background-color: whitesmoke;
  }
`

export const Footer = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <Box sx={{ marginTop: 'auto', width: '100%' }}>
      {user ? (
        <PrimaryButton
          onClick={logout}
          variant='contained'
        >
          Log Out
        </PrimaryButton>
      ) : (
        <Link to={ROUTES.SIGN_IN}>
          <PrimaryButton variant='contained'>Log In</PrimaryButton>
        </Link>
      )}
    </Box>
  )
}
