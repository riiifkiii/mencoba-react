import React, { useState, useEffect } from 'react'

export default function SwiperItem({data}) {

    const TMDB_API_MOVIES_DETAIL = `https://api.themoviedb.org/3/movie/${data.id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`
    const TMDB_API_MOVIES_TRAILLER = `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`

    const DetailMovies = async () => {
        await fetch(TMDB_API_MOVIES_DETAIL)
            .then( response => {
                return response.json()
            })
            .then( data => {
                // console.log(data)
                setDetailMovie(data)
            })
    }

    const Trailler = async () => {
        await fetch(TMDB_API_MOVIES_TRAILLER)
            .then( response => {
                return response.json()
            })
            .then( data => {
                const m = data.results.slice(0, 1).map( detail => {
                    // return console.log(detail)
                    setTrailler(detail)
                })
            })
    }

    const [detailMovie, setDetailMovie] = useState([])
    const [trailler, setTrailler] = useState([])
    
    useEffect(() => {
        DetailMovies()
        Trailler();
    },[])

    console.log(trailler.key)

  return (
    <>
    <div className="caption absolute bottom-0 w-full bg-slate-900 h-[300px] md:top-1/2 md:-translate-y-1/2 md:h-full md:w-[600px] md:flex md:flex-col md:justify-center md:ml-10 lg:ml-16 md:bg-transparent">
        <div className="title my-5">
            <h1 className='text-2xl md:text-4xl font-bold mb-1'>{detailMovie.original_title}</h1>
            <p className='text-xs'>
                <span>{detailMovie.release_date}</span>
                <span className='mx-3'></span>
                <span>{detailMovie.vote_average}/10</span>
            </p>
        </div>
        <div className="trailer w-full">
            <iframe src={"https://www.youtube.com/embed/"+trailler.key} className='mx-auto md:m-0' title="The Hobbit: The Battle of the Five Armies - Official Main Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div className="poster absolute top-0 h-[200px] w-full -z-10 md:h-full md:w-[800px] md:right-0 md:before:absolute md:before:top-0 md:before:left-0 md:before:h-full md:before:w-full md:before:bg-gradient-to-r md:before:from-slate-900 md:before:to-transparent md:before:z-20">
        <img src={"https://image.tmdb.org/t/p/original/"+detailMovie.backdrop_path} alt="" className='object-cover h-full w-full'/>
    </div>
    </>
  )
}
