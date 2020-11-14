const panggilRegExp = ( value ) =>
{ 

  // untuk mengambil karakter yg bukan huruf, angka dan underscore
  // let ambilData = value.match( /\W/g );

  // untuk mengambil semua karakter kecuali angka
  // let ambilData = value.match( /\D/g );

  // untuk mengambil semua karakter kecuali spasi
  let ambilData = value.match( /\S/g );

  console.log( ambilData );
}

panggilRegExp("Bulan ke 1 sd ke 4");