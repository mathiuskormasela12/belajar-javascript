/* 
  ====== Belajar Flag g ======

  Flag berfungsi untuk memberikan hasil
  pencarian yg berbeda dari sebelumnya.

  fungsi flag g :
  a. Akan mencari karakter dari awal 
     hingga akhir string walaupun sudah 
     ketemu satu karakter.
  b. Akan menampilkan hanya karakter 
     yg di cari dalam bentuk array, 
     jika kita mencari karakter dengan 
     method match.

  rumus :
  /karakterygdicari/g
*/
function panggilRegExp()
{
  var text = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

  // flag /g berfungsi untuk membuat javascript mencari
  // suatu karakter dari awal hingga akhir string
  // maksudnya jika Javascript sudah menemukan suatu karakter
  // dia akan mencarinya lagi sampai akhir stringnya
  // jika tanpa flag /g maka jika sudah dapat
  // satu karakter javascript akan langsung berhenti
  // maka hasilnya hanya satu karakter saja
  // namun dengan flag /g jika sudah mendapatkan
  // satu hasil maka dia akan melanjutkan lagi
  // mencarinya sampai akhir string jadinya
  // jika emang suatu karakter itu ada banyak
  // dalam suatu string maka hasilnya akan lebih dari
  // satu karakter
  // dengan flag /g, juga yg akan ditampilkan
  // oleh method match bukan lagi informasinya
  // dalam bentuk array tetapi hanya karakter
  // yg dicari dalam bentuk array.
  console.log( text.match( /c/g ) );
}

panggilRegExp();