import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

// Mock the react-scroll Link component
jest.mock('react-scroll', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>
}))

describe('Header Component', () => {
  const mockTypewriterText = 'Avukat Halil Pektaş'

  test('renders logo with typewriter text', () => {
    render(
      <BrowserRouter>
        <Header typewriterText={mockTypewriterText} />
      </BrowserRouter>
    )
    
    expect(screen.getByText(mockTypewriterText)).toBeInTheDocument()
  })

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header typewriterText={mockTypewriterText} />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Ana Sayfa')).toBeInTheDocument()
    expect(screen.getByText('Hakkımızda')).toBeInTheDocument()
    expect(screen.getByText('Hizmetler')).toBeInTheDocument()
    expect(screen.getByText('Referanslar')).toBeInTheDocument()
    expect(screen.getByText('İletişim')).toBeInTheDocument()
  })

  test('toggles mobile menu when button is clicked', () => {
    render(
      <BrowserRouter>
        <Header typewriterText={mockTypewriterText} />
      </BrowserRouter>
    )
    
    const menuButton = screen.getByLabelText('Toggle menu')
    fireEvent.click(menuButton)
    
    // Check that mobile menu links are now visible
    expect(screen.getByText('Ana Sayfa')).toBeInTheDocument()
    expect(screen.getByText('Hakkımızda')).toBeInTheDocument()
  })
})