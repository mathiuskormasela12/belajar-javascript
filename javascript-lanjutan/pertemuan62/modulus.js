/* 
  ======= Belajar Modulus =======

  Modulus adalah operas aritmatika
  untuk mencari hasil dari sisa bagi
  antara dua angka. Dalam Javascript
  operasi modulus di lambangkan dengan
  persen (%).

  Dalam pembagian matematika sisah
  bagi itu angka yg didapat dari
  suatu pembagian (angkanya ini > 0)
  jika dibagi lagi dengan pembaginya
  akan menghasilkan angka desimal.

  rumus :
  angka1 % angka2
*/
function panggilModulus()
{
  var data1 = 365;
  var data2 = 9;

  // hasil dari sisa bagi dari 365 dan 9 adalah 5
  return data1 % data2;
}

console.log( panggilModulus() );