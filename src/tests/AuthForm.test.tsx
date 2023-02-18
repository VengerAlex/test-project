import { render, screen } from '@testing-library/react'
import { AuthForm } from '@components/UI/AuthForm'
import MainProvider from '@components/Providers'
import userEvent from '@testing-library/user-event'

describe('AuthForm', () => {
  beforeEach(() => {
    render(
      <MainProvider>
        <AuthForm />
      </MainProvider>
    )
  })

  it('render auth form', () => {
    expect(screen.getByTestId('auth-form')).toBeInTheDocument()
  })

  it('render a log ln button', () => {
    expect(screen.getByTestId('login-button').closest('button')).toBeInTheDocument()
  })

  it('fill username', async() => {
    await userEvent.click(screen.getByLabelText('Username'))
    await userEvent.type(screen.getByLabelText('Username'), 'username')

    expect(screen.getByLabelText('Username')).toHaveValue('username')
  })

  it('fill password', async() => {
    await userEvent.click(screen.getByLabelText('Password'))
    await userEvent.type(screen.getByLabelText('Password'), 'password')

    expect(screen.getByLabelText('Password')).toHaveValue('password')
  })

  it('login button enabled', async() => {
    await userEvent.click(screen.getByLabelText('Password'))
    await userEvent.type(screen.getByLabelText('Password'), 'password')
    await userEvent.click(screen.getByLabelText('Username'))
    await userEvent.type(screen.getByLabelText('Username'), 'username')

    expect(screen.getByTestId('login-button').closest('button')).not.toBeDisabled()
  })
})
