// Performance monitoring utilities
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onINP(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

// Function to measure component render performance
export const measureRenderTime = (componentName, startTime) => {
  const endTime = performance.now()
  const renderTime = endTime - startTime
  console.log(`[${componentName}] Render time: ${renderTime.toFixed(2)}ms`)
  return renderTime
}

// Function to track scroll performance
export const trackScrollPerformance = () => {
  let scrollCount = 0
  let lastScrollTime = performance.now()
  
  const handleScroll = () => {
    scrollCount++
    const currentTime = performance.now()
    
    // Log scroll performance every 100 scrolls
    if (scrollCount % 100 === 0) {
      const timeDiff = currentTime - lastScrollTime
      console.log(`Scroll performance: ${scrollCount} scrolls in ${timeDiff.toFixed(2)}ms`)
      lastScrollTime = currentTime
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

// Function to measure image loading performance
export const measureImageLoad = (imageUrl) => {
  const startTime = performance.now()
  
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const endTime = performance.now()
      const loadTime = endTime - startTime
      console.log(`Image load time for ${imageUrl}: ${loadTime.toFixed(2)}ms`)
      resolve(loadTime)
    }
    img.onerror = reject
    img.src = imageUrl
  })
}