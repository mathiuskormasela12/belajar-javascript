/* 
  ===== Belajar Fungsi Includes =====

  Includes berfungsi untuk mengecek
  suatu string apakah memiliki suatu
  karakter yang kita inputkan sebagai
  parameternya. Jika di dalam textnya
  ada maka akan menghasilkan nilai true
  tetapi jika tidak ada akan menghasilkan
  nilai false.

  rumus :

  variableText.includes('text').
*/
function Include()
{
  var text = "Saya sedang belajar JavaScript";

  // hasilnya true
  console.log( text.includes( 'sedang' ) );

  // hasilnya true
  console.log( text.includes( 'Say' ) );

  // hasilnya false
  console.log( text.includes( 'sc' ) );

  // hasilnya true
  console.log( text.includes( 't' ) );

  // hasilnya false
  console.log( text.includes( 'z' ) );
}

Include();