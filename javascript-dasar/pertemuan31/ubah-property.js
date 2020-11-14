function panggilObjects()
{
  /* 
    ====== Mengubah Property Object Part 2 ======

    Untuk mengubah nilai dari suatu property 
    adalah sbb :

    object.propertyYangInginDirubah = nilai baru

    Dalam mengubah property dalam Javascript sangatlah
    flexibel. Ketika nilai awal suatu property bertipe
    data string kita juga dapat mengubah nilai awalnya 
    itu ke dalam nilai yang tipe data lain dan ini 
    juga berlaku untuk sebaliknya.
  */
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih'
  };

  mobil.type = 'Kijang';
  mobil.type = 9500;
  mobil.type = true;
  console.log( mobil );
}

panggilObjects();