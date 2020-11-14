function panggilObjects()
{
  var apel = {
    type: 'buah',
    rasa: function()
    {
      return 'rasa apel';
    },
    vitamin: {
      jenis: 'C'
    }
  }

  console.log(apel.rasa() )
  console.log( apel.type );

  apel.type = 'fruit';
  console.log(apel.type);
  console.log(apel.vitamin.jenis);
}

panggilObjects();