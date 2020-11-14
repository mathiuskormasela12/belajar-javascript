/*
	======== Belajar Fetch ========

	A. Pengertian
	   Fetch adalah API dalam Modern Javascript
	   yang berfungsi untuk mengambil resources
	   dari jaringan yang sudah berhasil (fullfilled)
	   ketika ada response yg tersedia.

	   rumus :
	   fetch(url, init)

	   ket :
	   url -> sumber jaringannya bisa berbentuk URL atau object ( object jarang )
	   init -> berisi konfigurasi fetchnya (bentuknya object) 
	   				 isi init :
	   				 a. method -> defaultnya get
	   				 b. body -> input value form
	   				 c. headers -> untuk menentukan tipe response dan headers

	   response property :
	   a. ok -> ketika response status code nya 200
	   b. status -> untuk mengambil status codenya
	   c. statusText -> untuk mengambil text dari status codenya
	   d. redirected -> ketika sumber telah pindah alamat
	   e. type -> tipe dari responsenya

	   response method :
	   a. json() -> untuk menerjemahkan promise yg dikembalikan
	                oleh fetch menjadi promise juga yg dapat
	                langsung di terjemahkan ke JSON.
	   b. blob() -> untuk menangani binary large object (ketika ingin mengirim file)
*/
// const btnSearch = document.getElementById('btn-search');

// btnSearch.addEventListener('click', function(e)
// {
// 	const keyword = e.target.parentElement.previousElementSibling.value;

// 	fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + keyword)
// 		.then(response => response.json())
// 		.then(response => 
// 		{
// 			const movies = response.Search;
// 			let cards = '';
// 			movies.forEach(m => cards += showAllCards(m));

// 			const movieContainer = document.querySelector('.movie-container');
// 			movieContainer.innerHTML = cards;

// 			movieContainer.addEventListener('click', function(e)
// 			{
// 				if( !e.target.classList.contains('btn-getDetail') ) return false;
// 				fetch('http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + e.target.dataset.id)
// 					.then(response => response.json())
// 					.then(response => 
// 					{
// 						const modalBody = document.querySelector('.modal-body');
// 						modalBody.innerHTML = showModal(response);
// 					})
// 					.catch(response => console.log(response));
// 			});

// 		})
// 		.catch(response => console.log(response));
// });

// Belajar Refactory Fetch
const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', async function(e)
{
	const keyword = e.target.parentElement.previousElementSibling.value;
	const movies = await getAllMovies(keyword);
	updateUI(movies);
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
		.then(response => response)
		.catch(response => console.log(response));
}
function updateUIDetail(m)
{
	const modalBody = document.querySelector('.modal-body');
	modalBody.innerHTML = showModal(m);
}

function getAllMovies(keyword)
{
	return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + keyword )
		.then(response => response.json())
		.then(response => response.Search)
		.catch(response => console.log(response));
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
