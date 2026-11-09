# e-HADIR v1.0
Sistem web kehadiran asrama: ASPURA/ASPURI, PAGI/MALAM, senarai pelajar, import Excel dan laporan cetak A4.

## Pemasangan
1. Cipta projek Supabase. Buka SQL Editor dan jalankan `schema.sql`.
2. Cipta pengguna di Authentication > Users. Masukkan rekod setiap pengguna dalam jadual `profiles` menggunakan UUID akaun. Contoh SQL untuk pentadbir pertama ada di bawah `schema.sql`.
3. Buka `supabase.js` dan gantikan `SUPABASE_URL` dan `SUPABASE_ANON_KEY` dengan Project URL dan **publishable/anon key**. Jangan gunakan service_role key.
4. Muat naik fail dalam folder ini ke GitHub Pages atau pelayan HTTPS statik. Buka `index.html` melalui alamat web.
5. Log masuk menggunakan emel dan kata laluan akaun yang didaftarkan.

## Import Excel
Gunakan fail Excel dengan tajuk lajur `NAMA PELAJAR`, `TINGKATAN`, `ASRAMA`. Nilai asrama ASPURA atau ASPURI. Tingkatan 1 hingga 6. Import memaparkan pratonton dan mengabaikan rekod berganda berdasarkan gabungan nama/tingkatan/asrama. Pelajar bernama sama dalam kumpulan sama memerlukan semakan manual.

## Nota
- Sistem memerlukan sambungan internet dan konfigurasi Supabase sebelum boleh digunakan.
- Warden/guru dengan `group_access=ASPURA` atau `ASPURI` hanya boleh mengakses kumpulan berkenaan. Pentadbir dengan `ALL` boleh mengakses kedua-duanya.
- Laporan menunjukkan pelajar aktif pada masa laporan dijana. Untuk laporan sejarah yang tepat selepas pelajar dinyahaktifkan atau berpindah, perlu ditambah fungsi snapshot keahlian mengikut tarikh.
- Fungsi cetak menggunakan dialog cetak pelayar; pilih 'Save as PDF' untuk menghasilkan PDF.
- Import Excel memerlukan capaian CDN untuk pustaka XLSX.
