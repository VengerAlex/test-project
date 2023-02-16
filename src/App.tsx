import {Route, Routes} from 'react-router-dom'
import {ROUTES} from '@utils/constants'
import {
  Home, Team, SignIn,
  Company, NotFound
} from '@pages/index'
import {PrivateRoute} from '@components/routes/PrivateRoute'
import {PublicRoute} from '@components/routes/PublicRoute'

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TEAM_ABOUT} element={<Team />} />
        <Route path={ROUTES.COMPANY_ABOUT} element={<Company />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      </Route>
      <Route path={ROUTES.NotFound} element={<NotFound />} />
    </Routes>
  )
}

export default App
