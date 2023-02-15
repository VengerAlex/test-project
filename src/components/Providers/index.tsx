import {FC, PropsWithChildren} from 'react'
import {BrowserRouter} from 'react-router-dom'
import MainLayout from '@components/MainLayout'

const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <BrowserRouter>
    <MainLayout>
      {children}
    </MainLayout>
  </BrowserRouter>
)

export default MainProvider
