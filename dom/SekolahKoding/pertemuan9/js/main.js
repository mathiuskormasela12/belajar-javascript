const img = document.getElementById('gambar');
const input = document.getElementById('input');

// img.onclick = function(){
//    changeSize();
// }

img.onclick = changeSize;

function changeSize() {
   img.width = '400';
}

input.addEventListener('click', changeBackground);

function changeBackground()
{
   input.style.backgroundColor = 'blue';
}

// input.addEventListener('keyup', () => 
// {
//    const span = document.getElementById('nama');
//    let val = input.value;
//    span.innerHTML = val;
// })

const btn = document.getElementById('btn');
btn.addEventListener('dblclick', () => {
   let val = input.value;
   const span = document.getElementById('nama');
   span.innerHTML = val;
})