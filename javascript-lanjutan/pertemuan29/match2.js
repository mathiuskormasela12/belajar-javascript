/* 
  ==== Belajar Match ====

  Method match berfungsi untuk mencari
  informasi mengenai string atau regex
  yang kita kirimkan sebagai parameternya.
  Dalam method match parameternya dapat 
  berupa string ataupun regex. Method match
  ini akan mengembalikan informasi-informasi
  tersebut dalam bentuk array. Informasi-informasi
  tersebut meliputi string atau regex 
  (regex akan di konversi jadi string) 
  yg dikirim, index keberapa string atau
  regex itu berada dan inputanya
  berupa isi seluruh variable stringnya
  bukan parameter yg dikirimnya.

  contoh :
  var x = 'Niomic';

  console.log( x.match( 'i' ) );
  hasilnya :
  [
    'i',
    index: 1,
    input : 'Niomic', 
    groups: undefined
  ]

  rumus :
  variableString.match( string/regex )
*/
function showMatch()
{
  var text = "Saya pintar Matematika";

  console.log( text.match( 'pintar' ) );
  console.log( text.match( 'Matematika' ) );
  console.log( text.match( /Matematika/ ) );

  // var x = 'Niomic';
  // console.log( x.match( 'i' ) );

  // const regex = text.match( 'tar' );
  // console.log( regex[0] ); // -> hasilnya 'tar'
}

showMatch();