/* 
  ==== Belajar Concat ====

  Concat berfungsi untuk menggabungkan
  string sama seperti operator +.

  rumus :
  text1.concat(text2);

  note :
  fungsi concat dapat memiliki
  lebih dari satu parameter.
*/
function StrConcat()
{
  // var kalimat = "Saya";
  // var kalimat2 = kalimat.concat(' Pintar');
  // var kalimat3 = kalimat2.concat(' Memasak',' Nasi',' Goreng');
  
  // console.log( kalimat );
  // console.log( kalimat2 );
  // console.log( kalimat3 );

  var nama = "Mathius";
  var marga = "Kormasela";
  var gelar = "phd";

  nama = nama.concat( ' ',marga, '.',gelar );

  // hasilnya nama = 'Mathius Kormasela'
  nama = nama.concat(' ',marga);

  // hasilnya nama = 'Mathius Kormasela.phd'
  nama = nama.concat('.',gelar);

  // Mathius Kormasela.phd Kormasela.phd
  console.log( nama );
}

StrConcat();
