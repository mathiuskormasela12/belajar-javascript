var x = 40;
var y = 25;
var z = 90;

/* 
  ==== Belajar Nested If ====

  Nested if adalah sebuah if didalam if
  atau biasanya di sebut if bersarang;
*/
if( x > y )
{
  if( x > z )
  {
    console.log("X adalah nilai terbesar");
  }
  else 
  {
    console.log("X adalah nilai terbesar kedua");
  }
}

else 
{
  if ( x < y )
  {
    console.log("X adalah nilai terkecil");
  }
  else 
  {
    console.log("X adalah nilai terkecil kedua");
  }
}