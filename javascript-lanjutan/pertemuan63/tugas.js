const showOddNumber = () =>
{
  const oddNumber = [];

  var i = 1;
  while( i <= 30 )
  {

    if( i % 2 !== 0 )
    {
      oddNumber.push( i );
    }

    i++;
  }

  return oddNumber;
}

console.log( showOddNumber() );