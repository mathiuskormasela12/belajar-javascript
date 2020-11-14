const box = document.querySelector('.box');

box.addEventListener('click', function()
{
	let satu = 'size';
	let dua = 'background';

	if( this.classList.contains(satu) )
	{
		// let tmp = satu;
		// satu = dua;
		// dua = tmp;
		[satu, dua] = [dua, satu];
	}

	this.classList.toggle(satu);

	setTimeout(()=>
	{
		this.classList.toggle(dua);
	},600);
});