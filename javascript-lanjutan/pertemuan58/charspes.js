/* 
  ==== Belajar Karakter Spesifik ====

  Untuk mencari karakter spesifik menggunakan
  regex kita mempunyai 4 option, yaitu :
  1. Mencari suatu karakter atau teks
     rumus: /karakter yg dicari/g
  2. Mencari beberapa karakter sekaligus
     rumus : /[karakterperatamakarakterkeduadst]/
  3. Mencari karakter kecuali karakter tertentu
     rumus : /[^karakterygtidakbolehdicari]/g
  4. Mencari karakter diantara karakter tertentu
     rumus : /[karakterawal-karakterakhir]/g
*/
function panggilRegExp( value )
{
  var ambil;

  // untuk mengambil kata 'BE' dan 'be' dan 'Be' dan 'bE'
  // ambil = value.match( /be/gi )

  // untuk mengambil kata 'Niomic'
  // ambil = value.match( /Niomic/gi );

  // untuk mengambil karakter a dan v
  // ambil = value.match( /[av]/gi );

  // untuk mengambil semua karakter kecuali karakter a dan v
  // ambil = value.match( /[^av]/gi );

  // untuk mengambil karakter daru huruf a - d
  ambil = value.match( /[a-d]/gi );

  console.log( ambil );
}

panggilRegExp('Belajar Javascript Bersama Niomic');