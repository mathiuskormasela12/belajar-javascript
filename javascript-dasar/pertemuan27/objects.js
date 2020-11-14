function panggilObjects()
{
  /* 
    ===== Belajar Membuat Object =====

    Dalam Javascript untuk membuat object tidak
    harus menggunakan Class.

    rumus penulisan object :

    var namaObject = {
      property1: value,
      property2: value,
      property3: value
    }

    rumus untuk memanggil property:
    namaObject.property;
  */
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih'
  };

  console.log(mobil);
  console.log(mobil.type);
  console.log(mobil.harga);
  console.log(mobil.warna);
}

panggilObjects();