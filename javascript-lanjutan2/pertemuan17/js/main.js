/*
	====== Belajar Looping Baru ======

	A. Pendahuluan

		 Dalam Modern Javascript kita memiliki
		 dua looping baru, yaitu for...in
		 dan for..of.

		 Berikut Penjelasan :
		 a. for...of

		    Looping for..of adalah jenis
		    looping yang dapat mengulang atau 
		    menelusuri object yang iterable

		    Berikut object iterable :
		    1. String
		    2. Array
		    3. Arguments & NodeList
		    4. TypeArray
		    5. Map
		    6. Set
		    7. Userdefined iterables

		b. for...in

			 Looping for..in adalah jenis looping
			 yang berfungsi untuk mengulang dan 
			 menelusuri object yang enumerable.
			 object yang enumerable maksudnya
			 property-property object.
*/

// For...of

// 1. Melooping array
// const nama = ['Mathius','Kiko','Fadhli'];

// for
// for(let i = 0; i < nama.length; i++)
// {
// 	console.log(nama[i]);
// }
// while
// let i = 0;
// while(i < nama.length)
// {
// 	console.log(nama[i]);
// 	i++;
// }
// foreach
// nama.forEach( item => console.log(item) );

// for( let x of nama )
// {
// 	console.log(x);
// }

// nama.forEach( (item, index, array) => 
// {
// 	console.log(`${item} adalah mahasiswa ke-${index + 1}`);
// } )

// for(let [index, item] of nama.entries())
// {
// 	console.log(`${item} adalah mahasiswa ke-${index + 1}`);
// }

// 2. Melooping String
// const nama = 'Mathius';

// for( let x of nama )
// {
// 	console.log(x);
// }

// 3. Arguments
// function penjumlahan()
// {
// 	// return arguments.reduce((acc, cv) => acc + cv);
// 	let result = 0;

// 	// arguments.forEach(item => {
// 	// 	result += item;
// 	// })

// 	for( let x of arguments )
// 	{
// 		result += x;
// 	}

// 	return result;
// }

// console.log(penjumlahan(1,2,3,4,5));

// 4. NodeList
const liNama = document.querySelectorAll('.nama');

// liNama.forEach(item => console.log(item.textContent));

// for(const x of liNama)
// {
// 	console.log(x.innerHTML);
// }

// For...in
const mhs = {
	namaMahasiswa: 'Mathius',
	ttl: 'Jakarta, 04 Oktober 2002',
	usia: 17,
	jurusan: 'Teknik Informatika'
};

for( const x in mhs)
{
	console.log(mhs[x]);
}