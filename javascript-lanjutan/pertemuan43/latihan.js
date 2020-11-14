const arr = [1,2,3];
console.log( 
  arr.findIndex( (item) => item > 1 )
 )

// console.log(
//   arr.reduceRight( ( acculator, currentValue ) => currentValue - acculator, 2)
// );

/* 
    [2,1,2,3]
      acculator - 2(currentValue) = 2(acculator)
      2(acculator) - 1(currentValue) = 1(acculator);
      1(acculator) - 2(currentValue) = -1(acculator);
      -1(acculator) - 3(currentValue) = -4

      acculator - 3(currentValue) = 3(acculator);
      3(acculator) - 2(currentValue) = 1(acculator);
      1(acculator) - 1(currentValue) = 0(acculator);
      0(acculator) - 2(currentValue) = -2(acculator);

      [2,1,2,3]
      x - 3 = 3;
      3 - 2 = 1;
      1 - 1 = 0;
      0 - 2 = -2

      [1,2,3,2]
      2 - x = 2;
      3 - 2 = 1;
      2 - 1 = 1;
      1 - 1 = 0;
    */

    // hasilnya 0
    console.log( arr.reduce( ( total, num ) => num - total, 2 ) );

    // hasilnya 0
    console.log( arr.reduceRight( ( total, num ) => num - total, 2 ) );

    /* 
      reduce
      [2,1,2,3]
      2(num) - total = 2;
      1(num) - 2(total) = -1;
      2(num) - (-1(total)) = 3;
      3(num) - 3(total) = 0;
      
      reduceRight
      [1,2,3,2];
      2(num) - x(total) = 2;
      3(num) - 2(total) = 1;
      2(num) - 1(total) = 1;
      1(num) - 1(total) = 0;
    */