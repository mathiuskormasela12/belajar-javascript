/* 
  ===== Belajar Fungsi encodeURI =====

  1. Pengertian Petama
  Fungsi encodeURI berfungsi untuk menyandikan
  atau menghilangkan karakter-karakter khusus 
  kecuali tanda (:/,$#@=+&?) dalam string sehingga 
  bisa menjadi URL yg friendly.

  2. Pengertian Kedua
  encodeURI berfungsi untuk mengeliminasi karakter-karakter
  khusus kecuali tanda (:/,$#@=+&?) pada sebuah string URL sehingga bisa
  menjadi URL yg friendly.

  rumus :
  encodeURI( URI );
  
  1. +
  2. =
  3. ,
  4. :
  5. /
  6. $
  7. &
  8. @
  9. ?
  10. #
  11. .
  12. ;
  13. ~
  14. '
  15. *
  16. a-z
  17. A-Z
  18. 0-9
  19.-
  20. _

  21. !
  22. (
  23. )
*/
var uri = 'my test.asp?name=ståle&car=saab';

var res = encodeURI( uri );

console.log( res );
