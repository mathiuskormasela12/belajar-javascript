function panggilObjects()
{
  /* 
    ===== Belajar Property Object =====

    A. Property
       Property adalah nilai atau data-data
       yang terdapat dalam object. Dalam 
       penulisan nilai property jika kita
       ingin menulis value property bertipe
       data String kita wajib menulisnya
       dengan tanda '' atau "". Jika kita
       ingin menulisnya dengan bertipe data
       number maka kita tidak perlu menulisnya
       dengan tanda '' atau "";

       contoh variable dibawah:
       mobil -> ini adalah objectnya
       type -> propertynya
       harga -> propertynya
       warna ->propertynya

       'Sedan' -> value dari property type
       200000000 -> value dari property harga
       'Putih' -> value dari property warna
    
    B. Mengubah Nilai dari suatu Property

       Untuk mengubah nilai dari suatu property
       object caranya adalah sbb :

       namaObjectnya.propertyYangMauDiubah = nilai barunya

       Ket :
       Kita dapat mengubah suatu property
       dimana pun dan kapanpun. Asalkan kita
       melakukan perubahan setelah objectnya 
       telah dibuat.
  */
 
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih'
  }

  // Mengubah nilai dari property object
  mobil.harga = 100000000;
  console.log( mobil );
  console.log( mobil.harga );

  mobil.warna = "White";
  console.log( mobil.warna );
}

panggilObjects();