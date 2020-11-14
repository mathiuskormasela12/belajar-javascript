/*
	====== Belajar Template Literals ======

	A. Pengertian

		 Template Literals adalah String Literals
		 yang memungkin adanya expresion didalamnya.
		 String Literals adalah string biasa.

		 contoh String Literal :
		 a. 'Mathius'
		 b. "Mathius Kormasela"
		 c. `Hello Mathius Kormasela`

  B. Fungsi 

  	 Dengan menggunakan Template Literals
  	 itu memungkinkan kita untuk membuat.
  	 a. Multiline String
  	 b. Embedded Expresion
  	 c. Embedded Interpolation
  	 d. HTML Fragments
  	 e. Tagged Template

	C. Rumus

		 `string disini ${expresion}`
*/
// a. Multiline String
console.log('Mathius \nKormasela');
console.log(`Mathius
Kormasela`);

// b. Embeded Expresion
console.log(`Nilai dari 2 + 3 adalah ${2 + 3}`);

// c. Embedded Interpolation
let nama = 'Mathius';
let usia = 18;
console.log(`Nama saya ${nama}, saya ${usia} tahun`);

// d. HTML Fragments
const mhs = {
	nama: 'Mathius Kormasela',
	usia: 18,
	nrp: '002838321',
	jurusan: 'Computer'
};

// let el = '';
// el += '<div class="hero">\n';
// el += '	<p>\n	  ' + mhs.nama + '\n	</p>';
// el += '\n</div>';
let el = `
<div class="hero">
	<p>
		${mhs.nama}
	</p>
</div>
`;
console.log(el);