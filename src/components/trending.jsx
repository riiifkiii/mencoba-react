
    const dataTrending = () => {
        return fetch ('https://api.themoviedb.org/3/trending/movie/week?api_key=15e383204c1b8a09dbfaaa4c01ed7e17')
            .then(response => {
                return response.json()
            })
    }



const Trending = () => {
    return(
        console.log(dataTrending)   
    )
}

export default Trending