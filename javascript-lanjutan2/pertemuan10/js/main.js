/*
	===== Belajar Higher Order Function =====

	A. Filter

		 Higher Order Function filter berfungsi
		 untuk menyaring element array yang
		 memenuhi suatu kondisi tertentu. Higher
		 Order Function ini akan menghasilkan
		 array baru, dan array lamanya sama sekali
		 tidak akan diubah.

		 rumus: 
		 dataArray.filter((item, index, array) => kondisi);
	
	B. Map

		 Higher Order Function Map berfungsi
		 untuk memetakan atau mengubah suatu
		 data array kedalam bentuk yang baru.
		 Jadi Map akan menghasilkan array yang baru
		 dan array yang lama tidak akan diubah
		 sama sekali. Map juga memungkinkan
		 kita untuk dapat melakukan return.

		 rumus :
		 dataArray.map((item, index, array) => perubahan item)

	C. Reduce

		 Higher Order Function Reduce berfungsi
		 untuk melakukan kalkulasi element array.
		 Reduce sama sekali tidak akan mengubah
		 array lamanya. Reduce terdiri atasa dua
		 method yaitu reduce dan reduceRight.
		 reduce akan membaca array dari kiri kekanan
		 tetapi reduceRight akan membaca array 
		 dari kanan ke kiri. Pada body callbacknya
		 kita dapat mengirimkan nilai untuk menjadi 
		 nilai awalnya.

		 rumus: 
		 dataArray.reduce((accumulator, currentValue) => accumulator + currentValue, nilaiAwal);
		 dataArray.reduceRight((accumulator, currentValue) => accumulator + currentValue, nilaiAwal);
*/
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Memfilter angka yag lebih dari tiga
// let newAngka = [];

// for(let x of angka)
// {
// 	if( x >=3 )
// 	{
// 		mt3.push(x);
// 	}
// }
// for(let i = 0; i < angka.length; i++)
// {
// 	if (angka[i] >= 3) newAngka.push(angka[i]);
// }

// Filter berfungsi untuk menyaring array menggunakan kondisi tertentu
// const newAngka = angka.filter(item => item >= 3)

// Map berfungsi untuk memetakan array
// Map akan menghasilkan array baru
// Tidak akan mengubah array lamanya
// Dapat menggunakan keyword return
// const newAngka = angka.map( item => item * 2 );

// reduce berfungsi untuk mengkalkulasikan nilai array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 2);
/*
	const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
	acc + cv
	acc = acc
	acc + 2cv = 2acc
	2acc - 1cv = 1acc
	1acc + 8 v = 9acc
	9acc + 9cv = 18acc
	18acc + 1cv = 19acc
	19acc + 4cv = 23acc
	23acc - 5cv = 18acc
	18acc - 4cv = 14acc
	14acc + 3cv = 17acc
	17acc + 2cv = 19acc
	19acc + 9cv = 28acc 
*/

// Method Chaining adalah method berantai
// cari angka > 3
// kalikan 2
// jumlahkan
const newAngka = angka.filter( item => item > 3 )
											.map( item => item * 2 )	
											.reduce( (acc, cv) => acc + cv );
console.log(newAngka);
/*
	[8,9,4,9]
	[16, 18,8,18]
	16 + 18 = 34
	34 + 8 = 42
	42 + 18 = 60
*/