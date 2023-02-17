import { Box, styled } from '@mui/material'
import { Menu } from '@components/UI/Sidebar/Menu'
import { Footer } from '@components/UI/Sidebar/Footer'
import { Header } from '@components/UI/Sidebar/Header'

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
  return (
    <SSidebar>
      <Header />
      <Menu />
      <Footer />
    </SSidebar>
  )
}

export default Sidebar
