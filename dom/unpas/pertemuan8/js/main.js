const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function() 
{
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class','biru-muda');
  document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const textAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute('type', 'button');

// JavaScript tolong masukan element tAcakWarna
// dibawahnya atau setelah element tUbahWarna
tUbahWarna.after(tAcakWarna);
tAcakWarna.style.marginLeft = '10px';

tAcakWarna.addEventListener('click', () =>
{
  /* 
    Math.random() berfungsi untuk menghasilkan
    angka acak dari 0 - 1. 

    method Math.round(Math.random() * 255 + 1) berfungsi untuk menghasilkan
    angka acak dari angla 1 - 255

    rumus :
    Math.round( Math.random() * angkaMaksimal + angkaMinimal )
  */
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

const rMerah = document.querySelector('input[name=rMerah]');
const rHijau = document.querySelector('input[name=rHijau]');
const rBiru = document.querySelector('input[name=rBiru]');

rMerah.addEventListener('input', function()
{
  const r = rMerah.value;
  const g = rHijau.value;
  const b = rBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, 100, 100)`
})

rHijau.addEventListener('input', function()
{
  const r = rMerah.value;
  const g = rHijau.value;
  const b = rBiru.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
})

rBiru.addEventListener('input', function() 
{
  const r = rMerah.value;
  const g = rHijau.value;
  const b = rBiru.value;

  document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
})

// document.body.style.height = '100%';

document.body.addEventListener('mousemove', function(event)
{
  /* 
    event -> object untuk mengakses method clientX dan clientY
    clientY -> untuk mengetahui posisi mouse secara vertikal
    clientX -> untuk mengetahui posisi mouse secara horizontal
    window.innerWidth -> untuk mengetahui lebar document web
    window.innerHeight -> Untuk mengetahui tinggi document web
  */
  console.log(window.innerWidth);
  const Xpos = Math.round((event.clientX / window.innerWidth) * 255);
  const Ypos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${Xpos}, ${Ypos}, 100)`;
}) 