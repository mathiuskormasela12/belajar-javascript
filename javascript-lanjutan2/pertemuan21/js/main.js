$.ajax({
	url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avenger',
	success: res => {
		const movies = res.Search;
		const container = document.querySelector('div.container');
		let rowMovie = container.querySelector('div.row:nth-child(3)');
		
		movies.forEach(m =>
		{
			rowMovie.innerHTML += showAllCards(m);
		})

		$('.btn-getDetail').on('click', function()
		{
			$.ajax({
				url: 'http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + $(this).data('id'),
				success: function(m)
				{
					console.log($(this).data('id'))
					const modalMovie = showModal(m);
					console.log(m)

					$('.modal-body').html(modalMovie);
				},
				error: function(err)
				{
					console.log(err.responseText);
				}
			})
		});

		$('#btn-search').on('click', function()
		{
			const key = $('#keyword').val();

			$.ajax({
				url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=' + key,
				success: m => {
					
					let movies = '';
					m = m.Search;
					m.forEach(item => {
						movies += showAllCards(item)
					})

					$('.movie-container').html(movies);

					$('.btn-getDetail').on('click', function()
					{
						$.ajax({
							url: 'http://www.omdbapi.com/?apikey=a7d4f0c1&i=' + $(this).data('id'),
							success: function(m)
							{
								console.log($(this).data('id'))
								const modalMovie = showModal(m);
								console.log(m)

								$('.modal-body').html(modalMovie);
							},
							error: function(err)
							{
								console.log(err.responseText);
							}
						})
					});
				},
				error: function(err)
				{
					console.log(err.responseText)
				}
			})
		})
	},
	error: err => {
		console.log(err.response);
	}
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