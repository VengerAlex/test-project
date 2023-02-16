import { Navigate, Outlet, useLocation } from 'react-router-dom'
import {ROUTES} from '@utils/constants'

export const PublicRoute = () => {
  const { state } = useLocation()
  const token = localStorage.getItem('token')

  const pathGoBack = state?.from.path || ROUTES.HOME

  if (token) return <Navigate to={pathGoBack} />

  return <Outlet />
}
