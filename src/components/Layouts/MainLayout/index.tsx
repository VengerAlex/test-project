import {ReactElement, Fragment} from 'react'
import {Box} from '@mui/material'
import Sidebar from '@ui/Sidebar'

const MainLayout = ({children}: {children: ReactElement}) => {
  return (
    <Fragment>
      <Sidebar />
      <Box sx={{p: '25px'}}>
        {children}
      </Box>
    </Fragment>
  )
}

export default MainLayout
