import {ReactElement} from 'react'
import {
  Box,
  CssBaseline,
  styled
} from '@mui/material'

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`

const Layout = ({children}: {children: ReactElement}) => {
  return (
    <Wrapper>
      <CssBaseline/>
      {children}
    </Wrapper>
  )
}

export default Layout
