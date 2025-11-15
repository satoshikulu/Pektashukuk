import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../ContactForm'

describe('ContactForm Component', () => {
  const mockContactInfo = {
    phone: {
      display: '(0332) 641 41 47',
      link: '+903326414147'
    },
    email: 'info@halilpektashukuk.com',
    whatsapp: {
      display: '0532 564 82 95',
      link: '+905325648295'
    }
  }

  test('renders form fields', () => {
    render(<ContactForm contactInfo={mockContactInfo} />)
    
    expect(screen.getByLabelText('Ad Soyad')).toBeInTheDocument()
    expect(screen.getByLabelText('E-posta')).toBeInTheDocument()
    expect(screen.getByLabelText('Telefon')).toBeInTheDocument()
    expect(screen.getByLabelText('Mesajınız')).toBeInTheDocument()
  })

  test('renders contact information', () => {
    render(<ContactForm contactInfo={mockContactInfo} />)
    
    expect(screen.getByText(mockContactInfo.phone.display)).toBeInTheDocument()
    expect(screen.getByText(mockContactInfo.email)).toBeInTheDocument()
    expect(screen.getByText('WhatsApp ile konuş')).toBeInTheDocument()
  })

  test('updates form fields when user types', () => {
    render(<ContactForm contactInfo={mockContactInfo} />)
    
    const nameInput = screen.getByLabelText('Ad Soyad')
    fireEvent.change(nameInput, { target: { value: 'Test User' } })
    expect(nameInput.value).toBe('Test User')
    
    const emailInput = screen.getByLabelText('E-posta')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput.value).toBe('test@example.com')
  })
})