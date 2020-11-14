const data = ['Javascript 12 _','Python','Ruby'];
// console.log(data);

// 1. shift untuk menghapus dan mengambil array index ke 0
// const data1 = data.shift();
// console.log(data);
// console.log('Data yg dihapus adalah', data1);

// 2. pop untuk menghapus & mengambil array index terakhir
// const data1 = data.pop();
// console.log(data);
// console.log('Data yg dihapus adalah', data1);

// 3. splice untuk menambahkan data pada array di index berapapun
// data.splice(1,0, 'PHP');
// console.log(data);

// 4. splice untuk menghapus data pada array di index berapapun
// const data1 = data.splice(1, 1);
// console.log(data);
// console.log('Data yg dihapus adalah', data1);

// 5. push untuk menambahkan data pada array di index terakhir
// data.push('PHP');
// console.log(data);

// 6. unshift untuk menambahkan data pada array di index ke 0
// data.unshift('Java','PHP');
// console.log(data);

// 7. Math adalah object yang memiliki property & method yang bukan merupakan instans object
// Dalam object Math terdapat property-property yang merupakan sebuah konstanta
// yang memiliki nilai yg biasanya digunakan untuk operasi matematika.

// Nilai dari logaritma natural e
// console.log(Math.E);
// Nilai dari logaritma natural 2
// console.log(Math.LN2);
// Nilai dari logaritma natural 10
// console.log(Math.LN10);
// Nilai dari logaritma natural e dengan basis 2
// console.log(Math.LOG2E);
// Nilai dari logaritma natural e dengan basis 10
// console.log(Math.LOG10E);
// Nilai dari phi 
// console.log(Math.PI);
// Nilai dari akar kuadrat 2
// console.log(Math.SQRT2);
// Nilai dari 1 : akar kuadrat 2
// console.log(Math.SQRT1_2);

// 8. Math Method adalah method-method dalam object Math yg berfungsi untuk melakukan perhitungan matematika yg sulit
// let x = 8.0;
// // 9. ceil berfungsi untuk membulatkan angka keatas
// console.log(Math.ceil(x));
// // 10. floor berfungsi untuk membulatkan angka kebawah
// console.log(Math.floor(x));
// // 11. round berfungsi untuk membulatkan angka ke angka terdekat
// // 0 - 4 bulatkan kebawah 5 - 9 bulatkan keatas
// console.log(Math.round(x));

// 12. abs berfungsi untuk mengubah angka menjadi angka absolute
// minus jadi plus, plus tetap plus
// let x = 2;
// console.log(Math.abs(x));
// x = -2;
// console.log(Math.abs(x));

// 13. pow berfungsi untuk membuat perpangkatan
// console.log(Math.pow(3,2)); // -> hasilnya 9

// 14. sqrt berfungsi untuk membuat akar kuadrat
// console.log(Math.sqrt(64));

// 15. log berfungsi untuk membuat logaritma
// a. logaritma murni
// console.log(Math.log(2));
// // b. logaritma biasa
// console.log(Math.log2(8));
// console.log(Math.log10(100));

// 16. min berfungsi untuk menentukan angka terkecil
// console.log(Math.min(2,3,6,2,1));

// 17. max berfungsi untuk menentukan angka terbesar
// console.log(Math.max(2,3,6,2,1));

let el = data[0];
// el = el.split(' ');
// el.unshift(' ');
// el = el.join(' ');
// console.log(el);
// Javascript
// 18. charCodeAt berfungsi untuk mengecek suatu karakter kode ASCIInya apa
// console.log(el.charCodeAt(1)); // -> 97 kode ASCII dari a

// 19. String.fromCodePoint berfungsi untuk mengecek karakter dari kode ASCII atau hex
// console.log(String.fromCodePoint(97));

// 20. toLowerCase untuk membuat semua huruf suatu string menjadi huruf kecil semua
// console.log(el.toLowerCase());

// 21. toUpperCase untuk membuat semua huruf suatu string menjadi huruf kapital semua
// console.log(el.toUpperCase());

// 22. charAt untuk mengambil sebuah karakter dalam suatu string
// console.log(el.charAt(4));

// 23. substr untuk mengambil beberapa karakter dalam suatu string
// console.log(el.substr(0, 4));
// console.log(el.substring(0, 4));

// 24. slice untuk mengambil beberapa karakter dalam suatu string
// console.log(el.slice(0, 4));

// 25. split untuk memcah string menjadi array
// console.log(el.split());

// 26. trim untuk menghapus whitespace di awal dan akhir string
// console.log(el.trim());

// 27. concat untuk menggabungkan string
// el = el.concat(' For Fullstack Web Developer');
// console.log(el);

// 28. includes berfungsi untuk mengecek suatu string terdapat karakter tertentu tidak
// console.log(el.includes('o'));

// 29. startsWith berfungsi untuk mengecek suatu string diawal suatu karakter tertentu tidak
// console.log(el.startsWith('scr', 4));

// 30. endsWith berfungsi untuk mengecek suatu string diakhiri suatu karakter tertentu tidak
// console.log(el.endsWith('ri', 8));

// 31. repeat untuk mengulang string
// console.log(el.repeat(2));

// 32. konversi ke string
// let x = 10;
// x = true;
// x = x.toString();
// let x = new Number(12);
// x = x.valueOf();
// console.log(typeof(x));

// 33. indexOf berfungsi untuk mengecek suatu karakter string berada di index keberapa
// dibaca dari kiri kekanan
// console.log(el.indexOf('s'));

// 34. lastIndexOf berfungsi untuk mengecek suatu karakter string yang dibaca dari belakang berada di index keberapa
// el = 'Javascript Java';
// console.log(el.lastIndexOf('J', 1));

// 35. search berfungsi untuk mengecek suatu karakter berada di index keberapa
// console.log(el.search('s'));
// console.log(el.search(/s/));

// 36. match berfungsi untuk mengambil informasi mengenai suatu karakter atau string dalam bentuk array
// informasinya berupa, karakter atau strtingnya sendiri, indexnya, inputnya.
// console.log(el.match('s'));

// 37. replace untuk mengganti string
// x = 'Mathius';
// console.log(x);
// x = x.replace('thi','ti' );
// console.log(x);

// 38. reverse berfungsi untuk mengubah urutan elemen array menjadi sebaliknya
// el = data.reverse();
// console.log(el);

// 39. concat untuk menggabungkan array
// const x = ['Django', 'Vue Js', 'Express Js'];
// console.log(data.concat(x));

// 40. slice berfungsi untuk mengcopy array
// const x = data.slice(0, 2);
// console.log(x);

// 50. join berfungsi untuk menggabungkan array menjadi sebuah string
// let x = [1,2,3,4,5];
// x = x.join(' - ');
// console.log(x);

// 51. split berfungsi untuk memecah string menjadi array
// console.log(x.split(' - '));

// 52. indexOf berfungsi untuk mengecek suatu element array berada di index keberapa
// console.log(data.indexOf('Python'));

// 53. forEach berfungsi untuk melooping & menampilkan array
// tidak menghasilkan array baru
// tidak bisa menggunakan keyword return
// data.forEach((item, index, array) => 
// {
// 	console.log(array[index]);
// })

// 54. map berfungsi untuk melooping & menampilkan element array
// menghasilkan array baru
// bisa menggunakan keyword return
// x = data.map((item, index, array) => item);
// console.log(x);

// 55. filter berfungsi untuk menyaring array menggunakan kondisi tertentu
const mhs = [
	{
		nama: 'Mathius',
		nim: '0023821',
		jurusan: 'Teknik Informatika',
		jenisKelamin: 'pria'
	},
	{
		nama: 'Emii',
		nim: '0028381',
		jurusan: 'Fashion & Design',
		jenisKelamin: 'wanita'
	},
	{
		nama: 'Igusa',
		nim: '00291919',
		jurusan: 'Japanese Studies',
		jenisKelamin: 'wanita'
	},
	{
		nama: 'Jerome Polin',
		nim: '00192012',
		jurusan: 'Matematika Terapan',
		jenisKelamin: 'pria'
	},
	{
		nama: 'Rizki Ramadhan',
		nim: '00192737',
		jurusan: 'Teknik Informatika',
		jenisKelamin: 'pria'
	}
];
// const mhsTI = mhs.filter(item => item.jurusan === 'Teknik Informatika');
// console.log(mhsTI);

// 56. every berfungsi untuk mengecek apakah suatu array itu semua elementnya memenuhi kondisi tertentu atau tidak
// console.log(mhsTI.every(item => item.jenisKelamin === 'pria'));

// 57. some berfungsi untuk mengecek apakah suatu array itu ada beberapa elementnya yg memenuhi kondisi tertentu
// console.log(mhs.some(item => item.jenisKelamin === 'pria'));

// 58. find berfungsi untuk mencari sebuah element array yg memenuhi kondisi tertentu, jika elementnya ada banyak, maka ambil yg pertama JS temui
// dan method ini akan mengembalikan element arraynya
// console.log(mhs.find(item => item.jenisKelamin === 'wanita'));


// 59. findIndex berfungsi untuk mencari index dari sebuah element yg memenuhi kondisi tertentu, jika elementnya ada banyak, maka ambil yg pertema JS temui
// console.log(mhs.findIndex(item => item.jenisKelamin === 'pria'));

// 60. reduce berfungsi untuk mengkalkulasi element-element pada array
// ada 3 parameter yaitu accumulator, currentValue & index (index bersifat optional)
// let x = [1,4,2,8];
// console.log(x.reduce((accumulator, currentValue, index) => accumulator + currentValue, ''));
/*
	[1,2,3,4,5]
	nilai awal = 1
	index awal 1
	currentValue = 2
	accumulator = 1

	1 + 2 = 3
	3 + 3 = 6
	6 + 4 = 10
	10 + 5 = 15

	[1,2,3,4,5]
	nilai awal = 0
	index awal 0
	currentValue = 1
	accumulator = 0

	0 + 1 = 1
	1 + 2 = 3
	3 + 3 = 6
	6 + 4 = 10
	10 + 5 = 15

	[1,2,3,4,5]
	nilai awal = ''
	index awal 0
	currentValue = 1
	accumulator = ''

	'' + 1 = '1'
	'1' + 2 = 12
	12 + 3 = 123
	123 + 4 = 1234
	1234 + 5 = 12345 
*/

// 61. reduceRight sama seperti reduce namun reduceRight akan dimulai dari kanan ke kiri
// console.log(x.reduceRight((accumulator, currentValue, index) => accumulator + currentValue, ''));
/*
	[1,4,2,8]
	acc = ''
	cv = 8
	index = 0
	nilai awal = ''

	'' + 8 = '8'
	'8' + 2 = '82'
	'82' + '4' = '824'
	'824' + 1 = '8241'
*/

// 62. sort berfungsi untuk mengurutkan array secara ascending (a ke z)
// console.log(x.sort());

// 63. eval berfungsi untuk mengecek apakah suatu string memiliki expression atau statement tidak
let y = '1 + 2 * 3';
// console.log(eval(y));

// 64. isFinite berfungsi untuk mengecek suatu angka itu nilainya terbatas atau tidak
// jika terbatis balikin true
// console.log(isFinite(1));

// // jika tidak terbatas balikin false
// console.log(isFinite(1/0));

// // jika bukan angka & juga bukan string angka balikin false
// console.log(isFinite('wkwkw'));

// // jika string angka & angkanya terbatas balikin true
// console.log(isFinite(2002));

// // jika string angka & stringnya ada karakter yg bukan angka maka balikin false
// console.log(isFinite('1 + 1'));

// 65. isNaN untuk mengecek apakah suatu variable tipe datanya bukan angka atau tidak
// jika bukan angka maka tampilin true
// console.log(isNaN('wkwkw'));

// jika tipe datanya string tapi isinya angka maka flase
// console.log(isNaN('2'));

// jika tipe datanya number tampilin false
// console.log(isNaN(2));

// 66. Convert to number
// y = '10';
// console.log(typeof y);
// y = Number(y);
// y = parseInt(y);
// y = parseFloat(y);
// console.log(y + ' tipe datanya adalah ' + typeof(y));

// 67. convert to string
// x = 1;
// console.log(typeof x);
// // x = x.toString();
// x = String(x);
// console.log(typeof(x));

// 68. encodeURI berfungsi untuk mengeliminasi karakter-karakter
// aneh dalam URL atau URI kecuali ( +=,:/@#$&? )
//1. +
//2.  =
//3.  :
//4.  ,
//4.  /
//6.  &
//7.  $
//8.  @
//9.  ?
//10. #
// 11. .
// 12. (
// 13. )
// 14. *
// 15. ;
// 16. A-Z
// 17. a-z
// 18. 0-9
// 19. -
// 20. _

// 21. !
// 22. ~
// 23. '

// x = "https://f*ceb00k!_;12-'.com";
// x = "+=$&@,:/#?()_-*'.aA0!;~>";
// console.log(encodeURI(x));

// 69. decodeURI berfungsi untuk mengambilkan URL asli 
// x = encodeURI(x);
// console.log(decodeURI(x));
x = 'M@th1u$_ K0rmasela -&^*/! \r \ns';

// 70. Pengenalan RegExp
// console.log(x.search(/script/));

// 71. test berfungsi untuk mengecek apakah dalam string terdapat karakter tertentu
// jika ada maka true, jika tidak ada maka false
// console.log(/S/.test(x));

// 72. exec berfungsi untuk mengecek apakah dalam string terdapat karakter tertentu
// jika ada maka tampilin informasi mengenai stringnya yaitu string itu sendiri, indexnya, inputannya, groupsnya
// jika tidak ada maka tampilin null
// untuk mengubah suatu string menjadi regex
// const z = new RegExp('s');
// console.log(z.exec(x));

// 73. replace berfungsi untuk mengubah string
// console.log(x.replace(/JS/gi, 'Javascript'));

// 74. flags dalam regexp berfungsi untuk memberikan hasil yg berbeda
// console.log(x.match(/JS/i));
// console.log(x.search(/a/g));

// 75. Token dikelompokan berdasarkan fungsinya yaitu, berdasarkan jenis karakter & batasannya
// Berdasarkan jenis karakter
// a. untuk mengambil semua karakter kecuali karakter line-break like \n dan \r
// console.log(x.match(/./g));
// // b. untuk mengambil angka 1 digit (0-9)
// console.log(x.match(/\d/g));
// // c. untuk mengambil yg bukan angka
// console.log(x.match(/\D/g));
// // d. untuk mengambil huruf, angka & underscore
// console.log(x.match(/\w/g));
// // e. untuk mengambil yg bukan huruf, angka & underscore
// console.log(x.match(/\W/g));
// // f. untuk mengambil spasi & line-break
// console.log(x.match(/\s/g));
// // g. untuk mengambil yg bukan spasi dan line-break
// console.log(x.match(/\S/g));

// // Berdasarkan batasnya
// // a. untuk mencari awal string
// console.log(x.match(/^M/g));
// // b. untuk mencari akhir string
// console.log(x.match(/S$/g));
// // c. untuk mencari awal kata
// console.log(x.match(/\bK/g));
// // d. untuk mencari akhir kata
// console.log(x.match(/_\b/g));

// 76. karakter spesifik
// a. mengambil beberapa karakter
console.log(x.match(/M@th1u/g));
// b. mengambil sebuah karakter
console.log(x.match(/[M@th1u]/g));
// c. mengambil karakter a-z
console.log(x.match(/[a-c]/g));
// d.mengembil semua karakter kecuali
console.log(x.match(/[^*_@$&-/^\r\n! ]/g));