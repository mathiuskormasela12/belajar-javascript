/* 
  ==== Belajar Konversi Object ke String ====

  Untuk mengkonversi object String ke String
  ada dua cara :
  a. dengan objek.toString()
  b. dengan objek.valueOf()

  Kegunaan :
  a. toString()
     - konversi semua tipe data dan 
       object menjadi String
  b. valueOf()
     - konversi semua object menjadi
       tipe data dasarnya. contoh
       dari objek number jadi number,
       dari objek string jadi string
       dari objek boolean jadi boolean
       dst.
*/
function konversi()
{
  var text = new String('Belajar kuy...');

  // hasilnya object String
  console.log( typeof text );

  // hasilnya [String : 'Belajar kuy...']
  console.log( text );

  // konversi object String ke String
  var konv = text.toString();

  // hasilnya String
  console.log( typeof konv );

  // hasilnya 'Belajar kuy...'
  console.log( konv );

  // konversi object String ke String
  var konv2 = text.valueOf();

  // hasilnya String
  console.log( typeof konv2 );

  // hasilnya 'Belajar kuy...'
  console.log( konv2 );
  console.log("");

  var x = new Boolean(true);

  x = x.valueOf();
  console.log( typeof x );
}

konversi();