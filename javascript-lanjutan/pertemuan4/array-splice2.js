/* 
  ====== Belajar Method Splice ======

  Splice juga berfungsi untuk
  menghapus data pada array dengan
  posisi dimana saja.

  rumus :

  array.splice(x,z);

  note :
  x -> data yg mau dihapus index keberapa
  z -> total data yg mau dihapus berapa,
       ini dihitung dari index yg mau dihapus
       jika z = 1 maka hanya data dengan
       index ke x yang akan dihapus tetapi
       jika z = 2 atau dst maka yang akan
       dihapus 2 data atau lebih akan dihitung
       dari index ke x dan dst.
*/
function panggilSplice()
{
  var kota = ["Jakarta","Bandung","Medan","Surabaya"];

  console.log( kota );

  // hasilnya ["Jakarta","Medan","Surabaya"]
  // yang dihapus "Bandung"
  // kota.splice(1,1);

  // hasilnya ["Jakarta","Surabaya"]
  // Yang dihapus "Bandung" & "Medan"
  // kota.splice( 1,2 );

  // Hasilnya ["Surabaya"]
  // Yang dihapus "Jakarta", "Bandung" & "Medan"
  kota.splice(0,3);

  return kota;
}

console.log( panggilSplice() );