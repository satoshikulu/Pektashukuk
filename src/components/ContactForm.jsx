import { useState } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const ContactForm = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6">
      <h3 className="text-white text-xl font-bold mb-6">Bize Ulaşın</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">Ad Soyad</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Adınızı girin"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="E-posta adresinizi girin"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-300 mb-2">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black/30 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Telefon numaranızı girin"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">Mesajınız</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-black/30 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Mesajınızı yazın..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
        </button>
        
        {submitStatus === 'success' && (
          <div className="text-green-400 text-center py-2">
            Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="text-red-400 text-center py-2">
            Bir hata oluştu. Lütfen tekrar deneyin.
          </div>
        )}
      </form>
      
      <div className="mt-8 pt-6 border-t border-gold/20">
        <h4 className="text-white font-semibold mb-4">Diğer İletişim Yolları</h4>
        <div className="space-y-3">
          <a 
            href={`tel:${contactInfo.phone.link}`}
            className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{contactInfo.phone.display}</span>
          </a>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{contactInfo.email}</span>
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp.link}?text=Merhaba, hukuki danışmanlık almak istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp ile konuş</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactForm