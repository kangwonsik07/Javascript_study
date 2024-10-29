const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjVhNzIwYzZkODU1YTUzOGU5MzA0MjZmMTY1ZjYyMCIsIm5iZiI6MTczMDE2NDU1My42OTAxNTUsInN1YiI6IjY3MWFlNzc5YjNkNWNiYjg0MmYzZjdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7JafIcdb4m-W42hISYRJS3Pi6-HJ-wxf6ltsaLslwM',
   },
}

const url = 'https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1'

const getpopularTV = async (url) => {
   try {
      const response = await fetch(url, options)

      const data = await response.json()

      console.log(data.results)

      const results = data.results

      const container = document.querySelector('main .container')
      let rowshtml = ''

      for (let i = 0; i < results.length; i += 2) {
         let rowhtml = '<div class="row" >'

         for (let j = 0; j < 2; j++) {
            const index = i + j
            if (index >= results.length) break

            const popularTV = results[index]
            rowhtml += `
            <div class="col-sm-3 p-3">
               <div class="card" >
                    <a href="./popularTVdetail.html?popularTV_id=${popularTV.id}">
                        <img src="https://image.tmdb.org/t/p/w500${popularTV.poster_path}" alt="poster" class="poster-detail card-img-left poster" style='max-width:100%'/>
                    </a>
                     <ul class="TV-info">
                        <li><p>${popularTV.name}</p></li>
                        <li><p>${popularTV.vote_average}</p></li>
                        <li><p>${popularTV.overview}</p></li>
                     </ul>
                     
                </div>
                
            </div>
               `
         }

         rowhtml += '</div>'
         rowshtml += rowhtml
      }
      container.innerHTML = rowshtml
   } catch (error) {
      console.log('에러 발생', error)
   }
}
getpopularTV(url)
// fetch(, options)
//    .then((res) => res.json())
//    .then((res) => console.log(res))
//    .catch((err) => console.error(err))
