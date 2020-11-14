/*
	======= Belajar Callback Asynchronous =======

	A. Pengertian Callback & Asynchronous

		 a. Callback
		 	  Callback adalah sebuah function yang merupakan
		 	  parameter dari function lainnya (Higher Order Function).
		 b. Asynchronous
		    Asynchronous adalah teknik coding pada Javascript
		    yang akan terus melanjutkan perintah hingga semua perintah
		    dalam program selesai meskipun masih ada proses atau
		    perintah yg memerlukan waktu yg lama untuk diselesaikan.
*/

// Callback Synchronous
// function showNama(nama)
// {
// 	alert(`Hello Mr. ${nama}`);
// }

// function getNama(callback)
// {
// 	const nama = prompt('Please, tell me about your name !');
// 	callback(nama);
// }

// getNama(nama => alert(`Hello mr. ${nama}`));

// const mhs = [
// 	{
// 		"nama": "Mathius",
// 		"usia": "18",
// 		"jurusan": "Computer"
// 	},
// 	{
// 		"nama": "Rizki Ramadhan",
// 		"usia": "17",
// 		"jurusan": "Computer"
// 	},
// 	{
// 		"nama": "Fadhli Fadhilah",
// 		"usia": "17",
// 		"jurusan": "Game Development"
// 	}
// ];

// console.log('hajimemashou');
// mhs.forEach(item => {

// 	for(let i = 0; i <= 1000000; i++)
// 	{
// 		let date = new Date();
// 	}

// 	console.log(item);
// });
// setTimeout(() => 
// {
// 	mhs.forEach(item => {

// 		for(let i = 0; i <= 1000000; i++)
// 		{
// 			let date = new Date();
// 		}
		
// 		console.log(item);
// 	});
// }, 0);
// console.log('owarimashita');

// Asynchronous Vanila Javascript
function getDataMahasiswa(url, success, error)
{
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function()
	{
		// Jikalau Ajaxnya sudah siap
		if( xhr.readyState === 4 )
		{
			if( xhr.status === 200 )
			{
				success(xhr.response);
			}
			else if( xhr.status === 404 )
			{
				error();
			}
		}
	}

	xhr.open('get', url);
	xhr.send();
}

// function success(result)
// {
// 	console.log(JSON.parse(result));
// 	console.log(result)
// }

// function error()
// {
// 	console.log('Ajax Error');
// }

getDataMahasiswa('data/mahasiswa.json', res => {
	const mhs = JSON.parse(res);
	mhs.forEach(item => console.log(item.nama));
}, () => {
	console.log('Ajax Error');
});

// Asynchronous Jquery
// console.log('mulai');
// $.ajax({
// 	url: 'data/mahasiswa.jso',
// 	success: (res) => {
// 		res = JSON.parse(res);
// 		res.forEach(item => console.log(item.nama))
// 	},
// 	error: (e) => console.log(e.responseText)
// })
// console.log('selesai');