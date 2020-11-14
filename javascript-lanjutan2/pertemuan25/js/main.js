// Promise adalah sebuah object yg merepresentasikan
// keberhasilan atau kegagalan dari sebuah event
// yg asynchronous pada masa yg akan datang.

// janji (ditepati/ingkar)
// states(fulfilled/rejected)
// callback (resolve/reject)
// aksi (then/catch)

// contoh 1
// const ditepati = true;
// const janji1 = new Promise((resolve, reject) => 
// {
// 	if(ditepati)
// 	{
// 		resolve('berhasil');
// 	} else {
// 		reject('gagal');
// 	}
// });

// // console.log(janji1);
// janji1
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// contoh 2
// const ditepati = false;
// const janji2 = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve('berhasil ditepati');
// 		}, 1000);
// 	} else {
// 		setTimeout(() =>
// 		{
// 			reject('gagal ditepati');
// 		}, 1000);
// 	}
// });
// // console.log(janji2);
// janji2
// 	.finally(() => console.log(`let's see`))
// 	.then(response => console.log('Janji', response))
// 	.catch(response => console.log('Janji', response));

// contoh 3
// const ditepati = true;
// const cuaca = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve({"lokasi":"Tanah Merah", "kondisi":"cerah berawan"});
// 		},1000);
// 	} else {
// 		setTimeout(() => 
// 		{

// 		}, 1000);
// 	}
// });

// const movies = new Promise((resolve, reject) =>
// {
// 	if(ditepati)
// 	{
// 		setTimeout(() =>
// 		{
// 			resolve('berhasil ditepati');
// 		}, 500);
// 	} else {
// 		setTimeout(() =>
// 		{
// 			reject('gagal ditepati');
// 		}, 500)
// 	}
// });

// // cuaca
// // 	.then(response => console.log('Janji', response.kondisi))
// // 	.catch(response => console.log('Janji', response));
// // movies
// // 	.then(response => console.log('Janji', response))
// // 	.catch(response => console.log('Janji', response));
// Promise.all([cuaca, movies])
// 	.then(res => {
// 		let [cuaca, movies] = res;
// 		console.log(cuaca);
// 		console.log(movies);
// 	})
// 	.catch(res => console.log('Janji', res));


	// ======= Belajar Async & Await =======

	// A. Pengertian
	// 	 a.Async (Asynchronous Function)
	// 	   Async adalah sebuah function yg asynchronous
	// 	   yang mengembalikan Promise secara implisit
	// 	   sebagai return value-nya dan penulisannya
	// 	   seperti function synchronous (Function Standar).
	// 	 b. await
	// 			Await berfungsi untuk membuat
	// 			function yg menghasilan return
	// 			value nya Promise menunggu higga
	// 			Promisenya fulfilled (berhasil)
	// 			baru melanjutkan eksekusi kode
	// 			programnya. await hanya dapat
	// 			digunakan pada function yg
	// 			punya keyword async.

// function cobaPromise()
// {
// 	return new Promise((resolve, reject) => {
// 		const waktu = 5000;

// 		if( waktu < 5000 )
// 		{
// 			setTimeout(() =>
// 			{
// 				resolve('berhasil ditepati') 
// 			}, waktu);
// 		} else {
// 			reject('terlalu lama');
// 		}
// 	});
// }
// const coba = cobaPromise();
// console.log(coba);

// coba
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));

// Javascript tolong siap-siap ya karena dalam function jalankanPromise ada asynchronous function
// async function jalankanPromise()
// {
// 	try 
// 	{
// 		// Javascript tolong tunggu sebentar yah sampai promisenya berhasil
// 		// Jika sudah berhasil baru cetak variable coba
// 		// atau lanjutkan mengeksekusi kode
// 		// pada baris 150 dst, tpi kalo belum fulfilled promisenya jangan lanjut ke line 150 dst ya
// 		const coba = await cobaPromise();
// 		console.log(coba);	
// 	} catch(error) {
// 		console.log(error);
// 	}
// }

// jalankanPromise();

// function createPromise() {

// 	return new Promise((resolve, reject) => 
// 	{
// 		const waktu = 5000;

// 		if( waktu < 5000 )
// 		{
// 			setTimeout(() =>
// 			{
// 				resolve('berhasil')
// 			}, waktu);
// 		} else {
// 			reject('gagal');
// 		}
// 	});

// }
// // const coba = createPromise();
// // // console.log(coba);

// // coba
// // 	.then(response => console.log(response))
// // 	.catch(response => console.log(response));

// async function showPromise()
// {
// 	try
// 	{
// 		const coba = await createPromise();
// 		console.log(coba);
// 	} catch(error) {
// 		console.error(error);
// 	}
// }

// showPromise();
// function panggilPromise() {
// 	return new Promise((resolve, reject) =>
// 	{
// 		const waktu = 5000;
// 		if(waktu < 5000)
// 		{
// 			setTimeout(() =>
// 			{
// 				resolve('berhasil');
// 			}, waktu)
// 		} else {
// 			setTimeout(() =>
// 			{
// 				reject('gagal');
// 			}, waktu)
// 		}
// 	});
// }

// // console.log(coba);
// // coba
// // 	.then(response => console.log(response))
// // 	.catch(response => console.log(response));
// async function cobaPromise(){
// 	try
// 	{
// 		const coba = await panggilPromise();
// 		console.log(coba)
// 	} catch(err) {
// 		console.error(err);
// 	}
// }

// cobaPromise();

// const x = new Promise((resolve, reject) =>
// {
// 	reject('hello')
// });


// Async adalah sebuah function yg berjalan secara asynchronous
// dan mengembalikan promise sebagai return value secara implisit
// dan penulisannya seperti function synchronous
// await berfungsi untuk membuat javascript
// tidak melanjutkan pengeksekusia kode
// hinggga promisenya resolve
// jika belom resolve tidak akan lanjut ekeskuisi

const coba = new Promise((resolve,reject) =>
{
	let waktu = 5000;
	if(waktu < 5000)
	{
		setTimeout(() =>
		{
			resolve('berhasil');
		}, waktu)
	} else {
		reject('gagal');
	}
});

// console.log(coba);

async function hey()
{
	try {
		const ha = await coba;
		console.log(ha);
	} catch(err) {
		console.log(err);
	}
}
hey();
// coba
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));
































