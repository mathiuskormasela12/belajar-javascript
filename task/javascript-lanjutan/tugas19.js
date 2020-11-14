const showRepeatText= () => 
{
  let text = 'Semangat...';

  console.log( '========= Nomor 1 =========' );
  console.log( text.repeat( 5 ) );
  console.log("");
}

const showRepeatText2 = () => 
{
  let text = '*';

  console.log( '========= Nomor 2 =========' );
  console.log( text.repeat( 5 ) );
  console.log( text.repeat( 25 ) );
  console.log( text.repeat( 45 ) );
  console.log( text.repeat( 65 ) );
  console.log( text.repeat( 95 ) );
  console.log( text.repeat( 65 ) );
  console.log( text.repeat( 45 ) );
  console.log( text.repeat( 25 ) );
  console.log( text.repeat( 5 ) );
}

showRepeatText();
showRepeatText2();