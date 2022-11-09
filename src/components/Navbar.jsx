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
    <nav className='px-5 py-3 bg-slate-900 flex items-center justify-between gap-2'>
        <div className="navbar-brand flex-1">
            <a href="" className='text-white text-lg font-bold'>Movies<span className=' text-red-500'>DB</span></a>
        </div>
        <div className="menu relative">
            <button className='flex items-center justify-center border border-white w-8 h-8 text-xl text-white rounded' onClick={menu}><CiSliderHorizontal /></button>
            <ul className='menu-link hidden absolute right-0 top-10 bg-white rounded p-2 w-[300px] text-center'>
                <li><a href="" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded'>Movies</a></li>
                <li><a href="" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded'>Tv Series</a></li>
                <li><a href="" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded'>Actors</a></li>
                <li><a href="" className='block hover:bg-red-500 hover:text-white w-full h-full p-2 rounded'>Categroies</a></li>
            </ul>
        </div>
        <div className="search-bar">
            <button className='search flex items-center justify-center bg-red-500 hover:bg-red-600 w-8 h-8 text-xl text-white rounded' onClick={search}><CiSearch /></button>
            <div className="search-screen hidden absolute top-0 left-0 px-5 bg-red-500 w-full h-full text-center pt-10">
                <h2 className='text-white text-2xl font-bold uppercase mb-5'>Search</h2>
                <input type="text" className='rounded h-10 w-[80%] text-center' placeholder='Movies, Tv Show and Actors'/>
                <button className="close absolute right-5 top-3 text-xl text-white hover:border border-white w-8 h-8 rounded flex items-center justify-center" onClick={search}><CiMedicalCross className='rotate-[45deg]' /></button>
            </div>
        </div>
    </nav>
  )
}
