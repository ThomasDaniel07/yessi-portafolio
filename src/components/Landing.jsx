import React from 'react'
import yessi1 from '../media/imgs/yessi1.jpeg';
import logo from '../media/imgs/logo.png'
import { TiArrowDownThick } from 'react-icons/ti'

const Landing = () => {
  return (
    <div id='inicio' className='bg-[#F6B2FF] pb-[30px] lg:pb-0 flex flex-col lg:flex-row'>
      <figure className='h-[429px] lg:h-[703px] lg:w-[85%] w-full relative'>
        <img src={yessi1} alt="" className='h-full object-cover w-full'/>
        <TiArrowDownThick size={50} className='text-white m-auto relative top-[-38px] animate-bounce bg-violet-600 rounded-full lg:hidden'/>
      </figure>
      <div className='mt-4 font-[poppins] flex flex-col justify-end lg:pb-[100px] relative lg:mt-4 lg:p-2'>
        <img src={logo} alt="" className='hidden lg:block absolute top-0 left-[-90px] w-[230px]' />
        <h1 className='font-pt text-[48px] lg:text-[64px] text-center lg:text-start lg:pl-6'>YESSICA DE LA <br className='hidden lg:block' /> PEÑA</h1>
        <p className='text-[36px] text-center lg:text-start lg:pl-6'>Psicóloga</p>
        <p className='mt-6 pl-8 pr-8 lg:pl-6 lg:pr-6 text-center md:text-justify text-[20px]'>Soy una persona comprometida, interesada por las ciencias de la psicología y la investigación. Con un carácter resiliente para el crecimiento profesional, educativo y laboral, perfil alto en valores como la empatía, compromiso, responsabilidad e integridad.</p>
      </div>
    </div>
  )
}

export default Landing