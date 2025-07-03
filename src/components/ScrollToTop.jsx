import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard scroll reset
    window.scrollTo(0, 0);
    
    // Reset for Locomotive Scroll if it exists
    const scrollInstance = document.querySelector('[data-scroll-container]');
    if (scrollInstance) {
      const locomotiveScroll = window.locomotiveScroll;
      if (locomotiveScroll) {
        setTimeout(() => {
          locomotiveScroll.scrollTo(0, 0);
          locomotiveScroll.update();
        }, 10);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
