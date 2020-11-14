
/* 
satu dua tiga
satu tiga dua
dua satu tiga
dua tiga satu
tiga satu dua
tiga dua satu
*/

var brian = 187;
var shane = 173;
var mark = 149;

function checkTinggi(satu = 0, dua = 0, tiga = 0)
{
  if( satu > dua )
  {
    if( satu > tiga)
    {
      return satu;
    }
    else 
    {
      return tiga;
    }
  }
  else if( satu > tiga )
  {
    if( satu > dua )
    {
      return satu;
    }
    else 
    {
      return dua;
    }
  }
  else if ( dua > satu )
  {
    if( dua > tiga )
    {
      return dua;
    }
    else 
    {
      return tiga;
    }
  }

  else if( dua > tiga )
  {
    if( dua > satu )
    {
      return dua;
    }
    else 
    {
      return satu;
    }
  }

  else if( tiga > satu )
  {
    if ( tiga > dua ) 
    {
      return tiga;
    }
    else 
    {
      return dua;
    }
  }

  else if( tiga > dua )
  {
    if ( tiga > satu ) 
    {
      return tiga;  
    }
    else 
    {
      return satu;
    }
  }
}

tertinggi1 = checkTinggi(brian,shane,mark);
tertinggi2 = checkTinggi(mark, shane);
tertinggi3 = checkTinggi(mark);

console.log(tertinggi1)
console.log(tertinggi2)
console.log(tertinggi3)