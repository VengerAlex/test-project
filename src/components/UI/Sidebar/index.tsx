import { useContext } from 'react'
import { Box, styled, Typography } from '@mui/material'
import Menu from '@ui/Menu'
import { AuthContext } from '@components/Contexts/AuthContext'
import { Footer } from '@ui/Footer'

const SSidebar = styled(Box)`
  width: 300px;
  background-color: #0775b4;
  padding: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const Sidebar = () => {
  const { user } = useContext(AuthContext)

  return (
    <SSidebar>
      <Typography
        sx={{ color: '#fff' }}
        variant='h3'
      >
        {user?.username }
      </Typography>
      <Menu />
      <Footer />
    </SSidebar>
  )
}

export default Sidebar
