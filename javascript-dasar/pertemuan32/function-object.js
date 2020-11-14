/* 
  ==== Belajar Function di dalam Object ====

  Sebuah property di dalam object
  nilainya dapat kita isi juga
  dengan sebuah function atau pemanggilan
  function.
*/

function fungsiObject()
{
  var x = {
    // Berisi nilai 'halo' yang dikembalikan oleh function hello
    /* Jadi property pesan dibawah tidak 
       berisi function melainkan hanya nilai 
       yang dikembalikan oleh function hello
    */
    pesan: hello()
  }

  // Mencetak nilai pada property pesan
  console.log( x.pesan );
}

function hello()
{
  return "halo";
}

fungsiObject();