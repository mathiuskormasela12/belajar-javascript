/* 
  ==== Belajar Array Reverse ====

  Method reverse berfungsi untuk membalikan 
  array contohnya dari ['Mathius','Kormasela']
  menjadi ['Kormasela', 'Mathius'].

  rumus :
  variableArray.reverse();
*/
function panggilReverse()
{
  var kota = ['Jakarta','Medan','Malang','Bandung'];

  // sebelum direverse
  console.log( kota );

  // return kota.reverse();

  // proses mereverse array
  var result = kota.reverse();

  // sesudah di reverse
  return result;
}

console.log( panggilReverse() );