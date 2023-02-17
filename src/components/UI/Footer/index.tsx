import { Box, Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '@components/Contexts/AuthContext'
import { Link } from 'react-router-dom'
import { ROUTES } from '@utils/constants'

export const Footer = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <Box sx={{ marginTop: 'auto' }}>
      {user ? (
        <Button
          onClick={logout}
          variant='outlined'
          color='inherit'
        >
          <Typography sx={{ color: '#fff' }}>Log Out</Typography>
        </Button>
      ) : (
        <Link to={ROUTES.SIGN_IN}>
          <Button
            variant='outlined'
            color='inherit'
          >
            <Typography sx={{ color: '#fff' }}>Login</Typography>
          </Button>
        </Link>
      )}
    </Box>
  )
}
