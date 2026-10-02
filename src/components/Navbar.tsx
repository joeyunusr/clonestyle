import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu on navigation
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] flex justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'pt-4 px-4 md:pt-6 md:px-6' : 'pt-0 px-0'
        }`}
      >
        <nav className={`w-full flex items-center justify-between transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'max-w-5xl bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] border border-white/20 rounded-[24px] px-6 py-4'
            : 'max-w-7xl bg-transparent border border-transparent px-6 py-6 md:py-8 rounded-none'
        }`}>
          <Link to="/" className="flex items-center relative z-[70] shrink-0">
            <img 
              src="https://cdn.scalev.com/uploads/1790248150/wr1Q0XOTz0QH3FEOlH9exw/1790248150913-ChatGPT-Image-24-Sep-2026,-17.55.28-1.webp" 
              alt="Social Vibe Media" 
              className="h-10 md:h-12 w-auto max-w-[240px] object-contain block select-none" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-sans text-[13px] tracking-normal text-[#2b2b2bcc]">
            <Link to="/" className="hover:text-[#2b2b2b] transition-colors uppercase">HOME</Link>
            <Link to="/#works" className="hover:text-[#2b2b2b] transition-colors uppercase">FEATURED TOOLS</Link>
            <Link to="/#about" className="hover:text-[#2b2b2b] transition-colors uppercase">ABOUT PLATFORM</Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 group relative z-[70]"
          >
            <div className={`w-6 h-[2px] bg-[#2b2b2b] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : 'mb-1.5'}`} />
            <div className={`w-6 h-[2px] bg-[#2b2b2b] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1px]' : ''}`} />
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-white/95 backdrop-blur-md md:hidden pt-32 px-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 font-sans text-[24px] tracking-tight text-[#2b2b2b]">
              <Link to="/" className="hover:text-black transition-colors uppercase py-2 border-b border-black/10">HOME</Link>
              <Link to="/#works" className="hover:text-black transition-colors uppercase py-2 border-b border-black/10">FEATURED TOOLS</Link>
              <Link to="/#about" className="hover:text-black transition-colors uppercase py-2 border-b border-black/10">ABOUT PLATFORM</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
