/* 
  ====== Belajar Replace ======

  Method replace berfungsi untuk mengubah
  string, untuk mengubah string dengan regexp
  kita juga bisa menggunakan method ini.

  rumus :
  var variabelBaru = variableString.replace( /regex/, mau diubah jadi apa )
*/
function panggilRegExp()
{
  let data = 'Belajar Satu Tahun Bersama Niomic';

  data = data.replace( /Satu/ ,'1' );
  console.log( data );
}

panggilRegExp();