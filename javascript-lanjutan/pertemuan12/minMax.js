/* 
  ==== Belajar Method Min & Max ====

  a. Min
     Method min berfungsi untuk mencari
     nilai yang terkecil dari angka-angka
     yang kita masukan sebagai parameternya.

     rumus :
     Math.min( angka1, angka2 dst... )
  b. Max
     Method max berfungsi untuk mencari
     nilai yang terbesar dari angka-angka
     yang kita masukan sebagai parameternya.
  
  Note :
  Method min dan max boleh
  memiliki lebih dari satu parameter.
*/
function MinMax()
{
  // nilai terkecil dari deret angka dibawah adalah -1
  var min = Math.min( 45, 100, 3, 99, -1 );
  console.log( min );

  // nilai terbesar dari deret angka dibawah adalah 1000
  var max = Math.max( 45, 1000, 3, 99, 2 );
  console.log( max );
}

MinMax();