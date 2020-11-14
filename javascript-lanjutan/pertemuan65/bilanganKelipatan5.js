function panggilBilanganKelipatan5()
{
  var data = [];

  for( var i = 1; i < 50; i++ )
  {
    if( i % 5 === 0 )
    {
      data.push( i );
    }
  }

  return data;
}

console.log( panggilBilanganKelipatan5() );