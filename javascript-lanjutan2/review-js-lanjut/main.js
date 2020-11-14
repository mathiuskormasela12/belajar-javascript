// Cara membuat object dalam Javascript
// 1. Object Literal
// Const :
// a. Tidak efektif untuk membuat banyak object
// b. Memakan resources yg banyak, karena setiap
//    property dan method object selalu dibuat ulang
// const mathius = {
// 	nama: 'Mathius',
// 	energi: 10,
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log('Selamat makan', this.nama);
// 	},
// 	main: function(jam) {
// 		this.energi -= jam;
// 		console.log(`Selamat main ${this.nama}`);
// 	},
// 	tidur: function(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Selamat tidur ${this.nama}`);
// 	}
// }

// 2. Function Declaration
// Problem
// a. Memakan banyak resources
 // karena walaupub membuat template
 // method akan selalu dibuat ulang
// function Mahasiswa(nama, energi) {

// 	const mhs = {};

// 	mhs.nama = nama;
// 	mhs.energi = energi;

// 	mhs.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat makan ${this.nama}`);
// 	}

// 	mhs.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Selamat main ${this.nama}`);
// 	}

// 	mhs.tidur = function(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Selamat tidur ${this.nama}`);
// 	}

// 	return mhs;

// }

// Problem
// a. Menghandle 2 object sekaligus
// b. harus selalu mendaftarkan method
const methodMhs = {
	makan: function(porsi) {
		this.energi += porsi;
		console.log(`Selamat makan ${this.nama}`);
	},
	main: function(jam) {
		this.energi -= jam;
		console.log(`Selamat main ${this.nama}`);
	},
	tidur: function(jam) {
		this.energi += jam * 2;
		console.log(`Selamat tidur ${this.nama}`);
	}
};

// function Mahasiswa(nama, energi) {

// 	const mhs = {};

// 	mhs.nama = nama;
// 	mhs.energi = energi;

// 	mhs.makan = methodMhs.makan;
// 	mhs.main = methodMhs.main;
// 	mhs.tidur = methodMhs.tidur;

// 	return mhs;

// }

// Problem
// a. Menghandle dua object sekaligus
// function Mahasiswa(nama, energi) {

// 	const mhs = Object.create(methodMhs);

// 	mhs.nama = nama;
// 	mhs.energi = energi;

// 	return mhs;

// }

// Constructor Function with Prototyple Inhertitance
// function Mahasiswa(nama, energi) {

// 	this.nama = nama;
// 	this.energi = energi;

// }

// Mahasiswa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	console.log(`Selamat main ${this.nama}`);
// }

// Mahasiswa.prototype.makan = function(porsi) {
// 	this.energi += porsi;
// 	console.log(`Selamat makan ${this.nama}`);
// }

// Mahasiswa.prototype.tidur = function(jam) {
// 	this.energi += jam * 2;
// 	console.log(`Selamat tidur ${this.nama}`);
// }

// class Mahasiswa {

// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}

// 	makan(porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat makan ${this.nama}`);
// 	}

// 	main(jam) {
// 		this.energi -= jam
// 		console.log(`Selamat main ${this.nama}`);
// 	}

// 	tidur(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Selamat tidur ${this.nama}`);
// 	}
// }

// const mathius = new Mahasiswa('Mathius', 10);
// const kiko = new Mahasiswa('Rizki Ramadhan', 10);

/*
	Execution Context adalah ketika
	kita menjalankan program.

	Global Execetion Context :
	a. Creation Phases
	   - hoisting variable & function
	   - membuat object window
	   - membuat object this yg berisi object window
	b. Execution Phase
	   - Mengisi nilai variable
	   - menjalankan setiap baris kode
	   - skip function yg tidak dijalankan
	   - menjalankna function yg dipanggil

	Local Execution Context :
	a. Creation Phase
	   - Hoisting variable & function
	   - membuat object window
	   - membuat object this yg berisi object window
	   - membuat object argumenst yg berisi argument
	b. Execution Phase
	   - Mengisi nilai variable
	   - menjalankan setipa baris kode
	   - skipp function yg tidak dipanggil
	   - menjalankan function yg dipanggil

	Scope :
	Dalam Javascript ketika kita memanggil
	sebuah variable dalam function, maka
	Javascript akan mencari variable tersebut 
	dalam body functionnya, jika tidak ada
	maka javascript akan mencarinya kedalam
	arguments function nya, jika tidak ada juga
	maka cari di globalnya.
*/
// hello()

// const hello = function () {
// 	console.log('hello');
// }

/*
	A. Belajar Closure

	   Pengertian :
	   1. Clousure merupakan gabungan dari function
	      dan lexicall scope.
	   2. Closure merupakan function yg di return oleh
	      function lain dan datanya pun dari function lain
	      juga.

	   Fungsi Closure :
	   1. Untuk membuat Function Factories
	   2. Untuk membuat Private Method & Variable
*/
// Function Factories
// function salam(nama) {
// 	function dua(waktu) {
// 		console.log(`Selamat ${waktu} ${nama}`);
// 	}
// 	return dua;
// }

// function salam(nama) {
// 	return waktu => `Selamat ${waktu} ${nama}`;
// }

// let salam2 = salam('Mathius');
// console.log(salam2('Malam'));
// let salam3 = salam('Matthew');
// console.log(salam3('Pagi'))

// Private method & variable

// function increments() {
// 	let x = 0;

// 	return () => ++x;
// }
// const increment = console.log(increments()());
// // console.log(increment());
// // console.log(increment());
// // x = 1000;
// // console.log(increment());
// // console.log(increment());

/*
	Arrow Function :
	1. Mempersingkat penulisan function expression
	2. Tidak memiliki object this.
	3. Tidak memiliki object arguments
	4. Ketika memiliki satu parameter, tanda ()
	   tidak perlu di tulis.
	5. Ketika tidak memiliki parameter atau 
	   memiliki parameter lebih dari satu,
	   maka wajib menuliskan tanda ().
	6. Ketika menulis function dengan single 
	   line, maka kita tidak perlu menulis return
	   karena auto return secara implisit.
	7. Tidak dapat digunakan untuk membuat object
	   dengan constructor function.
	8. Tidak dapat digunakan untuk membuat method
	   pada object literal dan function declaration,
	   karena object this akan mengacu kepada this
	   global yaitu window.
	9. Wajib digunakan untuk membuat function dalam
	   method object literal, function declaration
	   dan constructor function, karena this akan 
	   mengacu kepada object yg bersangkutan (terjadi lexical function)
*/
// function mulai () { 
// 	console.log(arguments);
// }
// mulai(1,2,3)

/*
	Higher Order Function adalah
	sebuah function yg memiliki
	return value atau parameter berupa 
	function juga. return value dan 
	parameter yg berupa function ini
	disebut sebagai callback.
*/
// function mulai(selesai) {
// 	console.log('mulai');
// 	selesai();
// }

// mulai(selesai);

// function selesai() {
// 	console.log('selesai');
// }

// filter berfungsi untuk menyaring element array berdasarkan kondisi tertentu
// const angka = [1,2,3,4,5];
// const genap = angka.filter(item => item % 2 === 0);
// console.log(genap);

// map berfungsi untuk melooping array (menghasilkan array baru, bisa return gk bisa break continue)
// const genap = angka.map(item => {
// 	if(item % 2 === 0)
// 		return 'genap';
// 	else return item;
// })
// console.log(genap);

// reduce untuk mengkalkulasi array
// console.log(angka.reduce((accumulator, currentValue, i) => console.log(i) ));

/*
	Template Literal adalah string literal 
	yang memungkinkan di dalamnya terdapat
	expresion.

	contoh string literal :
	1. ''
	2. ""
	3. ``

	fungsi-fungsi template literal :
	a. Membuat multi line string
	b. Membuat HTML Fragments
	c. Membuat Embeded Expression
	d. Membuat Embeded Interpolation
	e. Membuat Tagged Template
*/
// a. membuat multi line string
// console.log(`Hello
// 	world`);

// // b. membuat HTML Fragments
// const nama = 'Mathius';
// let usia = 18;

// const mhs = { nama, usia };

// document.body.innerHTML += `<div>
// 	<p>Nama : ${mhs.nama}</p>
// 	<p>Usia : ${mhs.usia} tahun</p>
// </div>`;

// // c. membuat embeded expression
// console.log(`Nilai dari 3 * 4 adalah ${3 * 4}`);

// // d. membuat embeded interpolation
// console.log(`Halo nama saya ${mhs.nama} dan saya berusia ${mhs.usia} tahun`);

// // e. Tagged Template
// function mulai(str, ...values) {
// 	console.log(str.reduce((acc, cv, i) => `${acc}${cv}${values[i] || ''}`, ''));
// }

// mulai`Halo nama saya ${nama} dan saya berusia ${usia} tahun`;

// 1. Looping
// const mhs = [
// 	{
// 		name: 'Mathius',
// 		major: 'Computer'
// 	},
// 	{
// 		name: 'Kiko',
// 		major: 'Computer'
// 	},
// 	{
// 		name: 'Reza',
// 		major: 'Law & Politics'
// 	}
// ];

// document.body.innerHTML += `<div>
// 	${mhs.map(item => `<ul>
// 			<li>Nama : ${item.name}</li>
// 			<li>Jurusan : ${item.major}</li>
// 		</ul>`).join('')}
// </div>`;

// // 2. conditional
// const lagu = {
// 	judul: 'Anata ga orareru',
// 	artist: 'JPPC Worship',
// 	feat: 'Jworship'
// }

// document.body.innerHTML += `<div>
// 	<p>Judul : ${lagu.judul}</p>
// 	<p>Artis : ${lagu.artist} ${lagu.feat ? `- (feat. ${lagu.feat})` : ''}</p>
// </div>`;

// // 3. nested
// const mathius = {
// 	nama: 'Mathius',
// 	usia: 18,
// 	mataKuliah: ["Web & Mobile Programming", "Object Oriented Programming", "Algorithm"]
// }

// document.body.innerHTML += `<div>
// 	<p>Nama : ${mathius.nama}</p>
// 	<p>Usia : ${mathius.usia} tahun</p>
// 	<p>Mata Kuliah : <ol>
// 			${mathius.mataKuliah.map(item => `<li>${item}</li>`).join('')}
// 		</ol>
// 	</p>
// </div>`;

// document.body.innerHTML += `<div>
// 	<p>Nama : ${mathius.nama}</p>
// 	<p>Usia : ${mathius.usia} tahun</p>
// </div>`;

// // const change = (str, ...v) => {
// // 	let baru = '';

// // 	str.forEach((item, i) => {
// // 		baru += `${item}${v[i] || ''}`;
// // 	});

// // 	return baru;
// // }
// const change = (str, ...v) => str.reduce((acc, cv, i) => `${acc}${cv}${v[i] || ''}`, '')

// console.log(change`Mina-san konnichiwa, watashi wa ${mathius.nama}, soshite watashi wa ${mathius.usia} sai desu`);

// 1. Destructuring Array
// let data = [1,2,3,4];
// let [satu, dua, tiga, empat] = data;

// 2. Skipping items
// let [satu, , , empat] = data;

// 3. Swap items
// let x = 1;
// let y = 2;
// console.log(`X adalah ${x}`);
// console.log(`Y adalah ${y}`);

// [x, y] = [y, x];

// console.log(`X adalah ${x}`);
// console.log(`Y adalah ${y}`);

// 4. Destructuring array return value
// function calc(x, y) {
// 	return [x + y, x * y];
// }

// const [penjumlahan, perkalian] = calc(2,3);

// 5. rest parameter array
// let [x, ...y] = data;

// 6. Destructuring Object
let mhs = {
	nama: 'Mathius',
	usia: 18,
	bahasa: {
		frontend: 'React Js',
		backend: 'Express Js'
	}
};

// const {usia, nama} = mhs;

// 7. Mengubah nama property
// const {usia: sai, nama: nawa} = mhs;

// 8. Memberi nilai default
// const { usia, nama, bahasa = 'HTML' } = mhs;

// 9. Memberi nilai default dan mengubah nama property
// const {usia, nama, bahasa:lang = 'HTML'} = mhs;

// 10. Destructuring object tanpa assigment object kedalam variable
// ({nama, usia} = {
// 	nama: 'Sai',
// 	usia: 17
// })

// 11. Rest parameter object
// const {bahasa, ...data} = mhs;

// 12. Destructuring Parameter function
// function cetak( {nama, bahasa: {frontend:f, backend:b}} ) {
// 	console.log('Hai ' + nama + ' tech stack yg kamu gunakan adalah ' + f + ' dan ' + b);
// }

// cetak(mhs)

// 1. Destructuring return value
// function calc(x, y) {
// 	// return [x + y, x - y];
// 	return {
// 		penjumlahan: x + y,
// 		pengurangan: x - y
// 	}
// }

// const { pengurangan, penjumlahan } = calc(10, 5);
// const [pengurangan, penjumlahan] = calc(10, 5);

// 2. Destructuring Return value nested object
// const say = ( { nama, bahasa: {backend:b, frontend:f} } ) => `I'm ${nama}, I use tech stack is ${f} & ${b}`;

// console.log(say(mhs))

/*
	Dalam modern Javascript terdapat 2 jeni looping
	baru yaitu looping for ..of dan for ..in.
	a. for ..of
	   Looping baru yg berfungsi untuk
	   melooping dan menelusuri itterable
	   object.

	   itterable object :
	   1. String
	   2. Array
	   3. Arguments
	   4. NodeList
	b. for ..in
	   Berfungsi untuk melooping
	   dan menelusuri enumerable
	   object (property2 object)
*/
// for ..of
// 1. Melooping String
// let nama = 'Mathius';

// for(let word of nama) {
// 	console.log(word)
// }

// 2. Melooping array
let angka = [1,2,3,4,5];
// for(let x of angka) {
// 	console.log(x)
// }
// for(let [index, item] of angka.entries()) {
// 	console.log(`Index ke-${index} = ${item}`);
// }
// angka.forEach((item, index) => {
// 	console.log(`Index ke-${index} = ${item}`);
// })

// 3. Melooping arguments
// function looping() {
// 	for(let x of arguments) {
// 		// console.log(`Index ke-${index} = ${item}`);
// 		console.log(x)
// 	}
// }

// looping(1,2,3,4)

// 4. Melooping nodelist
// const p = document.querySelectorAll('p');

// for(let el of p) {
// 	el.textContent += ' edited';
// }

// spread operator adalah operator pada modern javascript yg befungsi untuk memecah itterables object menjadi single element
// 1. Menyalin array
// let baru = angka;
// baru = angka.slice(0,  5)
// baru = [...angka]
// baru[0] = 10;

// 2. menggabungkan array
// let angka2 = [6,7,8,9,10];
// const join = [...angka, ...angka2];

// 3. Mengubah nodelist menjadi array
// const p = document.querySelectorAll('p');
// [...p].map(item => console.log(item))

// 4. Membuat efek hover perhuruf
const h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = [...h1.textContent].map(item => `<span class="hover">${item}</span>`).join('');

/*
	Rest parameter adalah sesuatu
	yg merepresentasikan argument-argument
	pada parameter yg jumlahnya tidak di ketahui
	dan akan disimpan sebagai array.

	ket :
	1. Harus ditulis sebagai parameter terakhir
	2. Harus ditulis menjadi parameter satu2nya
*/
const filterBy = (type, ...v) => {
	return v.filter(item => typeof item === type)
};
console.log(filterBy('number', 1,2, 3, true, false, 'Mathius', 'Tessa', 'Merlin'))
