/* 
   ===== Belajar Event =====

   Event adalah representasi kegiatan
   atau kejadian yg terjadi dalam DOM. 
   Kejadian tersebut bisa dilakukan oleh user
   (mouse event, keyboard event, dll) ataupun
   dilakukan otomatasi oleh API (animasi selesai 
   diajalankan, halaman selesai di load, dll).

   Untuk mendengarkan event yg terjadi dalam
   DOM ada dua cara yaitu :
   1. Event Handler
      a. Inline HTML attribute
      b. Element Method
   2. addEventListener()

   Perbedaan :
   a. Event Handler adalah event jenis
      lama dalam JavaScript, sedangkan
      addEventListener() adalah event
      baru. 
   b. Event Handler akan menimpa event
      sebelumnya ketika kita menulis lagi
      event yg sama pada element yg sama pula maksudnya
      ketika ada dua event yg sama maka yg akan dijalankan
      hanyalah event yg terkahir, event yg pertama sudah 
      ditimpa dengan event yg kedua, namun addEventListener() 
      tidak akan melakukan itu, ketika ada dua event 
      yg sama maka keduanya akan dilakukan.
   
   Cara Penulisan :
   1. Event Handler 
      a. Inline HTML Attribute
         Tambahkan attribute berikut sebagai 
         attribute kedalam element HTML yg 
         ingin di beri event. 
         onEvent = panggilFunction();
      b. Element Method
         Tulis dalam file JavaScript
         element.onEvent = callback;
   2. addEventListener()
      Tulis dalam file JavaScript
      element.addEventListener('event', function(){

      })
      atau
      element.addEventListener('event', () => 
      {

      })

   keterangan :
   Lebih disarankan untuk menggunakan
   event handler yg element method dan jug
   addEventListener() dari pada Inline HTML Attribute
   karena kalau inline, kita menggabungkan kode HTML
   dan JavaScript dan hal ini kurang bagus.

   List Event :
   a. click
   b. dblclick
   c. mouseenter
   d. mouseleave
   e. keyup
   f. keypress
   g. keydown
*/

const p3 = document.querySelector('section#one p.tiga');
const p2 = document.querySelector('.dua');

// function ubahWarna()
// {
//    p3.style.backgroundColor = 'lightblue';
// }

// Inline HTML Attribute
const ubahWarnaP3 = () =>
{
   p3.style.backgroundColor = 'lightblue';
}

// Element Method
const ubahWarnaP2 = () =>
{
   p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarnaP2;

// addEventListener
const p4 = document.querySelector('section#two > p');
p4.addEventListener('dblclick', () => 
{
   const ul = document.querySelector('section#two ul:nth-child(2)')
   const LiBaru = document.createElement('li');
   const textLiBaru = document.createTextNode('Item Baru');
   LiBaru.appendChild(textLiBaru);
   ul.appendChild(LiBaru);
})

const p1 = document.getElementsByClassName('satu');
// p1[0].onclick = () => 
// {
//    p1[0].style.color = 'red';
// }

// p1[0].onclick = () =>
// {
//    p1[0].style.backgroundColor = 'lightblue';
// }

p1[0].addEventListener('click', () =>
{
   p1[0].style.color = 'red';
})

p1[0].addEventListener('click', () =>
{
   p1[0].style.backgroundColor = 'lightblue';
})

const link = document.querySelector('a');
link.addEventListener('mouseenter', function()
{
   link.style.backgroundColor = 'limegreen';
})

link.addEventListener('mouseleave', function() 
{
   link.style.backgroundColor = 'white';
})