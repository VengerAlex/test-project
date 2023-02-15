import {FC, PropsWithChildren} from 'react'
import {BrowserRouter} from 'react-router-dom'
import MainLayout from '@components/MainLayout'
import {ThemeProvider} from '@mui/material'
import {QueryClient, QueryClientProvider} from 'react-query'
import {theme} from '../../themes'

const queryClient = new QueryClient()

const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </MainLayout>
    </QueryClientProvider>
  </BrowserRouter>
)

export default MainProvider
