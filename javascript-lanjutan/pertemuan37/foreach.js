/* 
  ====== Belajar ForEach ======

  Method Foreach adalah sebuah method
  perulangan yg berguna untuk menampilkan
  seluruh data pada suatu array.

  rumus :
  variableArray.forEach( function( item, index, array ) 
  {
    console.log( item );
    console.log( index );
    console.log( array );
  })

  ket :
  item -> salah satu data arraynya contoh : a 
  index -> index dari data item a
  array -> semua isi arraynya

  urutan parameter function method forEachnya
  tidak boleh diubah-ubah, tetapi kalo
  namanya boleh.
*/
function panggilForEach()
{
  var data = ['a', 'b', 'c'];

  data.forEach( function( item, index, array )
  {
    console.log( item );
    console.log( index );
    console.log( array );
  } )
}

panggilForEach();