const Navbar = () => {
    
    const menuAction = () => {  
        document.querySelector('.menu').classList.toggle('hidden')
    }

    return(
        <nav className="relative px-[20px] md:static md:px-[50px] lg:px-[100px] flex justify-between items-center bg-slate-100 h-[70px]">
            <div className="nav-brand">
                <a href="#" className="text-lg font-bold">ReactFilm</a>
            </div>
            <button className="md:hidden" onClick={menuAction}>
                <i className="bi bi-list flex justify-center items-center p-2 rounded text-lg bg-slate-200 hover:bg-slate-300"></i>
            </button>
            <ul className="menu hidden w-[200px] md:w-min p-2 absolute right-5 top-[75px] text-center bg-slate-100 
                md:static md:bg-transparent md:p-0 md:items-center md:justify-between md:flex">
                <li className=""><a href="#" className="block w-full py-3 md:px-5 md:py-3 rounded hover:bg-slate-300">Trending</a></li>
                <li className=""><a href="#" className="block w-full py-3 md:px-5 md:py-3 rounded hover:bg-slate-300">Home</a></li>
                <li className=""><a href="#" className="block w-full py-3 md:px-5 md:py-3 rounded hover:bg-slate-300">Latest</a></li>
                <li className=""><a href="#" className="block w-full py-3 md:px-5 md:py-3 rounded hover:bg-slate-300">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar