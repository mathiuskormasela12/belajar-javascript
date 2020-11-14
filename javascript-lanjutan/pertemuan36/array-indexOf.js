/* 
  ====== Belajar Array IndexOf ======

  Method indexOf tidak hanya berguna
  pada variable string tetapi juga
  pada variable array untuk mengecek suatu
  data pada array ada atau tidaknya dan
  untuk mengetahui suatu data pada array
  ada pada index ke berapa.

  Gampangnya indexOf berfungsi untuk
  mengecek suatu data pada array berada
  di index keberapa.

  note :
  Jika datanya ada pada array
  maka indexOf akan mengembalikan nilai
  lebih besar sama dengan 0 tetapi
  jika tidak ada maka akan mengembalikan
  nilai -1.

  rumus :
  variableArray.indexOf( data array )
*/
function panggilIndexOf()
{
  var kota = ['Jakarta','Bandung','Semarang','Bogor'];

  var result = kota.indexOf( 'Padang' );
  return result;
}

console.log( panggilIndexOf() );

