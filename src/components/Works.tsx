import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '01',
    title: 'Style Clone',
    category: '(AI POSTER DESIGN PROMPT GENERATOR)',
    link: '/style-clone',
    image: 'https://cdn.scalev.com/uploads/1782823449/qJk0EDAsf8nEJM9GG_cXWQ/1782823448447-STYLE-CLONE.webp'
  },
  {
    id: '02',
    title: 'Carousel Studio',
    category: '(AI INSTAGRAM CAROUSEL PROMPT GENERATOR)',
    link: '/carousel-studio',
    image: 'https://cdn.scalev.com/uploads/1782823477/EaTYUC62o7skOq23BfRGLw/1782823476727-CAROUSEL-GENERATOR.webp'
  },
  {
    id: '03',
    title: 'Ads Creative Studio',
    category: '(AI ADS CREATIVE PROMPT GENERATOR)',
    link: '/banner-studio',
    image: 'https://cdn.scalev.com/uploads/1782823496/QAKTUSJ_F851c3eCnzCKlg/1782823496150-BANNER-STUDIO.webp'
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-24 relative">
          <div className="flex flex-col items-center mx-auto md:mx-0 text-center md:text-left">
            <h2 className="font-serif italic text-[60px] md:text-[100px] leading-[0.8] tracking-[-0.04em] text-[#2b2b2b]">Featured</h2>
            <h2 className="font-serif italic text-[60px] md:text-[100px] leading-[0.8] tracking-[-0.04em] text-[#2b2b2b] md:ml-16">Tools</h2>
          </div>
          <p className="text-[11px] md:text-[13px] font-sans font-medium tracking-[0.2em] text-[#2b2b2bcc] uppercase max-w-[200px] text-center md:text-right mt-8 md:mt-0">
            (EXPLORE OUR AI TOOLS)
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center w-full"
            >
              <div className="w-full max-w-5xl relative aspect-[16/9] overflow-hidden bg-black/5 mb-8 rounded-[12px]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Live CTA */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <Link 
                    to={project.link}
                    className="inline-flex items-center justify-center w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full border border-black/20 bg-white/80 backdrop-blur-[5px] hover:bg-[#2b2b2b] hover:text-white transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              <div className="w-full max-w-5xl flex flex-row items-start gap-4 text-left">
                <h4 className="font-serif text-[32px] md:text-[36px] leading-[1em] tracking-[-0.06em] text-[#2b2b2b]">
                  ({project.id})
                </h4>
                
                <div className="flex flex-col items-start gap-1">
                  <h4 className="font-serif text-[32px] md:text-[36px] leading-[1em] tracking-[-0.06em] text-[#2b2b2b]">
                    {project.title}
                  </h4>
                  <p className="font-sans text-[11px] md:text-[13px] text-[#2b2b2bcc] uppercase tracking-wide">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
