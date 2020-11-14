/* 
  ====== Belajar Method Shift ======

  Shift berfungsi untuk mengambil
  dan menghapus array dengan index ke 0.
  Dan index ke 1 akan bergeser menjadi
  index ke 0, karena index ke 0 sudah
  dihapus.

  rumus :
  a. Mengambil index ke 0
     var baru = array.shift();
  b. Menghapus index ke 0
     array.shift();
*/
function panggilShift()
{
  var kota = ["Jakarta", "Bandung","Malang","Surabaya"];

  console.log( kota );
  console.log("=========================================================");

  // mengambil array index ke 0
  // kota = kota.shift();

  // mengambil array index ke 0
  // dan menghapus array index ke 0
  var kota2 = kota.shift();
  console.log( kota2 );

  // Menghapus array index ke 0
  // kota.shift();

  return kota;
}

console.log( panggilShift() );