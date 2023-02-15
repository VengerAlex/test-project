import {FC, PropsWithChildren} from 'react'
import {
  Box,
  Container,
  CssBaseline,
  styled
} from '@mui/material'
import Menu from '@ui/Menu'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgb(75, 111, 108);
`

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <CssBaseline/>
        <Menu />
        <Box>
          {children}
        </Box>
        <CssBaseline/>
      </Container>
    </Wrapper>
  )
}

export default MainLayout
