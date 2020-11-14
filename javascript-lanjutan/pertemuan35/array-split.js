/* 
  ====== Belajar Array Split ======

  Method Split berfungsi untuk mengubah
  string menjadi array.

  rumus :
  variableString.split( delimiter );

  ket :
  delimiter -> pembatasnya (, spasi -)
*/
function panggilSplit()
{
  var kalimat = 'Kita Sedang Belajar JavaScript';
  console.log( kalimat );

  var result = kalimat.split(' ');
  return result;
}

console.log( panggilSplit() );