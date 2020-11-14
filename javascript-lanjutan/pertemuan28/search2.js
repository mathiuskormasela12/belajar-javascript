/* 
  ==== Belajar Search ====

  Method search berfungsi untuk mencari
  suatu karakter atau string index nya apa.

  flow dari search :
  1. Akan mengubah string yg dikirim
     lewat parameternya menjadi sebuah
     reguler expression, namun jika
     user mengirim langsung dalam bentuk
     regex maka akan langsung lanjut ke
     step kedua dan melawati proses
     converting ke regex.
  2. Regex yg sudah di konversi atau
     yang langsung dikirim user dalam
     bentuk regex akan di cari indexnya
     itu berapa.
  3. Setelah indexnya ketemu maka akan
     langsung di tampilkan ke user.

  rumus :
  variableString.search( string/regex );
*/
function cari()
{
  var isi = "Belajar di Niomic academy dengan fasih";

  // hasilnya 11
  console.log( isi.search( 'Niomic' ) );

  // hasilnya 11
  console.log( isi.search( /Niomic/ ) );
}

cari();