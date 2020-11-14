/* 
  ==== Belajar Infinity Looping ====

  Infirnity looping adalah sebuah 
  perulangan yang tidak akan pernah 
  berhenti sebelum kita memberhentikannya 
  sendiri secara manual. Untuk menghentikan
  nya kita dapat menggunakan keyborad
  yaitu dengan menekan CTRL + C secara
  bersamaan.
*/

// Dengan For loop
// for( var i = 0; i >= 0; i++ )
// {
//   console.log(i);
// }

// Dengan While Loop
/* Untuk membuat infinity looping 
   bisanya kita menggunakan while 
   loop */
var i = 1;

while( true )
{
  console.log(i);
  i++;
}