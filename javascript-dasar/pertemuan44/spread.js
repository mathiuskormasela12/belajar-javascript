/* 
  ====== Belajar Operator Spread ======

  Operator Spread berfungsi untuk
  menggabungkan array.

  Rumus Penulisan :
  [ ...array1, ...array2 ];
*/

var angka1 = [1,2,3,4];

var angka2 = [5,6,7,8];

var angkaGabungan = [ ...angka1, ...angka2, 9, 10, 11, 12];
// var angkaGabungan = [ ...angka1, ...angka2];

console.log( angka1 );
console.log( angka2 );
console.log( angkaGabungan );
// console.log([...angka1,...angka2,9,10]);