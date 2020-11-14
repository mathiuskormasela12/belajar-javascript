/* 
  ==== Belajar Break dan Continue === 

  A. Break
     Berfungsi untuk memberhentikan
     looping.
  B. Continue.
     Berfungsi untuk menghilangkan
     satu angka dari looping dibawah.
     Dengan perintah continue, Javascript
     akan mengabaikan dan tidak akan 
     mengeksekusi perintah di bawahnya
     continue.
*/

for( var i = 0; i <= 10; i++ )
{
  // Menghilangkan angka 2
  if( i === 2 )
    continue;
  console.log(i);

  // if( i === 5 )
  //   break;

}