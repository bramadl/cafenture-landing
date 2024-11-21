import { type Icon } from "@phosphor-icons/react";
import { type StaticImageData } from "next/image";
import {
  BellRinging,
  BookOpenText,
  Brain,
  Coffee,
  Compass,
  DiamondsFour,
  Gift,
  Heart,
  Image,
  Layout,
  Lightbulb,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  ShieldCheck,
  Stack,
  Star,
  User,
} from "@phosphor-icons/react/dist/ssr";

import PengaturanKeamanan from "./assets/features/account-management/pengaturan-keamanan.png";
import PengaturanPemberitahuan from "./assets/features/account-management/pengaturan-pemberitahuan.png";
import PengaturanProfil from "./assets/features/account-management/pengaturan-profil.png";
import PengaturanPreferensi from "./assets/features/account-management/pengaturan-preferensi.png";
import PoinDanHadiah from "./assets/features/account-management/poin-dan-hadiah.png";
import WishlistDanKoleksi from "./assets/features/account-management/wishlist-dan-koleksi.png";

import InformasiPromosi from "./assets/features/coffee-shop-discovery/informasi-promosi.png";
import JelajahiKoleksi from "./assets/features/coffee-shop-discovery/jelajahi-koleksi.png";
import KurasiCerdas from "./assets/features/coffee-shop-discovery/kurasi-cerdas.png";
import PetaDanNavigasi from "./assets/features/coffee-shop-discovery/peta-dan-navigasi.png";
import PencarianCerdas from "./assets/features/coffee-shop-discovery/pencarian-cerdas.png";
import RekomendasiCerdas from "./assets/features/coffee-shop-discovery/rekomendasi-cerdas.png";

import DaftarMenuTerlengkap from "./assets/features/coffee-shop-information/daftar-menu-terlengkap.png";
import GaleriDan360Tour from "./assets/features/coffee-shop-information/galeri-dan-360-tour.png";
import InformasiEsensial from "./assets/features/coffee-shop-information/informasi-esensial.png";
import NilaiPencocokanCerdas from "./assets/features/coffee-shop-information/nilai-pencocokan-cerdas.png";
import UlasanKedaiKopi from "./assets/features/coffee-shop-information/ulasan-kedai-kopi.png";
import TemaDanFasilitasLengkap from "./assets/features/coffee-shop-information/tema-dan-fasilitas-lengkap.png";

export interface Feature {
  icon: Icon;
  name: string;
  description: string;
  details?: string;
  keyPoints?: string[];
  image: StaticImageData;
}

export const AccountManagementFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    name: "Pengaturan Keamanan",
    description: "Kontrol penuh terhadap keamanan akun, data, dan akses.",
    details:
      "Pengguna dapat mengontol penuh keamanan akun seperti mengaktifkan hubungan akun Google, Two-Way Verification, hingga perubahan password secara berkala.",
    keyPoints: [
      "Lebih mudah mengakses aplikasi dengan menghubungkan akun Google.",
      "Perkuat tingkat keamanan akun dengan menggunakan metode autentikasi 2FA.",
      "Perbaharui kata sandi sewaktu-waktu.",
    ],
    image: PengaturanKeamanan,
  },
  {
    icon: BellRinging,
    name: "Pengaturan Pemberitahuan",
    description: "Tentukan jenis dan saluran pemberitahuan yang diinginkan.",
    details:
      "Pengguna dapat memilih saluran komunikasi yang mereka inginkan untuk menerima notifikasi serta menentukan jenis berita yang diizinkan untuk dikirimkan.",
    keyPoints: [
      "Terima pemberitahuan melalui Email atau In-App.",
      "Atur jenis pemberitahuan yang diinginkan: Promosi Terbaru, Notifikasi Rekomendasi, hingga Akses Ekslusif.",
      "Tentukan berapa waktu sekali pemberitahuan dikirimkan melalui saluran yang dipilih.",
    ],
    image: PengaturanPemberitahuan,
  },
  {
    icon: User,
    name: "Pengaturan Profil",
    description: "Kelola informasi untuk penyesuaian sistem rekomendasi.",
    details:
      "Pengguna dapat mengisi informasi profil mereka yang berguna untuk interaksi dalam aplikasi dan membuat preferensi kedai kopi akan lebih tepat berdasarkan alamat pengguna.",
    keyPoints: [
      "Ubah informasi pribadi kapanpun dimanapun.",
      "Sesuaikan alamat untuk mendapatkan rekomendasi yang lebih personal.",
      "Fondasi dasar bagaimana kartu membership didesain.",
    ],
    image: PengaturanProfil,
  },
  {
    icon: Heart,
    name: "Wishlist dan Koleksi",
    description: "Simpan dan kelola koleksi kedai kopi sewaktu-waktu.",
    details:
      "Pengguna dapat menambah atau menghapus kedai kopi dan produk dari daftar wishlist atau koleksi mereka untuk akses cepat ke informasi kedai kopi favorit.",
    keyPoints: [
      "Simpan informasi kedai kopi untuk dikunjungi kembali.",
      "Kelola koleksi kedai kopi rancangan pribadi dalam tema tertentu.",
      "Bagikan koleksi Anda ke komunitas agar pengguna lain dapat melihat.",
    ],
    image: WishlistDanKoleksi,
  },
  {
    icon: Gift,
    name: "Poin dan Hadiah",
    description: "Kumpulkan dan tukarkan poin dengan hadiah menarik.",
    details:
      "Pengguna dapat mengumpulkan poin dengan menyelesaikan berbagai misi dan dapat menukarkan poin yang terkumpul untuk mendapatkan hadiah yang tersedia.",
    keyPoints: [
      "Kumpulkan poin dengan melakukan aktivitas seru di Kedai Kopi.",
      "Tukarkan poin dengan hadiah menarik seperti promosi, merchandise, hingga akses eksklusif lainnya.",
      "Tingkatkan status pribadi dengan mengumpulkan poin sebanyak-banyaknya.",
    ],
    image: PoinDanHadiah,
  },
  {
    icon: DiamondsFour,
    name: "Pengaturan Preferensi",
    description: "Kalibrasi ulang algoritma rekomendasi kapanpun.",
    details:
      "Pengguna dapat mengatur preferensi kedai kopi pribadi mereka dari waktu ke waktu. Menawarkan fleksibilitas dalam penyesuaian ulang hasil rekomendasi.",
    keyPoints: [
      "Kontrol penuh preferensi terhadap kedai kopi dari tema hingga menu yang diinginkan.",
      "Perbaharui dan kelola preferensi kapanpun diperlukan.",
      "Kalibrasi ulang hasil rekomendasi dan kurasi dengan mengatur preferensi.",
    ],
    image: PengaturanPreferensi,
  },
];

export const CoffeeShopDiscoveryFeatures: Feature[] = [
  {
    icon: Megaphone,
    name: "Informasi Promosi",
    description: "Informasi promosi terlengkap, terbaru, dan terpercaya.",
    details:
      "Pengguna dapat melihat promosi eksklusif dan non-ekslusif yang hanya tersedia untuk pengguna aplikasi, seperti diskon atau penawaran khusus dari kedai kopi.",
    keyPoints: [
      "Promosi eksklusif hanya tersedia untuk pengguna yang bergabung keanggotaan eksklusif",
      "Pengguna akan menerima notifikasi untuk promosi eksklusif jika mereka mengaktifkan notifikasi promosi.",
      "Promosi yang diutamakan adalah promosi terbaru dari kedai kopi berdasarkan popularitas kedai kopi per-interval.",
    ],
    image: InformasiPromosi,
  },
  {
    icon: Lightbulb,
    name: "Rekomendasi Cerdas",
    description: "Rekomendasi akurat yang menyesuaikan preferensi.",
    details:
      "Pengguna mendapatkan rekomendasi kedai kopi hingga menu atau aktivitas pada kedai kopi berdasarkan preferensi pribadi.",
    keyPoints: [
      "Rekomendasi akan disesuaikan dengan preferensi pengguna yang dikelola pada akun mereka.",
      "Rekomendasi diperbarui secara berkala dan berdasarkan aktivitas pengguna dalam melakukan tindakan.",
      "Hasil rekomendasi tidak terbatas untuk para pengguna eksklusif yang bergabung keanggotaan.",
    ],
    image: RekomendasiCerdas,
  },
  {
    icon: Stack,
    name: "Kurasi Cerdas",
    description: "Kumpulan kedai kopi tematik diperbaharui secara berkala.",
    details:
      'Pengguna dapat menjelajahi daftar yang telah dikurasi oleh aplikasi, seperti "daftar terbaik", "paling populer", "lokasi terdekat", atau lainnya untuk kedai kopi tertentu.',
    keyPoints: [
      "Daftar kurasi diperbarui secara berkala menyesuaikan preferensi, nilai kecocokan, dan popularitas kedai.",
      "Pengguna dapat mengontrol hasil kurasi lebih akurat melalui filter canggih.",
      "Kurasi dirancang menyesuaikan aktivitas terakhir pengguna untuk hasil yang lebih akurat.",
    ],
    image: KurasiCerdas,
  },
  {
    icon: MapPin,
    name: "Peta dan Navigasi",
    description: "Jelajahi kedai kopi dalam visualisasi peta.",
    details:
      "Pengguna dapat menggunakan peta untuk mencari kedai kopi di sekitar lokasi mereka atau di area tertentu.",
    keyPoints: [
      "Atur izin akses lokasi agar fitur peta dapat memberikan rekomendasi lokasi terdekat.",
      "Pengguna dapat mencari kedai kopi berdasarkan kategori (misalnya: kopi lokal, kopi internasional) atau filter tambahan.",
      "Visualisasi kedai kopi yang paling cocok dengan preferensi berdasarkan warna titik pada distribusi kedai kopi.",
    ],
    image: PetaDanNavigasi,
  },
  {
    icon: Compass,
    name: "Jelajahi Koleksi",
    description: "Koleksi dari komunitas sebagai referensi tempat terbaik.",
    details:
      "Pengguna dapat menjelajahi kedai kopi melalui koleksi yang dibuat oleh komunitas dan pengguna platform secara online.",
    keyPoints: [
      "Koleksi yang ditampilkan menyesuaikan preferensi pengguna.",
      "Koleksi yang ditampilkan diutamakan berdasarkan popularitas dan pembaruan terbaru.",
      "Pengguna hanya dapat menambahkan item dari koleksi ini ke wishlist atau koleksi pribadi mereka.",
    ],
    image: JelajahiKoleksi,
  },
  {
    icon: MagnifyingGlass,
    name: "Pencarian Cerdas",
    description: "Pencarian dengan dukungan bahasa natural AI.",
    details:
      "Pengguna dapat mencari kedai kopi tertentu serta produk atau menu menggunakan kata kunci yang diinginkan.",
    keyPoints: [
      "Pengguna dapat menggunakan filter pencarian untuk hasil yang lebih spesifik, seperti lokasi atau rating.",
      "Kata kunci fleksibel yang mendukung bahasa natural dengan bantuan AI.",
      "Hasil tidak terbatas pada kedai kopi tetapi meliputi bacaan artikel, menu, hingga promosi.",
    ],
    image: PencarianCerdas,
  },
];

export const CoffeeShopInformationFeatures: Feature[] = [
  {
    icon: Brain,
    name: "Nilai Pencocokan Cerdas",
    description: "Penilaian kedai kopi berdasarkan preferensi Anda.",
    details:
      "Fitur ini memungkinkan pengguna melihat skor kecocokan kedai kopi yang dihitung berdasarkan preferensi pengguna dan atribut dari kedai kopi tersebut.",
    keyPoints: [
      "Skor kecocokan dihitung menggunakan data preferensi pengguna dengan attributes yang dimiliki kedai kopi.",
      "Sistem menghitung skor dalam rentang 0-10 yang menunjukkan seberapa sesuai kedai dengan preferensi pengguna.",
      "Skor ini diperbarui secara otomatis jika pengguna mengubah preferensi atau kedai kopi memperbarui data mereka.",
    ],
    image: NilaiPencocokanCerdas,
  },
  {
    icon: BookOpenText,
    name: "Informasi Esensial",
    description: "Nama, peta dan alamat, jam buka, saluran komunikasi, dll.",
    details:
      "Pengguna dapat mengakses informasi terperinci tentang kedai kopi, termasuk alamat, jam operasional, sosial media, dan lain sebagainya.",
    keyPoints: [
      "Informasi kedai dikurasi dan dikelola secara terpusat oleh Cafenture.",
      "Lengkap meliputi alamat dan navigasi, jam buka perhari, kontak sosial medai, hingga promosi yang tersedia.",
      "Mencakup informasi website resmi, bukan quick links.",
    ],
    image: InformasiEsensial,
  },
  {
    icon: Layout,
    name: "Tema dan Fasilitas Lengkap",
    description: "Tema dan fasilitas yang disediakan oleh kedai kopi.",
    details:
      "Temukan kedai kopi yang sesuai dengan suasana hati Anda. Kami menghadirkan informasi lengkap mengenai tema dan fasilitas untuk pengalaman terbaik.",
    keyPoints: [
      "Jelajahi berbagai kedai kopi dengan tema-tema menarik, mulai dari klasik, modern, hingga industrial.",
      "Cari kedai dengan Wi-Fi, ruang kerja, atau area outdoor yang sesuai kebutuhan Anda.",
      "Temukan kedai berdasarkan fasilitas seperti parkir, area anak, atau pet-friendly.",
    ],
    image: TemaDanFasilitasLengkap,
  },
  {
    icon: Coffee,
    name: "Daftar Menu Terlengkap",
    description: "Daftar menu terlengkap yang ada di kedai kopi.",
    details:
      "Telusuri menu favorit Anda di berbagai kedai kopi. Temukan rekomendasi makanan dan minuman terbaik tanpa kebingungan.",
    keyPoints: [
      "Unduh dan akses daftar menu lengkap untuk berbagai kedai kopi, termasuk harga dan deskripsi.",
      "Cari menu favorit Anda berdasarkan kategori, seperti kopi spesial, makanan ringan, atau dessert.",
      "Dapatkan saran menu yang sesuai dengan preferensi rasa Anda.",
    ],
    image: DaftarMenuTerlengkap,
  },
  {
    icon: Image,
    name: "Galeri dan 360° Tour",
    description:
      "Jelajahi interior dan eksterior secara interaktif melalu gambar.",
    details:
      "Pengalaman immersive dengan melihat kedai kopi sebelum mengunjungi. Lihat foto-foto berkualitas tinggi dan nikmati tur virtual 360°.",
    keyPoints: [
      "Jelajahi foto interior, eksterior, dan suasana dari setiap kedai.",
      "Nikmati atmosfer kedai secara langsung melalui fitur tur virtual.",
      "Selalu dapatkan tampilan terkini dengan galeri yang terus diperbarui.",
    ],
    image: GaleriDan360Tour,
  },
  {
    icon: Star,
    name: "Ulasan Kedai Kopi",
    description: "Penilaian yang terpercaya dan dimoderasi secara profesional.",
    details:
      "Ketahui pengalaman orang lain sebelum Anda memutuskan. Baca dan bagikan ulasan untuk membantu sesama pencinta kopi.",
    keyPoints: [
      "Baca pengalaman autentik dari pelanggan sebelumnya.",
      "Temukan kedai dengan penilaian terbaik berdasarkan kualitas kopi, suasana, dan layanan.",
      "Tulis ulasan Anda sendiri dan bantu kedai favorit Anda dikenal lebih luas.",
    ],
    image: UlasanKedaiKopi,
  },
];
