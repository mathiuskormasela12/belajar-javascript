"use strict";

/*
	======= Belajar Arrow Function =======

	Arrow Function adalah syntax baru untuk
	membuat function dalam JavaScript. Definisinya
	Arrow Function adalah = & > digunakan untuk
	menulis shorthand function.

	Fitur-Fitur Arrow Function :
	a. Kita tidak perlu menulis keyword
	   return ketika kita ingin membuat
	   function mengembalikan nilai.
	b. Arrow Function tidak memiliki keyword this
	c. Dapat menulis shorthand Function

	Rumus: 

	const namaFunction = () => 
	{
		statement;
	}
*/
// let members = ['Mathius','Kiko','Fadmax'];
// members.forEach(item => console.log(item));
// let membersIndex = members.map((item, index) => item + '-' + index);
// console.log(membersIndex);
// let SekolahKoding = {
// 	members: ['rizqi','dodi','qaiserlab'],
// 	getMembers: function(){
// 		this.members.map(() => {
// 			console.log(this);
// 		});
// 	}
// };
// console.log(SekolahKoding.getMembers());
function Siswa() {
  console.log(this);
}

console.log(void 0);
Siswa();