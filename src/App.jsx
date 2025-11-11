import { useState, useEffect, useRef } from 'react'
import { Menu, X, Scale, Briefcase, Gavel, FileText, Users, Home, Star, MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

// Counter Component
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = 'Avukat Halil Pektaş'

  // Services Data
  const services = [
    {
      id: 1,
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka ve aile içi hukuki sorunlarda uzman destek",
      icon: Scale
    },
    {
      id: 2,
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklarda danışmanlık",
      icon: Briefcase
    },
    {
      id: 3,
      title: "Ceza Hukuku",
      description: "Ceza davalarında savunma ve mağdur hakları konusunda temsil",
      icon: Gavel
    },
    {
      id: 4,
      title: "İcra İflas Hukuku",
      description: "Alacak tahsilatı, icra takipleri ve iflas süreçlerinde hukuki destek",
      icon: FileText
    },
    {
      id: 5,
      title: "İş Hukuku",
      description: "İşçi-işveren uyuşmazlıkları, iş sözleşmeleri ve tazminat davaları",
      icon: Users
    },
    {
      id: 6,
      title: "Gayrimenkul Hukuku",
      description: "Tapu işlemleri, kira sözleşmeleri ve gayrimenkul uyuşmazlıkları",
      icon: Home
    }
  ]

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Ayşe Y.",
      rating: 5,
      comment: "Boşanma davamda gösterdiği profesyonel yaklaşım ve başarılı sonuç için teşekkür ederim. Süreç boyunca her adımda yanımda oldu.",
      service: "Aile Hukuku"
    },
    {
      id: 2,
      name: "Mehmet K.",
      rating: 5,
      comment: "Şirket kuruluşumda ve ticari sözleşmelerimizde çok değerli katkılar sağladı. Deneyimi ve bilgisi ile işlerimizi güvence altına aldık.",
      service: "Ticaret Hukuku"
    },
    {
      id: 3,
      name: "Zeynep A.",
      rating: 5,
      comment: "İş davamda haklarımı sonuna kadar savundu. Profesyonel yaklaşımı ve samimiyeti ile kesinlikle tavsiye ederim.",
      service: "İş Hukuku"
    }
  ]

  // Contact Information
  const contactInfo = {
    address: {
      street: "Camikebir Mah. Atatürk Cad. Anıt Meydanı",
      building: "Kulusite İş Merkezi Kat:1 No:112",
      city: "Kulu",
      province: "Konya",
      postalCode: "42770"
    },
    phone: {
      display: "(0332) 641 41 47",
      link: "+903326414147"
    },
    whatsapp: {
      display: "0532 564 82 95",
      link: "+905325648295"
    },
    email: "info@halilpektashukuk.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8157!2d33.079296!3d39.091038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA1JzI3LjciTiAzM8KwMDQnNDUuNSJF!5e0!3m2!1str!2str!4v1699999999999"
  }

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typewriter Effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false)
      } else if (isDeleting) {
        setTypewriterText(fullText.substring(0, typewriterText.length - 1))
      } else {
        setTypewriterText(fullText.substring(0, typewriterText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typewriterText, isDeleting, fullText])

  // Testimonials Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-dark">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/20 mt-1">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gold" style={{ fontFamily: 'Walbaum, Didot, Georgia, serif' }}>
            {typewriterText}
            <span className="animate-pulse">|</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer"
            >
              Ana Sayfa
            </Link>
            <Link 
              to="hakkimizda" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer"
            >
              Hakkımızda
            </Link>
            <Link 
              to="hizmetler" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer"
            >
              Hizmetler
            </Link>
            <Link 
              to="referanslar" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer"
            >
              Referanslar
            </Link>
            <Link 
              to="iletisim" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gold/20">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="hero" 
                smooth={true} 
                duration={500}
                className="text-white hover:text-gold transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                to="hakkimizda" 
                smooth={true} 
                duration={500}
                className="text-white hover:text-gold transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                to="hizmetler" 
                smooth={true} 
                duration={500}
                className="text-white hover:text-gold transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link 
                to="referanslar" 
                smooth={true} 
                duration={500}
                className="text-white hover:text-gold transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Referanslar
              </Link>
              <Link 
                to="iletisim" 
                smooth={true} 
                duration={500}
                className="text-white hover:text-gold transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop)'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-gray-900/90"></div>
          {/* Gold Overlay for warmth */}
          <div className="absolute inset-0 bg-gold/5"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gold mb-8 leading-tight px-2"
            style={{ fontFamily: 'Garamond, Georgia, serif' }}
          >
            "Profesyonel Yaklaşım, Güvenilir Danışmanlık''' {' '}
            <span className="text-white text-lg sm:text-xl md:text-3xl wave-text block mt-4">
              {"''Haklarınız İçin Etkili Savunma.\"".split('').map((char, index) => (
                <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="iletisim" 
              smooth={true} 
              duration={500}
            >
              <button className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                İletişime Geç
              </button>
            </Link>
            <Link 
              to="hizmetler" 
              smooth={true} 
              duration={500}
            >
              <button className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all w-full sm:w-auto">
                Hizmetlerimiz
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="hakkimizda" className="py-16 md:py-24 bg-dark" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12"
            data-aos="fade-up"
            style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600' }}
          >
            Hakkımızda
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Büro Tanıtımı */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gold mb-4">
                Av. Halil Pektaş Hukuk Bürosu
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Kulu, Konya'da hizmet veren hukuk büromuz, müvekkillerimize en yüksek kalitede 
                hukuki danışmanlık ve temsil hizmeti sunmaktadır. Yılların getirdiği deneyim ve 
                uzmanlıkla, her türlü hukuki sorununuzda yanınızdayız.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Av. Halil Pektaş, aile hukuku, ticaret hukuku, ceza hukuku, iş hukuku ve 
                gayrimenkul hukuku alanlarında uzmanlaşmış olup, müvekkillerinin haklarını 
                en iyi şekilde korumak için çalışmaktadır.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Profesyonel yaklaşımımız, etik değerlerimiz ve müvekkil memnuniyetine verdiğimiz 
                önem ile hukuki süreçlerinizde güvenilir bir çözüm ortağıyız.
              </p>
            </div>
            
            {/* Misyon & Vizyon Kartı */}
            <div data-aos="fade-left">
              <div className="bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-8 h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gold mb-4">Misyonumuz</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Müvekkillerimize en yüksek kalitede hukuki hizmet sunmak, haklarını en iyi 
                    şekilde korumak ve adaletin tecellisi için çalışmak. Etik değerlere bağlı 
                    kalarak, profesyonel ve güvenilir hukuki danışmanlık sağlamak.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-4">Vizyonumuz</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bölgemizde ve ülkemizde tercih edilen, güvenilir ve saygın bir hukuk bürosu 
                    olmak. Sürekli gelişim ve yenilikçi yaklaşımlarla hukuk hizmetlerinde 
                    öncü olmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-dark to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center p-8 bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl hover:scale-105 transition-transform"
              data-aos="fade-up"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <Counter end={500} suffix="+" />
              </div>
              <p className="text-xl text-gray-300 font-semibold">Başarılı Dava</p>
              <p className="text-sm text-gray-500 mt-2">Müvekkillerimiz için kazandık</p>
            </div>

            <div 
              className="text-center p-8 bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <Counter end={15} suffix="+" />
              </div>
              <p className="text-xl text-gray-300 font-semibold">Yıl Deneyim</p>
              <p className="text-sm text-gray-500 mt-2">Hukuk alanında uzmanlık</p>
            </div>

            <div 
              className="text-center p-8 bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <Counter end={1000} suffix="+" />
              </div>
              <p className="text-xl text-gray-300 font-semibold">Mutlu Müvekkil</p>
              <p className="text-sm text-gray-500 mt-2">Güvenle hizmet verdik</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="hizmetler" className="py-16 md:py-24 bg-gradient-to-b from-dark to-gray-900">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
            data-aos="fade-up"
            style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600' }}
          >
            Hizmetlerimiz
          </h2>
          <p 
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Geniş uzmanlık alanlarımızla her türlü hukuki ihtiyacınızda yanınızdayız
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="group bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6 hover:scale-105 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="referanslar" className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
            data-aos="fade-up"
            style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600' }}
          >
            Müvekkil Yorumları
          </h2>
          <p 
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Müvekkillerimizin memnuniyeti bizim için en önemli başarı göstergesidir
          </p>
          
          {/* Slider Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-8 md:p-12">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-300 text-lg md:text-xl mb-8 italic leading-relaxed text-center">
                "{testimonials[currentTestimonial].comment}"
              </p>
              
              {/* Name and Service */}
              <div className="text-center">
                <p className="text-gold font-semibold text-xl">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-500">
                  {testimonials[currentTestimonial].service}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-gold w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="iletisim" className="py-16 md:py-24 bg-gradient-to-b from-dark to-gray-900">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
            data-aos="fade-up"
            style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600' }}
          >
            İletişim
          </h2>
          <p 
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hukuki danışmanlık ve destek için bizimle iletişime geçin
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6" data-aos="fade-right">
              {/* Adres */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Adres</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.building}<br />
                    {contactInfo.address.postalCode} {contactInfo.address.city}/{contactInfo.address.province}
                  </p>
                </div>
              </div>
              
              {/* Telefon */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Telefon</h3>
                  <a 
                    href={`tel:${contactInfo.phone.link}`}
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {contactInfo.phone.display}
                  </a>
                </div>
              </div>
              
              {/* E-posta */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">E-posta</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              {/* Çalışma Saatleri */}
              <div className="bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6 mt-8">
                <h3 className="text-white font-semibold mb-3 text-lg">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 13:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.link}?text=Merhaba, hukuki danışmanlık almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform w-full"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp ile İletişime Geçin
              </a>
            </div>
            
            {/* Google Maps */}
            <div data-aos="fade-left" className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-gold/20 h-96 lg:h-full min-h-[400px]">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Av. Halil Pektaş Hukuk Bürosu Konum"
                />
              </div>
              
              {/* Yol Tarifi Butonu */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=39.091038,33.079296"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform w-full"
              >
                <Navigation className="w-6 h-6" />
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Av. Halil Pektaş Hukuk Bürosu - Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.link}?text=Merhaba, hukuki danışmanlık almak istiyorum.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse hover:animate-none"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}

export default App
