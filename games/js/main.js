const btnCB = document.getElementById('btnChangeBackground');
const btnRnd = document.getElementById('btnRandom');
const range = document.querySelectorAll('input[type=range]');
const sec = document.querySelector('section');

document.body.onclick = function()
{
	alert('wkwkw')
}

sec.onclick = function()
{
	alert('hello');
}

btnCB.onclick = function() {
	sec.style.backgroundColor = 'limegreen';
};

btnRandom.addEventListener('click', function()
{
	const red = Math.floor(Math.random() * 255 + 1);
	const green = Math.floor(Math.random() * 255 + 1);
	const blue = Math.floor(Math.random() * 255 + 1);

	sec.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

range.forEach((item, index) => 
{
	item.addEventListener('input', e =>
	{
		if(index == 0)
		{
			var red = e.target.value;
			var green = e.target.nextElementSibling.nextElementSibling.value;
			var blue = e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
		}
		else if(index == 1)
		{
			var red = e.target.previousElementSibling.previousElementSibling.value;
			var green = e.target.value;
			var blue = e.target.nextElementSibling.nextElementSibling.value;
		}

		else if(index == 2)
		{
			var red = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
			var green = e.target.previousElementSibling.previousElementSibling.value;
			var blue = e.target.value;
		}

		sec.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	});
});

sec.addEventListener('input', e =>
{
	// e.preventDefault();
	 // if(e.target.id == 'btnChangeBackground') {
	 // 	e.stopPropagation();
	 // 	console.log('he')
	 // }
	const red = Math.round((e.clientX / window.innerWidth) * 255);
	const green = Math.round((e.clientY / window.innerHeight) * 255);

	sec.style.backgroundColor = `rgb(${red}, ${green}, 100)`;
});