/*  
  ==== Belajar Method ABS ====

  Method ABS digunakan untuk membuat
  suatu nilai menjadi absolute atau mutlak
  maksudnya jika ada nilai yang negatif maka
  akan otomatis dirubah menjadi positif, karena
  nilai absolute atau mutlak itu tidak boleh
  negatif. Fungsi ABS ini biasanya digunakan untuk
  mencari selesih dari suatu bilangan.

  Rumus :

  Math.abs( angka yg mau diabsolutkan )
*/

var x = 30;
var y = -20;
var y = 40;

// hasilnya 20
// console.log( x, Math.abs(y) );

// hasilnya -10
console.log( x - y );

// hasilnya 10
console.log( Math.abs( x - y ) );