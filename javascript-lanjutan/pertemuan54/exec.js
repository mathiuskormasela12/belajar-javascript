/* 
  ==== Belajar Exec ====

  Exec adalah sebuah fungsi yg berguna
  untuk mengecek sebuah variable string
  ada tidak suatu string tertentu dan bila
  ada maka akan ditampilkan informasi mengenai
  string itu dalam bentuk array, informasi itu
  berupa string nya sendiri, index dari stringnya
  dan inputannya dari string mana. Atau apa bila
  tidak ada maka akan di tampilkan nilai null.

  rumus :
  /regex/.exec( variable string )

  ====== Belajar Object RegExp ======

  Object RegExp adalah sebuah object
  yg berfungsi untuk mengkonversi string
  menjadi sebuah regexp.

  rumus :
  var namaVariable = new RegExp( stringnya )
*/
function panggilRegexp()
{
  var data = 'Belajar Satu Tahun Bersama Niomic';

  // mengubah string 'Niomic' menjadi regexp /Niomic/
  var str = new RegExp('Niomic');

  console.log( str.exec( data ) );
}

panggilRegexp();