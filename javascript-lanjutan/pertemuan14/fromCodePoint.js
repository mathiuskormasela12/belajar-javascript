/* 
  ==== Belajar String.fromCodePoint ====

  String.fromCodePoint memiliki parameter
  yg dapat disi dengan kode ASCII atau
  hex dan kode itu akan di periksa
  memiliki karakter apa.

  Jadi String.fromCodePoint berfungsi
  untuk mengconvert sebuah kode ASCII
  atau hex menjadi sebuah karakter.

  rumus:
  String.fromCodePoint( kode ASCII)
*/
function CodePoint()
{
  // Kode ASCII dari karakter A besar
  console.log( String.fromCodePoint( 65 ) );

  // Kode ASCII dari karakter B besar
  console.log( String.fromCodePoint( 66 ) );

  // Kode ASCII dari karakter C besar
  console.log( String.fromCodePoint( 67 ) );

  // Kode ASCII dari icon gelas dan karakter kanji
  console.log( String.fromCodePoint(0x2651, 0x2744, 0x2f40) );
}

CodePoint();