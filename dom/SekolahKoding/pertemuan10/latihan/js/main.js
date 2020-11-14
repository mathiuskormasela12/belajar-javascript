window.onload = function()
{
  const input = document.getElementsByClassName('input');
  const btn = document.getElementById('masuk');
  const root = document.getElementById('root');
  const btn2 = document.getElementById('masuk2');
  
  btn.addEventListener('click', function()
  {
    const el = document.createElement(input[0].value);
    const text = document.createTextNode(input[1].value);
    el.appendChild(text);
    root.appendChild(el);
  })
  
  btn2.addEventListener('click', () => 
  {
    const log = document.getElementById('log');
    const lama = document.getElementById('login');
    const el = document.createElement(input[2].value);
    const text = document.createTextNode(input[3].value);
    el.appendChild(text);
    log.replaceChild(el, lama);
  })

  document.querySelectorAll('form')[2].removeChild(document.querySelectorAll('.input')[4]);

  const input2 = document.querySelectorAll('.inputs');
  const idh1 = document.querySelector('#h1');
  console.log(input2)
  // console.log(idh1)

  input2[0].addEventListener('keyup', () =>
  {
    const val = input2[0].value;
    idh1.style.color = val;
  })

  input2[1].addEventListener('keyup', () =>
  {
    const val = input2[1].value;
    idh1.style.fontSize = val.concat('px');
  })
}