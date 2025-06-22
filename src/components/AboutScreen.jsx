const AboutScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-md space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          Tentang Book Store
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Book Store</strong> adalah toko buku online yang berdedikasi
          untuk menyediakan berbagai jenis buku berkualitas bagi pembaca di
          seluruh Indonesia. Kami percaya bahwa membaca bukan hanya kegiatan,
          tetapi gaya hidup dan investasi masa depan.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Book Store menyediakan koleksi lengkap mulai dari buku fiksi,
          non-fiksi, buku anak-anak, buku pelajaran, hingga buku pengembangan
          diri. Semua buku yang kami jual dipilih secara selektif untuk
          memastikan kualitas dan relevansi dengan kebutuhan pembaca modern.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Kami berdiri dengan visi:{" "}
          <em>
            "Menjadikan budaya membaca sebagai bagian dari kehidupan sehari-hari
            masyarakat Indonesia."
          </em>
          Didukung oleh tim yang mencintai literasi, kami terus berinovasi untuk
          memberikan pengalaman belanja buku yang mudah, cepat, dan
          menyenangkan.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Terima kasih telah menjadi bagian dari perjalanan kami. Mari sebarkan
          semangat membaca dan terus bertumbuh bersama Book Store!
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
