const showFruit = () => 
{
  var fruit = ['Pisang','Jeruk'];

  console.log( fruit );

  fruit.unshift('Apel','Mangga');

  return fruit;
}

console.log( showFruit() );