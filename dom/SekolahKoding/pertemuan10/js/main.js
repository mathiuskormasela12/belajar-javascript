/* 
   ===== Belajar Selector Luar Biasa =====

   document.querySelectorAll('selector');
   Dengan selector diatas kita dapat menyeleksi
   element berdasarkan nama tag, id dan juga class. 
   Namun karena ini selector umum maka kita
   harus menuliskan indexnya. 
*/
const img = document.querySelectorAll('#gambar')[0];

img.onclick = function(){ img.width = '400' }


document.querySelectorAll('span + li')[0].innerHTML = 'Ember Js';