/* 
  ==== Belajar Fungsi Split ====

  Split berfungsi untuk mengubah
  string menjadi array.

  rumus :
  variableString.split( delimiter );

  note :
  delimiter -> pembatas
  delimiter -> dapat diisi apa saja

  jika kita tidak menuliskan delimiternya
  maka Javascript akan mengubah semua karakter
  dalam string menjadi array di satu index.
  contoh dari 'Mat Ius' jadi ['Mat Ius'];

  jika kita menuliskan delimiternya
  '' string kosong maka Javascript akan
  mengubah semua karakter dalam
  string menjadi array dengan beberapa index.
  contoh dari 'Mat Ius' jadi ['M','a','t',' ','I','u','s']

  jika kita menuliskan delimiternya 
  ' ' string dengan spasi maka javascript
  akan mengubah string menjadi array dengan
  memberikan pembatasan. Contoh dari 'Mat Ius'
  jadi ['Mat','Ius']
*/
function textSplit()
{
  var isi = "Javascript";

  // hasilnya ["Javascript"]
  console.log( isi.split() );

  // hasilnya ["J","a","v","a","s","c","r","i","p","t"]
  console.log( isi.split('') );

  var isi = "Javascript Programming Language";

  // hasilnya ["Javascript Programming Language"]
  console.log( isi.split() );

  // hasilnya ['J','a','v','a','s','c','r','i','p','t','P','r','o','g','r','a','m','m','i','n','g','L','a','n','g','u','a','g','e']
  console.log( isi.split( '' ) );

  // hasilnya ['Javascript', 'Programming', 'Language']
  console.log( isi.split( ' ' ) );
}

textSplit();