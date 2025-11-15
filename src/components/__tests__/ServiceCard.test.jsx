import { render, screen, fireEvent } from '@testing-library/react'
import { Briefcase } from 'lucide-react'
import ServiceCard from '../ServiceCard'

describe('ServiceCard Component', () => {
  const mockService = {
    id: 1,
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklarda danışmanlık',
    icon: Briefcase,
    detailedInfo: 'Detailed information about commercial law services'
  }

  const mockOnClick = jest.fn()

  test('renders service information correctly', () => {
    render(<ServiceCard service={mockService} onClick={mockOnClick} />)
    
    expect(screen.getByText(mockService.title)).toBeInTheDocument()
    expect(screen.getByText(mockService.description)).toBeInTheDocument()
  })

  test('calls onClick when card is clicked', () => {
    render(<ServiceCard service={mockService} onClick={mockOnClick} />)
    
    const card = screen.getByText(mockService.title).closest('.cursor-pointer')
    fireEvent.click(card)
    
    expect(mockOnClick).toHaveBeenCalledWith(mockService)
  })

  test('renders icon when provided', () => {
    render(<ServiceCard service={mockService} onClick={mockOnClick} />)
    
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
  })
})