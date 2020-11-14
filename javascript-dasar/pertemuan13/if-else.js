/* 
  ==== Belajar Pengkondisian ====

  Untuk membuat pengkondisian kita
  menggunakan statement if-else.
*/
function jalanSatu()
{
  var nilai = 3;

  if( nilai === 3 )
  {
    console.log("Benar");
  }
  else if( nilai === 2 )
  {
    console.log("Dua");
  }
  else if( nilai === 1 )
  {
    console.log("Satu");
  }
  else 
  {
    console.log("Salah");
  }

  // if( nilai === 3 ) console.log("Benar")
  // else console.log("Salah");

  if( nilai === 3 )
    console.log("Benar");
  else if( nilai === 2 )
    console.log("Dua");
  else if( nilai === 1 )
    console.log("Satu");
  else 
    console.log("Salah");
}

jalanSatu();