/* 
  ====== Belajar ForEach ======

  Method foreach berfungsi untuk 
  menampilkan data-data pada array.

  perbedaan forEach dan for :
  1. ForEach memerlukan array untuk 
     melakukan sebuah perulangan.
  2. For tidak memerlukan array untuk
     melakukan perulangan
  3. ForEach akan menghasilkan data pada
     array disaat melakukan perulangan

  rumus :
  variableArray.forEach( function( item, index, array ) 
  {
    statement
  } )

  note :
  item -> adalah salah satu data arraynya contoh : 'a'
  index -> index dari data array yg sedang di tampilkan 
           yaitu a indexnya 0
  array -> seluruh data pada array yg ingin 
           ditampilkan.
*/
function panggilForEach()
{
  var data = ['a','b','c','d','e'];

  data.forEach( function( item, index, array )
  {
    // akan menghasilkan salah satu dari data pada array
    console.log( item );

    // akan menampilkan index dari data array yg sedang ditampilkan
    console.log( index );

    // akan menampilkan seluruh data pada array tersebut
    console.log( array );
  } )
}

panggilForEach();