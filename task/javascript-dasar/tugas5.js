var i = 1;
var hasil;

while( i <= 20 )
{
  hasil = i % 3;
  if( hasil !== 0 )
  {
    i++;
    continue;
  }

  console.log(i);
  i++;
}