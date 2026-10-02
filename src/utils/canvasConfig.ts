export interface CanvasSizeOption {
  id: string;
  label: string;
  size: string;
  recommended?: boolean;
}

export const canvasSizes: CanvasSizeOption[] = [
  { id: 'ig-portrait', label: 'Instagram Portrait', size: '1080 × 1350', recommended: true },
  { id: 'ig-square', label: 'Instagram Square', size: '1080 × 1080' },
  { id: 'ig-story', label: 'Instagram Story', size: '1080 × 1920' },
  { id: 'fb-post', label: 'Facebook Post', size: '1200 × 630' },
  { id: 'li-post', label: 'LinkedIn Post', size: '1200 × 1200' },
  { id: 'x-post', label: 'X / Twitter Post', size: '1600 × 900' },
  { id: 'web-hero', label: 'Website Hero', size: '1920 × 1080' },
  { id: 'web-banner', label: 'Website Banner', size: '1600 × 900' },
  { id: 'blog-header', label: 'Blog Header', size: '1600 × 500' },
  { id: 'marketplace', label: 'Marketplace Product', size: '1000 × 1000' },
  { id: 'a4-portrait', label: 'A4 Portrait', size: '2480 × 3508' },
  { id: 'custom', label: 'Custom Size', size: 'Tentukan Sendiri' },
];

export const getCanvasLayoutGuidelines = (selectedSizeId: string, sizeText: string, sizeLabel: string): string => {
  let layoutGuideline = '';

  if (selectedSizeId === 'ig-portrait' || sizeText.includes('1080 × 1350')) {
    layoutGuideline = `Format & Aspek Rasio: 4:5 (Instagram Portrait - 1080 × 1350 px)
Komposisi Layout:
- Rancang layout vertikal dengan hierarki yang jelas dan seimbang.
- SAFE ZONE INSTAGRAM (WAJIB): Instagram akan memotong bagian atas dan bawah saat pratinjau feed kotak (1:1).
- Area Aman Utama: Y = 135 px hingga Y = 1215 px.
- 135 px paling atas dan 135 px paling bawah TIDAK BOLEH berisi elemen penting (headline, subheadline, produk utama, model wajah, badge harga, CTA, nomor slide).
- Seluruh elemen penting WAJIB berada di dalam Safe Zone agar tidak terpotong saat preview feed.`;
  } else if (selectedSizeId === 'ig-story' || sizeText.includes('1080 × 1920')) {
    layoutGuideline = `Format & Aspek Rasio: 9:16 (Instagram Story / Full Vertical - 1080 × 1920 px)
Komposisi Layout:
- Rancang layout vertikal memanjang dengan visual flow yang mengalir dari atas ke bawah.
- SAFE ZONE STORIES (WAJIB):
  * Kosongkan 200 px paling atas dari teks/elemen penting (tertutup username & status bar IG).
  * Kosongkan 250 px paling bawah dari teks/elemen penting (tertutup action bar, reply box & UI reaksi).
- Pusatkan headline, subheadline, produk/subjek, dan elemen kunci di area tengah (safe area tengah 1470 px).`;
  } else if (selectedSizeId === 'ig-square' || selectedSizeId === 'marketplace' || selectedSizeId === 'li-post' || sizeText.includes('1080 × 1080') || sizeText.includes('1000 × 1000') || sizeText.includes('1200 × 1200')) {
    layoutGuideline = `Format & Aspek Rasio: 1:1 (Square / Persegi - ${sizeText} px)
Komposisi Layout:
- Rancang komposisi persegi yang seimbang, simetris atau split grid yang proporsional.
- Terapkan margin aman minimal 10% di setiap sisi (atas, bawah, kiri, kanan).
- Pastikan headline dan subjek visual memiliki focal point yang kuat dan ruang napas (breathing room) yang merata di keempat sisi kanvas.`;
  } else if (selectedSizeId === 'fb-post' || sizeText.includes('1200 × 630')) {
    layoutGuideline = `Format & Aspek Rasio: ~1.91:1 (Facebook Post Horizontal - 1200 × 630 px)
Komposisi Layout:
- Rancang tata letak mendatar (landscape) yang sangat cocok untuk timeline Facebook.
- Gunakan komposisi horizontal dinamis (misalnya pembagian dua kolom: kiri untuk hierarki copywriting/headline dan kanan untuk visual utama/produk).
- Terapkan margin aman 10% di sekeliling canvas agar tidak terpotong di berbagai rasio layar mobile/desktop.`;
  } else if (selectedSizeId === 'x-post' || selectedSizeId === 'web-hero' || selectedSizeId === 'web-banner' || sizeText.includes('1600 × 900') || sizeText.includes('1920 × 1080')) {
    layoutGuideline = `Format & Aspek Rasio: 16:9 (Widescreen Landscape - ${sizeText} px)
Komposisi Layout:
- Rancang komposisi lanskap lebar yang luas dengan pemanfaatan ruang horizontal yang elegan.
- Susun hierarki visual menyamping (asymmetric horizontal balance atau hero layout), bukan menumpuk teks secara sempit.
- Margin aman minimal 8-10% di setiap tepi canvas untuk estetika editorial premium.`;
  } else if (selectedSizeId === 'blog-header' || sizeText.includes('1600 × 500')) {
    layoutGuideline = `Format & Aspek Rasio: 3.2:1 (Panorama Header Banner - 1600 × 500 px)
Komposisi Layout:
- Rancang tata letak memanjang horizontal (panorama).
- Sebarkan elemen secara horizontal dengan tipografi bold yang ringkas dan visual pendukung di sisi kiri atau kanan.
- Margin aman minimal 12% atas-bawah dan 8% kiri-kanan. Hindari teks bertumpuk banyak baris.`;
  } else if (selectedSizeId === 'a4-portrait' || sizeText.includes('2480 × 3508')) {
    layoutGuideline = `Format & Aspek Rasio: 1:1.41 (A4 Portrait Document / Poster Cetak - 2480 × 3508 px)
Komposisi Layout:
- Rancang tata letak editorial poster vertikal beresolusi tinggi dengan pembagian zona: Header (atas), Hero Content & Subjek (tengah), dan Footer/Detail (bawah).
- Terapkan margin aman minimal 8-10% di setiap sisi untuk kelayakan cetak dan tampilan display.`;
  } else {
    layoutGuideline = `Format & Aspek Rasio: Khusus (${sizeLabel} - ${sizeText} px)
Komposisi Layout:
- AI WAJIB mengkalkulasikan rasio dimensi ${sizeText} px dan merancang tata letak yang paling pas, proporsional, dan estetis untuk bidang kanvas ini.
- Terapkan margin aman minimal 10% di setiap sisi kanvas dan susun elemen agar tidak terdistorsi atau terpotong.`;
  }

  return layoutGuideline;
};

export const FORBIDDEN_COMPONENTS_RULE = `==================================================
# ATURAN MUTLAK: DILARANG MEMBUAT KOMPONEN DI LUAR REFERENSI
==================================================

1. DILARANG KERAS MEMBUAT ATAU MENAMBAHKAN KOMPONEN/ELEMEN APAPUN DI LUAR DARI GAMBAR REFERENSI YANG DI-UPLOAD!
2. AI DILARANG berimprovisasi, mengarang, atau menambahkan komponen baru, ornamen asing, bentuk (shape), icon, badge, sticker, container/card baru, frame, atau ilustrasi grafis yang TIDAK ADA pada gambar referensi.
3. Seluruh komponen desain, susunan layout, jenis card, border, bayangan (shadow), dan elemen visual yang muncul WAJIB 100% bersumber langsung dan identik dengan apa yang ada di gambar referensi.
4. Jika suatu komponen atau ornamen TIDAK TERDAPAT pada gambar referensi, JANGAN PERNAH DIBUAT dan JANGAN DIMUNCULKAN!
5. HANYA ganti isi konten (copywriting teks serta foto produk/model) yang diminta, TANPA mengubah, merekayasa, atau menciptakan komponen visual baru di luar gambar referensi.`;
