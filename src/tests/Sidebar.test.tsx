import { render, screen } from '@testing-library/react'
import MainProvider from '@components/Providers'
import Sidebar from '@ui/Sidebar'

describe('Sidebar', () => {
  beforeEach(() => {
    render(
      <MainProvider>
        <Sidebar />
      </MainProvider>
    )
  })

  it('render sidebar', () => {
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('render sidebar header', () => {
    expect(screen.getByText('Hello System')).toBeInTheDocument()
  })
})
