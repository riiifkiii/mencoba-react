import React from 'react'
import {CiSliderHorizontal, CiSearch, CiMedicalCross} from 'react-icons/ci'

export default function Navbar() {

    const menu = () => {
        document.querySelector('.menu-link').classList.toggle('hidden')
    }

    const search = () => {
        document.querySelector('.search-screen').classList.toggle('hidden')
    }

  return (
    <nav className='px-5 h-[60px] bg-slate-900 flex items-center justify-between gap-2 md:px-10 lg:px-16'>
        <div className="navbar-brand flex-1">
            <a href="" className='text-white text-lg font-bold md:text-xl lg:text-2xl'>Movies<span className=' text-red-500'>DB</span></a>
        </div>
        <div className="menu relative">
            <button className='flex items-center justify-center border border-white w-8 h-8 text-xl text-white rounded md:hidden' onClick={menu}><CiSliderHorizontal /></button>
            <ul className='menu-link hidden absolute right-0 top-10 bg-white rounded p-2 w-[300px] text-center md:static md:bg-transparent md:text-white md:flex md:items-center md:w-full'>
                <li><a href="#" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded md:px-5'>Movies</a></li>
                <li><a href="#" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded md:px-5'>Tv Series</a></li>
                <li><a href="#" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded md:px-5'>Actors</a></li>
                <li><a href="#" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded md:px-5'>Categroies</a></li>
            </ul>
        </div>
        <div className="search-bar">
            <button className='search flex items-center justify-center bg-red-500 hover:bg-red-600 w-8 h-8 text-xl text-white rounded' onClick={search}><CiSearch /></button>
            <div className="search-screen hidden absolute top-0 left-0 px-5 bg-red-500 w-full h-full text-center pt-10 z-20">
                <h2 className='text-white text-2xl font-bold uppercase mb-5'>Search</h2>
                <input type="text" className='search-field rounded h-10 w-[80%] text-center md:w-[60%]' placeholder='Movies, Tv Show and Actors'/>
                <button className="close absolute right-5 md:right-10 lg:right-16 top-4 text-xl text-white hover:border border-white w-8 h-8 rounded flex items-center justify-center" onClick={search}><CiMedicalCross className='rotate-[45deg]' /></button>
            </div>
        </div>
    </nav>
  )
}
