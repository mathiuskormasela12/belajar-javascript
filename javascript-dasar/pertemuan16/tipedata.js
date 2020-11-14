function tipeData()
{
  var data = '2';
  // data = 2;

  /* 
    typeof() berfungsi untuk mengecek
    suatu variable bertipe data apa.
  */
  console.log(typeof(data));

  /* 
    Operator perbandingan
    sama dengan 3x berfungsi
    untuk membandingkan nilai 
    dan tipe data dari dua buah 
    variable. Jadi ketika nilai variable
    yang pertama adalah string 2 dan variable
    yang kedua adalah string 2 maka hasilnya true.
    Tetapi jika variable yang pertama merupakan
    string 2 dan variable yang kedua adalah angka 
    2 (tipe data number) maka hasilnya adalah false.

    '2' == '2'  -> true
    '2' == 2    -> true
    2 == '2'    -> true
    2 == 2      -> true

    '2' === '2'   -> true
    '2' ===  2    -> false
    2   === '2'   -> false
    2   ===  2    -> true
  */
  if( data === 2 )
  {
    return "Sukses";
  }
  else if( data == 2 )
  {
    return "Sukses, tipe data berbeda";
  }
  else 
  {
    return "Gagal"
  }
}

console.log( tipeData() );