/*
	==== Belajar Execution Context, Hoisting & Scope ====

	A. Execution Context

	   		Execution Context adalah fase dimana 
	   program kita dijalankan dan ketika saat
	   itu juga terjadi dua fase, yaitu 
	   Creation Phases dan Execution Phases.

	B. Hoisting

	   		Hoisting adalah perilaku JavaScript
	   untuk menaikan variable (yg keywordnya var)
	   dan juga function sebelum kode dijalankan.
	   Variable akan diberi nilai undefined, namun
	   function akan diberi nilai aslinya.
 	
 	C. Urutan Execution Phases				

 		 Berikut urutan Execution Phases :

		 a. Global Execution Context

        1. Creation Phases
           - Hoisting Variable & Function.
           - Membuat object window.
           - Membuat object this yg berisi object
             window.

        2. Execution Phases
           - Mengisi nilai variable
           - Menjalankan setiap baris kode
           - Skip Function yang tidak dipanggil
           - Menjalankan Function yg dipanggil 
             (Masuk kedalam local execution context)

     b. Local Execution Context

     		1. Creation Phases
     			 - Hoisting Variable & Function
     			 - Membuat object arguments yg berisi
     			   setiap data yang dikirimkan ketika
     			   pemanggilan suatu function.
     			 - Membuat object window
     			 - Membuat object this yg berisi
     			   object window

     		2. Execution Phases
     			 - Mengisi nilai variable
     			 - Menjalankan function yang dipanggil
     			 - Skip function yg tidak dipanggil
     			 - Mengisi nilai variable

	D. Scope

	   	Ketika kita menjalankan sebuah function
	  dan ketika kita menjalankan function tersebut
	  kita melakukan pencetakan suatu nilai variable
	  maka disitu JavaScript akan mengecek apakah
	  di dalam function tersebut ada variable yg
	  sedang dipanggil, jika tidak ada maka Javascript
	  akan secara otomatis mencari kedalam parameternya,
	  jika tidak ada juga, javascript akan langsung mencari
	  diluar function nya. Jika tidak ada didalam function,
	  parameter dan juga di global maka javascript
	  akan menampilkan error. Hal inilah yang disebut
	  sebagai scope.

	Keterangan :
	Ketika sebuah function sudah dijalankan
	maka execution stack function tersebut
	akan dihapus dari dalam memory. execution
	stack adalah tumpukan function yg sedang
	dieksekusi.
*/

// console.log(nama);
// var nama = 'Mathius';
// console.log(nama);

// console.log(nama);

// var nama = 'Mathius';
// var usia = 18;

// console.log(sayHello());

// function sayHello()
// {
// 	console.log(`Halo nama saya ${nama} usia saya ${usia} tahun`);
// }

var nama = 'Mathius';
var username = '@matthewkormasela';

function cetakURL()
{
	console.log(arguments[0]);
	console.log(arguments[1]);
	var instagramURL = 'https://instagram.com/';
	return instagramURL + username;
}

console.log(cetakURL('@sandhikagalih','@dody'));

// function a()
// {
// 	console.log('this is a');

// 	function b()
// 	{
// 		console.log('this is b');

// 		function c()
// 		{
// 			console.log('this is c');
// 		}

// 		c();
// 	}

// 	b();
// }

// a();

// result
// this is a
// this is b
// this is c
