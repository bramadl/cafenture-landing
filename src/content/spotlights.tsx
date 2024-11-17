export const spotlightCategories = [
  { name: "Mengenal Usaha Kedai Kopi" },
  { name: "Tentang Platform Rekomendasi" },
];

export const spotlightFilters = [
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

interface Spotlight {
  contents: { id: string; label: string }[];
  title: string;
  caption: string;
  content: React.ReactNode;
}

export const spotlight: Spotlight = {
  contents: [
    {
      id: "mengapa-laporan-keungantan-penting",
      label: "Mengapa Laporan Keuangan Penting?",
    },
    {
      id: "element-utama-dalam-laporan-keuangan-kedai-kopi",
      label: "Elemen Utama dalam Laporan Keuangan Kedai Kopi",
    },
    {
      id: "cara-memantau-kinerja-keuangan-kedai-kopi",
      label: "Cara Memantau Kinerja Keuangan Kedai Kopi",
    },
    { id: "tips-tambahan", label: "Tips Tambahan" },
    {
      id: "contoh-software-akuntansi-yang-bisa-digunakan",
      label: "Contoh Software Akuntansi yang Bisa Digunakan",
    },
  ],
  title: "Memahami dan Memanfaatkan Laporan Keuangan untuk Kedai Kopi",
  caption:
    'Laporan keuangan adalah "peta jalan" yang menunjukkan kesehatan finansial bisnis Anda. Bagi kedai kopi, laporan ini sangat penting untuk mengetahui apakah bisnis berjalan sesuai rencana, di mana letak masalah, dan peluang apa yang bisa dimanfaatkan.',
  content: (
    <div>
      <h2 id="mengapa-laporan-keungantan-penting">
        Mengapa Laporan Keuangan Penting?
      </h2>
      <ul>
        <li>
          <strong>Memahami Kinerja:</strong> Mengetahui apakah kedai kopi untung
          atau rugi, dan seberapa besar.
        </li>
        <li>
          <strong>Mengambil Keputusan:</strong> Membantu dalam pengambilan
          keputusan seperti menambah menu, melakukan promosi, atau bahkan
          menutup gerai.
        </li>
        <li>
          <strong>Mengelola Keuangan:</strong> Mengidentifikasi biaya yang tidak
          perlu dan menemukan cara untuk meningkatkan pendapatan.
        </li>
        <li>
          <strong>Mencegah Masalah:</strong> Mendeteksi masalah keuangan sejak
          dini sebelum menjadi lebih serius.
        </li>
      </ul>
      <h2 id="element-utama-dalam-laporan-keuangan-kedai-kopi">
        Elemen Utama dalam Laporan Keuangan Kedai Kopi
      </h2>
      <ul>
        <li>
          <strong>Laporan Laba Rugi:</strong> Menunjukkan pendapatan dan
          pengeluaran selama periode tertentu.
          <ol>
            <li>
              <strong>Pendapatan:</strong> Penjualan kopi, makanan, dan barang
              lainnya.
            </li>
            <li>
              <strong>Beban Pokok Penjualan:</strong> Biaya bahan baku (kopi,
              susu, roti, dll.).
            </li>
            <li>
              <strong>Beban Operasional:</strong> Sewa, gaji karyawan, utilitas,
              dll.
            </li>
            <li>
              <strong>Laba Bersih:</strong> Sisa pendapatan setelah dikurangi
              semua beban.
            </li>
          </ol>
        </li>
        <li>
          <strong>Laporan Neraca:</strong> Menunjukkan kondisi keuangan pada
          suatu titik waktu tertentu.
          <ol>
            <li>
              <strong>Aset:</strong> Harta yang dimiliki (kas, persediaan,
              peralatan, dll.).
            </li>
            <li>
              <strong>Utang:</strong> Kewajiban yang harus dibayar (utang bank,
              utang kepada pemasok, dll.).
            </li>
            <li>
              <strong>Modal:</strong> Selisih antara aset dan utang, mewakili
              kepemilikan pemilik.
            </li>
          </ol>
        </li>
        <li>
          <strong>Laporan Arus Kas:</strong> Menunjukkan aliran masuk dan keluar
          kas selama periode tertentu.
          <ol>
            <li>
              <strong>Aktivitas Operasi:</strong> Kas dari operasi bisnis
              sehari-hari.
            </li>
            <li>
              <strong>Aktivitas Investasi:</strong> Kas dari pembelian atau
              penjualan aset.
            </li>
            <li>
              <strong>Aktivitas Pendanaan:</strong> Kas dari aktivitas pendanaan
              seperti pinjaman atau pembayaran utang.
            </li>
          </ol>
        </li>
      </ul>
      <h2 id="cara-memantau-kinerja-keuangan-kedai-kopi">
        Cara Memantau Kinerja Keuangan Kedai Kopi
      </h2>
      <ul>
        <li>
          <strong>Catat Semua Transaksi:</strong> Gunakan software akuntansi
          atau aplikasi sederhana untuk mencatat setiap transaksi.
        </li>
        <li>
          <strong>Buat Laporan Secara Berkala:</strong> Buat laporan keuangan
          secara bulanan atau triwulanan untuk melihat tren.
        </li>
        <li>
          <strong>Bandingkan dengan Anggaran:</strong> Bandingkan hasil aktual
          dengan anggaran yang telah dibuat.
        </li>
        <li>
          <strong>Analisis Kinerja:</strong> Cari tahu penyebab fluktuasi
          pendapatan dan biaya.
        </li>
        <li>
          <strong>Lakukan Penyesuaian:</strong> Lakukan penyesuaian strategi
          bisnis jika diperlukan berdasarkan hasil analisis.
        </li>
      </ul>
      <h2 id="tips-tambahan">Tips Tambahan</h2>
      <ul>
        <li>
          <strong>Gunakan Software Akuntansi:</strong> Software akuntansi dapat
          memudahkan dalam pencatatan dan pembuatan laporan.
        </li>
        <li>
          <strong>Konsultasikan dengan Akuntan:</strong> Jika Anda tidak yakin,
          konsultasikan dengan akuntan untuk mendapatkan bantuan.
        </li>
        <li>
          <strong>Pantau Kinerja Kunci:</strong> Perhatikan metrik seperti
          margin laba kotor, perputaran persediaan, dan rasio utang.
        </li>
        <li>
          <strong>Lakukan Review Berkala:</strong> Lakukan review laporan
          keuangan secara berkala bersama tim Anda.
        </li>
      </ul>
      <h2 id="contoh-software-akuntansi-yang-bisa-digunakan">
        Contoh Software Akuntansi yang Bisa Digunakan
      </h2>
      <ul>
        <li>
          <strong>Kledo:</strong> Khusus UMKM, mudah digunakan, dan terintegrasi
          dengan berbagai fitur bisnis lainnya.
        </li>
        <li>
          <strong>QuickBooks:</strong> Salah satu software akuntansi terpopuler
          dengan fitur yang lengkap.
        </li>
        <li>
          <strong>Xero:</strong> Software berbasis cloud yang mudah diakses dari
          mana saja.
        </li>
      </ul>
      <p>
        Dengan memahami dan memanfaatkan laporan keuangan, Anda dapat mengambil
        keputusan yang lebih baik untuk kedai kopi Anda dan memastikan
        keberlanjutan bisnis.
      </p>
    </div>
  ),
};
