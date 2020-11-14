/* 
  i = 1;
  i < 3;
  i ke 1
    j = 0;
    j < 2
    j ke 0
    j = 0 + 1
    j = 1
    j < 2
    j ke 1
    j = 1 + 1
    j = 2
    j < 2
enter
i = 1 + 1
i = 2
2 < 3;
i ke 2
  j = 0;
  j < 2
  j  ke 0
  j = 0 + 1
  j = 1
  j < 2
  j ke 1
  j = 1 + 1;
  j = 2;
  j < 2
enter
i = 2 + 1;
i = 3;
i < 3


*/
for( var i = 1; i < 3; i++ )
{
  console.log("i ke",i);

  for( var j = 0; j < 2; j++ )
  {
    console.log("j ke ", j);
  }

  console.log("");
}