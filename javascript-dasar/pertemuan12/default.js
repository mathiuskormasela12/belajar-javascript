/* 
  ==== Belajar Parameter Default ====

  Parameter Default adalah sebuah nilai
  default suatu parameter pada function
  yang akan digunakan ketika kita menjalankan
  sebuah function yang memiliki parameter
  namun kita tidak menuliskan parameternya.
*/
function mintaData( x = 10)
{
  console.log(x);
}

// Hasilnya 20
mintaData(20);

// Hasilnya 10
mintaData();

