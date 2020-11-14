/* 
  ====== Belajar Array Every ======

  Method every untuk mengecek
  apakah setiap atau semua data pada array 
  memenuhi kondisi tertentu. Contonya fungsi every
  dibawah berfungsi untuk mengecek apakah
  suatu array yg memiliki object
  apakah setiap dan semua data array objectnya 
  memiliki property type dengan value yang
  sama yaitu 'Macbook'.

  rumus: 

  var tampung = variableArray.every( (item) => 
  {
    return kondisi
  } )
*/
var data = [
  {
    name: 'Apple Macbook Pro',
    type: 'Macbook'
  },
  {
    name: 'Apple Macbook Air',
    type: 'Macbook'
  },
  {
    name: 'Apple Macbook Pro Touchbar',
    type: 'Macbook'
  },
  {
    name: 'Apple Macbook Air 2018',
    type: 'Macbook'
  }
];

// var apakahSemuaTipeLaptopnyaMacbook = data.every( item => item.type === 'Macbook' );
var apakahSemuaTipeLaptopnyaMacbook = data.every( ( item ) => 
{
  return item.type === 'Macbook';
} )
console.log( apakahSemuaTipeLaptopnyaMacbook );

// console.log(
//   data.every( (item, index, array) => 
//   {
//     return item.type === 'Macbook';
//   } )
// );

// var genap = [2,4,6,8,10,12];
// var angka = [1,2,3,4,5,6,7,8,9,10];

// const genap = angka.filter( items => items % 2 === 0 );
// const ganjil = angka.filter( items => items % 2 !== 0 );

// if( ganjil.every( item => item % 2 === 0 ) )
// {
//   console.log( genap );
//   console.log('Bilangan Genap');
// }
// else 
// {
//   console.log( ganjil );
//   console.log( 'Bilangan Ganjil' );
// }

// console.log(
//   genap.every( item => {
//     return item % 2 === 0;
//   } )
// );