/* 
   ====== Belajar Event ======

   A. Event langsung di dalam element
      Kita dapat menambahkan event langsung
      di element yg ingin kita beri setelah
      itu kita buat function di dalam file Javascript 
      setelah kita panggil function tersebut
      dalam event yg kita tulis dalam elemennya. 

   B. Menulis Event di File Javascript
      objectElementYgInginDiBeriEvent.namaEventnya = callback;
   
   C. addEventListener
      objectElementYgInginDiBeriEvent.addEventListener('nama event', callback);

   note :
   Jenis jenis event :
   a. onclick -> ketika di click
   b. onload -> ketika web sudah diload semuanya
   c. onkeyup -> ketika keyboard di tekan
   d. onkeypress -> ketika tekan enter
   e. onmouseenter -> ketik di hover
   f. onmouseleave -> ketika mouse keluar
*/
const gambar = document.getElementById('gambar');

function changeSize()
{
   gambar.width = '400';
}

gambar.onclick = function(){
   // gambar.width = '400';
   changeSize();
}

gambar.addEventListener('click', () => changeSize())