// Belajar Refactory Fetch
const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', async function(e)
{
	try
	{
		const keyword = e.target.parentElement.previousElementSibling.value;
		const movies = await getAllMovies(keyword);
		updateUI(movies);	
	} catch(err)
	{
		alert(err);
	}
});

// event binding
document.addEventListener('click', async function(e)
{
	if(e.target.classList.contains('btn-getDetail'))
	{
		const imdbID = e.target.dataset.id;
		const movieDetail = await getMovieDetail(imdbID);
		updateUIDetail(movieDetail);
	}
});

function getMovieDetail(id)
{
	return fetch('http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + id)
		.then(response => response.json())
		.then(response => response);
}
function updateUIDetail(m)
{
	const modalBody = document.querySelector('.modal-body');
	modalBody.innerHTML = showModal(m);
}

function getAllMovies(keyword)
{
	return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + keyword )
		.then(response => 
		{
			if( !response.ok )
			{
				// Melempar error pada catch
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
			return response.Search;
		});
}

function updateUI(m)
{
	let cards = '';
	m.forEach(item => cards += showAllCards(item) );
	const movieContainer = document.querySelector('.movie-container');
	movieContainer.innerHTML = cards;
}

function showAllCards(m)
{
	return `<div class="col-md-4 my-5">
          <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href="#" class="btn btn-primary btn-getDetail" data-toggle="modal" data-target="#modal-detail" data-id="${m.imdbID}">Show Details</a>
            </div>
          </div>
        </div>`;
}

function showModal(m)
{
	return `<div class="container-fluid">
						<div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot :</strong> ${m.Plot}</li>
                </ul>
              </div>
            </div>
           </div>`;
}
