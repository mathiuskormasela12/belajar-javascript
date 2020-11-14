/* 
  ==== Belajar Slice ====

  Method Slice tidak hanya berguna untuk
  mengambil beberapa karakter suatu string
  tapi juga dapat digunakan untuk mencopy
  nilai dari sebuah array.

  rumus :
  array.slice( x, y );

  ket :
  x -> mulai dari index mana mau copy 
  y -> sampai index ke mana mau dicopy misal x
       maka akan di ambil sampai index ke (x - 1)
*/
function copyArray()
{

  var data = ['a','b','c','d','e','f','g','h','i','j'];

  // Mengcopy semua nilai array
  var copy = data.slice();

  // Mencopy nilai array dari index ke 0 sampai index ke 2
  copy = data.slice( 0, 3 );

  // Mencopy nilai array dari index -5 sampai dst
  copy = data.slice( -5 );

  console.log( copy );

}

copyArray();