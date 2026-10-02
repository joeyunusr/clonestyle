import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { canvasSizes, getCanvasLayoutGuidelines, FORBIDDEN_COMPONENTS_RULE } from '../utils/canvasConfig';

export default function BannerStudio() {
  const [copywriting, setCopywriting] = useState('');
  const [produk, setProduk] = useState('');
  const [selectedSize, setSelectedSize] = useState('web-hero');
  const [customSizeInput, setCustomSizeInput] = useState('');
  
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = () => {
    const selectedCanvasObj = canvasSizes.find(c => c.id === selectedSize);
    let sizeText = selectedCanvasObj?.size || '1920 × 1080';
    let sizeLabel = selectedCanvasObj?.label || 'Website Hero';
    
    if (selectedSize === 'custom') {
      sizeText = customSizeInput.trim() || '1920 × 1080';
      sizeLabel = `Custom Size (${sizeText})`;
    }

    const layoutGuidelines = getCanvasLayoutGuidelines(selectedSize, sizeText, sizeLabel);

    const prompt = `# AI Creative Director & Ads Designer

Anda adalah **AI Creative Director** dan **Designer Ads profesional** yang mampu menghasilkan desain berkualitas agency tier-1.

---

# WAJIB MENGIKUTI DESAIN REFERENSI

${produk ? `Saya akan mengunggah **2 gambar**:
1. Gambar pertama sebagai **REFERENSI DESAIN**.
2. Gambar kedua sebagai **FOTO PRODUK** yang ingin ditampilkan.` : `Saya akan mengunggah **1 gambar sebagai REFERENSI DESAIN**.`}

**WAJIB mengikuti desain referensi semirip mungkin (95–100%)**.${produk ? `\n\n**Gunakan foto produk pada foto kedua yang saya unggah sebagai foto produk yang ingin saya tampilkan.**` : ''}

Gunakan gambar referensi sebagai **acuan utama seluruh keputusan desain**, bukan hanya sebagai inspirasi.

Targetnya adalah menghasilkan desain yang terlihat seperti dibuat oleh **designer yang sama**, berasal dari **design system yang sama**, dan memiliki **DNA visual yang identik**.

${FORBIDDEN_COMPONENTS_RULE}

---

## JANGAN

* DILARANG MEMBUAT KOMPONEN DI LUAR DARI GAMBAR REFERENSI YANG DI-UPLOAD!
* Jangan menambahkan elemen dekoratif, shape, badge, icon, atau ornamen baru yang tidak ada pada gambar referensi.
* Jangan membuat layout baru di luar penyesuaian proporsional terhadap ukuran canvas yang dipilih.
* Jangan membuat versi dengan style berbeda.
* Jangan menggunakan template generik.
* Jangan mengubah struktur visual asli referensi.
* Jangan mengubah karakter desain.
* Jangan membuat interpretasi kreatif yang berbeda dari referensi.
* Jangan mengubah karakter desain.
* Jangan membuat interpretasi kreatif yang berbeda dari referensi.

## WAJIB Mengikuti

* Layout
* Komposisi
* Grid System
* Editorial Structure
* Visual Hierarchy
* Hierarki Tipografi
* Ukuran Headline
* Ukuran Subheadline
* Ukuran Body Text
* Ketebalan Font
* Alignment
* Margin
* Spacing
* White Space
* Negative Space
* Visual Rhythm
* Shape
* Card
* Border
* Outline
* Shadow
* Layering
* Depth
* Background
* Color Palette
* Accent Color
* Decorative Elements
* Icon Style
* Badge
* Numbering
* Highlight Text
* Positioning
* Crop
* Framing
* Hero Composition
* Overall Aesthetic
* Premium Feel
* Minimalism Level
* Editorial Style

## Yang Boleh Berubah

HANYA:

* Copywriting
* Foto
* Ilustrasi
* Icon
* Produk
* Warna (jika diminta secara khusus)

Selain itu **WAJIB mempertahankan bahasa visual dari referensi.**

---

# GAYA VISUAL

Ikuti gaya visual poster referensi semirip mungkin.

Meliputi:

* Layout & Composition
* Editorial Grid
* Asymmetrical Layout
* Split Layout
* Hierarchy Typography
* Bold Headline
* Medium Subheadline
* Small Body Text
* Font Weight
* White Space
* Visual Balance
* Rounded Card / Sharp Corner / Pill
* Icon Style
* Illustration Style
* Photo Style
* Studio Lighting
* Indonesian Talent
* Cutout Image
* Full Body / Half Body
* Subject Position
* Overlapping
* Layering
* Decorative Shape
* Ribbon
* Circle
* Blob
* Abstract Shape
* Border
* Outline
* Shadow
* Glassmorphism
* Gradient
* Flat Design
* Background Style
* Badge Style
* Numbering Style
* Highlight Style
* Information Card
* Branding Style

Referensi branding yang boleh dijadikan acuan visual:

* Apple
* Swiss Editorial
* Modern Healthcare
* Canva Premium
* Corporate Minimal
* Luxury Editorial

---

# ATURAN SPACING (WAJIB)

Gunakan layout yang memiliki ruang napas.

* Margin sekitar 10% dari setiap sisi.
* Maksimal area konten 80% dari canvas.
* Jangan memenuhi seluruh canvas.
* Jangan membuat desain terlalu padat.
* Prioritaskan keterbacaan.
* White space harus mengikuti referensi.
* Hero image maksimal mengisi 70–80% area tengah.
* Header kecil.
* Footer kecil.
* Semua elemen harus memiliki jarak yang konsisten.

---

# UKURAN CANVAS & PENYESUAIAN TATA LETAK (LAYOUT)

Ukuran Canvas Pilihan User:
**${sizeLabel} — ${sizeText} px**

### PERINTAH PENYESUAIAN LAYOUT OLEH AI (WAJIB DIPATUHI):
1. **Layout Menyesuaikan Dimensi Kanvas**: AI WAJIB menyusun gambar dengan tata letak (layout) dan komposisi yang SANGAT COCOK, proporsional, dan seimbang secara estetis untuk ukuran canvas yang dipilih oleh user: **${sizeLabel} (${sizeText} px)**.
2. **Harmonisasi Grid & Komposisi**: Adaptasikan grid layout, skala ukuran tipografi, penempatan subjek visual/produk, dan whitespace agar pas secara sempurna dengan aspek rasio bidang kanvas tanpa meregangkan (stretch), memipihkan (distort), atau memotong elemen penting.
3. **Patuhi Panduan Area Aman & Margin Canvas**:
${layoutGuidelines}

---

# KUALITAS VISUAL

Harus menghasilkan desain dengan kualitas:

* Ultra Clean
* Retina Quality
* High-End Editorial
* Premium
* Agency Quality
* Pixel Perfect
* Modern
* Conversion Focused
* Professional
* Sharp
* High Resolution

---

# LARANGAN (WAJIB DIPATUHI)

**1. DILARANG KERAS MEMBUAT KOMPONEN DI LUAR REFERENSI!**
AI DILARANG membuat atau menambahkan komponen visual, ornamen grafis, dekorasi, bentuk (shape), icon, badge, card/container, frame, atau ilustrasi yang TIDAK ADA pada gambar referensi. Seluruh elemen visual WAJIB 100% berasal dari gambar referensi yang diunggah.

**2. DILARANG ADA BRANDINGAN ATAU LOGO BRAND ATAU SEJENISNYA!!!**
**JANGAN menambahkan identitas apa pun yang tidak diminta pada desain.**

Dilarang memasukkan:

* Logo
* Nama Brand
* Nama Perusahaan
* Watermark
* Signature
* Credit
* Website
* URL
* QR Code
* Nomor Telepon
* Nomor WhatsApp
* Email
* Instagram
* Facebook
* TikTok
* YouTube
* X / Twitter
* LinkedIn
* Alamat
* Copyright
* Trademark
* Identitas perusahaan apa pun

Jika pada gambar referensi terdapat:

* Logo
* Nama Brand
* Watermark
* Website
* Nomor Telepon
* Email
* Sosial Media
* QR Code

maka **WAJIB DIHAPUS** dan **TIDAK BOLEH ditampilkan kembali** pada hasil akhir.

Ganti area tersebut dengan negative space atau elemen dekoratif yang mengikuti desain referensi.

**JANGAN mengarang identitas apa pun.**

Template harus benar-benar **brand-neutral**.

---

# OUTPUT

Buat desain ads creative menggunakan informasi yang saya berikan.

WAJIB:

* Menyesuaikan tata letak (layout) dan komposisi agar SANGAT COCOK dengan ukuran canvas terpilih: ${sizeLabel} (${sizeText} px).
* DILARANG MEMBUAT KOMPONEN DI LUAR DARI GAMBAR REFERENSI YANG DI-UPLOAD! Semua elemen visual wajib 100% mengikuti komponen yang ada pada gambar referensi.
* Mengikuti desain referensi semirip mungkin (95–100%).
* Menjaga layout dan bahasa visual tetap identik dengan referensi.
* Menjaga margin dan whitespace tetap rapi.
* Tidak ada elemen yang terpotong.
* Tidak ada logo, nama brand, watermark, website, email, nomor telepon, QR Code, atau media sosial.
* DILARANG ADA BRANDINGAN ATAU LOGO BRAND ATAU SEJENISNYA!!!

==================================================

# INFORMASI DESAIN

Copywriting:

${copywriting || '[Masukkan Copywriting]'}

Produk yang ingin ditampilkan:

${produk || 'Tidak ada'}

Ukuran Canvas:

${sizeLabel} — ${sizeText} px

==================================================`;

    const cleanPrompt = prompt
      .replace(/[#*_]/g, '')
      .replace(/-{3,}/g, '')
      .replace(/={3,}/g, '');

    setGeneratedPrompt(cleanPrompt);
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="pt-32 md:pt-48 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 mb-16"
      >
        <p className="font-sans text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-[#2b2b2bcc] uppercase">
          (03) Ads Creative Studio
        </p>
        <h1 className="font-serif italic text-[42px] md:text-[80px] leading-[0.9] tracking-[-0.04em] text-[#2b2b2b]">
          Generator Prompt AI untuk Ads Creative
        </h1>
        <p className="font-sans text-[14px] md:text-[16px] leading-[1.6em] text-[#2b2b2bcc] max-w-2xl">
          Buat prompt AI untuk menghasilkan desain iklan kreatif berkualitas premium dengan mempertahankan style referensi.
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
          <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 border border-black/10 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1920px-ChatGPT-Logo.png?_=20230814075517" alt="ChatGPT" className="w-full h-full object-contain" />
            </div>
            <span className="text-[14px] text-[#2b2b2b] font-medium">ChatGPT</span>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 border border-black/10 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" className="w-full h-full object-contain" />
            </div>
            <span className="text-[14px] text-[#2b2b2b] font-medium">Pinterest</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full bg-white/50 backdrop-blur-xl border border-black/10 rounded-[24px] p-6 md:p-12 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)]"
      >
        <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Copywriting *
            </label>
            <textarea 
              required
              value={copywriting}
              onChange={(e) => setCopywriting(e.target.value)}
              className="w-full min-h-[120px] bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all resize-y"
              placeholder="Masukkan teks copywriting lengkap untuk desain ini..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Produk yang Ingin Ditampilkan
            </label>
            <textarea 
              value={produk}
              onChange={(e) => setProduk(e.target.value)}
              className="w-full min-h-[80px] bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all resize-y"
              placeholder="Contoh: Ada produk sepatu sneakers warna putih yang akan saya upload..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Ukuran Canvas *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {canvasSizes.map((canvas) => (
                <button
                  key={canvas.id}
                  type="button"
                  onClick={() => setSelectedSize(canvas.id)}
                  className={`relative flex flex-col items-start gap-2 p-4 rounded-[12px] border text-left transition-all duration-300 ${
                    selectedSize === canvas.id
                      ? 'border-[#2b2b2b] bg-black/5 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]'
                      : 'border-black/10 bg-white hover:border-black/30 hover:bg-black/5'
                  }`}
                >
                  <span className="font-sans text-[14px] font-medium text-[#2b2b2b] leading-tight pr-6">
                    {canvas.label}
                  </span>
                  <span className="font-sans text-[12px] text-[#2b2b2bcc]">
                    {canvas.size}
                  </span>
                  {canvas.recommended && (
                    <span className="absolute top-3 right-3 text-[16px]" title="Recommended">
                      ⭐
                    </span>
                  )}
                </button>
              ))}
            </div>
            {selectedSize === 'custom' && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                className="mt-2"
              >
                <input 
                  type="text"
                  required
                  value={customSizeInput}
                  onChange={(e) => setCustomSizeInput(e.target.value)}
                  className="w-full bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all"
                  placeholder="Masukkan ukuran khusus (misal: 1000x2000)"
                />
              </motion.div>
            )}
          </div>

          <button 
            type="submit"
            className="group mt-4 inline-flex items-center justify-center gap-2 bg-[#2b2b2b] text-white rounded-[12px] py-4 px-8 font-sans text-[14px] font-medium tracking-wide uppercase transition-all hover:bg-black hover:scale-[1.02] active:scale-95 w-full md:w-auto md:self-start"
          >
            Generate Prompt
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        {generatedPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[16px] font-medium text-[#2b2b2b]">Hasil Prompt:</h3>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-[8px] text-[13px] font-medium text-[#2b2b2b] transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Berhasil Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Prompt</span>
                  </>
                )}
              </button>
            </div>
            <div className="relative group">
              <textarea
                readOnly
                value={generatedPrompt}
                className="w-full h-[400px] bg-[#f8f8f8] border border-black/10 rounded-[12px] p-6 text-[14px] font-mono leading-[1.6em] text-[#2b2b2b] focus:outline-none resize-y"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

