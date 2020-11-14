/* 
  ===== Belajar FindIndex =====

  Method findIndex berfungsi untuk
  mencari data pada suatu array yg memenuhi
  kondisi tertentu dan apa bila data
  yang memenuhi kondisinya banyak maka akan
  diambil data yang paling pertama 
  di temui dan findIndex akan mengembalikan
  index dari datanya bukan langsung datanya.

  rumus :
  variableArray.findIndex( item => 
    {
      return kondisi
    } )
*/
var angka = [1,2,3,45,21,10];

// akan menghasilkan angka yg lebih besar dari 2 yg berasal dari variable array angka
// tetapi hanya akan di ambil satu data saja, yaitu yg pertama di temui yaitu 3
// namun yg akan di kembalikan bukan datanya 3 tetapi indexnya yaitu 2
var baru = angka.findIndex( item => 
{
  return item > 2;
} )

console.log( baru );