/* 
  ====== Belajar Array Join ======

  Method join berfungsi untuk
  menggabungkan array menjadi string.

  rumus :
  variableArray.join( delimiter )

  ket :
  delimiter -> pemisahnya contoh (, spasi)
               jika kita tidak menulis delimiternya
               maka defaultnya delimiternya adalah
               tanda koma (,).
*/
function panggilJoin()
{
  var kota = ['Jakarta','Bogor','Bandung','Semarang','Yogyakarta'];
  console.log( kota );

  var result = kota.join(' ');
  return result;
}

console.log( panggilJoin() )