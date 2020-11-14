/*
	======= Belajar Protoypele Inheritance & Class =======

	Fungsi Prototypele Inheritance :
	a. Untuk mengatasi pemborosan memory
	   ketika kita membuat object berulang
	   ulang menggunakan Object Literal
	   karena dengan Object Literal kita 
	   akan selalu menduplikasi setiap property
	   dan method ketika kita membuat
	   object baru.
	b. Untuk mengatasi pemborosan memory
	   ketika kita membuat object secara 
	   berulang menggunakan Function 
	   Declaration karena walaupun kita
	   sudah membuat blueprint(template)
	   objectnya kita masih tetap melakukan
	   dupliklasi method ketika kita
	   membuat object secara berulang.
	c. Untuk mengatasi masalah ketika
	   kita menangani pemborosan memory
	   dengan membuat parent object tersendiri
	   dan itu membuat kita harus selalu
	   mendaftarkan method baru dalam object 
	   utama ketika kita menambahkan method
	   baru pada parent object.
	d. Untuk mengatasi keharusan kita
	   untuk menangani dua object untuk
	   mengatasi pemborosan memory.
*/
// 1. Prototypeple Inheritance
function Mahasiswa(nama, energi)
{
	// let this = Object.create(Mahasiswa.prototype);

	this.nama = nama;
	this.energi = energi;

	// return this;
}

Mahasiswa.prototype.makan = function(porsi)
{
	this.energi += porsi;
	return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam)
{
	this.energi -= jam;
	return `Halo ${this.nama}, selamat main!`;
}

Mahasiswa.prototype.tidur = function(jam)
{
	this.energi += jam * 2;
	return `Halo ${this.nama}, selamat tidur!`;
}

let mathius = new Mahasiswa('Mathius', 10);
let dody = new Mahasiswa('Dody', 20);

// 2. Class
// class Mahasiswa
// {
// 	constructor(nama, energi)
// 	{
// 		this.nama = nama;
// 		this.energi = energi;
// 	}

// 	makan(porsi)
// 	{
// 		this.energi += porsi;
// 		return `Halo ${this.nama}, selamat makan!`;
// 	}

// 	main(jam)
// 	{
// 		this.energi -= jam;
// 		return `Halo ${this.nama}, selamat main!`;
// 	}

// 	tidur(jam)
// 	{
// 		this.energi += jam * 2;
// 		return `Halo ${this.nama}, selamat tidur!`;
// 	}
// }

// let mathius = new Mahasiswa('Mathius', 10);
// let dody = new Mahasiswa('Dody', 20);
