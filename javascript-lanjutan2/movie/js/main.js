window.addEventListener('load', async function()
{
	const movies = await getAllMovies('Avengers');
	const cards = printCards(movies);
	const rowCard = document.querySelector('.row-card');
	rowCard.innerHTML = cards;
});

document.addEventListener('click', function(e)
{
	if( !e.target.classList.contains('close') && !e.target.classList.contains('btn-close') ) return false;

	const modalContainer = document.querySelector('.modal-container');
	const hero = document.querySelector('.hero');
	modalContainer.classList.add('hidden');
	hero.classList.remove('fixed');
});

document.addEventListener('click', function(e)
{
	if( !e.target.classList.contains('btn-detail') ) return false;
	const hero = document.querySelector('.hero');
	const modalContainer = document.querySelector('.modal-container');

	if(!modalContainer.classList.contains('fixed')) 
	{
		hero.classList.add('fixed');
		modalContainer.classList.remove('hidden');
	} 
});

const btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener('click', async function(e)
{
	e.preventDefault();
	try
	{
		const keyword = e.target.parentElement.previousElementSibling.value;
		const rowCard = document.querySelector('.row-card');
		const movies = await getAllMovies(keyword);
		const cards = printCards(movies);
		rowCard.innerHTML = cards;
		const titleCard = document.querySelectorAll('.title-card');
		
		titleCard.forEach((w, i) =>
		{
			if(w.textContent.length > 20)
			{
				w.textContent = w.textContent.substr(0, 21) + '...';
			}
		});
	} catch(err) {
		console.log(err);
	}
});

document.addEventListener('click', async e =>
{
	if( e.target.classList.contains('btn-detail') )
	{
		try
		{
			const movieDetail = await getMovieDetail(e.target.dataset.imdbid);
			const modalContent = document.querySelector('.modal-content');
			const modalDetail = showDetail(movieDetail);
			modalContent.innerHTML = modalDetail;
		} catch(err)
		{
			console.log(err);
		}
	}
})

function getMovieDetail(id)
{
	return fetch(`http://www.omdbapi.com/?apikey=a7d4f0c1&i=${id}`)
		.then(response =>
		{
			if( !response.ok )
			{
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.then(response => 
		{
			if( response.Response === 'False' )
			{
				throw new Error(response.Error);
			}
				return response;
		})
}

function getAllMovies(keyword)
{
	return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=${keyword}`)
		.then(response => 
		{
			if(!response.ok)
			{
				throw new Error(response.statusText);
			} 
			return response.json();
		})
		.then(response => 
		{
			if( response.Response === "False" )
			{
				throw new Error(response.Error);
			}
			return response.Search;
		});
}

function printCards(m)
{
	let cards = '';
	m.forEach(item => cards += showAllCards(item));
	return cards;
}

function showAllCards(m)
{
	return `<div class="col-card">
							<div class="card">
								<figure class="card-head">
									<img src="${m.Poster || ''}" alt="Foto ${m.Title}" class="card-img">
								</figure>
								<div class="card-footer">
									<div class="container">
										<p class="title-card">${m.Title}</p>
										<p class="subtitle-card">${m.Year}</p>
										<button class="btn btn-detail" data-imdbid="${m.imdbID}">See Detail</button>
									</div>
								</div>
							</div>
						</div>`;
}

function showDetail(m)
{
	return `<div class="container">
							<div class="modal-col">
								<img src="${m.Poster}" alt="" class="modal-img" class="modal-img" alt="${m.Title}">
							</div>
							<div class="modal-col">
								<ul class="table-ul">
									<li class="table-ul-title">${m.Title} (${m.Year})</li>
									<li class="table-ul-subtitle"><strong>Director :</strong> ${m.Director}</li>
									<li class="table-ul-subtitle"><strong>Actors :</strong> ${m.Actors}</li>
									<li class="table-ul-subtitle"><strong>Writer :</strong> ${m.Writer}</li>
									<li class="table-ul-subtitle"><strong>Plot :</strong> ${m.Plot}</li>
								</ul>
							</div>
						</div>`;
}