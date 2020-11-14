/*    
   ====== Bermain CSS ======

   A. Menambah Attribute Class
      objectElement.className = 'nama class'
      
   B. Menambahkan CSS
      objectElement.propertyCSS = 'value'
*/
const img = document.getElementById('gambar');
const input = document.getElementById('input');

img.className += ' background';
input.style.backgroundColor = 'blue';
input.style.border = '5px solid red';