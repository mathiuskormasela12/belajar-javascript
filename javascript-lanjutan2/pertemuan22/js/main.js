/*
	====== Belajar Promise ======

	A. Pengertian

	   Promise adalah sebuah object yang merepresentasikan
	   keberhasilan atau kegagalan pada sebuah event
	   yang asynchronous di masa yang akan datang.

	B. Bagian

	   janji ( terpenuhi / di ingkari )
		 states ( fullfilled / rejected )
		 fungsi callback ( resolve / reject / finally )
		 aksi ( then / catch )
*/
// let i = 0;
// const ulang = setInterval(function(){
// 	console.log(++i);
// }, 500)

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger')
// 	.then(res => res.json())
// 	.then( res => console.log(res.Search));

// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		resolve([{
// 			username: 'Mathius'
// 		}]);
// 	}
// 	else 
// 	{
// 		reject('Error');
// 	}
// });

// janji1
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// Contoh 2
// let ditepati = false;

// const janji2 = new Promise((resolve, reject) => {
// 	if( ditepati )
// 	{
// 		setTimeout(function(){
// 			resolve('ditepati setelah beberapa waktu');
// 		}, 1000)
// 	}
// 	else 
// 	{
// 		setTimeout(function(){
// 			reject('tidak ditepati setelah beberapa waktu');
// 		})
// 	}
// });

// console.log('mulai');
// // janji2
// // 	.then(response => console.log('Janji', response))
// // 	.catch(response => console.log('Janji', response));
// console.log(janji2.then(response => console.log('Janji', response)).catch(response => console.log('Janji', response)));
// console.log('selesai');

// Contoh 3
/*let ditepati = true;
const movie = new Promise((resolve, reject) => {
	if( ditepati )
	{
		setTimeout(() => {
			resolve({
				"judul": "Dilan",
				"sutradara": "Sandhika Galih",
				"actor": "Dody, Erik"
			});
		}, 5000)
	}
	else 
	{
		reject({
			"message": "error"
		})
	}
});

const cuaca = new Promise((resolve, reject) => 
{
	if( ditepati )
	{
		setTimeout(()=> {
			resolve({
				"kota": "Jakarta",
				"suhu": "26",
				"kondisi": "berawan"
			})
		}, 500)
	}
	else 
	{
		setTimeout(() =>
		{
			reject({
				"message":"error"
			})
		})
	}
});*/

// movie 
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// cuaca
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// pada Promise.all yg akan dieksekusi jika menggunakan setTimeout yaitu promise yg dituls pertama kali yaitu pada line 73 yaitu promise movie
// Promise.all([movie, cuaca])
// 	.then(response => {
// 		let [movie, wheater] = response;
// 		console.log(movie);
// 		console.log(wheater);
// 	})
// 	.catch(response => console.log(response));

// Promise adalah sebuah object yg merepresentasikan
// keberhasilan atau kegagalan pada sebuah event
// yg akan terjadi di masa yg akan datang
// janji ( ditepati / ingkar )
// states ( fullfiled / rejected )
// callback ( resolve / reject / finally )
// akse ( then / catch )

// function getAllMovies(url, success, err)
// {
// 	const xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function()
// 	{
// 		if( xhr.readyState === 4 )
// 		{
// 			if( xhr.status === 200 )
// 			{
// 				success(xhr.response);
// 			}
// 			else if( xhr.status === 404 )
// 			{
// 				err('Ajax Error');
// 			}
// 		}
// 	}

// 	xhr.open('get', url);
// 	xhr.send();
// }

// getAllMovies('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger', res => console.log(JSON.parse(res).Search), res => console.log(res));

// Contoh 1
// let ditepati = false;

// const janji1 = new Promise((resolve, reject) => 
// {
// 	if( ditepati )
// 	{
// 		resolve('Hello');
// 	}
// 	else 
// 	{
// 		reject('Sorry');
// 	}
// });

// console.log('mulai');
// janji1
// 	.then( response => console.log(response) )
// 	.catch( response => console.log(response) );
// console.log('selesai');

// Contoh 2
// let ditepati = true;
// let janji2 = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve('Kirim');
// 		}, 1000);
// 	}
// 	else
// 	{
// 		setTimeout(() => reject('Gagal'), 1000);
// 	}
// });

// console.log('mulai');
// console.log(janji2
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response)));
// console.log('selesai');

// Contoh 3
// let ditepati = true;
// const movies = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() => {
// 			resolve({
// 				"nama":"Mathius"
// 			})
// 		}, 1000);
// 	}
// 	else 
// 	{
// 		setTimeout(() => {
// 			rejected('error')
// 		}, 1000);
// 	}
// });

// const cuaca = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() => {
// 				resolve({
// 				"cuaca":"Cerah"
// 			});
// 		}, 500);
// 	}
// 	else 
// 	{
// 		setTimeout(() =>
// 		{
// 			reject('Gagal');
// 		}, 500)
// 	}
// });

// console.log('mulai');
// // movies
// // 	.then(response => console.log(response))
// // 	.catch(response => console.log(response));
// // cuaca
// // 	.then( response => console.log(response) )
// // 	.catch( response => console.log(response) );
// Promise.all([movies, cuaca])
// 	.then(response => {
// 		let [ m, w ] = response;
// 		console.log(m);
// 		console.log(w);
// 	})
// 	.catch(response => console.log(response))
// console.log('selesai');

// let data = [];
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger')
// 	.then( response => response.json() )
// 	.then( response => {
// 		response.Search.forEach(item => {
// 			data.push(item);
// 		})
// 	} );

// console.log(data);

// Promise adalah sebuah object yg
// merepresentasikan kerberhasilan atau kegagalan
// suatu event yang asynchronous di masa yg akan datang
// janji ( ditepati / ingkar )
// states ( fullfilled / rejected )
// callback ( resolve / reject / finally )
// aksi ( then / catch )

// function getAllMovies(url, success, error)
// {
// 	const xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function()
// 	{
// 		if( xhr.readyState === 4 )
// 		{
// 			if( xhr.status === 200 )
// 			{
// 				success(xhr.response);
// 			}
// 			else if( xhr.status === 404 )
// 			{
// 				error('Ajax Error');
// 			}
// 		}
// 	}

// 	xhr.open('get', url);
// 	xhr.send();
// }

// getAllMovies('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger', response => console.log(JSON.parse(response).Search), () => console.log('Error'));

// Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => 
// {
// 	if( ditepati )
// 	{
// 		resolve('Berhasil');
// 	}

// 	else 
// 	{
// 		reject('Gagal');
// 	}
// });

// janji1
// 	.then( response => console.log(response) )
// 	.catch( response => console.log(response) );

// Contoh 2
// const janji2 = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() => resolve('ditepati'), 1000);
// 	}
// 	else
// 	{
// 		setTimeout(() => reject('gagal ditepati'), 1000)
// 	}
// });

// console.log('mulai');
// console.log(janji2.then(response => console.log('Janji', response)).catch(response => console.log('Janji', response)));
// console.log('selesai');

// Contoh 3
// ditepati = false;
// const movies = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() => resolve('ditepati'), 2000);
// 	}
// 	else 
// 	{
// 		setTimeout(() => reject('gagal ditepati'), 2000);
// 	}
// });

// const wheater = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		setTimeout(() => resolve({
// 			"lokasi": "Jakarta Utara",
// 			"suhu": "26",
// 			"kondisi": "Cerah Berawan"
// 		}), 500);
// 	}
// 	else 
// 	{
// 		setTimeout(() => reject("gagal :v"), 500);
// 	}
// });

// console.log('mulai');
// movies
// 	.finally(response => console.log('mari'))
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));
// wheater
// 	.finally(response => console.log('mari yuk'))
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));
// // Promise.all([movies, wheater])
// // 	.finally(() => console.log('ayo'))
// // 	.then(response => {
// // 		let [m, w] = response;
// // 		console.log(m);
// // 		console.log(w);
// // 	})
// // 	.catch(response => console.log(response));
// console.log('selesai');

// Promise merupakan sebuah object yg merepresentasikan
// keberhasilan atau kegagalan sebuah event yg asynchronous
// pada masa yg akan datang.
// janji ( ditepati / ingkar )
// states ( fulfilled / rejected )
// callback ( resolve / reject /finally )
// aksi ( then / catch )

// contoh 1
// const ditepati = true;
// const janji1 = new Promise((resolve, reject) =>
// {
// 	if( ditepati )
// 	{
// 		resolve('Berhasil');
// 	} else {
// 		reject('Gagal');
// 	}
// });

// janji1
// 	.finally(response => console.log('mulai'))
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));


// contoh 2
// const ditepati = false;
// const janji2 = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() => {
// 			resolve('Berhasil');
// 		}, 1000)
// 	} else {
// 		setTimeout(() =>
// 		{
// 			reject('Gagal');
// 		}, 1000);
// 	}
// });

// janji2
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// contoh 3
// const ditepati = true;
// const janji1 = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve({"kondisi":"Berhasil"});
// 		}, 1000);
// 	} else {
// 		setTimtout(() =>
// 		{
// 			reject({"kondisi": "Gagal"});
// 		}, 1000)
// 	}
// });

// const janji2 = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve('ditepati');
// 		}, 500)
// 	} else {
// 		setTimeout(() =>
// 		{
// 			reject('gagal ditepati');
// 		}, 500)
// 	}
// });

// Promise.all([janji1, janji2])
// 	.then(response => {
// 		let [janji1, janji2] = response;
// 		console.log(janji1);
// 		console.log(janji2);
// 	})
// 	.catch(response => console.log(response));
// janji1
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));
// janji2
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));


let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
// 	if(ditepati) {
// 		setTimeout(()=>{
// 			resolve('berhasil')
// 		}, 1000)
// 	} else {
// 		reject('gagal')
// 	}
// })

// // console.log(janji2)
// janji2
// 	.then(response => console.log(response))
// 	.catch(res => console.log(res))

function coba() {
	return janji2 = new Promise((resolve, reject) => {
		if(ditepati) {
			setTimeout(() => {
				resolve('berhasil')
			}, 1000)
		} else reject('gagal')
	})
}



async function jalan()
{
	try {
		const res = await coba();
		console.log(res);
	} catch(err) {
		// throw new Error(err)
		console.error(err)
	}
}

jalan()



























































