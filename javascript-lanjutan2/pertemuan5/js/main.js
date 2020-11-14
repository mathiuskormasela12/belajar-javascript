/*
	======== Belajar Closure ========

	A. Pengertian

		 a. Pengertian Pertama

		 				Closure adalah gabungan dari function
		 		dengan lingkungan leksikal (lexical scope)

		 b. Pengertian Kedua

		 				Closure adalah sebuah function yang memiliki
		 		akses ke parent functionnya.

		 c. Pengertian Ketiga

		 				Closure adalah sebuah function yang mengembalikan
		 		function lain yang datanya berasal dari function
		 		lainnya juga.

  B. Fungsi Closure

  	 Closure memiliki dua kegunaan yaitu :
  	 a. Untuk membuat Function Factories
  	 b. Untuk membuat private method & variable
*/

// function sayHello()
// {
// 	// let nama = 'Mathius';

// 	return function(nama)
// 	{
// 		console.log(nama);
// 	}
// }

// const callSayHello = sayHello();

// callSayHello('Matthew');

// Function Factories
// const ucapkanSalam = function(waktu)
// {
// 	return function(nama)
// 	{
// 		console.log(`Halo ${nama}, selamat ${waktu} semoga hari mu menyenangkan`);
// 	}
// }

// const selamatPagi = ucapkanSalam('pagi');
// const selamatSiang = ucapkanSalam('siang');
// const selamatMalam = ucapkanSalam('malam');

// selamatSiang('Mathius');
// selamatMalam('Sandhika');

// Private Method & Variable
const plusCount = (function()
{
	let count = 0;

	// return () => ++count;
	
	return function()
	{
		return ++count;
	}
})()

// const plusCount = function()
// {
// 	let count = 0;

// 	return ++count;
// }

// const work = plusCount();

console.log(plusCount());
console.log(plusCount());
count = 100;
console.log(plusCount());