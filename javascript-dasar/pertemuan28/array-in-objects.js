function panggilObjects()
{

  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih',
    tahun: [2001, 2002, 2003, 2004]
  };

  console.log( mobil );
  console.log( mobil.harga );

  /* 
    ===== Belajar Array didalam Object =====

    Value dari suatu property object
    dapat kita isi dengan suatu array.

    Cara memanggil array dalam object:
    namaObject.propertyArray[index]

  */

  // mencetak jumlah data dalam array
  console.log( mobil.tahun.length );
  console.log( mobil.tahun[3] );


}

panggilObjects();