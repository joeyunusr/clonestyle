import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-24">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          {/* Title Block */}
          <div className="flex flex-col items-center text-center">
            <h1 className="font-serif text-[56px] md:text-[128px] leading-[0.9] text-[#2b2b2b]">
              <span className="tracking-[-0.06em]">C</span>
              <span className="italic tracking-[-0.1em]">l</span>
              <span className="tracking-[-0.08em]">o</span>
              <span className="italic">n</span>
              <span className="tracking-[-0.06em]">e </span>
              <span className="tracking-[-0.09em]">Style</span>
            </h1>
            <div className="relative inline-flex items-center justify-center mt-2 md:mt-0">
              {/* Star */}
              <div className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 w-5 h-5 md:w-8 md:h-8 text-[#2b2b2b]/40">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"/></svg>
              </div>
              <h1 className="font-serif text-[56px] md:text-[128px] leading-[0.9] text-[#2b2b2b]">
                <span className="tracking-[-0.06em]">C</span>
                <span className="tracking-[-0.04em]">a</span>
                <span className="tracking-[-0.07em]">r</span>
                <span className="italic tracking-[-0.1em]">o</span>
                <span className="tracking-[-0.03em]">u</span>se
                <span className="tracking-[-0.02em]">l</span>
              </h1>
            </div>
          </div>

          {/* Banner Block */}
          <div className="w-full flex flex-col items-center justify-center mt-4 md:mt-8">
            <h1 className="font-serif text-[56px] md:text-[128px] leading-[0.9] tracking-[-0.06em] text-[#2b2b2b] flex items-center justify-center">
              <span className="font-serif italic mr-3 md:mr-8 text-[44px] md:text-[100px] text-[#2b2b2b]/40">&</span>Banner
            </h1>
          </div>

          {/* by Social Vibe Media Block */}
          <div className="mt-8 md:mt-16 text-center">
            <h1 className="font-serif text-[36px] md:text-[100px] leading-[0.9] text-[#2b2b2b]">
              <span className="tracking-[-0.08em]">by </span>
              <span className="italic tracking-[-0.09em]">S</span>
              <span className="tracking-[-0.08em]">ocial Vibe Media</span>
            </h1>
          </div>

          {/* Scroll Down */}
          <div className="flex flex-col items-center gap-6 mt-20 md:mt-32">
            <p className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[#2b2b2bcc]">
              (SCROLL <span className="bg-[#e2e8f0] text-black px-1.5 py-0.5 rounded-[2px] font-medium mx-1">DOWN</span> & EXPLORE)
            </p>
            <div className="w-[1px] h-16 md:h-24 bg-[#2b2b2b33]" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
