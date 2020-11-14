/*
	===== Belajar Arrow Function =====

	A. Pengertian

		 		Menurut Mozilla Development Network atau MDN, Arrow
		 Function adalah bentuk lain yang lebih ringkan dari
		 Function Expression.

	B. Perilaku

		 Berikut merupakan perilaku-prilaku 
		 arrow function :
		 1. Membuat Penulisan Function Expression
		    lebih singkat.
		 2. Tidak perlu menuliskan keyword return
		    ketika kita ingin mereturn sesuatu
		    jika kita isi function ketika hanya
		    satu baris saja dan wajib tidak boleh
		    menggunakan curly bracket.
		 3. Ketika kita hanya mengirimkan satu
		    parameter saja, maka kita tidak perlu
		    menulis kurung buka bulat & kurung tutup
		    bulat, langsung saja nama parameternya lalu
		    tanda arrow ( => ).
		 4. Ketika kita mengirim lebih dari satu parameter
		    atau kita tidak mengirim satupun parameter,
		    maka kita wajib menulis tanda kurung buka bulat
		    dan kurung tutup bulat sebelum tanda arrow ( => ).
		 5. Tidak memiliki keyword this.
		 6. Arrow Function tidak bisa digunakan untuk membuat
		    object menggunakan Constructor Function, namun bisa
		    digunakan untuk membuat object dengan Function 
		    Declaration.
		 7. Arrow Function tidak bisa digunakan untuk membuat
		    method pada Object Literal & Function Declaration.
		    Karena ketika kita menggunakan Arrow Function untuk 
		    membuat method, maka context thisnya akan mengacu pada window, 
		    namun ketika kita membuat method menggunakan function biasa, 
		    maka context thisnya akan mengacu pada object methodnya.
		 8. Arrow Function wajib digunakan untuk membuat Function
		 	  dalam method Object Literal, Function Declaration & juga
		 	  Constructor Function. Karena ketika kita menggunakan Arrow
		 	  Function context thisnya akan mengacu pada object dari method
		 	  tersebut, namun jika kita menggunakan function biasa, maka context
		 	  thisnya akan mengacu pada window.

 C. Rumus

 		a. Without Parameter & Multi Line ( no return )

 			 const namaFunction = () => {
				statement disini
 			 }

 	 b. One Parameter Single Line ( yes return )

 	 		const namaFunction = parameter1 => 'wkwkwkw';

 	 c. One Parameter Multi Line ( no return )

 	    const namaFunction = parameter1 => {
	
 	    }

 	 d. Multi Parameter & Single Line (return yess)

 	 		const namaFunction = (parameter1, parameter2) => 'wkwkw';

 	 e. Multi Parameter & Multi Line 

 	 		const namaFunction = (parameter1, parameter2) => 
 	 		{
			
 	 		}
 	 f. Without Parameter Single Line (return yes)
 	 		consr namaFunction =  () => 'wkwkwkw'
*/

// Function Declaration
// function showConsole(nama)
// {
// 	return `Halo, ${nama}`
// }

// Function Expression
// const showConsole = function(nama)
// {
// 	return `Halo, ${nama}`;
// }

// Arrow Function
// const showConsole = nama => `Halo, ${nama}`;

// console.log(showConsole("Mathius"));

let mahasiswa = ['Mathius Kormasela', 'Rizki Ramadhan Iman Muda', 'Fadhli Fadhilah', 'Reza Safputra'];

// let jlmHuruf = mahasiswa.map(item => item.length);

// return object
let jlmHuruf = mahasiswa.map(nama => ({nama, jlmHuruf: nama.length}));

console.table(jlmHuruf);

// const Mahasiswa = () =>
// {
// 	this.nama = 'Mathius';
// 	this.usia = 18;

// 	this.say = function()
// 	{
// 		console.log(`Halo nama saya ${this.nama}, usia saya ${this.usia}`);
// 	}
// }

// const mathius = new Mahasiswa();

// const mathius = {
// 	nama: 'Mathius',
// 	usia: 18,
// 	say: () =>
// 	{
// 		console.log(this)
// 	}
// }

// 1. Mempersingkat Penulisan Function Expresion
let data = ['Senshu','Kosen','Gakubu','Research'];
// let wordTotal = data.map(function(item)
// {
// 	return item.length;
// });
let wordTotal = data.map(item => item.length);
console.log(wordTotal);

// 2. Tidak Memerlukan Keyword Return Untuk Mengembalikan Suatu Nilai
// function showNama(nama)
// {
// 	return `Halo ${nama}`;
// }

const showNama = nama => `Halo ${nama}`;

console.log(showNama('Mathius'));

// 3. Ketika Mengirimkan Satu Parameter maka tidak perlu kurung bulat buka & bulat tutup
const showAge = age => console.log(`I'm ${age} tahun`);
console.log(showAge(18));

// 4. Ketika tidak mengirimkan satu parameter pun ataupun mengirimkan lebih dari 2 parameter maka wajib menulis kurung bulat buka & tutup
// const showAlert = (nama, usia) => alert(`Mina-san Konnichiwa, Watashi wa ${nama}, ${usia} sai desu.`);
// const showAlert = () => alert('Hello World')
// console.log(showAlert('Mathius',18));

// 5. Tidak dapat digunakan untuk membuat object dengan Constructor Function, namun bisa menggunakan Function Declaration
// const Student = () =>
// {
// 	let obj = {};

// 	obj.nama = 'Mathius';
// 	obj.usia = 18;
// 	obj.show = function()
// 	{
// 		alert(`Halo ${this.nama}, usia ${this.usia}`);
// 	}

// 	return obj;
// }

// const mathius = Student();

// 6. Tidak dapat digunakan untuk membuat method Object Literal & Function Declaration, namun bisa untuk Constructor Function
// const mathius = {
// 	nama: 'Mathius',
// 	show: () =>
// 	{
// 		console.log(this);
// 	}
// }
// const Student = function()
// {
// 	// let obj = {};
// 	this.nama = 'Mathius';
// 	this.say = function()  {
// 		console.log(this);
// 	}
// 	// return obj;
// }

// const mathius = new Student();

// 7. Wajib Digunakan Untuk Membuat Function dalam method
// const mathius = {
// 	show: function()
// 	{
// 		(() => {
// 			console.log(this);
// 		})();
// 	}
// }
// const Student = function()
// {
// 	// let obj = {};
// 	this.nama = 'mathius';
// 	this.show = function()
// 	{
// 		(function() {
// 			console.log(this);
// 		})()
// 	}
// 	// return obj;
// }

// const mathius = new Student();
// mathius.show();

// 8. Tidak memiliki keyword this
// const x = {
// 	show: function()
// 	{
// 		(() =>{
// 			console.log(this);
// 		})()
// 	}
// }
// function TY()
// {
// 	// let obj = {};
// 	this.show = function()
// 	{
// 		(() => {
// 			console.log(this);
// 		})()
// 	}
// 	// return obj;
// }

// const mathius = new TY();