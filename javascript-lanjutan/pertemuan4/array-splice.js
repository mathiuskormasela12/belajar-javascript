/* 
  ====== Belajar Methode Splice ======

  Method splice memiliki banyak kegunaan
  salah satunya adalah untuk menambahkan
  data array pada index yang mana saja
  terserah dengan kita.

  rumus:
  array.splice(mau dimasukin di index ke berapa, total jumlah data yang mau dihapus setelah index yang ingin dimasukin, datanya)
*/
function panggilSplice()
{
  var kota = ['Jakarta','Medan','Padang','Malang'];

  console.log( kota );

  // menambah array di index ke 2
  // dan tidak menghapus data setelahnya
  // kota.splice(2,0,'Makassar');
  kota.splice(1,0,'Surabaya');

  // menambah array di index ke 2
  // dan menghapus 1 data setelahnya ('Padang')
  // kota.splice(2,1,'Makassar');

  // menambah array di index ke 2
  // dan menghapus 2 data setelahnya ('Padang' dan 'Malang')
  // kota.splice(2,2,'Makassar');
  return kota;
}

console.log( panggilSplice() );