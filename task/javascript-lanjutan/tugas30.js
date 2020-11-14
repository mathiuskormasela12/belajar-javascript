const regex = ( value ) =>
{
  const getData = value.match( /[es]/g );

  console.log( getData );
}

regex( "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat" );