# ResepKita
Aplikasi Resep dengan React Native &amp; Expo
UTS Pemrograman Mobile Lanjut - ResepKita 🍳Aplikasi ResepKita adalah platform katalog resep makanan berbasis mobile yang dibangun menggunakan React Native dan Expo. Aplikasi ini mengintegrasikan data resep dari TheMealDB API untuk memudahkan pengguna mencari inspirasi masakan.👤 Identitas MahasiswaNama: [Muhammad Catur Wahyu Nugroho]NIM: [2210501070]Kelas: [A]Mata Kuliah: Pemrograman Mobile Lanjut Fitur UtamaHome: Menampilkan daftar resep terbaru (kategori Seafood) dengan fitur Pull-to-Refresh.Search: Pencarian resep berdasarkan kata kunci dengan validasi minimal 3 karakter.Detail Resep: Menampilkan instruksi memasak lengkap dan gambar berkualitas tinggi.Favorites: Simpan resep favorit ke dalam daftar lokal menggunakan State Management.About: Informasi detail pengembang dan aplikasi.🛠️ Teknologi yang DigunakanFramework: React Native (Expo Managed Workflow)Navigation: React Navigation (Stack & Bottom Tabs)State Management: Context API + useReducerData Fetching: Fetch APIIcons: Ionicons (Expo Vector Icons)📂 Struktur Foldertextsrc/
├── components/   # Komponen reusable (Card, Loading)
├── context/      # Global state (Favorites)
├── navigation/   # Konfigurasi Stack & Tab Navigation
└── screens/      # Tampilan utama (Home, Detail, Search, dll)
Gunakan kode dengan hati-hati.💻 Cara Menjalankan ProjectClone Repository:bashgit clone https://github.com
cd ResepKita-UTS
Gunakan kode dengan hati-hati.Install Dependencies:bashnpm install
Gunakan kode dengan hati-hati.Jalankan Aplikasi:bashnpx expo start
Gunakan kode dengan hati-hati.Buka di Perangkat:Scan QR Code menggunakan aplikasi Expo Go (Android/iOS).Atau tekan a untuk emulator Android atau i untuk simulator iOS.📝 Catatan Implementasi UTSState Management: Menggunakan RecipeContext untuk mengelola data favorit sehingga sinkron antara layar Detail dan Favorites.Validasi Input: Pada layar Search, tombol cari hanya akan berfungsi jika input pengguna mencapai minimal 3 karakter.Handling API: Dilengkapi dengan Loading Indicator saat pengambilan data dan penanganan jika data kosong
