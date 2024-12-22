import { RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import { SiCodeigniter, SiExpress, SiLaravel, SiLivewire, SiMongodb, SiMysql, SiNuxtdotjs } from "react-icons/si";

export const projectData = () => {
  return [
    {
      slug: "sim-klinik",
      name: "SIM Klinik",
      category: "laravel / codeigniter",
      image: "/projects/ssc-1.png",
      images: [
        { image: "/projects/ssc-1.png" },
        { image: "/projects/ssc-2.png" },
        { image: "/projects/ssc-3.png" },
        { image: "/projects/ssc-4.png" },
        { image: "/projects/ssc-5.png" },
        { image: "/projects/ssc-6.png" },
        { image: "/projects/ssc-7.png" },
        { image: "/projects/ssc-8.png" },
      ],
      techstack: [
        {
          name: "laravel",
          icon: <SiLaravel />,
        },
        {
          name: "livewire",
          icon: <SiLivewire />,
        },
        {
          name: "vue.js",
          icon: <RiVuejsFill />,
        },
        {
          name: "mySQL",
          icon: <SiMysql />,
        },
      ],
      description:
        "Sistem informasi untuk mengelola operasional klinik mulai dari pencatatan pasien hingga laporan keuangan",
      descriptionFull:
        "SIM Klinik adalah solusi digital terpadu yang memudahkan pengelolaan klinik dengan fitur pencatatan pasien, manajemen pelayanan, dan rekam medis elektronik. Dengan sistem ini, klinik dapat mengatur inventaris obat, penghitungan komisi staff operasional, dan laporan keuangan secara efisien. SIM Klinik dirancang untuk meningkatkan produktivitas tenaga medis, mengoptimalkan pelayanan, dan memastikan operasional klinik berjalan lancar dengan data yang aman dan terintegrasi.",
      link: "/",
      github: "/",
    },
    {
      slug: "e-spmi",
      name: "E-SPMI",
      category: "laravel / codeigniter",
      image: "/projects/spmi-1.png",
      images: [
        { image: "/projects/spmi-1.png" },
        { image: "/projects/spmi-2.png" },
        { image: "/projects/spmi-3.png" },
        { image: "/projects/spmi-4.png" },
        { image: "/projects/spmi-5.png" },
        { image: "/projects/spmi-6.png" },
        { image: "/projects/spmi-7.png" },
      ],
      techstack: [
        {
          name: "laravel",
          icon: <SiLaravel />,
        },
        {
          name: "livewire",
          icon: <SiLivewire />,
        },
        {
          name: "mySQL",
          icon: <SiMysql />,
        },
      ],
      description: "Platform digital untuk memudahkan pengelolaan mutu pendidikan di perguruan tinggi",
      descriptionFull:
        "E-SPMI adalah platform digital yang dirancang untuk membantu perguruan tinggi dalam mengimplementasikan Sistem Penjaminan Mutu Internal (SPMI). Dengan E-SPMI, proses perencanaan, pelaksanaan, evaluasi, dan pengendalian mutu akademik dan non-akademik menjadi lebih terstruktur dan efisien. Platform ini menyediakan fitur pelaporan yang komprehensif, memastikan kepatuhan terhadap standar pendidikan nasional, dan mendukung peningkatan kualitas secara berkelanjutan.",
      link: "/",
      github: "/",
    },
    {
      slug: "sim-audit",
      name: "SIM Audit",
      category: "laravel / codeigniter",
      image: "/projects/simaudit-6.png",
      images: [
        { image: "/projects/simaudit-1.png" },
        { image: "/projects/simaudit-2.png" },
        { image: "/projects/simaudit-3.png" },
        { image: "/projects/simaudit-4.png" },
        { image: "/projects/simaudit-5.png" },
        { image: "/projects/simaudit-6.png" },
        { image: "/projects/simaudit-7.png" },
        { image: "/projects/simaudit-8.png" },
      ],
      techstack: [
        {
          name: "laravel",
          icon: <SiLaravel />,
        },
        {
          name: "vue.js",
          icon: <RiVuejsFill />,
        },
        {
          name: "mySQL",
          icon: <SiMysql />,
        },
      ],
      description: "Sistem informasi untuk memudahkan proses audit di organisasi dari perencanaan hingga pelaporan",
      descriptionFull:
        "SIM Audit adalah sistem digital yang dirancang untuk mempermudah dan meningkatkan proses audit di organisasi. Platform ini menyediakan fitur lengkap untuk perencanaan, pelaksanaan, dan pelaporan audit, memungkinkan pengelolaan yang efisien. SIM Audit mendukung berbagai standar audit yang dapat diatur langsung dalam database, memudahkan pengelolaan audit yang terstruktur dan sesuai dengan berbagai regulasi. Dengan SIM Audit, organisasi dapat memastikan kepatuhan terhadap standar yang berlaku dan meningkatkan kualitas serta transparansi proses audit. Sistem ini mendukung peningkatan kinerja dan memastikan bahwa semua standar mutu dan kepatuhan dapat dipenuhi dengan mudah.",
      link: "/",
      github: "/",
    },
    {
      slug: "furniture-store",
      name: "Furniture Store",
      category: "laravel / codeigniter",
      stakeholder: "Herdina Metatech Sinergi",
      image: "/projects/ferinterior-1.png",
      images: [
        { image: "/projects/ferinterior-1.png" },
        { image: "/projects/ferinterior-2.png" },
        { image: "/projects/ferinterior-3.png" },
        { image: "/projects/ferinterior-4.png" },
        { image: "/projects/ferinterior-5.png" },
        { image: "/projects/ferinterior-6.png" },
        { image: "/projects/ferinterior-7.png" },
        { image: "/projects/ferinterior-8.png" },
        { image: "/projects/ferinterior-9.png" },
        { image: "/projects/ferinterior-10.png" },
      ],
      techstack: [
        {
          name: "laravel",
          icon: <SiLaravel />,
        },
        {
          name: "livewire",
          icon: <SiLivewire />,
        },
        {
          name: "mySQL",
          icon: <SiMysql />,
        },
      ],
      description: "Furniture Store adalah sistem digital yang dirancang untuk mempermudah manajemen toko furnitur",
      descriptionFull:
        "Furniture Store adalah sistem digital yang dirancang untuk mempermudah dan meningkatkan manajemen toko furnitur secara menyeluruh. Platform ini menyediakan fitur lengkap untuk pengelolaan inventaris, pemrosesan pesanan, hingga pelaporan penjualan, memungkinkan operasional yang lebih efisien. SIM Furniture Store mendukung berbagai jenis furnitur dan kategori produk yang dapat diatur langsung dalam database, memudahkan pengelolaan stok yang terorganisir dan sesuai dengan kebutuhan pasar.",
      link: "/",
      github: "/",
    },
    {
      slug: "event-app",
      name: "Event App",
      category: "react.js",
      stakeholder: "Personal",
      image: "/projects/event-1.png",
      images: [
        { image: "/projects/event-1.png" },
        { image: "/projects/event-2.png" },
        { image: "/projects/event-3.png" },
        { image: "/projects/event-4.png" },
      ],
      techstack: [
        {
          name: "react.js",
          icon: <RiReactjsFill />,
        },
        {
          name: "express.js",
          icon: <SiExpress />,
        },
        {
          name: "mongodb",
          icon: <SiMongodb />,
        },
      ],
      description: "Event App adalah aplikasi digital yang dirancang untuk mempermudah penjualan tiket event",
      descriptionFull:
        "Event App adalah aplikasi digital yang dirancang untuk mempermudah pengelolaan dan penjualan tiket untuk berbagai acara. Platform ini menyediakan fitur lengkap untuk pembuatan, pengelolaan, dan penjualan tiket acara, memungkinkan pengalaman pengguna yang lebih efisien dan terorganisir. Event Ticketing App mendukung berbagai jenis acara, mulai dari konser, seminar, hingga festival, yang dapat diatur langsung dalam database, memudahkan manajemen tiket yang terstruktur dan sesuai dengan kebutuhan acara.",
      link: "/",
      github: "/",
    },
    {
      slug: "movie-list",
      name: "Movie List",
      category: "vue.js",
      stakeholder: "Personal",
      image: "/projects/airing-movies-1.png",
      images: [
        { image: "/projects/airing-movies-1.png" },
        { image: "/projects/airing-movies-2.png" },
        { image: "/projects/airing-movies-3.png" },
      ],
      techstack: [
        {
          name: "nuxt.js",
          icon: <SiNuxtdotjs />,
        },
        {
          name: "mySQL",
          icon: <SiMysql />,
        },
      ],
      description: "Movie List App adalah aplikasi sederhana yang dirancang untuk memudahkan pengguna mencari film",
      descriptionFull:
        "Movie List App adalah aplikasi sederhana yang dirancang untuk memudahkan pengguna mencari dan melihat detail film. Platform ini menyediakan fitur pencarian cepat untuk menemukan film berdasarkan judul, genre, atau tahun rilis. Movie List App memungkinkan pengguna untuk melihat informasi lengkap tentang setiap film, termasuk sinopsis, pemeran, dan rating. Dengan Movie List App, pengguna dapat dengan mudah menemukan film yang ingin ditonton tanpa perlu mengelola daftar panjang atau fungsionalitas yang rumit. Aplikasi ini menawarkan pengalaman pencarian yang cepat dan intuitif, memberikan detail film yang jelas dan lengkap hanya dalam beberapa klik. Movie List App memberikan cara yang praktis untuk mengeksplorasi film tanpa kesulitan, cocok bagi pengguna yang mencari pengalaman simpel namun informatif!",
      link: "/",
      github: "/",
    },
    {
      slug: "dp3",
      name: "DP3",
      category: "laravel / codeigniter",
      stakeholder: "Personal",
      image: "/projects/dp3-1.png",
      images: [
        { image: "/projects/dp3-1.png" },
        { image: "/projects/dp3-2.png" },
        { image: "/projects/dp3-3.png" },
        { image: "/projects/dp3-4.png" },
        { image: "/projects/dp3-5.png" },
        { image: "/projects/dp3-6.png" },
        { image: "/projects/dp3-7.png" },
        { image: "/projects/dp3-8.png" },
        { image: "/projects/dp3-9.png" },
        { image: "/projects/dp3-10.png" },
      ],
      techstack: [
        {
          name: "codeigniter",
          icon: <SiCodeigniter />,
        },
      ],
      description: "DP3 merupakan platform digital yang dirancang untuk mempermudah proses pengajuan pensiun",
      descriptionFull:
        "Sistem DP3 Pengajuan Pensiun (Asuransi Perusahaan) adalah platform digital yang dirancang untuk mempermudah dan meningkatkan proses pengajuan pensiun dan klaim asuransi bagi karyawan perusahaan. Dengan sistem ini, proses administrasi pensiun menjadi lebih terstruktur dan efisien, meminimalisir kesalahan manusia, dan mempercepat proses persetujuan. Platform ini menyediakan fitur untuk perencanaan, pelaksanaan, dan pengelolaan pengajuan pensiun yang terintegrasi dengan sistem asuransi perusahaan, serta memudahkan pengelolaan data karyawan yang sedang memasuki masa pensiun.",
      link: "/",
      github: "/",
    },
  ];
};
