import { Separator } from "@cafenture/components/ui/separator";
import { UserQuestionsUrl } from "../menus";

export const FrequentlyAskedQuestions = {
  url: UserQuestionsUrl.url,
  contents: [
    { id: "akun-dan-keamanan", label: "Akun dan Keamanan" },
    { id: "penggunaan-aplikasi", label: "Penggunaan Aplikasi" },
    { id: "pembayaran-dan-keanggotaan", label: "Pembayaran dan Keanggotaan" },
    { id: "dukungan-teknis", label: "Dukungan Teknis" },
    { id: "pemilik-kedai-kopi", label: "Pemilik Kedai Kopi" },
  ],
  content: (
    <>
      <h2 id="akun-dan-keamanan">Akun dan Keamanan</h2>

      <h3>Cara Membuat Akun: Panduan Lengkap</h3>
      <p>
        Membuat akun adalah langkah pertama untuk mengakses berbagai layanan
        Cafenture.
      </p>

      <h4>Langkah-langkah Umum Membuat Akun:</h4>
      <p>
        Akses halaman pendaftaran: Cari tombol &apos;Daftar&apos;, &apos;Sign
        Up&apos;, atau &apos;Buat Akun&apos; di halaman utama situs atau
        aplikasi Cafenture.
      </p>

      <ol>
        <li>
          <strong>Isi formulir pendaftaran:</strong> Anda akan diminta untuk
          mengisi informasi seperti:
        </li>
        <li>
          <strong>Nama lengkap:</strong> Sesuai Identitas: Ketika mengisi kolom
          nama lengkap, pastikan Anda menuliskan nama sesuai dengan identitas
          resmi Anda, seperti yang tertera pada KTP, SIM, atau paspor.
        </li>
        <li>
          <strong>Nomor Handphone:</strong> Nomor Aktif, pastikan nomor
          handphone yang Anda tuliskan aktif dan dapat dihubungi. Nomor ini
          biasanya digunakan untuk verifikasi akun, menerima notifikasi, atau
          komunikasi penting lainnya.
        </li>
        <li>
          <strong>Alamat email:</strong> Digunakan untuk verifikasi akun,
          menerima notifikasi, dan komunikasi terkait layanan.
        </li>
        <li>
          <strong>Kata sandi:</strong> Buat kata sandi yang kuat, kombinasi
          huruf besar, huruf kecil, angka, dan simbol.
        </li>
        <li>
          <strong>Verifikasi akun:</strong> Setelah mengisi formulir, Anda
          mungkin perlu memverifikasi akun melalui email atau nomor telepon.
          Caranya adalah dengan mengklik tautan verifikasi yang dikirimkan atau
          memasukkan kode verifikasi yang dikirimkan melalui SMS.
        </li>
        <li>
          <strong>Selesai:</strong> Setelah verifikasi, akun Anda sudah siap
          digunakan.
        </li>
      </ol>

      <h4>Tips Membuat Akun yang Aman:</h4>
      <ol>
        <li>
          <strong>Kata sandi yang kuat:</strong> Hindari menggunakan kata sandi
          yang mudah ditebak seperti tanggal lahir atau nama hewan peliharaan.
          Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol.
        </li>
        <li>
          <strong>Autentikasi dua faktor (2FA):</strong> Aktifkan fitur 2FA
          untuk menambah lapisan keamanan pada akun Anda. Dengan 2FA, Anda akan
          diminta memasukkan kode verifikasi tambahan selain kata sandi saat
          login.
        </li>
        <li>
          <strong>Periksa kebijakan privasi:</strong> Sebelum membuat akun, baca
          kebijakan privasi platform tersebut untuk memahami bagaimana data
          pribadi Anda akan digunakan.
        </li>
        <li>
          <strong>Hindari menggunakan kata sandi yang sama:</strong> Gunakan
          kata sandi yang berbeda untuk setiap akun.
        </li>
        <li>
          <strong>Waspada terhadap phishing:</strong> Jangan klik tautan atau
          membuka email yang mencurigakan, karena bisa jadi upaya phishing untuk
          mencuri informasi pribadi Anda.
        </li>
      </ol>

      <h3>Apa yang harus dilakukan jika lupa kata sandi?</h3>
      <p>
        Lupa kata sandi? Jangan panik! Ini adalah hal yang sangat umum terjadi.
        Berikut beberapa langkah yang bisa Anda coba untuk mengatasi masalah
        ini:
      </p>

      <ol>
        <li>
          Gunakan Fitur <strong>Lupa Kata Sandi</strong>
          <ul>
            <li>
              <strong>Cari opsi:</strong> Cari opsi &apos;Lupa Kata Sandi&apos;
              atau &apos;Forgot Password&apos;. Biasanya, Anda akan menemukannya
              di halaman login, di bawah kolom kata sandi.
            </li>
            <li>
              <strong>Ikuti petunjuk:</strong> Setelah mengklik opsi tersebut,
              Anda akan diminta untuk memasukkan alamat email atau nama pengguna
              yang terdaftar.
            </li>
            <li>
              <strong>Verifikasi identitas:</strong> Sistem akan mengirimkan
              tautan atau kode verifikasi ke alamat email atau nomor telepon
              yang terdaftar. Gunakan tautan atau kode tersebut untuk mereset
              kata sandi Anda.
            </li>
          </ul>
        </li>
        <li>
          Cek Email Pemulihan
          <ul>
            <li>
              <strong>Cari email:</strong> Periksa kotak masuk email Anda,
              termasuk folder spam atau promosi. Anda mungkin menemukan email
              dari layanan yang berisi tautan untuk mereset kata sandi.
            </li>
            <li>
              <strong>Ikuti tautan:</strong> Klik tautan yang diberikan dalam
              email untuk mengubah kata sandi Anda.
            </li>
          </ul>
        </li>
        <li>
          Hubungi Layanan Pelanggan
          <ul>
            <li>
              <strong>Cari kontak:</strong> Jika Anda tidak berhasil mereset
              kata sandi menggunakan metode di atas, hubungi layanan pelanggan
              Cafenture <span className="text-primary font-medium">disini</span>
              .
            </li>
            <li>
              <strong>Siapkan informasi:</strong> Siapkan informasi yang
              diperlukan seperti alamat email, nama pengguna, atau pertanyaan
              keamanan yang Anda daftarkan saat membuat akun.
            </li>
          </ul>
        </li>
      </ol>

      <h3>Tips Tambahan:</h3>
      <ol>
        <li>
          <strong>Buat kata sandi yang kuat:</strong> Gunakan kombinasi huruf
          besar, huruf kecil, angka, dan simbol. Hindari menggunakan kata sandi
          yang mudah ditebak seperti tanggal lahir atau nama hewan peliharaan.
        </li>
        <li>
          <strong>Aktifkan autentikasi dua faktor (2FA):</strong> Fitur ini
          menambahkan lapisan keamanan ekstra pada akun Anda dengan meminta kode
          verifikasi tambahan saat login.
        </li>
        <li>
          <strong>Jangan bagikan kata sandi:</strong> Jaga kerahasiaan kata
          sandi Anda. Jangan berikan kepada siapa pun, bahkan orang terdekat
          sekalipun.
        </li>
      </ol>

      <p>
        <strong>Penting:</strong> Jika Anda mencurigai akun Anda telah diretas,
        segera ubah kata sandi dan aktifkan 2FA.
      </p>

      <Separator />

      <h2 id="penggunaan-aplikasi">Penggunaan Aplikasi</h2>
      <p>Penjelasan sedikit</p>

      <Separator />

      <h2 id="pembayaran-dan-keanggotaan">Pembayaran dan Keanggotaan</h2>
      <p>Penjelasan sedikit</p>

      <Separator />

      <h2 id="dukungan-teknis">Dukungan Teknis</h2>
      <p>Penjelasan sedikit</p>

      <Separator />

      <h2 id="pemilik-kedai-kopi">Pemilik Kedai Kopi</h2>
      <p>Penjelasan sedikit</p>

      <Separator />
    </>
  ),
};
