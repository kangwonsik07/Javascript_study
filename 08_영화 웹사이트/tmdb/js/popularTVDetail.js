const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjVhNzIwYzZkODU1YTUzOGU5MzA0MjZmMTY1ZjYyMCIsIm5iZiI6MTczMDYyOTUzNi41NTM2NDI1LCJzdWIiOiI2NzFhZTc3OWIzZDVjYmI4NDJmM2Y3Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PA2tSZXAa7fYk-Clu-7uWTEjBF2tLyQs6UGB_ELiAgo',
   },
}

const url = 'https://api.themoviedb.org/3/tv/44006?language=ko-KR'

const getpopularTVDetail = async (url) => {
   try {
      const response = await fetch(url, options)

      const data = await response.json()

      console.log(data)
      console.log(data.seasons.length)
      console.log(data.seasons[0].air_date)

      const results = data.results

      let rowhtml = ``
      const container = document.querySelector('main .container')
      let rowshtml = `
       <div>
            <div class="col-sm-9 cardddd p-3">
                <div class="p-3 col-sm-6" >
                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="sss" style='max-width:100%'/>
                </div>
                <div class="p-3 col-sm-6">
                    <h2>${data.name}</h2>
                    <ul>
                        <li>원제 ${data.original_name},영어 </li>
                        <li>평점 ${data.vote_average}</li>
                        <li>최근 방영일 ${data.last_air_date}</li>
                        <li>처음 방영일${data.first_air_date}</li>
                    </ul>
                    <br>
                     <p>줄거리</p>
                     <p>${data.overview}</p>
                  </div>
               </div>
            <div class="col-sm-6 p-3">
                <ul style="text-align:center">
       `

      for (let i = 0; i < data.seasons.length; i++) {
         rowhtml += `
           <li>시즌 ${i + 1} (평점: ${data.seasons[i].vote_average}) 보러가기 -${data.seasons[i].air_date}방영</li>
           `
      }

      rowhtml += `
           </ul>
        </div>
    `
      rowshtml += rowhtml
      container.innerHTML = rowshtml
   } catch (error) {
      console.log('에러 발생', error)
   }
}

getpopularTVDetail(url)

// const options = {
//    method: 'GET',
//    headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjVhNzIwYzZkODU1YTUzOGU5MzA0MjZmMTY1ZjYyMCIsIm5iZiI6MTczMDYyOTUzNi41NTM2NDI1LCJzdWIiOiI2NzFhZTc3OWIzZDVjYmI4NDJmM2Y3Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PA2tSZXAa7fYk-Clu-7uWTEjBF2tLyQs6UGB_ELiAgo',
//    },
// }

// fetch('https://api.themoviedb.org/3/tv/44006?language=ko-KR', options)
//    .then((res) => res.json())
//    .then((res) => console.log(res))
//    .catch((err) => console.error(err))
