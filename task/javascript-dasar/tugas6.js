var i = 1;
var hasil;
var text = "Bilangan Genap";

// Bilangan genap= text genap
// bilangan ganjil = angka
while( i <= 20 )
{
  hasil = i % 2;
  if( hasil === 0 )
  {
    console.log(text);
    i++;
    continue;
  }
  console.log(i);
  i++
}