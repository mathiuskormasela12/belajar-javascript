/* 
  ==== Belajar LastIndexOf ====

  Method LastIndexOf berfungsi untuk
  mengecek suatu string atau karakter berada
  di index keberapa dan akan dicari mulai
  dari karakter paling belakang contohnya
  ada string 'Asus' akan di cari mulai
  dari huruf s bukan A.

  rumus :

  variableString.lastIndexOf( karakter );

  contoh :

  var a = 'Hello World';
  console.log( a.lastIndexOf( 'o' ) ); // -> hasilnya 7
  console.log( a.lastIndexOf( 'o', 5 ) ); // -> hasilnya 4
*/

function showLastIndexOf()
{
  var nama = 'Mathius Kormasela';

  // hasilnya 16
  console.log( nama.lastIndexOf( 'a' ) );

  // hasilnya 6
  console.log( nama.lastIndexOf( 's', 6 ) );
}

showLastIndexOf();