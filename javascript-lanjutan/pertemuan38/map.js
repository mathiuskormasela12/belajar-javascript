/* 
  ===== Belajar Map =====

  Method Map merupakan perulangan yg digunakan
  untuk menampilkan semua data pada array 
  sama seperti method forEach.

  Perbedaan map & forEach :
  map 
  a. Dapat menggunakan perintah return untuk
     menampilkan resultnya.
  b. Method Map akan membetuk array baru
     dari array yang kita berikan.
  
  forEach :
  a. Tidak dapat menggunakan perintah
     return.
  b. Method forEach tidak membentuk
     array baru dari array yg kita berikan.
  
  rumus :
  variableArray.map( function( item, index, array )
  {
    console.log( item );
    console.log( index );
    console.log( array );
  } )

  atau

  variableArray.map( ( item, index, array ) => 
  {
    console.log( item );
    console.log( index );
    console.log( array );
  } )

  ket :
  item -> data dari salah satu array 
          yang ingin ditampilkan contoh 
          Jakarta.
  index -> index dari data Jakarta
  array -> semua data dari array yg ingin
          kita looping.

  note :
  urutan parameternya jangan
  diubah. urutannya harus
  item, index, array.
*/
function panggilMap()
{
  var dataKota = ['Jakarta','Palembang','Medan','Bandung'];

   var result = dataKota.map( ( item, index, array ) => 
  {
    console.log( item );
    console.log( index );
    console.log( array );
  } )

  // dataKota.map( function( item, index, array )
  // {
  //   console.log( item );
  //   console.log( index );
  //   console.log( array );
  // } )

  return result;
}

console.log( panggilMap() );