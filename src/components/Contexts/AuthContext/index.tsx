import {createContext, ReactElement} from 'react'
import {useNavigate} from 'react-router-dom'
import {ROUTES} from '@utils/constants'
import {useLocalStorage} from '@hooks/useLocalStorage'

interface User {
  email: string
  username: string
}

interface ILocaleContext {
  user: User | null,
  login: (value: User) => void,
  logout: () => void
}
export const AuthContext = createContext<ILocaleContext>({
  user: null,
  login: () => null,
  logout: () => null
})

export const AuthProvider = ({children}: {children: ReactElement}) => {
  const navigate = useNavigate()
  const [user, setUser] = useLocalStorage<User | null>('user', null)

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)

    localStorage.removeItem('token')

    navigate(ROUTES.SIGN_IN)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
