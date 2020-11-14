function getComputerOption()
{
  const random = Math.round(Math.random() * 100 + 1);

  if( random <= 10 ) return 'orang';
  if( random > 10 && random <= 50 ) return 'gajah';
  if( random > 50 ) return 'semut';
  return 'Pilihan Salah';
}

function getResult( computerOption, playerOption )
{
  if( computerOption === playerOption ) 
    return 'Seri';
  if( computerOption === 'orang' ) 
    return ( playerOption === 'semut') ? 'Kalah' : 'Menang';
  if( computerOption === 'gajah' )
    return ( playerOption === 'semut' ) ? 'Menang' : 'Kalah';
  if( computerOption === 'semut' ) 
    return ( playerOption === 'gajah' ) ? 'Kalah' : 'Menang';
}

const img = ['gajah','orang','semut'];
const comp = document.querySelector('.area-komputer > .img-komputer');

const rotate = () =>
{
  let i = 0;
  const timeStart = new Date().getTime();

  setInterval(() => 
  {

    if( new Date().getTime() - timeStart > 1000 ) 
    {
      clearInterval;
      return true;
    }

    comp.src = `img/${img[i++]}.png`;

    if(i === img.length) i = 0;
  },100)
}

img.forEach((item) => 
{
  const items = document.querySelector(`.${item}`);

  items.addEventListener('click', function()
  {
    const computerOption = getComputerOption();
    const playerOption = items.className;

    rotate();
    
    setTimeout(() => 
    {
      comp.src = `img/${computerOption}.png`;
      const win = document.querySelector('.info');
      win.innerHTML = getResult(computerOption, playerOption);
    },1000)
    
  })
})