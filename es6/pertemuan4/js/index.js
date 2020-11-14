/*
	====== Belajar Rest & Spread ======

	Fungsi-Fungsi Spread :
	a. Untuk menggabungkan array
	b. Untuk memecah beberapa parameter
	   yg dikirimkan ketika kita menjalankan function
	   dan function akan menangkapnya sebagai satu buah
	   array yang memiliki beberapa element.
	c. Untuk memecah array yg dikirimkan pada parameter
	   function ketika function tersebut dijalankan sehingga
	   array itu menjadi beberapa parameter yg bukan array.
*/

// a. Menggabungkan array
let backEndFramework = ['Express Js','Sails Js','Adonis Js'];
let frontEndFranework = ['Vue Js','React Js','Angular Js'];
let join = [...backEndFramework, ...frontEndFranework];

join.forEach(item => console.log(item));

// b. Memecah beberapa parameter yg dikirimkan ke function menjadi sebuah array dengan beberapa elementnya
const signIn = (...userInfo) => 
{
	console.log(userInfo[0] + ' punya password ' + userInfo[1] + ' dan saya berusia ' + userInfo[2] + ' tahun');
}

let username = 'mathius';
let password = '123';
let usia = 18;
signIn(username, password, usia)

// c. Memecah array yg dikirimkan ketika menjalankan function menjadi beberapa parameter
const signIn2 = (username, password,id) => {
	console.log(username + ' punya password ' + password + '-' + id);
}
let data = ['Mathius',123,12]
signIn2(...data)