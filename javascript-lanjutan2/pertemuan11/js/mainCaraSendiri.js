// ambil semua element video
const allVideo = document.querySelectorAll('h3 + ul > li');

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const newVideoAll = [];

for(let x of allVideo)
{
	newVideoAll.push(x);
}

const advJsVideo = newVideoAll.filter(item => 
{
	let title = item.innerHTML.split(' ');
	title = title[0] + ' ' + title[1];

	return title == 'JAVASCRIPT LANJUTAN' ;
});

// ambil durasi masing-masing video
let durasi = [];
advJsVideo.map(item => 
{
	durasi.push(item.getAttribute('data-duration'));
});

// ubadah durasi menjadi int, ubah menit menjadi detik
durasi = durasi.map(item =>
{
	let baru = item.split(':');
	baru = [ baru[0], baru[1] ];
	let baru2 = baru[0] * 60;
	return parseFloat(baru[1]) + baru2;
})

// jumlahkan semua detik
const count = durasi.reduce((acc, cv) => acc + cv);

// ubah formatnya jadi jam menit detik
let hours = Math.floor(count / 60 / 60);
let minutes = Math.floor(count / 60 % 60);
let sec = Math.floor( count % 60 );

// simpan di DOM
const totalDurasi = document.querySelector('span.total-durasi');
const jmlVideo = document.querySelector('span.jumlah-video');
jmlVideo.innerHTML = `${advJsVideo.length} video`;
totalDurasi.innerHTML = `${hours} jam ${minutes} menit ${sec} detik`;