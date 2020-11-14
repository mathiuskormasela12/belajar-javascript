/*
	====== Belajar Template Literal ======

	Fungsi-fungsi Template Literal :
	a. Untuk mencetak variable di dalam string.
	b. Untuk dapat menulis string atau element HTML dengan line break (enter dll)
	c. Untuk dapat memanngil function
*/

// a. Untuk mencetak variable di dalam string
let nama = 'Mathius';
let usia = 18;

console.log(`Halo nama saya ${nama} & berusia ${usia} tahun`);

// b. Untuk menulis string atau element HTML dengan enter
console.log(`<div>
							<p>${nama}</p>			
						</div>`);

// c. Untuk dapat memanggil function
/*
	keterangan :
	Ketika kita ingin menjalankan function
	dengan menggunakan Template Literal,
	kita wajib membuat dua parameter.
	Satu untuk string dan satu lagi untuk
	nilai yg ingin kita kirimkan.
*/
let name = 'Mathius';
let age = 18;
let title = 'PHD';

const show = (strings, nama, usia, title) => 
{
	let firstWord = strings[0];
	let secondWord = strings[1];
	let thirdWord = strings[2];
	console.log(`${firstWord}${nama}${secondWord}${usia}${thirdWord}Lulusan ${title} MIT`);
}

show`Halo nama saya ${name} dan saya berusia ${age} tahun ${title}`;