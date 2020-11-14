// 1. HTML Fragments
// const mhs = {
// 	nama: 'Mathius Kormasela',
// 	nrp: '002928231',
// 	email: 'samdicova@gmail.com'
// };

// const el = `<div class="mhs">
// 	<p>Nama : ${mhs.nama}</p>
// 	<p>NRP  : ${mhs.nrp}</p>
// 	<p>Email: ${mhs.email}</p>
// </div>`;

// 2. Looping
// const mhs = [
// 	{
// 		nama: 'Mathius Kormasela',
// 		email: 'samdicova@gmail.com'
// 	},
// 	{
// 		nama: 'Sandhika Galih',
// 		email: 'sandhikagalih@unpas.ac.id'
// 	},
// 	{
// 		nama: 'Erik',
// 		email: 'erik@gmail.com'
// 	},
// ];

// const el = `<div class="mhs">
// 	${mhs.map(item => {
// 		return `<p>
// 			${item.nama}
// 		</p>
// 		<p>
// 			${item.email}
// 		</p>`
// 	}).join('')}
// </div>`;

// 3. Conditional
// const lagu = {
// 	judul: "I've a Dream",
// 	penyanyi: 'Westlife',
// 	feat: 'Sherina'
// };

// const el = `<div class="lagu">
// 	<p>Nama 		: ${lagu.judul}</p>
// 	<p>Penyanyi	: ${lagu.penyanyi} ${ lagu.feat ? `(feat ${lagu.feat})` : '' }</p>
// </div>`;

// 4. Nested
// const mhs = {
// 	nama: 'Mathius',
// 	email: 'samdicova@gmail.com',
// 	mataKuliah: [
// 		'Pemrograman Web & Perangkat Bergerak',
// 		'Pemrograman Berorientasi Object',
// 		'Pemodelan Perangkat Lunak'
// 	]
// };

// const showMataKuliah = mataKuliah =>
// {
// 	return `<ol>
// 		${mataKuliah.map(item => `<li>${item}</li>`).join('')}
// 	</ol>`;
// }

// const el = `<div class="mhs">
// 	${showMataKuliah(mhs.mataKuliah)}
// </div>`;

// 1. HTML Fragments
// const mhs = {
// 	nama: 'Mathius',
// 	usia: 18
// };

// const el = `<div class="mhs">
// 	<p>Nama : ${mhs.nama}</p>
// 	<p>Usia : ${mhs.usia} tahun</p>
// </div>`;

// 2. Looping
// const mhs = [
// 	{
// 		nama: 'Mathius',
// 		usia: 18
// 	},
// 	{
// 		nama: 'Sandhika Galih',
// 		usia: 33
// 	},
// 	{
// 		nama: 'Erik',
// 		usia: 31
// 	}
// ];

// const el = `<div>
// 	<ol>
// 		${mhs.map( item => `<li>
// 			<p>Nama : ${item.nama}</p>
// 			<p>Usia : ${item.usia} tahun</p>
// 		</li>` ).join('')}
// 	</ol>
// </div>`;

// 3. Conditional
// const lagu = {
// 	judul: 'Kiseki',
// 	penyanyi: 'Lefty Hand Cream',
// 	bahasa: 'Indonesia'
// };

// const el = `<div>
// 	<p>Judul : ${lagu.judul}</p>
// 	<p>Penyanyi : ${lagu.penyanyi}</p>
// 	<p>Bahasa : ${(lagu.bahasa === 'Japan') ? `Kobasolo` : 'none'}</p>
// </div>`;

// 4. Nested
// const mhs = {
// 	nama: 'Mathius',
// 	bahasa: ['Javascript','Python','PHP','Ruby']
// }

// function show(data)
// {
// 	return data.map(item => `<li>${item}</li>`).join('');
// }

// const el = `<div>
// 	<p>Nama : ${mhs.nama}</p>
// 	<p>Bahasa : 
// 		<ol>
// 			${show(mhs.bahasa)}
// 		</ol>
// 	</p>
// </div>`;

// 1. HTML Fragments
// const mhs = {
// 	nama: 'Mathius',
// 	umur: 18,
// 	nrp: '002838221',
// 	email: 'samdicova@gmail.com'
// };

// const el = `<div class="mhs">
// 	<h2>Nama : ${mhs.nama}</h2>
// 	<p>NRP : ${mhs.nrp}</p>
// 	<p>Usia : ${mhs.umur} tahun</p>
// 	<p>E-mail : ${mhs.email}</p>
// </div>`;

// 2. Looping
// const mhs = [
// 	{
// 		nama: 'Mathius',
// 		email: 'samdicova@gmail.com'
// 	},
// 	{
// 		nama: 'Rizki Ramadhan',
// 		email: 'rizukirimu@gmail.com'
// 	},
// 	{
// 		nama: 'Fadhli Fadhilah',
// 		email: 'fadmax@gmail.com'
// 	}
// ];

// const el = `<div class="mhs">
// 	${mhs.map(item => `<ul>
// 		<li>Nama : ${item.nama}</li>
// 		<li>e-mail : ${item.email}</li>
// 	</ul>`).join('')}
// </div>`;

// 3. Conditionals
// const lagu = {
// 	judul: 'My Love',
// 	penyanyi: 'Westlife'
// };

// const el = `<div class="mhs">
// 	<ul>
// 		<li>Judul : ${lagu.judul}</li>
// 		<li>Penyanyi : ${lagu.penyanyi} ${lagu.feat ? `(feat ${lagu.feat})` : ''}</li>
// 	</ul>
// </div>`;

// 4. Nested
const mhs = {
	nama: 'Mathius',
	semester: 5,
	mataKuliah: [
		'Bahasa & Automata',
		'Sistem Cerdas',
		'Rekayasa Web',
		'Perancangan Sistem Berorientasi Objek'
	]
};

const showMataKuliah = mataKuliah => `${mataKuliah.map(item => `<li>${item}</li>`).join('')}`;

const el = `<div class="mhs">
	<h2>Nama :${mhs.nama}</h2>
	<p>Semester : ${mhs.semester}</p>
	<ol>
		${showMataKuliah(mhs.mataKuliah)}
	</ol>
</div>`;

document.body.innerHTML = el;