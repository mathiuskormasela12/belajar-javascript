/* 
  ======== Belajar DOM Selection ========

  a. querySelector('selector CSS')
     Method ini berfungsi untuk memilih
     sebuah element HTML dengan menggunakan
     selector CSS. Method ini akan mengembalikan
     nilai berupa node element berjumlah satu
     element jika element yg dicari ada dalam
     dokumen web dan jika ditemukan banyak
     element yg memenuhi selector CSS nya, maka element
     yg akan diambil adalah hanya element pertama
     yg di temui oleh javascript, karena method
     ini hanya akan mengembalikan nilai barupa
     node element (satu element HTML) bukan node list 
     (lebih dari satu node) atau pun HTML Collection
     (kumpulan node yg bertipe element HTML), 
     namun jika element yg di cari
     tidak ada dalam dokumen web maka akan 
     mengembalikan nilai null. 

     rumus :
     nodeRoot.querySelector('selector css');
  
  b. querySelectorAll('selector css')
     Method ini berfungsi untuk memilih
     beberapa element HTML menggunakan
     selector CSS. Method ini akan mengembalikan
     nilai berupa nodelist, oleh sebab itu ketika
     kita ingin memanipulasi element yg dipilih
     dengan method ini kita harus menulis indexnya
     terlebih dahulu. Pada method ini jika element 
     yg kita cari ada dalam dokumen web maka 
     akan menghasilkan nilai nodelist namun
     jika tidak ada akan menghasilkan nodelis 
     juga namun nodelistnya kosong. 

     rumus : 
     nodeRoot.querySelectorAll('selector CSS')

     note :
     Method getElementById dan getElementsByTagName
     memiliki performa yg cepat dibanding
     methode yg lainya.
*/
// memilih element <p> yg berada di dalam
// element yg memiliki id two
// const p4 = document.querySelector('#two p');
// mengubah warna element p4 menjadi warna hijau
// p4.style.color = 'green';
// menugubah ukuran font dari elemen p4 menjadi 30px
// p4.style.fontSize = '30px';

// memilih element li di urutan ke dua
// yang di dalam element ul dan juga
// didalam elemen section yg memiliki
// id two
// const li2 = document.querySelector('section#two ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah dengan JavaScript';


// mengubah semua element p
// const p = document.querySelectorAll('p');

// for( let i = 0; i < p.length; i++ )
// {
//   p[i].innerHTML = 'Ini diubah dengan JavaScript';
// }

// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'orange';


/* 
   ==== Belajar Mengubah Node Root ====

   Node root dalam DOM yg defaultnya document 
   dapat diubah untuk memperkecil ruang 
   lingkup dalam pencarian element dalam 
   dokumen web. 
*/
// Javascript tolong carikan saya section dengan id two
// di dalam dokumen web
const sectionTwo = document.querySelector('section#two');
// Javascript tolong carikan saya element p pertama
// yg ada di dalam section dengan id two
const p4 = sectionTwo.querySelector('p');
p4.style.backgroundColor = 'orange';