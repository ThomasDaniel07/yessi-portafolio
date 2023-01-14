import React, {useState} from 'react'
import { GoThreeBars } from 'react-icons/go';
import logo from '../media/imgs/logo.png'
import {CgClose} from 'react-icons/cg';
import { Link } from 'react-scroll';


export const NavBar = () => {

  

  const [nav,SetNav] = useState(false);
  const [fix, setFix] = useState(false);

  const handleMenu = ()=>{
    SetNav(!nav);
  }

  const setFixed = ()=>{
    if (window.scrollY >= 850){
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll",setFixed);

  return (
    <div className={fix ? 'fixed top-0 w-full z-30 flex justify-around items-center bg-white min-h-[80px] font-["poppins"] shadow-xl' : 'sticky w-full flex justify-around items-center bg-white min-h-[80px] font-["poppins"] shadow-xl' }>

      <img src={logo} width={80} alt="" className='lg:hidden' />

      <ul className={!nav ? 'fixed top-[-100%] z-0 w-full flex flex-col items-center duration-500 ease-in-out lg:relative lg:w-auto lg:top-0 lg:z-30 lg:dark:text-white lg:text-black lg:flex-row font-semibold text-xl' : 'font-semibold fixed z-0 top-[80px] text-xl h-screen lg:h-auto flex flex-col items-center bg-[#332a43] lg:bg-white w-full text-white duration-500 ease-in-out lg:dark:bg-transparent lg:dark:text-white lg:relative lg:w-auto lg:top-0 lg:z-30 lg:text-black lg:flex-row'}>
        <Link to='inicio' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element1'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Inicio</li></Link>
        <Link to='sobreMi' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element2'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Sobre mi</li></Link>
        <Link to='fortalezas' spy={true} smooth={true} offset={-200} duration={800}><li key={'nav_element3'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Mis fortalezas</li></Link>
        <Link to='experiencia' spy={true} smooth={true} offset={-100} duration={800}><li key={'nav_element7'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Experiencia / Educacion</li></Link>
        <Link to='contacto' spy={true} smooth={true} offset={-100} duration={800}><li key={'nav_element8'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Contactame</li></Link>
        <Link to='resumen' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element4'} onClick={handleMenu} className='hover:text-violet-400 p-4 mt-2 cursor-pointer'>Blog</li></Link>
      </ul>

      <div className='block z-50 duration-500 cursor-pointer ease-linear lg:hidden' onClick={handleMenu}>

        {!nav ? <GoThreeBars size={40}/> : <CgClose size={40} className='text-black'/>}
        
      </div>
    </div>
  )
}
