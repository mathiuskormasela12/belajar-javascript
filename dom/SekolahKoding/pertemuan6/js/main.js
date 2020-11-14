/* 
  ===== Belajar Attribute =====

  A. Menambah Attribute Baru
     objectElement.setAttribute('namaAttributeBaru','valueAttributeBaru');

  B. Mengubah Value Attribute
     objectElement.attributeYgValuenyaMauDirubah = 'value attributeny'
*/
const gambar = document.getElementById('gambar');
const input = document.getElementById('input');

// mengubah attribute
gambar.width = 300;
input.value = 'Isi Disini';


// menambah attribute
gambar.setAttribute('class','background');

