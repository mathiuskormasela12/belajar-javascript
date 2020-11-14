/* 
  ====== Belajar Method Pop ======

  Method Pop berfungsi untuk mengambil
  dan menghapus index array yang paling
  terakhir.

  rumus :

  a. Mengambil index terakhir
     var baru = array.pop();
  b. Menghapus index terakhir
     array.pop();
*/
function panggilPop()
{
  var kota = ['Jakarta','Bandung','Medan','Makassar'];

  console.log( kota );

  // Mengambil dan array index terakhir ('Makassar')
  // var endArray= kota.pop();
  // console.log( endArray );

  // Menghapus array index terakhir ('Makassar')
  kota.pop();

  return kota;
}

console.log( panggilPop() );