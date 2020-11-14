/* 
  ==== Belajar Substr ====

  Substr berfungsi untuk mengambil
  karakter dari dalam string tanpa
  menghapus karakter tersebut dari
  dalam string-nya.

  rumus :
  variableString.substr( x, y)

  ket :
  x -> index dari karakter yg ingin diambil
  y -> panjang karakter yang ingin diambil

  contoh :

  var data = 'Mathius';
  data.substr( 1, 3 ) -> hasilnya 'ath'

  variable.substr( z );

  ket :
  z -> index dari karakter yg ingin diambil
       dan index yg setelah index tersebut
       karakternya akan ikut diambil juga.
  
  contohnya :

  var data = "Mathius";
  data.substr( 4 ); -> hasilnya 'ius'

  var data = "Mathius";
  data.substr( -3 ); -> hasilnya 'ius'
*/
function Substr()
{
  // var aku = "Aku Pintar Memasak";

  // console.log( aku );
  // console.log( aku.substr( 3 ) );
  // console.log( aku.substr( 10 ) );
  // console.log( aku.substr( -3 ) );
  // console.log( aku.substr( 3, 10 ) );
  // console.log( aku );

  var data = 'Mathius';

  console.log( data.substr( 1, 3 ) );
  console.log( data.substr( 4 ) );
  console.log( data.substr( -3 ) );
}

Substr();