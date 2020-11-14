function panggilNestedArray()
{
  /* 
    Nested array adalah array 
    didalam array. Untuk memanggil
    array di dalam array berikut caranya :
    variablearray[index][index]
  */
  var dataNama = [
    [
      "Ab",
      "Ac",
      "Ad"
    ],
    [
      "Bola1",
      "Bola2",
      "Bola3"
    ],
    [
      "Rem1",
      "Rem2",
      "Rem3"
    ]
  ];

  // untuk mengetahui panjangnya array berapa
  console.log(dataNama.length)

  console.log(dataNama[0][0]);
}

panggilNestedArray();