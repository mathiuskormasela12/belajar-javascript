/* 
  ===== Belajar Token Regexp =====

  Token di kelompokan berdasarkan fungsinya
  yaitu ada yg digunakan untuk menentukan jenis
  karakter dan untuk menentukan batas.

  berikut token regExp :

  Berdasarakn jenis karakternya adalah sbb :
  . -> untuk mengambil sembarang karakter
       kecuali \n dan \r. Contoh : /./
       mengambil semua karakter kecuali 
       line break yaitu \n dan \r
  \w -> untuk mengambil sembarang angka, 
        huruf kecil dan besar serta undesrscore
        contoh : /\w/ mengambil semua huruf dan
        angka berserta underscore
  \W -> untuk mengambil sembarang karakter
        yg bukan huruf dan angka. contoh :
        /\W/ mengaambil semua karakter yg bukan
        huruf dan angka dan underscore.
  \d -> untuk mengambil sembarabg angka 1 digit
        dari 0 - 9. contoh : /\d/ mengambil
        angka 1 digit antara 0-9
  \D -> untuk mengambil sembarang karakter yg
        bukan angka. contoh : /\D/ untuk mengambbil
        semua karakter kecuali angka
  \s -> untuk mengambil spasi atau whitespace
        contoh: /\s/ untuk mengambil semua
        whitespace atau spasi

  Berdasarkan batasannya adalah sbb :
  ^ -> untuk mengambil sembarang karakter
       di awal string yg ditulis setelah lambang ^
       contoh : ^a -> mencari huruf a di awal string
  $ -> untuk mengambil sembarang karakter
       di akhir suatu string yg ditulis sebelum
       lambang $. contoh : a$ mencari huruf a
       di akhir string
  \b -> untuk mengambil karakter di awal atau akhir
        kalimat.
*/

var text = 'M4thiu$12r Kormasela 12 RPL@gmail.com';

// mengambil tanda titik
// console.log( text.match( /\./g ) );

// untuk mengambil semua karakter kecuali line break \n dan \r
// console.log( text.match( /./g ) );

// untuk mengambil angka 1 digit, dari 0 - 9
// console.log( text.match( /\d/g ) );

// untuk mengambil yg bukan angka ( semua karakter kecuali angka )
// console.log( text.match( /\D/g ) );

// untuk mengambil semua huruf dan angka
// console.log( text.match( /\w/g ) );

// untuk mengambil semua karakter yg bukan huruf dan angka
// console.log( text.match( /\W/g ) );

// untuk mengambil  whitespace atau spasi
// console.log( text.match( /\s/g ) );

// untukk mengambil karakter yg diawali dengan huruf M
// tapi pada awal string
// bukan awal suatu kata
console.log( text.match( /^M/g ) );

// untuk mengambil karakter yg diakhiri dengan huruf m
// tapi pada akhir string
// bukan akhir suatu kata
console.log( text.match( /m$/g ) );

// untuk mengambil huruf K yg berada di awal kata bukan awal string
console.log( text.match( /\bK/g ) );

// untuk mengambil huruf a yg berada di akhir kalimat bukan akhir string
console.log( text.match( /a\b/g ) );




























