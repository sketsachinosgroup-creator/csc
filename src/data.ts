import { Service, Product, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'deep-clean',
    name: 'Deep Clean (Cuci Menyeluruh)',
    description: 'Pembersihan intensif untuk seluruh bagian sepatu mulai dari bagian luar (upper), dalam (insole & lining), tali, hingga sol bawah (outsole). Pilihan terbaik untuk mengembalikan kebersihan maksimal.',
    price: 55000,
    duration: '2-3 Hari',
    category: 'cleaning',
    icon: 'Sparkles',
    popular: true,
    benefits: [
      'Cuci seluruh bagian luar & dalam',
      'Pembersihan detail tali sepatu & insole',
      'Pemberian antibakteri & parfum premium',
      'Treatment pengeringan khusus (anti-jamur)'
    ]
  },
  {
    id: 'fast-clean',
    name: 'Fast Clean (Cuci Cepat)',
    description: 'Pembersihan instan berdurasi singkat yang memfokuskan pada bagian luar sepatu (upper & midsole) yang berdebu atau kotor ringan. Selesai dan siap dipakai dalam waktu singkat.',
    price: 35000,
    duration: '30-45 Menit',
    category: 'cleaning',
    icon: 'Zap',
    benefits: [
      'Pembersihan cepat bagian atas (upper)',
      'Pembersihan midsole dari noda ringan',
      'Pemberian parfum penyegar sepatu',
      'Bisa ditunggu langsung di workshop'
    ]
  },
  {
    id: 'unyellowing',
    name: 'Unyellowing (Sol Whitening)',
    description: 'Treatment khusus menggunakan formula kimia aman untuk menghilangkan noda kuning akibat oksidasi pada sol karet putih (midsole/outsole) sepatu Anda. Membuat sol putih kembali cerah.',
    price: 65000,
    duration: '3-4 Hari',
    category: 'special',
    icon: 'Sun',
    benefits: [
      'Menghilangkan kuning oksidasi sol karet',
      'Formula khusus aman tanpa merusak sol',
      'Sudah termasuk layanan Deep Clean gratis',
      'Melindungi sol dari penuaan dini'
    ]
  },
  {
    id: 'repaint-specialist',
    name: 'Repaint / Recolor (Cat Ulang)',
    description: 'Restorasi warna penuh untuk sepatu yang pudar atau kusam. Tim kami menggunakan cat premium impor khusus sesuai bahan sepatu (canvas, suede, leather) agar elastis, awet, dan tidak luntur.',
    price: 120000,
    duration: '4-5 Hari',
    category: 'repaint',
    icon: 'Paintbrush',
    benefits: [
      'Pengecatan ulang rapi & merata',
      'Bisa ganti warna baru (custom color)',
      'Menggunakan cat standar pabrik premium',
      'Sudah termasuk pembersihan Deep Clean'
    ]
  },
  {
    id: 'suede-care',
    name: 'Premium Suede Care',
    description: 'Bahan suede memerlukan keahlian ekstra. Kami menggunakan sikat bulu kuda super lembut dan sabun khusus suede untuk mengangkat kotoran, melembabkan kembali serat beludru, dan mencegah pengerasan.',
    price: 75000,
    duration: '3-4 Hari',
    category: 'special',
    icon: 'Layers',
    benefits: [
      'Menggunakan pembersih khusus bahan suede',
      'Mengembalikan kelembutan serat beludru',
      'Mencegah bahan suede mengeras/kaku',
      'Termasuk pelindung noda cair dasar'
    ]
  },
  {
    id: 'leather-care',
    name: 'Premium Leather Treatment',
    description: 'Khusus untuk sepatu kulit asli atau sintetis. Pembersihan dilanjutkan dengan leather conditioner alami, semir premium, dan polishing agar kulit sepatu tetap elastis, mengkilap mewah, dan bebas retak.',
    price: 80000,
    duration: '2-3 Hari',
    category: 'special',
    icon: 'Shield',
    benefits: [
      'Pembersihan aman dengan leather soap',
      'Leather conditioning agar kulit lentur',
      'Polishing akhir untuk kilau eksklusif',
      'Mencegah kulit pecah-pecah/retak'
    ]
  },
  {
    id: 'reglue-repair',
    name: 'Reglue Specialist & Repair',
    description: 'Perbaikan sol sepatu yang lepas atau menganga. Kami menggunakan lem grade industri berkualitas tinggi yang fleksibel dan tahan air, direkatkan dengan press bertekanan tinggi.',
    price: 45000,
    duration: '3-4 Hari',
    category: 'repair',
    icon: 'Hammer',
    benefits: [
      'Menggunakan lem berstandar pabrik',
      'Metode press hidrolik agar merekat kuat',
      'Lem tetap elastis saat dipakai melangkah',
      'Garansi pengerjaan reglue selama 1 bulan'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'cozy-foam-cleaner-100',
    name: 'Cozy Foam Shoe Cleaner (100ml)',
    category: 'cleaner',
    description: 'Busa pembersih sepatu instan premium siap pakai dengan Antibacterial & Formula Natural Oil alami. Sangat aman untuk segala bahan sepatu (suede, nubuck, leather, faux, canvas, knit, denim). Praktis digunakan tanpa air (waterless cleaning), sangat cocok untuk para traveller.',
    price: 39000,
    rating: 4.9,
    reviewsCount: 145,
    image: '/src/assets/images/cozy_foam_cleaner_1784255131684.jpg',
    features: [
      'Formula Natural Oil Alami',
      'Antibacterial Aktif membunuh kuman',
      'Efektif mengangkat kotoran membandel',
      'Aman untuk semua jenis bahan sepatu',
      'Praktis & Instant tanpa perlu bilas air',
      'Kemasan 100ml ringkas & travel-friendly'
    ],
    howToUse: 'Kocok botol terlebih dahulu. Semprotkan busa (foam) secukupnya pada bagian sepatu yang kotor. Sikat perlahan menggunakan sikat pembersih secara merata, lalu segera lap sisa busa dan kotoran menggunakan kain microfiber kering. Angin-anginkan beberapa saat.'
  },
  {
    id: 'cozy-premium-cleaner',
    name: 'Cozy Premium Cleaner (250ml)',
    category: 'cleaner',
    description: 'Cairan pembersih sepatu organik premium yang diformulasikan dari minyak kelapa alami dan minyak esensial jojoba. Memiliki busa tebal yang efektif mengangkat debu, lumpur, dan noda minyak tanpa bahan kimia keras. Aman untuk semua bahan termasuk suede, canvas, leather, mesh, dan knit.',
    price: 49000,
    rating: 4.9,
    reviewsCount: 184,
    image: 'cozy_premium_cleaner', // Will resolve to generated/standard images
    features: [
      '100% Bahan Organik Alami',
      'Aman untuk semua warna & jenis bahan',
      'Tidak merusak warna asli sepatu',
      'Isi 250ml cukup untuk 40-50 pasang sepatu'
    ],
    howToUse: 'Teteskan 3-5 tetes cleaner ke sikat basah, sikat bagian sepatu secara perlahan melingkar hingga berbusa, lalu lap bersih dengan kain microfiber kering tanpa dibilas air.'
  },
  {
    id: 'premium-horsehair-brush',
    name: 'Cozy Luxury Horsehair Brush',
    category: 'brush',
    description: 'Sikat premium yang dirancang khusus untuk bahan sensitif seperti Suede, Nubuck, Satin, dan Knit halus. Terbuat dari 100% bulu kuda asli berkepadatan tinggi yang lembut dan gagang kayu beech bersertifikasi ergonomis yang nyaman digenggam.',
    price: 35000,
    rating: 4.8,
    reviewsCount: 125,
    image: 'premium_horsehair_brush',
    features: [
      '100% Bulu Kuda Asli (Sangat Lembut)',
      'Gagang kayu Beech solid anti-lapuk',
      'Aman, tidak akan membuat suede botak atau rontok',
      'Bulu sikat awet dan tidak mudah rontok'
    ],
    howToUse: 'Gunakan sikat ini dalam keadaan kering untuk mengangkat debu halus di suede, atau basahi sedikit dengan cleaner untuk menyikat bahan rajut halus/suede secara searah.'
  },
  {
    id: 'cozy-shoe-deodorizer',
    name: 'Cozy Deodorizer Spray (100ml)',
    category: 'spray',
    description: 'Semprotan penghilang bau tak sedap dengan formula antibakteri aktif yang membunuh kuman penyebab bau kaki langsung di sumbernya. Memberikan aroma menenangkan yang tahan hingga 48 jam. Tersedia dalam varian wangi premium: Warm Vanilla, Coffee Latte, dan Fresh Mint.',
    price: 29000,
    rating: 4.9,
    reviewsCount: 210,
    image: 'cozy_shoe_deodorizer',
    features: [
      'Formula Antibakteri & Anti Jamur aktif',
      'Aroma tahan lama dan menenangkan',
      'Kering seketika tanpa meninggalkan bercak',
      'Bisa juga digunakan untuk helm, tas, dan topi'
    ],
    howToUse: 'Semprotkan 2-3 kali ke bagian dalam sepatu setelah digunakan atau sebelum disimpan. Biarkan mengering selama 1-2 menit sebelum sepatu dikenakan.'
  },
  {
    id: 'cozy-nano-shield-spray',
    name: 'Cozy Nano Shield Spray (200ml)',
    category: 'spray',
    description: 'Semprotan pelindung hidrofobik berteknologi nano yang memberikan lapisan pelindung tak kasat mata dari air, minyak, lumpur, dan saus kental (efek daun talas). Menjaga sepatu tetap bersih dan kering di segala cuaca.',
    price: 59000,
    rating: 4.7,
    reviewsCount: 96,
    image: 'cozy_nano_shield_spray',
    features: [
      'Teknologi Nano Shield Hidrofobik',
      'Menolak air dan noda cair ekstrem',
      'Bahan tetap bernapas (tidak menyumbat sirkulasi udara)',
      'Perlindungan tahan hingga 2-3 minggu per aplikasi'
    ],
    howToUse: 'Kocok botol, semprotkan merata ke sepatu bersih dari jarak 20cm. Diamkan 15 menit, lalu semprotkan lapisan kedua untuk perlindungan maksimal. Keringkan 12 jam sebelum dipakai.'
  },
  {
    id: 'cozy-microfiber-towel',
    name: 'Cozy Ultra Microfiber Towel',
    category: 'bundle',
    description: 'Lap microfiber premium tebal 400 GSM dengan serat berkerapatan sangat tinggi. Dirancang khusus untuk mengelap sisa busa dan noda kotoran setelah proses pencucian sepatu tanpa meninggalkan serat kain halus ataupun baret.',
    price: 15000,
    rating: 4.8,
    reviewsCount: 142,
    image: 'cozy_microfiber_towel',
    features: [
      'Ketebalan 400 GSM super empuk',
      'Daya serap air 7x lipat berat kain',
      'Pinggiran kain dijahit halus anti-baret',
      'Bisa dicuci ulang ratusan kali'
    ],
    howToUse: 'Gunakan kain ini segera setelah menyikat sepatu untuk menyerap busa kotor secara cepat dengan menekan-nekan atau mengelap satu arah.'
  },
  {
    id: 'cozy-starter-kit',
    name: 'Cozy Starter Shoe Care Kit',
    category: 'bundle',
    description: 'Paket perawatan sepatu pemula terlengkap dan termurah. Dilengkapi seluruh kebutuhan mendasar untuk merawat sepatu kesayangan sendiri di rumah. Dikemas dalam pouch kanvas Cozy yang eksklusif dan ramah lingkungan.',
    price: 89000,
    rating: 5.0,
    reviewsCount: 256,
    image: 'cozy_starter_kit',
    features: [
      'Isi Paket: Cleaner 250ml + Sikat Standar + Lap Microfiber',
      'Pouch Kanvas Cozy eksklusif gratis',
      'Lebih hemat 25% dibanding beli eceran',
      'Dilengkapi kartu panduan perawatan lengkap'
    ],
    howToUse: 'Ikuti lembar petunjuk panduan langkah demi langkah di dalam pouch untuk mencuci sepatu kets, kasual, atau olahraga favorit Anda.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Budi Santoso',
    role: 'Sneakerhead & Collector',
    rating: 5,
    text: 'Sumpah, layanan Unyellowing-nya juara banget! Jordan 1 saya yang midsolenya sudah kuning parah bisa putih bersih lagi kayak baru keluar dari box. Pengerjaan juga rapi banget dan wanginya tahan berhari-hari.',
    shoeType: 'Air Jordan 1 Retro White',
    date: '2 Minggu yang lalu'
  },
  {
    id: 'test-2',
    name: 'Adinda Rahma',
    role: 'Kantoran & Travel Blogger',
    rating: 5,
    text: 'Suka banget sama Cozy Premium Cleaner! Saya beli buat cuci sepatu rajut Adidas UltraBoost sendiri di rumah. Noda lumpur sisa traveling langsung hilang pakai sikat bulu kudanya, uppers-nya tidak berbulu sama sekali.',
    shoeType: 'Adidas UltraBoost Light',
    date: '1 Bulan yang lalu'
  },
  {
    id: 'test-3',
    name: 'Kevin Hartanto',
    role: 'Pengusaha Muda',
    rating: 5,
    text: 'Sudah langganan repaint sepatu kulit di Cozy. Hasil repaint-nya elastis, tidak pecah pas dipakai jalan, warnanya solid dan presisi. Service-nya ramah banget dan ada garansi lemnya pula. Recommended shoe care!',
    shoeType: 'Cole Haan Leather Brogues',
    date: '3 Hari yang lalu'
  },
  {
    id: 'test-4',
    name: 'Siti Maryam',
    role: 'Mahasiswi',
    rating: 5,
    text: 'Hemat banget ambil Cozy Starter Kit. Untuk harga segitu dapet cleaner 250ml yang awet banget, ditambah sikat dan lap microfiber tebal. Sepasang sepatu butuh beberapa tetes aja udah berbusa dan bersih maksimal.',
    shoeType: 'Vans Old Skool Black White',
    date: '3 Minggu yang lalu'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Berapa lama proses pengerjaan laundry sepatu?',
    answer: 'Untuk pengerjaan standar (Deep Clean, Suede/Leather Care) memakan waktu 2 hingga 3 hari kerja. Layanan restorasi khusus seperti Unyellowing dan Repaint memakan waktu 3 hingga 5 hari kerja karena membutuhkan pengerjaan bertahap dan pengeringan alami. Kami juga menyediakan layanan Fast Clean (cuci bagian luar) yang memakan waktu hanya 30-45 menit saja dan bisa Anda tunggu langsung di workshop.'
  },
  {
    question: 'Apakah cairan Cozy Premium Cleaner aman untuk semua jenis sepatu?',
    answer: 'Ya, 100% aman! Formula Cozy Premium Cleaner dirancang khusus berbasis organik (minyak kelapa alami & minyak jojoba), sehingga tidak mengandung detergen keras atau zat asam pembawa korosif. Cairan ini sangat aman untuk semua jenis bahan sensitif mulai dari Canvas, Suede, Nubuck, Kulit Asli (Leather), Mesh, Satin, Rajut (Knit), hingga bahan karet sintetis tanpa melunturkan warna sepatu.'
  },
  {
    question: 'Apakah Cozy Shoes Care menyediakan layanan antar-jemput?',
    answer: 'Tentu saja! Kami menyediakan layanan antar-jemput gratis untuk area dengan radius 5km dari workshop utama kami (minimal 2 pasang sepatu). Untuk yang tinggal di luar radius tersebut, Anda bisa mengirimkan sepatu menggunakan ojek online (GoSend / GrabExpress) atau ekspedisi reguler. Setelah selesai dicuci, sepatu akan kami packing aman dengan dustbag dan silica gel lalu dikirimkan kembali.'
  },
  {
    question: 'Bagaimana cara membeli produk atau memesan layanan di website ini?',
    answer: 'Sangat mudah! Anda bisa menjelajahi daftar layanan dan menggunakan "Kalkulator Estimasi Layanan" kami untuk menghitung total biaya, atau masuk ke tab "Katalog Produk" untuk menambah item ke keranjang belanja Anda. Setelah selesai, klik tombol "Pesan via WhatsApp". Sistem kami akan otomatis merangkum detail pesanan Anda menjadi pesan teks rapi dan membuka aplikasi WhatsApp Anda untuk berkomunikasi langsung dengan CS kami.'
  },
  {
    question: 'Apakah ada garansi untuk layanan perbaikan (Reglue/Sol)?',
    answer: 'Ada! Kami memberikan garansi pengeleman ulang (reglue) penuh selama 30 hari terhitung sejak tanggal sepatu diambil. Jika lem sol terlepas kembali saat pemakaian normal dalam masa garansi, kami akan melakukan pengeleman ulang secara gratis tanpa dipungut biaya sepeser pun.'
  }
];

export const formatRupiah = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};
