const finish = ( x, y, z, k ) => 
{
  const res = x.concat(' ',y,' ', z,k)
  console.log( res );
}

const finish2 = ( x, y ) => 
{
  const res = x.concat(' ', y);
  console.log( res );
}

finish( 'No', 'rumah saya',30,'A' );
finish2('Jalan pangeran Tirtayasa No', 70);