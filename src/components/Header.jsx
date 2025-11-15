import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const Header = ({ typewriterText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
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
          className="md:hidden text-gold icon-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gold/20 overflow-hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer py-2 nav-link-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="hakkimizda" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer py-2 nav-link-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              to="hizmetler" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer py-2 nav-link-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link 
              to="referanslar" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer py-2 nav-link-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Referanslar
            </Link>
            <Link 
              to="iletisim" 
              smooth={true} 
              duration={500}
              className="text-white hover:text-gold transition-colors cursor-pointer py-2 nav-link-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header