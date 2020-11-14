/* 
  ===== Belajar Method isNaN =====

  isNaN berfungsi untuk mengcek suatu variable
  tipe datanya bukan number atau tidak, jika tipe
  datanya bukan number akan mengembalikan nilai
  true tetapi jika tipe datanya number false.

  rumus :
  isNaN( variable )
*/
function panggilIsNan()
{
  var a = [1,2,3,4,5];
  var b = 123;
  var c = '123';

  // hasilnya true, karena a tipe datanya array(object)
  console.log( isNaN( a ) );

  // hasilnya false, karena variable b tipe datanya number
  console.log( isNaN( b ) );

  // hasilnya false, karena memang tipe datanya string tapi nilai berupa number
  console.log( isNaN( c ) );
}

panggilIsNan();