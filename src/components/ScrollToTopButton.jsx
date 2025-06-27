// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#d3ab66] text-white p-3 rounded-full shadow-lg hover:bg-[#b9924f] transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
