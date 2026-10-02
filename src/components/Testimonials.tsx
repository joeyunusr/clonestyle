import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  {
    title: 'Style Clone',
    subtitle: 'Generator Prompt AI untuk Meniru Desain Poster',
    description: 'Buat prompt AI yang mampu mengikuti desain poster referensi dengan tingkat kemiripan visual yang sangat tinggi. Cukup masukkan copywriting, lalu sistem akan menghasilkan prompt siap pakai.',
    link: '/style-clone'
  },
  {
    title: 'Carousel Studio',
    subtitle: 'Generator Prompt AI untuk Carousel Instagram',
    description: 'Ubah copywriting menjadi prompt carousel Instagram profesional dengan struktur visual yang rapi, menarik, dan siap dipublikasikan.',
    link: '/carousel-studio'
  },
  {
    title: 'Ads Creative Studio',
    subtitle: 'Generator Prompt AI untuk Ads Creative',
    description: 'Buat prompt AI untuk menghasilkan banner website, landing page, Meta Ads, Google Ads, webinar, promosi, dan berbagai kebutuhan digital lainnya.',
    link: '/banner-studio'
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 mb-24">
          <p className="font-sans text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-[#2b2b2bcc] uppercase">
            (FEATURED TOOLS)
          </p>
          <h2 className="font-serif italic text-[60px] md:text-[100px] leading-[0.8] tracking-[-0.04em] text-[#2b2b2b]">
            Featured<br/>AI<br/>Tools
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 md:gap-24 w-full max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="w-full"
            >
              <div 
                className="flex flex-col gap-8 w-full border border-black/10 bg-white/50 p-8 md:p-12 rounded-[12px] group hover:-translate-y-2 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="font-sans text-[20px] md:text-[24px] font-medium text-[#2b2b2b]">{tool.title}</h4>
                  <p className="font-sans text-[14px] text-[#2b2b2b99]">{tool.subtitle}</p>
                </div>

                <div className="whitespace-pre-wrap text-[14px] md:text-[16px] leading-[1.5em] text-[#2b2b2b]">
                  {tool.description}
                </div>
                
                <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row gap-6 sm:gap-4 sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 border border-black/10 shadow-sm">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1920px-ChatGPT-Logo.png?_=20230814075517" alt="ChatGPT" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[13px] text-[#2b2b2b] font-medium">ChatGPT</span>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 border border-black/10 shadow-sm">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[13px] text-[#2b2b2b] font-medium">Pinterest</span>
                    </a>
                  </div>

                  <Link to={tool.link} className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#2b2b2b] hover:text-black transition-colors">
                    <span>Buka Tools &rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
