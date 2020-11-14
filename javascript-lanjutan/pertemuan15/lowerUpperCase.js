/* 
  ==== Belajar toLowerCase() dan toUpperCase ====

  a. toLowerCase()
     Berfungsi untuk membuat semua huruf
     dalam variable string tersebut menjadi
     huruf kecil semuanya.

     rumus :
     x.toLowerCase();
     x -> varible yg teks nya mau diubah 
          menjadi huruf kecil semua.

  b. toUpperCase()
     Berfungsi untuk membuat semua huruf
     dalam variable string tersebut menjadi
     huruf kapital semua.
*/
function Ubah()
{
  var huruf = 'Belajar Di Niomic';

  console.log( huruf );

  // Membuat semua huruf di string menjadi huruf kecil semuanya
  console.log( huruf.toLowerCase() );

  // Membuat semua huruf di string menjadi huruf kapital semuanya
  console.log( huruf.toUpperCase() ); 
}

Ubah();