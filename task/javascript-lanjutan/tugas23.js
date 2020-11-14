const showNumberGreaterThan15 = ( array ) =>
{
  return array.filter( item => item > 15 );
}

const result = showNumberGreaterThan15( [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66] );
console.log( result );