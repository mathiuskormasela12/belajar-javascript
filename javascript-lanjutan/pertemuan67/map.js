/* 
  ====== Belajar Method Map ======

  Map berfungsi untuk menampilkan
  semua data pada array dengan 
  menggunakan perulangan.

  perbedaan Map & Foreach:
  1. Map akan menghasilkan array baru
  2. Foreach tidak akan menghasilkan array baru
  3. Map dapat menggunakan keyword return
  4. Foreach tidak dapat menggunakan 
     keword return.
  
  rumus:
  variableArray.map( (item, index, array) => 
  {
    statement
  } )

  note :
  item -> salah satu data dalam variable array
          contoh: "Jakarta"
  index -> index dari data array "Jakarta"
           yaitu 0
  array -> isi dari variable array
*/
const panggilPerintahMap = () => {
  var dataKota = ["Jakarta", "Balikpapan", "Medan"];
  // dataKota.map((item, index, array) => {
  //   console.log(item);
  //   console.log(index);
  //   console.log(array);
  // });

  dataKota.map(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
};

panggilPerintahMap();
