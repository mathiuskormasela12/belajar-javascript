/* 
  ==== Belajar Method Slice ====

  Slice berfungsi untuk mengambil 
  beberapa karakter dalam sebuah String.

  rumus : 
  variableString.slice( x, y );

  note : 
  x -> index dari string yang ingin diambil
  y -> sampai index keberapa string yg mau diambil

  ex :
  variableString.slice( 3, 5 ); -> method disamping akan mengambil karakter dengan
                                   index ke 3 sampai ke 4 (jadi index ke 5 gk dibaca )
                                   modelnya jadinya mungkin seperti ini ( variableString.slice( 3, (5 - 1) ) )

  variableString.slice( 3 ); -> akan mengambil string dari index 3 sampai terakhir

  var variableString = "Mathius";
  variableString.slice( -3  ) -> akan mengambil string dari index ke -3 ( hasilnya : "ius")
*/
function Slice()
{
  var text = "Aku Ingin Pintar Javascript";

  // hasilnya "Ingin Pintar Javascript"
  console.log( text.slice( 4 ) );

  // hasilnya "Ingin"
  console.log( text.slice( 4, 9 ) );

  // hasilnya "AkuMathius"
  console.log( text.slice( 0, 3 ) + 'Mathius' );

  // hasilnya "Aku Mathius"
  console.log( text.slice( 0, 4 ) + 'Mathius');

  // hasilnya "ipt"
  console.log( text.slice( -3 ) );


  var variableString = "Mathius";
  // hasilnya "ius"
  console.log( variableString.slice( -3  ) );
}

Slice();
