import { render, screen } from '@testing-library/react'
import Testimonial from '../Testimonial'

describe('Testimonial Component', () => {
  const mockTestimonial = {
    id: 1,
    name: 'Ayşe Y.',
    rating: 5,
    comment: 'Boşanma davamda gösterdiği profesyonel yaklaşım ve başarılı sonuç için teşekkür ederim.',
    service: 'Aile Hukuku'
  }

  test('renders testimonial information correctly', () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    
    expect(screen.getByText(mockTestimonial.name)).toBeInTheDocument()
    expect(screen.getByText(mockTestimonial.comment)).toBeInTheDocument()
    expect(screen.getByText(mockTestimonial.service)).toBeInTheDocument()
  })

  test('renders correct number of stars', () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    
    const stars = screen.getAllByRole('img', { hidden: true })
    expect(stars).toHaveLength(mockTestimonial.rating)
  })
})