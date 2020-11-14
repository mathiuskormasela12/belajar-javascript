const panggilRegexp = ( value ) =>
{
  var res = value.split(' ');

  if( /javascript/.test( value ) || /php/.test( value ) )
  {
    console.log( res[0] );
    return true;
  }

  console.log( res[0].concat(' ', res[1]) );
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");