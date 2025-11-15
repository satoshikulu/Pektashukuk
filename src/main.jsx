import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import performance monitoring
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

// Initialize performance monitoring
if (process.env.NODE_ENV === 'production') {
  onCLS(console.log)
  onINP(console.log)
  onFCP(console.log)
  onLCP(console.log)
  onTTFB(console.log)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)