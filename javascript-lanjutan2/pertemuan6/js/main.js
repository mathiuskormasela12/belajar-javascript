/*
	======== Belajar Keyword Variable ========

	A. Pendahuluan

		 		Javascript adalah sebuah bahasa pemrograman
		yang menganut konsep hoisting. Apa itu Hoisting ?
		Hoisting adalah suatu konsep dalam Javascript
		yang akan mencari terlebih dahulu dalam kode-kode
		Javascript kita variable-variable yang dibuat
		dengan menggunakan keyword var lalu mengisinya
		dengan nilai undefined dan juga akan mencari
		function lalu mengisinya dengan isi dari function
		tersebut sebelum kode-kode program kita dijalankan.

				Selain menganut konsep Hoisting, Javascript juga
		merupakan bahasa pemrograman yang menganut konsep
		function scope. Konsep ini sebenarnya cukup bagus,
		namun ada beberapa kondisi yang membuat konsep ini
		sangat berbahaya bagi programmer. Karena dengan adanya
		konsep function scope itu, memungkinkan kita untuk
		dapat mengakses dan mengolah sebuah variable secara 
		bebas, maksudnya jika kita membuat sebuah variable
		di dalam suatu blok kode ( curly bracket ) contoh
		kita membuatnya dalam statent if, switch ataupun
		looping, maka kita akan dapat tetap mengakses
		variable tersebut diluar scopenya.

				Dan hal ini sangat berbahaya, karena jika kita
		berkerja dalam tim atau kita menggunakan library
		dari internet, ada kemungkinan kita akan membuat
		variable dengan nama yang sama, nah ketika kita sudah
		membuat variable dengan nama yang sama, maka variable
		yang lama akan ditimpa dengan variable yang baru kita
		buat dan ini dapat merusak program kita. Sekarang 
		pertanyaannya, kenapa Javascript menggunakan konsep
		function scope ? Hal ini karena Javascript dibuat
		dalam waktu yang sangat singkat yaitu hanya 10 hari.
		Dan waktu 10 hari itu bukan waktu yang cukup untuk
		membuat bahasa pemrograman yang berkonsep Block Scope.

				Untuk mengatasi permasalahan Function Scope itu
		programmer Javascript harus mengubahnya menjadi 
		Block Scope dengan cara selalu menulis variable
		di dalam sebuah function. 

		Ada dua cara untuk menulis variable dalam function
		untuk mengatasi masalah function scope :
		1. IIFE ( Immediately Invoke Function Expression )
			 Dengan cara kita membuat sebuah function expression
			 yang akan secara otomatis dijalankan tanpa
			 kita perlu memanggilnya dan menyimpan hasilnya
			 kedalam sebuah variable.

			 contoh :
			 var hello = (function(){
					statement
			 })()

		2. SIAF ( Self Invoke Anonymus Function )
			 Dengan membuat sebuah function anonymus (tanpa nama)
			 yang akan secara otomatis dijalankan tanpa dilakukan
			 pemanggilan dan tidak ditulis dalam sebuah variable

			 contoh :
			 (function(){
					statement
			 })()
	
	B. Berkenalan dengan Keyword Baru

		 		Dalam Javascript versi terbaru, lebih tepatnta ES6
		 terdapat beberapa keyword untuk membuat Javascript
		 bertindak menjadi bahasa pemrograman yang berkonsep
		 Block Scoping. Jadi kita tidak perlu lagi bersusah payah
		 untuk membuat IIFE ataupun SIAF ketika ingin membuat
		 sebuah variable. 

		 Dan keyword-keyword tersebut adalah :
		 a. let
		 		Ketika kita membuat variable dengan menggunakan
		 		keyword let, maka itu akan membuat Javascript
		 		berlaku seperti Block Scoping.

		 		berikut fitur-fitur let :
		 		1. Tidak bisa membuat variable dengan nama yang sama
		 			 dalam satu block scope yang sama.
		 	  2. Nilainya dapat diubah
		 	  3. Hanya berlaku di block scope dimana ia dibuat
		 	  	 dan juga di dalam child block scopenya.
		 	  4. Tidak akan mengalami hoisting
		 	  5. Kita dapat melakukan inisialisasi
		 	  	 sebelum mengasign sebuah nilai kedalamnya
		 b. const
		 		Ketika kita membuat variable dnegan menggunakan
		 		const maka disitu kita memberi tahu javascript
		 		bahwa kita ingin membuat sebuah constanta variable
		 		dan secara otomatis akan membuat Javascript berlaku
		 		secara block scoping.

		 		berikut fitur-fitur const :
		 		1. Tidak dapat membuat variable dengan nama yang sama
		 			 dalam satu block kode yang sama.
		 		2. Nilainya tidak bisa diubah
		 		3. Hanya berlaku di block scope dimana ia dibuat
		 		   dan juga di dalam child block scopenya.
		 		4. Tidak akan mengalami hoisting
		 		5. Kita tidak dapat melakukan inisialisai sebelum
		 			 mengasign nilainya
*/

// // var nama,usia;
// let nama = 'Mathius';
// let usia = 18;
// console.log(nama);
// console.log(usia);

// // let nama = 'Mathius';
// // let usia = 18;

// (function()
// {
// 	for(var i = 0; i < 10; i++)
// 	{
// 		console.log(i);
// 	}
// })()

for(let i = 0; i < 10; i++)
{
	console.log(i);
}
// console.log(i);