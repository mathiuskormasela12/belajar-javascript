var x = 10;

/* 
  ==== Belajar Operator Logika ====

  Operator logika berfungsi untuk
  membandingkan dua buah atau lebih 
  kondisi/ ekspresi. 
  
  ada 3 jenis operator logika
  di Javascript :

  a. And ( && )
     Semua nilainya harus
     true agar mendapat hasil true.
     Jika salah satu nilai ada yang false,
     maka hasilnya akan false.
  b. Or ( || )
     Salah satu nilainya harus true
     agar mendapat hasil true. JIka
     semuanya false maka hasilnya
     false. Jika semuanya true maka
     hasilnya true.
  c. not ( ! )
     Berfungsi untuk membalikan
     nilai atau menegasikannya
     contoh dari true di negasi
     jadi false atau dari false
     di negasi jadi true.
*/

// console.log( x > 10 && x < 20 );
// console.log( x > 10 || x < 20 );
// console.log( !true );

// hasilnya true
console.log( x > 5 && x < 20 ); // operator and

// hasilnya false
console.log( x > 15 || x < 10 ); // operator or

// hasilnya true
console.log( !false ); // operator not