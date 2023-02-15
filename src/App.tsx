import {Route, Routes} from 'react-router-dom'
import Home from '@pages/Home'
import Team from '@pages/About/Team'
import Company from '@pages/About/Company'
import SignIn from '@pages/Auth/SignIn'
import NotFound from '@pages/NotFound'
import {ROUTES} from '@utils/constants'

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TEAM_ABOUT} element={<Team />} />
      <Route path={ROUTES.COMPANY_ABOUT} element={<Company />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.NotFound} element={<NotFound />} />
    </Routes>
  )
}

export default App
