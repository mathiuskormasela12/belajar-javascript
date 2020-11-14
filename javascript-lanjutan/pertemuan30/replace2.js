/* 
  ==== Belajar Replace ====

  Method replace berfungsi untuk
  mengubah suatu string.

  rumus :
  variableString.replace( 'string yg mau diubah', 'mau diubah jadi string apa' );
*/
function ganti()
{
  var cari = "Ini isi dari data program";

  // sebelum diubah
  console.log( cari );

  // proses mengubah string
  var cari = cari.replace( 'program', 'Penjualan' );
  
  // sesudah diubah
  console.log( cari );
}

ganti();