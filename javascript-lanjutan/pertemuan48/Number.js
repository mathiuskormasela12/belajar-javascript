/* 
  ==== Belajar Method Number ====

  Method Number berfungsi untuk
  mengkonversi tipe data string ke
  number secara umum. Jika nilai tipe 
  data string nya merupakan bilangan
  desimal maka akan otomatis di konversi
  ke float tetapi jika nilai stringnya bilangan
  bulat maka akan di konversi ke int.

  rumus :
  Number( string )
*/
function convertToNumber()
{
  var a = '8';
  var b = 10;

  // Untuk menconvert tipe data string ke number umum( bisa float atau int )
  hasil = Number( a ) + b;

  console.log( hasil );
}

convertToNumber();