// // import * as App from './app';
// // // import {UserAbstract} from './app/UserAbstract';

// // const mathius = new App.Admin('mathius123','123','admin');
// // mathius.getUsername();

// // Fitur-Fitur Arrow Function
// // 1. Return secara otomatis
// // 2. Shorthand Function
// const coba = () => 'hello';

// console.log(coba());

// // 3. Tidak dapat digunakan untuk membuat method object literal & Function Declaration
// // const obj = {
// // 	nama: 'Mathius',
// // 	show: ()=> {
// // 		console.log(this);
// // 	}
// // }

// function obj(nama)
// {
// 	// const ob = {};
// 	this.nama = nama;
// 	this.show = () =>
// 	{
// 		console.log(this);
// 	}

// 	// return ob;
// }
// new obj('Mathius').show();

// // 4. Wajib digunakan ketika ingin membuat function dalam method
// // const siswa = {
// // 	nama: 'Matthew',
// // 	say: function()
// // 	{
// // 		(()=>{console.log(this)})();
// // 	}
// // }

// // function siswa(nama)
// // {
// // 	// let obj = {};
// // 	this.nama = nama;
// // 	this.say = function(){
// // 		(()=>{console.log(this)})();
// // 	}
// // 	// return obj;
// // }

// // new siswa('Mathius').say();

// // 5. Tidak memiliki keyword this
// // 6. Tidak dapat digunakan untuk membuat object dengan constrcutor function tapi hanya bisa pake function declaration
// const User = function(username, password) 
// {
// 	// const obj = {};

// 	this.username = username;
// 	this.password = password;
// 	this.show = function()
// 	{
// 		console.log(this);
// 	}

// 	// return obj;
// }

// console.log(new User('mathius',123));

// function nama(nama)
// {
// 	nama = nama || 'Default';

// 	console.log(nama);
// }

// nama();

// 1. Menggabungkan array
let frontend = ['Vue Js','Vuex'];
let backend = ['Express Js','Sequelized'];
const mytech = [...frontend, ...backend];
mytech.forEach(item => console.log(`My Tech is ${item}`));

// 2. Mengirimkan beberapa parameter ketika memnaggil function dan mengubahnya menjadi array
const hello = (...data) => { console.log(data[0] + ' - ' + data[1] + ' - ' + data[2]) };
hello('Mathius','Kormasela',12);

// 3. Mengirimkan array saat menjalankan fungsi dan di terima sebagai beberapa parameter
const hello2 = (nama, marga) => `${nama} ${marga}`;
let nama = ['Mathius','Kormasela'];
console.log(hello2(...nama));

console.log(`Halo ${nama}`);
console.log(`
	<>
`);
const showAlert = (str, nama, marga) => `${str[0]}${str[1]} ${nama}`;
const nawa = 'Mathius';
const marga = nama[1];
console.log(showAlert`hello ${nawa} ${marga}world`);

// const name = 'Mathius Kormasela';
// let age = 18;

const mathius = {
	name : 'Mathius',
	age: 18,
	sayYourName: function()
	{
		console.log(`Watashi wa ${name} desu`);
	}
};

console.log(mathius);

let { age,name, sayYourName } = mathius;
// console.log(age)
sayYourName();