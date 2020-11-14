/*    
   ====== Belajar Memanipulasi DOM ======

   a. innerHTML
      Method ini berfungsi untuk menulis
      atau mengubah konten dalam sebuah 
      element HTML. Konten nya dapat
      berupa sebuah text,angka ataupun
      element HTML. 

      <tag pembuka>konten</tag penutup>

      rumus :
      element.innerHTML = 'value'
   
   b. setAttribute
      Method ini untuk menambahkan
      attribute dalam element HTML. 

      rumus :
      element.setAttribute('nama attribute baru','isinya')
   
   c. getAttribute
      Method ini berfungsi untuk mengecek
      suatu attribute dalam element HTML
      valuenya apa. 

      rumus :
      element.getAttribute('nama attribute yg ingin dilihat valuenya')
   
   d. removeAttribute()
      Method ini berfungsi untuk menghapus
      suatu attribute dalam element HTML.

      rumus :
      element.removeAttribute('nama attribute yg mau dihapus')
   
   e. className
      Untuk menambahkan nama class baru

      rumus :
      element.className = 'class baru'
      element.className += 'class baru'
   
   f. classList.add()
      Method ini berfungsi untuk menambahkan
      class baru. 

      rumus :
      element.classList.add('nama class baru')
   
   g. classList.remove()
      Method ini berfungsi untuk menghapus
      suatu class. 

      rumus :
      element.classList.remove('nama class yg ingin dihapus')

   h. classList.toggle()
      Method ini untuk menambahkan nama class
      baru ketika nama class tersebut tidak terdapat
      dalam element yg dipilih dan akan menghapus
      nama class tersebut jika nama class itu ada 
      dalam element yg dipilih.

      rumus :
      element.classList.toggle('nama class baru')
   
   i. classList.item()
      Method ini berfungsi untuk mengecek
      dalam index tertentu pada isi dari
      attribute class, nama classnya apa. 
      Contoh ketika kita ingin melihat
      suatu element yg memiliki class
      lebih dari satu, ketika kita ingin
      tahu class kedua nama nya apa, kita
      bisa menggunakan method ini dengan
      membri index ke 0. 
      
      rumus :
      element.classList.item(index dari class nya)

   j. classList.contains()
      Untuk mengecek pada suatu element
      ada class tertentu tidak. Jika nama
      class nya ada maka method ini akan
      mengembalikan nilai true dan jika
      tidak ada akan mengambalikan nilai 
      false. 

      rumus :
      element.classList.contains('nama class yg ingin dicek')

   k. classList.replace()
      Method ini untuk mengubah suatu nama
      class tertentu menjadi nama class lain.
   
      rumus :
      element.classList.replcae('nama class lama','nama class baru')
    

*/
// const judul = document.getElementById('title');
// // untuk menulis dan juga menambahkan konten kedalam
// // sebuah element  HTML. Konten dapat berupa text,
// // angka ataupun element HTML.
// judul.innerHTML = '<em>Mathius Kormasela</em>';

// const sectionOne = document.querySelector('div.container > section#one');
// sectionOne.innerHTML = `
//    <h1>Hello World</h1>
//    <p>Belajar DOM JavaScript</p>
// `;

// menambahkan attribute dalam element HTML
const judul = document.getElementById('title');
judul.setAttribute('name','Mathius Kormasela');
judul.setAttribute('class','biru-muda');

// untuk mengecek pada suatu attribute valuenya apa
const x = judul.getAttribute('id');

// untuk menghapus attribute tertentu dalam element HTML
judul.removeAttribute('id');

const p1 = document.getElementsByTagName('p')[0];
// menambahkan nama class
// p1.className += ' orange';

// menambahkan class
p1.classList.add('orange');

// menghapus class
p1.classList.remove('orange');

// mengecek pada suatu element ada class tertentu tidak
const a = p1.classList.contains('satu');

// mengecek sebuah element terdapat class apa aja
// ngeceknya menggunakan index
// mengecek dalam element p1 class di index ke 1
// nama class nya apa
// index dimulai dari 0
const b = p1.classList.item(1);

// untuk membuat ketika ada class 'satu'
// maka class 'satu' itu di hapus
// namun ketika class 'satu' itu tidak ada
// maka class 'satu' akan ditambahkan
// p1.classList.toggle('satu');
p1.classList.toggle('dua');

// untuk mengganti class
p1.classList.replace('satu','one');

