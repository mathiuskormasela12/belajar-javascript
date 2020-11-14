function convertToInt()
{
  var a = '10.5';
  var b = '9 naga';
  var c = '9.5 samurai'
  
  // hasilnya 19
  hasil = parseInt(a) + parseInt(b);

  // hasilnya 10
  hasil1 = parseInt( a );

  // hasilnya 9
  hasil2 = parseInt( b );

  // hasilnya 9
  hasil3 = parseInt( c ) ;
  
  console.log( hasil3 );

  var s = ' ';
  console.log( isFinite(s) )
}

convertToInt();