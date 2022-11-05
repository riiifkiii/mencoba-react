const Hero = () => {
    return(
        <section className="hero relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <img src="https://wallpapercave.com/wp/wp4923981.jpg" alt="react-wallpaper" loading="lazy" className="absolute w-full max-h-full -z-10 object-cover"/>
            <div className="captions absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white bg-opacity-70 w-[80%] p-2 rounded">
                <h1 className="font-bold text-lg mb-3">Mencoba ReactJS untuk pertama kalinya</h1>
                <p className="text-sm">Banyak hal yang harus dipelajari</p>
            </div>
        </section>
    )
}

export default Hero