import {ReactNode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {QueryClient, QueryClientProvider} from 'react-query'
import {theme} from '../../theme'
import Layout from '@components/Layouts'
import {AuthProvider} from '@components/Contexts/AuthContext'

const queryClient = new QueryClient()

interface MainProviderProps {
  children: ReactNode
}

const MainProvider = ({children}: MainProviderProps) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
)

export default MainProvider
