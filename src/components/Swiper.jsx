import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default () => {

    const customStyle = {
        background: "linear-gradient(to bottom, transparent 5%, red)"
        // backgroundColor : "black"
    }


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
            <SwiperSlide className='relative flex items-center justify-between text-white text-center md:block md:text-left'>
                <div className="caption absolute bottom-0 w-full bg-slate-900 h-[300px] md:top-1/2 md:-translate-y-1/2 md:h-full md:w-[600px] md:flex md:flex-col md:justify-center md:ml-10 lg:ml-16 md:bg-transparent">
                    <div className="title my-5">
                        <h1 className='text-2xl md:text-4xl font-bold mb-1'>The Hobbit: Unxpected Journey</h1>
                        <p className='text-xs'>
                            <span>16 September 2012</span>
                            <span className='mx-3'>Action, Fiction, Adventure</span>
                            <span>8.9/10</span>
                        </p>
                    </div>
                    <div className="trailer w-full">
                        <iframe src="https://www.youtube.com/embed/iVAgTiBrrDA" className='mx-auto md:m-0' title="The Hobbit: The Battle of the Five Armies - Official Main Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="poster absolute top-0 h-[200px] w-full -z-10 md:h-full md:w-[800px] md:right-0 md:before:absolute md:before:top-0 md:before:left-0 md:before:h-full md:before:w-full md:before:bg-gradient-to-r md:before:from-slate-900 md:before:to-transparent md:before:z-20">
                    <img src="https://wallpaperaccess.com/full/8499738.jpg" alt="" className='object-cover h-full w-full'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://free4kwallpapers.com/uploads/wallpaper/demon-slayer-wallpaper-1600x900-wallpaper.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.hdwallpapers.in/download/giyuu_tomioka_inosuke_hashibira_kanao_tsuyuri_kyojuro_rengoku_nezuko_kamado_shinobu_kochou_tanjirou_kamado_zenitsu_agatsuma_4k_5k_hd_demon_slayer_kimetsu_no_yaiba-1600x900.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://wallpapercave.com/wp/wp6750306.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};