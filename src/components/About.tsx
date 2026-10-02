import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#f6f6f6] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Left Column: Heading */}
        <div className="flex flex-col gap-12 z-10">
          <p className="font-sans text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-[#2b2b2bcc] uppercase">
            (ABOUT PLATFORM)
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <h3 className="font-serif text-[56px] md:text-[112px] leading-[0.9] tracking-[-0.06em] text-[#2b2b2b]">
              <span className="tracking-[-0.07em]">C</span><span className="tracking-[-0.09em]">r</span><span className="tracking-[-0.12em]">e</span>a<span className="tracking-[-0.05em]">t</span>e
            </h3>
            <h3 className="font-serif text-[56px] md:text-[112px] leading-[0.9] tracking-[-0.06em] text-[#2b2b2b] md:ml-[10%]">
              <span className="tracking-[-0.08em]">D</span><span className="tracking-[-0.04em]">e</span>s<span className="tracking-[-0.11em]">i</span><span className="tracking-[-0.09em]">g</span>n
            </h3>
            <h3 className="font-serif text-[56px] md:text-[112px] leading-[0.9] tracking-[-0.06em] text-[#2b2b2b] md:ml-[20%]">
              F<span className="tracking-[-0.1em]">a</span>s<span className="tracking-[-0.09em]">t</span>er
            </h3>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col gap-8 text-xl md:text-2xl leading-relaxed text-[#2b2b2b]/80 lg:pt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Platform ini membantu Anda membuat prompt AI profesional untuk menghasilkan desain berkualitas tinggi dengan lebih cepat dan konsisten.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Setiap tools telah dirancang menggunakan prompt framework yang telah dioptimalkan sehingga mampu menghasilkan output visual premium tanpa harus menyusun prompt secara manual.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pilih tools yang dibutuhkan, masukkan konten Anda, lalu generate prompt siap pakai hanya dalam beberapa detik.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
