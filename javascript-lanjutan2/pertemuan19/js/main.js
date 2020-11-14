/*
	======= Belajar Rest Parameter =======

	A. Pengertian

		 Rest Parameter adalah sesuatu yang merepresentasikan
		 argument-argument atau parameter pada sebuah function
		 yang jumlahnya tidak terbatas dan akan membuatnya 
		 berada dalam array. Rest Parameter dinotasikan 
		 dengan lambang (...) sama seperti Spread Operator.

		 Note :
		 a. Tidak boleh ditulis sebagai
		    parameter pertama.
		 b. Harus sebagai parameter terakhir
*/
// function myFunc(a, b, ...args)
// {
// 	// return `a = ${a}, b = ${b}, args = ${args}`;
// 	// return args;
// 	// return Array.from(arguments);
// 	// return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// Menjumlahkan parameter
// function jumlahkan(...angka)
// {
// 	// let result = 0;

// 	// for(let i = 0; i < angka.length; i++)
// 	// {
// 	// 	result += angka[i];
// 	// }

// 	// for(let x of angka)
// 	// {
// 	// 	result += x;
// 	// }

// 	// angka.forEach(item => result += item);

// 	return angka.reduce((acc, cv) => acc + cv);
// }

// console.log(jumlahkan(1,2,3,4,5));

// Rest Parameter pada Array Destructuring
// const kelompok1 = ['Mathius', 'Kiko','Fadhli','Reza','Fadhil'];
// const [ ketua, wakil, ...anggota ] = kelompok1;
// console.log(anggota);

// Rest Parameter pada Object Destructuring
// const team = {
// 	pm: 'Sandhika Galih',
// 	frontend1: 'Fadhli',
// 	frontend2: 'Fadhil',
// 	backend1: 'Mathius',
// 	backend2: 'Kiko',
// 	devops: 'Ramadhanu'
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// Filtering
function filterBy( type, ...values )
{
	// const res = [];

	// values.forEach(item =>
	// {
	// 	if(typeof item === type) res.push(item);
	// })

	// return res;

	return values.filter(item  => typeof item === type);
}

console.log(filterBy('number', true, false, 1, 2, 'Mathius','3',true));

const data = [1, 2, '3'];
console.log(data.some( item => typeof item === 'number' ));