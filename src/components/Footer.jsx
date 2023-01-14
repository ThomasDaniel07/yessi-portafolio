import React from 'react'
import {BsFacebook, BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='flex justify-around flex-wrap p-4 bg-gray-100 dark:bg-slate-800'>
      <p className='dark:text-white font-["poppins"] text-center'>Portafolio personal creado por <span className='text-violet-500'>Yessi de la Peña Mercado</span> @ 2023</p>
      <ul className='flex items-center text-zinc-900 dark:text-white mt-2'>
        <li key={'social_media_facebook'} className='ml-3 cursor-pointer hover:text-violet-500'>
          <a href="https://www.facebook.com/pprinsesa" rel='noreferrer' target={'_blank'} className=''>
            <BsFacebook size={30} />
          </a>
        </li>
        <li key={'social_media_instagram'} className='ml-3 cursor-pointer hover:text-violet-500'>
          <a href="https://www.instagram.com/yessidlp2005/" rel='noreferrer' target={'_blank'} className=''>
            <BsInstagram size={30} />
          </a>
        </li>

      </ul>
    </div>
  )
}
