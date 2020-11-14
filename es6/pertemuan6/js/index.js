/*
	===== Belajar Shorthand & Destructing Object and Array =====

	a. Shorthand object adalah cara
	   kita untuk mempersingkat penulisan
	   object.
	b. Desctructing Object and array adalah cara
	   kita untuk memecahkan object dan array menjadi
	   beberapa bagian.
*/

// a. Shorhand object
let nama = 'Mathius';
let usia = 18;
let getData = () => `Hello my name is ${nama} and i'm ${usia} years old`;
// function getData()
// {
// 	return `Hello my name is ${nama} and i'm ${usia} years old`;
// }

/*
	Ketika kita ingin membuat object
	yang nama setiap propertynya sama
	dengan variable-variable dan function-function
	diluar maka kita hanya tinggal perlu
	mendefinisikan nama propertynya saja
	tidak perlu kita tulis juga isinya.
*/
let member = {
	nama,
	usia,
	getData
};

console.log(member.getData());

// b. Destructuring Object and Array
let members = {
	name: 'Mathius',
	age: 18,
	getData2: function()
	{
		return `My name is ${name} and i'm ${age} years old`;
	}
};

let {age : sai, name : nawa} = members;
console.log(nawa);

let angka = [1,2,3];
let [a,b,c] = angka;
console.log(a + b + c);