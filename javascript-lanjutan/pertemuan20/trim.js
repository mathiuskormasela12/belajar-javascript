/* 
  ==== Belajar Trim ====

  Trim berfungsi untuk menghilangkan
  karakter whitespace atau spasi di dalam 
  sebuah string baik dibagian awal dan juga 
  akhir.
*/
function TrimKu()
{
  var kata = "   Saya ingin makan   ";
  // var gabung = kata.trim() + 'ayam';

  // hasilnya "   Saya ingin makan   ayam"
  console.log( kata + 'ayam');

  // hasilnya "Saya ingin makanayam"
  console.log( kata.trim() + 'ayam');
  // console.log( gabung);
}

TrimKu();