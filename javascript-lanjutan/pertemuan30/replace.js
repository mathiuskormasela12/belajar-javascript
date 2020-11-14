/* 
  ===== Belajar Method Replace =====

  Method replace berfungsi untuk 
  mengubah atau mengganti String.

  rumus :

  variableString.replace('string yg mau dicari','mau diubah jadi apa')

  contoh :

  var nama = "Matius Kormasela";

  console.log( nama.replace( 'ti', 'thi' ) );
*/
function replaceString()
{
  var isi = "Saya seorang PHP Developer";

  console.log( isi );
  console.log( isi.replace('PHP','JavaScript') );
  // isi =  isi.replace('PHP', 'JavaScript');
  // console.log( isi );

  var nama = "Matius Kormasela";
  console.log( nama );
  console.log( nama.replace( 'ti', 'thi' ) );
}

replaceString();