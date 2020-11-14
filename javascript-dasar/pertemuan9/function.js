/* 
  ==== Belajar Function ====

  Function adalah sebuah kumpulan
  deret kode-kode yang dapat kita panggil
  berkali-kali tanpa menulis baris-baris
  kode dari awal.
*/
/* 
  Cara penulisan function versi 
  Javascript yang lama.
*/
function jalanSatu()
{
  console.log("Jalan Satu");
}

/* 
  Cara penulisan function versi 
  Javascript yang lama. Karena Functionnya
  berupa variable kita bisa menggunakan keyword
  var, let dan const. Namun lebih disarankan
  untuk menggunakan keyword const karena
  agar nilainya itu tidak bisa dirubah.
*/
const jalanDua = function()
{
  console.log("Jalan Dua");
}

// cara memanggil function
jalanSatu();
jalanDua();

/* 
  Cara penulisan Function versi 
  Javascript yang terbaru.
*/
const jalanTiga = ()=> 
{
  console.log("Jalan Tiga");
}

// Cara pemanggilannya
jalanTiga();