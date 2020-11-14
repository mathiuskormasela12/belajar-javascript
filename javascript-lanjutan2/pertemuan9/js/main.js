/*
	======= Belajar Higher Order Function =======

	A. Pengertian

		 		Higher Order Function adalah sebuah function
		 yang memiliki parameter yang berupa function juga
		 atau juga sebuah function yang mereturn function
		 lain. Dalam Javascript, function itu dianggap sebagai
		 object, oleh karena itu function dapat dijadikan
		 sebagai parameter sama seperti string, number dll.
		 Dalam Higher Order Function, function yang menjadi
		 parameter ataupun function yang dikembalikan oleh
		 Higher Order Function itu disebut sebagai callback.

	B. Function Higher Order Function
		 
		 Higher Order Function berfungsi sebagai 
		 berikut ini :
		 a. Untuk melakukan Abstraksi
		 b. Melakukan pendekatan Functional Programming

	C. Contoh Higher Order Function

		 Berikut merupakan contoh-contoh Function
		 atau method yang merupakan Higher Order 
		 Function :
		 a. Array.prototype.map()
		 b. Array.prototype.filter()
		 c. Array.prototype.reduce()
		 d. object.addEventListener('event', callback)
*/

// function kerjakanTugas(mataKuliah, selesai)
// {
// 	console.log(`Mari mengerjakan tugas ${mataKuliah}`);
// 	selesai(mataKuliah);
// }

// function selesai(mataKuliah)
// {
// 	alert(`Tugas ${mataKuliah}, sudah selesai`)
// }

// kerjakanTugas('Pemrograman Web', selesai);

// function ucapkanSalam(waktu)
// {
// 	return function(nama)
// 	{
// 		console.log(`Selamat ${waktu} ${nama}`);
// 	}
// }

// const selamatPagi = ucapkanSalam('pagi')
// selamatPagi('Mathius');

let data = ['Vue','React','Angular'];
data = data.map(item => item + ' Js ');
console.log(data);

const mahasiswa = [
	{
		nama: 'Mathius',
		bahasa: 'Javascript'
	},
	{
		nama: 'Fadhli Fadhilah',
		bahasa: 'C++'
	},
	{
		nama: 'Rizki Ramadhan',
		bahasa: 'Javascript'
	}
];

const mahasiswaPecintaJS = mahasiswa.filter(item => item.bahasa === 'Javascript');

for(let x in mahasiswaPecintaJS)
{
	console.log(mahasiswaPecintaJS[x]);
}

const my = [4,10,'2001'];
console.log(my.reduceRight((acculator, currentValue) => acculator + currentValue, '2'));
/*
	[4,10,'2001','2']
	acc = acc
	acc + '2cv'= '2acc'
	'2acc' + '2001' = '22001acc'
	'22001acc' + 10 = '2200110acc'
	'2200110acc' + 4 = '22001104acc'
*/

