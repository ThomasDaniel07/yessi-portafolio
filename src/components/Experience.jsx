import React from 'react'
import Exp  from './sub_components/Exp'


const Experience = () => {
  return (
    <div id='experiencia' className='bg-gradient-to-b from-[#ffffff] via-[#B3A0FF] to-[#ae99ff] pt-[80px] pb-24 flex flex-col flex-wrap lg:flex-nowrap justify-around '>
      <div className='flex flex-col items-center'>
        <h3 className='text-[40px] font-black tracking-widest text-color1 text-center font-montserrat'>Experiencia / Educacion</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-violet-600 '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-violet-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>
      <div className='w-4/5 mt-12 flex flex-col lg:flex-row justify-around m-auto'>
        <div className='mt-10 lg:mt-0 lg:w-2/5'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold text-color1 font-poppins'>Experiencia</h3>
            <div className='flex flex-col mt-1'>
              <span className='w-28 h-[2px] bg-white'></span>
              <span className='w-14 h-[2px] mt-1 bg-zinc-900 dark:bg-white'></span>
            </div>
          </div>
          <Exp 
            date='Feb 2022 – Actualmente | Barranquilla, Colombia'
            work='Auxiliar de kinder'
            descrip = 'Realizado en el colegio tal tal tal .'
          />
          <Exp
            date='Ene 2021 - Año lectivo'
            work = 'Participacion en proyectos con el ministerio de educacion'
            descrip = 'He creado páginas web con todas las especificaciones y parámetros, teniendo en cuenta la necesidad del cliente.'
          />
        </div>
        <div className='lg:w-2/5 mt-6'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold text-color1 font-poppins drop-shadow-lg'>Educacion</h3>
            <div className='flex flex-col mt-1'>
              <span className='w-28 h-[2px] bg-white'></span>
              <span className='w-14 h-[2px] mt-1 bg-zinc-900 dark:bg-white'></span>
            </div>
          </div>
          <Exp 
            date='2022 - Actualmente | Barranquilla, Colombia' 
            work='Estudiante de Psicologia'
            descrip='Cursando actualmente en la CUC (Universidad de la Costa)'
          />
          <Exp
            date ='2020 - 2021 Barranquilla | Barranquilla, Colombia'
            work = 'Técnica en análisis de muestras químicas'
            descrip = 'Realizado en el Servicio Nacional de Aprendizaje (SENA), Atlántico'
          />
          <Exp 
            date = '2021 | Barranquilla, Colombia'
            work = 'Estrategias para el mejoramiento de la comprensión lectora'
            descrip = 'Realizado en el Servicio Nacional de Aprendizaje (SENA), Atlántico'
          />
          <Exp 
            date = '2018 - 2021 | Barranquilla, Colombia'
            work = 'Bachiller Académico'
            descrip = 'Realizado en la Institucion Educativa Distrital San Jose.'
          />
          <Exp 
            date = "2020 | Barranquilla, Colombia"
            work = "Programa de comunicacion escolar - periodismo"
            descrip = "Realizado en el Universidad Autonoma del Caribe"
          />
        </div>
      </div>
    </div>
  )
}

export default Experience