import {FC, PropsWithChildren} from 'react'
import {BrowserRouter} from 'react-router-dom'
import MainLayout from '@components/MainLayout'
import {ThemeProvider} from '@mui/material'
import {theme} from '../../themes'

const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <BrowserRouter>
    <MainLayout>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MainLayout>
  </BrowserRouter>
)

export default MainProvider
