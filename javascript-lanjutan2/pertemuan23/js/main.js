// $.ajax({
// 	url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger',
// 	success: res => {
// 		const movies = res.Search;
// 		const container = document.querySelector('div.container');
// 		let rowMovie = container.querySelector('div.row:nth-child(3)');
		
// 		movies.forEach(m =>
// 		{
// 			rowMovie.innerHTML += showAllCards(m);
// 		})

// 		$('.btn-getDetail').on('click', function()
// 		{
// 			$.ajax({
// 				url: 'http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + $(this).data('id'),
// 				success: function(m)
// 				{
// 					console.log($(this).data('id'))
// 					const modalMovie = showModal(m);
// 					console.log(m)

// 					$('.modal-body').html(modalMovie);
// 				},
// 				error: function(err)
// 				{
// 					console.log(err.responseText);
// 				}
// 			})
// 		});

// 		$('#btn-search').on('click', function()
// 		{
// 			const key = $('#keyword').val();

// 			$.ajax({
// 				url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + key,
// 				success: m => {
					
// 					let movies = '';
// 					m = m.Search;
// 					m.forEach(item => {
// 						movies += showAllCards(item)
// 					})

// 					$('.movie-container').html(movies);

// 					$('.btn-getDetail').on('click', function()
// 					{
// 						$.ajax({
// 							url: 'http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + $(this).data('id'),
// 							success: function(m)
// 							{
// 								console.log($(this).data('id'))
// 								const modalMovie = showModal(m);
// 								console.log(m)

// 								$('.modal-body').html(modalMovie);
// 							},
// 							error: function(err)
// 							{
// 								console.log(err.responseText);
// 							}
// 						})
// 					});
// 				},
// 				error: function(err)
// 				{
// 					console.log(err.responseText)
// 				}
// 			})
// 		})
// 	},
// 	error: err => {
// 		console.log(err.response);
// 	}
// });


/*
	====== Belajar Fetch ======

	A. Pengertian
		 Fetch adalah API dalam Modern Javascript
		 yang berfungsi untuk mengambil resources
		 dari jaringan dan mengembalikannya dalam
		 bentuk Promise yang sudah berhasil (fullfilled)
		 ketika ada response yg tersedia.

		 rumus :
		 fetch(url, init);

		 ket : 
		 url -> url adalah sumber dari resourcesnya
		        selain URL kita juga dapat menggantinya
		        dengan Object Javascript (tapi ini jarang)
		 init -> konfigurasi dari fetchnya yg berupa object.
						 salah satunya itu method ( defaultnya get).

		 response property :
		 a. ok -> ketika ada response yg tersedia (200)
		 b. status -> kode statusnya ex : 200, 404 dll
		 c. statusText -> text dari status codenya
		 d.redirected -> ketika resource sudah tidak ada ( alamatnya pindah )
		 e. type -> tipe dari responsenya

		 response method :
		 a. json() -> berfungsi untuk menangani promise yg kembalikan
		              oleh fetch dan json akan mengembalikannya dalam
		              promise juga yg bisa langsung di ubah ke object
		 b. blob() -> berfungsi untuk menangani binary larga object ( ketika kita mengirim file )
*/

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=naruto')
// 	.then(response => response.json())
// 	.then(response => console.log(response.Search))
// 	.catch(response => console.log(response));

const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', function()
{
	const inputKeyword = this.parentElement.previousElementSibling;

	fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + inputKeyword.value)
		.then( response => response.json() )
		.then( response => {
			const movies = response.Search;
			let cards = '';
			movies.forEach(item => cards += showAllCards(item))

			const moviesContainer = document.querySelector('.movie-container');
			moviesContainer.innerHTML = cards;

			moviesContainer.addEventListener('click', function(e)
			{
				if( e.target.classList.contains('btn-getDetail') )
				{
					const imdbID = e.target.dataset.id;
					
					fetch('http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + imdbID)
						.then( response => response.json() )
						.then( response => {
							const modalDetail = document.querySelector('.modal-body');
							modalDetail.innerHTML = showModal(response);		
						})
						.catch( response => console.log(response) );
				}
			})
		})
		.catch( response => console.log(response) );
});

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