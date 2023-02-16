import {Navigate, Outlet, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {ROUTES} from '@utils/constants'

export const PrivateRoute = () => {
  const location = useLocation()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      // getMe()
    }
  }, [token])

  if (!token)
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />

  return <Outlet />
}
