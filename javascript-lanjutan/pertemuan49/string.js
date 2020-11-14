/* 
  ===== Belajar Method String =====

  Method String berfungsi untuk mengkonversi
  tipe data lain menjadi string.

  rumus :
  String( variable )
*/
function panggilString()
{
  var a = 123;
  var b = 98.70;
  var c = "NIOMIC!";
  var d = true;

  // mengkonversi number 123 menjadi string '123'
  hasil1 = String( a );
  console.log( typeof a );
  console.log( typeof hasil1 );

  // mengkonversi number 98.70 menjadi string '98.70'
  hasil2 = String( b );
  console.log( typeof b );
  console.log( typeof hasil2 );

  // mengkonversi string "NIOMIC!" menjadi string "NIOMIC"
  hasil4 = String( c );
  console.log( typeof c );
  console.log( typeof hasil4 );

  // mengkonversi boolean true menjadu string 'true
  hasil5 = String( d );
  console.log( typeof d );
  console.log( typeof hasil5 );
  
}

panggilString();