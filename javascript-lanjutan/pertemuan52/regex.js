/* 
  ==== Belajar Regular Expression ====

  Regular Expression berfungsi untuk mencari
  atau mengubah suatu string
*/
function panggilRegexp()
{
  let str = "abcdefghijklmnopqrstuvwzyz";

  return str.search( /a/ );
}

console.log( panggilRegexp() );