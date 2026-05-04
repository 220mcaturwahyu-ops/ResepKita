# ResepKita
Aplikasi Resep dengan React Native &amp; Expo
UTS Pemrograman Mobile Lanjut - ResepKita 🍳Aplikasi ResepKita adalah platform katalog resep makanan berbasis mobile yang dibangun menggunakan React Native dan Expo. Aplikasi ini mengintegrasikan data resep dari TheMealDB API untuk memudahkan pengguna mencari inspirasi masakan.👤 Identitas MahasiswaNama: [Muhammad Catur Wahyu Nugroho]NIM: [2210501070]Kelas: [A]Mata Kuliah: Pemrograman Mobile Lanjut Fitur UtamaHome: Menampilkan daftar resep terbaru (kategori Seafood) dengan fitur Pull-to-Refresh.Search: Pencarian resep berdasarkan kata kunci dengan validasi minimal 3 karakter.Detail Resep: Menampilkan instruksi memasak lengkap dan gambar berkualitas tinggi.Favorites: Simpan resep favorit ke dalam daftar lokal menggunakan State Management.About: Informasi detail pengembang dan aplikasi.🛠️ Teknologi yang DigunakanFramework: React Native (Expo Managed Workflow)Navigation: React Navigation (Stack & Bottom Tabs)State Management: Context API + useReducerData Fetching: Fetch APIIcons: Ionicons (Expo Vector Icons)📂 Struktur Foldertextsrc/
├── components/   # Komponen reusable (Card, Loading)
├── context/      # Global state (Favorites)
├── navigation/   # Konfigurasi Stack & Tab Navigation
└── screens/      # Tampilan utama (Home, Detail, Search, dll)
