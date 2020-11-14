const pecahString = ( data ) =>
{
  return data.split(' ');
}

const showArray = ( data ) =>
{
  data.forEach( ( item, index ) => 
  {
    console.log('Item :',item + ' Index ke ' + index);
  } );
}

var dataArray = pecahString('Saya ingin belajar bersama');
showArray( dataArray );

