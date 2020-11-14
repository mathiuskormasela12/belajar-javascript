const panggilBilanganKelipatan5 = () =>
{
  var kelipatan5 = [];

  for( var i = 1; i <= 50; i++ )
  {
    if( i % 5 === 0 )
    {
      kelipatan5.push( i );
    }
  }

  return kelipatan5;
}

console.log( panggilBilanganKelipatan5() );