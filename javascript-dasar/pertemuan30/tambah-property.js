function panggilObjects()
{
  /* 
    ===== Belajar Menambahkan Property Pada Object =====

    Untuk menambah property pada object
    kita tidak perlu langsung merombak
    objectnya namun bisa dengan cara seperti
    di bawah ini :
    
    namaObjectNya.propertyBaru = nilai;
  */
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih'
  };

  // Menambah property tahun ke dalam object mobil
  mobil.tahun = 2020;
  // Menambah property pemilik kedalam object mobil
  mobil.pemilik = 'Mathius Kormasela';
  console.log( mobil )
}

panggilObjects();