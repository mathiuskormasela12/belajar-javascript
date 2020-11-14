/* 
  ====== Belajar Memilih Element ======

  Untuk memilih elemen dengan DOM
  kita dapat menggunakan 3 cara, yaitu :
  1. Memilih berdasarkan id element
     Hanya akan di pilih satu element

     rumus :
     document.getElementById('idnya')

  2. Memilih berdasarkan class element
     Memilih banyak element sekaligus
     namun ketika kita ingin memanipulasi
     element nya kita harus menentukan
     element yg mana yg mau digunakan yaitu
     dengan menuliskan index elementnya. 
     (index element dimulai dari 0)

     rumus: 
     document.getElementsByClassName('classnya')

  3. Memilih berdasarkan tag name. 
     Memilih banyak elemen, namun ketika
     kita ingin memanipulasi elemen tersebut
     kita harus memilih elemen mana yg mau
     digunakan dengan memilih menggunakan
     index sama dengan pemilihan yg class. 

     rumus:
     document.getElementsByTagName('nama tagnya')
*/


// pemilihan berdasarkan id
document.getElementById('box1').innerHTML = 'Belajar Document Object Model';

// pemilihan berdasarkan class
const box = document.getElementsByClassName('box');

// menulis text pada konten element HTMLnya
// innerHTML berfungsi untuk menulis text pada konten suatu element HTML
box[0].innerHTML = "Belajar JavaScript Dasar";
box[1].innerHTML = "Belajar JavaScript Lanjutan";
box[2].innerHTML = "Belajar Vue Js";

// pemilihan berdasarkan nama tag
const list = document.getElementsByTagName('li');

// menulis text pada konten elemen HTML-nya
list[0].innerHTML = "Vue Js";
list[1].innerHTML = "React Js";
list[2].innerHTML = "Angular Js";
