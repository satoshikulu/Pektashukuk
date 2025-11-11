import { useState, useEffect, useRef } from 'react'
import { Menu, X, Scale, Briefcase, Gavel, FileText, Users, Home, Star, MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

// Splash Screen Component - Hukuk Temalı Animasyon
function SplashScreen({ onComplete }) {
  const [showSlogan, setShowSlogan] = useState(false)

  useEffect(() => {
    // Show slogan after scale animation
    const sloganTimer = setTimeout(() => {
      setShowSlogan(true)
    }, 2000)

    // Complete splash screen after 5 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 5000)

    return () => {
      clearTimeout(sloganTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Particle Effects Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: -20
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: window.innerHeight + 20,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.5)'
            }}
          />
        ))}
      </div>

      <div className="text-center px-4 relative z-10">
        {/* Scale Icon - Drops from top and balances */}
        <motion.div
          initial={{ y: -300, rotate: -45, opacity: 0 }}
          animate={{ 
            y: 0, 
            rotate: [0, -5, 5, -3, 3, -1, 1, 0],
            opacity: 1
          }}
          transition={{ 
            y: { duration: 0.8, ease: "easeOut" },
            rotate: { 
              duration: 1.5, 
              delay: 0.8,
              ease: "easeInOut"
            },
            opacity: { duration: 0.3 }
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Animated Glow Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-3xl bg-gold rounded-full"
            />
            
            {/* Golden Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 60,
                  y: Math.sin((i * Math.PI * 2) / 8) * 60,
                }}
                transition={{
                  duration: 1.5,
                  delay: 1.2 + (i * 0.1),
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-gold rounded-full"
                style={{
                  boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.8)'
                }}
              />
            ))}
            
            <Scale className="w-24 h-24 md:w-32 md:h-32 text-gold relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gold mb-4"
          style={{ fontFamily: 'Garamond, Georgia, serif' }}
        >
          Avukat Halil Pektaş
        </motion.div>

        {/* Slogan with dramatic entrance */}
        <AnimatePresence>
          {showSlogan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white font-semibold"
              >
                Adalet
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-sm md:text-base"
              >
                Güven • Deneyim • Başarı
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom shine effect */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold/20 to-transparent"
      />
    </motion.div>
  )
}

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
  const [showSplash, setShowSplash] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const fullText = 'Avukat Halil Pektaş'

  // Check if splash screen should be shown
  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash')
    if (hasSeenSplash) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    localStorage.setItem('hasSeenSplash', 'true')
    setShowSplash(false)
  }

  // Services Data
  const services = [
    {
      id: 1,
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka ve aile içi hukuki sorunlarda uzman destek",
      icon: Scale,
      detailedInfo: `Aile Hukuku Nedir?

Aile hukuku; evlilik birliği, eşlerin hak ve yükümlülükleri, boşanma, mal rejimi, velayet, nafaka ve evlat edinme gibi konuları kapsar.

Av. Halil Pektaş Hukuk Bürosu olarak;

• Anlaşmalı ve çekişmeli boşanma davaları
• Velayet ve kişisel ilişki düzenlenmesi
• Nafaka tespiti veya artırımı
• Mal paylaşımı davaları
• Aile içi şiddet ve koruma tedbirleri
• Evlat edinme ve soybağı davaları

gibi konularda müvekkillerimize uzman hukuki destek sunuyoruz.

Her dava kendine özgüdür. Bu nedenle her müvekkilimiz için kişiye özel çözüm stratejileri geliştiriyoruz.

🕊️ Ailede huzurun, hukuki güvenceyle korunması için yanınızdayız.`
    },
    {
      id: 2,
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklarda danışmanlık",
      icon: Briefcase,
      detailedInfo: `Ticaret Hukuku Nedir?

Ticaret hukuku; şirketlerin kuruluşundan faaliyetlerine, ticari sözleşmelerden ortaklık ilişkilerine kadar tüm ticari işlemleri düzenleyen hukuk dalıdır. İş dünyasının güvenli ve sürdürülebilir şekilde ilerlemesi için sağlam bir hukuki zemine ihtiyaç duyulur.

Av. Halil Pektaş Hukuk Bürosu olarak;

• Şirket kuruluşu ve tür değişikliği işlemleri
• Ticari sözleşmelerin hazırlanması ve incelenmesi
• Ortaklık, birleşme ve devralma süreçleri
• Ticari alacak takibi ve tahsilat davaları
• Haksız rekabet ve marka ihlalleri
• Ticari uyuşmazlıkların çözümü ve arabuluculuk

gibi alanlarda müvekkillerimize kapsamlı hukuki danışmanlık ve temsil hizmeti sunuyoruz.

Her işletmenin yapısı farklıdır — biz de her müvekkilimizin ticari hedeflerine uygun stratejik, pratik ve sonuç odaklı çözümler geliştiriyoruz.

⚖️ Ticari hayatta güven, doğru hukuki rehberlikle başlar.`
    },
    {
      id: 3,
      title: "Ceza Hukuku",
      description: "Ceza davalarında savunma ve mağdur hakları konusunda temsil",
      icon: Gavel,
      detailedInfo: `Ceza Hukuku Nedir?

Ceza hukuku; toplum düzenini korumak amacıyla suç teşkil eden fiilleri, bu fiillere uygulanacak yaptırımları ve bireylerin ceza yargılamasındaki haklarını düzenleyen hukuk dalıdır. Hem sanığın savunma hakkı hem de mağdurun adalet arayışı bu alanın temelini oluşturur.

Av. Halil Pektaş Hukuk Bürosu olarak;

• Soruşturma ve kovuşturma aşamalarında savunma
• Gözaltı, tutuklama ve ifade süreçlerinde hukuki destek
• Mağdur ve müşteki vekilliği
• Ağır Ceza ve Asliye Ceza davaları
• Trafik, mala zarar, tehdit, hakaret, dolandırıcılık ve benzeri suçlar
• Hükmün açıklanmasının geri bırakılması (HAGB) ve cezanın ertelenmesi işlemleri

gibi konularda müvekkillerimize etkin, titiz ve hak temelli bir hukuki temsil sunuyoruz.

Ceza yargılamasında her detay önemlidir. Biz, her dosyada adaletin sağlanması için güçlü bir savunma ve bilinçli bir yaklaşım benimsiyoruz.

⚖️ Adalet arayışınızda, hukuki güvenceniz biziz.`
    },
    {
      id: 4,
      title: "İcra İflas Hukuku",
      description: "Alacak tahsilatı, icra takipleri ve iflas süreçlerinde hukuki destek",
      icon: FileText,
      detailedInfo: `İcra ve İflas Hukuku Nedir?

İcra ve iflas hukuku; borçların tahsili, alacakların korunması, cebri icra işlemleri ve iflas süreçlerini düzenleyen hukuk dalıdır. Hem alacaklının haklarını güvence altına almak hem de borçlunun yasal haklarını belirlemek bu alanın temel amacıdır.

Av. Halil Pektaş Hukuk Bürosu olarak;

• İlamsız ve ilamlı icra takipleri
• Kambiyo senetlerine dayalı takipler (çek, senet, bono)
• İtirazın kaldırılması ve iptali davaları
• Haciz işlemleri ve malların satış süreci
• İflas davaları ve konkordato işlemleri
• Alacak tahsili ve borç yapılandırma süreçleri

gibi konularda müvekkillerimize hızlı, etkin ve sonuç odaklı hukuki destek sunuyoruz.

Her alacak kendi sürecine sahiptir; biz, müvekkillerimizin haklarını korumak ve süreçleri en güvenli şekilde yönetmek için yanınızdayız.

💼 Alacaklarınızı güvenle tahsil edin, hukuki süreci profesyonellere bırakın.`
    },
    {
      id: 5,
      title: "İş Hukuku",
      description: "İşçi-işveren uyuşmazlıkları, iş sözleşmeleri ve tazminat davaları",
      icon: Users,
      detailedInfo: `İş Hukuku Nedir?

İş hukuku; işçi ve işveren arasındaki ilişkileri düzenleyen, çalışma hayatında adalet ve dengeyi sağlamayı amaçlayan hukuk dalıdır. İşe girişten feshe, tazminatlardan iş güvenliğine kadar pek çok konuyu kapsar.

Av. Halil Pektaş Hukuk Bürosu olarak;

• İşe iade davaları
• Kıdem ve ihbar tazminatı talepleri
• Fazla mesai, yıllık izin ve ücret alacakları
• Haksız fesih ve mobbing davaları
• Hizmet tespiti ve sigorta prim uyuşmazlıkları
• İş kazası ve meslek hastalığı tazminatları

gibi konularda müvekkillerimize çalışma hayatında haklarını koruyacak etkili hukuki destek sunuyoruz.

Her iş ilişkisi kendi koşullarına sahiptir; bu nedenle her müvekkilimize özel bir hukuki strateji belirliyoruz.

💼 Emek sizin, hakkınızı korumak bizim görevimiz.`
    },
    {
      id: 6,
      title: "Gayrimenkul Hukuku",
      description: "Tapu işlemleri, kira sözleşmeleri ve gayrimenkul uyuşmazlıkları",
      icon: Home,
      detailedInfo: `Miras Hukuku Nedir?

Miras hukuku; bir kişinin vefatı sonrası malvarlığının kimlere, hangi oranlarda ve nasıl intikal edeceğini düzenleyen hukuk dalıdır. Bu alan, aile içi hakların korunması ve adil paylaşımın sağlanması açısından büyük önem taşır.

Av. Halil Pektaş Hukuk Bürosu olarak;

• Miras paylaşımı ve tereke tespiti davaları
• Vasiyetname hazırlanması ve iptali
• Saklı payın korunması davaları
• Mirastan feragat ve reddi miras işlemleri
• Ortaklığın giderilmesi (izale-i şuyu) davaları
• Veraset belgesi (mirasçılık belgesi) alınması

gibi konularda müvekkillerimize hukuki güvenceyle destek sağlıyoruz.

Her miras dosyası, hem hukuki hem duygusal yönleriyle özel bir süreçtir. Biz, bu süreci adaletli, saygılı ve çözüm odaklı bir yaklaşımla yürütüyoruz.

🌿 Miras, bir hakkın devridir; biz, o hakkın korunmasını sağlıyoruz.`
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
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

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
        <div className="absolute inset-0 z-0">
          {/* Animated Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center hero-bg-animated"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop)'
            }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-gray-900/70"></div>
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
            "Profesyonel Yaklaşım, Güvenilir Danışmanlık' {' '}
            <span className="text-white text-lg sm:text-xl md:text-3xl wave-text block mt-4">
              {"''Haklarınız İçin En Etkili Savunma.\"".split('').map((char, index) => (
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
                <Counter end={20} suffix="+" />
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
                  onClick={() => service.detailedInfo && setSelectedService(service)}
                  className="group bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6 hover:scale-105 hover:border-gold hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] shadow-lg shadow-gold/10 cursor-pointer"
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
                  <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 13:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div className="mt-8 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 backdrop-blur-lg border border-[#25D366]/30 rounded-2xl p-6 shadow-xl shadow-[#25D366]/20">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Ücretsiz Ön Görüşme</h3>
                  <p className="text-gray-300 text-sm">Hukuki sorunlarınız için hemen danışın</p>
                </div>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.link}?text=Merhaba, ücretsiz ön görüşme için bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-bold hover:scale-105 transition-all w-full backdrop-blur-md border-2 border-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 animate-pulse hover:animate-none"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.3) 0%, rgba(37, 211, 102, 0.4) 100%)',
                    color: '#fff'
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">WhatsApp ile Hemen Başlayın</span>
                </a>
              </div>
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
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all w-full backdrop-blur-md border border-gold/45 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.35) 0%, rgba(212, 175, 55, 0.45) 100%)',
                  color: '#d4af37'
                }}
              >
                <Navigation className="w-6 h-6" />
                <span className="text-white font-bold">Yol Tarifi Al</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-gradient-to-b from-gray-900 to-black border-2 border-gold/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-md border-b border-gold/30 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {selectedService.icon && <selectedService.icon className="w-8 h-8 text-gold" />}
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gold hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base md:text-lg">
                {selectedService.detailedInfo}
              </p>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gold/20">
                <a
                  href={`https://wa.me/+905325648295?text=Merhaba, ${selectedService.title} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold hover:scale-105 transition-all w-full backdrop-blur-md border-2 border-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.3) 0%, rgba(37, 211, 102, 0.4) 100%)',
                    color: '#fff'
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp ile Danışın</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Av. Halil Pektaş Hukuk Bürosu - Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.link}?text=Merhaba, ücretsiz ön görüşme için bilgi almak istiyorum.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Ücretsiz ön görüşme için WhatsApp"
      >
        <div className="relative">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          {/* Main Button */}
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all hover:scale-110 backdrop-blur-sm border-2 border-white/20">
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:block font-bold text-sm whitespace-nowrap">Ücretsiz Ön Görüşme</span>
          </div>
        </div>
      </a>
      </div>
    </>
  )
}

export default App
