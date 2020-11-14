var tinggiBadan = [188, 181, 176, 177, 174, 172, 182, 166, 165, 179];

const showArrayData = function( tinggiBadan )
{
  console.log("===== Normal For =====");

  for( var i = 0; i < tinggiBadan.length; i++ )
  {
    console.log(tinggiBadan[i]);
  }

  console.log("");
}

const showArrayData2 = ( tinggiBadan ) =>
{

  console.log("===== For Of =====")

  for ( let x of tinggiBadan )
  {
    console.log(x);
  }
}

showArrayData( tinggiBadan );
showArrayData2( tinggiBadan );

/* 
  Perbedaan For bisa dan For Of :

  For biasa :
  a. Kita dapat menampilakan hanya 
     sebagian array nya saja

  For Of :
  a. Harus menampilkan semua data arraynya, 
     tidak bisa hanya beberapa doank
*/