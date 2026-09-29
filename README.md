# QR Dispursip — Website QR Code Berlogo

## Isi paket
- `index.html` — halaman generator utama
- `panduan.html` — halaman panduan
- `about.html` — halaman tentang
- `assets/style.css` — desain
- `assets/app.js` — generator QR
- `assets/favicon.svg` — favicon
- `README.md` — panduan deployment

## Cara deploy
Website ini bersifat static dan dapat diunggah ke hampir semua hosting static.

1. Upload seluruh isi folder ke document root hosting.
2. Pastikan `index.html` berada di root.
3. Buka domain/subdomain.
4. Jika memakai HTTPS, aktifkan SSL pada hosting.

## Catatan
Library `qr-code-styling` dipanggil dari CDN `unpkg.com`. Jika hosting berada di jaringan yang memblokir CDN, library dapat disimpan lokal dan referensi script di `index.html` diarahkan ke file lokal.

## Branding
Header saat ini menggunakan ikon QR generik + teks DISPURSIP. Ganti `assets/favicon.svg` dan markup `.brand` bila tersedia logo resmi instansi.
