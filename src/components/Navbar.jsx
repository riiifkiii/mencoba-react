const Navbar = () => {
    return(
        <nav className="px-[100px] flex justify-between items-center bg-slate-100 h-[70px]">
            <div className="nav-brand">
                <a href="#" className="text-lg font-bold">ReactFilm</a>
            </div>
            <ul className="h-full flex items-center justify-between">
                <li><a href="#" className="px-5 py-3 rounded hover:bg-slate-200">Trending</a></li>
                <li><a href="#" className="px-5 py-3 rounded hover:bg-slate-200">Home</a></li>
                <li><a href="#" className="px-5 py-3 rounded hover:bg-slate-200">Latest</a></li>
                <li><a href="#" className="px-5 py-3 rounded hover:bg-slate-200">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar