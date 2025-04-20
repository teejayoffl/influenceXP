/**
 * Utility function to smoothly scroll to an element by ID
 */
export function scrollToElement(elementId: string, options?: ScrollIntoViewOptions): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options
    });
  }
}

/**
 * Hook-like function to add a throttled scroll event listener
 */
export function addThrottledScrollListener(
  callback: (scrollPosition: number) => void,
  throttleMs: number = 100
): () => void {
  let ticking = false;
  let lastKnownScrollPosition = 0;
  
  const handleScroll = () => {
    lastKnownScrollPosition = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Utility function to check if an element is in viewport
 */
export function isElementInViewport(element: HTMLElement, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0 + offset
  );
} 