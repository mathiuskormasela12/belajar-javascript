var x = 0;

/* 
  ====== Belajar Operator Increment & Decrement ======

  A. Increment
     Operator increment berfungsi untuk
     menambahkan satu nilai pada variable.
     contoh :
     x = 1
     x++ -> x + 1 = 2
  B. Decrement
     Operator decrement berfungsi untuk
     mengurangkan satu nilai pada variable.
     contoh :
     x = 2
     x-- -> x - 1 = 1
*/

console.log("====== Increment ======")
// Hasilnya 0
console.log( x );

// x = 0
// x = x + 1 = 1
x++; // increment
// hasilnya 1
console.log( x );

// x = 1
// x = x + 1 = 2
x++; // increment
// hasilnya 2
console.log( x );

console.log("");
console.log("====== Decrement ======");

var y = 2;

// hasilnya 2
console.log( y );

// y = 2
// y = y - 1 = 1
y--; // decrement
// hasilnya 1
console.log( y );

// y = 1
// y = y - 1 = 0
y--; // decrement
// hasilnya 0
console.log( y );