/* 
  ==== Belajar Last Index OF ====

  Berfungsi untuk mengecek suatu string
  index nya apa dan akan di baca dari akhir
  stringnya.

  rumus :
  a. variableString.lastIndexOf( string );

  ket : 
  string -> javascript akan mengembalikan
            string nya dari index ke 0
            sampai terakhir dan akan mencari
            string yg cocok dengan string yg
            dikirim user melalui parameter pertama
            lastIndexOf dan di carinya dimulai
            dari index terkakhir sampai index
            ke 0 lalu dicheck indexnya berapa
            dan dikirim ke user.

  b.variableString.lastIndexOf( string, x );

  ket :
  x -> javascript akan mengembalikan
       sebuah string dari index ke 0
       sampai yang ke x lalu dicari
       string yang cocok dengan parameter
       pertama yg dikirim user dan dicarinya
       di mulai dari index ke x sampai ke 0 
       lalu mengecek indexnya berapa.
*/
function showLastIndexOf()
{
  var text = "Belajar Javascript di Ruang Belajar";

  /* 
    Method dibawah akan mengembalikan
    string "Belajar Javascript di Ruang Belajar"
    dan akan membacanya dari index terakhir.
    Dan akan mencari string 'Belajar' dan
    akan mengecek indexnya bagi string 'Belajar'
    yang ditemukan pertama kali dari belakang.
    jadi hasilnya adalah 28.
  */ 
  console.log( text.lastIndexOf('Belajar') );

  /* 
    Method dibawah akan mengembalikan
    string "Belajar Javascript"
    karena ada parameter yang kedua yang kita
    masukan yaitu angka 17. Angka 17 ini
    maksudnya kita hanya akan mencari string
    dari index ke 0 sampai index ke 17 maka
    hasilnya "Belajar Javascript" lalu Javascript
    akan membacanya dari belakang dan mencari
    string 'Belajar' dan saat javascript pertama
    kali mendapat string 'Belajar' maka akab
    langsung di check indexnya dan ditampilkan
    ke user yaitu hasilnya 0.
  */
  console.log( text.lastIndexOf( 'Belajar', 17 ) );
}

showLastIndexOf();