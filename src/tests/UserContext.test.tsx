import { render, screen } from '@testing-library/react'
import Sidebar from '@ui/Sidebar'
import { AuthContext } from '@components/Contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'

describe('User', () => {
  it('not logged in user', () => {
    const user = {
      user: null,
      login: () => null,
      logout: () => null,
    }

    render(
      <BrowserRouter>
        <AuthContext.Provider value={user}>
          <Sidebar />
        </AuthContext.Provider>
      </BrowserRouter>
    )

    expect(screen.queryByTestId('user-card')).not.toBeInTheDocument()
  })

  it('render user card', () => {
    const user = {
      user: {
        email: 'userenail',
        username: 'username',
      },
      login: () => null,
      logout: () => null,
    }

    render(
      <BrowserRouter>
        <AuthContext.Provider value={user}>
          <Sidebar />
        </AuthContext.Provider>
      </BrowserRouter>
    )

    expect(screen.getByText('username')).toBeInTheDocument()
  })
})
