# North Pole — Toy Factory Pinball

Game web pinball bertema pabrik mainan Natal. Ilustrasi arena digambar khusus melalui Canvas, dengan enam hadiah dummy, susunan pin acak, simulasi pantulan, dan musik sintetis Web Audio.

## Menjalankan

Memerlukan Python 3; tidak ada dependensi npm atau API key.

```sh
npm run dev
```

Server berjalan pada port 3000. Klik Shoot atau tekan Space untuk bermain. Musik dimulai pada interaksi Shoot pertama; tombol Sound menyalakan/mematikan audio. Acak posisi pin tersedia saat bola tidak bergerak. Setiap tembakan juga menghasilkan susunan pin baru.

`npm test` memeriksa sintaks JavaScript dan menjalankan 100 simulasi tembakan untuk memvalidasi penyelesaian permainan, batas arena, hitungan hadiah, serta tombol Shoot yang kembali aktif. Font Google bersifat opsional; font sistem digunakan jika offline.

Hadiah bersifat demonstrasi, belum memiliki backend, inventori, atau distribusi hadiah riil. Simulasi menggunakan fisika lokal di browser dan bukan mekanisme undian aman.
