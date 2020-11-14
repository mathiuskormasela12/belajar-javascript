window.onload = function(){

  const h1 = document.getElementById('h1');

  const size = document.getElementById('size');
  const text = document.getElementById('text');
  const color = document.getElementById('color');

  color.addEventListener('keyup', () => 
  {
    let color2 = color.value;
    h1.style.color = color2;
  })

  size.addEventListener('keyup', () =>
  {
    let size2 = size.value;
    h1.style.fontSize = size2.concat('px')
  })

  text.addEventListener('keyup', () =>
  {
    let text2 = text.value;
    h1.innerHTML = text2;
  })

}