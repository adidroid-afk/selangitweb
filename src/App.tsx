import { useState } from 'react'

// Komponen Navigasi
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const categories = ['Pusat Data AI', 'Proyek AI', 'AI Agentik', 'Koder LLM', 'Kendaraan Otonom']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Selangit.Com
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {cat}
              </a>
            ))}
            <a href="#berlangganan" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Berlangganan
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-3">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// Bagian Hero
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Latar belakang animasi */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Pola grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-cyan-400 text-sm font-medium">Platform Berita Ekosistem AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Gerbang Anda Menuju</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Dunia Kecerdasan Buatan
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Tetap terdepan dengan informasi terkini seputar Pusat Data AI, Sistem Agentik, 
          Aplikasi LLM, Teknologi Kendaraan Otonom, dan Proyek AI inovatif 
          yang membentuk masa depan dunia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pusat-data-ai" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
            Jelajahi Berita
          </a>
          <a href="#berlangganan" className="px-8 py-4 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all">
            Dapatkan Rangkuman Harian
          </a>
        </div>

        {/* Statistik */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Pusat Data AI', value: '2.400+', icon: '🏢' },
            { label: 'Proyek AI Dilacak', value: '15RB+', icon: '🚀' },
            { label: 'Sistem Agentik', value: '800+', icon: '🤖' },
            { label: 'Pembaruan Harian', value: '500+', icon: '📡' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Komponen Kartu Kategori
function CategoryCard({ icon, title, description, articles, color, id }: {
  icon: string
  title: string
  description: string
  articles: { title: string; time: string; tag: string }[]
  color: string
  id: string
}) {
  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-4xl">{icon}</span>
          <div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className="text-gray-400 mt-1">{description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer"
            >
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${color}`}>
                {article.tag}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-3">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bagian Berlangganan
function Newsletter() {
  return (
    <section id="berlangganan" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tetap Unggul dalam Revolusi AI
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Dapatkan berita ekosistem AI pilihan yang dikirim langsung ke kotak masuk Anda. 
              Dari terobosan pusat data hingga pencapaian kendaraan otonom — jangan lewatkan satu perkembangan pun.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full px-6 py-4 bg-gray-950 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Berlangganan Gratis
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4">Bergabung dengan 50.000+ profesional AI. Tanpa spam, berhenti berlangganan kapan saja.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Selangit.Com
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Sumber terpercaya Anda untuk berita ekosistem AI, mencakup pusat data, sistem agentik, aplikasi LLM, dan kendaraan otonom.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#pusat-data-ai" className="hover:text-cyan-400 transition-colors">Pusat Data AI</a></li>
              <li><a href="#proyek-ai" className="hover:text-cyan-400 transition-colors">Proyek AI</a></li>
              <li><a href="#ai-agentik" className="hover:text-cyan-400 transition-colors">AI Agentik</a></li>
              <li><a href="#koder-llm" className="hover:text-cyan-400 transition-colors">Koder LLM</a></li>
              <li><a href="#kendaraan-otonom" className="hover:text-cyan-400 transition-colors">Kendaraan Otonom</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kontak</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Pasang Iklan</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kit Pers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Terhubung</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Umpan RSS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">© 2026 Selangit.Com. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Ketentuan Layanan</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Aplikasi Utama
export default function App() {
  const categories = [
    {
      id: 'pusat-data-ai',
      icon: '🏢',
      title: 'Pusat Data AI',
      description: 'Infrastruktur yang menggerakkan revolusi AI — dari kluster GPU hingga inovasi pendinginan cair.',
      color: 'bg-cyan-500/10 text-cyan-400',
      articles: [
        { title: 'NVIDIA Meluncurkan Rak GB300 NVL72 Generasi Berikutnya untuk Pusat Data AI', time: '2 jam lalu', tag: 'Infrastruktur' },
        { title: 'Microsoft Investasi $10 Miliar di Pusat Data AI Baru di Asia Tenggara', time: '4 jam lalu', tag: 'Investasi' },
        { title: 'Pendinginan Cair Menjadi Standar di Fasilitas AI Skala Hiper', time: '6 jam lalu', tag: 'Teknologi' },
        { title: 'TSMC Laporkan Permintaan Chip Rekor Didorong oleh Pembangunan Pusat Data AI', time: '8 jam lalu', tag: 'Rantai Pasok' },
        { title: 'Google Menyebarkan Pod TPU v6 Kustom di Pusat Data Iowa Baru', time: '12 jam lalu', tag: 'Penyebaran' },
        { title: 'Konsumsi Energi Pusat Data AI: Terobosan Efisiensi Baru', time: '1 hari lalu', tag: 'Keberlanjutan' },
      ]
    },
    {
      id: 'proyek-ai',
      icon: '🚀',
      title: 'Proyek AI',
      description: 'Inisiatif AI terobosan yang mengubah industri dari kesehatan hingga ilmu iklim.',
      color: 'bg-purple-500/10 text-purple-400',
      articles: [
        { title: 'DeepMind Meluncurkan Proyek Astra: Asisten AI Universal untuk Dunia Nyata', time: '1 jam lalu', tag: 'Penelitian' },
        { title: 'OpenAI Mengumumkan GPT-5 dengan Kemampuan Penalaran Multimodal', time: '3 jam lalu', tag: 'Peluncuran' },
        { title: 'Kepatuhan UU AI Uni Eropa: Proyek Besar Membentuk Ulang Pipeline Pengembangan', time: '5 jam lalu', tag: 'Regulasi' },
        { title: 'Anthropic Claude 4 Mencapai Penalaran Ilmiah Setingkat PhD', time: '7 jam lalu', tag: 'Tolok Ukur' },
        { title: 'Meta Membuka Sumber LLaMA 4 dengan 400 Miliar Parameter', time: '10 jam lalu', tag: 'Sumber Terbuka' },
        { title: 'Proyek Penemuan Obat Berbasis AI Mencapai Uji Klinis Fase 3', time: '1 hari lalu', tag: 'Kesehatan' },
      ]
    },
    {
      id: 'ai-agentik',
      icon: '🤖',
      title: 'AI Agentik',
      description: 'Agen AI otonom yang merencanakan, menalar, dan menjalankan tugas kompleks secara mandiri.',
      color: 'bg-blue-500/10 text-blue-400',
      articles: [
        { title: 'AutoGPT v2.0: Agen Sepenuhnya Otonom Kini Menangani Alur Kerja Perusahaan', time: '30 menit lalu', tag: 'Rilis' },
        { title: 'Agen Microsoft Copilot: Membangun Sistem Orkestrasi Multi-Agen', time: '2 jam lalu', tag: 'Perusahaan' },
        { title: 'LangChain Meluncurkan Protokol Standar Agen untuk Interoperabilitas', time: '4 jam lalu', tag: 'Standar' },
        { title: 'Agen AI Kini Menulis, Menguji, dan Menyebarkan Kode Tanpa Pengawasan Manusia', time: '6 jam lalu', tag: 'Otomatisasi' },
        { title: 'Kerangka Kerja CrewAI Memungkinkan Pola Kolaborasi Multi-Agen yang Kompleks', time: '9 jam lalu', tag: 'Kerangka Kerja' },
        { title: 'Kekhawatiran Keamanan Meningkat Seiring Agen AI Mendapat Lebih Banyak Otonomi', time: '1 hari lalu', tag: 'Keamanan' },
      ]
    },
    {
      id: 'koder-llm',
      icon: '💻',
      title: 'Koder Aplikasi LLM',
      description: 'Asisten pemrograman AI dan alat pengembangan berbasis LLM yang merevolusi rekayasa perangkat lunak.',
      color: 'bg-green-500/10 text-green-400',
      articles: [
        { title: 'GitHub Copilot X: Pengembangan Full-Stack dengan Bahasa Alami', time: '45 menit lalu', tag: 'Alat Dev' },
        { title: 'Cursor IDE Mencapai Valuasi $1 Miliar Saat Pengembangan Berbasis AI Menjadi Arus Utama', time: '3 jam lalu', tag: 'Startup' },
        { title: 'Claude Code: Alat Pemrograman Agentik Anthropic Menangani Seluruh Basis Kode', time: '5 jam lalu', tag: 'Produk' },
        { title: 'Devin AI: Agen Rekayasa Perangkat Lunak Sepenuhnya Otonom Pertama', time: '7 jam lalu', tag: 'Otonom' },
        { title: 'Tolok Ukur Pembuatan Kode LLM: GPT-5 vs Claude 4 vs Gemini Ultra', time: '10 jam lalu', tag: 'Perbandingan' },
        { title: 'Bagaimana Asisten Pemrograman AI Membentuk Ulang Produktivitas Pengembang hingga 40%', time: '1 hari lalu', tag: 'Penelitian' },
      ]
    },
    {
      id: 'kendaraan-otonom',
      icon: '🚗',
      title: 'Kendaraan Otonom',
      description: 'Kendaraan otonom dan sistem AI yang menavigasi jalan menuju mengemudi mandiri sepenuhnya.',
      color: 'bg-orange-500/10 text-orange-400',
      articles: [
        { title: 'Waymo Memperluas Layanan Tanpa Pengemudi ke 10 Kota Baru di AS', time: '1 jam lalu', tag: 'Ekspansi' },
        { title: 'Tesla FSD v13 Mencapai Otonomi Level 4 di Jalan Tol', time: '3 jam lalu', tag: 'Pencapaian' },
        { title: 'Baidu Apollo: 100 Juta Mil Otonom Tanpa Insiden', time: '5 jam lalu', tag: 'Keamanan' },
        { title: 'NVIDIA DRIVE Thor: Komputer Mengemudi Mandiri Generasi Berikutnya Dikirim ke OEM', time: '8 jam lalu', tag: 'Perangkat Keras' },
        { title: 'Uni Eropa Menyetujui Mengemudi Otonom Level 3 untuk Semua Negara Anggota', time: '12 jam lalu', tag: 'Regulasi' },
        { title: 'Truk Otonom: Aurora Memulai Operasi Pengangkutan Komersial', time: '1 hari lalu', tag: 'Logistik' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      
      {categories.map((cat) => (
        <CategoryCard key={cat.id} {...cat} />
      ))}
      
      <Newsletter />
      <Footer />
    </div>
  )
}
