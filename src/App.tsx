import {Route, Routes} from 'react-router-dom'
import {ROUTES} from '@utils/constants'
import {
  Home, Team, SignIn,
  Company, NotFound
} from '@pages/index'

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
