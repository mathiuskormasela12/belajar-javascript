function panggilRegExp( value )
{
  var ambilData;

  // akan mengambil semua huruf dan angka serta underscore
  // var ambilData = value.match( /\w/g );

  // mengambil semua angka saja
  // ambilData = value.match( /\d/g );

  // mengambil semua spasi
  ambilData = value.match( /\s/g );

  console.log( ambilData );
  console.log("Banyaknya spasi :", ambilData.length);
}

panggilRegExp("Bulan ke 1 sd ke 4 _");