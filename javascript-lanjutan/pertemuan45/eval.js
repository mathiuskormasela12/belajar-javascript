/* 
  ==== Belajar Method Eval ====

  Method eval berfungsi untuk melakukan
  evaluasi atau pengecekan suatu string
  apakah terdapat statement atau tidak,
  kalau ada maka statement itu akan dijalankan;

  rumus: 
  eval( string )
*/
function panggilEval()
{
  var x = [1,2,3,4,5,6,7,8,9];
  // var total = 0;

  // dibawah adalah string '10 * 10'
  // yg apa bila dicetak langsung akan menghasilkan string '10 * 10'
  // namun ketika kita menggunakan method eval maka hasilnya adalah number 100
  var total = '10 * 10';

  // for( var i = 0; i < x.length; i++ )
  // {
  //   total += x[i];
  // }
  // for( let data of x )
  // {
  //   total += data;
  // }

  // menggunakan method eval agar statement yg di dalam string dapat di eksekusi
  // hasilnya 100
  console.log( eval( total ) );

  // hasilnya '10 * 10' karena string walaupun memiliki statement akan tetap dibaca sebagai string bisa jika kita tidak menggunakan method eval untuk mengeksekusinya
  // console.log( total );
}

panggilEval();