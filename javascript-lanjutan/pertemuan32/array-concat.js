/* 
  ===== Belajar Concat =====

  Method concat tidak hanya berfungsi
  untuk menggabungkan string tetapi
  juga array.

  rumus :
  array1.concat( array2 );
*/
function panggilConcat()
{
  var kota = ['Jakarta','Medan','Bekasi','Malang'];
  var kabupaten = ['Lampung Timur','Jombang','Kediri'];

  var hasil = kota.concat( kabupaten );
  // hasil = [ ...kota, ...kabupaten ];
  
  return hasil;
  // return kabupaten.concat( kota );
}

console.log( panggilConcat() );