import {Box, Button, Typography} from '@mui/material'
import {useContext} from 'react'
import {AuthContext} from '@components/Contexts/AuthContext'

export const Footer = () => {
  const {logout} = useContext(AuthContext)

  return (
    <Box sx={{marginTop: 'auto'}}>
      <Button
        onClick={logout}
        variant='outlined'
        color='inherit'
      >
        <Typography sx={{color: '#fff'}}>Log Out</Typography>
      </Button>
    </Box>
  )
}
