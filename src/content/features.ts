import { type Icon } from "@phosphor-icons/react";
import {
  BellRinging,
  BookOpenText,
  Brain,
  Compass,
  DiamondsFour,
  Gift,
  Heart,
  Image,
  Layout,
  Lightbulb,
  MagnifyingGlass,
  Megaphone,
  ShieldCheck,
  Sliders,
  Stack,
  Star,
  Tag,
  User,
} from "@phosphor-icons/react/dist/ssr";

export interface Feature {
  icon: Icon;
  name: string;
  description: string;
}

export const AccountManagementFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    name: "Pengaturan Keamanan",
    description: "Kontrol penuh terhadap keamanan akun, data, dan akses.",
  },
  {
    icon: BellRinging,
    name: "Pengaturan Pemberitahuan",
    description: "Tentukan jenis dan saluran pemberitahuan yang diinginkan.",
  },
  {
    icon: User,
    name: "Pengaturan Profil",
    description: "Kelola informasi untuk penyesuaian sistem rekomendasi.",
  },
  {
    icon: Heart,
    name: "Wishlist dan Koleksi",
    description: "Simpan dan kelola koleksi kedai kopi sewaktu-waktu.",
  },
  {
    icon: Gift,
    name: "Poin dan Hadiah",
    description: "Kumpulkan dan tukarkan poin dengan hadiah menarik.",
  },
  {
    icon: DiamondsFour,
    name: "Pengaturan Preferensi",
    description: "Kalibrasi ulang algoritma rekomendasi kapanpun.",
  },
];

export const CoffeeShopDiscoveryFeatures: Feature[] = [
  {
    icon: Megaphone,
    name: "Informasi Promosi",
    description: "Informasi promosi terlengkap, terbaru, dan terpercaya.",
  },
  {
    icon: Lightbulb,
    name: "Rekomendasi Cerdas",
    description: "Rekomendasi akurat yang menyesuaikan preferensi.",
  },
  {
    icon: Stack,
    name: "Kurasi Cerdas",
    description: "Kumpulan kedai kopi tematik diperbaharui secara berkala.",
  },
  {
    icon: Sliders,
    name: "Filter Pencarian",
    description: "Kontrol bagaimana hasil pencarian dipersonal.",
  },
  {
    icon: Compass,
    name: "Jelajahi Koleksi",
    description: "Koleksi dari komunitas sebagai referensi tempat terbaik.",
  },
  {
    icon: MagnifyingGlass,
    name: "Pencarian Cerdas",
    description: "Pencarian dengan dukungan bahasa natural AI.",
  },
];

export const CoffeeShopInformationFeatures: Feature[] = [
  {
    icon: Brain,
    name: "Nilai Pencocokan Cerdas",
    description: "Penilaian kedai kopi berdasarkan preferensi Anda.",
  },
  {
    icon: Layout,
    name: "Tema dan Fasilitas",
    description: "Tema dan fasilitas yang disediakan oleh kedai kopi.",
  },
  {
    icon: BookOpenText,
    name: "Informasi Esensial",
    description: "Nama, peta dan alamat, jam buka, saluran komunikasi, dll.",
  },
  {
    icon: Tag,
    name: "Penawaran dan Promosi",
    description: "Daftar promosi terlengkap yang ada di kedai kopi.",
  },
  {
    icon: Image,
    name: "Galeri dan 360° Tour",
    description:
      "Jelajahi interior dan eksterior secara interaktif melalu gambar.",
  },
  {
    icon: Star,
    name: "Ulasan Kedai Kopi",
    description: "Penilaian yang terpercaya dan dimoderasi secara profesional.",
  },
];
