var angka = [1,2,3,4];

// var data = angka.find( item => {
//   return item % 2 === 0;
// } )

// var data = angka.findIndex( item => item % 2 === 0 );

// a = 0;

// a = a + '1';
// console.log(a);

const baru = angka.reduce( (accumulation, currentValue) => accumulation - currentValue );
console.log(baru);

