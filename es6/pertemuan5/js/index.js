// a. Untuk mencetak variable dalam String
let nama = 'Mathius';
let marga = ' Kormasela';
console.log('Halo nama saya', nama,marga);
console.log('Halo nama saya ' + nama + marga);
console.log(`Halo nama saya ${nama}${marga}`);

// a. Untuk menulis enter dalam string
console.log(`
		<p>${nama}</p>
	`);

// c. untuk memanggil function
function hello(str, nama)
{
	console.log('Hello nama saya', nama);
}

hello`${nama}`;

nama = nama.split();
marga = marga.split();
nama = [...nama, ...marga];
console.log(nama);	

function coba(...nama)
{
	console.log(nama[1]);
}

coba('Mathius','Kormasela');

function coba2(nama,marga)
{
	console.log(nama, marga);
}

const x = ['Mathius','Kormasela'];
coba2(...x);