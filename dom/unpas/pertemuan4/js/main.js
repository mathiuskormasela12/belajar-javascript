/* 
  ===== Belajar DOM Selection =====

  a. nodeRoot.querySelector('selector css')
     Method ini berfungsi untuk mencari sebuah
     element HTML dengan menggunakan selector
     CSS. Method ini akan mengambil element pertama
     yg dia temui oleh sebab itu dia akan mengembalikan
     sebuah nilai berupa node element. 

     rumus :
     nodeRoot.querySelector('selector css')
  
  b. nodeRoot.querySelectorAll('selector css')
     Method ini berfungsi untuk mencari
     beberapa element HTML menggunakan
     selector CSS. Method ini akan mengambil
     semua element yg memenuhi kondisi
     pada selector CSS yg dikirimkan dan
     oleh sebab itu method ini akan mengembalikan
     nilai berupa nodelist.

     rumus :
     nodeRoot.querySelectorAll('selector CSS');

     note :
     Ketika kita ingin melakukan
     manipulasi terhadap elemen yg dipilih
     menggunakan method querySelectorAll, kita
     harus menentukan index dari element yg
     ingin kita ubah. 

     contoh :
     nodeRoot.querySelectorAll('selector CSS')[indexnya]

     note :
     Method getElementById dan getElementsByTagName
     dalam sisi performa, lebih baik dari pada
     DOM selection yg lainnya
*/

// querySelector()
// const p4 = document.querySelector('section#two > p');
// p4.style.color = 'green';
// p4.style.fontSize = '20px';

// const p1 = document.querySelector('p');
// p1.style.color = 'red';

// // querySelectorAll()
// const li = document.querySelectorAll('section#two > ul > li:nth-child(2)');
// li[0].style.color = 'limegreen';

/*  
  ====== Belajar Mengubah nodeRoot ======

  Dalam DOM nodeRoot defaultnya adalah
  document, namun untuk membuat pencarian
  elemen HTML dengan JavaScript lebih efektif
  kita dapat mengubah nodeRoot ini.
*/
const two = document.querySelector('#two');
const p = two.getElementsByTagName('p')[0];
p.style.backgroundColor = 'yellow';