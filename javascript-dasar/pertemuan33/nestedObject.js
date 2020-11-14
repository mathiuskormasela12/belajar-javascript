/* 
  ==== Belajar Nested Object ====

  Nested object adalah object di dalam object.
  Maksudnya ada sebuah object yang memiliki
  property berupa object juga.

  Rumus penulisan :

  var object1 = {
    property1 : nilai,
    property2 : {
      propertsatu : nilaisatu
      propertydua : nilaidua
    }
  }

  Keterangan :
  object1 -> merupakan object pertama
  property1 -> properti object pertama
  nilai -> nilai property pertama
  property2 -> object baru yang memiliki property tersendiri
  propertysatu -> property object baru
  nilaisatu -> nilai propertysatu
  propertydua -> property object baru
  nilaidua -> nilai propertydua

  Cara mengakses property didalam nested object :

  object1.object2.propertyobject2;
*/

function nestedObject()
{
  var mahasiswa = {
    nama : 'Mathius Kormasela',
    ipk  : {
      semester1 : 3.4,
      semester2 : 3.5,
      semester3 : 3.6,
      semester4 : 3.7,
      semester5 : 3.8,
      semster6 : 3.85,
      semester7: 3.9,
      semester8 : 4
    }
  };

  console.log( mahasiswa.ipk.semester8 );
}

nestedObject();