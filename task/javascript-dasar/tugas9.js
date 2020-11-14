const showMahasiswa = () =>
{
  var mahasiswa = {
    name : "Mathius",
    age : 18,
    school : "SMKN 12 Jakarta"
  }

  for( var i in mahasiswa )
  {
    console.log( mahasiswa[i] );
  }
}

showMahasiswa();