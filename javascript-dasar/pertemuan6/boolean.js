/* 
  ==== Belajar Tipe Data Boolean ====

  Tipe data boolean adalah tipe data
  yang hanya memiliki dua nilai saja yaitu
  true dan false. Biasanya tipe data ini
  digunakan di dalam pengkondisian.
*/
var tinggi = false;
var cm = 166;
// tinggi = true;
// cm = 180;
// var cm = 200;

/* 
  Di dalam Javascript penulisan
  statement if dan else dapat
  ditulis tanpa menggunakan tanda
  kurung kurawal (curly bracket)
*/
if ( cm > 175 )
tinggi = true;
else 
tinggi = false;

console.log(tinggi);