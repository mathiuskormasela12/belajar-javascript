function latihan()
{
  var kota = ["Tokyo","Osaka","Hiroshima"];

  kota.splice(2,0,"Nagasaki");

  console.log( kota );

  kota.splice(0,2);

  console.log( kota[0] )
  return kota;

}

console.log( latihan() )