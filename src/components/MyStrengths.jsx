import React from 'react'
import yessi3 from '../media/imgs/yessi3.jpeg'

const MyStrengths = () => {
  return (
    <div id='fortalezas' className='bg-white pb-[120px]'>
      <h1 className='text-[42px] font-montserrat font-extrabold text-color1 text-center'>MIS FORTALEZAS</h1>
      <div className='mt-12 lg:flex lg:items-center lg:justify-around'>
        <ul>
          <li className='bg-container1 p-4 mt-3 m-auto w-4/5 text-center lg:w-[500px] font-poppins font-medium text-[24px]'>
            <p>Responsable, comprometida y clara con mis metas a cumplir.</p>
          </li>
          <li className='bg-container1 p-4 mt-3 m-auto w-4/5 text-center lg:w-[500px] font-poppins font-medium text-[24px]'>
            <p>Persona sociable, cariñosa y empatica.</p>
          </li>
        </ul>
        <figure className='shadow-2xl w-[90%] h-auto m-auto lg:m-0 mt-5 mb-5 sm:w-[360px] sm:h-[360px]'>
          <img src={yessi3} alt="Yessica de la Peña Mercado" className='object-cover w-full h-full'/>
        </figure>
        <ul>
          <li className='bg-container1 p-4 mt-3 m-auto w-4/5 text-center lg:w-[500px] font-poppins font-medium text-[24px]'>
            <p>Trabajadora y inteligente.</p>
          </li>
          <li className='bg-container1 p-4 mt-3 m-auto w-4/5 text-center lg:w-[500px] font-poppins font-medium text-[24px]'>
            <p>Curiosa, alegre, creativa y divertida.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyStrengths