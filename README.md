
# ✉️ Modern Contact Form

Aplikasi **Contact Form** modern yang dibangun dengan **React** dan **TypeScript**, menampilkan desain minimalis premium dengan animasi halus serta pengalaman pengguna (UX) yang responsif dan intuitif.

---

## 📋 Daftar Isi

- [Fungsi Utama](#-fungsi-utama)
- [Fitur-Fitur](#-fitur-fitur)
- [Tech Stack & Framework](#-tech-stack--framework)
- [Struktur Proyek](#-struktur-proyek)
- [Cara Menjalankan](#-cara-menjalankan)
- [Konfigurasi Environment](#-konfigurasi-environment)

---

## 🔧 Fungsi Utama

| Fungsi | Deskripsi |
|---|---|
| **Form Submission** | Menangani pengiriman formulir kontak secara asinkron dengan simulasi network request. |
| **Validasi Input** | Validasi field wajib (Nama, Email, Pesan) secara otomatis menggunakan atribut HTML5 `required`. |
| **Validasi Email** | Memastikan format alamat email yang dimasukkan valid melalui `type="email"`. |
| **Loading State** | Menampilkan indikator loading (spinner) saat proses pengiriman sedang berlangsung. |
| **Toast Notification** | Menampilkan notifikasi sukses setelah pesan berhasil terkirim menggunakan library Sonner. |
| **Auto Reset Form** | Mereset seluruh field formulir secara otomatis setelah pengiriman berhasil. |
| **Disable Saat Submit** | Menonaktifkan semua input dan tombol kirim selama proses pengiriman untuk mencegah duplikasi. |

---

## ✨ Fitur-Fitur

### 🎨 Desain & UI
- **Desain Minimalis Premium** — Tampilan bersih dengan kartu formulir ber-shadow dan border halus menggunakan pendekatan glassmorphism.
- **Gradient Background** — Latar belakang dekoratif menggunakan radial gradient indigo yang elegan.
- **Ikon Interaktif** — Setiap field dilengkapi ikon kontekstual (User, Mail, MessageSquare) dari Lucide Icons.
- **Rounded Corner Modern** — Menggunakan `rounded-2xl` dan `rounded-[2rem]` untuk kesan modern dan friendly.

### 🎬 Animasi & Interaksi
- **Entrance Animation** — Animasi fade-in dan slide-up saat halaman pertama kali dimuat menggunakan Framer Motion.
- **Hover Effect pada Tombol** — Efek scale-up saat hover dan scale-down saat klik (whileHover & whileTap).
- **Background Hover Animation** — Animasi overlay putih yang bergerak dari bawah ke atas saat tombol di-hover.
- **Focus State Interaktif** — Perubahan warna ikon dan ring glow saat field input mendapat fokus.
- **Smooth Transitions** — Semua perubahan state menggunakan transisi CSS yang halus.

### 📱 Responsivitas
- **Mobile-First Layout** — Desain yang optimal di semua ukuran layar.
- **Adaptive Grid** — Layout field berubah dari satu kolom (mobile) ke dua kolom (desktop) secara otomatis.
- **Responsive Padding** — Padding yang menyesuaikan antara perangkat kecil dan besar.

### 🛡️ UX & Aksesibilitas
- **Label yang Jelas** — Setiap input memiliki label yang deskriptif dalam Bahasa Indonesia.
- **Placeholder Informatif** — Contoh input ditampilkan sebagai panduan pengisian.
- **Text Selection Styling** — Warna seleksi teks yang disesuaikan (indigo) untuk konsistensi visual.
- **Link Kebijakan Privasi** — Footer dengan tautan kebijakan privasi untuk transparansi data.

---

## 🛠️ Tech Stack & Framework

### Core
| Teknologi | Versi | Fungsi |
|---|---|---|
| **React** | ^19.0.1 | Library utama untuk membangun antarmuka pengguna berbasis komponen. |
| **TypeScript** | ~5.8.2 | Superset JavaScript yang menambahkan static typing untuk keamanan kode. |
| **Vite** | ^6.2.3 | Build tool modern yang sangat cepat untuk development dan bundling. |

### Styling
| Teknologi | Versi | Fungsi |
|---|---|---|
| **Tailwind CSS** | ^4.1.14 | Utility-first CSS framework untuk styling yang cepat dan konsisten. |
| **Autoprefixer** | ^10.4.21 | Plugin PostCSS untuk menambahkan vendor prefix CSS secara otomatis. |

### UI & Animasi
| Teknologi | Versi | Fungsi |
|---|---|---|
| **Motion (Framer Motion)** | ^12.23.24 | Library animasi deklaratif untuk React dengan API yang intuitif. |
| **Lucide React** | ^0.546.0 | Koleksi ikon SVG modern yang ringan dan konsisten. |
| **Sonner** | ^2.0.7 | Library toast notification yang elegan dan mudah digunakan. |

### Backend & Utilitas
| Teknologi | Versi | Fungsi |
|---|---|---|
| **Express** | ^4.21.2 | Framework server Node.js (tersedia untuk kebutuhan backend). |
| **Google GenAI** | ^1.29.0 | SDK untuk integrasi dengan Gemini AI API. |
| **Dotenv** | ^17.2.3 | Memuat variabel environment dari file `.env`. |

---

## 📁 Struktur Proyek

```
Modern-Contact-Form-/
├── src/
│   ├── App.tsx          # Komponen utama aplikasi (Contact Form)
│   ├── main.tsx         # Entry point React
│   └── index.css        # Global stylesheet
├── index.html           # Template HTML utama
├── vite.config.ts       # Konfigurasi Vite (plugins, alias, HMR)
├── tsconfig.json        # Konfigurasi TypeScript
├── package.json         # Dependencies dan scripts
├── .env.example         # Contoh variabel environment
└── .gitignore           # File yang diabaikan Git
```

---

## 🚀 Cara Menjalankan

**Prasyarat:** Node.js (versi terbaru disarankan)

1. **Clone repository:**
   ```bash
   git clone https://github.com/username/Modern-Contact-Form-.git
   cd Modern-Contact-Form-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Konfigurasi environment:**
   ```bash
   cp .env.example .env.local
   ```
   Isi `GEMINI_API_KEY` dengan API key Gemini Anda di file `.env.local`.

4. **Jalankan aplikasi:**
   ```bash
   npm run dev
   ```

5. Buka browser dan akses `http://localhost:3000`

---

## ⚙️ Konfigurasi Environment

| Variabel | Deskripsi |
|---|---|
| `GEMINI_API_KEY` | API key untuk mengakses layanan Gemini AI. |
| `APP_URL` | URL tempat aplikasi di-host (untuk OAuth callback, dll). |

---

## 📜 Scripts

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server development di port 3000. |
| `npm run build` | Membuat bundle produksi. |
| `npm run preview` | Preview hasil build produksi. |
| `npm run clean` | Menghapus folder `dist`. |
| `npm run lint` | Memeriksa type error dengan TypeScript compiler. |

---

<div align="center">
  <p>Dibuat dengan ❤️ menggunakan React + Vite + Tailwind CSS</p>
</div>
