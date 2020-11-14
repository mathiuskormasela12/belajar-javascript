/*
	====== Belajar Class ======

	A. Pengertian Class
	   Class adalah template untuk membuat
	   object.
	B. Contructor
	   Constructor adalah sebuah function yang
	   secara otomatis akan langsung di jalankan
	   oleh Javascript ketika suatu object 
	   instansiasi. Dalam JavaScript kita membuat
	   property itu di dalam constructor.
	c. Static
	   Static adalah keyword untuk membuat
	   sebuah method dapat dijalankan walaupun
	   ketika class tersebut belum di instansiasi.
*/

class Members 
{
	// Function yg otomatis di jalankan ketika
	// kita menginstansiasi sebuah object
	// Membuat property harus di dalam constructor
	constructor(nama, usia)
	{
		this.nama = nama;
		this.usia = usia;
	}

	getNama()
	{
		console.log(`Halo nama saya ${this.nama}`);
	}

	getUsia()
	{
		console.log(`Halo saya berusia ${this.usia} tahun`);
	}

	static showAlert()
	{
		alert('Hello World');
	}
}

const mathius = new Members('Mathius', 18);
mathius.getNama();
mathius.getUsia();
// Members.showAlert();