import { render, screen } from '@testing-library/react'
import Attribution from '../Attribution'

describe('Attribution Component', () => {
  test('renders attribution text', () => {
    render(<Attribution />)
    
    // Since the text is typed out character by character, we check for the container
    const attribution = screen.getByText(/Sevim/, { exact: false })
    expect(attribution).toBeInTheDocument()
  })

  test('displays typing animation', () => {
    render(<Attribution />)
    
    // Check for the cursor that indicates typing animation
    const cursor = screen.getByText('|')
    expect(cursor).toBeInTheDocument()
    expect(cursor).toHaveClass('animate-pulse')
  })
})