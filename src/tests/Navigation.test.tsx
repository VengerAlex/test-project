import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import App from 'src/App'

describe('Navigation', () => {
  test('navigation to homepage', () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText('Home')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Home'))
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  test('navigation to company page', () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText('About')).toBeInTheDocument()
    fireEvent.click(screen.getByText('About'))
    expect(screen.getByText('Company')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Company'))
    expect(screen.getByText('Company Page')).toBeInTheDocument()
  })

  test('navigation to team page', () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText('About')).toBeInTheDocument()
    fireEvent.click(screen.getByText('About'))
    expect(screen.getByText('Team')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Team'))
    expect(screen.getByText('Team Page')).toBeInTheDocument()
  })

  test('navigation to bad page', () => {
    const badRoute = '/some/bad/route'

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })
})
