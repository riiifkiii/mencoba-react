import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import SwiperItem from './SwiperItem';
import { useEffect } from 'react';
import { useState } from 'react';

export default () => {

    const omdbapi = `http://www.omdbapi.com?apikey=c032e2d7&s=naruto`
    const tmdb = `https://api.themoviedb.org/3/trending/movie/week?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`

    const Movies = async () => {
        const response = await fetch(omdbapi)
        const data = await response.json()

        // setMovies(data.results)
        // setMovies(response.Search)
        console.log(data.Search)
    }

    const [movies, setMovies] = useState([])

    useEffect( () => {
        Movies()
    }, [])
        console.log(movies)
    return (
        <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        // autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[450px]"
        >

            {/* {
                movies.map(() => {
                    console.log(movies)
                })
            } */}
             <SwiperSlide className='relative flex items-center justify-between text-white text-center md:block md:text-left'>
                 {/* <SwiperItem value={movies}/> */}
             </SwiperSlide>



            {/* <SwiperSlide>
                <img src="https://free4kwallpapers.com/uploads/wallpaper/demon-slayer-wallpaper-1600x900-wallpaper.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.hdwallpapers.in/download/giyuu_tomioka_inosuke_hashibira_kanao_tsuyuri_kyojuro_rengoku_nezuko_kamado_shinobu_kochou_tanjirou_kamado_zenitsu_agatsuma_4k_5k_hd_demon_slayer_kimetsu_no_yaiba-1600x900.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://wallpapercave.com/wp/wp6750306.jpg" alt="" />
            </SwiperSlide> */}
        </Swiper>
    );
};