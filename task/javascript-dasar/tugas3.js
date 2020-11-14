const sayHello = ( nama ) => 
{
  nama = "Hi, Nama saya " + nama;

  return nama;
}


var nilai1 = "Mathius";
var nilai2 = sayHello(nilai1)

// Nilai awal = Mathius
console.log(nilai1);

// Nilai setelah berubah = Hi, Nama saya Mathius
console.log(nilai2);
