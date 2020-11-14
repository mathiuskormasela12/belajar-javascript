/* 
  ====== Cara Konversi String ke Float ======

  parseFloat berfungsi untuk mengkonversi
  tipe data string ke desimal.

  rumus :
  parseFloat( string )
*/
function convertToFloat()
{
  var a = '10.5';
  var b = '9 naga';
  var c = '8.84 nagasaki';

  // hasilnya 10.5
  hasil = parseFloat( a );

  // hasilnya 9
  hasil2 = parseFloat( b );

  // hasilnya 8.84
  hasil3 = parseFloat( c );

  console.log( hasil3 );
}

convertToFloat();