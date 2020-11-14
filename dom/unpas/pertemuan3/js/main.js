/* 
  ====== Belajar Dom Selection ======

  Dom Selection adalah cara kita untuk
  menyeleksi sebuah atau beberapa element
  agar kita dapat memanipulasinya. 

  Jenis-Jenis Dom Selection :
  a. getElementById('idnya')
     Untuk memilih element berdasarkan
     id tertentu. Method ini akan
     mengembalikan node element jika
     element yg dipilih ada dalam dokumen
     web, namun jika tidak ada maka
     akan mengembalikan nilai null. 

     rumus :
     nodeRoot.getElementById('id elemennya')

     note : 
     dalam HTML id harus unik, tidak boleh
     ada satupun element HTML yg memiliki
     Id yg sama kalau sama maka Javascriptnya
     akan error. 

  b. getElementsByTagName('nama tagnya');
     Untuk memilih element berdasarkan
     nama tag nya. Method ini akan mengembalikan
     nilai berupa HTML Collection. 

     rumus :
     nodeRoot.getElementsByTagName('nama tag nya');

     note :
     Untuk melakukan manipulasi terhadap
     suatu element maka kita harus menentukan
     dulu index dari element yg mau di ubah. 

     contoh :
     node.getElementsByTagName('nama tag')[indexnya]

  c. getElementsByClassName('nama class')
     Untuk memilih element berdasarkan
     nama class tertentu. Method ini akan
     menghasilkan HTML Collection. 

     rumus :
     nodeRoot.getElementsByClassName('nama classnya')

     note :
     Untuk melakukan manipulasi terhadap
     element yg dipilih menggunakan
     method ini, kita harus mendefinisikan
     index dari element yg ingin di ubah. 

     contoh :
     nodeRoot.getElementsByClassName('nama class')[indexnya]
*/

// Berdasarkan id
const judul = document.getElementById('title');

// mengubah style dari suatu element
// rumus : objectDocumentSelection.style.PropertyCSS = 'value property CSS';
judul.style.color = 'red';
judul.style.backgroundColor = '#eee';

// Mengubah atau menulis konten dari suatu element HTML
// rumus : objectDocumentSelection.innerHTML = 'value'
judul.innerHTML = 'Mathius Kormasela';




// Berdasarkan nama tag
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++)
{
  p[i].style.backgroundColor = 'lightblue';
}

// Berdasarkan nama class
const satu = document.getElementsByClassName('satu');
satu[0].style.fontSize = '12px';
