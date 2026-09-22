# Academic Portfolio - Week 3

Website portofolio akademik **Swasti Maristella Sihombing** yang direfactor dari tugas Minggu 2 untuk memenuhi praktikum Minggu 3: Bootstrap 5.3, CSS specificity, advanced selectors, dan modernisasi form.

## Identitas

| Data | Keterangan |
| --- | --- |
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

## Teknologi

- HTML5 semantik
- CSS3 custom properties dan advanced selectors
- Bootstrap 5.3.3 CDN
- Bootstrap Icons 1.11.3
- Google Fonts: DM Sans dan Space Grotesk

## Struktur Folder

```text
.
├── assets/
│   └── profile.jpeg
├── index.html
├── style.css
└── README.md
```

## Cara Menjalankan

1. Buka folder proyek di Visual Studio Code.
2. Jalankan `index.html` menggunakan Live Server atau browser modern.
3. Pastikan koneksi internet aktif agar Bootstrap CDN, Bootstrap Icons, dan Google Fonts termuat.

## Checklist Pengujian Manual

- Ubah ukuran browser ke mobile lalu uji tombol hamburger.
- Buka detail minimal dua project card dan tutup modalnya.
- Submit form kosong untuk melihat invalid feedback.
- Isi form lengkap untuk melihat valid feedback.
- Uji navigasi anchor pada desktop dan mobile.
- Periksa tidak ada overflow horizontal pada viewport mobile.

## Publikasi GitHub Pages

```bash
git checkout -b week3-bootstrap
git add .
git commit -m "feat(week3): refactor portfolio to bootstrap 5 grid and modern components"
git push -u origin week3-bootstrap
```

Aktifkan GitHub Pages melalui **Settings > Pages**, pilih branch `week3-bootstrap` atau `main`, lalu klik **Save**. Tautan live demo dapat ditambahkan pada bagian ini setelah Pages aktif.