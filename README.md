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

## Teknologi

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Fetch API
- JSON
- localStorage

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
└── .vscode/
    └── settings.json
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

1. Buka folder project di VS Code.
2. Jalankan file `index.html` dengan Live Server atau buka langsung di browser.
3. Pastikan browser mendukung Fetch API dan localStorage.
4. Jika ingin melihat data dinamis, pastikan file JSON dapat diakses melalui browser.

## Catatan

Project ini masih menggunakan mock API untuk simulasi pengiriman data. Artinya, data yang dikirim tidak disimpan secara permanen ke backend nyata, tetapi tetap dimodelkan seperti proses pengiriman data pada aplikasi web modern.

## Status Project

Project ini sudah memiliki struktur dasar yang sesuai dengan arsitektur portfolio berbasis data dan frontend dinamis.