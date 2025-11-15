import { useEffect } from 'react'

// Custom hook for performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Measure page load performance
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0]
          if (perfData) {
            console.log('Page Load Metrics:')
            console.log('DNS Lookup Time:', perfData.domainLookupEnd - perfData.domainLookupStart, 'ms')
            console.log('TCP Connection Time:', perfData.connectEnd - perfData.connectStart, 'ms')
            console.log('Request Time:', perfData.responseStart - perfData.requestStart, 'ms')
            console.log('Response Time:', perfData.responseEnd - perfData.responseStart, 'ms')
            console.log('DOM Loading Time:', perfData.domContentLoadedEventEnd - perfData.fetchStart, 'ms')
            console.log('Window Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms')
          }
        }, 0)
      })
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 100) {
            console.warn('Long task detected:', entry.name, entry.duration, 'ms')
          }
        })
      })
      
      observer.observe({ entryTypes: ['longtask'] })
      
      return () => {
        observer.disconnect()
      }
    }
  }, [])
}

// Hook for measuring component render performance
export const useRenderPerformance = (componentName) => {
  const startTime = performance.now()
  
  useEffect(() => {
    const endTime = performance.now()
    const renderTime = endTime - startTime
    console.log(`[${componentName}] Render time: ${renderTime.toFixed(2)}ms`)
    
    // Send to analytics if needed
    if (renderTime > 50) {
      console.warn(`[${componentName}] Slow render detected: ${renderTime.toFixed(2)}ms`)
    }
  }, [componentName, startTime])
}

// Hook for measuring interaction performance
export const useInteractionPerformance = () => {
  const measureInteraction = (interactionName, callback) => {
    const startTime = performance.now()
    
    try {
      const result = callback()
      
      const endTime = performance.now()
      const interactionTime = endTime - startTime
      console.log(`[${interactionName}] Interaction time: ${interactionTime.toFixed(2)}ms`)
      
      return result
    } catch (error) {
      const endTime = performance.now()
      const interactionTime = endTime - startTime
      console.error(`[${interactionName}] Interaction failed after ${interactionTime.toFixed(2)}ms:`, error)
      throw error
    }
  }
  
  return { measureInteraction }
}