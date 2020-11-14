/* 
  ==== Belajar Method isFinite ====

  isFinite merupakan method yg berfungsi
  untuk mengecek suatu angka merupakan angka
  terbatas atau tidak.

  isFinite akan mengembalikan nilai boolean
  yaitu true jika parameternya bertipe datakan
  number dan merupakan bilangan yg terbatas atau
  bilangan yg bukan tak hinggi, namun akan mengembalikan
  nilai false jika lau parameternya bertipe data
  non number (contoh: string, object, array(object))
  atau bertipe data string namun isinya bukan angka
  tapi karakter seperti huruf dll.

  rumus :
  isFinite( number )
*/
function panggilIsFinite()
{
  var a = [1,2,3,4,5];
  var b = ["Jakarta","Medan","Ambon","Surabaya"];
  var c = [1,2,3, "Jakarta","Medan"];
  var d = 'Mathius';
  var e = 12;
  var f = -928493;
  var g = '92';
  var h = 1/0;


  // hasilnya false karena tipe datanya bukan number tapi array
  console.log( isFinite( a ) );

  // hasilnya false karena tipe datanya bukan number tapi array
  console.log( isFinite( b ) );

  // hasilnya false karena tipe datanya bukan number tapi array
  console.log( isFinite( c ) );

  // hasilnya false karena tipe datanya bukan number tapi string
  console.log( isFinite( d ) );

  // hasilnya true karena tipe datanya number dan juga merupakan bilangan yg terbatas
  console.log( isFinite( e ) );
  
  // hasilnya true karena tipe datanya number dan juga merupakan bilangan yg terbatas
  console.log( isFinite( f ) );

  // hasilnya true karena tipe datanya string namun isinya number dan juga angkanya terbatas
  console.log( isFinite( g ) );

  // hasilnya false karena tipe datanya number namun angkanya merupakan angka tak hingga
  console.log( isFinite( h ) );
}

panggilIsFinite();