/* 
  ====== Belajar Operator Assignment ======

  Operator assignment adalah operator
  penugasan.

  operator-operator assignment :
  a. sama dengan ( = )
  b. plus sama dengan ( += )
  c. minus sama dengan ( -= )
  d. kali sama dengan ( *= )
  e. bagi sama dengan ( /= )
  f. modulus sama dengan ( %= )

  var x = 10;
  Operator assignment diatas
  berfungsi untuk memberikan
  nilai pada variable x.
*/
var x;
var y;
var z;

x = 30;
y = 60;
z = 90;

// Menjadi number
// console.log( x, y, z );

// menjadi string
// console.log( x + " " + y + " " + z );

// Merubah nilai
x = 10;
y = 20;
z = 15;

// console.log( x, y, z );

// += -> x = x + y = 30
// x += y;
// console.log( x );

// x = x - y
// 10 = 10 - 20 = -10
// x -= y;
// console.log( x );

// x = x * y
// 10 = 10 * 20 = 200
// x *= y;
// console.log( x );

// y = y / x
// 20 = 20 /10 = 2
// y /= x;
// console.log( y );

// y = y % x
// 20 = 20 % 10 = 0
y %= x;
console.log( y );