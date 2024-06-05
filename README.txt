-------------------------------------------

Nama            : Barbara Neanake Ajiesti  
Program Studi   : S1 Teknologi Informasi  
Angkatan        : 2022  
NIM             : 22/494495/TK/54328  
Kelas           : Teknologi Basis Data B  

-------------------------------------------

1. Latar Belakang Proyek
Proyek ini merupakan bagian dari tugas kedua dalam mata kuliah Teknologi Basis Data B, yang bertujuan untuk mengembangkan sebuah API untuk mengelola database dari sebuah toko buku fiksi bernama Good Reading Bookstore. 
Dalam tugas pertama, kami telah membuat database ini. Sekarang, melalui tugas kedua ini, saya akan membangun API untuk mengakses dan mengelola data dalam database tersebut.

2. Deskripsi Proyek
API ini dibuat menggunakan Node.js dan Express sebagai framework utama, serta PostgreSQL sebagai sistem manajemen basis datanya. 
API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data penerbit (Publisher) di dalam database. 
Berikut adalah deskripsi singkat dari masing-masing fitur yang diimplementasikan:

    A. Mengambil Daftar Semua 'Publisher':
    - Endpoint: `GET /api/v1/Publisher`
    - Mengambil semua data penerbit yang ada dalam database.

    B. Mengambil Penerbit Berdasarkan ID Penerbit atau 'Publisher_ID':
    - Endpoint: `GET /api/v1/Publisher/:id`
    - Mengambil data penerbit berdasarkan ID tertentu.

    C. Menambahkan Penerbit Baru:
    - Endpoint: `POST /api/v1/Publisher`
    - Menambahkan penerbit baru ke dalam database.

    D. Memperbarui Data Penerbit:
    - Endpoint: `PUT /api/v1/Publisher/:id`
    - Memperbarui data penerbit yang sudah ada berdasarkan ID.

    E. Menghapus Penerbit:
    - Endpoint: `DELETE /api/v1/Publisher/:id`
    - Menghapus penerbit dari database berdasarkan ID.

3. Tools Teknologi yang saya gunakan
    - Node.js untuk menjalankan JavaScript di server-side.
    - Express, Framework web untuk Node.js yang saya gunakan untuk membangun API.
    - PostgreSQL sebagai sistem manajemen basis data yang saya gunakan untuk menyimpan data penerbit.
    - Postman app tools yang saya gunakan untuk menguji API.

4. Panduan Singkat Cara Menggunakan API

    A. Menjalankan Server:
    - Pastikan Node.js dan PostgreSQL sudah terinstal di sistem.
    - Jalankan perintah `npm install` untuk menginstal semua dependensi yang diperlukan.
    - Jalankan server dengan perintah `node server.js` (saya full menggunakan vscode untuk ini).
    - Server akan berjalan di port 3000.

    B. Mengakses API:
    - Gunakan Postman atau alat lain untuk mengirim permintaan HTTP ke server.
    - Gunakan endpoint yang sudah disebutkan di atas untuk melakukan operasi CRUD.

5. Informasi Tambahan
    Jika ada pertanyaan, masukan, kritik, atau apapun, silakan hubungi saya melalui 
        - email: [barbaraneanakeajiesti@mail.ugm.ac.id]
    Silakan akses Drive Utama Project saya melalui bit.ly/FinalProjectTBD_BarbaraNeanake