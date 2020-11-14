/*
	====== Belajar Var, Let & Const ======

	a. Keyword var
	   1. Bersifat function scope
	   2. Bersifat global
	   3. Dapat membuat variable dengan nama
	      yang sama.
	   4. Menjalankan hoisting
	   5. Nilainya dapat diubah
	   6. Ketika kita membuat variable dengan
	      nama yang sama, maka nilai lamanya 
	      akan ditimpa.

	b. Keyword let
	   1. Bersifat block scope
	   2. Hanya dapat diakses di scope
	      tempat variable tersebut di buat
	      dan blok yg di dalamnya.
	   3. Tidak dapat membuat variable dengan 
	      nama yg sama.
	   4. Tidak menjalankan hoisting
	   5. Nilainya dapat diubah

	c. Keyword const
	   1. Bersifat block scope
		 2. Nilainya tidak dapat diubah
		 3. Tidak dapat membuat variable
		    dengan nama yang sama.
		 4. Hanya dapat diakses di scope
		    dimana variable tesebut dibuat
		    dan juga scope yang berada didalam
		    scope tempat variable itu dibuat.
		 5. Tidak menjalankan hoisting
*/
// let nama = 'Mathius';
// let nama = 'Kormasela';

// let nama = 'Kormasela';
// {
// 	let nama = 'Mathius';
// 	console.log(nama);
// }

// console.log(nama);

// function getNama()
// {
// 	if(true)
// 	{
// 		let nama = 'Mathius';
// 		console.log(nama);
// 	}else {
// 		console.log(nama);
// 	}

// 	console.log(nama);
// }

// getNama();

// {
// 	let x = 10;
// }

// {
// 	let x = 10;
// }

// const nama = 'Mathius';
// nama = 'Kormasela';

// console.log(nama);

const siswa = {
	nama: 'Mathius',
	kelas: 'XII RPL'
};

// siswa = {
// 	nama: 'Mathius'
// }
siswa.nama = 'Matthew';
siswa.jurusan = 'RPL';
console.log(siswa);