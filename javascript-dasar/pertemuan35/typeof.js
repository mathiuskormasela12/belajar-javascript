function checkTipeData()
{
  var data = "Nama";
  // data = 200000;
  // data = [1,2,4,6];
  // data = {
  //   nama: "Mathius",
  //   usia: 18
  // }

  /*  
    ====== Belajar Mengecek Tipe Data ======

    Untuk mencari tahu sebuah variable
    bertipe data apa kita bisa menggunakan
    typeof(variablenya).

    note :
    Jika kita mengecek tipe data
    dari suatu variable array atau object
    maka tipe datanya akan dibaca sebagai object.
  */
  console.log( typeof( data ) );
}

checkTipeData();