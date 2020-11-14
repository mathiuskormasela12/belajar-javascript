// Catch All Videos ( Change NodeList to be Array for use Map & Filter Method )
const allVideos = Array.from(document.querySelectorAll('h3 + ul > [data-duration]'));

// Catch Javascript Lanjutan Videos with Filter Method
let advJs = allVideos.filter( video => video.textContent.startsWith('JAVASCRIPT LANJUTAN') )

// Catch Duration from Each Videos
.map( item => item.dataset.duration)

// Change duration form string to float, and calculate it
.map( item => 
{
	const parts = item.split(':').map( item => parseFloat(item) );
	return ( parts[0] * 60 ) + parts[1];
} )

// Calculate Javascript Lanjutan Videos Durations
.reduce( (acc, cv) => acc + cv );

// Change seconds to hours, minutes & seconds
const hours = Math.floor(advJs / 60 / 60);
advJs = advJs - ( hours * 60 * 60 );
const minutes = Math.floor(advJs / 60);
const seconds = Math.floor(advJs - ( minutes * 60 ));

// Save to DOM
document.querySelector('h4 ~ p > span.total-durasi')
.textContent = `${hours} jam, ${minutes} menit, ${seconds} detik`;

const countOfAdvJs = allVideos.filter( item => item.textContent.includes('JAVASCRIPT LANJUTAN') ).length;

document.querySelector('h4 + p > span.jumlah-video')
.textContent = `${countOfAdvJs} video`

