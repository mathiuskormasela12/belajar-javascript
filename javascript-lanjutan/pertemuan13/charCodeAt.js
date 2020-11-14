/* 
  ==== Belajar Method CharCodeAt ====

  charCodeAt merupakan sebuah method
  yang digunakan untuk mengecek kode ASCII 
  dari suatu karakter dalam sebuah string.

  rumus :
  variableString.charCodeAt( x );
  x -> index dari karakter yang ingin
       kita check dalam sebuah string.
  contoh : Niomic
  index 0 -> N
  index 1 -> i
  index 2 -> o
  index 3 -> m
  index 4 -> i
  index 5 -> c
*/
function KodeAt()
{
  var kode = "Saya Belajar di Niomic";

  // console.log( kode );

  // kode ASCII dari karakter spasi adalah 32
  console.log("Di bawah ini merupakan kode ASCII dari karakter spasi :");
  console.log( kode.charCodeAt( 4 ) );

  // kode ASCII dari karakter spasi adalah 32
  console.log("Dibawah ini merupakan kode ASCII dari karakter spasi :");
  console.log( kode.charCodeAt( 12 ) );

  console.log("");

  // Kode ASCII dari karakter a adalah 97
  console.log("Dibawah ini merupakan kode ASCII dari karakter a :");
  console.log( kode.charCodeAt( 1 ) );

  // Kode ASCII dari karakter a adalagh 97
  console.log("Dibawah ini merupakan kode ASCII dari karakter a :");
  console.log( kode.charCodeAt( 3 ) );

}

KodeAt();