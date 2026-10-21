# North Pole — Toy Factory Pinball

Game web pinball bertema pabrik mainan Natal. Ilustrasi arena digambar khusus melalui Canvas, dengan enam hadiah dummy, susunan pin acak, simulasi pantulan, dan musik sintetis Web Audio.

## Menjalankan

Memerlukan Python 3; tidak ada dependensi npm atau API key.

```sh
npm run dev
```

Server berjalan pada port 3000. Tahan tombol Shoot atau Space untuk mengisi tenaga, lalu lepaskan untuk melontarkan bola dari jalur pegas. Tenaga memengaruhi arah masuk bola. Tiga bumper bergerak dan gerak lambat di dekat hadiah menambah variasi pantulan. Arena memakai efek kedalaman 2.5D melalui Canvas/CSS, bukan mesin fisika 3D. Musik dimulai pada interaksi Shoot pertama; tombol Sound menyalakan/mematikan audio. Slider Volume mengatur musik dan efek suara (default 85%), dengan kompresor untuk membatasi puncak audio. Acak posisi pin tersedia saat bola tidak bergerak dan tombol Shoot tidak ditahan. Setiap tembakan juga menghasilkan susunan pin baru.

`npm test` memeriksa sintaks JavaScript dan menjalankan 100 simulasi tembakan untuk memvalidasi penyelesaian permainan, batas arena, hitungan hadiah, serta tombol Shoot yang kembali aktif. Font Google bersifat opsional; font sistem digunakan jika offline.

Hadiah bersifat demonstrasi, belum memiliki backend, inventori, atau distribusi hadiah riil. Simulasi menggunakan fisika lokal di browser dan bukan mekanisme undian aman.
