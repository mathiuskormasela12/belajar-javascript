function CharAt()
{
  var kata = "Saya Ingin Makan";

  // console.log( kata );

  // Mengambil karakter dengan index ke 3 yaitu a
  console.log( kata.charAt( 3 ) );

  // Mengambil karakter dengan index ke 0 yaitu S
  console.log( kata.charAt( 0 ) );

  // Mengambil karakter dengan index ke 11 yaitu M
  console.log( kata.charAt( 11 ) );

  var kataBaru = kata.charAt( 1 ) + kata.charAt( 2 ) + kata.charAt( 12 ) + kata.charAt( 11 ).toLowerCase();
  console.log( kataBaru );

}

CharAt();