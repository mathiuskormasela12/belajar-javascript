/*
	======= Belajar Destructuring Variable =======

	A. Pengertian 

		 Destructuring Variable atau Destructuring Assignment
		 adalah expresion atau sintaks dalam Javascript
		 untuk membongkar elemen-elemen pada array dan juga
		 property-property serta method pada object.
*/

// 1. Destructuring Array
// const perkenalan = ['Halo','nama','saya','Mathius Kormasela'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);
// console.log(nama)

// 2. Skipping Item
// const [salam, , ,nama] = perkenalan;
// console.log(nama);

// 3. Swap Item ( Menukar isi variable )
// let nama = 'Mathius';
// let marga = 'Kormasela';

// console.log(nama);
// console.log(marga);
// [nama, marga] = [marga, nama];
// console.log(nama);
// console.log(marga);

// 4. Rest Parameter
// const data = ['Mathius', 'Kormasela', '12', 'RPL'];
// const [nama, marga, ...values] = data;
// console.log(nama);
// console.log(marga);
// console.log(values);

// 5. Return Value
// function coba()
// {
// 	return [1, 2];
// }

// const [ a, b ] = coba();
// console.log(a);
// console.log(b);

// 6. Destructuring Object
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18
// };

// const { nama, usia } = mhs;
// console.log(nama);
// console.log(usia);

// 7. Mengubah nama property
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18
// };

// const { nama : n, usia : u } = mhs;
// console.log(n);

// 8. Memberi nilai default
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// const { nama, usia, email = 'default@email.com' } = mhs;
// console.log(email);

// 9. Mengubah nama property serta memberi nilai default
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// const { nama : n, usia : u, email : e = 'default@email.com' } = mhs;
// console.log(e);

// 10. Destructuring Object tanpa membuat object yg disimpan dalam variable
// ({ nama, usia } = { nama: 'Mathius Kormasela', usia: 18 });
// console.log(nama);

// 11. Destructuring Object dalam Function
// const mhs = {
// 	id: 123,
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// function getIdMhs({ id })
// {
// 	return id;
// }

// console.log(getIdMhs(mhs));

// 12. Rest Parameter Object
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// const { nama, ...values } = mhs;
// console.log(values);

// 1. Memecah array menjadi beberapa variable
// const data = ['Vue Js','Expres Js', 'MongoDB'];
// const [ frontendFramework, backendFramework, database ] = data;
// console.log(database);

// 2. Skipping item
// const [ frontendFramework , ,database ] = data;
// console.log(frontendFramework);

// 3. Menukar isi variable
// let a = 1;
// let b = 2;
// [a,b] = [b, a]
// console.log(a);

// 4. Rest Parameter Pada Array
// const [ frontendFramework, ...tech ] = data;
// console.log(tech[0]);

// 5. return value
// const cetak = object => object;
// const [ x, y, z ] = cetak(data);
// console.log(z);

// 6. Memecah property object menjadi beberapa variable
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18
// };

// const { usia, nama } = mhs;
// console.log(nama + ' ' + usia);

// 7. Memecah property object tanpa menyimpan object kedalam variable
// ({usia, nama} = { nama: 'Mathius Kormasela', usia: 18});
// console.log(usia + nama);

// 8. Mengubah nama variable
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18
// };

// const { usia : u, nama } = mhs;
// console.log(u);

// 9. Memberi nilai default
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// const { usia, email = 'default@email.com', nama } = mhs;
// console.log(email);

// 10. Mengubah nama variable & memberi nilai default
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18
// };

// const { email : e = 'default', usia, nama } = mhs;
// console.log(e);

// 11. Rest Parameter Object
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	usia: 18,
// 	email: 'samdicova@gmail.com'
// };

// const { usia, ...val } = mhs;
// console.log(val);

// 12. Parameter pada function
const mhs = {
	nama: 'Mathius Kormasela',
	usia: 18
};

function coba({nama})
{
	return nama;
}

console.log(coba(mhs));














































