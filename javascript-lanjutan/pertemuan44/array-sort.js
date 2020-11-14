/* 
  ======== Belajar Array Sort ========

  Method sort berfungsi untuk mengurutkan
  array secara ascending yaitu dari a - z 
  atau dari 1 - 10.

  rumus :
  variableArray.sort();
*/
function panggilSort()
{
  var kota = ['Jakarta','Depok','Ambon','Yogyakarta', 'Bandung'];
  // kota = [2,4,2,5,1];

  console.log( kota );
  console.log( '======================================================================' );

  kota = kota.sort();

  return kota;
}

console.log( panggilSort() );