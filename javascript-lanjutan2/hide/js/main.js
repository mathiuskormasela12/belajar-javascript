/* 
  ====== Belajar Closure ======

  Closure adalah gabungan dari sebuah function
  dan lexicall scope. Dengan kata lain, Closure
  adalah sebuah function yg dapat mengakses parent
  scope nya. Maksud dari mengakses parent scope adalah
  sebuah function dapat katakan sebagai closure, jika
  function tersebut mengakses variable dari luar function
  itu sendiri (maksudnya mengambil variable dari parent functionnya).

  Dengan Closure memungkinkan kita untuk
  dapat membuat hal-hal berikut :
  a. Function Factories
  b. Private proerty & Method
*/
// function init()
// {
//   // let nama = 'Mathius';
//   // let umur = 18;

//   // function tampilNama(nama)
//   // {
//   //   // let nama = 'matthew';
//   //   // let umur = 18;
//   //   console.log(nama);
//   //   // console.log(umur);
//   // }

//   return function(nama) 
//   {
//     console.log(nama);
//   }

//   // console.dir(tampilNama);
//   // return tampilNama;
// }

// let panggilNama = init();
// panggilNama('Mathius');

// Membuat Function Factories
// function  ucapkanSalam(waktu)
// {
//   return function (nama) 
//   {
//     console.log(`Halo ${nama} selamat ${waktu}, semoga hari mu menyenangkan`);
//   }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSore = ucapkanSalam('sore');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Mathius');
// selamatMalam('Sandhika');

// Membuat Private Method dan Property
let add = (function()
{
  let counter = 0;
  return function()
  { 
    return ++counter;
  }
})();

counter = 10;
// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());