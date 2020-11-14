/* 
  var dan let valuenya bisa diubah. 

  var :
  a. Bersifat global
     Dapat diakses di bagian manapun
     dalam program jika kita mendeklarasikannya
     di luar sebuah function. Namun, jika kita
     mendeklarasikannya di dalam sebuah function 
     maka variable tersebut hanya bisa diakses
     di dalam function tersebut. 
   b. Dapat membuat nama variable yg sama
      Dengan keyword var memungkinkan
      untuk memiliki lebih dari satu variable
      dengan nama yg sama, namun konsekuensinya
      variable yg lama itu  akan di timpa oleh
      variable yg baru. 
   c. Nilainya dapat diubah
      Variable dengan keyword var
      nilainya dapat diubah.

  let :
  a. Tidak dapat membuat variable dengan nama yg sama
     Dengan keyword let, kita tidak akan
     bisa untuk membuat variable dengan nama yg
     sama dalam satu blok kode. Namun kita
     bisa membuat variable yg namanya sama dalam
     block kode yg lain.
  b. Tidak bersifat global
     Variable ini hanya dapat di akses
     dalam blok kode dimana variable itu
     dibuat dan juga bisa diakses di dalam
     nested block kode. 
  d. Nilainya dapat diubah
     Kita dapat mengubah
     nilainya

  const :
  a. Tidak dapat membuat variable dengan nama yg sama
     Kita tidak bisa membuat lebih dari satu
     variable dengan nama yg sama dalam satu
     blok kode. Namun, kita dapat membuatnya
     di dalam blok kode yg berbeda. 
  b. Tidak bersifat global
     Variable ini hanya akan bisa diakses
     di dalam blok kode dimana variable
     tersebut dibuat dan  juga di dalam
     nested blok kodenya. 
  c. Nilainya bersifat konstan
     Kita tidak dapat mengubah
     nilainya karena variable itu
     merupakan konstanta. 
*/
var message = "Hello Coding";
let msg1 = "Hello";

// Valuenya tidak dapat diubah
// kalau valuenya diubah pasti akan error
const msg2 = "Coding";

// message = "Rubah 1";

// msg1 = "Rubah 2";

// msg2 = "Rubah 3";

// var message = "Rubah 2";

// if( true )
// {
//   var message = 1;
//   let msg1 = 2;

//   console.log(msg1);
// }

// function change()
// {
//   let msg1 = "Rubah";

//   console.log(msg1);
// }
let msg1 = 'Rubah';
// console.log(change());
// change();
console.log(msg1);

// console.log(message)
// console.log(msg1);