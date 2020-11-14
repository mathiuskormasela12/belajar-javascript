/* 
  ==== Belajar Match ====

  Method Match berfungsi untuk mencari informasi
  mengenai suatu karakter atau string yg kita
  tulis di dalam parameternya baik berupa
  string biasa ataupun regex atau match juga 
  berfungsi untuk mencari string atau regex dan 
  akan mengembalikan hasilnya berupa array dengan 
  data karakter tersebut, indexnya dan groupsnya.

  rumus :

  variableString.match( string/regex );
*/
function showMatch()
{
  var text = "Saya Pintar memasak nasi goreng";

  console.log( text.match( 'Pintar' ) );
  console.log( text.match( 'goreng' ) );
  console.log( text.match( /goreng/ ) );
}

showMatch();