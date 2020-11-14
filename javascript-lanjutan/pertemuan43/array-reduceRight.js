function panggilReduceRight()
{
  // var angka = [[1,2],[3,4],[5,6],[7,8]];

  // const reduceRightData = angka.reduceRight( ( accumulator, currentValue ) =>
  // {
  //   return accumulator.concat( currentValue );
  // } )

  const angka = [1,2,3,4,5];

  /* 
    Belajar cara baca :
    accumulator - 5(currentValue) = 5(accumulator);
    5(accumulator) - 4(currentValue) = 1(accumulator);
    1(accumulator) - 3(currentValue) = -2(accumulator);
    -2(accumulator) - 2(currentValue) = -4(accumulator);
    -4(accumulator) - 1(curentValue) = -5(accumulator);
  */
  //  hasilnya -5
  // const reduceRightData = angka.reduceRight( ( accumulator, currentValue ) => {
  //   return accumulator - currentValue;
  // } )

  /* 
    Belajar Cara Baca :
    5(currentValue) - accumulator = 5(accumulator);
    4(currentValue) - 5(accumulator) = -1(accumulator);
    3(currentValue) - (-1(accumulator)) = 4(accumulator);
    2(currentValue) - 4(accumulator) = -2(accumulator);
    1(currentValue) - (-2(accumulator)) = 3(accumulator);
  */
  //  hasilnya 3
  // const reduceRightData = angka.reduceRight( ( accumulator, currentValue ) => currentValue - accumulator );

  /* 
    Belajar Cara Baca :

    [1,2,3,4,5,4]
    4 * x = 4;
    5 * 4 = 20;
    4 * 20 = 80;
    3 * 80 = 240;
    2 * 240 = 480;
    1 * 480 = 480;
  */
  const x = 4; // jadi kalkulasinya akan di mulai dari angka 2 
               // maksudnya array awalnya [1,2,3,4,5]
              //  karena kita menambahkan x maka menjadi [1,2,3,4,5,4]
  const reduceRightData = angka.reduceRight( ( total, aktif ) => aktif * total, x );

  return reduceRightData;
}

console.log( panggilReduceRight() );