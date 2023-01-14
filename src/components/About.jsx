import React from 'react'
import yessi2 from '../media/imgs/yessi2.jpeg'

export const About = () => {
  return (
    <div id='sobreMi' className='bg-gradient-to-b from-[#E6AFFF] via-[#d78cf9] to-[#ffffff83] pb-[120px]'>
      <h1 className='font-montserrat tracking-widest text-[48px] font-extrabold text-[#332A43] text-center pt-12'>SOBRE MI</h1>
      <div className='lg:flex justify-center lg: mt-12'>
        <ul>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Nombre Completo</p>
            <p className='font-poppins font-semibold text-[32px] text-center text-[#332a43]'>Yessica de la Peña Mercado</p>
          </li>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Nacionalidad</p>
            <p className='font-poppins font-semibold text-[32px] text-center text-[#332a43]'>Colombiana</p>
          </li>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Cumpleaños</p>
            <p className='font-poppins font-semibold text-[32px] text-center text-[#332a43]'>25-01-2005</p>
          </li>
        </ul>
        <figure className='rounded-full bg-white p-2 w-[90%] h-auto m-auto lg:m-0 mt-5 mb-5 sm:w-[360px] sm:h-[360px]'>
          <img src={yessi2} alt="" className='rounded-full object-cover w-full h-full'/>
        </figure>
        <ul>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Direccion</p>
            <p className='font-poppins font-semibold text-[32px] text-center text-[#332a43]'>Barranquilla, Colombia</p>
          </li>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Correo</p>
            <p className='font-poppins font-semibold text-[22px] sm:text-[28px] text-center text-[#332a43] lg:pl-5'>Yessicadpl2005@gmail.com</p>
          </li>
          <li>
            <p className='font-montserrat font-extrabold text-white drop-shadow-lg text-[24px] text-center mt-4'>Celular</p>
            <p className='font-poppins font-semibold text-[32px] text-center text-[#332a43]'>+57 319 3448167</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
