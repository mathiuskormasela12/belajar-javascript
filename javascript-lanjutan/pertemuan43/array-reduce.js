/* 
  ==== Belajar Reduce ====

  Method reduce berfungsi untuk melakukan
  kalkulasi baik secara matematika ataupun
  concatination (penggabungan array) terhadap
  data-data yg ada pada array dan akan di kalkulasi
  dari kiri ke kanan.

  rumus: 
  variableArray.reduce( ( accumulator, currentValue ) => 
  {
    return accumulator + currentValue
    atau
    return accumulator - currentValue    
    atau
    return accumulator * currentValue
    atau
    return accumulator / currentValue
    atau
    return accumulator.concat(currentValue)
    dll
  } )

  keterangan :
  accumulator -> adalah hasil kalkulasi
                 Jika pada saat pertama
                 looping maka nilai accumulator
                 nya tidak ada dan bukan nol.
  currentValue -> data dari array yg lagi dilooping
*/
function panggilReduce()
{
  // var data = ['Jakarta','Bandung','Surabaya','Bogor'];

  // console.log(
  //   data.reduce( (total, active) => {
  //     return total.concat( ' ',active);
  //   } )
  // );

  const angka = [1,2,3,4];
  // hasilnya 10
  /* 
    Belajar cara baca :
    accumulator + 1(currentValue) = 1(accumulator);
    1(accumulator) + 2(currentValue) = 3(accumulator);
    3(accumulator) + 3(currentValue) = 6(accumulator);
    6(accumulator) + 4(currentValue) = 10(accumulator);
  */
  // const callback = ( accumulator, currectValue ) => accumulator + currectValue;

  // hasilnya -8
  /* 
    Belajar cara baca :
    accumulator - 1(currentValue) = 1(accumulator);
    1(accumulator) - 2(currentValue) = -1(accumulator);
    -1(accumulator) - 3(currentValue) = -4(accumulator);
    -4(accumulator) - 4(currentValue) = -8(accumulator);
  */
  // const callback = ( accumulator, currentValue ) => accumulator - currentValue;

  // hasilnya 2
  /* 
    Belajar Cara baca :
    1(currentValue) - accumulator = 1(accumulator);
    2(currentValue) - 1(accumulator) = 1(accumulator);
    3(currentValue) - 1(accumulator) = 2(accumulator);
    4(currentValue) - 2(accumulator) = 2(accumulator);

  */
  const data = angka.reduce( ( accumulator, currentValue ) => currentValue - accumulator );

  // const angka = [1,2,3,4];
  /* 
    Belajar cara baca :
    [0,1,2,3,4]
    0(currentValue) - accumulator = 0(accumulator);
    1(currentValue) - 0(accumulator) = 1(accumulator);
    2(currentValue) - 1(accumulator) = 1(accumulator);
    3(currentValue) - 1(accumulator) = 2(accumulator);
    4(currentValue) - 2(accumulator) = 2(accumulator);
  */
  // const data = angka.reduce( (accumulator, currentValue) => currentValue - accumulator, 0);


  console.log( data );
}

panggilReduce();