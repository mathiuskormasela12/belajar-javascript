// Untuk membuat object ada 4 cara :
// 1. Object Literal
/* Problem : Tidak efektif untuk membuat banyak object
   Alasan : Karena dengan Object Literal, kita akan selalu
            membuat ulang objectnya dan itu akan memakan banyak
            waktu dan resource memory.
*/

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
/*
	Problem : Memakan banyak resource memory
	Alasan  : Walaupun kita sudah membuat template objectnya
	          kita akan tetap selalu membuat ulang methodnya
	          ketika kita melakukan instansiasi.
*/
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
// function Mahasiswa(nama, energi)
// {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi)
// 	{
// 		this.energi += porsi;
// 		console.log(`Hai ${this.nama}, selamat makan!`);
// 	}

// 	this.main = function(jam)
// 	{
// 		this.energi -= jam;
// 		console.log(`Hai ${this.nama}, selamat main!`);
// 	}
// }

// let mathius = new Mahasiswa('Mathius', 10);
// let dody = new Mahasiswa('Dody', 20);

// A. Mengatasi Proble Function Declaration
/* 1. Cara Pertama
   Tujuan : Mengatasi masalah pembuatan 
            ulang method yg memakan resource memory.
   Problem Baru : a. Kita jadi harus menangani dua object
                  b. Kita wajib menambahkan method pada object utama
                     ketika kita membuat method baru pada object
                     pendukung
*/
// const methodMahasiswa = {
// 	makan: function(porsi)
// 	{
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam)
// 	{
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat main!`);
// 	},
// 	tidur: function(jam)
// 	{
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, selamat tidur!`);
// 	}
// };

// function Mahasiswa(nama, energi)
// {
// 	let mahasiswa = {};

// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = methodMahasiswa.makan;
// 	mahasiswa.main = methodMahasiswa.main;
// 	mahasiswa.tidur = methodMahasiswa.tidur;

// 	return mahasiswa;
// }

// let mathius = Mahasiswa('Mathius', 10);
// let dody = Mahasiswa('Dody', 20);

/*
	2. Cara Kedua
	Tujuan : Mengatasi kewajiban kita untuk selalu
	         menambahkan method kedalam object utama
	         ketika kita membuat method pada object
	         pendukung. Jadinya penambahan di object 
	         utamanya dilakukan secara otomatis oleh
	         JavaScript.
	Problem : Kita tetap harus mengatur dua object.
*/
const methodMahasiswa = {
	makan: function(porsi)
	{
		this.energi += porsi;
		console.log(`Halo ${this.nama}, selamat makan!`);
	},
	main: function(jam)
	{
		this.energi -= jam;
		console.log(`Halo ${this.nama}, selamat main!`);
	},
	tidur: function(jam)
	{
		this.energi += jam * 2;
		console.log(`Halo ${this.nama}, selamat tidur!`);
	}
};

function Mahasiswa(nama, energi)
{
	let mahasiswa = Object.create(methodMahasiswa);

	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

	return mahasiswa;
}

let mathius = Mahasiswa('Mathius', 10);
let dody = Mahasiswa('Dody', 20);