/* 
  ====== Belajar Some ======

  Method some berfungsi untuk mengecek
  suatu array apakah ada salah satu atau
  salah dua atau setiap data pada arraynya
  memenuhi kondisi tertentu.

  rumus :
  variableArray.some( ( items ) => 
  {
    return kondisi;
  } )
*/
var orang = [
  {
    name: 'Mathius',
    gender: 'Male'
  },
  {
    name: 'Erika Ebisawa',
    gender: 'Female'
  },
  {
    name: 'Emii',
    gender: 'Female'
  },
  {
    name: 'Rizki Ramadhan',
    gender: 'Male'
  }
];

// Untuk mengecek ada tidak dalam array object tersebut object yg memiliki value dari property gender nya 'Male'
var apakahAdaOrangYangGendernyaMale = orang.some( ( item ) => 
{
  return item.gender === 'Male';
} )

console.log( apakahAdaOrangYangGendernyaMale );

// var angka = [2,4,6,8,10];

// if( angka.some( item => item % 2 !== 0 ) )
// {
//   console.log( 'Ada Beberapa Angka Ganjil' );
// }
// else 
// {
//   console.log( 'Tidak Ada Angka Ganjil' )
// }