/* 
  ==== Belajar Search ====

  Method search berfungsi untuk
  mengecek suatu string atau karakter
  berada di index keberapa. Method Search 
  parameternya dapat ditulis dengan
  reguler ekspresion. Flow dari
  method search ini adalah
  setelah kita menginputkan
  string pada parameternya lalu
  search akan mengkonvertnya
  menjadi reguler expression lalu
  langsung di cari di stringnya.

  rumus :

  variableString.search(karakter/regex)

  contoh :

  var isi = "Belajar Javascript di Niomic Academy";
  console.log( isi.search( 'di' ) ); // -> hasilnya 19
  console.log( isi.search( /di/ ) ); // -> hasilnya 19
*/

function search()
{
  var isi = "Belajar Javascript di Niomic Academy";

  // hasilnya 22
  console.log( isi.search( 'Niomic' ) );

  // hasilnya 22
  console.log( isi.search( /Niomic/ ) );

  console.log( isi.search( 'di' ) ); // -> hasilnya 19
  console.log( isi.search( /di/ ) ); // -> hasilnya 19
}

search();