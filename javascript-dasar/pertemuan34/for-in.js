function panggilObjects()
{
  var mahasiswa = {
    nama : "Mathius",
    umur : 22,
    jurusan : 'Computer',
    semester : 3
  };

  /* 
    ==== Belajar For In ====

    Untuk menampilkan seluruh
    nilai pada property dari sebuah
    object maka kita dapat menggunakan
    perulangan for in.

    rumus penulisan :

    for( var inisialisasi in object )
    {
      console.log( object[inisialisasi] )
    }

    keterangan :
    object -> merupakan objectnya
    inisialisasi ->property objectnya
  */
  for( var x in mahasiswa )
  {
    // menampilkan semua nilai dari property object
    console.log( mahasiswa[x] );

    // menampilakn object
    // console.log( mahasiswa );

    // menampilkan semua property
    // console.log( x );
  }
}

panggilObjects();