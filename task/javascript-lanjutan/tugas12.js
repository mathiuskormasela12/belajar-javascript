const panggilBuah = () => 
{
  var buah = ['Pisang','Jeruk','Apel','Mangga'];

  // Value Awal
  console.log( buah );

  // Menghilangkan array terakhir
  buah.pop();
  console.log( buah );

  // Menghilangkan array index ke 0
  buah.shift();
  return buah;
}

console.log( panggilBuah() );