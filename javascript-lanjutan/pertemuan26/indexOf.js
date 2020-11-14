/* 
  ==== Belajar indexOf ====

  Method indexOf berfungsi untuk mengecek
  suatu karakter atau string indexnya berapa.

  rumus :

  variableString.indexOf('karakter/string')

  var text = "Javascript";
  console.log( text.indexOf('s') ); -> hasilnya 4
  console.log( text.indexOf('p') ); -> hasilnya 8
*/

function showIndexOf()
{
  var isi = "Belajar coding di Niomic";

  // hasilnya 8
  console.log( isi.indexOf('coding') );

  // hasilnya 0
  console.log( isi.indexOf( 'Belajar' ) );

  // hasilnya 18
  console.log( isi.indexOf('N') );
}

showIndexOf();