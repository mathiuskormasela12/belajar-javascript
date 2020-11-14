/* 
  ===== Belajar Regular Expresion =====

  Regular Expresion atau biasa disebut
  dengan regExp digunakan untuk mencari
  data. Dan dalam penulisan regExp ada
  terdapat yg namanya flag atau tanda.
  Dengan memberi flag kita dapat menghasilkan
  result yg berbeda dengan tanpa menggunakan
  flag.

  rumus: 
  /regexp/flag

  Flag i
  flag i berfungsi untuk
  membuat javascript bersifat
  tidak case sensitive ketika mencari
  sebuah karakter dengan regexp, jadi
  'L' sama dengan 'l'.

  rumus :
  /regexp/i
*/
function panggilRegExp()
{
  let str = "abcdefghijklmnopqrstuvwxyz";

  console.log( str.search( /K/ ) );
  console.log( str.search( /K/i ) );
  console.log( str.search( /k/i ) );
}

panggilRegExp();