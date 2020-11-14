const checkInfinity = ( data ) => 
{
  data.forEach( v => {
    if( !isFinite( v ) )
    {
      console.log( 'Angka ' + v + ' is Infinity.' );
    }
    else 
    {
      console.log( 'Angka ' + v + ' Not Infinity.' );
    }
  } )
}

checkInfinity( [2,39,76,50,9,7,41,2,24,1,16] );