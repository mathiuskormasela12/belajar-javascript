/* 
  ==== Belajar Math Object Method ====

  Math Object Method merupakan method-method
  yang digunakan untuk melakukan proses-proses
  matematika yang rumit seperti perhitungan
  statisik. Dalam Javascript ada terdapat
  35 method object math. Kali ini
  kita akan belajar 3 method dari method
  object math itu yaitu :

  a. Math.ceil( nilai )
     Membulatkan ke angka terbesar
     contoh : 
     1.2 = 2
     1.3 = 2
     1.9 = 2
  b. Math.floor( nilai )
     Membulatkan ke angka terkecil
     contoh :
     1.2 = 1
     1.3 = 1
     1.9 = 1
  d. Math.round( nilai )
     Membulatkan ke angka terdekat.
     Jika dibelakang komanya 
     angkanya 1 - 4 maka akan dibulatkan
     kebawah dan jika angka dibelakang
     komanya 5 - 9 akan dibulatkan
     keatas.
     contoh :
     1.2 = 1;
     1.3 = 1;
     1.9 = 2;
     1.5 = 2;
     1.4 = 1
*/
var x = 12.7;

// nilainya = 13
console.log( Math.ceil( x ) );

// nilainya = 12
console.log( Math.floor( x ) );

// nilainya = 13
console.log( Math.round( x ) );
