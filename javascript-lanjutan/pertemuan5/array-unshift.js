/* 
  ====== Belajar Method Unshift ======

  Unshift berfungsi untuk menambahkan data
  pada array dan memasukannya pada index nya
  yang ke 0.
*/
function panggilUnshift()
{
  var data = ['Bandung','Jakarta','Medan','Malang'];

  console.log( data );

  // Untuk menambkan data pada array di index ke 0
  data.unshift('Surabaya','Bali','Ambon');

  return data;
}

console.log( panggilUnshift() );