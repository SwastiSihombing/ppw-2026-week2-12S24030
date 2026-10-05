<<<<<<< Updated upstream
# Academic Portfolio - SmartCampus

Website portofolio akademik **Swasti Maristella Sihombing** yang dikembangkan sebagai project portfolio dengan pendekatan data-driven dan struktur aplikasi yang lebih terorganisir.

## Identitas

| Data | Keterangan |
| --- | --- |
| Nama | Swasti Maristella Sihombing |
| NIM | 12S24030 |
| Program Studi | Sistem Informasi |
| Institusi | Institut Teknologi Del |
| Semester | 4 |

## Gambaran Umum

Project ini merupakan versi portfolio yang berfokus pada:

- struktur file yang lebih terpisah
- data yang disimpan dalam file JSON
- pengambilan data menggunakan Fetch API
- rendering tampilan dari JavaScript di sisi client
- pengelolaan order dan data lokal menggunakan localStorage
- desain portfolio yang responsif dan modern
=======
# Academic Portfolio - Week 3

<<<<<<< HEAD
# Portfolio Swasti Sihombing

Website portofolio akademik satu halaman milik **Swasti Maristella Sihombing**, mahasiswa Sistem Informasi di Institut Teknologi Del. Project ini dibuat sebagai bentuk personal portfolio yang menampilkan profil, skill, pengalaman belajar, proyek akademik, dan formulir kontak yang siap digunakan sebagai demo UI.

## Deskripsi Project

Project ini merupakan website landing page akademik yang berfokus pada presentasi diri secara profesional dan modern. Website ini dibuat dengan HTML dan CSS murni, dengan tampilan yang responsif dan estetis menggunakan konsep dark galaxy yang terdiri dari kombinasi warna ungu, biru, dan aksen glow.

## Update Terbaru

Berikut beberapa perubahan dan penambahan yang sudah diterapkan pada project ini:

- Penambahan section hero yang menampilkan profil utama dan tombol aksi.
- Penambahan section About Me yang berisi informasi akademik dan biodata singkat.
- Penambahan section Skills dengan card keahlian seperti HTML, CSS, Java, SQL, Python, dan UI/UX.
- Penambahan portfolio cards untuk proyek SmartCampus, UMiKA, dan KarhutlaFlow.
- Penambahan tabel rekapitulasi proyek akademik.
- Penambahan form konsultasi dengan validasi HTML5.
- Tampilan responsif untuk desktop, tablet, dan mobile.
- Penyempurnaan desain menggunakan layout modern dan navigasi satu halaman.

## Fitur Utama

- Navigasi satu halaman dengan anchor link.
- Hero section dengan foto profil dan tombol CTA.
- Informasi profil akademik dan deskripsi diri.
- Daftar skill dan teknologi yang dipelajari.
- Kartu proyek akademik yang rapi dan informatif.
- Tabel proyek untuk menampilkan ringkasan aktivitas dan pengembangan.
- Form kontak yang sudah dilengkapi validasi form HTML5.
- Layout responsif dan desain yang nyaman untuk berbagai ukuran layar.
- Tema visual dark galaxy dengan gaya modern.
=======
Website portofolio akademik **Swasti Maristella Sihombing** yang direfactor dari tugas Minggu 2 untuk memenuhi praktikum Minggu 3: Bootstrap 5.3, CSS specificity, advanced selectors, dan modernisasi form.
>>>>>>> Stashed changes

## Identitas

| Data | Keterangan |

| Nama | Swasti Maristella Sihombing |
| NIM | 12S24030 |
| Kelas | Sistem Informasi |
| Institusi | Institut Teknologi Del |

## Pembaruan Minggu 3

- Bootstrap 5.3.3 CSS dan JavaScript Bundle melalui CDN.
- Bootstrap Icons untuk navigasi, tombol, dan input group.
- Responsive navbar dengan hamburger collapse pada layar mobile.
- Hero section berbasis Bootstrap grid 12-kolom.
- Empat project cards dengan breakpoint `row-cols-1 row-cols-md-2 row-cols-lg-3`.
- Tiga modal detail proyek dengan konten yang berbeda.
- Form modern menggunakan floating labels, input group, select, checkbox persetujuan, dan validasi visual.
- CSS custom properties pada `:root`, custom theme, transisi hover, `:focus-visible`, `:focus-within`, dan `:nth-child()`.
- Struktur semantik HTML5 tetap dipertahankan: `header`, `nav`, `main`, `section`, `aside`, dan `footer`.

## Sebelum vs Sesudah Integrasi Framework

| Area | Sebelum Integrasi | Sesudah Integrasi Bootstrap 5 |
| --- | --- | --- |
| Layout | CSS Grid dan Flexbox manual | Bootstrap container, row, dan responsive columns |
| Navigasi | Menu statis tanpa toggle mobile | Navbar responsive dengan collapse hamburger |
| Portfolio | 3 kartu custom tanpa detail interaktif | 4 card Bootstrap dengan badge dan modal dialog |
| Formulir | Label dan input CSS custom | Floating labels, input group, select, feedback validasi |
| Tema | Variabel CSS dengan aturan layout panjang | Custom properties terpusat sebagai override Bootstrap |
| Responsivitas | Media query custom | Breakpoint Bootstrap `sm`, `md`, dan `lg` dengan tambahan CSS mobile |
| Ikon | Teks pada sebagian tombol | Bootstrap Icons melalui CDN |
>>>>>>> 0b2d6666961acec14c921ad3d7e0940dd7630301

## Teknologi yang Digunakan

<<<<<<< HEAD
- HTML5
- CSS3
<<<<<<< Updated upstream
- JavaScript
- Bootstrap 5
- Fetch API
- JSON
- localStorage
=======
- Google Fonts: Space Grotesk
- CSS Flexbox dan CSS Grid
- Responsive design dengan media query
=======
- HTML5 semantik
- CSS3 custom properties dan advanced selectors
- Bootstrap 5.3.3 CDN
- Bootstrap Icons 1.11.3
- Google Fonts: DM Sans dan Space Grotesk
>>>>>>> 0b2d6666961acec14c921ad3d7e0940dd7630301
>>>>>>> Stashed changes

## Struktur Folder

```text
.
├── assets/
│   └── profile.jpeg
├── css/
│   └── custom-style.css
├── data/
│   ├── profile.json
│   ├── projects.json
│   └── services.json
├── js/
│   ├── api-service.js
│   └── app.js
├── index.html
├── style.css
├── README.md
<<<<<<< Updated upstream
└── .vscode/
    └── settings.json
=======
└── .git/
>>>>>>> Stashed changes
```

## Fitur Utama

- Hero section dan navigasi website
- Profil akademik dan biografi
- Daftar skill yang diambil dari file JSON
- Portfolio proyek yang dapat difilter berdasarkan kategori
- Modal detail proyek
- Form kontak dan layanan
- Data order dikirim ke mock API JSONPlaceholder
- Penyimpanan riwayat order di localStorage
- Loading dan error state untuk pengelolaan data

## File Utama

### `index.html`
Berisi struktur utama halaman seperti Home, About, Skills, Portfolio, dan Contact.

### `style.css`
File stylesheet utama untuk tampilan keseluruhan website.

### `css/custom-style.css`
File tambahan yang digunakan untuk custom styling yang lebih spesifik untuk komponen UI.

### `data/profile.json`
Menampung data profil, biography, dan skills.

### `data/projects.json`
Menampung daftar proyek portfolio.

### `data/services.json`
Menampung daftar layanan yang tersedia.

### `js/api-service.js`
Mengatur proses pengambilan data JSON dan pengiriman order ke mock API.

### `js/app.js`
Berisi logika utama aplikasi, seperti render data, filter proyek, form handling, dan localStorage.

## Cara Menjalankan

<<<<<<< Updated upstream
1. Buka folder project di VS Code.
2. Jalankan file `index.html` dengan Live Server atau buka langsung di browser.
3. Pastikan browser mendukung Fetch API dan localStorage.
4. Jika ingin melihat data dinamis, pastikan file JSON dapat diakses melalui browser.
=======
<<<<<<< HEAD
1. Download atau clone repository ini.
2. Buka folder project di VS Code.
3. Buka file `index.html` di browser.
4. Jika ingin tampilan lebih nyaman saat pengembangan, gunakan ekstensi Live Server.

Project ini tidak memerlukan dependency tambahan karena dibuat menggunakan HTML dan CSS murni.
=======
1. Buka folder proyek di Visual Studio Code.
2. Jalankan `index.html` menggunakan Live Server atau browser modern.
3. Pastikan koneksi internet aktif agar Bootstrap CDN, Bootstrap Icons, dan Google Fonts termuat.
>>>>>>> Stashed changes

## Checklist Pengujian Manual
>>>>>>> 0b2d6666961acec14c921ad3d7e0940dd7630301

<<<<<<< Updated upstream
Project ini masih menggunakan mock API untuk simulasi pengiriman data. Artinya, data yang dikirim tidak disimpan secara permanen ke backend nyata, tetapi tetap dimodelkan seperti proses pengiriman data pada aplikasi web modern.

## Status Project

Project ini sudah memiliki struktur dasar yang sesuai dengan arsitektur portfolio berbasis data dan frontend dinamis.
=======
- Ubah ukuran browser ke mobile lalu uji tombol hamburger.
- Buka detail minimal dua project card dan tutup modalnya.
- Submit form kosong untuk melihat invalid feedback.
- Isi form lengkap untuk melihat valid feedback.
- Uji navigasi anchor pada desktop dan mobile.
- Periksa tidak ada overflow horizontal pada viewport mobile.

<<<<<<< HEAD
Formulir kontak pada project ini masih bersifat demonstrasi frontend. Data yang dikirim belum terhubung ke database atau backend karena form masih menggunakan `action="#"`.

## Identitas

- Nama: Swasti Maristella Sihombing
- NIM: 12S24030
- Program Studi: Sistem Informasi
- Institusi: Institut Teknologi Del
- Semester: 4

## Tujuan Project

Project ini dibuat untuk menampilkan kemampuan mahasiswa dalam membangun website portofolio yang modern, rapi, dan informatif, serta sebagai media dokumentasi perkembangan belajar di bidang teknologi informasi.
=======
## Publikasi GitHub Pages

```bash
git checkout -b week3-bootstrap
git add .
git commit -m "feat(week3): refactor portfolio to bootstrap 5 grid and modern components"
git push -u origin week3-bootstrap
```
>>>>>>> 0b2d6666961acec14c921ad3d7e0940dd7630301

Aktifkan GitHub Pages melalui **Settings > Pages**, pilih branch `week3-bootstrap` atau `main`, lalu klik **Save**. Tautan live demo dapat ditambahkan pada bagian ini setelah Pages aktif.
>>>>>>> Stashed changes
