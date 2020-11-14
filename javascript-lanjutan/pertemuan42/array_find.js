/* 
  ==== Belajar Array Find ====

  Method find berfungsi untuk mencari
  array pertama yg memenuhi kondisi tertentu

  rumus: 
  variableArray.find( item => 
    {
      return kondisi;
    } )
*/
var angka = [1,2,3,45,21,10];

/* 
  Akan mencari data pada array 
  yang lebih besar dari 2 dari
  variable array angka yaitu
  3,45,21,10, namun find hanya
  akan mengambil angka yg lebih besar
  dari 2 yg pertama di ketemui 
  yaitu 3.
*/
var largeThan2 = angka.find( (item) => 
{
  return item > 2;
} );

console.log( largeThan2 );

// var siswa = [
//   {
//     nama: 'Mathius',
//     nis: '10250',
//     usia: 18
//   },
//   {
//     nama: 'Rizki Ramadhan',
//     nis: '10266',
//     usia: 17
//   },
//   {
//     nama: 'Fadhli Fadhilah',
//     nis: '10266',
//     usia: 17
//   },
//   {
//     nama: 'Reza Safputra',
//     nis: '10245',
//     usia: 17
//   },
//   {
//     nama: 'Emii',
//     nis: '10352',
//     usia: 15
//   }
// ];

// var remaja = siswa.find( item => {
//   return item.usia === 15;
// } )

// console.log( remaja.nama );