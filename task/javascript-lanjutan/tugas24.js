const sorting = ( data ) => 
{
  console.log( 'Sebelumnya : ', data.join(',') );

  const asc = data.sort();
  console.log( 'Ascending : ' ,asc.join(','));

  return 'Descending : ' + asc.reverse().join(',');

}

console.log( sorting( [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66] ) );
