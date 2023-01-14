import React, {useState} from 'react'
import swal from 'sweetalert';
import yessi4 from '../media/imgs/yessi4.jpeg'


export const Contact = () => {

  const [inputs,setInputs] = useState({
    "nombre":"",
    "correo":"",
    "mensaje":""
  })

  const handleChange = (event)=>{

    const name = event.target.name;

    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))

    console.log(inputs);

  }

  const alertSubmit = (data)=>{
    if (data.message === "The form was submitted successfully.") {
      swal({
        title: "Formulario enviado con exito !",
        text: "Muchas gracias por tu mensaje",
        icon: "success",
      });
      setInputs({})
    }else {
      swal("oh!, hubo un error", "Porfavor intente de nuevo", "error");
    }
  }

  const handlerSubmit = (event)=>{

    event.preventDefault();

    if (inputs.nombre.length === 0 || inputs.correo.length === 0 || inputs.mensaje.length === 0) {
      swal("oh!, te faltaron datos", "Porfavor llene todos los datos", "error");
    }else {
      fetch("https://formsubmit.co/ajax/thomasdanieljose@gmail.com",{
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: inputs.nombre,
          correo: inputs.correo,
          mensaje: inputs.mensaje
        })
      })
        .then(response => response.json())
        .then(data => alertSubmit(data))
        .catch(error => console.log(error));
  
      event.target.reset();
    }

  }

  return (
    <div className='pt-20 pb-[120px] bg-gradient-to-b from-[#ae99ff] to-white font-["poppins"]' id='contacto'>

      <div className='flex flex-col items-center '>
        <h3 className='text-4xl sm:text-5xl font-extrabold tracking-widest font-montserrat text-white drop-shadow-xl'>CONTACTAME</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-white '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-white'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>


      <div className='flex flex-wrap justify-around items-center mt-14 '>

        <figure className='w-[300px] lg: h-[300px] lg:h-[450px] lg:rounded-none shadow-2xl shadow-violet-400 rounded-full'>
          <img src={yessi4} alt="" className='object-cover w-full h-full rounded-full lg:rounded-none' />
        </figure>
        
        <form method='POST' onSubmit={handlerSubmit} className='w-[90%] mt-5 lg:mt-0 lg:w-1/2 lg:ml-4 flex flex-col'>
          
          <div className='flex justify-around'>

            <input type="text" name='nombre' onChange={handleChange}  placeholder='Tu nombre...' className='outline-none w-4/5 mr-3 p-2 border-2 border-violet-500 duration-200 focus:shadow-2xl focus:shadow-violet-500 rounded-xl'/>

            <input type="email" name="correo" onChange={handleChange}  placeholder='Tu correo...' className='outline-none w-4/5 p-2 border-2 border-violet-500 duration-200 focus:shadow-2xl focus:shadow-violet-500 rounded-xl'/>

          </div>

          <textarea name="mensaje" id="" onChange={handleChange} cols="30" rows="10" placeholder='Tu mensaje...' className='outline-none min-h-[300px] max-h-[300px] min-w-full max-w-full mt-4 p-2 border-2 border-violet-500 rounded-xl duration-200 focus:shadow-2xl focus:shadow-violet-500'></textarea>

          <button className='text-blue-50 font-["montserrat"] mt-8 duration-300 bg-violet-900 hover:bg-violet-400 hover:text-white font-semibold p-3 rounded-3xl shadow-2xl focus:shadow-violet-500 lg:w-1/4 '>Enviar mensaje ♥</button>

        </form>

      </div>

    </div>
  )
}
