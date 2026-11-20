import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// With BrowserRouter, React Router does not reset scroll on navigation.
// This scrolls to the top whenever the path changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
