import {FC, PropsWithChildren} from 'react'
import {
  Box,
  Container,
  CssBaseline,
  styled
} from '@mui/material'
import {MenuTS} from '@utils/types'
import {ROUTES} from '@utils/constants'
import Menu from '@ui/Menu'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgb(64, 73, 51);
`

const menuData: MenuTS = {
  title: 'Company Name',
  items: [
    {
      label: 'Home',
      href: ROUTES.HOME
    },
    {
      label: 'About',
      items: [
        {
          label: 'Company',
          href: ROUTES.COMPANY_ABOUT
        },
        {
          label: 'Team',
          href: ROUTES.TEAM_ABOUT
        },
      ],
    },
    {
      label: 'Sign-In',
      href: ROUTES.SIGN_IN
    },
  ],
}

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <CssBaseline/>
        <Menu menuData={menuData} />
        <Box>
          {children}
        </Box>
        <CssBaseline/>
      </Container>
    </Wrapper>
  )
}

export default MainLayout
