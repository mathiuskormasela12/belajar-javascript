/* 
  ====== Belajar Method Push ======

  Method Push berfungsi untuk menambahkan
  data pada sebuah array di index terakhirnya.

  rumus: 
  array.push('data baru')

  note:
  data barunya dapat berupa
  tipe data apa pun dan juga datanya
  boleh lebih dari satu.
*/
function panggilPush()
{
  var data = [1,2,3,4,5,6,4,3,4,3];

  console.log( data );

  // data.push(9);
  data.push("Jakarta","Makassar","Ambon");

  return data;
}

console.log( panggilPush() );