import { createContext, ReactElement } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

interface User {
  email: string
  username: string
}

interface ILocaleContext {
  user: User | null
  login: (value: User) => void
  logout: () => void
}
export const AuthContext = createContext<ILocaleContext>({
  user: null,
  login: () => null,
  logout: () => null,
})

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null)

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
