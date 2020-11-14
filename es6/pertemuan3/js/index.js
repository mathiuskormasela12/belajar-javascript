/*
	====== Belajar Parameter Default ======

	Dalam Javscript kita dapat membuat
	sebuah function ataupun method memiliki
	sebuah parameter deafult jika kita tidak
	mengirimkan parameternya ketika kita
	menjalankan function ataupun method.

	Cara Pertama :
	a. var nama = nama || 'Isi Default'
	b. Mengisi langsung parameter pada kurung bulat functionnya
	c. Mengisi langsung dalam body functionnya
*/

const generateAge = () => {
	return Math.floor(Math.random() * 80 + 1);
}

const sayHello = (nama = '...', usia = generateAge()) =>
{
	// if(typeof(nama) === 'undefined' && typeof(usia) === 'undefined')
	// {
	// 	nama = '...';
	// 	usia = 0;
	// }
	// else if(typeof(nama) === 'undefined')
	// {
	// 	nama = '...';
	// }
	// else if(typeof(usia) === 'undefined') 
	// {
	// 	usia = 0;
	// }

	// Javascript tolong isi variable nama dengan nama jika nama ada isinya
	// Namun jika nama tidak punya isi, maka isi saja dengan string '...'
	// nama = nama || '...';
	// Javascript tolong isi variable usia denga usia jika usia ada isinya
	// Namun jika usia tidak punya isi, maka isi saja dengan 0.
	// usia = usia || 0;

	console.log('Halo nama saya ' + nama + ' dan saya berusia ' + usia );
}

sayHello('Mathius',18);