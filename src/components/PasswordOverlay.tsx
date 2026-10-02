import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, MessageCircle, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function PasswordOverlay({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isShowingOpening, setIsShowingOpening] = useState(false);
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('_auth_status');
    if (authStatus === 'verified') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);

    // Preload opening screen images for instant full-screen display
    const imgMobile = new Image();
    imgMobile.src = 'https://cdn.scalev.com/uploads/1790975327/GaeO0LcNo099PS5CBXFjWA/1790975327101-Group-1000008758.webp';
    const imgDesktop = new Image();
    imgDesktop.src = 'https://cdn.scalev.com/uploads/1790975322/emPlAoqY__SrTeyFoy8qUQ/1790975322111-Desktop-1.webp';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Obfuscated password check to prevent easy inspection
    try {
      if (btoa(password) === 'SkFVSEFSLTEyMw==') {
        setIsAuthenticated(true);
        setIsShowingOpening(true);
        sessionStorage.setItem('_auth_status', 'verified');
        setError(false);

        // Auto transition into the application after 10 seconds
        setTimeout(() => {
          setIsShowingOpening(false);
        }, 10000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    } catch {
      setError(true);
    }
  };

  if (isChecking) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {/* State 1: Opening Screen right after password entered (Exact 1440x1024 Desktop & 941x1672 Mobile, 5s Loading) */}
        {isAuthenticated && isShowingOpening && (
          <motion.div
            key="opening-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[10000] bg-[#f0f1f4] flex items-center justify-center select-none overflow-hidden"
          >
            {/* Handphone / Layar Mobile (< md): Sesuai Ukuran Asli 941 x 1672 (Tidak Terpotong) */}
            <div className="block md:hidden relative w-full h-full flex items-center justify-center p-0">
              <img
                src="https://cdn.scalev.com/uploads/1790975327/GaeO0LcNo099PS5CBXFjWA/1790975327101-Group-1000008758.webp"
                alt="Opening Screen Handphone (941x1672)"
                width={941}
                height={1672}
                className="w-full h-full object-contain object-center max-w-[941px] max-h-full"
                style={{ aspectRatio: '941 / 1672' }}
                loading="eager"
              />
            </div>

            {/* Desktop (>= md): Sesuai Ukuran Asli 1440 x 1024 (Tidak Terpotong) */}
            <div className="hidden md:flex relative w-full h-full items-center justify-center p-0">
              <img
                src="https://cdn.scalev.com/uploads/1790975322/emPlAoqY__SrTeyFoy8qUQ/1790975322111-Desktop-1.webp"
                alt="Opening Screen Desktop (1440x1024)"
                width={1440}
                height={1024}
                className="w-full h-full object-contain object-center max-w-[1440px] max-h-full"
                style={{ aspectRatio: '1440 / 1024' }}
                loading="eager"
              />
            </div>

            {/* Full Width Top Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 z-30 pointer-events-none">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'linear' }}
                className="h-full bg-[#2b2b2b] shadow-[0_0_8px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Sleek Floating Loading Indicator (10 Detik) */}
            <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 px-4 sm:px-6 flex flex-col items-center z-30 pointer-events-auto">
              <div className="w-full max-w-[320px] sm:max-w-[380px] bg-[#1e1e1e]/85 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-3.5 text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25)] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] font-sans tracking-wider uppercase text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin flex-shrink-0" />
                    <span className="font-medium">Memuat Aplikasi...</span>
                  </div>
                  <button
                    onClick={() => setIsShowingOpening(false)}
                    className="text-[10px] font-semibold text-white/80 hover:text-white px-2.5 py-0.5 bg-white/15 hover:bg-white/25 rounded-full transition-all uppercase tracking-wider flex-shrink-0 cursor-pointer"
                  >
                    Lewati →
                  </button>
                </div>

                {/* Progress Bar 10 Detik */}
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 10, ease: 'linear' }}
                    className="h-full bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* State 2: Login Form when not authenticated */}
        {!isAuthenticated && (
          <div className="fixed inset-0 z-[9999] bg-[#f6f6f6] overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl bg-white border border-black/10 rounded-[24px] md:rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] my-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Kolom Kiri: Floating Image 4:5 & Tombol WhatsApp */}
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-[18px] overflow-hidden shadow-[0_18px_36px_-12px_rgba(0,0,0,0.12)] border border-black/5 bg-[#f8f8f8] group"
                  >
                    <img
                      src="https://cdn.scalev.com/uploads/1789973316/QxXPKQstRfzjJwwSOCabmQ/1789973315276-142b120d-e4f8-405e-a2b9-021dfcaaa480.webp"
                      alt="Social Vibe Media"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  <a
                    href="https://wa.link/vl9ahr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center gap-2 bg-[#2b2b2b] text-white rounded-[12px] py-3.5 px-6 font-sans text-[13px] font-medium tracking-wide uppercase transition-all hover:bg-black hover:scale-[1.02] active:scale-95 shadow-sm text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Hubungi via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Kolom Kanan: Form Akses Sandi */}
                <div className="flex flex-col justify-center w-full md:border-l md:border-black/5 md:pl-10">
                  <div className="flex justify-center md:justify-start mb-6">
                    <img 
                      src="https://cdn.scalev.com/uploads/1790248150/wr1Q0XOTz0QH3FEOlH9exw/1790248150913-ChatGPT-Image-24-Sep-2026,-17.55.28-1.webp" 
                      alt="Social Vibe Media" 
                      className="h-10 md:h-12 w-auto max-w-[240px] object-contain block select-none" 
                    />
                  </div>

                  <div className="text-center md:text-left mb-8">
                    <h2 className="font-serif text-[28px] text-[#2b2b2b] mb-2">Akses Terbatas</h2>
                    <p className="font-sans text-[14px] text-[#2b2b2bcc] leading-relaxed">
                      Masukkan sandi akses untuk menggunakan aplikasi ini, atau hubungi kami melalui WhatsApp jika belum memiliki akses.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan Sandi..."
                        className={`w-full bg-[#f8f8f8] border ${
                          error ? 'border-red-500/50 focus:border-red-500' : 'border-black/10 focus:border-black/30'
                        } rounded-[12px] p-4 pr-12 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:ring-1 ${
                          error ? 'focus:ring-red-500/20' : 'focus:ring-black/30'
                        } transition-all`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/60 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                      {error && (
                        <span className="absolute -bottom-6 left-2 text-[12px] text-red-500 font-medium">
                          Sandi akses salah
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="group mt-4 flex items-center justify-center gap-2 bg-[#2b2b2b] text-white rounded-[12px] py-4 px-8 font-sans text-[14px] font-medium tracking-wide uppercase transition-all hover:bg-black hover:scale-[1.02] active:scale-95 w-full"
                    >
                      Masuk
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Render children only when authenticated and not in opening screen */}
      {isAuthenticated && (!isShowingOpening ? children : null)}
    </>
  );
}
