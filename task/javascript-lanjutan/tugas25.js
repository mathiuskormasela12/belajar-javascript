const work = ( data ) => 
{
  console.log( 'Sebelumnya :', data.join(',') );
  const asc = data.sort();

  console.log( 'Ascending :', asc.join(',') );
  console.log( 'Descending :', asc.reverse().join(',') );

  return 'Filter > 10 : ' + asc.filter( item => item > 10 ).join(',');
}

console.log(  work( [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16] ) );