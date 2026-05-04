# UTS Pemrograman Mobile Lanjut - ResepKita

### Identitas Mahasiswa
*   **Nama:** [Muhammad Catur Wahyu Nugroho]
*   **NIM:** [2210501070]
* **Kelas:** [A]

---

###  Tema yang Dipilih
**ResepKita**: Aplikasi katalog resep makanan global yang mengintegrasikan API dari TheMealDB. Aplikasi ini dirancang untuk memudahkan pengguna mencari ide masakan, melihat instruksi detail, dan menyimpan resep favorit secara lokal.

---

###  Tech Stack + Versi
*   **Framework:** React Native (Expo Managed Workflow) ~50.0.0
*   **Navigation:** React Navigation v6 (Stack & Bottom Tabs)
*   **State Management:** Context API & useReducer (Native Hooks)
*   **Icons:** Expo Vector Icons (Ionicons)
*   **HTTP Client:** Fetch API

---

###  Cara Install & Run
1.  **Clone Repository**
    ```bash
    git clone https://github.com[username_kamu]/ResepKita.git
    cd ResepKita
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Jalankan Project**
    ```bash
    npx expo start
    ```
    *Gunakan aplikasi **Expo Go** di HP untuk scan QR Code yang muncul di terminal.*


| Home Screen | Detail Screen | Search Screen | Favorites | About |
| :---: | :---: | :---: | :---: | :---: |
| ![Home](./screenshots/home.png) | ![Detail](./screenshots/detail.png) | ![Search](./screenshots/search.png) | ![Fav](./screenshots/favorites.png) | ![About](./screenshots/about.png) |


###  Justifikasi State Management
Aplikasi ini menggunakan **Context API** dan **useReducer** sebagai solusi State Management.
**Justifikasi:**
1.  **Global Accessibility:** Data "Favorites" harus bisa diakses dari layar Detail (untuk menambah/menghapus) dan layar Favorites (untuk menampilkan daftar). Context API mencegah *Prop Drilling*.
2.  **Clean Code:** Dengan `useReducer`, logika manipulasi data dipisahkan dari komponen UI ke dalam fungsi *reducer* tersendiri, membuat kode lebih terstruktur dan mudah di-*debug*.
3.  **Performance:** Untuk skala aplikasi UTS ini, Context API sangat efisien karena tidak memerlukan library eksternal tambahan seperti Redux atau Zustand.

---

###  Daftar Referensi
1.  Dokumentasi Resmi React Native: [reactnative.dev](https://reactnative.dev)
2.  Dokumentasi Expo: [docs.expo.dev](https://expo.dev)
3.  TheMealDB API Documentation: [://themealdb.com](https://www.://themealdb.com)
4.  React Navigation Guide: [reactnavigation.org](https://reactnavigation.org)

---

###  Refleksi
Dalam mengerjakan proyek UTS ResepKita ini, saya mendapatkan pemahaman mendalam mengenai siklus hidup aplikasi React Native. Tantangan utama yang saya hadapi adalah sinkronisasi state antara layar detail dan layar favorit. Melalui implementasi Context API, saya belajar bagaimana mengelola aliran data global secara efisien tanpa memperumit struktur komponen.

Selain teknis state management, saya juga belajar pentingnya memberikan feedback visual kepada pengguna melalui *loading indicators* dan *error handling*. Saat API lambat merespon atau pencarian tidak ditemukan, aplikasi tetap harus memberikan informasi yang jelas. Fitur validasi pencarian minimal 3 karakter mengajarkan saya untuk mengoptimalkan penggunaan API dan meningkatkan pengalaman pengguna (UX). Secara keseluruhan, proyek ini berhasil mengintegrasikan konsep navigasi, pengelolaan data, dan konsumsi API publik menjadi satu aplikasi yang fungsional dan responsif.

---
