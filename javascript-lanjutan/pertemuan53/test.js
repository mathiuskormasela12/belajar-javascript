/* 
  ===== Belajar Method Test =====
  
  Method test() berfungsi untuk mengecek
  kedalam suatu string apakah terdapat
  karakter atau kumpulan karakter yg dikirim
  pada parameternya dalam bentuk regexp.

  rumus: 
  /regexp/.test( variable string )

  note :
  /regexp/ -> karakter atau kumpulan karakter yg dicari
              dan wajib di tulis dalam bentuk regexp
              namun jika tidak ditulis dalam bentuk regexp
              maka akan menghasilkan error.
*/
function panggilRegexp()
{
  let data = 'Belajar Satu Tahun Bersama Niomic';

  // akan mencari dalam variable data apakah ada string 'Satu'
  // jika ada maka akan menghasilkan nilai true
  // jika tidak ada maka akan menghasilkan nilai false
  // di statement dibawah ini akan menghasilkan nilai true
  // karena dalam variable data ada string 'Satu'
  console.log( /Satu/.test( data ) );
}

panggilRegexp();