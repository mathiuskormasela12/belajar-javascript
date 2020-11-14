/*
	======= Belajar Arrow Function =======

	Arrow Function adalah syntax baru untuk
	membuat function dalam JavaScript. Definisinya
	Arrow Function adalah = & > digunakan untuk
	menulis shorthand function.

	Fitur-Fitur Arrow Function :
	a. Kita tidak perlu menulis keyword
	   return ketika kita ingin membuat
	   function mengembalikan nilai.
	b. Arrow Function tidak memiliki keyword this
	c. Dapat menulis shorthand Function
	d. Tidak dapat digunakan untuk membuat method
	   suatu object, class, dan Function Declaration. 
	   Karena ketika kita menggunakan Arrow Function konteks this
	   nya akan menjadi this global yaitu window, namun
	   ketika kita menggunakan function biasa, maka this
	   nya akan menjadi object yg bersangkutan.
	e. Tidak dapat digunakan untuk membuat object
	f. Arrow Function dapat digunakan dalam method
	   suatu object. Jadi Arrow Function bukan sebuah
	   method object tapi hanya function dalam method.
	   Dan ketika kita pakai arrow functionnya, maka this
	   akan menjadi object bersangkutan, namun ketika
	   kita menggunakan function biasa di dalam method,
	   maka thisnya menjadi this window.
	g. Tidak dapat digunakan untuk membuat object
	   dengan Constructor Function, bisa menggunakan
	   Function Declaration.

	Rumus: 

	const namaFunction = () => 
	{
		statement;
	}
*/

// let members = ['Mathius','Kiko','Fadmax'];

// members.forEach(item => console.log(item));
// let membersIndex = members.map((item, index) => item + '-' + index);
// console.log(membersIndex);

// let SekolahKoding = {

// 	members: ['rizqi','dodi','qaiserlab'],

// 	getMembers: () =>
// 	{
// 		console.log(this);
// 	}

// };

// console.log(SekolahKoding.getMembers());

// const siswa = {
// 	say: function(){
// 		(function(){console.log(this)})();
// 	}
// }

// siswa.say();

// const siswa = function()
// {
// 	let obj = {};
// 	obj.say = function() {
// 		console.log(arguments)
// 		console.log(this);
// 	}

// 	return obj;
// }

// let mathius = siswa();
// mathius.say();

const Siswa = (nama) =>
{
	const obj = {};
	obj.nama = nama;
	obj.say = function(){
		console.log(this);
	}
	return obj;
}

const mathius = Siswa('Mathius');
const kiko = Siswa('Kiko');
mathius.say();
kiko.say();

// const show = () =>
// {
// 	console.log(this);
// }

// show();