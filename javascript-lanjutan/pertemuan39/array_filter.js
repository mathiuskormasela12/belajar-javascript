/* 
  ==== Belajar Filter ====

  Method filter berfungsi untuk
  menyaring beberapa data dari sebuah array
  yang memenuhi kondisi tertentu tetapi
  tidak akan langsung di tampilkan di layar. 
  Dan untuk menampilkan data yg sudah
  di filter itu kita harus meloopingnya
  dengan looping for of atau for each dan
  map.

  rumus :
  var variableBaru = variableArray.filter( ( item, index, array ) =>
  {
    return kondisi;
  } )
*/
var peoples = [
  {
    nama : 'Mathius',
    gender: 'male'
  },
  {
    nama : 'Rizki Ramadhan',
    gender: 'male'
  },
  {
    nama : 'Erika Ebisawa',
    gender : 'female'
  }
];

let male = peoples.filter( ( items, index, array ) =>
{
  /* 
    Data array akan di saring dengan 
    kondisi di bawah. Jadi hanya data
    pada array object yg memiliki nilai
    dari property gender 'male' yang
    akan disimpan dalam variable male
    tapi kalo value property gendernya
    selain 'male' tidak akan dimasukan 
    kedalam variable male.
  */
  return items.gender === 'male';
  // return index < 2;
} )

let female = peoples.filter( ( item ) => 
{
  return item.gender === 'female';
} );

console.log( male );
// console.log( female );

