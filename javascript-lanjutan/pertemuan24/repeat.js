/* 
  ==== Belajar Repeat ====

  Method repeat berfungsi untuk
  menduplikat atau mengulang sebuah
  string

  rumus :
  variabel/string.repeat( times );

  times -> mau berapa kali di ulang stringnya
*/
function repeatString()
{
  var isi = 'Ayo belajar...';

  // hasilnya "Ayo belajar...Ayo belajar...Ayo belajar...Ayo belajar...Ayo belajar..."
  console.log( isi.repeat( 5 ) );

  // hasilnya "Ayo belajar... Ayo belajar... Ayo belajar... "
  // dibawah merupakan cara menggabungkan beberapa method pada javascript
  // jadi untuk menggabungkan method kita tidak bisa memasukannya di dalam kurung tapi kita memasukannya dengan tanda titik (.)
  console.log( isi.concat(' ').repeat(3) );

  // hasilnya "Ini buku...Ini buku...Ini buku...Ini buku..."
  console.log( 'Ini buku...'.repeat( 4 ) );
}

repeatString();