export const categories = [
  { name: "Mengenal Usaha Kedai Kopi" },
  { name: "Tentang Platform Rekomendasi" },
];

export const filters = [
  {
    group: "Berdasarkan Nama",
    items: [
      {
        text: "Filter Berdasarkan Nama: Atas Ke Bawah",
        label: "Atas Ke Bawah",
        value: "name:a-z",
      },
      {
        text: "Filter Berdasarkan Nama: Bawah ke Atas",
        label: "Bawah Ke Atas",
        value: "name:z-a",
      },
    ],
  },
  {
    group: "Berdasarkan Waktu",
    items: [
      {
        text: "Filter Berdasarkan Waktu: Paling Baru",
        label: "Paling Baru",
        value: "time:latest",
      },
      {
        text: "Filter Berdasarkan Waktu: Paling Lama",
        label: "Paling Lama",
        value: "time:oldest",
      },
    ],
  },
];
