/* 
  ===== Belajar startsWith & endsWith =====

  a. startsWith
     Berfungsi untuk mengecek kedalam
     sebuah string ada tidak string atau
     karakter yang cocok dalam variablenya dengan 
     sebuah karakter atau string yg kita
     masukan kedalam parameternya. Jika ada
     maka akan menghasilkan nilai true
     tetapi jika tidak ada akan menghasilkan
     nilai false.

     rumus :
     variable.startsWith('stringnya');
     variable.startsWith('stringnya', index);

     contoh :
     var data = 'Matthew Kormasela';
     console.log( data.startsWith( 'Matthew' ) ); -> hasilnya true
     console.log( data.startsWith( 'hew', 4 ) ); -> hasilnya true
  b. endsWith
     Berfungsi untuk mengecek diakhir
     sebuah string ada gk karakter yang
     cocok dengan string/karakter yg kita
     inputkan kedalam parameternya. Jika ada
     hasilnya true jika gk ada hasilnya
     false.

     rumus :
     variable.endsWith('stringnya')

     contoh :
     var data = 'Mathius Kormasela'
     console.log( data.endsWith( 'Kormasela' ) ) -> hasilnya true
*/
function StartWithEndWith()
{
  var text = "Yes, I am studying Javascript Programming Language because i like it";

  // hasilnya false
  console.log( text.startsWith('I am') );

  // hasilnya false
  console.log( text.endsWith('Language') );

  // hasilnya true
  console.log( text.startsWith( 'dying', 13 ) );

  // var data = 'Matthew Kormasela';
  // console.log( data.startsWith( 'Matthew' ) ); -> hasilnya true
  // console.log( data.startsWith( 'hew', 4 ) ); -> hasilnya true

  // var data = 'Mathius Kormasela'
  // console.log( data.endsWith( 'Kormasela' ) )
}

StartWithEndWith();