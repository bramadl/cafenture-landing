import { Separator } from "@cafenture/components/ui/separator";
import { UserManualsAndSupportsUrl } from "../menus";

export const ManualAndSupport = {
  url: UserManualsAndSupportsUrl.url,
  contents: [
    { id: "pelaporan-masalah", label: "Pelaporan Masalah" },
    { id: "pengaturan-sistem", label: "Pengaturan Sistem" },
    { id: "informasi-kontak", label: "Informasi Kontak" },
  ],
  content: (
    <>
      <h2 id="pelaporan-masalah">Pelaporan Masalah</h2>
      <p>
        Panduan cara melaporkan bug atau masalah teknis. Anda dapat melaporkan
        bug atau masalah teknis melalui salah satu cara berikut:
      </p>

      <ol>
        <li>
          Formulir Pelaporan Online:
          <p>
            <a className="text-primary font-medium" href="" target="_blank">
              Kunjungi halaman
            </a>{" "}
            berikut untuk mengisi formulir pelaporan.
          </p>
          <p>Isi formulir dengan lengkap dan jelas, termasuk:</p>
          <ul>
            <li>
              <strong>Deskripsi masalah</strong>: Jelaskan secara detail apa
              yang terjadi, langkah-langkah yang Anda lakukan sebelum masalah
              muncul, dan pesan error jika ada.
            </li>
            <li>
              <strong>Tangkapan layar</strong>: Lampirkan tangkapan layar yang
              relevan untuk mempermudah kami dalam memahami masalah.
            </li>
            <li>
              <strong>Informasi perangkat</strong>: Sebutkan jenis perangkat
              (komputer, smartphone, tablet), sistem operasi, dan versi aplikasi
              yang Anda gunakan.
            </li>
            <li>
              <strong>Informasi akun</strong>: Jika masalah terkait dengan akun
              Anda, sertakan nama pengguna atau email yang terdaftar.
            </li>
          </ul>
        </li>
        <li>
          Email:
          <p>
            Kirimkan email ke alamat berikut:{" "}
            <span className="text-primary font-medium">cs@cafenture.com</span>
          </p>
          <p>
            Dalam email, sertakan informasi yang sama seperti yang diminta pada
            formulir pelaporan online.
          </p>
        </li>
      </ol>

      <h3>Informasi yang Perlu Disertakan</h3>
      <p>
        Agar kami dapat segera menyelesaikan masalah Anda, mohon sertakan
        informasi berikut:
      </p>

      <ol>
        <li>
          <strong>Judul laporan yang jelas:</strong> Contoh:{" "}
          <strong>Masalah login pada aplikasi</strong>
        </li>
        <li>
          <strong>Langkah-langkah untuk mereproduksi masalah:</strong> Jelaskan
          secara rinci langkah-langkah yang perlu dilakukan untuk membuat
          masalah tersebut muncul kembali.
        </li>
        <li>
          <strong>Hasil yang diharapkan:</strong> Jelaskan apa yang seharusnya
          terjadi.
        </li>
        <li>
          <strong>Hasil yang sebenarnya:</strong> Jelaskan apa yang terjadi
          sebenarnya.
        </li>
      </ol>

      <h4>Contoh Laporan Bug #1</h4>
      <ol>
        <li>
          <strong>Judul:</strong> Tidak dapat mengakses fitur &quot;Unduh
          Dokumen&quot;
        </li>
        <li>
          <strong>Deskripsi:</strong> Saya mencoba mengunduh dokumen dengan
          format PDF, tetapi muncul pesan error &quot;Gagal mengunduh
          dokumen&quot;. Saya telah mencoba beberapa kali dengan dokumen yang
          berbeda, namun hasilnya tetap sama.
        </li>
        <li>
          Langkah-langkah:
          <ul>
            <li>Login ke akun saya.</li>
            <li>Membuka halaman dokumen.</li>
            <li>Mengklik tombol &quot;Unduh&quot;.</li>
            <li>
              <strong>Hasil yang diharapkan:</strong> Dokumen PDF akan terunduh.
            </li>
            <li>
              <strong>Hasil yang sebenarnya:</strong> Muncul pesan error
              &quot;Gagal mengunduh dokumen&quot;.
            </li>
            <li>
              <strong>Informasi perangkat:</strong> Windows 10, Chrome versi 95,
              aplikasi versi 2.0
            </li>
          </ul>
        </li>
      </ol>

      <h4>Contoh Laporan Bug #2</h4>
      <ol>
        <li>
          <strong>Judul:</strong> Tidak dapat mengakses fitur &quot;Unduh
          Dokumen&quot;
        </li>
        <li>
          <strong>Deskripsi:</strong> Saya mencoba mengunduh dokumen dengan
          format PDF, tetapi muncul pesan error &quot;Gagal mengunduh
          dokumen&quot;. Saya telah mencoba beberapa kali dengan dokumen yang
          berbeda, namun hasilnya tetap sama.
        </li>
        <li>
          Langkah-langkah:
          <ul>
            <li>Login ke akun saya.</li>
            <li>Membuka halaman dokumen.</li>
            <li>Mengklik tombol &quot;Unduh&quot;.</li>
            <li>
              <strong>Hasil yang diharapkan:</strong> Dokumen PDF akan terunduh.
            </li>
            <li>
              <strong>Hasil yang sebenarnya:</strong> Muncul pesan error
              &quot;Gagal mengunduh dokumen&quot;.
            </li>
            <li>
              <strong>Informasi perangkat:</strong> Windows 10, Chrome versi 95,
              aplikasi versi 2.0
            </li>
          </ul>
        </li>
      </ol>

      <h3>Tips Melaporkan Bug</h3>
      <ol>
        <li>
          Semakin detail semakin baik: Semakin jelas dan detail informasi yang
          Anda berikan, semakin mudah bagi kami untuk memahami dan menyelesaikan
          masalah.
        </li>
        <li>
          Gunakan bahasa yang mudah dipahami: Hindari menggunakan istilah teknis
          yang terlalu rumit.
        </li>
        <li>
          Lampirkan bukti: Tangkapan layar, video, atau log error dapat sangat
          membantu dalam proses investigasi.
        </li>
        <li>
          Berikan umpan balik yang konstruktif: Selain melaporkan masalah, Anda
          juga bisa memberikan saran atau masukan untuk perbaikan di masa
          mendatang.
        </li>
      </ol>

      <Separator />

      <h2 id="pengaturan-sistem">Pengaturan Sistem</h2>
      <p>
        Panduan troubleshooting terkait pengaturan perangkat atau aplikasi
        (misalnya, konfigurasi jaringan, izin akses, dan lainnya).
      </p>
      <p>
        Jika Anda mengalami masalah terkait pengaturan perangkat atau aplikasi,
        seperti masalah koneksi jaringan, izin akses, atau konfigurasi lainnya,
        panduan ini akan membantu Anda menemukan solusi.
      </p>

      <h3>Langkah-langkah Umum Pemecahan Masalah</h3>
      <ol>
        <li>
          <strong>Restart Perangkat:</strong> Langkah paling sederhana namun
          sering efektif. Memulai ulang perangkat dapat menyelesaikan masalah
          sementara yang disebabkan oleh gangguan kecil pada sistem.
        </li>
        <li>
          <strong>Periksa Koneksi Internet:</strong> Pastikan perangkat Anda
          terhubung ke jaringan Wi-Fi atau data seluler dengan stabil. Coba buka
          aplikasi lain yang membutuhkan koneksi internet untuk memastikan
          masalahnya bukan pada jaringan.
        </li>
        <li>
          <strong>Perbarui Sistem Operasi dan Aplikasi:</strong> Pastikan sistem
          operasi dan aplikasi yang Anda gunakan sudah diperbarui ke versi
          terbaru. Pembaruan seringkali berisi perbaikan bug dan peningkatan
          kinerja.
        </li>
        <li>
          <strong>Hapus Cache dan Data Aplikasi:</strong> Cache dan data
          aplikasi yang menumpuk dapat menyebabkan masalah kinerja. Cobalah
          hapus cache dan data aplikasi yang bermasalah.
        </li>
        <li>
          <strong>Pastikan Izin Akses Sudah Benar:</strong> Periksa pengaturan
          izin akses aplikasi. Pastikan aplikasi memiliki izin yang diperlukan
          untuk berfungsi dengan baik.
        </li>
        <li>
          <strong>Konfigurasi Ulang Pengaturan:</strong> Jika masalah masih
          berlanjut, coba atur ulang pengaturan aplikasi ke pengaturan default.
        </li>
      </ol>

      <h3>Masalah Umum dan Solusinya</h3>
      <ol>
        <li>
          <strong>Koneksi Jaringan:</strong>
          <ul>
            <li>Periksa pengaturan Wi-Fi atau data seluler.</li>
            <li>Coba lupakan jaringan Wi-Fi lalu sambungkan kembali.</li>
            <li>Periksa pengaturan proxy.</li>
            <li>Restart modem atau router.</li>
          </ul>
        </li>
        <li>
          <strong>Izin Akses:</strong>
          <ul>
            <li>Periksa pengaturan izin aplikasi di pengaturan perangkat.</li>
            <li>
              Berikan izin yang diperlukan untuk aplikasi agar dapat berfungsi
              dengan baik.
            </li>
            <li>
              <strong>Konfigurasi Aplikasi:</strong>
              <ul>
                <li>
                  Periksa pengaturan aplikasi, seperti pengaturan notifikasi,
                  sinkronisasi, dan akun.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h3>Contoh Masalah dan Solusi</h3>
      <ol>
        <li>
          <p>Aplikasi tidak merespons.</p>
          <p>
            <strong>Solusi:</strong> Tutup aplikasi, buka pengelola tugas, paksa
            berhenti aplikasi, lalu buka kembali aplikasi.
          </p>
        </li>
        <li>
          <p>Koneksi Wi-Fi terus putus.</p>
          <p>
            <strong>Solusi:</strong> Lupakan jaringan Wi-Fi, restart router,
            lalu sambungkan kembali ke jaringan Wi-Fi.
          </p>
        </li>
      </ol>

      <p>
        Jika Anda masih mengalami masalah setelah mencoba langkah-langkah di
        atas, silakan berikan informasi lebih detail mengenai masalah yang Anda
        hadapi, seperti:
      </p>
      <ol>
        <li>
          Perangkat apa yang Anda gunakan? (misalnya, smartphone, komputer)
        </li>
        <li>
          Sistem operasi apa yang Anda gunakan? (misalnya, Android, iOS,
          Windows)
        </li>
        <li>Aplikasi apa yang bermasalah?</li>
        <li>Apa yang telah Anda coba lakukan untuk mengatasi masalah ini?</li>
      </ol>

      <p>
        Dengan informasi yang lengkap, kami akan dapat memberikan bantuan yang
        lebih spesifik.
      </p>

      <Separator />

      <h2 id="informasi-kontak">Informasi Kontak</h2>
      <p>
        Daftar kontak untuk dukungan langsung, seperti email, telepon, atau live
        chat.
      </p>

      <ol>
        <li>
          <strong>Email:</strong>{" "}
          <span className="text-primary font-medium">cs@cafenture.com</span>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <span className="text-primary font-medium">+62 852 1638 8926</span>
        </li>
      </ol>
    </>
  ),
};
