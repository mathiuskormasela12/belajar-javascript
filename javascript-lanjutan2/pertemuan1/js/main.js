// Untuk membuat object ada 4 cara :
// 1. Object Literal
// Ketika kita ingin membuat object baru, kita harus
// menulis ulang objectnya.

// let mahasiswa1 = {
// 	nama: 'Mathius',
// 	energi: 10,
// 	makan: function(porsi)
// 	{
// 		this.energi = this.energi + porsi;
// 		console.log(`Hai, ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam)
// 	{
// 		this.energi = this.energi - jam;
// 		console.log(`Hai, ${this.nama}, selamat main!`);
// 	}
// };

// let mahasiswa2 = {
// 	nama: 'Dody',
// 	energi: 20,
// 	makan: function(porsi)
// 	{
// 		this.energi = this.energi + porsi;
// 		console.log(`Hai ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam)
// 	{
// 		this.energi = this.energi - jam;
// 		console.log(`Hai ${this.nama}, selamat main!`);
// 	}
// };

// 2. Function Declaration
// Kita tidak perlu membuat ulang object ketika
// kita ingin membuat object berkali-kali. Kita
// hanya sekali membuat blueprint atau templatenya
// dan setelah itu ketika kita ingin membuat object baru
// kita hanya tinggal menginstansiasi objectnya
// dengan menggunakan blueprint yg sudah dibuat
// function Mahasiswa(nama, energi)
// {
// 	let mahasiswa = {};

// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi)
// 	{
// 		this.energi += porsi;
// 		console.log(`Hai ${this.nama}, selamat makan!`);
// 	}

// 	mahasiswa.main = function(jam)
// 	{
// 		this.energi -= jam;
// 		console.log(`Hai ${this.nama}, selamat main!`);
// 	}

// 	return mahasiswa;
// }

// let mathius = Mahasiswa('Mathius', 10);
// let dody = Mahasiswa('Dody', 20);

// 3. Constructor Function
function Mahasiswa(nama, energi)
{
	this.nama = nama;
	this.energi = energi;

	this.makan = function(porsi)
	{
		this.energi += porsi;
		console.log(`Hai ${this.nama}, selamat makan!`);
	}

	this.main = function(jam)
	{
		this.energi -= jam;
		console.log(`Hai ${this.nama}, selamat main!`);
	}
}

let mathius = new Mahasiswa('Mathius', 10);
let dody = new Mahasiswa('Dody', 20);