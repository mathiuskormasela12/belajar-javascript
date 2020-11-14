/* 
  ==== Belajar Return di Function ====

  Return adalah cara dimana kita dapat
  membuat suatu function mengembalikan suatu
  nilai. Selain itu, return juga berfungsi
  untuk memberhentikan sebuah function.

  Dan untuk kita mengakses menampilkan
  nilainya dilayar kita tidak bisa hanya
  dengan memanggil function saja tetapi
  kita juga harus mencetak function yang
  kita panggil

*/
function ambil()
{
  var lempar = "diterima";
  return lempar;
}

/* 
  Mencetak nilai yang 
  dikembalikan suatu function.
*/
// console.log(ambil());

/* 
  Menyimpan nilai yang dikembalikan 
  function kedalam variable.
*/
var tampung = ambil();

console.log(tampung);