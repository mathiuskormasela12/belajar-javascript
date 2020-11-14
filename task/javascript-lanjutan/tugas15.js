const hitung = (a,c, B) =>
{
  var hasil;

  console.log( "Nilai AB :", c );
  console.log( "Nilai BC :", a );

  var hasil = Math.sqrt(Math.pow( a, 2 ) + Math.pow(c, 2) - 2 * a * c * B);
  console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah :", hasil);
}

hitung(6,8, 0);