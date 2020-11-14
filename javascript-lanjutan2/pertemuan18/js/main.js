/*
	========== Belajar Spread Operator ==========

	A. Pengertian

		 Spread operator adalah operator
		 yang berfungsi untuk memecah iterables
		 menjadi single element. Spread Operator
		 ini disimbolkan dengan tanda (...).
*/
// const nama = ['Mathius','Kiko','Fadhli'];
// // hasilnya -> Mathius Kiko Fadhli
// console.log(...nama);
// // hasilnya -> M a t h i u s
// console.log(...nama[0]);
// // hasilnya -> ["M","a","t","h","i","u","s"]
// console.log([...nama[0]]);

// Berikut fungsi-fungsi dari Spread Operator

// 1. Mencopy array
// const mhs = ['Mathius','Kiko','Fadhli'];
// // const mhs1 = mhs;
// // const mhs1 = mhs.slice(0, 3);
// const mhs1 = [...mhs];
// mhs1[0] = 'Matt';
// console.log('Array asli', mhs);
// console.log('Array copy', mhs1);

// 2. Menggabungkan array
// const dosen = ['Sandhika','Hilman','Pukis'];
// const orang = [...mhs, 'Reza',...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// 3. Mengubah NodeList menjadi array
// const liMhs = document.querySelectorAll('li');

// let mhs = [];

// for(let i = 0; i < liMhs.length; i++)
// {
// 	mhs.push(liMhs[i].textContent);
// }

// for( let data of liMhs )
// {
// 	mhs.push(data.textContent);
// }

// const mhs = Array.from(liMhs).map(item => item.textContent);
// const mhs = [...liMhs].map(item => item.textContent);

// 4. Membuat hover per huruf
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent]
.map(item => `<span>${item}</span>`)
.join('');

nama.innerHTML = huruf;
