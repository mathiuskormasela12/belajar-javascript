/* 
  ==== Belajar Method Log ====

  Method log berfungsi untuk mendapatkan
  nilai dari logaritma.

  rumus :
  a. Logaritma murni
     Math.log( angka );

     contoh :
     Math.log(10); -> hasilnya 2.30xxx
  b. 2logx
     Math.log2( angka );

     contoh :
     Math.log2(8); -> hasilnya 3
  c. 10logx
     Math.log10( angka );
     
     contoh :
     Math.log10( 100 ); -> hasilnya 2
*/
function logaritma()
{
  // nilai dari logaritma murni log1 = 0
  console.log( Math.log( 1 ) );

  // nilai dari logaritma murni log10 = 2.30xxx
  console.log( Math.log( 10 ) );

  // nilai dari 2log256 = 8
  console.log( Math.log2( 256 ) );

  // nilai 10log100 = 2
  console.log( Math.log10( 100 ) );
}

logaritma();