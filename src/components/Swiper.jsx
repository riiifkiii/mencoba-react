import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default () => {
    return (
        <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="https://wallpaperaccess.com/full/8499738.jpg" alt="" />
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