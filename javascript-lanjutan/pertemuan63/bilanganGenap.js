/* 
  ===== Belajar Modulus ===== 

  Operasi modulus dapat digunakan
  untuk mencari bilangan genap, ganjil
  dan juga kelipatan. Dibawah ini kita
  akan belajar untuk menghasilkan bilangan
  genap menggunakan operator modulus.
*/
function panggilBilanganGenap()
{
  var evenNumber = [];

  // untuk menghasilkan bilangan dari 1 - 9
  for( var i = 1; i < 10; i++ )
  { 
    // untuk mengecek jika i nya merupakan
    // bilangan genap maka tambahkan bilangan
    // itu kedalam variable array evenNumber
    if( i % 2 === 0 )
    {
      evenNumber.push( i );
    }
  }

  return evenNumber;
}

console.log( panggilBilanganGenap() );