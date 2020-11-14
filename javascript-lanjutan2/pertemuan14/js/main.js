/*
	===== Belajar Tagged Templates =====

	A. Pengertian

		 Tagged Templates adalah Templates Literals
		 yang lebih kompleks & sakti yang memungkinkan
		 string & expresionnya digunakan sebagai
		 parameter sebuah function untuk melakukan
		 sesuatu terhadap string & expresionnya.

	B. Rumus

		 namaFunction`wkwkwkwkw ${exp1}`

	C. Fungsi

		 Berikut Fungsi dari Tagged Templates :
		 1. Escaping HTML Tags
		 	  Untuk membersihkan suatu string dari
		 	  script-script jahat, contoh script
		 	  alert Javascript atau script HTML
		 	  yang terhubung dengan CSS.
		 2. Translation & Interationalization
		 	  Untuk melakukan translate bahasa
		 	  dengan menggunakan suatu library.
		 3. Styled Components
		    Untuk menghias component-component
		    website menggunakan library Styled Components 
		    yang dibuat menggunakan React Js.
*/
const nama = 'Mathius';
const usia = 18;
const email = 'samdicova@gmail.com';

// function coba(strings, ...values)
// {
// 	// let result = '';

// 	// strings.forEach((item, index) => 
// 	// {
// 	// 	result += `${item}${values[index] || ''}`;
// 	// });

// 	// return result;
// 	return strings.reduce((acc, cv, i) => `${acc}${cv}${values[i] || ''}`,'');

	
// 		'' + 'Mathius' + 'Halo nama saya ' = 'Mathius Halo nama saya'
// 		'Mathius Halo nama saya' + '18' + ' saya' = 'Mathius Halo nama saya 18 saya'
// 		'Mathius Halo nama saya 18 saya' + '' + 'tahun'
	
// }

// const text = coba`Halo nama saya ${nama}, saya ${usia} tahun.`;

// console.log(text);

function highLight(strings, ...values)
{
	return strings.reduce((acc, cv, i) => `${acc}${cv}<span class="hl">${values[i] || ''}</span>`,'');
}

const text = highLight`Halo nama saya ${nama}, saya ${usia} tahun. e-mail saya : ${email}`;

document.body.innerHTML = text;