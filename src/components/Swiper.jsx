import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import SwiperItem from './SwiperItem';

export default () => {
    const TMDB_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`

    const Movies = async () => {
        await fetch(TMDB_API)
            .then(response => {
                return response.json()
            })
            .then( data => {
                setMovies(data.results)
            })
    }

    const [movies, setMovies] = useState([])

    useEffect( () => {
        Movies()
    }, [])
    
    return (
        <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        // autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[450px]"
        >
            {
                movies.slice(0,5).map((movie) => {
                    return <SwiperSlide key={movie.id} className='relative flex items-center justify-between text-white text-center md:block md:text-left'>
                        <SwiperItem data={movie} />
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};